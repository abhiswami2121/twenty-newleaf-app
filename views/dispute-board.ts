// Dispute Board View — Kanban-style dispute tracking by round
// Tracks active disputes with bureau columns and 35-day deadline indicators

import { defineView } from 'twenty-sdk/define';

export default defineView({
  object: 'dispute',
  name: 'dispute-board',
  label: 'Dispute Board',
  description: 'Kanban view of active disputes grouped by round with bureau split',
  type: 'KANBAN',
  icon: 'IconFileText',

  groupBy: 'currentRound',

  cardFields: [
    'customerProfileId',
    'bureau',
    'creditorName',
    'negativeItemCount',
    'roundStartDate',
    'status',
    'roundDeadline',
  ],

  stages: [
    { id: 'ROUND_1', label: 'Round 1', color: '#3b82f6', backgroundColor: '#eff6ff' },
    { id: 'ROUND_2', label: 'Round 2', color: '#8b5cf6', backgroundColor: '#f5f3ff' },
    { id: 'ROUND_3', label: 'Round 3', color: '#f59e0b', backgroundColor: '#fffbeb' },
    { id: 'DIRECT_CREDITOR', label: 'Direct Creditor', color: '#f97316', backgroundColor: '#fff7ed' },
    { id: 'CFPB', label: 'CFPB', color: '#ef4444', backgroundColor: '#fef2f2' },
    { id: 'COMPLETED', label: 'Completed', color: '#10b981', backgroundColor: '#ecfdf5' },
  ],

  filters: {
    isActive: { eq: true },
  },

  sortBy: 'roundDeadline',
  sortDirection: 'ASC',
});
