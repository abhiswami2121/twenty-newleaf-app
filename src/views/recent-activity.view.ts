import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'recent-activity',
  label: 'Recent Activity',
  type: 'timeline',
  icon: 'IconActivity',
  objectName: 'activityLog',
  description: 'Chronological feed of all system and user activity, grouped by date.',
  filters: [],
  groupByField: 'date',
  columns: [
    {
      field: 'timestamp',
      label: 'Time',
      type: 'date',
      width: 180,
    },
    {
      field: 'actor',
      label: 'Actor',
      type: 'relation',
      width: 140,
    },
    {
      field: 'action',
      label: 'Action',
      type: 'text',
      width: 200,
    },
    {
      field: 'entity',
      label: 'Entity',
      type: 'text',
      width: 180,
    },
    {
      field: 'description',
      label: 'Description',
      type: 'text',
      width: 400,
      truncate: true,
    },
    {
      field: 'category',
      label: 'Category',
      type: 'chip',
      width: 120,
      options: [
        { value: 'billing', label: 'Billing', color: '#6366f1' },
        { value: 'dispute', label: 'Dispute', color: '#f59e0b' },
        { value: 'enrollment', label: 'Enrollment', color: '#22c55e' },
        { value: 'call', label: 'Call', color: '#3b82f6' },
        { value: 'system', label: 'System', color: '#6b7280' },
      ],
    },
  ],
  sorting: [{ field: 'timestamp', direction: 'desc' }],
  isDefault: false,
});
