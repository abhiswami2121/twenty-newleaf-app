// NMI Vault — Custom Object
// Auto-imported from Twenty schema | 20 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'nmiVault',
  namePlural: 'nmiVaults',
  labelSingular: 'NMI Vault',
  labelPlural: 'NMI Vaults',
  description: 'NMI customer vault (card on file) data',
  icon: 'IconBox',
  fields: [
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'lastName', label: 'Last Name', type: FieldType.TEXT, isNullable: true },
    { name: 'priority', label: 'Priority', type: FieldType.NUMBER, isNullable: true },
    { name: 'isPrimary', label: 'Is Primary', type: FieldType.BOOLEAN, isNullable: true },
    { name: 'customerVaultId', label: 'Customer Vault ID', type: FieldType.TEXT, isNullable: true },
    { name: 'cofCompliant', label: 'COF Compliant', type: FieldType.BOOLEAN, isNullable: true },
    { name: 'firstName', label: 'First Name', type: FieldType.TEXT, isNullable: true },
    { name: 'cardLast4', label: 'Card Last 4', type: FieldType.TEXT, isNullable: true },
    { name: 'isExpired', label: 'Is Expired', type: FieldType.BOOLEAN, isNullable: true },
    { name: 'lastSyncedAt', label: 'Last Synced At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'billingId', label: 'Billing ID', type: FieldType.TEXT, isNullable: true },
    { name: 'cardExpiry', label: 'Card Expiry', type: FieldType.TEXT, isNullable: true },
    { name: 'cardBrand', label: 'Card Brand', type: FieldType.TEXT, isNullable: true },
    { name: 'cardBin', label: 'Card BIN', type: FieldType.TEXT, isNullable: true },
  ],
});
