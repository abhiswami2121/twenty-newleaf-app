// Communication Log — Custom Object
// Auto-imported from Twenty schema | 17 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'communicationLog',
  namePlural: 'communicationLogs',
  labelSingular: 'Communication Log',
  labelPlural: 'Communication Logs',
  description: 'Unified SMS/Email/Call/VAPI/Slack communication feed',
  icon: 'IconBox',
  fields: [
    { name: 'openedAt', label: 'Opened At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'subject', label: 'Subject', type: FieldType.TEXT, isNullable: true },
    { name: 'externalId', label: 'External ID', type: FieldType.TEXT, isNullable: true },
    { name: 'direction', label: 'Direction', type: FieldType.SELECT, isNullable: true },
    { name: 'agentEmail', label: 'Agent Email', type: FieldType.TEXT, isNullable: true },
    { name: 'customer', label: 'Customer', type: FieldType.RELATION, isNullable: true },
    { name: 'repliedAt', label: 'Replied At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'sentiment', label: 'Sentiment', type: FieldType.SELECT, isNullable: true },
    { name: 'channel', label: 'Channel', type: FieldType.SELECT, isNullable: true },
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'sentAt', label: 'Sent At', type: FieldType.DATE_TIME, isNullable: true },
  ],
});
