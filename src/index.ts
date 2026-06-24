/**
 * NewLeaf Twenty App — Main Entry Point
 *
 * M-COMPREHENSIVE-NEPTUNE-TWENTY-WORLD-CLASS Phase D (2026-06-24)
 *
 * Barrel file re-exporting all modules for the Twenty Apps SDK.
 * Imported by twenty.config.ts via dynamic import() for lazy loading.
 */

// Objects (16: Person extension + 15 custom objects)
export { default as objects } from "./objects";

// Views (15 custom views)
export { default as views } from "./views";

// Dashboards (4 role-based)
export { default as dashboards } from "./dashboards";

// Workflows (30 automations)
export { default as workflows } from "./workflows";

// Agents (4 AI agents: Sales, Recovery, Dispute, Customer)
export { default as agents } from "./agents";

// Skills (25 skills across agents)
export { default as skills } from "./skills";

// Theme (NewLeaf branding)
export { default as theme } from "./theme";

// Layouts (Customer 360 9-tab)
export { default as layouts } from "./layouts";

// Navigation (sidebar reorg 8 groups)
export { default as navigation } from "./navigation";
