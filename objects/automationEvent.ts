// Automation Event — Custom Object
// Auto-imported from Twenty schema | 18 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'automationEvent',
  namePlural: 'automationEvents',
  labelSingular: 'Automation Event',
  labelPlural: 'Automation Events',
  description: 'Automation execution event log',
  icon: 'IconBox',
  fields: [
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'completedAt', label: 'Completed At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'status', label: 'Status', type: FieldType.SELECT, isNullable: true },
    { name: 'totalSteps', label: 'Total Steps', type: FieldType.NUMBER, isNullable: true },
    { name: 'startedAt', label: 'Started At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'triggerType', label: 'Trigger Type', type: FieldType.TEXT, isNullable: true },
    { name: 'errorMessage', label: 'Error Message', type: FieldType.TEXT, isNullable: true },
    { name: 'contextJson', label: 'Context JSON', type: FieldType.TEXT, isNullable: true },
    { name: 'automationName', label: 'Automation Name', type: FieldType.TEXT, isNullable: true },
    { name: 'executedSteps', label: 'Executed Steps', type: FieldType.NUMBER, isNullable: true },
    { name: 'eventType', label: 'Event Type', type: FieldType.SELECT, isNullable: true },
    { name: 'sourceFunction', label: 'Source Function', type: FieldType.TEXT, isNullable: true },
  ],
});
