// Operations Workflows (8 of 30)
// Triggers: slack_submission.parsed → support_ticket.created → sla_breached
// → vapi_transfer.received → call.missed → daily_3am → monthly_1st → referral.signup
// Templates resolved via templateRegistry from ../templates/registry

import { defineWorkflow } from 'twenty-sdk/define';
import { templateRegistry } from '../templates/registry';

export const templates = {
  missed_call: templateRegistry.missed_call,
  ticket_resolved: templateRegistry.ticket_resolved,
  monthly_statement_ready: templateRegistry.monthly_statement_ready,
  monthly_statement: templateRegistry.monthly_statement,
  referral_thanks: templateRegistry.referral_thanks,
  referral_thanks_email: templateRegistry.referral_thanks_email,
  appointment_reminder: templateRegistry.appointment_reminder,
  missing_doc: templateRegistry.missing_doc,
  agreement_signed: templateRegistry.agreement_signed,
};

// ── 20. slack_submission.parsed ──────────────────────────────
export const slackSubmissionParsedWorkflow = defineWorkflow({
  name: 'slack-submission-parsed',
  label: 'Slack Submission Parsed → Auto-Match + Create Customer',
  description: 'When a new Slack submission is parsed: try auto-matching to existing customer, create if no match',
  trigger: { object: 'slackSubmission', event: 'CREATED' },
  actions: [
    {
      type: 'AUTO_MATCH',
      object: 'customerProfile',
      fields: ['firstName', 'lastName', 'email', 'phone'],
      against: '{{slackSubmission.content}}',
      onMatch: {
        action: 'LINK',
        field: 'customerProfileId',
      },
      onNoMatch: {
        action: 'CREATE',
        object: 'customerProfile',
        data: {
          firstName: '{{slackSubmission.extractedFirstName}}',
          lastName: '{{slackSubmission.extractedLastName}}',
          phone: '{{slackSubmission.extractedPhone}}',
          email: '{{slackSubmission.extractedEmail}}',
          pipelineStage: 'LEAD',
          source: 'SLACK',
        },
      },
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '📝 New Slack submission: {{slackSubmission.channel}} — {{slackSubmission.summary}} (auto-matched: {{matchResult}})',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'SLACK_SUBMISSION',
        title: 'Slack Submission Processed',
        description: 'Auto-match result: {{matchResult}}. Submission from {{slackSubmission.channel}}.',
        source: 'SLACK',
        customerProfileId: '{{matchResult.customerProfileId}}',
      },
    },
  ],
});

// ── 21. support_ticket.created ───────────────────────────────
export const supportTicketCreatedWorkflow = defineWorkflow({
  name: 'support-ticket-created',
  label: 'Support Ticket Created → Auto-Assign + SLA + Alert',
  description: 'When a support ticket is created: auto-assign by category, set SLA timer, notify Slack',
  trigger: { object: 'supportTicket', event: 'CREATED' },
  actions: [
    {
      type: 'ASSIGN_BY_CATEGORY',
      mapping: {
        billing: 'BILLING_SPECIALIST',
        dispute: 'DISPUTE_SPECIALIST',
        enrollment: 'ENROLLING_AGENT',
        technical: 'ADMIN',
        refund: 'BILLING_SPECIALIST',
        cancellation: 'ENROLLING_AGENT',
        general: 'SUPPORT_GENERAL',
      },
    },
    {
      type: 'SET_SLA',
      priority: '{{supportTicket.priority}}',
      slaRules: {
        critical: { respond: '30m', resolve: '4h' },
        high: { respond: '1h', resolve: '8h' },
        medium: { respond: '4h', resolve: '24h' },
        low: { respond: '8h', resolve: '72h' },
      },
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '🎫 New ticket #{{supportTicket.id}}: {{supportTicket.title}} — Priority: {{supportTicket.priority}} — Assigned: {{assignedAgent}}',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'TICKET_CREATED',
        title: 'Support Ticket Created',
        description: 'Ticket #{{supportTicket.id}}: {{supportTicket.title}}. Category: {{supportTicket.category}}. Assigned: {{assignedAgent}}.',
        source: 'SUPPORT',
        customerProfileId: '{{supportTicket.customerProfileId}}',
      },
    },
  ],
});

// ── 22. support_ticket.sla_breached ──────────────────────────
export const supportTicketSLABreachWorkflow = defineWorkflow({
  name: 'support-ticket-sla-breach',
  label: 'SLA Breached → Escalate to Admin',
  description: 'When a support ticket breaches its SLA: escalate to admin, notify Slack urgently',
  trigger: { object: 'supportTicket', event: 'SCHEDULED', condition: { slaDeadline: 'TODAY', status: { not: 'RESOLVED' } }, schedule: '*/15 * * * *' },
  actions: [
    {
      type: 'UPDATE_OBJECT',
      object: 'supportTicket',
      id: '{{ticket.id}}',
      data: { priority: 'CRITICAL' },
    },
    {
      type: 'ASSIGN_AGENT',
      strategy: 'SPECIFIC',
      assignee: 'admin',
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '🚨 SLA BREACH: Ticket #{{ticket.id}} — {{ticket.title}} — {{ticket.category}}. SLA was {{ticket.slaDeadline}}. Escalated to admin.',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'SLA_BREACH',
        title: 'SLA Breached',
        description: 'Ticket #{{ticket.id}} breached SLA. Escalated to admin.',
        source: 'SUPPORT',
        customerProfileId: '{{ticket.customerProfileId}}',
      },
    },
  ],
});

// ── 23. vapi_transfer.received ───────────────────────────────
export const vapiTransferReceivedWorkflow = defineWorkflow({
  name: 'vapi-transfer-received',
  label: 'VAPI Transfer Received → Open Call Summary',
  description: 'When VAPI transfers a call to an agent: log call, push summary to agent queue',
  trigger: { object: 'callEvent', event: 'CREATED', condition: { callType: 'VAPI_TRANSFER' } },
  actions: [
    {
      type: 'CREATE_TASK',
      task: {
        title: 'Review VAPI call: {{callEvent.customerProfileId}} — {{callEvent.disposition}}',
        priority: 'HIGH',
        assignee: '{{customer.agentEmail}}',
        customerProfileId: '{{callEvent.customerProfileId}}',
        dueDate: 'NOW_PLUS_30_MINUTES',
        description: 'Call summary: {{callEvent.transcriptSummary}}. Score: {{callEvent.qualificationScore}}.',
      },
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '📞 VAPI transfer: {{callEvent.customerProfileId}} — Disposition: {{callEvent.disposition}} — Score: {{callEvent.qualificationScore}}/10',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'VAPI_CALL',
        title: 'VAPI Call Transferred',
        description: 'VAPI call completed. Disposition: {{callEvent.disposition}}. Score: {{callEvent.qualificationScore}}.',
        source: 'VAPI',
        customerProfileId: '{{callEvent.customerProfileId}}',
      },
    },
  ],
});

// ── 24. call.missed ──────────────────────────────────────────
export const callMissedWorkflow = defineWorkflow({
  name: 'call-missed',
  label: 'Call Missed → Callback Task + Auto-Text',
  description: 'When an agent misses a call: create callback task, auto-text "sorry we missed you"',
  trigger: { object: 'callEvent', event: 'CREATED', condition: { disposition: 'MISSED' } },
  actions: [
    {
      type: 'CREATE_TASK',
      task: {
        title: 'Call back: {{callEvent.customerProfileId}} — missed call',
        priority: 'HIGH',
        assignee: '{{customer.agentEmail}}',
        customerProfileId: '{{callEvent.customerProfileId}}',
        dueDate: 'NOW_PLUS_1_HOUR',
      },
    },
    {
      type: 'SEND_SMS',
      template: 'missed_call',
      to: '{{customer.phone}}',
      params: {
        agentName: '{{customer.agentEmail}}',
        agentPhone: '{{customer.agentPhone}}',
        callbackWindow: '1 hour',
      },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'MISSED_CALL',
        title: 'Missed Call',
        description: 'Agent missed call from {{customer.firstName}} {{customer.lastName}}. Callback task created.',
        source: 'FRESHCALLER',
        customerProfileId: '{{callEvent.customerProfileId}}',
      },
    },
  ],
});

// ── 25. automation.daily_3am ─────────────────────────────────
export const daily3amSyncWorkflow = defineWorkflow({
  name: 'automation-daily-3am',
  label: 'Daily 3AM → Nightly Delta Sync',
  description: 'Daily maintenance: run delta sync from all 8 connectors, update record counts, health check',
  trigger: { type: 'SCHEDULED', schedule: '0 3 * * *' },
  actions: [
    {
      type: 'SYNC_CONNECTOR',
      connector: 'ALL',
      mode: 'DELTA',
    },
    {
      type: 'UPDATE_CONNECTOR_STATUS',
      connectors: ['vapi', 'freshcaller', 'ghl', 'nmi', 'hyperswitch', 'slack', 'dpp', 'base44'],
    },
    {
      type: 'CLEANUP_EXPIRED',
      objects: ['recoveryItem', 'supportTicket', 'newleafTask'],
      condition: { resolved: 'gt_90_DAYS' },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'SYSTEM',
        title: 'Daily 3AM Sync',
        description: 'Nightly delta sync completed across 8 connectors. Status report generated.',
        source: 'SYSTEM',
      },
    },
  ],
});

// ── 26. automation.monthly_1st ───────────────────────────────
export const monthly1stWorkflow = defineWorkflow({
  name: 'automation-monthly-1st',
  label: 'Monthly 1st → Statement + Health Report',
  description: 'On the 1st of each month: send statements to all active customers, generate health report',
  trigger: { type: 'SCHEDULED', schedule: '0 9 1 * *' },
  actions: [
    {
      type: 'BATCH_SEND_EMAIL',
      template: 'monthly_statement',
      to: 'ALL_ACTIVE_CUSTOMERS',
      filter: { pipelineStage: { in: ['ACTIVE_SERVICE', 'DISPUTE_ACTIVE', 'GRADUATED'] } },
    },
    {
      type: 'GENERATE_REPORT',
      reportType: 'MONTHLY_HEALTH',
      recipients: ['admin@newleaf.financial'],
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '📊 Monthly statements sent to {{activeCount}} customers. Health report generated.',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'SYSTEM',
        title: 'Monthly Statements Sent',
        description: 'Monthly statements emailed to all active customers. Health report attached.',
        source: 'SYSTEM',
      },
    },
  ],
});

// ── 27. referral.signup ──────────────────────────────────────
export const referralSignupWorkflow = defineWorkflow({
  name: 'referral-signup',
  label: 'Referral Signup → Discount + Thank Both',
  description: 'When a referred customer signs up: apply referral discount, thank both parties',
  trigger: { object: 'customerProfile', event: 'CREATED', condition: { referredBy: { exists: true } } },
  actions: [
    {
      type: 'APPLY_DISCOUNT',
      customerProfileId: '{{customer.id}}',
      discountType: 'REFERRAL',
      amount: '25%',
      duration: 'PERMANENT',
    },
    {
      type: 'SEND_EMAIL',
      template: 'referral_thanks',
      to: '{{customer.email}}',
      params: {
        customerName: '{{customer.firstName}}',
        referrerName: '{{referrer.firstName}}',
        discountApplied: '25%',
      },
    },
    {
      type: 'SEND_SMS',
      template: 'referral_thanks_referrer',
      to: '{{referrer.phone}}',
      params: {
        referrerName: '{{referrer.firstName}}',
        friendName: '{{customer.firstName}}',
      },
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '🔗 Referral signup: {{customer.firstName}} {{customer.lastName}} referred by {{referrer.firstName}} {{referrer.lastName}}. Discount applied.',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'REFERRAL',
        title: 'Referral Signup',
        description: '{{customer.firstName}} {{customer.lastName}} signed up via referral from {{referrer.firstName}} {{referrer.lastName}}.',
        source: 'WORKFLOW',
        customerProfileId: '{{customer.id}}',
      },
    },
  ],
});
