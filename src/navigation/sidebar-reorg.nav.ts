import { defineNavigation } from 'twenty-sdk';

export default defineNavigation({
  groups: [
    {
      id: 'dashboards',
      label: 'Dashboards',
      icon: 'IconDashboard',
      order: 1,
      items: [
        { type: 'dashboard', dashboardId: 'admin-overview', label: 'Admin Overview' },
        { type: 'dashboard', dashboardId: 'sales-dashboard', label: 'Sales Dashboard' },
        { type: 'dashboard', dashboardId: 'recovery-dashboard', label: 'Recovery Dashboard' },
        { type: 'dashboard', dashboardId: 'dispute-dashboard', label: 'Dispute Dashboard' },
      ],
    },
    {
      id: 'contacts',
      label: 'Contacts',
      icon: 'IconUsers',
      order: 2,
      items: [
        { type: 'object', objectName: 'person', label: 'People' },
        { type: 'view', viewId: 'customer-roster', label: 'Customer Roster' },
        { type: 'view', viewId: 'pipeline-kanban', label: 'Pipeline' },
        { type: 'view', viewId: 'sales-leaderboard', label: 'Leaderboard' },
      ],
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: 'IconCreditCard',
      order: 3,
      items: [
        { type: 'object', objectName: 'subscription', label: 'Subscriptions' },
        { type: 'object', objectName: 'payment', label: 'Payments' },
        { type: 'view', viewId: 'today-payment-schedule', label: "Today's Schedule" },
        { type: 'view', viewId: 'at-risk-subscriptions', label: 'At Risk' },
        { type: 'view', viewId: 'billing-queue-monitor', label: 'Billing Queue' },
        { type: 'view', viewId: 'recovery-queue', label: 'Recovery Queue' },
      ],
    },
    {
      id: 'comms',
      label: 'Communications',
      icon: 'IconMessage',
      order: 4,
      items: [
        { type: 'view', viewId: 'call-log', label: 'Call Log' },
        { type: 'view', viewId: 'email-sms-log', label: 'Email & SMS' },
        { type: 'object', objectName: 'activity_log', label: 'Activity' },
      ],
    },
    {
      id: 'services',
      label: 'Services',
      icon: 'IconShieldCheck',
      order: 5,
      items: [
        { type: 'object', objectName: 'dispute', label: 'Disputes' },
        { type: 'view', viewId: 'active-disputes', label: 'Active Disputes' },
        { type: 'object', objectName: 'agreement', label: 'Agreements' },
        { type: 'object', objectName: 'contract', label: 'Contracts' },
        { type: 'view', viewId: 'agreement-status', label: 'Agreement Status' },
      ],
    },
    {
      id: 'operations',
      label: 'Operations',
      icon: 'IconSettingsAutomation',
      order: 6,
      items: [
        { type: 'view', viewId: 'connector-health-view', label: 'Connector Health' },
        { type: 'view', viewId: 'recent-activity', label: 'Recent Activity' },
        { type: 'view', viewId: 'twenty-agent-monitor', label: 'Agent Monitor' },
        { type: 'object', objectName: 'support_ticket', label: 'Support Tickets' },
      ],
    },
    {
      id: 'connectors',
      label: 'Connectors',
      icon: 'IconPlugConnected',
      order: 7,
      items: [
        { type: 'object', objectName: 'connector_health', label: 'Health Status' },
      ],
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'IconSettings',
      order: 8,
      items: [
        { type: 'app', appId: 'newleaf', label: 'NewLeaf Settings' },
      ],
    },
  ],
});
