// EmailTemplate — Reusable email content (React Email components)
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'emailTemplate',
  namePlural: 'emailTemplates',
  labelSingular: 'Email Template',
  labelPlural: 'Email Templates',
  description: 'Reusable email template — powered by Resend + React Email',
  icon: 'IconMail',
  fields: [
    { name: 'name', label: 'Template Name', type: FieldType.TEXT, isNullable: false },
    { name: 'key', label: 'Template Key', type: FieldType.TEXT, isNullable: false },
    { name: 'subject', label: 'Subject', type: FieldType.TEXT, isNullable: false },
    { name: 'body', label: 'HTML Body', type: FieldType.RICH_TEXT, isNullable: false },
    { name: 'category', label: 'Category', type: FieldType.SELECT, isNullable: false },
    { name: 'variables', label: 'Variables (JSON)', type: FieldType.RICH_TEXT, isNullable: true },
    { name: 'version', label: 'Version', type: FieldType.NUMBER, isNullable: false },
  ],
});
