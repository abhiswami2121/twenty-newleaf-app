// Connector Health View — 8 Connector Status Table
// Shows per-connector sync health, last sync timestamp, record counts
// Uses connector accent colors for status dots

import { defineView } from 'twenty-sdk/define';
import { CONNECTOR_COLORS } from '../themes/connector-colors';

export default defineView({
  object: 'connectorStatus',
  name: 'connector-health',
  label: 'Connector Health',
  description: 'Real-time health status across all 8 connectors with sync metrics',
  type: 'TABLE',
  icon: 'IconPlugConnected',

  columns: [
    { field: 'connectorName', label: 'Connector', width: 200 },
    { field: 'status', label: 'Status', width: 120 },
    { field: 'lastSyncAt', label: 'Last Sync', width: 180 },
    { field: 'recordCount', label: 'Records', width: 100 },
    { field: 'errorMessage', label: 'Error', width: 300 },
  ],

  // Connector badges — color-coded by integration
  columnOverrides: {
    connectorName: {
      renderAs: 'BADGE_WITH_DOT',
      badgeColors: Object.fromEntries(
        Object.entries(CONNECTOR_COLORS).map(([key, { name, color }]) => [name, color])
      ),
    },
  },

  filters: {
    isActive: { eq: true },
  },

  sortBy: 'connectorName',
  sortDirection: 'ASC',
});
