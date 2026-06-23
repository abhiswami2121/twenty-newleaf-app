// Sales Dashboard — Agent-facing pipeline + tasks + performance
// For sales agents (Jerry, Anna, etc.)

import { defineDashboard } from 'twenty-sdk/define';

export default defineDashboard({
  name: 'sales-dashboard',
  label: 'Sales Dashboard',
  description: 'Agent-facing — my pipeline, today’s tasks, recent calls, performance vs team',
  icon: 'IconChartBar',
  role: 'SALES_AGENT',

  widgets: [
    // ── My KPIs ───────────────────────────────────────────────
    {
      type: 'KPI_ROW',
      span: 'full',
      cards: [
        {
          label: 'My Pipeline',
          query: { object: 'customerProfile', aggregation: 'COUNT', filter: { agentEmail: 'CURRENT_USER', pipelineStage: { in: ['LEAD', 'QUALIFIED', 'ANALYZED', 'ENROLLED_PENDING'] } } },
          format: 'NUMBER',
        },
        {
          label: 'Enrollments This Month',
          query: { object: 'customerProfile', aggregation: 'COUNT', filter: { agentEmail: 'CURRENT_USER', enrolledAt: 'THIS_MONTH' } },
          format: 'NUMBER',
        },
        {
          label: 'My Close Rate',
          query: { object: 'customerProfile', aggregation: 'PERCENT', filter: { agentEmail: 'CURRENT_USER', pipelineStage: 'ACTIVE_SERVICE' } },
          format: 'PERCENT',
        },
        {
          label: 'Tasks Due Today',
          query: { object: 'newleafTask', aggregation: 'COUNT', filter: { assignee: 'CURRENT_USER', dueDate: 'TODAY', status: { not: 'COMPLETED' } } },
          format: 'NUMBER',
        },
      ],
    },

    // ── My Pipeline Kanban ────────────────────────────────────
    {
      type: 'KANBAN',
      span: 'full',
      title: 'My Pipeline',
      query: {
        object: 'customerProfile',
        filter: { agentEmail: 'CURRENT_USER' },
        groupBy: 'pipelineStage',
        stages: ['LEAD', 'QUALIFIED', 'ANALYZED', 'ENROLLED_PENDING', 'ACTIVE_SERVICE'],
      },
    },

    // ── Today's Tasks ─────────────────────────────────────────
    {
      type: 'TABLE',
      span: 'half',
      title: 'Today\'s Tasks',
      query: { object: 'newleafTask', filter: { assignee: 'CURRENT_USER', dueDate: 'TODAY', status: { not: 'COMPLETED' } }, sort: 'priority' },
      columns: ['title', 'priority', 'customerProfileId', 'status', 'dueDate'],
    },

    // ── Recent Calls ──────────────────────────────────────────
    {
      type: 'TABLE',
      span: 'half',
      title: 'Recent Calls',
      query: { object: 'callEvent', filter: { agentEmail: 'CURRENT_USER', createdAt: 'LAST_7_DAYS' }, sort: 'createdAt', direction: 'DESC', limit: 10 },
      columns: ['customerProfileId', 'disposition', 'duration', 'createdAt'],
    },

    // ── Upcoming Follow-ups ───────────────────────────────────
    {
      type: 'TABLE',
      span: 'half',
      title: 'Upcoming Follow-ups',
      query: { object: 'newleafTask', filter: { assignee: 'CURRENT_USER', dueDate: 'THIS_WEEK', status: { not: 'COMPLETED' } }, sort: 'dueDate', limit: 10 },
      columns: ['title', 'customerProfileId', 'dueDate', 'priority'],
    },
  ],
});
