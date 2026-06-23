// Pipeline Kanban View — 12-Stage Drag-to-Transition Pipeline
// Groups customers by pipelineStage with colored stage columns
// Drag card to new stage → auto-trigger stage-entry automations

import { defineView } from 'twenty-sdk/define';
import { STAGE_COLORS } from '../themes/connector-colors';

export default defineView({
  object: 'customerProfile',
  name: 'pipeline-kanban',
  label: 'Pipeline Kanban',
  description: 'Full 12-stage pipeline with drag-and-drop stage transitions',
  type: 'KANBAN',
  icon: 'IconColumns',

  groupBy: 'pipelineStage',

  // Fields displayed on each kanban card
  cardFields: [
    'firstName',
    'lastName',
    'agentEmail',
    'paymentAmount',
    'pipelineStage',
    'lastActivity',
  ],

  // 12 pipeline stages with colors from design system
  stages: Object.entries(STAGE_COLORS).map(([key, { label, color, bg }]) => ({
    id: key,
    label,
    color,
    backgroundColor: bg,
  })),

  // Default sort: newest first within each stage
  sortBy: 'updatedAt',
  sortDirection: 'DESC',

  // Filter out archived/deleted
  filters: {
    isArchived: { eq: false },
  },

  // Card click → open Customer 360
  onCardClick: {
    type: 'NAVIGATE_TO_RECORD',
    viewName: 'customer-360-detail',
  },
});
