// Connector Status — Custom Object
// Auto-imported from Twenty schema | 19 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'connectorStatus',
  namePlural: 'connectorStatuss',
  labelSingular: 'Connector Status',
  labelPlural: 'Connector Statuss',
  description: 'Per-connector operational status singleton',
  icon: 'IconBox',
  fields: [
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'authStatus', label: 'Auth Status', type: FieldType.SELECT, isNullable: true },
    { name: 'healthCheckUrl', label: 'Health Check URL', type: FieldType.TEXT, isNullable: true },
    { name: 'apiEndpoint', label: 'API Endpoint', type: FieldType.TEXT, isNullable: true },
    { name: 'lastSyncAt', label: 'Last Sync At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'connectorName', label: 'Connector Name', type: FieldType.SELECT, isNullable: true },
    { name: 'latencyMs', label: 'Latency (ms)', type: FieldType.NUMBER, isNullable: true },
    { name: 'lastErrorAt', label: 'Last Error At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'notes', label: 'Notes', type: FieldType.TEXT, isNullable: true },
    { name: 'status', label: 'Status', type: FieldType.SELECT, isNullable: true },
    { name: 'lastErrorMessage', label: 'Last Error', type: FieldType.TEXT, isNullable: true },
    { name: 'recordsCount', label: 'Records Count', type: FieldType.NUMBER, isNullable: true },
    { name: 'dailySyncCount', label: 'Daily Sync Count', type: FieldType.NUMBER, isNullable: true },
  ],
});
