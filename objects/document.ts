// Document — Customer-attached files (agreements, reports, letters)
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'document',
  namePlural: 'documents',
  labelSingular: 'Document',
  labelPlural: 'Documents',
  description: 'Customer-attached file — PDF agreements, credit reports, dispute letters',
  icon: 'IconFile',
  fields: [
    { name: 'name', label: 'File Name', type: FieldType.TEXT, isNullable: false },
    { name: 'url', label: 'URL', type: FieldType.URL, isNullable: false },
    { name: 'mimeType', label: 'MIME Type', type: FieldType.TEXT, isNullable: true },
    { name: 'size', label: 'Size (bytes)', type: FieldType.NUMBER, isNullable: true },
    { name: 'category', label: 'Category', type: FieldType.SELECT, isNullable: false },
    { name: 'customerProfileId', label: 'Customer Profile ID', type: FieldType.TEXT, isNullable: true },
    { name: 'disputeId', label: 'Dispute ID', type: FieldType.TEXT, isNullable: true },
    { name: 'agreementId', label: 'Agreement ID', type: FieldType.TEXT, isNullable: true },
  ],
});
