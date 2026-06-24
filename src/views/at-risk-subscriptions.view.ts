import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'at-risk-subscriptions',
  label: 'At-Risk Subscriptions',
  type: 'table',
  icon: 'IconCreditCard',
  objectName: 'subscription',
  description: 'Subscriptions with past-due status requiring immediate attention.',
  filters: [
    {
      field: 'status',
      operator: 'eq',
      value: 'past_due',
    },
  ],
  columns: [
    {
      field: 'customer',
      label: 'Customer',
      type: 'relation',
      width: 180,
    },
    {
      field: 'amount',
      label: 'Amount',
      type: 'currency',
      width: 120,
    },
    {
      field: 'daysPastDue',
      label: 'Days Past Due',
      type: 'number',
      width: 130,
    },
    {
      field: 'recoveryAttempts',
      label: 'Recovery Attempts',
      type: 'number',
      width: 140,
    },
    {
      field: 'lastChargeDate',
      label: 'Last Charge Date',
      type: 'date',
      width: 160,
    },
    {
      field: 'declineReason',
      label: 'Decline Reason',
      type: 'text',
      width: 240,
    },
    {
      field: 'recoveryStatus',
      label: 'Recovery Status',
      type: 'chip',
      width: 140,
      options: [
        { value: 'not_started', label: 'Not Started', color: '#ef4444' },
        { value: 'in_progress', label: 'In Progress', color: '#f59e0b' },
        { value: 'escalated', label: 'Escalated', color: '#ef4444' },
      ],
    },
  ],
  sorting: [{ field: 'daysPastDue', direction: 'desc' }],
  isDefault: false,
});
