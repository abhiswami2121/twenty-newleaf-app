import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'connector-health',
  label: 'Connector Health',
  type: 'table',
  icon: 'IconPlugConnected',
  objectName: 'connectorHealth',
  description: 'Real-time health status for all integration connectors.',
  filters: [],
  columns: [
    {
      field: 'connector',
      label: 'Connector',
      type: 'text',
      width: 160,
    },
    {
      field: 'status',
      label: 'Status',
      type: 'chip',
      width: 120,
      options: [
        { value: 'ok', label: 'OK', color: '#22c55e' },
        { value: 'degraded', label: 'Degraded', color: '#f59e0b' },
        { value: 'down', label: 'Down', color: '#ef4444' },
      ],
    },
    {
      field: 'latencyMs',
      label: 'Latency',
      type: 'number',
      width: 100,
      suffix: 'ms',
    },
    {
      field: 'lastChecked',
      label: 'Last Checked',
      type: 'date',
      width: 180,
    },
    {
      field: 'lastError',
      label: 'Last Error',
      type: 'text',
      width: 300,
      truncate: true,
    },
    {
      field: 'uptime',
      label: 'Uptime',
      type: 'number',
      width: 100,
      suffix: '%',
    },
  ],
  sorting: [{ field: 'status', direction: 'asc' }],
  isDefault: false,
});
