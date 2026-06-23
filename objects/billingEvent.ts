// Billing Event — Custom Object
// Auto-imported from Twenty schema | 21 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'billingEvent',
  namePlural: 'billingEvents',
  labelSingular: 'Billing Event',
  labelPlural: 'Billing Events',
  description: 'Every charge, refund, subscription event for a customer',
  icon: 'IconBox',
  fields: [
    { name: 'success', label: 'Success', type: FieldType.BOOLEAN, isNullable: true },
    { name: 'eventCategory', label: 'Event Category', type: FieldType.SELECT, isNullable: true },
    { name: 'occurredAt', label: 'Occurred At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'amount', label: 'Amount', type: FieldType.CURRENCY, isNullable: true },
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'nmiTransactionId', label: 'NMI Transaction ID', type: FieldType.TEXT, isNullable: true },
    { name: 'nmiResponseCode', label: 'NMI Response Code', type: FieldType.TEXT, isNullable: true },
    { name: 'nmiResponseText', label: 'NMI Response Text', type: FieldType.TEXT, isNullable: true },
    { name: 'processedAt', label: 'Processed At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'customer', label: 'Customer', type: FieldType.RELATION, isNullable: true },
    { name: 'cofInitiatedBy', label: 'COF Initiated By', type: FieldType.SELECT, isNullable: true },
    { name: 'agentEmail', label: 'Agent Email', type: FieldType.TEXT, isNullable: true },
    { name: 'eventType', label: 'Event Type', type: FieldType.TEXT, isNullable: true },
    { name: 'source', label: 'Source', type: FieldType.TEXT, isNullable: true },
    { name: 'cofIndicator', label: 'COF Indicator', type: FieldType.SELECT, isNullable: true },
  ],
});
