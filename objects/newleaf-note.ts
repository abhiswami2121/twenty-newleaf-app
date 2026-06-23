// NewLeafNote — Customer-attached note with category and visibility
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'newleafNote',
  namePlural: 'newleafNotes',
  labelSingular: 'Note',
  labelPlural: 'Notes',
  description: 'Customer-attached note with category and agent visibility',
  icon: 'IconNotes',
  fields: [
    { name: 'title', label: 'Title', type: FieldType.TEXT, isNullable: false },
    { name: 'body', label: 'Body', type: FieldType.RICH_TEXT, isNullable: false },
    { name: 'category', label: 'Category', type: FieldType.SELECT, isNullable: false },
    { name: 'customerProfileId', label: 'Customer Profile ID', type: FieldType.TEXT, isNullable: true },
    { name: 'authorEmail', label: 'Author Email', type: FieldType.TEXT, isNullable: true },
    { name: 'isPinned', label: 'Pinned', type: FieldType.BOOLEAN, isNullable: false },
  ],
});
