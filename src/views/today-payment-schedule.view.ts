import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'today-payment-schedule',
  label: 'Today Payment Schedule',
  type: 'table',
  icon: 'IconCalendarDollar',
  objectName: 'paymentSchedule',
  description: 'Payments scheduled for execution today with status tracking.',
  filters: [
    {
      field: 'scheduledDate',
      operator: 'eq',
      value: '__TODAY__',
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
      field: 'status',
      label: 'Status',
      type: 'chip',
      width: 130,
      options: [
        { value: 'pending', label: 'Pending', color: '#6b7280' },
        { value: 'processing', label: 'Processing', color: '#3b82f6' },
        { value: 'completed', label: 'Completed', color: '#22c55e' },
        { value: 'failed', label: 'Failed', color: '#ef4444' },
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
    {
      field: 'scheduledTime',
      label: 'Scheduled Time',
      type: 'time',
      width: 140,
    },
    {
      field: 'retryCount',
      label: 'Retries',
      type: 'number',
      width: 80,
    },
  ],
  sorting: [{ field: 'scheduledTime', direction: 'asc' }],
  isDefault: false,
});
