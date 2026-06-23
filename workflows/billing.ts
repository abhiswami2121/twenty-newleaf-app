// Billing Workflows (5 of 30)
// Triggers: payment.success → declined_soft → declined_hard → card.expiring → subscription.cancelled
// Templates resolved via templateRegistry from ../templates/registry

import { defineWorkflow } from 'twenty-sdk/define';
import { templateRegistry } from '../templates/registry';

export const templates = {
  payment_success: templateRegistry.payment_success,
  payment_declined: templateRegistry.payment_declined,
  recovery_link: templateRegistry.recovery_link,
  card_expiring: templateRegistry.card_expiring,
  ach_failed: templateRegistry.ach_failed,
  account_paused: templateRegistry.account_paused,
  billing_recovery: templateRegistry.billing_recovery,
  payment_failed: templateRegistry.payment_failed,
};

// ── 6. payment.success ───────────────────────────────────────
export const paymentSuccessWorkflow = defineWorkflow({
  name: 'payment-success',
  label: 'Payment Success → Receipt + Timeline Update',
  description: 'On any successful payment: send receipt SMS, update score timeline, log activity',
  trigger: { object: 'billingEvent', event: 'CREATED', condition: { status: 'success', type: { not: 'DAY_ZERO' } } },
  actions: [
    {
      type: 'SEND_SMS',
      template: 'payment_success',
      to: '{{customer.phone}}',
      params: {
        amount: '{{billingEvent.amount}}',
        nextDate: 'NOW_PLUS_30_DAYS',
      },
    },
    {
      type: 'UPDATE_OBJECT',
      object: 'customerProfile',
      id: '{{billingEvent.customerProfileId}}',
      data: { lastSuccessfulPaymentAt: 'NOW', lastPaymentAmount: '{{billingEvent.amount}}' },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'PAYMENT_SUCCESS',
        title: 'Payment Processed',
        description: '{{billingEvent.amount}} charged successfully via {{billingEvent.paymentMethod}}',
        source: 'NMI',
        customerProfileId: '{{billingEvent.customerProfileId}}',
      },
    },
  ],
});

// ── 7. payment.declined_soft ─────────────────────────────────
export const paymentDeclinedSoftWorkflow = defineWorkflow({
  name: 'payment-declined-soft',
  label: 'Payment Declined (Soft) → Smart Retry + Alert',
  description: 'On soft decline (insufficient_funds, processor_error): retry in 3 days, alert customer gently',
  trigger: {
    object: 'billingEvent',
    event: 'CREATED',
    condition: {
      status: 'declined',
      declineReason: { in: ['insufficient_funds', 'do_not_honor', 'processor_error', 'generic_decline'] },
    },
  },
  actions: [
    {
      type: 'SCHEDULE_EVENT',
      event: 'retry_payment',
      at: 'NOW_PLUS_3_DAYS',
      params: {
        customerProfileId: '{{billingEvent.customerProfileId}}',
        amount: '{{billingEvent.amount}}',
        attemptNumber: 1,
      },
    },
    {
      type: 'SEND_SMS',
      template: 'payment_declined',
      to: '{{customer.phone}}',
      params: {
        billingLink: '{{connectors.nmi.billingLinkUrl}}',
        retryDate: 'NOW_PLUS_3_DAYS',
      },
    },
    {
      type: 'CREATE_RECOVERY_ITEM',
      item: {
        customerProfileId: '{{billingEvent.customerProfileId}}',
        amount: '{{billingEvent.amount}}',
        declineReason: '{{billingEvent.declineReason}}',
        status: 'PENDING_RETRY',
        recoverySource: 'SMART_RETRY_ENGINE',
      },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'PAYMENT_DECLINED_SOFT',
        title: 'Payment Declined (Soft)',
        description: '{{billingEvent.amount}} declined: {{billingEvent.declineReason}}. Auto-retry in 3 days.',
        source: 'NMI',
        customerProfileId: '{{billingEvent.customerProfileId}}',
      },
    },
  ],
});

// ── 8. payment.declined_hard ─────────────────────────────────
export const paymentDeclinedHardWorkflow = defineWorkflow({
  name: 'payment-declined-hard',
  label: 'Payment Declined (Hard) → Recovery Queue + Urgent Task',
  description: 'On hard decline (fraud, stolen, pickup): move to RECOVERY_QUEUE, create urgent task for agent',
  trigger: {
    object: 'billingEvent',
    event: 'CREATED',
    condition: {
      status: 'declined',
      declineReason: { in: ['fraud', 'pickup_card', 'stolen_card', 'restricted_card', 'velocity_exceeded'] },
    },
  },
  actions: [
    {
      type: 'UPDATE_OBJECT',
      object: 'customerProfile',
      id: '{{billingEvent.customerProfileId}}',
      data: { pipelineStage: 'RECOVERY_QUEUE' },
    },
    {
      type: 'CREATE_TASK',
      task: {
        title: 'URGENT: Hard decline for {{customer.firstName}} {{customer.lastName}} — {{billingEvent.amount}}',
        priority: 'CRITICAL',
        assignee: '{{customer.agentEmail}}',
        customerProfileId: '{{billingEvent.customerProfileId}}',
        dueDate: 'NOW_PLUS_1_HOUR',
        description: 'Hard decline reason: {{billingEvent.declineReason}}. Customer needs new card. Call immediately.',
      },
    },
    {
      type: 'SEND_SMS',
      template: 'payment_declined_hard',
      to: '{{customer.phone}}',
      params: {
        amount: '{{billingEvent.amount}}',
        agentPhone: '{{customer.agentPhone}}',
        billingLink: '{{connectors.nmi.billingLinkUrl}}',
      },
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '🚨 HARD DECLINE: {{customer.firstName}} {{customer.lastName}} — {{billingEvent.amount}} — {{billingEvent.declineReason}}. Recovery task created.',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'PAYMENT_DECLINED_HARD',
        title: 'Payment Declined (Hard)',
        description: '{{billingEvent.amount}} hard decline: {{billingEvent.declineReason}}. Customer moved to RECOVERY_QUEUE.',
        source: 'NMI',
        customerProfileId: '{{billingEvent.customerProfileId}}',
      },
    },
  ],
});

// ── 9. card.expiring_in_30_days ──────────────────────────────
export const cardExpiringWorkflow = defineWorkflow({
  name: 'card-expiring-30-days',
  label: 'Card Expiring → SMS + Email Reminder',
  description: 'When a stored card expires within 30 days: send SMS + email reminder to update',
  trigger: { object: 'nmiVault', event: 'SCHEDULED', condition: { cardExpiryDate: 'NEXT_30_DAYS' }, schedule: '0 9 * * *' },
  actions: [
    {
      type: 'SEND_SMS',
      template: 'card_expiring',
      to: '{{customer.phone}}',
      params: {
        cardLastFour: '{{card.cardLastFour}}',
        expiryDate: '{{card.cardExpiryDate}}',
        updateLink: '{{connectors.nmi.cardUpdateUrl}}',
      },
    },
    {
      type: 'SEND_EMAIL',
      template: 'card_expiring',
      to: '{{customer.email}}',
      params: {
        customerName: '{{customer.firstName}}',
        cardLastFour: '{{card.cardLastFour}}',
        expiryDate: '{{card.cardExpiryDate}}',
        updateLink: '{{connectors.nmi.cardUpdateUrl}}',
      },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'CARD_EXPIRING',
        title: 'Card Expiring Soon',
        description: 'Card ending in {{card.cardLastFour}} expires {{card.cardExpiryDate}}. Reminder sent.',
        source: 'NMI',
        customerProfileId: '{{card.customerProfileId}}',
      },
    },
  ],
});

// ── 10. subscription.cancelled ───────────────────────────────
export const subscriptionCancelledWorkflow = defineWorkflow({
  name: 'subscription-cancelled',
  label: 'Subscription Cancelled → Win-Back + Churn Analysis',
  description: 'When a subscription is cancelled: send win-back offer, move to CHURNED, log churn reason',
  trigger: { object: 'nmiSubscription', event: 'UPDATED', condition: { status: 'CANCELLED' } },
  actions: [
    {
      type: 'UPDATE_OBJECT',
      object: 'customerProfile',
      id: '{{subscription.customerProfileId}}',
      data: { pipelineStage: 'CHURNED', churnedAt: 'NOW', churnReason: '{{subscription.cancelReason}}' },
    },
    {
      type: 'SEND_EMAIL',
      template: 'win_back_offer',
      to: '{{customer.email}}',
      params: {
        customerName: '{{customer.firstName}}',
        reactivationLink: '{{connectors.ghl.winBackUrl}}',
        offerDiscount: '25%',
      },
    },
    {
      type: 'ENROLL_SEQUENCE',
      sequenceKey: 'win_back_30day',
      delay: '3d',
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '📉 Churn: {{customer.firstName}} {{customer.lastName}} cancelled. Reason: {{subscription.cancelReason}}. Win-back sequence started.',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'SUBSCRIPTION_CANCELLED',
        title: 'Subscription Cancelled',
        description: 'Customer cancelled: {{subscription.cancelReason}}. Win-back offer sent.',
        source: 'NMI',
        customerProfileId: '{{subscription.customerProfileId}}',
      },
    },
  ],
});
