import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'callLog',
  labelSingular: 'Call Log',
  labelPlural: 'Call Logs',
  icon: 'IconPhone',
  fields: [
    {
      name: 'callSid',
      label: 'Call SID',
      type: FieldType.TEXT,
      isUnique: true,
    },
    {
      name: 'direction',
      label: 'Direction',
      type: FieldType.SELECT,
      options: [
        { label: 'Inbound', value: 'inbound', color: 'green' },
        { label: 'Outbound', value: 'outbound', color: 'blue' },
      ],
    },
    {
      name: 'status',
      label: 'Status',
      type: FieldType.SELECT,
      options: [
        { label: 'Queued', value: 'queued', color: 'gray' },
        { label: 'Ringing', value: 'ringing', color: 'yellow' },
        { label: 'In Progress', value: 'in_progress', color: 'blue' },
        { label: 'Completed', value: 'completed', color: 'green' },
        { label: 'Failed', value: 'failed', color: 'red' },
        { label: 'No Answer', value: 'no_answer', color: 'gray' },
        { label: 'Voicemail', value: 'voicemail', color: 'purple' },
      ],
    },
    {
      name: 'duration',
      label: 'Duration (seconds)',
      type: FieldType.NUMBER,
    },
    {
      name: 'from',
      label: 'From',
      type: FieldType.TEXT,
    },
    {
      name: 'to',
      label: 'To',
      type: FieldType.TEXT,
    },
    {
      name: 'recordingUrl',
      label: 'Recording URL',
      type: FieldType.TEXT,
    },
    {
      name: 'transcript',
      label: 'Transcript',
      type: FieldType.TEXT,
    },
    {
      name: 'summary',
      label: 'Summary',
      type: FieldType.TEXT,
    },
    {
      name: 'agentName',
      label: 'Agent Name',
      type: FieldType.TEXT,
    },
    {
      name: 'date',
      label: 'Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'person',
      label: 'Person',
      type: FieldType.RELATION,
      relationType: RelationType.MANY_TO_ONE,
      targetObject: 'person',
    },
  ],
});
