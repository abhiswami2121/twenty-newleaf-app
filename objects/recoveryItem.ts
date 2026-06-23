// Recovery Item — Custom Object
// Auto-imported from Twenty schema | 24 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'recoveryItem',
  namePlural: 'recoveryItems',
  labelSingular: 'Recovery Item',
  labelPlural: 'Recovery Items',
  description: 'Payment recovery tracking for failed/declined payments',
  icon: 'IconBox',
  fields: [
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'paymentAmount', label: 'Payment Amount', type: FieldType.NUMBER, isNullable: true },
    { name: 'retryScheduledAt', label: 'Retry Scheduled At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'customerName', label: 'Customer Name', type: FieldType.TEXT, isNullable: true },
    { name: 'latestFailReason', label: 'Latest Fail Reason', type: FieldType.TEXT, isNullable: true },
    { name: 'agentEmail', label: 'Agent Email', type: FieldType.TEXT, isNullable: true },
    { name: 'notes', label: 'Notes', type: FieldType.TEXT, isNullable: true },
    { name: 'totalAtRisk', label: 'Total At Risk', type: FieldType.NUMBER, isNullable: true },
    { name: 'nmiTransactionId', label: 'NMI Transaction ID', type: FieldType.TEXT, isNullable: true },
    { name: 'latestFailDate', label: 'Latest Fail Date', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'responseCode', label: 'Response Code', type: FieldType.TEXT, isNullable: true },
    { name: 'bankBlockDetected', label: 'Bank Block Detected', type: FieldType.BOOLEAN, isNullable: true },
    { name: 'resolvedAt', label: 'Resolved At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'stage', label: 'Stage', type: FieldType.SELECT, isNullable: true },
    { name: 'failureCount', label: 'Failure Count', type: FieldType.NUMBER, isNullable: true },
    { name: 'recoveryAction', label: 'Recovery Action', type: FieldType.TEXT, isNullable: true },
    { name: 'source', label: 'Source', type: FieldType.TEXT, isNullable: true },
    { name: 'nmiSubscriptionId', label: 'NMI Subscription ID', type: FieldType.TEXT, isNullable: true },
  ],
});
