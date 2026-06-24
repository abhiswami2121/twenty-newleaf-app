import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'contract',
  labelSingular: 'Contract',
  labelPlural: 'Contracts',
  icon: 'IconFileText',
  fields: [
    {
      name: 'agreementNumber',
      label: 'Agreement #',
      type: FieldType.TEXT,
      isUnique: true,
    },
    {
      name: 'signedDate',
      label: 'Signed Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'status',
      label: 'Status',
      type: FieldType.SELECT,
      options: [
        { label: 'Draft', value: 'draft', color: 'gray' },
        { label: 'Sent', value: 'sent', color: 'blue' },
        { label: 'Signed', value: 'signed', color: 'green' },
        { label: 'Expired', value: 'expired', color: 'red' },
        { label: 'Cancelled', value: 'cancelled', color: 'gray' },
      ],
    },
    {
      name: 'monthlyPayment',
      label: 'Monthly Payment',
      type: FieldType.CURRENCY,
    },
    {
      name: 'termMonths',
      label: 'Term (months)',
      type: FieldType.NUMBER,
    },
    {
      name: 'totalAmount',
      label: 'Total Amount',
      type: FieldType.CURRENCY,
    },
    {
      name: 'agreementUrl',
      label: 'Agreement URL',
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
