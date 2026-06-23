// Twenty Apps SDK Configuration — NewLeaf CRM
// Target: https://crm.newleaf.financial
// Version: 0.3.0-masterpiece

import type { TwentyAppConfig } from 'twenty-sdk';

const config: TwentyAppConfig = {
  name: 'newleaf-crm',
  version: '0.3.0',
  description: 'NewLeaf Financial — World-Class CRM (25 Custom Objects + 8 Connectors)',
  author: 'NewLeaf Financial <info@newleaf.financial>',
  target: {
    url: process.env.TWENTY_SERVER_URL || 'https://crm.newleaf.financial',
    apiKey: process.env.TWENTY_API_KEY,
  },
  branding: {
    name: 'NewLeaf CRM',
    logo: 'https://newleaf.financial/logo.svg',
    favicon: 'https://newleaf.financial/favicon.ico',
    primaryColor: '#06b6a4',
  },
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
