// LetterTemplate — Dispute letter templates (57-letter toolkit subset)
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'letterTemplate',
  namePlural: 'letterTemplates',
  labelSingular: 'Letter Template',
  labelPlural: 'Letter Templates',
  description: 'Dispute letter template — Round 1/2/3, CFPB, Metro2, etc.',
  icon: 'IconFileText',
  fields: [
    { name: 'name', label: 'Template Name', type: FieldType.TEXT, isNullable: false },
    { name: 'key', label: 'Template Key', type: FieldType.TEXT, isNullable: false },
    { name: 'body', label: 'Letter Body', type: FieldType.RICH_TEXT, isNullable: false },
    { name: 'round', label: 'Dispute Round', type: FieldType.SELECT, isNullable: false },
    { name: 'bureau', label: 'Target Bureau', type: FieldType.SELECT, isNullable: false },
    { name: 'category', label: 'Category', type: FieldType.SELECT, isNullable: false },
    { name: 'variables', label: 'Variables (JSON)', type: FieldType.RICH_TEXT, isNullable: true },
    { name: 'version', label: 'Version', type: FieldType.NUMBER, isNullable: false },
  ],
});
