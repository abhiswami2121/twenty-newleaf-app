// NMI Subscription — Custom Object
// Auto-imported from Twenty schema | 22 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'nmiSubscription',
  namePlural: 'nmiSubscriptions',
  labelSingular: 'NMI Subscription',
  labelPlural: 'NMI Subscriptions',
  description: 'Live NMI recurring billing subscription data',
  icon: 'IconBox',
  fields: [
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'monthFrequency', label: 'Month Frequency', type: FieldType.NUMBER, isNullable: true },
    { name: 'customerVaultId', label: 'Customer Vault ID', type: FieldType.TEXT, isNullable: true },
    { name: 'status', label: 'Status', type: FieldType.SELECT, isNullable: true },
    { name: 'nmiSubscriptionId', label: 'NMI Subscription ID', type: FieldType.TEXT, isNullable: true },
    { name: 'nextChargeDate', label: 'Next Charge Date', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'completedPayments', label: 'Completed Payments', type: FieldType.NUMBER, isNullable: true },
    { name: 'dayFrequency', label: 'Day Frequency', type: FieldType.NUMBER, isNullable: true },
    { name: 'dayOfMonth', label: 'Day of Month', type: FieldType.NUMBER, isNullable: true },
    { name: 'cardExpiry', label: 'Card Expiry', type: FieldType.TEXT, isNullable: true },
    { name: 'billingId', label: 'Billing ID', type: FieldType.TEXT, isNullable: true },
    { name: 'planAmount', label: 'Plan Amount', type: FieldType.NUMBER, isNullable: true },
    { name: 'startDate', label: 'Start Date', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'attemptedPayments', label: 'Attempted Payments', type: FieldType.NUMBER, isNullable: true },
    { name: 'cardLast4', label: 'Card Last 4', type: FieldType.TEXT, isNullable: true },
    { name: 'lastSyncedAt', label: 'Last Synced At', type: FieldType.DATE_TIME, isNullable: true },
  ],
});
