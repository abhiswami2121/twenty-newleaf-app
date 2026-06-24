import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'credit-score-monitor',
  label: 'Credit Score Monitor',
  type: 'table',
  icon: 'IconTrendingUp',
  objectName: 'creditReport',
  description: 'Monitor credit score changes across all customers. Track score deltas, bureau coverage, and dispute impact.',
  filters: [
    { field: 'scoreDelta', operator: 'gte', value: '0' },
  ],
  columns: [
    { field: 'customerName', label: 'Customer', type: 'text', width: 180 },
    { field: 'bureau', label: 'Bureau', type: 'chip', width: 90 },
    { field: 'currentScore', label: 'Score', type: 'number', width: 80 },
    { field: 'previousScore', label: 'Prev Score', type: 'number', width: 80 },
    { field: 'scoreDelta', label: 'Delta', type: 'number', width: 70, suffix: 'pts' },
    { field: 'lastChecked', label: 'Last Checked', type: 'date', width: 120 },
    { field: 'disputesActive', label: 'Active Disputes', type: 'number', width: 80 },
    { field: 'reportStatus', label: 'Status', type: 'chip', width: 100 },
  ],
  sorting: [
    { field: 'scoreDelta', direction: 'desc' },
  ],
  isDefault: false,
});
