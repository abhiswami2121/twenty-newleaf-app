import { defineDashboard } from 'twenty-sdk';

export default defineDashboard({
  name: 'customer-concierge-dashboard',
  label: 'Customer Concierge',
  icon: 'IconHeadset',
  description: 'Agent-facing dashboard for Customer Concierge agents. Open tickets, recent customer messages, scheduled callbacks, and CSAT metrics.',
  widgets: [
    {
      type: 'metric',
      label: 'Open Tickets',
      position: { x: 0, y: 0, w: 3, h: 2 },
      config: { objectName: 'supportTicket', filter: { status: 'open' }, aggregation: 'count' },
    },
    {
      type: 'metric',
      label: 'Scheduled Callbacks',
      position: { x: 3, y: 0, w: 3, h: 2 },
      config: { objectName: 'callEvent', filter: { status: 'scheduled' }, aggregation: 'count' },
    },
    {
      type: 'metric',
      label: 'Avg Response Time',
      position: { x: 6, y: 0, w: 3, h: 2 },
      config: { objectName: 'supportTicket', aggregation: 'avg', field: 'firstResponseTime' },
    },
    {
      type: 'metric',
      label: 'CSAT Score',
      position: { x: 9, y: 0, w: 3, h: 2 },
      config: { objectName: 'supportTicket', aggregation: 'avg', field: 'csatScore' },
    },
    {
      type: 'list',
      label: 'Recent Messages',
      position: { x: 0, y: 2, w: 6, h: 4 },
      config: { objectName: 'communicationLog', limit: 20, sort: { field: 'createdAt', direction: 'desc' } },
    },
    {
      type: 'list',
      label: 'Upcoming Callbacks',
      position: { x: 6, y: 2, w: 6, h: 4 },
      config: { objectName: 'callEvent', filter: { status: 'scheduled' }, limit: 15, sort: { field: 'scheduledAt', direction: 'asc' } },
    },
    {
      type: 'table',
      label: 'Open Tickets',
      position: { x: 0, y: 6, w: 12, h: 4 },
      config: { objectName: 'supportTicket', filter: { status: 'open' }, columns: ['customerName', 'subject', 'priority', 'assignedTo', 'createdAt'], limit: 25 },
    },
  ],
});
