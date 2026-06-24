import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'payment',
  labelSingular: 'Payment',
  labelPlural: 'Payments',
  icon: 'IconCurrencyDollar',
  fields: [
    {
      name: 'paymentId',
      label: 'Payment ID',
      type: FieldType.TEXT,
      isUnique: true,
    },
    {
      name: 'amount',
      label: 'Amount',
      type: FieldType.CURRENCY,
    },
    {
      name: 'status',
      label: 'Status',
      type: FieldType.SELECT,
      options: [
        { label: 'Pending', value: 'pending', color: 'yellow' },
        { label: 'Completed', value: 'completed', color: 'green' },
        { label: 'Failed', value: 'failed', color: 'red' },
        { label: 'Refunded', value: 'refunded', color: 'gray' },
        { label: 'Voided', value: 'voided', color: 'gray' },
      ],
    },
    {
      name: 'method',
      label: 'Method',
      type: FieldType.SELECT,
      options: [
        { label: 'Credit Card', value: 'credit_card', color: 'blue' },
        { label: 'ACH', value: 'ach', color: 'purple' },
        { label: 'Debit Card', value: 'debit_card', color: 'green' },
      ],
    },
    {
      name: 'date',
      label: 'Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'transactionId',
      label: 'Transaction ID',
      type: FieldType.TEXT,
    },
    {
      name: 'nmiResponse',
      label: 'NMI Response',
      type: FieldType.TEXT,
    },
    {
      name: 'subscription',
      label: 'Subscription',
      type: FieldType.RELATION,
      relationType: RelationType.MANY_TO_ONE,
      targetObject: 'subscription',
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
