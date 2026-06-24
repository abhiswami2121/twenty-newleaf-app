import { defineTheme } from 'twenty-sdk';

export default defineTheme({
  name: 'newleaf',
  label: 'NewLeaf',
  colors: {
    primary: '#06b6a4',       // Teal — brand primary
    primaryDark: '#0d9488',   // Dark teal
    primaryLight: '#5eead4',  // Light teal
    secondary: '#0f172a',     // Dark navy
    secondaryLight: '#1e293b', // Slate navy
    background: '#0f172a',    // Dark background
    surface: '#1e293b',       // Card/surface
    surfaceHover: '#334155',  // Hover state
    text: '#f8fafc',          // Primary text (light on dark)
    textSecondary: '#94a3b8', // Secondary text
    danger: '#ef4444',
    warning: '#f59e0b',
    success: '#10b981',
    info: '#3b82f6',
    border: '#334155',
  },
  fontFamily: 'Inter, system-ui, sans-serif',
  borderRadius: '8px',
  logo: {
    light: '/assets/newleaf-logo-light.svg',
    dark: '/assets/newleaf-logo-dark.svg',
  },
  favicon: '/assets/newleaf-favicon.png',
});
