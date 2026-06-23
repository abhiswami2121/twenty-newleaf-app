// Recovery Dashboard — Billing/recovery specialist view
// Recovery queue, today's declines, expiring cards, recovery rate

import { defineDashboard } from 'twenty-sdk/define';

export default defineDashboard({
  name: 'recovery-dashboard',
  label: 'Recovery Dashboard',
  description: 'Billing specialist — recovery queue, declines, expiring cards, recovery metrics',
  icon: 'IconRefresh',
  role: 'BILLING_SPECIALIST',

  widgets: [
    // ── Recovery KPIs ─────────────────────────────────────────
    {
      type: 'KPI_ROW',
      span: 'full',
      cards: [
        {
          label: 'Recovery Queue',
          query: { object: 'recoveryItem', aggregation: 'COUNT', filter: { status: 'pending' } },
          format: 'NUMBER',
        },
        {
          label: 'Today\'s Declines',
          query: { object: 'billingEvent', aggregation: 'COUNT', filter: { status: 'declined', date: 'TODAY' } },
          format: 'NUMBER',
        },
        {
          label: 'Recovery Rate (30d)',
          query: { object: 'recoveryItem', aggregation: 'PERCENT', filter: { status: 'recovered', updatedAt: 'LAST_30_DAYS' } },
          format: 'PERCENT',
        },
        {
          label: 'Cards Expiring (30d)',
          query: { object: 'nmiVault', aggregation: 'COUNT', filter: { cardExpiryDate: 'NEXT_30_DAYS' } },
          format: 'NUMBER',
        },
      ],
    },

    // ── Recovery Queue (Red/Yellow/Green) ─────────────────────
    {
      type: 'KANBAN',
      span: 'full',
      title: 'Recovery Pipeline',
      query: {
        object: 'recoveryItem',
        groupBy: 'status',
        stages: [
          { id: 'pending', label: 'New', color: '#ef4444', backgroundColor: '#fef2f2' },
          { id: 'contacted', label: 'Contacted', color: '#f59e0b', backgroundColor: '#fffbeb' },
          { id: 'payment_link_sent', label: 'Link Sent', color: '#3b82f6', backgroundColor: '#eff6ff' },
          { id: 'recovered', label: 'Recovered', color: '#10b981', backgroundColor: '#ecfdf5' },
        ],
      },
    },

    // ── Today's Declines ──────────────────────────────────────
    {
      type: 'TABLE',
      span: 'half',
      title: 'Today\'s Declined Payments',
      query: { object: 'billingEvent', filter: { status: 'declined', date: 'TODAY' }, sort: 'createdAt', direction: 'DESC' },
      columns: ['customerProfileId', 'amount', 'declineReason', 'createdAt'],
    },

    // ── Cards Expiring Soon ───────────────────────────────────
    {
      type: 'TABLE',
      span: 'half',
      title: 'Cards Expiring Within 30 Days',
      query: { object: 'nmiVault', filter: { cardExpiryDate: 'NEXT_30_DAYS' }, sort: 'cardExpiryDate' },
      columns: ['customerProfileId', 'cardLastFour', 'cardExpiryDate', 'cardBrand'],
    },

    // ── Recovery by Source ────────────────────────────────────
    {
      type: 'PIE_CHART',
      span: 'half',
      title: 'Recovery by Source',
      query: { object: 'recoveryItem', aggregation: 'COUNT', groupBy: 'recoverySource', filter: { status: 'recovered', updatedAt: 'LAST_30_DAYS' } },
    },
  ],
});
