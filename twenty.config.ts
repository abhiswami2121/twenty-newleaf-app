/**
 * Twenty CRM App Configuration — NewLeaf Financial
 *
 * M-COMPREHENSIVE-NEPTUNE-TWENTY-WORLD-CLASS Phase D (2026-06-24)
 *
 * This config defines the NewLeaf App SDK package for Twenty CRM.
 * sourceType=local means we deploy from the server filesystem (no marketplace key needed).
 *
 * Cardinal 203: All NewLeaf features ship in ONE Apps SDK package.
 * Cardinal 223: Deployed via sourceType=local + cli-sync.
 */

import type { TwentyAppConfig } from "twenty-sdk";

const config: TwentyAppConfig = {
  name: "NewLeaf",
  description:
    "NewLeaf Financial operations suite — AI-powered credit repair CRM with 4 agents, 25 skills, 15 views, 4 dashboards, and 30 workflows",
  version: "1.0.0",
  icon: "IconLeaf",
  logo: "/assets/newleaf-logo-dark.svg",

  // Source deployment — local filesystem, no marketplace key needed
  sourceType: "local",

  // Objects — imported from src/objects/index.ts
  objects: () => import("./src/objects"),

  // Views
  views: () => import("./src/views"),

  // Dashboards
  dashboards: () => import("./src/dashboards"),

  // Workflows
  workflows: () => import("./src/workflows"),

  // AI Agents
  agents: () => import("./src/agents"),

  // Skills
  skills: () => import("./src/skills"),

  // Theme
  theme: () => import("./src/theme"),

  // Layouts
  layouts: () => import("./src/layouts"),

  // Navigation
  navigation: () => import("./src/navigation"),

  // Application variables (seeded on first deploy)
  applicationVariables: [
    {
      name: "AI_GATEWAY_API_KEY",
      description: "Vercel AI Gateway key for GLM 5.2 model access",
      required: true,
      encrypted: true,
    },
    {
      name: "ANTHROPIC_API_KEY",
      description: "Anthropic API key for Customer Concierge (Claude Sonnet 4.6)",
      required: false,
      encrypted: true,
    },
    {
      name: "NMI_SECURITY_KEY",
      description: "NMI payment gateway security key for vault operations",
      required: true,
      encrypted: true,
    },
    {
      name: "GHL_API_KEY",
      description: "GoHighLevel API key for SMS and CRM operations",
      required: false,
      encrypted: true,
    },
    {
      name: "FORTH_API_KEY",
      description: "Forth Credit API key for credit report pulls",
      required: false,
      encrypted: true,
    },
  ],

  // Cardinal references
  cardinals: [203, 204, 205, 206, 207, 209, 210, 212, 213, 223, 224],
};

export default config;
