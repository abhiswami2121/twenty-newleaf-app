import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'billingQueue',
  labelSingular: 'Billing Queue',
  labelPlural: 'Billing Queues',
  icon: 'IconClockDollar',
  fields: [
    {
      name: 'queueId',
      label: 'Queue ID',
      type: FieldType.TEXT,
      isUnique: true,
    },
    {
      name: 'subscriptionId',
      label: 'Subscription ID',
      type: FieldType.TEXT,
    },
    {
      name: 'scheduledDate',
      label: 'Scheduled Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'status',
      label: 'Status',
      type: FieldType.SELECT,
      options: [
        { label: 'Pending', value: 'pending', color: 'yellow' },
        { label: 'Processing', value: 'processing', color: 'blue' },
        { label: 'Completed', value: 'completed', color: 'green' },
        { label: 'Failed', value: 'failed', color: 'red' },
        { label: 'Retrying', value: 'retrying', color: 'orange' },
        { label: 'Skipped', value: 'skipped', color: 'gray' },
      ],
    },
    {
      name: 'amount',
      label: 'Amount',
      type: FieldType.CURRENCY,
    },
    {
      name: 'retryCount',
      label: 'Retry Count',
      type: FieldType.NUMBER,
    },
    {
      name: 'lastError',
      label: 'Last Error',
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
