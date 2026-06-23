// Communications Feed — Unified view of all customer communications
import { defineView } from 'twenty-sdk/define';

export default defineView({
  object: 'communicationLog',
  name: 'communications-feed',
  label: 'Communications Feed',
  description: 'Unified feed of SMS, email, and call communications across all customers',
  type: 'TABLE',
  icon: 'IconMessage',
  columns: [
    { field: 'customerProfileId', label: 'Customer', width: 200 },
    { field: 'channel', label: 'Channel', width: 80 },
    { field: 'direction', label: 'Dir', width: 60 },
    { field: 'subject', label: 'Subject', width: 240 },
    { field: 'status', label: 'Status', width: 100 },
    { field: 'createdAt', label: 'Sent', width: 160 },
  ],
  quickFilters: [
    { label: 'SMS', field: 'channel', op: 'eq', value: 'SMS' },
    { label: 'Email', field: 'channel', op: 'eq', value: 'EMAIL' },
    { label: 'Call', field: 'channel', op: 'eq', value: 'CALL' },
    { label: 'Inbound', field: 'direction', op: 'eq', value: 'INBOUND' },
    { label: 'Outbound', field: 'direction', op: 'eq', value: 'OUTBOUND' },
    { label: 'Today', field: 'createdAt', op: 'eq', value: 'TODAY' },
  ],
  sortBy: 'createdAt',
  sortDirection: 'DESC',
});
