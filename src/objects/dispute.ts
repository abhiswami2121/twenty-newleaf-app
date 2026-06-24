import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'dispute',
  labelSingular: 'Dispute',
  labelPlural: 'Disputes',
  icon: 'IconAlertTriangle',
  fields: [
    {
      name: 'disputeId',
      label: 'Dispute ID',
      type: FieldType.TEXT,
      isUnique: true,
    },
    {
      name: 'bureau',
      label: 'Bureau',
      type: FieldType.SELECT,
      options: [
        { label: 'Experian', value: 'experian', color: 'blue' },
        { label: 'TransUnion', value: 'transunion', color: 'green' },
        { label: 'Equifax', value: 'equifax', color: 'orange' },
      ],
    },
    {
      name: 'accountName',
      label: 'Account Name',
      type: FieldType.TEXT,
    },
    {
      name: 'accountNumber',
      label: 'Account Number',
      type: FieldType.TEXT,
    },
    {
      name: 'reason',
      label: 'Reason',
      type: FieldType.TEXT,
    },
    {
      name: 'status',
      label: 'Status',
      type: FieldType.SELECT,
      options: [
        { label: 'Open', value: 'open', color: 'blue' },
        { label: 'Mailed', value: 'mailed', color: 'yellow' },
        { label: 'In Review', value: 'in_review', color: 'orange' },
        { label: 'Resolved', value: 'resolved', color: 'green' },
        { label: 'Closed', value: 'closed', color: 'gray' },
        { label: 'Reopened', value: 'reopened', color: 'red' },
      ],
    },
    {
      name: 'roundNumber',
      label: 'Round Number',
      type: FieldType.NUMBER,
    },
    {
      name: 'openedDate',
      label: 'Opened Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'nextActionDate',
      label: 'Next Action Date',
      type: FieldType.DATE,
    },
    {
      name: 'letterTemplate',
      label: 'Letter Template',
      type: FieldType.TEXT,
    },
    {
      name: 'letterMailedDate',
      label: 'Letter Mailed Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'responseReceivedDate',
      label: 'Response Received Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'response',
      label: 'Response',
      type: FieldType.TEXT,
    },
    {
      name: 'resolution',
      label: 'Resolution',
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
