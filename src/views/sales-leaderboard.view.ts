import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'sales-leaderboard',
  label: 'Sales Leaderboard',
  type: 'table',
  icon: 'IconTrophy',
  objectName: 'agent',
  description: 'Sales agents ranked by closed deals and revenue this month.',
  filters: [
    {
      field: 'closedDealsThisMonth',
      operator: 'gte',
      value: '1',
    },
  ],
  columns: [
    {
      field: 'name',
      label: 'Agent',
      type: 'text',
      width: 180,
    },
    {
      field: 'closedDealsThisMonth',
      label: 'Closed Deals (Month)',
      type: 'number',
      width: 160,
    },
    {
      field: 'revenueThisMonth',
      label: 'Revenue (Month)',
      type: 'currency',
      width: 160,
    },
    {
      field: 'conversionRate',
      label: 'Conversion Rate',
      type: 'number',
      width: 140,
      suffix: '%',
    },
    {
      field: 'pipelineValue',
      label: 'Pipeline Value',
      type: 'currency',
      width: 160,
    },
    {
      field: 'totalCalls',
      label: 'Calls This Month',
      type: 'number',
      width: 140,
    },
  ],
  sorting: [{ field: 'revenueThisMonth', direction: 'desc' }],
  isDefault: false,
});
