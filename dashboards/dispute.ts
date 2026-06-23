// Dispute Dashboard — Dispute specialist view (Shazam)
// Active dispute rounds by bureau, letters to mail, deadlines, deletion rate

import { defineDashboard } from 'twenty-sdk/define';

export default defineDashboard({
  name: 'dispute-dashboard',
  label: 'Dispute Dashboard',
  description: 'Dispute specialist — active rounds, letters to mail, 35-day deadlines, deletion rate',
  icon: 'IconFileText',
  role: 'DISPUTE_SPECIALIST',

  widgets: [
    // ── Dispute KPIs ──────────────────────────────────────────
    {
      type: 'KPI_ROW',
      span: 'full',
      cards: [
        {
          label: 'Active Disputes',
          query: { object: 'dispute', aggregation: 'COUNT', filter: { isActive: true } },
          format: 'NUMBER',
        },
        {
          label: 'Letters to Mail Today',
          query: { object: 'dispute', aggregation: 'COUNT', filter: { nextRoundDate: 'TODAY', isActive: true } },
          format: 'NUMBER',
        },
        {
          label: '35-Day Deadlines',
          query: { object: 'dispute', aggregation: 'COUNT', filter: { roundDeadline: 'NEXT_7_DAYS', isActive: true } },
          format: 'NUMBER',
        },
        {
          label: 'Deletion Rate (30d)',
          query: { object: 'dispute', aggregation: 'PERCENT', filter: { status: 'deleted', updatedAt: 'LAST_30_DAYS' } },
          format: 'PERCENT',
          trend: 'UP_2.1%',
        },
      ],
    },

    // ── Active Disputes by Bureau ─────────────────────────────
    {
      type: 'BAR_CHART',
      span: 'half',
      title: 'Active Disputes by Bureau',
      query: { object: 'dispute', aggregation: 'COUNT', groupBy: 'bureau', filter: { isActive: true } },
    },

    // ── Rounds Overview ───────────────────────────────────────
    {
      type: 'TABLE',
      span: 'half',
      title: 'Disputes Approaching Deadline',
      query: { object: 'dispute', filter: { isActive: true, roundDeadline: 'NEXT_7_DAYS' }, sort: 'roundDeadline' },
      columns: ['customerProfileId', 'bureau', 'currentRound', 'roundDeadline', 'negativeItemCount'],
    },

    // ── Letters to Mail Today ─────────────────────────────────
    {
      type: 'TABLE',
      span: 'half',
      title: 'Letters to Mail Today',
      query: { object: 'dispute', filter: { nextRoundDate: 'TODAY', isActive: true } },
      columns: ['customerProfileId', 'bureau', 'currentRound', 'creditorName', 'letterTemplate'],
    },

    // ── CFPB Escalations ──────────────────────────────────────
    {
      type: 'TABLE',
      span: 'half',
      title: 'CFPB Escalations',
      query: { object: 'dispute', filter: { currentRound: 'CFPB', isActive: true }, sort: 'createdAt', direction: 'DESC' },
      columns: ['customerProfileId', 'bureau', 'createdAt', 'status'],
    },

    // ── Deletion Timeline (30 days) ───────────────────────────
    {
      type: 'LINE_CHART',
      span: 'full',
      title: 'Deletions — Last 30 Days',
      query: { object: 'dispute', aggregation: 'COUNT', groupBy: 'date', filter: { status: 'deleted', updatedAt: 'LAST_30_DAYS' } },
      chartOptions: { gradientFill: true, lineColor: '#10b981' },
    },
  ],
});
