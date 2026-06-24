import { defineObject, FieldType, RelationType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'recoveryItem',
  labelSingular: 'Recovery Item',
  labelPlural: 'Recovery Items',
  icon: 'IconHeartbeat',
  fields: [
    {
      name: 'subscriptionId',
      label: 'Subscription ID',
      type: FieldType.TEXT,
    },
    {
      name: 'status',
      label: 'Status',
      type: FieldType.SELECT,
      options: [
        { label: 'Pending', value: 'pending', color: 'yellow' },
        { label: 'In Recovery', value: 'in_recovery', color: 'orange' },
        { label: 'Recovered', value: 'recovered', color: 'green' },
        { label: 'Failed', value: 'failed', color: 'red' },
        { label: 'Charge Off', value: 'charge_off', color: 'red' },
      ],
    },
    {
      name: 'failedDate',
      label: 'Failed Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'declineReason',
      label: 'Decline Reason',
      type: FieldType.TEXT,
    },
    {
      name: 'recoveryAttempts',
      label: 'Recovery Attempts',
      type: FieldType.NUMBER,
    },
    {
      name: 'lastAttemptDate',
      label: 'Last Attempt Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'nextAttemptDate',
      label: 'Next Attempt Date',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'recoveryLink',
      label: 'Recovery Link',
      type: FieldType.TEXT,
    },
    {
      name: 'recovered',
      label: 'Recovered',
      type: FieldType.BOOLEAN,
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
