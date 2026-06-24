import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'supportTicket',
  labelSingular: 'Support Ticket',
  labelPlural: 'Support Tickets',
  icon: 'IconLifebuoy',
  fields: [
    {
      name: 'ticketId',
      label: 'Ticket ID',
      type: FieldType.TEXT,
      isUnique: true,
    },
    {
      name: 'subject',
      label: 'Subject',
      type: FieldType.TEXT,
    },
    {
      name: 'status',
      label: 'Status',
      type: FieldType.SELECT,
      options: [
        { label: 'New', value: 'new', color: 'blue' },
        { label: 'Open', value: 'open', color: 'yellow' },
        { label: 'Pending', value: 'pending', color: 'orange' },
        { label: 'Resolved', value: 'resolved', color: 'green' },
        { label: 'Closed', value: 'closed', color: 'gray' },
      ],
    },
    {
      name: 'priority',
      label: 'Priority',
      type: FieldType.SELECT,
      options: [
        { label: 'Low', value: 'low', color: 'gray' },
        { label: 'Medium', value: 'medium', color: 'blue' },
        { label: 'High', value: 'high', color: 'orange' },
        { label: 'Critical', value: 'critical', color: 'red' },
      ],
    },
    {
      name: 'category',
      label: 'Category',
      type: FieldType.SELECT,
      options: [
        { label: 'Billing', value: 'billing', color: 'blue' },
        { label: 'Dispute', value: 'dispute', color: 'orange' },
        { label: 'Technical', value: 'technical', color: 'purple' },
        { label: 'Account', value: 'account', color: 'green' },
        { label: 'Other', value: 'other', color: 'gray' },
      ],
    },
    {
      name: 'resolution',
      label: 'Resolution',
      type: FieldType.TEXT,
    },
    {
      name: 'openedDate',
      label: 'Opened Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'closedDate',
      label: 'Closed Date',
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
