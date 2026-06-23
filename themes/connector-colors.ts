// Connector Accent Colors — Per-Integration Identity
// 8 connectors each have a unique color + background pair for badges, dots, chips
// Used in sidebar, connector health strip, dashboard cards, and pipeline views

export const CONNECTOR_COLORS = {
  vapi: {
    name: 'VAPI Voice AI',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    darkColor: '#a78bfa',
    darkBg: '#4c1d95',
    icon: 'IconPhone',
  },
  freshcaller: {
    name: 'Freshcaller',
    color: '#06b6d4',
    bg: '#ecfeff',
    darkColor: '#22d3ee',
    darkBg: '#164e63',
    icon: 'IconHeadphones',
  },
  ghl: {
    name: 'GHL SMS/Email',
    color: '#f97316',
    bg: '#fff7ed',
    darkColor: '#fb923c',
    darkBg: '#7c2d12',
    icon: 'IconMessage',
  },
  nmi: {
    name: 'NMI Payments',
    color: '#3b82f6',
    bg: '#eff6ff',
    darkColor: '#60a5fa',
    darkBg: '#1e3a5f',
    icon: 'IconCreditCard',
  },
  hyperswitch: {
    name: 'Hyperswitch',
    color: '#a855f7',
    bg: '#faf5ff',
    darkColor: '#c084fc',
    darkBg: '#581c87',
    icon: 'IconSwitch',
  },
  slack: {
    name: 'Slack',
    color: '#4a154b',
    bg: '#fdf2f8',
    darkColor: '#e879f9',
    darkBg: '#701a75',
    icon: 'IconBrandSlack',
  },
  dpp: {
    name: 'DPP Credit',
    color: '#ef4444',
    bg: '#fef2f2',
    darkColor: '#f87171',
    darkBg: '#7f1d1d',
    icon: 'IconReport',
  },
  base44: {
    name: 'Base44 Legacy',
    color: '#64748b',
    bg: '#f8fafc',
    darkColor: '#94a3b8',
    darkBg: '#1e293b',
    icon: 'IconDatabase',
  },
} as const;

export type ConnectorKey = keyof typeof CONNECTOR_COLORS;

// ── Pipeline Stage Badge Colors ───────────────────────────────
export const STAGE_COLORS = {
  LEAD:               { color: '#64748b', bg: '#f1f5f9', label: 'Lead' },
  QUALIFIED:          { color: '#3b82f6', bg: '#eff6ff', label: 'Qualified' },
  ANALYZED:           { color: '#06b6a4', bg: '#ecfeff', label: 'Analyzed' },
  ENROLLED_PENDING:   { color: '#f59e0b', bg: '#fffbeb', label: 'Pending' },
  ACTIVE_SERVICE:     { color: '#10b981', bg: '#ecfdf5', label: 'Active' },
  DISPUTE_ACTIVE:     { color: '#8b5cf6', bg: '#f5f3ff', label: 'In Dispute' },
  GRADUATED:          { color: '#059669', bg: '#ecfdf5', label: 'Graduated' },
  AT_RISK:            { color: '#f97316', bg: '#fff7ed', label: 'At Risk' },
  CHURNED:            { color: '#ef4444', bg: '#fef2f2', label: 'Churned' },
  ALUMNI:             { color: '#94a3b8', bg: '#f8fafc', label: 'Alumni' },
  RECOVERY_QUEUE:     { color: '#eab308', bg: '#fefce8', label: 'Recovery' },
  DISPUTE_ESCALATION: { color: '#dc2626', bg: '#fef2f2', label: 'Escalated' },
} as const;

export type StageKey = keyof typeof STAGE_COLORS;

// ── Severity Colors (for tickets, alerts, attention queue) ───
export const SEVERITY_COLORS = {
  critical: { color: '#ef4444', bg: '#fef2f2', label: 'Critical' },
  high:     { color: '#f59e0b', bg: '#fffbeb', label: 'High' },
  medium:   { color: '#3b82f6', bg: '#eff6ff', label: 'Medium' },
  low:      { color: '#94a3b8', bg: '#f8fafc', label: 'Low' },
  info:     { color: '#06b6a4', bg: '#f0fdfa', label: 'Info' },
} as const;

export type SeverityKey = keyof typeof SEVERITY_COLORS;
