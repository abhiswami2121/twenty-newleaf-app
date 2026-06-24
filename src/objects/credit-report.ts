import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'creditReport',
  labelSingular: 'Credit Report',
  labelPlural: 'Credit Reports',
  icon: 'IconReport',
  fields: [
    {
      name: 'reportDate',
      label: 'Report Date',
      type: FieldType.DATE_TIME,
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
      name: 'creditScore',
      label: 'Credit Score',
      type: FieldType.NUMBER,
    },
    {
      name: 'reportUrl',
      label: 'Report URL',
      type: FieldType.TEXT,
    },
    {
      name: 'negativeItemsCount',
      label: 'Negative Items',
      type: FieldType.NUMBER,
    },
    {
      name: 'totalDebt',
      label: 'Total Debt',
      type: FieldType.CURRENCY,
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
