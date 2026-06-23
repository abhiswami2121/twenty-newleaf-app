// NewLeaf Design System — Light Theme
// Brand: Teal #06b6a4 · Neutrals: Slate · 8 Connector Accent Colors
// Design philosophy: Linear meets Ramp meets Stripe Dashboard
// Reference: /home/neptune/twenty-ui-poc/index.html

import type { ThemeConfig } from 'twenty-sdk/define';

const newleafTheme: ThemeConfig = {
  name: 'newleaf-light',
  label: 'NewLeaf Light',
  description: 'NewLeaf Financial brand light theme with teal primary + slate neutrals',

  // ── Brand Colors (Teal #06b6a4) ────────────────────────────
  palette: {
    // Primary brand — Teal scale
    brand: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e',
      primary: '#06b6a4',
    },

    // Neutrals — Slate scale (Linear-inspired)
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },

    // Semantic
    success: '#10b981',
    successBg: '#ecfdf5',
    warning: '#f59e0b',
    warningBg: '#fffbeb',
    danger: '#ef4444',
    dangerBg: '#fef2f2',
    info: '#3b82f6',
    infoBg: '#eff6ff',
  },

  // ── Typography ──────────────────────────────────────────────
  typography: {
    fontFamilySans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontFamilyMono: "'SF Mono', 'Monaco', 'Inconsolata', monospace",
    fontSizeScale: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
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

  // ── Spacing (4px base scale) ────────────────────────────────
  spacing: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
  },

  // ── Border Radius ───────────────────────────────────────────
  borderRadius: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },

  // ── Shadows (borders over shadows, minimalist) ─────────────
  shadow: {
    xs: '0 1px 2px rgba(0,0,0,0.05)',
    sm: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
    md: '0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)',
    glow: '0 0 20px rgba(6,182,164,0.25)',
  },

  // ── Motion ──────────────────────────────────────────────────
  motion: {
    durationInstant: '75ms',
    durationFast: '150ms',
    durationNormal: '300ms',
    durationSlow: '500ms',
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // ── Layout ──────────────────────────────────────────────────
  layout: {
    sidebarWidth: '260px',
    topbarHeight: '56px',
  },

  // ── Pipeline Stage Colors ───────────────────────────────────
  pipelineStages: {
    LEAD: { label: 'Lead', color: '#64748b', bg: '#f1f5f9' },
    QUALIFIED: { label: 'Qualified', color: '#3b82f6', bg: '#eff6ff' },
    ANALYZED: { label: 'Analyzed', color: '#06b6a4', bg: '#ecfeff' },
    ENROLLED_PENDING: { label: 'Pending Enrollment', color: '#f59e0b', bg: '#fffbeb' },
    ACTIVE_SERVICE: { label: 'Active Service', color: '#10b981', bg: '#ecfdf5' },
    DISPUTE_ACTIVE: { label: 'In Dispute', color: '#8b5cf6', bg: '#f5f3ff' },
    GRADUATED: { label: 'Graduated', color: '#059669', bg: '#ecfdf5' },
    AT_RISK: { label: 'At Risk', color: '#f97316', bg: '#fff7ed' },
    CHURNED: { label: 'Churned', color: '#ef4444', bg: '#fef2f2' },
    ALUMNI: { label: 'Alumni', color: '#94a3b8', bg: '#f8fafc' },
    RECOVERY_QUEUE: { label: 'Recovery Queue', color: '#eab308', bg: '#fefce8' },
    DISPUTE_ESCALATION: { label: 'Dispute Escalation', color: '#dc2626', bg: '#fef2f2' },
  },

  // ── Connector Colors ───────────────────────────────────────
  connectors: {
    vapi: { color: '#8b5cf6', bg: '#f5f3ff' },
    freshcaller: { color: '#06b6d4', bg: '#ecfeff' },
    ghl: { color: '#f97316', bg: '#fff7ed' },
    nmi: { color: '#3b82f6', bg: '#eff6ff' },
    hyperswitch: { color: '#a855f7', bg: '#faf5ff' },
    slack: { color: '#4a154b', bg: '#fdf2f8' },
    dpp: { color: '#ef4444', bg: '#fef2f2' },
    base44: { color: '#64748b', bg: '#f8fafc' },
  },
};

export default newleafTheme;
