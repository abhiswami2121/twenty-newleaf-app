// Twenty Apps SDK Configuration — NewLeaf CRM
// Target: https://crm.newleaf.financial
// Version: 0.3.0-masterpiece · Phase B: Theme + Design System

import type { TwentyAppConfig } from 'twenty-sdk';

const config: TwentyAppConfig = {
  name: 'newleaf-crm',
  version: '0.3.0',
  description: 'NewLeaf Financial — World-Class CRM (25 Custom Objects + 8 Connectors + Design System)',
  author: 'NewLeaf Financial <info@newleaf.financial>',
  target: {
    url: process.env.TWENTY_SERVER_URL || 'https://crm.newleaf.financial',
    apiKey: process.env.TWENTY_API_KEY,
  },

  // ── Branding ────────────────────────────────────────────────
  branding: {
    name: 'NewLeaf CRM',
    logo: 'https://newleaf.financial/logo.svg',
    favicon: 'https://newleaf.financial/favicon.ico',
    primaryColor: '#06b6a4',
  },

  // ── Theme ───────────────────────────────────────────────────
  theme: {
    default: 'newleaf-light',
    themes: [
      'newleaf-light',   // Brand teal on slate neutrals (Linear-inspired)
      'newleaf-dark',    // Dark mode variant
    ],
    path: './themes/',
  },

  // ── Sidebar ─────────────────────────────────────────────────
  sidebar: {
    brandLabel: 'NewLeaf',
    brandSubLabel: 'CRM',
    brandLogo: 'N',
    brandLogoGradient: 'linear-gradient(135deg, #2dd4bf, #0d9488)',
    sections: [
      {
        label: 'Workspace',
        items: [
          { id: 'home', label: 'Home', icon: 'IconDashboard', view: 'admin-overview' },
          { id: 'customers', label: 'Customers', icon: 'IconUsers', view: 'customer-list', badge: '2,900' },
          { id: 'billing', label: 'Billing', icon: 'IconCreditCard', view: null, badge: '169' },
          { id: 'communications', label: 'Communications', icon: 'IconMessage', view: null, badge: '14k' },
          { id: 'support', label: 'Support', icon: 'IconLifebuoy', view: null, badge: '500' },
          { id: 'disputes', label: 'Disputes', icon: 'IconFileText', view: 'dispute-board', badge: '13' },
        ],
      },
      {
        label: 'Connectors',
        items: [
          { id: 'conn-vapi', label: 'VAPI Voice AI', connectorDot: 'vapi', badge: '17.8k' },
          { id: 'conn-freshcaller', label: 'Freshcaller', connectorDot: 'freshcaller', badge: '18.4k' },
          { id: 'conn-ghl', label: 'GHL SMS/Email', connectorDot: 'ghl', badge: '14k' },
          { id: 'conn-nmi', label: 'NMI Payments', connectorDot: 'nmi', badge: '228' },
          { id: 'conn-hyperswitch', label: 'Hyperswitch', connectorDot: 'hyperswitch', badge: 'soon' },
          { id: 'conn-slack', label: 'Slack', connectorDot: 'slack', badge: '362' },
          { id: 'conn-dpp', label: 'DPP Credit', connectorDot: 'dpp', badge: 'bill due!', badgeColor: 'danger' },
          { id: 'conn-base44', label: 'Base44 Legacy', connectorDot: 'base44' },
        ],
      },
    ],
    footer: {
      userName: 'Abhi Swami',
      userRole: 'Super Admin',
      userInitial: 'A',
      statusDot: 'online',
    },
  },

  // ── Command Palette (⌘K) ───────────────────────────────────
  commandPalette: {
    enabled: true,
    shortcut: '⌘K',
    placeholder: 'Search customers, pages, actions…',
    groups: [
      { label: 'Customers', searchFields: ['firstName', 'lastName', 'email', 'phone'], object: 'customerProfile' },
      { label: 'Pages', items: [
        { label: 'Home Dashboard', shortcut: '⌘1', navigate: 'admin-overview' },
        { label: 'Customers Table', shortcut: '⌘2', navigate: 'customer-list' },
        { label: 'Pipeline Kanban', shortcut: '⌘3', navigate: 'pipeline-kanban' },
        { label: 'Dispute Board', shortcut: '⌘4', navigate: 'dispute-board' },
      ]},
      { label: 'Actions', items: [
        { label: 'Create Customer', shortcut: '⌘N', action: 'create-customer' },
        { label: 'Send Payment Link', action: 'send-payment-link' },
        { label: 'View Connector Health', action: 'connector-health' },
        { label: 'Run Billing Report', action: 'billing-report' },
      ]},
    ],
    modalWidth: '600px',
  },

  // ── Features ────────────────────────────────────────────────
  features: {
    customObjects: true,
    workflows: true,
    dashboards: true,
    views: true,
    layouts: true,
    agents: true,
  },
};

export default config;
