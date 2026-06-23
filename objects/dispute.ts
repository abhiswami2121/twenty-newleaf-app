// Dispute — Custom Object
// Auto-imported from Twenty schema | 18 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'dispute',
  namePlural: 'disputes',
  labelSingular: 'Dispute',
  labelPlural: 'Disputes',
  description: 'Credit dispute tracking — rounds, bureaus, letters, results',
  icon: 'IconBox',
  fields: [
    { name: 'customer', label: 'Customer', type: FieldType.RELATION, isNullable: true },
    { name: 'status', label: 'Status', type: FieldType.SELECT, isNullable: true },
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'mailedAt', label: 'Mailed At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'negativeItemIds', label: 'Negative Item IDs', type: FieldType.TEXT, isNullable: true },
    { name: 'letterIds', label: 'Letter IDs', type: FieldType.TEXT, isNullable: true },
    { name: 'responseDeadline', label: 'Response Deadline', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'targetBureaus', label: 'Target Bureaus', type: FieldType.TEXT, isNullable: true },
    { name: 'deletionRate', label: 'Deletion Rate', type: FieldType.NUMBER, isNullable: true },
    { name: 'roundType', label: 'Round Type', type: FieldType.SELECT, isNullable: true },
    { name: 'roundNumber', label: 'Round Number', type: FieldType.NUMBER, isNullable: true },
    { name: 'results', label: 'Results', type: FieldType.TEXT, isNullable: true },
  ],
});
