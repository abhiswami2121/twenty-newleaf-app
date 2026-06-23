// Recovery Workflows (3 of 30)
// Triggers: recovery.email_sent → fully_recovered → recovery.lost
// Templates resolved via templateRegistry from ../templates/registry

import { defineWorkflow } from 'twenty-sdk/define';
import { templateRegistry } from '../templates/registry';

export const templates = {
  recovery_link: templateRegistry.recovery_link,
  account_paused: templateRegistry.account_paused,
  billing_recovery: templateRegistry.billing_recovery,
  payment_declined: templateRegistry.payment_declined,
  win_back: templateRegistry.win_back,
  win_back_email: templateRegistry.win_back_email,
};

// ── 28. recovery.email_sent ──────────────────────────────────
export const recoveryEmailSentWorkflow = defineWorkflow({
  name: 'recovery-email-sent',
  label: 'Recovery Email Sent → Track Opens + Follow-up',
  description: 'When a recovery email/billing link is sent: track opens and clicks, schedule follow-up',
  trigger: { object: 'recoveryItem', event: 'UPDATED', condition: { status: 'CONTACTED' } },
  actions: [
    {
      type: 'SCHEDULE_EVENT',
      event: 'recovery_follow_up',
      at: 'NOW_PLUS_3_DAYS',
      params: {
        recoveryItemId: '{{recoveryItem.id}}',
        customerProfileId: '{{recoveryItem.customerProfileId}}',
      },
    },
    {
      type: 'CREATE_TASK',
      task: {
        title: 'Follow up recovery: {{customer.firstName}} {{customer.lastName}} — {{recoveryItem.amount}}',
        priority: 'HIGH',
        assignee: 'BILLING_SPECIALIST',
        customerProfileId: '{{recoveryItem.customerProfileId}}',
        dueDate: 'NOW_PLUS_3_DAYS',
        description: 'Recovery link sent. Track open/click. If no response, call customer.',
      },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'RECOVERY_OUTREACH',
        title: 'Recovery Email Sent',
        description: 'Recovery link sent for {{recoveryItem.amount}}. Follow-up due in 3 days.',
        source: 'RECOVERY',
        customerProfileId: '{{recoveryItem.customerProfileId}}',
      },
    },
  ],
});

// ── 29. recovery.fully_recovered ─────────────────────────────
export const recoveryFullyRecoveredWorkflow = defineWorkflow({
  name: 'recovery-fully-recovered',
  label: 'Fully Recovered → Back to Active Service',
  description: 'When a recovery item is fully paid: move customer back to ACTIVE_SERVICE, celebrate, close recovery item',
  trigger: { object: 'recoveryItem', event: 'UPDATED', condition: { status: 'RECOVERED' } },
  actions: [
    {
      type: 'UPDATE_OBJECT',
      object: 'customerProfile',
      id: '{{recoveryItem.customerProfileId}}',
      data: {
        pipelineStage: 'ACTIVE_SERVICE',
        lastRecoveryAt: 'NOW',
        recoveryCount: 'INCREMENT',
      },
    },
    {
      type: 'UPDATE_OBJECT',
      object: 'recoveryItem',
      id: '{{recoveryItem.id}}',
      data: { resolvedAt: 'NOW' },
    },
    {
      type: 'SEND_SMS',
      template: 'payment_recovered',
      to: '{{customer.phone}}',
      params: {
        amount: '{{recoveryItem.amount}}',
        nextDate: '{{customer.nextBillingDate}}',
      },
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '✅ RECOVERED: {{customer.firstName}} {{customer.lastName}} — {{recoveryItem.amount}} — Back to ACTIVE. Recovery #{count}.',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'RECOVERY_SUCCESS',
        title: 'Recovery Successful',
        description: 'Recovered {{recoveryItem.amount}}. Customer returned to ACTIVE_SERVICE.',
        source: 'NMI',
        customerProfileId: '{{recoveryItem.customerProfileId}}',
      },
    },
  ],
});

// ── 30. recovery.lost ────────────────────────────────────────
export const recoveryLostWorkflow = defineWorkflow({
  name: 'recovery-lost',
  label: 'Recovery Lost → Churned + Win-Back List',
  description: 'When recovery fails after all attempts: mark as CHURNED, add to win-back list, log churn',
  trigger: { object: 'recoveryItem', event: 'UPDATED', condition: { status: 'LOST', attempts: { gte: 3 } } },
  actions: [
    {
      type: 'UPDATE_OBJECT',
      object: 'customerProfile',
      id: '{{recoveryItem.customerProfileId}}',
      data: {
        pipelineStage: 'CHURNED',
        churnedAt: 'NOW',
        churnReason: 'RECOVERY_FAILED',
      },
    },
    {
      type: 'UPDATE_OBJECT',
      object: 'recoveryItem',
      id: '{{recoveryItem.id}}',
      data: { resolvedAt: 'NOW' },
    },
    {
      type: 'ENROLL_SEQUENCE',
      sequenceKey: 'win_back_60day',
      delay: '30d',
    },
    {
      type: 'SEND_EMAIL',
      template: 'win_back_offer',
      to: '{{customer.email}}',
      params: {
        customerName: '{{customer.firstName}}',
        reactivationLink: '{{connectors.ghl.winBackUrl}}',
        offerDiscount: '50%',
      },
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '💔 RECOVERY LOST: {{customer.firstName}} {{customer.lastName}} — {{recoveryItem.amount}} after {{recoveryItem.attempts}} attempts. Churned. Win-back sequence in 30 days.',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'RECOVERY_LOST',
        title: 'Recovery Failed — Customer Churned',
        description: 'Recovery of {{recoveryItem.amount}} failed after {{recoveryItem.attempts}} attempts. Customer marked as CHURNED.',
        source: 'RECOVERY',
        customerProfileId: '{{recoveryItem.customerProfileId}}',
      },
    },
  ],
});
