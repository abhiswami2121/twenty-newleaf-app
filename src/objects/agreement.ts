import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'agreement',
  labelSingular: 'Agreement',
  labelPlural: 'Agreements',
  icon: 'IconFileCheck',
  fields: [
    {
      name: 'agreementId',
      label: 'Agreement ID',
      type: FieldType.TEXT,
      isUnique: true,
    },
    {
      name: 'template',
      label: 'Template',
      type: FieldType.TEXT,
    },
    {
      name: 'status',
      label: 'Status',
      type: FieldType.SELECT,
      options: [
        { label: 'Draft', value: 'draft', color: 'gray' },
        { label: 'Sent', value: 'sent', color: 'blue' },
        { label: 'Viewed', value: 'viewed', color: 'yellow' },
        { label: 'Signed', value: 'signed', color: 'green' },
        { label: 'Expired', value: 'expired', color: 'red' },
        { label: 'Cancelled', value: 'cancelled', color: 'gray' },
      ],
    },
    {
      name: 'generatedDate',
      label: 'Generated Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'signedDate',
      label: 'Signed Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'expiresDate',
      label: 'Expires Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'url',
      label: 'URL',
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
