// SmsTemplate — Reusable SMS content (Snippets per GHL terminology)
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'smsTemplate',
  namePlural: 'smsTemplates',
  labelSingular: 'SMS Template',
  labelPlural: 'SMS Templates',
  description: 'Reusable SMS snippet — A2P compliant, variable interpolation',
  icon: 'IconMessage',
  fields: [
    { name: 'name', label: 'Template Name', type: FieldType.TEXT, isNullable: false },
    { name: 'key', label: 'Template Key', type: FieldType.TEXT, isNullable: false },
    { name: 'body', label: 'Message Body', type: FieldType.TEXT, isNullable: false },
    { name: 'category', label: 'Category', type: FieldType.SELECT, isNullable: false },
    { name: 'variables', label: 'Variables (JSON)', type: FieldType.RICH_TEXT, isNullable: true },
    { name: 'isA2PCompliant', label: 'A2P Compliant', type: FieldType.BOOLEAN, isNullable: false },
  ],
});
