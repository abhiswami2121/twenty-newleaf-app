import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'billing-queue-monitor',
  label: 'Billing Queue Monitor',
  type: 'table',
  icon: 'IconReceipt',
  objectName: 'billingQueue',
  description: 'Pending billing queue items awaiting execution, with retry count and last error.',
  filters: [
    {
      field: 'status',
      operator: 'in',
      value: ['pending', 'retrying'],
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
      field: 'scheduledDate',
      label: 'Scheduled Date',
      type: 'date',
      width: 150,
    },
    {
      field: 'amount',
      label: 'Amount',
      type: 'currency',
      width: 120,
    },
    {
      field: 'retryCount',
      label: 'Retry Count',
      type: 'number',
      width: 110,
    },
    {
      field: 'maxRetries',
      label: 'Max Retries',
      type: 'number',
      width: 110,
    },
    {
      field: 'lastError',
      label: 'Last Error',
      type: 'text',
      width: 300,
      truncate: true,
    },
    {
      field: 'status',
      label: 'Status',
      type: 'chip',
      width: 110,
      options: [
        { value: 'pending', label: 'Pending', color: '#6b7280' },
        { value: 'retrying', label: 'Retrying', color: '#f59e0b' },
        { value: 'escalated', label: 'Escalated', color: '#ef4444' },
      ],
    },
    {
      field: 'paymentMethod',
      label: 'Method',
      type: 'chip',
      width: 100,
      options: [
        { value: 'credit_card', label: 'Card', color: '#6366f1' },
        { value: 'ach', label: 'ACH', color: '#3b82f6' },
      ],
    },
  ],
  sorting: [{ field: 'scheduledDate', direction: 'asc' }],
  isDefault: false,
});
