import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'activityLog',
  labelSingular: 'Activity Log',
  labelPlural: 'Activity Logs',
  icon: 'IconHistory',
  fields: [
    {
      name: 'activityType',
      label: 'Activity Type',
      type: FieldType.SELECT,
      options: [
        { label: 'Call', value: 'call', color: 'blue' },
        { label: 'Email', value: 'email', color: 'green' },
        { label: 'SMS', value: 'sms', color: 'purple' },
        { label: 'Payment', value: 'payment', color: 'orange' },
        { label: 'Dispute', value: 'dispute', color: 'red' },
        { label: 'Enrollment', value: 'enrollment', color: 'yellow' },
        { label: 'Note', value: 'note', color: 'gray' },
        { label: 'System', value: 'system', color: 'gray' },
      ],
    },
    {
      name: 'description',
      label: 'Description',
      type: FieldType.TEXT,
    },
    {
      name: 'date',
      label: 'Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'agentName',
      label: 'Agent Name',
      type: FieldType.TEXT,
    },
    {
      name: 'relatedEntity',
      label: 'Related Entity',
      type: FieldType.TEXT,
    },
    {
      name: 'relatedId',
      label: 'Related ID',
      type: FieldType.TEXT,
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
