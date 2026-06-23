// Activity — Unified activity log per customer
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'activity',
  namePlural: 'activities',
  labelSingular: 'Activity',
  labelPlural: 'Activities',
  description: 'Unified activity log — all events across all connectors per customer',
  icon: 'IconActivity',
  fields: [
    { name: 'type', label: 'Activity Type', type: FieldType.SELECT, isNullable: false },
    { name: 'title', label: 'Title', type: FieldType.TEXT, isNullable: false },
    { name: 'description', label: 'Description', type: FieldType.RICH_TEXT, isNullable: true },
    { name: 'source', label: 'Source Connector', type: FieldType.SELECT, isNullable: false },
    { name: 'customerProfileId', label: 'Customer Profile ID', type: FieldType.TEXT, isNullable: true },
    { name: 'metadata', label: 'Metadata (JSON)', type: FieldType.RICH_TEXT, isNullable: true },
    { name: 'occurredAt', label: 'Occurred At', type: FieldType.DATE_TIME, isNullable: false },
  ],
});
