import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'customer-roster',
  label: 'Customer Roster',
  type: 'table',
  icon: 'IconUsers',
  objectName: 'person',
  description: 'All customers with key metrics: status, credit score, monthly payment, pipeline stage.',
  filters: [
    {
      field: 'nlf_isCustomer',
      operator: 'eq',
      value: 'true',
    },
  ],
  columns: [
    {
      field: 'name',
      label: 'Name',
      type: 'text',
      width: 200,
    },
    {
      field: 'email',
      label: 'Email',
      type: 'text',
      width: 240,
    },
    {
      field: 'nlf_pipelineStage',
      label: 'Pipeline Stage',
      type: 'chip',
      width: 140,
      options: [
        { value: 'new_lead', label: 'New Lead', color: '#6366f1' },
        { value: 'discovery', label: 'Discovery', color: '#3b82f6' },
        { value: 'credit_pull', label: 'Credit Pull', color: '#8b5cf6' },
        { value: 'agreement_sent', label: 'Agreement Sent', color: '#f59e0b' },
        { value: 'day_zero_scheduled', label: 'Day Zero', color: '#10b981' },
        { value: 'closed_won', label: 'Closed Won', color: '#22c55e' },
        { value: 'closed_lost', label: 'Closed Lost', color: '#ef4444' },
      ],
    },
    {
      field: 'nlf_creditScore',
      label: 'Credit Score',
      type: 'number',
      width: 120,
    },
    {
      field: 'nlf_monthlyAmount',
      label: 'Monthly Payment',
      type: 'currency',
      width: 150,
    },
    {
      field: 'status',
      label: 'Status',
      type: 'chip',
      width: 120,
      options: [
        { value: 'active', label: 'Active', color: '#22c55e' },
        { value: 'past_due', label: 'Past Due', color: '#ef4444' },
        { value: 'in_recovery', label: 'In Recovery', color: '#f59e0b' },
        { value: 'inactive', label: 'Inactive', color: '#6b7280' },
      ],
    },
    {
      field: 'enrolledAt',
      label: 'Enrolled',
      type: 'date',
      width: 140,
    },
    {
      field: 'phone',
      label: 'Phone',
      type: 'phone',
      width: 140,
    },
  ],
  sorting: [{ field: 'enrolledAt', direction: 'desc' }],
  isDefault: false,
});
