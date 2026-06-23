// Activity Feed View — Unified activity log across all customers
import { defineView } from 'twenty-sdk/define';

export default defineView({
  object: 'activity',
  name: 'activity-feed',
  label: 'Activity Feed',
  description: 'Real-time unified activity log across all connectors and customers',
  type: 'TABLE',
  icon: 'IconActivity',
  columns: [
    { field: 'type', label: 'Type', width: 160 },
    { field: 'title', label: 'Event', width: 300 },
    { field: 'source', label: 'Source', width: 120 },
    { field: 'customerProfileId', label: 'Customer', width: 200 },
    { field: 'occurredAt', label: 'Time', width: 160 },
  ],
  quickFilters: [
    { label: 'Payments', field: 'type', op: 'in', value: ['PAYMENT_SUCCESS', 'PAYMENT_DECLINED'] },
    { label: 'Calls', field: 'source', op: 'in', value: ['VAPI', 'FRESHCALLER'] },
    { label: 'Disputes', field: 'source', op: 'eq', value: 'DISPUTE' },
    { label: 'System', field: 'source', op: 'eq', value: 'SYSTEM' },
    { label: 'Today', field: 'occurredAt', op: 'eq', value: 'TODAY' },
  ],
  sortBy: 'occurredAt',
  sortDirection: 'DESC',
});
