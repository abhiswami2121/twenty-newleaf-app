import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'recovery-queue',
  label: 'Recovery Queue',
  type: 'kanban',
  icon: 'IconAlertTriangle',
  objectName: 'recoveryItems',
  kanbanField: 'status',
  description: 'Payment recovery queue organized by status: at risk, in recovery, recovered.',
  filters: [
    {
      field: 'status',
      operator: 'isNotEmpty',
      value: '',
    },
  ],
  columns: [
    { id: 'at_risk', title: 'At Risk', color: '#ef4444' },
    { id: 'in_recovery', title: 'In Recovery', color: '#f59e0b' },
    { id: 'recovered', title: 'Recovered', color: '#22c55e' },
  ],
  cardFields: ['person', 'subscription', 'declineReason', 'amount', 'failedAttempts'],
  isDefault: false,
});
