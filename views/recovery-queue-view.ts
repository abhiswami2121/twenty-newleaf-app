// Recovery Queue View — All recovery items with status pipeline
import { defineView } from 'twenty-sdk/define';

export default defineView({
  object: 'recoveryItem',
  name: 'recovery-queue',
  label: 'Recovery Queue',
  description: 'All recovery items grouped by status — pending, contacted, link sent, recovered',
  type: 'KANBAN',
  icon: 'IconRefresh',
  groupBy: 'status',
  cardFields: ['customerProfileId', 'amount', 'declineReason', 'attempts', 'lastAttemptAt', 'recoverySource'],
  stages: [
    { id: 'PENDING_RETRY', label: 'Retrying', color: '#3b82f6', backgroundColor: '#eff6ff' },
    { id: 'PENDING', label: 'New', color: '#ef4444', backgroundColor: '#fef2f2' },
    { id: 'CONTACTED', label: 'Contacted', color: '#f59e0b', backgroundColor: '#fffbeb' },
    { id: 'PAYMENT_LINK_SENT', label: 'Link Sent', color: '#06b6a4', backgroundColor: '#f0fdfa' },
    { id: 'RECOVERED', label: 'Recovered', color: '#10b981', backgroundColor: '#ecfdf5' },
    { id: 'LOST', label: 'Lost', color: '#64748b', backgroundColor: '#f1f5f9' },
  ],
  filters: { status: { in: ['PENDING_RETRY', 'PENDING', 'CONTACTED', 'PAYMENT_LINK_SENT'] } },
  sortBy: 'lastAttemptAt',
  sortDirection: 'ASC',
});
