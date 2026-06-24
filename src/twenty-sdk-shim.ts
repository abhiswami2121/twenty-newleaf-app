/**
 * twenty-sdk Compatibility Shim
 *
 * M-RESUME-NEPTUNE-TWENTY-FINISH Phase D (2026-06-24)
 *
 * The real twenty-sdk (v0.1.3) is a CLI sync tool without UI/config types.
 * This shim provides the define* config functions and types that the
 * NewLeaf Twenty App 110-file codebase was built against.
 *
 * Used via tsconfig.json paths: "twenty-sdk" → "./src/twenty-sdk-shim.ts"
 */

// ─── Field Type Enum ───
export enum FieldType {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  SELECT = 'SELECT',
  DATE = 'DATE',
  DATE_TIME = 'DATE_TIME',
  CURRENCY = 'CURRENCY',
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  RELATION = 'RELATION',
  BOOLEAN = 'BOOLEAN',
  URL = 'URL',
  RATING = 'RATING',
  MULTI_SELECT = 'MULTI_SELECT',
}

// ─── Relation Type Enum ───
export enum RelationType {
  MANY_TO_ONE = 'MANY_TO_ONE',
  ONE_TO_MANY = 'ONE_TO_MANY',
  MANY_TO_MANY = 'MANY_TO_MANY',
}

// ─── Object Types ───
export interface FieldOption {
  label: string;
  value: string;
  color?: string;
}

export interface FieldDefinition {
  name: string;
  label: string;
  type: FieldType;
  isUnique?: boolean;
  isNullable?: boolean;
  options?: FieldOption[];
  relationType?: RelationType;
  targetObject?: string;
  defaultValue?: unknown;
  description?: string;
  icon?: string;
}

export interface ObjectConfig {
  nameSingular: string;
  labelSingular: string;
  labelPlural: string;
  icon?: string;
  description?: string;
  fields: FieldDefinition[];
}

export interface ObjectExtensionConfig {
  targetObject: string;
  fields: FieldDefinition[];
}

export function defineObject(config: ObjectConfig): ObjectConfig {
  return config;
}

export function defineObjectExtension(config: ObjectExtensionConfig): ObjectExtensionConfig {
  return config;
}

// ─── Agent Types ───
export interface ModelConfiguration {
  provider: string;
  model: string;
  temperature?: number;
  maxTokens?: number;
  topP?: number;
}

export interface AgentConfig {
  name: string;
  label: string;
  icon?: string;
  description?: string;
  prompt: string;
  modelConfiguration: ModelConfiguration;
  skills: string[];
}

export function defineAgent(config: AgentConfig): AgentConfig {
  return config;
}

// ─── View Types ───
export interface ViewFilter {
  field: string;
  operator: string;
  value: string | string[];
}

export interface ViewColumnOption {
  value: string;
  label: string;
  color?: string;
}

export interface ViewColumn {
  field: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'time' | 'currency' | 'chip' | 'relation' | 'boolean' | 'email' | 'phone';
  width?: number;
  options?: ViewColumnOption[];
  truncate?: boolean;
  suffix?: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  color: string;
}

export type ViewColumnDef = ViewColumn | KanbanColumn;

export interface ViewSorting {
  field: string;
  direction: 'asc' | 'desc';
}

export interface ViewConfig {
  name: string;
  label: string;
  type: 'table' | 'kanban' | 'timeline' | 'map' | 'graph';
  icon?: string;
  objectName: string;
  kanbanField?: string;
  groupByField?: string;
  description?: string;
  filters?: ViewFilter[];
  columns?: ViewColumnDef[];
  cardFields?: string[];
  sorting?: ViewSorting[];
  isDefault?: boolean;
}

export function defineView(config: ViewConfig): ViewConfig {
  return config;
}

// ─── Dashboard Types ───
export interface WidgetPosition {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface DashboardWidget {
  type: 'metric' | 'chart' | 'table' | 'list' | 'calendar';
  label: string;
  position: WidgetPosition;
  config?: Record<string, unknown>;
}

export interface DashboardConfig {
  name: string;
  label: string;
  icon?: string;
  description?: string;
  widgets: DashboardWidget[];
}

export function defineDashboard(config: DashboardConfig): DashboardConfig {
  return config;
}

// ─── Workflow Types ───
export interface WorkflowTrigger {
  objectName: string;
  action: string;
}

export interface WorkflowStep {
  type: string;
  name: string;
  config: Record<string, unknown>;
}

export interface WorkflowConfig {
  name: string;
  label: string;
  trigger: WorkflowTrigger;
  steps: WorkflowStep[];
  description?: string;
}

export function defineWorkflow(config: WorkflowConfig): WorkflowConfig {
  return config;
}

// ─── Skill Types ───
export interface SkillConfig {
  name: string;
  label: string;
  icon?: string;
  description?: string;
  content: string;
}

export function defineSkill(config: SkillConfig): SkillConfig {
  return config;
}

// ─── Theme Types ───
export interface ThemeColors {
  primary: string;
  primaryDark?: string;
  primaryLight?: string;
  secondary: string;
  secondaryLight?: string;
  background: string;
  surface: string;
  surfaceHover?: string;
  text: string;
  textSecondary?: string;
  danger: string;
  warning: string;
  success: string;
  info: string;
  border: string;
}

export interface ThemeLogo {
  light: string;
  dark: string;
}

export interface ThemeConfig {
  name: string;
  label: string;
  colors: ThemeColors;
  fontFamily: string;
  borderRadius: string;
  logo: ThemeLogo;
  favicon?: string;
}

export function defineTheme(config: ThemeConfig): ThemeConfig {
  return config;
}

// ─── Layout Types ───
export interface LayoutComponent {
  type: string;
  fields?: string[];
  metrics?: string[];
  source?: string;
  columns?: string[];
  limit?: number;
  groupBy?: string;
}

export interface LayoutTab {
  id: string;
  label: string;
  icon?: string;
  components: LayoutComponent[];
}

export interface LayoutConfig {
  name: string;
  label: string;
  objectName: string;
  tabs: LayoutTab[];
}

export function defineLayout(config: LayoutConfig): LayoutConfig {
  return config;
}

// ─── Navigation Types ───
export interface NavItem {
  type: 'dashboard' | 'object' | 'view' | 'app';
  dashboardId?: string;
  objectName?: string;
  viewId?: string;
  appId?: string;
  label: string;
}

export interface NavGroup {
  id: string;
  label: string;
  icon?: string;
  order: number;
  items: NavItem[];
}

export interface NavigationConfig {
  groups: NavGroup[];
}

export function defineNavigation(config: NavigationConfig): NavigationConfig {
  return config;
}

// ─── Twenty App Config (for twenty.config.ts) ───
export interface TwentyAppConfig {
  name: string;
  description: string;
  version: string;
  icon?: string;
  logo?: string;
  sourceType?: 'local' | 'marketplace';
  objects: () => Promise<unknown>;
  views: () => Promise<unknown>;
  dashboards: () => Promise<unknown>;
  workflows: () => Promise<unknown>;
  agents: () => Promise<unknown>;
  skills: () => Promise<unknown>;
  theme: () => Promise<unknown>;
  layouts: () => Promise<unknown>;
  navigation: () => Promise<unknown>;
  applicationVariables?: ApplicationVariable[];
  cardinals?: number[];
}

export interface ApplicationVariable {
  name: string;
  description: string;
  required: boolean;
  encrypted: boolean;
}
