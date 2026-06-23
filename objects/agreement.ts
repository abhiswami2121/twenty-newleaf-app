// Agreement — Custom Object
// Auto-imported from Twenty schema | 15 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'agreement',
  namePlural: 'agreements',
  labelSingular: 'Agreement',
  labelPlural: 'Agreements',
  description: 'Signed contracts and agreements',
  icon: 'IconBox',
  fields: [
    { name: 'signedAt', label: 'Signed At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'programTermMonths', label: 'Program Term (Months)', type: FieldType.NUMBER, isNullable: true },
    { name: 'paymentAmount', label: 'Payment Amount', type: FieldType.NUMBER, isNullable: true },
    { name: 'customer', label: 'Customer', type: FieldType.RELATION, isNullable: true },
    { name: 'status', label: 'Status', type: FieldType.SELECT, isNullable: true },
    { name: 'signatureData', label: 'Signature Data', type: FieldType.TEXT, isNullable: true },
    { name: 'agreementUrl', label: 'Agreement URL', type: FieldType.TEXT, isNullable: true },
    { name: 'programType', label: 'Program Type', type: FieldType.TEXT, isNullable: true },
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
  ],
});
