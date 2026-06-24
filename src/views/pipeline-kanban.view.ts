import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'pipeline-kanban',
  label: 'Pipeline Kanban',
  type: 'kanban',
  icon: 'IconLayoutKanban',
  objectName: 'person',
  kanbanField: 'nlf_pipelineStage',
  description: 'Sales pipeline board from new leads to closed won/lost. Drag cards between stages.',
  filters: [
    {
      field: 'nlf_pipelineStage',
      operator: 'isNotEmpty',
      value: '',
    },
  ],
  columns: [
    { id: 'new_lead', title: 'New Lead', color: '#6366f1' },
    { id: 'discovery', title: 'Discovery', color: '#3b82f6' },
    { id: 'credit_pull', title: 'Credit Pull', color: '#8b5cf6' },
    { id: 'agreement_sent', title: 'Agreement Sent', color: '#f59e0b' },
    { id: 'day_zero_scheduled', title: 'Day Zero', color: '#10b981' },
    { id: 'closed_won', title: 'Closed Won', color: '#22c55e' },
    { id: 'closed_lost', title: 'Closed Lost', color: '#ef4444' },
  ],
  cardFields: ['name', 'nlf_monthlyAmount', 'company'],
  isDefault: true,
});
