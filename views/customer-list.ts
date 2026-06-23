// Customer List View — Main table with filters, sort, quick actions
// 2,900 customer profiles with pipeline stage badges

import { defineView } from 'twenty-sdk/define';

export default defineView({
  object: 'customerProfile',
  name: 'customer-list',
  label: 'All Customers',
  description: 'Searchable, filterable customer registry with pipeline stage badges',
  type: 'TABLE',
  icon: 'IconUsers',

  columns: [
    { field: 'firstName', label: 'First Name', width: 140 },
    { field: 'lastName', label: 'Last Name', width: 140 },
    { field: 'email', label: 'Email', width: 240 },
    { field: 'phone', label: 'Phone', width: 160 },
    { field: 'pipelineStage', label: 'Stage', width: 150 },
    { field: 'agentEmail', label: 'Agent', width: 200 },
    { field: 'paymentAmount', label: 'Plan', width: 100 },
    { field: 'enrolledAt', label: 'Enrolled', width: 130 },
    { field: 'lastActivity', label: 'Last Activity', width: 150 },
  ],

  filters: {
    isArchived: { eq: false },
  },

  // Quick filters sidebar
  quickFilters: [
    { label: 'Active', field: 'pipelineStage', op: 'eq', value: 'ACTIVE_SERVICE' },
    { label: 'At Risk', field: 'pipelineStage', op: 'eq', value: 'AT_RISK' },
    { label: 'Leads', field: 'pipelineStage', op: 'eq', value: 'LEAD' },
    { label: 'New This Week', field: 'createdAt', op: 'gte', value: 'THIS_WEEK' },
    { label: 'Graduated', field: 'pipelineStage', op: 'eq', value: 'GRADUATED' },
  ],

  sortBy: 'updatedAt',
  sortDirection: 'DESC',

  // Per-row actions
  rowActions: [
    { label: 'View Profile', type: 'NAVIGATE', viewName: 'customer-360-detail' },
    { label: 'Send SMS', type: 'ACTION', action: 'compose-sms' },
    { label: 'Send Email', type: 'ACTION', action: 'compose-email' },
    { label: 'Create Task', type: 'ACTION', action: 'create-task' },
    { label: 'Send Payment Link', type: 'ACTION', action: 'send-payment-link' },
  ],
});
