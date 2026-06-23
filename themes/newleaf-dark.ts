// NewLeaf Design System — Dark Theme
// Inverts light theme: dark backgrounds, light text, teal still primary
// Reference: /home/neptune/twenty-ui-poc/index.html light theme

import type { ThemeConfig } from 'twenty-sdk/define';

const newleafDark: ThemeConfig = {
  name: 'newleaf-dark',
  label: 'NewLeaf Dark',
  description: 'NewLeaf Financial dark theme — teal primary on slate-dark backgrounds',

  // ── Brand Colors (Teal #06b6a4) — same brand, adjusted luminance for dark bg ──
  palette: {
    brand: {
      50: '#042f2e',
      100: '#134e4a',
      200: '#115e59',
      300: '#0f766e',
      400: '#0d9488',
      500: '#14b8a6',
      600: '#2dd4bf',
      700: '#5eead4',
      800: '#99f6e4',
      900: '#ccfbf1',
      950: '#f0fdfa',
      primary: '#06b6a4',
    },

    neutral: {
      50: '#020617',
      100: '#0f172a',
      200: '#1e293b',
      300: '#334155',
      400: '#475569',
      500: '#64748b',
      600: '#94a3b8',
      700: '#cbd5e1',
      800: '#e2e8f0',
      900: '#f1f5f9',
      950: '#f8fafc',
    },

    success: '#34d399',
    successBg: '#064e3b',
    warning: '#fbbf24',
    warningBg: '#78350f',
    danger: '#f87171',
    dangerBg: '#7f1d1d',
    info: '#60a5fa',
    infoBg: '#1e3a5f',
  },

  typography: {
    fontFamilySans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontFamilyMono: "'SF Mono', 'Monaco', 'Inconsolata', monospace",
    fontSizeScale: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    letterSpacing: '-0.02em',
    lineHeight: 1.5,
    antialiased: true,
  },

  spacing: {
    0: '0px', 1: '4px', 2: '8px', 3: '12px', 4: '16px',
    5: '20px', 6: '24px', 8: '32px', 10: '40px', 12: '48px', 16: '64px',
  },

  borderRadius: {
    xs: '4px', sm: '6px', md: '8px', lg: '12px', xl: '16px', full: '9999px',
  },

  shadow: {
    xs: '0 1px 2px rgba(0,0,0,0.3)',
    sm: '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
    md: '0 4px 6px -1px rgba(0,0,0,0.4), 0 2px 4px -2px rgba(0,0,0,0.3)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.5), 0 4px 6px -4px rgba(0,0,0,0.3)',
    glow: '0 0 24px rgba(6,182,164,0.35)',
  },

  motion: {
    durationInstant: '75ms',
    durationFast: '150ms',
    durationNormal: '300ms',
    durationSlow: '500ms',
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  layout: {
    sidebarWidth: '260px',
    topbarHeight: '56px',
  },

  pipelineStages: {
    LEAD: { label: 'Lead', color: '#94a3b8', bg: '#1e293b' },
    QUALIFIED: { label: 'Qualified', color: '#60a5fa', bg: '#1e3a5f' },
    ANALYZED: { label: 'Analyzed', color: '#2dd4bf', bg: '#134e4a' },
    ENROLLED_PENDING: { label: 'Pending Enrollment', color: '#fbbf24', bg: '#78350f' },
    ACTIVE_SERVICE: { label: 'Active Service', color: '#34d399', bg: '#064e3b' },
    DISPUTE_ACTIVE: { label: 'In Dispute', color: '#a78bfa', bg: '#4c1d95' },
    GRADUATED: { label: 'Graduated', color: '#6ee7b7', bg: '#064e3b' },
    AT_RISK: { label: 'At Risk', color: '#fb923c', bg: '#7c2d12' },
    CHURNED: { label: 'Churned', color: '#f87171', bg: '#7f1d1d' },
    ALUMNI: { label: 'Alumni', color: '#64748b', bg: '#1e293b' },
    RECOVERY_QUEUE: { label: 'Recovery Queue', color: '#facc15', bg: '#713f12' },
    DISPUTE_ESCALATION: { label: 'Dispute Escalation', color: '#fca5a5', bg: '#7f1d1d' },
  },

  connectors: {
    vapi: { color: '#a78bfa', bg: '#4c1d95' },
    freshcaller: { color: '#22d3ee', bg: '#164e63' },
    ghl: { color: '#fb923c', bg: '#7c2d12' },
    nmi: { color: '#60a5fa', bg: '#1e3a5f' },
    hyperswitch: { color: '#c084fc', bg: '#581c87' },
    slack: { color: '#e879f9', bg: '#701a75' },
    dpp: { color: '#f87171', bg: '#7f1d1d' },
    base44: { color: '#94a3b8', bg: '#1e293b' },
  },
};

export default newleafDark;
