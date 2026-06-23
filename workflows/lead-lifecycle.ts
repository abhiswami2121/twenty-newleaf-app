// Lead Lifecycle Workflows (5 of 30)
// Triggers: lead.created → qualified → credit_report.received → agreement.signed → day_zero.charged
// Templates resolved via templateRegistry from ../templates/registry

import { defineWorkflow } from 'twenty-sdk/define';
import { templateRegistry } from '../templates/registry';

// Export template map for workflow engine resolution
export const templates = {
  welcome_lead: templateRegistry.welcome_lead,
  qualification_followup: templateRegistry.qualification_followup,
  payment_success: templateRegistry.payment_success,
  welcome_enrolled: templateRegistry.welcome_enrolled,
  credit_analysis_ready: templateRegistry.welcome_enrolled, // reuse welcome as analysis notification
  standard_enrollment: templateRegistry.agreement_signed_email,
};

// ── 1. lead.created ──────────────────────────────────────────
export const leadCreatedWorkflow = defineWorkflow({
  name: 'lead-created',
  label: 'Lead Created → Welcome + Assign',
  description: 'When a new lead is created: send welcome SMS, assign to round-robin agent, start 5-day nurture sequence',
  trigger: { object: 'customerProfile', event: 'CREATED', condition: { pipelineStage: 'LEAD' } },
  actions: [
    {
      type: 'SEND_SMS',
      template: 'welcome_lead',
      to: '{{customer.phone}}',
      params: { customerName: '{{customer.firstName}}' },
    },
    {
      type: 'ASSIGN_AGENT',
      strategy: 'ROUND_ROBIN',
      roles: ['SALES_AGENT'],
    },
    {
      type: 'ENROLL_SEQUENCE',
      sequenceKey: 'lead_nurture_5day',
      delay: '5m',  // Start 5 minutes after creation
    },
    {
      type: 'CREATE_TASK',
      task: {
        title: 'Call new lead within 5 minutes',
        priority: 'HIGH',
        assignee: '{{customer.agentEmail}}',
        customerProfileId: '{{customer.id}}',
        dueDate: 'NOW_PLUS_5_MINUTES',
      },
    },
  ],
});

// ── 2. lead.qualified ────────────────────────────────────────
export const leadQualifiedWorkflow = defineWorkflow({
  name: 'lead-qualified',
  label: 'Lead Qualified → Credit Pull',
  description: 'When a lead is qualified (DOB + SSN collected): trigger DPP credit pull link',
  trigger: { object: 'customerProfile', event: 'UPDATED', condition: { pipelineStage: 'QUALIFIED' } },
  actions: [
    {
      type: 'SEND_SMS',
      template: 'qualification_followup',
      to: '{{customer.phone}}',
      params: { dppLink: '{{connectors.dpp.creditPullUrl}}' },
    },
    {
      type: 'CREATE_TASK',
      task: {
        title: 'Pull credit report via DPP',
        priority: 'HIGH',
        assignee: '{{customer.agentEmail}}',
        customerProfileId: '{{customer.id}}',
        dueDate: 'NOW_PLUS_1_HOUR',
      },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'PIPELINE_STAGE_CHANGE',
        title: 'Lead Qualified',
        description: 'Customer moved to QUALIFIED stage. Credit pull pending.',
        source: 'WORKFLOW',
        customerProfileId: '{{customer.id}}',
      },
    },
  ],
});

// ── 3. credit_report.received ────────────────────────────────
export const creditReportReceivedWorkflow = defineWorkflow({
  name: 'credit-report-received',
  label: 'Credit Report Received → Analysis + Agreement',
  description: 'When credit report comes in: trigger analysis, generate agreement, notify agent',
  trigger: { object: 'creditReport', event: 'CREATED' },
  actions: [
    {
      type: 'UPDATE_OBJECT',
      object: 'customerProfile',
      id: '{{creditReport.customerProfileId}}',
      data: { pipelineStage: 'ANALYZED' },
    },
    {
      type: 'CREATE_TASK',
      task: {
        title: 'Review credit analysis for {{customer.firstName}} {{customer.lastName}}',
        priority: 'HIGH',
        assignee: '{{customer.agentEmail}}',
        customerProfileId: '{{creditReport.customerProfileId}}',
        dueDate: 'NOW_PLUS_2_HOURS',
      },
    },
    {
      type: 'SEND_EMAIL',
      template: 'credit_analysis_ready',
      to: '{{customer.email}}',
      params: {
        customerName: '{{customer.firstName}}',
        bureau: '{{creditReport.bureau}}',
        score: '{{creditReport.score}}',
        negativeItems: '{{creditReport.negativeItemCount}}',
      },
    },
    {
      type: 'GENERATE_AGREEMENT',
      customerProfileId: '{{creditReport.customerProfileId}}',
      template: 'standard_enrollment',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'CREDIT_REPORT_RECEIVED',
        title: 'Credit Report Received',
        description: '{{creditReport.bureau}} report: {{creditReport.score}} score, {{creditReport.negativeItemCount}} negative items',
        source: 'DPP',
        customerProfileId: '{{creditReport.customerProfileId}}',
      },
    },
  ],
});

// ── 4. agreement.signed ──────────────────────────────────────
export const agreementSignedWorkflow = defineWorkflow({
  name: 'agreement-signed',
  label: 'Agreement Signed → Create Subscription + Onboard',
  description: 'When customer signs agreement: create NMI subscription, send onboarding email, move to ENROLLED_PENDING',
  trigger: { object: 'agreement', event: 'UPDATED', condition: { status: 'SIGNED' } },
  actions: [
    {
      type: 'UPDATE_OBJECT',
      object: 'customerProfile',
      id: '{{agreement.customerProfileId}}',
      data: { pipelineStage: 'ENROLLED_PENDING' },
    },
    {
      type: 'API_CALL',
      connector: 'NMI',
      method: 'CREATE_SUBSCRIPTION',
      params: {
        customerProfileId: '{{agreement.customerProfileId}}',
        planAmount: '{{customer.paymentAmount}}',
        initialDelay: 'DAY_0',
      },
    },
    {
      type: 'SEND_EMAIL',
      template: 'welcome_enrolled',
      to: '{{customer.email}}',
      params: {
        customerName: '{{customer.firstName}}',
        planAmount: '{{customer.paymentAmount}}',
        agentName: '{{customer.agentEmail}}',
      },
    },
    {
      type: 'SCHEDULE_EVENT',
      event: 'day_zero_charge_check',
      at: 'NOW_PLUS_1_MINUTE',
      params: { customerProfileId: '{{agreement.customerProfileId}}' },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'AGREEMENT_SIGNED',
        title: 'Agreement Signed',
        description: 'Customer signed enrollment agreement. Subscription pending.',
        source: 'WORKFLOW',
        customerProfileId: '{{agreement.customerProfileId}}',
      },
    },
  ],
});

// ── 5. day_zero.charged ──────────────────────────────────────
export const dayZeroChargedWorkflow = defineWorkflow({
  name: 'day-zero-charged',
  label: 'Day 0 Charge Success → Active Service',
  description: 'When Day 0 charge succeeds: move to ACTIVE_SERVICE, send onboarding sequence, celebrate',
  trigger: { object: 'billingEvent', event: 'CREATED', condition: { status: 'success', type: 'DAY_ZERO' } },
  actions: [
    {
      type: 'UPDATE_OBJECT',
      object: 'customerProfile',
      id: '{{billingEvent.customerProfileId}}',
      data: { pipelineStage: 'ACTIVE_SERVICE', enrolledAt: 'NOW' },
    },
    {
      type: 'SEND_SMS',
      template: 'payment_success',
      to: '{{customer.phone}}',
      params: { amount: '{{billingEvent.amount}}', nextDate: 'NOW_PLUS_30_DAYS' },
    },
    {
      type: 'ENROLL_SEQUENCE',
      sequenceKey: 'onboarding_30day',
      delay: '1h',
    },
    {
      type: 'CREATE_TASK',
      task: {
        title: 'Begin Round 1 disputes for {{customer.firstName}} {{customer.lastName}}',
        priority: 'MEDIUM',
        assignee: 'dispute-specialist',
        customerProfileId: '{{billingEvent.customerProfileId}}',
        dueDate: 'NOW_PLUS_3_DAYS',
      },
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '💰 New enrollment: {{customer.firstName}} {{customer.lastName}} — {{billingEvent.amount}}/mo (MRR +{{billingEvent.amount}})',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'ENROLLMENT_COMPLETE',
        title: 'Enrollment Complete',
        description: 'Day 0 charge of {{billingEvent.amount}} successful. Customer now ACTIVE.',
        source: 'NMI',
        customerProfileId: '{{billingEvent.customerProfileId}}',
      },
    },
  ],
});
