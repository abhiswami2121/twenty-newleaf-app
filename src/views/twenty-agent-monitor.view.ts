import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'twenty-agent-monitor',
  label: 'Agent Monitor',
  type: 'table',
  icon: 'IconRobot',
  objectName: 'agentSession',
  description: 'Monitor Twenty agent activity: agent name, model, turns, and last active time.',
  filters: [],
  columns: [
    {
      field: 'agentName',
      label: 'Agent Name',
      type: 'text',
      width: 200,
    },
    {
      field: 'model',
      label: 'Model',
      type: 'chip',
      width: 160,
      options: [
        { value: 'claude-opus-4', label: 'Claude Opus 4', color: '#6366f1' },
        { value: 'claude-sonnet-4', label: 'Claude Sonnet 4', color: '#3b82f6' },
        { value: 'claude-haiku-4', label: 'Claude Haiku 4', color: '#22c55e' },
        { value: 'deepseek-v4-pro', label: 'DeepSeek V4', color: '#8b5cf6' },
      ],
    },
    {
      field: 'totalTurns',
      label: 'Total Turns',
      type: 'number',
      width: 120,
    },
    {
      field: 'turnsToday',
      label: 'Turns Today',
      type: 'number',
      width: 120,
    },
    {
      field: 'sessionStatus',
      label: 'Status',
      type: 'chip',
      width: 100,
      options: [
        { value: 'active', label: 'Active', color: '#22c55e' },
        { value: 'idle', label: 'Idle', color: '#f59e0b' },
        { value: 'offline', label: 'Offline', color: '#6b7280' },
      ],
    },
    {
      field: 'lastActive',
      label: 'Last Active',
      type: 'date',
      width: 170,
    },
    {
      field: 'tasksCompleted',
      label: 'Tasks Done',
      type: 'number',
      width: 120,
    },
    {
      field: 'domain',
      label: 'Domain',
      type: 'text',
      width: 160,
    },
  ],
  sorting: [{ field: 'lastActive', direction: 'desc' }],
  isDefault: false,
});
