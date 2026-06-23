// Admin Dashboard — CEO/Admin overview (Abhi)
// KPIs: MRR, active subs, decline rate, at-risk count
// Widgets: connector health strip, revenue chart, attention queue, recent activity

import { defineDashboard } from 'twenty-sdk/define';

export default defineDashboard({
  name: 'admin-overview',
  label: 'Admin Dashboard',
  description: 'CEO dashboard — MRR, pipeline funnel, connector health, attention queue',
  icon: 'IconDashboard',
  role: 'ADMIN',

  widgets: [
    // ── KPI Strip (4 cards) ──────────────────────────────────
    {
      type: 'KPI_ROW',
      span: 'full',
      cards: [
        {
          label: 'Monthly Recurring Revenue',
          query: { object: 'billingEvent', aggregation: 'SUM', field: 'amount', filter: { status: 'success', period: 'THIS_MONTH' } },
          format: 'CURRENCY',
          trend: 'UP_4.2%',
        },
        {
          label: 'Active Subscriptions',
          query: { object: 'customerProfile', aggregation: 'COUNT', filter: { pipelineStage: 'ACTIVE_SERVICE' } },
          format: 'NUMBER',
          trend: '+3_THIS_WEEK',
        },
        {
          label: 'Decline Rate',
          query: { object: 'billingEvent', aggregation: 'PERCENT', field: 'status', filter: { status: 'declined', period: 'LAST_30_DAYS' } },
          format: 'PERCENT',
          trend: 'DOWN_0.8%',
        },
        {
          label: 'At Risk',
          query: { object: 'customerProfile', aggregation: 'COUNT', filter: { pipelineStage: 'AT_RISK' } },
          format: 'NUMBER',
          trend: 'CRITICAL_8',
        },
      ],
    },

    // ── Connector Health Strip ────────────────────────────────
    {
      type: 'CONNECTOR_HEALTH',
      span: 'full',
      connectors: ['vapi', 'freshcaller', 'ghl', 'nmi', 'hyperswitch', 'slack', 'dpp', 'base44'],
    },

    // ── Pipeline Funnel Chart ─────────────────────────────────
    {
      type: 'FUNNEL_CHART',
      span: 'half',
      title: 'Pipeline Funnel',
      query: { object: 'customerProfile', groupBy: 'pipelineStage' },
    },

    // ── Revenue Chart (30-day) ────────────────────────────────
    {
      type: 'LINE_CHART',
      span: 'half',
      title: 'Revenue — Last 30 Days',
      query: {
        object: 'billingEvent',
        aggregation: 'SUM',
        field: 'amount',
        groupBy: 'date',
        filter: { status: 'success', period: 'LAST_30_DAYS' },
      },
      chartOptions: {
        gradientFill: true,
        lineColor: '#06b6a4',
        pointRadius: 4,
        minimalAxes: true,
      },
    },

    // ── Attention Queue ───────────────────────────────────────
    {
      type: 'TABLE',
      span: 'half',
      title: 'Attention Queue',
      query: { object: 'customerProfile', filter: { pipelineStage: { in: ['AT_RISK', 'RECOVERY_QUEUE', 'DISPUTE_ESCALATION'] } }, sort: 'updatedAt', limit: 10 },
      columns: ['firstName', 'lastName', 'pipelineStage', 'agentEmail', 'lastActivity'],
    },

    // ── Recent Activity Feed ──────────────────────────────────
    {
      type: 'ACTIVITY_FEED',
      span: 'half',
      title: 'Recent Activity',
      query: { object: 'activity', sort: 'occurredAt', direction: 'DESC', limit: 10 },
    },

    // ── Top Performing Agents ─────────────────────────────────
    {
      type: 'TABLE',
      span: 'half',
      title: 'Top Performing Agents',
      query: { object: 'customerProfile', aggregation: 'COUNT', groupBy: 'agentEmail', sort: 'count', direction: 'DESC', limit: 5 },
      columns: ['agentEmail', 'count'],
    },

    // ── Recovery Items ───────────────────────────────────────
    {
      type: 'TABLE',
      span: 'half',
      title: 'Recovery Queue',
      query: { object: 'recoveryItem', filter: { status: 'pending' }, sort: 'createdAt', limit: 10 },
      columns: ['customerProfileId', 'amount', 'declineReason', 'attempts', 'lastAttemptAt'],
    },
  ],
});
