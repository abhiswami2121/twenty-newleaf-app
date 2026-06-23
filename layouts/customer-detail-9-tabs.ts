// Customer 360 — 9-Tab Detail Layout
// World-class customer profile: Overview, Billing, Communications, Tickets,
// Disputes, Credit Reports, Agreements, Connectors, Activity
// Reference: TWENTY-WORLD-CLASS-UI-MASTER-V5 PRD

import { defineLayout } from 'twenty-sdk/define';

export default defineLayout({
  name: 'customer-360-detail',
  label: 'Customer 360',
  description: '9-tab comprehensive customer profile — all systems, all history, one view',
  object: 'customerProfile',
  icon: 'IconUser',

  // ── Header Section ──────────────────────────────────────────
  header: {
    fields: [
      { field: 'firstName', size: 'large', weight: 'bold' },
      { field: 'lastName', size: 'large', weight: 'bold' },
      { field: 'pipelineStage', renderAs: 'STAGE_BADGE' },
      { field: 'agentEmail', size: 'small' },
      { field: 'paymentAmount', format: 'CURRENCY' },
    ],
    actions: [
      { label: 'Send SMS', action: 'compose-sms', icon: 'IconMessage' },
      { label: 'Send Email', action: 'compose-email', icon: 'IconMail' },
      { label: 'Send Payment Link', action: 'send-payment-link', icon: 'IconCreditCard' },
      { label: 'Create Task', action: 'create-task', icon: 'IconCheckbox' },
      { label: 'Add Note', action: 'add-note', icon: 'IconNotes' },
    ],
  },

  // ── 9 Tabs ──────────────────────────────────────────────────
  tabs: [
    // TAB 1: Overview
    {
      id: 'overview',
      label: 'Overview',
      icon: 'IconEye',
      sections: [
        {
          type: 'FIELDS',
          title: 'Contact Details',
          fields: ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'ssn', 'address'],
          layout: '2_COLUMNS',
        },
        {
          type: 'FIELDS',
          title: 'Pipeline Info',
          fields: ['pipelineStage', 'agentEmail', 'enrolledAt', 'paymentAmount', 'lastActivity'],
          layout: '2_COLUMNS',
        },
        {
          type: 'RELATED_LIST',
          title: 'Recent Activity',
          object: 'activity',
          filter: { customerProfileId: 'RECORD_ID' },
          limit: 5,
          sort: 'occurredAt',
          direction: 'DESC',
        },
        {
          type: 'RELATED_LIST',
          title: 'Active Tasks',
          object: 'newleafTask',
          filter: { customerProfileId: 'RECORD_ID', status: { not: 'COMPLETED' } },
          limit: 5,
        },
      ],
    },

    // TAB 2: Billing
    {
      id: 'billing',
      label: 'Billing',
      icon: 'IconCreditCard',
      sections: [
        {
          type: 'RELATED_LIST',
          title: 'Billing Events',
          object: 'billingEvent',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['amount', 'status', 'paymentMethod', 'createdAt'],
          sort: 'createdAt',
          direction: 'DESC',
        },
        {
          type: 'RELATED_LIST',
          title: 'NMI Subscriptions',
          object: 'nmiSubscription',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['planName', 'amount', 'nextBillingDate', 'status'],
        },
        {
          type: 'RELATED_LIST',
          title: 'Stored Cards (NMI Vault)',
          object: 'nmiVault',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['cardLastFour', 'cardBrand', 'cardExpiryDate', 'isDefault'],
        },
        {
          type: 'RELATED_LIST',
          title: 'Recovery Items',
          object: 'recoveryItem',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['amount', 'declineReason', 'status', 'attempts', 'lastAttemptAt'],
        },
      ],
    },

    // TAB 3: Communications
    {
      id: 'communications',
      label: 'Communications',
      icon: 'IconMessage',
      sections: [
        {
          type: 'RELATED_LIST',
          title: 'Communication Log',
          object: 'communicationLog',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['channel', 'direction', 'status', 'createdAt'],
          sort: 'createdAt',
          direction: 'DESC',
        },
        {
          type: 'RELATED_LIST',
          title: 'Call Events (VAPI / Freshcaller)',
          object: 'callEvent',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['callType', 'disposition', 'duration', 'createdAt'],
        },
        {
          type: 'RELATED_LIST',
          title: 'SMS Messages',
          object: 'communicationLog',
          filter: { customerProfileId: 'RECORD_ID', channel: 'SMS' },
          columns: ['direction', 'content', 'status', 'createdAt'],
        },
        {
          type: 'RELATED_LIST',
          title: 'Email Messages',
          object: 'communicationLog',
          filter: { customerProfileId: 'RECORD_ID', channel: 'EMAIL' },
          columns: ['direction', 'subject', 'status', 'createdAt'],
        },
      ],
    },

    // TAB 4: Support Tickets
    {
      id: 'tickets',
      label: 'Tickets',
      icon: 'IconLifebuoy',
      sections: [
        {
          type: 'RELATED_LIST',
          title: 'Support Tickets',
          object: 'supportTicket',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['title', 'status', 'priority', 'assignee', 'createdAt'],
          sort: 'createdAt',
          direction: 'DESC',
        },
        {
          type: 'RELATED_LIST',
          title: 'Slack Submissions',
          object: 'slackSubmission',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['channel', 'summary', 'status', 'submittedAt'],
        },
      ],
    },

    // TAB 5: Disputes
    {
      id: 'disputes',
      label: 'Disputes',
      icon: 'IconFileText',
      sections: [
        {
          type: 'RELATED_LIST',
          title: 'Active Disputes',
          object: 'dispute',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['bureau', 'currentRound', 'roundDeadline', 'negativeItemCount', 'status'],
          sort: 'roundDeadline',
        },
        {
          type: 'RELATED_LIST',
          title: 'Negative Items',
          object: 'dispute',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['creditorName', 'accountNumber', 'itemType', 'status'],
        },
        {
          type: 'RELATED_LIST',
          title: 'Documents',
          object: 'document',
          filter: { customerProfileId: 'RECORD_ID', category: 'DISPUTE' },
          columns: ['name', 'category', 'createdAt'],
        },
      ],
    },

    // TAB 6: Credit Reports
    {
      id: 'credit',
      label: 'Credit',
      icon: 'IconReport',
      sections: [
        {
          type: 'RELATED_LIST',
          title: 'Credit Reports',
          object: 'creditReport',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['bureau', 'score', 'reportDate', 'negativeItemCount'],
          sort: 'reportDate',
          direction: 'DESC',
        },
        {
          type: 'CHART',
          title: 'Score Timeline',
          query: { object: 'creditReport', groupBy: 'reportDate', field: 'score', filter: { customerProfileId: 'RECORD_ID' } },
          chartType: 'LINE',
          chartOptions: { gradientFill: true, lineColor: '#06b6a4' },
        },
      ],
    },

    // TAB 7: Agreements
    {
      id: 'agreements',
      label: 'Agreements',
      icon: 'IconFileSignature',
      sections: [
        {
          type: 'RELATED_LIST',
          title: 'Agreements',
          object: 'agreement',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['name', 'status', 'signedAt', 'expiresAt'],
        },
        {
          type: 'RELATED_LIST',
          title: 'Related Documents',
          object: 'document',
          filter: { customerProfileId: 'RECORD_ID', category: 'AGREEMENT' },
          columns: ['name', 'url', 'category', 'createdAt'],
        },
      ],
    },

    // TAB 8: Connectors
    {
      id: 'connectors',
      label: 'Connectors',
      icon: 'IconPlugConnected',
      sections: [
        {
          type: 'FIELDS',
          title: 'Connector Sync Status',
          fields: ['customerProfileId'],
          layout: '1_COLUMN',
        },
        {
          type: 'RELATED_LIST',
          title: 'Automation Events',
          object: 'automationEvent',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['automationName', 'triggerEvent', 'status', 'firedAt'],
          sort: 'firedAt',
          direction: 'DESC',
        },
        {
          type: 'RELATED_LIST',
          title: 'Sequence Enrollments',
          object: 'sequenceEnrollment',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['sequenceName', 'status', 'startedAt', 'completedAt'],
        },
      ],
    },

    // TAB 9: Activity
    {
      id: 'activity',
      label: 'Activity',
      icon: 'IconActivity',
      sections: [
        {
          type: 'RELATED_LIST',
          title: 'Full Activity Log',
          object: 'activity',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['type', 'title', 'description', 'source', 'occurredAt'],
          sort: 'occurredAt',
          direction: 'DESC',
        },
        {
          type: 'RELATED_LIST',
          title: 'Notes',
          object: 'newleafNote',
          filter: { customerProfileId: 'RECORD_ID' },
          columns: ['title', 'category', 'authorEmail', 'isPinned', 'createdAt'],
          sort: 'createdAt',
          direction: 'DESC',
        },
      ],
    },
  ],
});
