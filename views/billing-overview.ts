// Billing Overview View — All billing events with filters
import { defineView } from 'twenty-sdk/define';

export default defineView({
  object: 'billingEvent',
  name: 'billing-overview',
  label: 'Billing Overview',
  description: 'All billing events — charges, declines, refunds — with amount and status filters',
  type: 'TABLE',
  icon: 'IconCreditCard',
  columns: [
    { field: 'customerProfileId', label: 'Customer', width: 200 },
    { field: 'amount', label: 'Amount', width: 120, format: 'CURRENCY' },
    { field: 'status', label: 'Status', width: 120 },
    { field: 'type', label: 'Type', width: 140 },
    { field: 'paymentMethod', label: 'Method', width: 120 },
    { field: 'declineReason', label: 'Decline Reason', width: 200 },
    { field: 'createdAt', label: 'Date', width: 160 },
  ],
  quickFilters: [
    { label: 'Successful', field: 'status', op: 'eq', value: 'success' },
    { label: 'Declined', field: 'status', op: 'eq', value: 'declined' },
    { label: 'Refunded', field: 'status', op: 'eq', value: 'refunded' },
    { label: 'Today', field: 'createdAt', op: 'eq', value: 'TODAY' },
    { label: 'This Week', field: 'createdAt', op: 'gte', value: 'THIS_WEEK' },
  ],
  sortBy: 'createdAt',
  sortDirection: 'DESC',
});
