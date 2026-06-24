import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'emailMessage',
  labelSingular: 'Email Message',
  labelPlural: 'Email Messages',
  icon: 'IconMail',
  fields: [
    {
      name: 'messageId',
      label: 'Message ID',
      type: FieldType.TEXT,
      isUnique: true,
    },
    {
      name: 'subject',
      label: 'Subject',
      type: FieldType.TEXT,
    },
    {
      name: 'body',
      label: 'Body',
      type: FieldType.TEXT,
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
        { label: 'Draft', value: 'draft', color: 'gray' },
        { label: 'Sent', value: 'sent', color: 'blue' },
        { label: 'Delivered', value: 'delivered', color: 'green' },
        { label: 'Failed', value: 'failed', color: 'red' },
        { label: 'Bounced', value: 'bounced', color: 'red' },
        { label: 'Received', value: 'received', color: 'green' },
      ],
    },
    {
      name: 'date',
      label: 'Date',
      type: FieldType.DATE_TIME,
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
      name: 'person',
      label: 'Person',
      type: FieldType.RELATION,
      relationType: RelationType.MANY_TO_ONE,
      targetObject: 'person',
    },
  ],
});
