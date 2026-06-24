import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'active-disputes',
  label: 'Active Disputes',
  type: 'kanban',
  icon: 'IconFileSearch',
  objectName: 'dispute',
  kanbanField: 'status',
  description: 'Active credit disputes by round number and status. Track bureau, account, and deadlines.',
  filters: [
    {
      field: 'status',
      operator: 'isNot',
      value: 'resolved',
    },
  ],
  columns: [
    { id: 'round_1_pending', title: 'Round 1 — Pending', color: '#6366f1' },
    { id: 'round_1_submitted', title: 'Round 1 — Submitted', color: '#3b82f6' },
    { id: 'round_1_response', title: 'Round 1 — Response', color: '#f59e0b' },
    { id: 'round_2_pending', title: 'Round 2 — Pending', color: '#8b5cf6' },
    { id: 'round_2_submitted', title: 'Round 2 — Submitted', color: '#a855f7' },
    { id: 'escalated', title: 'Escalated / CFPB', color: '#ef4444' },
  ],
  cardFields: ['bureau', 'accountName', 'daysRemaining', 'customer', 'round'],
  isDefault: false,
});
