// Dispute Workflows (5 of 30)
// Triggers: dispute_round.mailed → response_received → deleted → no_response → cfpb_escalation
// Templates resolved via templateRegistry from ../templates/registry

import { defineWorkflow } from 'twenty-sdk/define';
import { templateRegistry } from '../templates/registry';

export const templates = {
  dispute_update: templateRegistry.dispute_update,
  score_celebrate: templateRegistry.score_celebrate,
  dispute_response: templateRegistry.dispute_response,
  dispute_round_1: templateRegistry.dispute_round_1,
  dispute_round_2: templateRegistry.dispute_round_2,
  dispute_round_3: templateRegistry.dispute_round_3,
  dispute_round_complete: templateRegistry.dispute_round_complete,
  cfpb_filed: templateRegistry.cfpb_filed,
  cfpb_complaint: templateRegistry.cfpb_complaint,
  manual_review: templateRegistry.manual_review,
};

// ── 11. dispute_round.mailed ─────────────────────────────────
export const disputeRoundMailedWorkflow = defineWorkflow({
  name: 'dispute-round-mailed',
  label: 'Dispute Round Mailed → 35-Day Deadline + Reminders',
  description: 'When dispute letters are mailed: set 35-day bureau deadline, create day-30 reminder task, notify customer',
  trigger: { object: 'dispute', event: 'UPDATED', condition: { status: 'MAILED' } },
  actions: [
    {
      type: 'UPDATE_OBJECT',
      object: 'dispute',
      id: '{{dispute.id}}',
      data: { roundDeadline: 'NOW_PLUS_35_DAYS', roundStartDate: 'NOW' },
    },
    {
      type: 'CREATE_TASK',
      task: {
        title: 'Day 30 check: {{customer.firstName}} {{customer.lastName}} — {{dispute.bureau}} Round {{dispute.currentRound}}',
        priority: 'HIGH',
        assignee: 'dispute-specialist',
        customerProfileId: '{{dispute.customerProfileId}}',
        dueDate: 'NOW_PLUS_30_DAYS',
        description: 'Check for responses from {{dispute.bureau}}. Deadline in 5 days.',
      },
    },
    {
      type: 'SEND_SMS',
      template: 'dispute_update',
      to: '{{customer.phone}}',
      params: {
        bureau: '{{dispute.bureau}}',
        round: '{{dispute.currentRound}}',
        deadline: 'NOW_PLUS_35_DAYS',
      },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'DISPUTE_MAILED',
        title: 'Dispute Letters Mailed',
        description: 'Round {{dispute.currentRound}} mailed to {{dispute.bureau}}. Deadline: {{dispute.roundDeadline}}.',
        source: 'DISPUTE',
        customerProfileId: '{{dispute.customerProfileId}}',
      },
    },
  ],
});

// ── 12. dispute_round.response_received ──────────────────────
export const disputeResponseReceivedWorkflow = defineWorkflow({
  name: 'dispute-response-received',
  label: 'Dispute Response Received → Notify Customer + Agent',
  description: 'When bureau responds to dispute: notify customer via SMS, Slack the dispute agent',
  trigger: { object: 'dispute', event: 'UPDATED', condition: { status: 'RESPONSE_RECEIVED' } },
  actions: [
    {
      type: 'SEND_SMS',
      template: 'dispute_update',
      to: '{{customer.phone}}',
      params: {
        bureau: '{{dispute.bureau}}',
        result: '{{dispute.responseSummary}}',
      },
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '📬 Dispute response: {{customer.firstName}} {{customer.lastName}} — {{dispute.bureau}} Round {{dispute.currentRound}}: {{dispute.responseSummary}}',
    },
    {
      type: 'CREATE_TASK',
      task: {
        title: 'Review dispute response: {{customer.firstName}} {{customer.lastName}} — {{dispute.bureau}}',
        priority: 'MEDIUM',
        assignee: 'dispute-specialist',
        customerProfileId: '{{dispute.customerProfileId}}',
        dueDate: 'NOW_PLUS_24_HOURS',
      },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'DISPUTE_RESPONSE',
        title: 'Dispute Response Received',
        description: '{{dispute.bureau}} responded: {{dispute.responseSummary}}',
        source: 'DISPUTE',
        customerProfileId: '{{dispute.customerProfileId}}',
      },
    },
  ],
});

// ── 13. dispute.deleted ──────────────────────────────────────
export const disputeDeletedWorkflow = defineWorkflow({
  name: 'dispute-deleted',
  label: 'Item Deleted → Celebrate + Score Update',
  description: 'When a negative item is deleted from credit report: celebrate with SMS, update score timeline',
  trigger: { object: 'dispute', event: 'UPDATED', condition: { status: 'DELETED' } },
  actions: [
    {
      type: 'SEND_SMS',
      template: 'score_celebrate',
      to: '{{customer.phone}}',
      params: {
        bureau: '{{dispute.bureau}}',
        creditor: '{{dispute.creditorName}}',
        points: '{{scoreDelta}}',
      },
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '🎉 DELETION: {{customer.firstName}} {{customer.lastName}} — {{dispute.creditorName}} removed from {{dispute.bureau}}!',
    },
    {
      type: 'UPDATE_OBJECT',
      object: 'dispute',
      id: '{{dispute.id}}',
      data: { deletionDate: 'NOW' },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'ITEM_DELETED',
        title: 'Negative Item Deleted',
        description: '{{dispute.creditorName}} deleted from {{dispute.bureau}} credit report.',
        source: 'DISPUTE',
        customerProfileId: '{{dispute.customerProfileId}}',
      },
    },
  ],
});

// ── 14. dispute_round.no_response ────────────────────────────
export const disputeNoResponseWorkflow = defineWorkflow({
  name: 'dispute-round-no-response',
  label: 'Dispute Round: No Response → Auto-Escalate',
  description: 'When 35-day deadline passes with no response: auto-escalate to next round or direct creditor',
  trigger: { object: 'dispute', event: 'SCHEDULED', condition: { status: 'MAILED', roundDeadline: 'TODAY' }, schedule: '0 8 * * *' },
  actions: [
    {
      type: 'UPDATE_OBJECT',
      object: 'dispute',
      id: '{{dispute.id}}',
      data: {
        status: 'NO_RESPONSE',
        currentRound: '{{nextRound}}',
        nextRoundDate: 'NOW_PLUS_7_DAYS',
      },
    },
    {
      type: 'CREATE_TASK',
      task: {
        title: 'Escalate dispute: {{customer.firstName}} {{customer.lastName}} — {{dispute.bureau}} to {{nextRound}}',
        priority: 'HIGH',
        assignee: 'dispute-specialist',
        customerProfileId: '{{dispute.customerProfileId}}',
        dueDate: 'NOW_PLUS_24_HOURS',
      },
    },
    {
      type: 'SEND_SMS',
      template: 'dispute_update',
      to: '{{customer.phone}}',
      params: {
        bureau: '{{dispute.bureau}}',
        result: 'No response — escalating to {{nextRound}}',
      },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'DISPUTE_ESCALATED',
        title: 'Dispute Escalated — No Response',
        description: 'No response from {{dispute.bureau}} within 35 days. Escalating to {{nextRound}}.',
        source: 'WORKFLOW',
        customerProfileId: '{{dispute.customerProfileId}}',
      },
    },
  ],
});

// ── 15. dispute.cfpb_escalation_needed ───────────────────────
export const disputeCFPBEscalationWorkflow = defineWorkflow({
  name: 'dispute-cfpb-escalation',
  label: 'CFPB Escalation Needed → High-Priority Task',
  description: 'When dispute needs CFPB escalation: create high-priority task for dispute specialist + prep CFPB complaint letter',
  trigger: { object: 'dispute', event: 'UPDATED', condition: { status: 'CFPB_ESCALATION' } },
  actions: [
    {
      type: 'CREATE_TASK',
      task: {
        title: 'FILE CFPB COMPLAINT: {{customer.firstName}} {{customer.lastName}} — {{dispute.bureau}} — {{dispute.creditorName}}',
        priority: 'CRITICAL',
        assignee: 'dispute-specialist',
        customerProfileId: '{{dispute.customerProfileId}}',
        dueDate: 'NOW_PLUS_4_HOURS',
        description: 'Prepare CFPB complaint for {{dispute.creditorName}} on {{dispute.bureau}} report. Template: cfpb_complaint',
      },
    },
    {
      type: 'GENERATE_DOCUMENT',
      template: 'cfpb_complaint',
      customerProfileId: '{{dispute.customerProfileId}}',
      params: {
        bureau: '{{dispute.bureau}}',
        creditor: '{{dispute.creditorName}}',
        accountNumber: '{{dispute.accountNumber}}',
        disputeHistory: '{{dispute.roundHistory}}',
      },
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '⚖️ CFPB ESCALATION: {{customer.firstName}} {{customer.lastName}} — {{dispute.creditorName}} on {{dispute.bureau}}. CFPB complaint doc generated.',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'CFPB_ESCALATION',
        title: 'CFPB Escalation Initiated',
        description: 'Dispute escalated to CFPB for {{dispute.creditorName}} on {{dispute.bureau}}.',
        source: 'DISPUTE',
        customerProfileId: '{{dispute.customerProfileId}}',
      },
    },
  ],
});
