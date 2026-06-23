// Call Event — Custom Object
// Auto-imported from Twenty schema | 25 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'callEvent',
  namePlural: 'callEvents',
  labelSingular: 'Call Event',
  labelPlural: 'Call Events',
  description: 'Voice AI (VAPI) + agent (Freshcaller) call events',
  icon: 'IconBox',
  fields: [
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'contactName', label: 'Contact Name', type: FieldType.TEXT, isNullable: true },
    { name: 'agentEmail', label: 'Agent Email', type: FieldType.TEXT, isNullable: true },
    { name: 'externalCallId', label: 'External Call ID', type: FieldType.TEXT, isNullable: true },
    { name: 'transcriptSummary', label: 'Transcript Summary', type: FieldType.TEXT, isNullable: true },
    { name: 'direction', label: 'Direction', type: FieldType.SELECT, isNullable: true },
    { name: 'callType', label: 'Call Type', type: FieldType.SELECT, isNullable: true },
    { name: 'journeyStage', label: 'Journey Stage', type: FieldType.TEXT, isNullable: true },
    { name: 'assistantName', label: 'Assistant Name', type: FieldType.TEXT, isNullable: true },
    { name: 'recordingUrl', label: 'Recording URL', type: FieldType.TEXT, isNullable: true },
    { name: 'contactPhone', label: 'Contact Phone', type: FieldType.TEXT, isNullable: true },
    { name: 'duration', label: 'Duration (sec)', type: FieldType.NUMBER, isNullable: true },
    { name: 'transferStatus', label: 'Transfer Status', type: FieldType.TEXT, isNullable: true },
    { name: 'leadScore', label: 'Lead Score', type: FieldType.NUMBER, isNullable: true },
    { name: 'sentiment', label: 'Sentiment', type: FieldType.SELECT, isNullable: true },
    { name: 'endedAt', label: 'Ended At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'sourceSystem', label: 'Source System', type: FieldType.TEXT, isNullable: true },
    { name: 'callStatus', label: 'Call Status', type: FieldType.SELECT, isNullable: true },
    { name: 'startedAt', label: 'Started At', type: FieldType.DATE_TIME, isNullable: true },
  ],
});
