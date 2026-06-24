import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'subscription',
  labelSingular: 'Subscription',
  labelPlural: 'Subscriptions',
  icon: 'IconRepeat',
  fields: [
    {
      name: 'subscriptionId',
      label: 'Subscription ID',
      type: FieldType.TEXT,
      isUnique: true,
    },
    {
      name: 'nmiSubscriptionId',
      label: 'NMI Subscription ID',
      type: FieldType.TEXT,
    },
    {
      name: 'planName',
      label: 'Plan Name',
      type: FieldType.TEXT,
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
        { label: 'Active', value: 'active', color: 'green' },
        { label: 'Past Due', value: 'past_due', color: 'red' },
        { label: 'Canceled', value: 'canceled', color: 'gray' },
        { label: 'Trial', value: 'trial', color: 'blue' },
        { label: 'Paused', value: 'paused', color: 'yellow' },
        { label: 'Expired', value: 'expired', color: 'gray' },
      ],
    },
    {
      name: 'nextBillingDate',
      label: 'Next Billing Date',
      type: FieldType.DATE,
    },
    {
      name: 'cardLast4',
      label: 'Card Last 4',
      type: FieldType.TEXT,
    },
    {
      name: 'vaultId',
      label: 'Vault ID',
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
