// CampaignDrip — Multi-step automated outreach sequence
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'campaignDrip',
  namePlural: 'campaignDrips',
  labelSingular: 'Campaign Drip',
  labelPlural: 'Campaign Drips',
  description: 'Multi-step automated outreach — welcome, nurture, win-back sequences',
  icon: 'IconDotsCircleHorizontal',
  fields: [
    { name: 'name', label: 'Campaign Name', type: FieldType.TEXT, isNullable: false },
    { name: 'key', label: 'Campaign Key', type: FieldType.TEXT, isNullable: false },
    { name: 'trigger', label: 'Trigger Event', type: FieldType.SELECT, isNullable: false },
    { name: 'steps', label: 'Steps (JSON)', type: FieldType.RICH_TEXT, isNullable: false },
    { name: 'isEnabled', label: 'Enabled', type: FieldType.BOOLEAN, isNullable: false },
    { name: 'targetAudience', label: 'Target Audience', type: FieldType.SELECT, isNullable: true },
    { name: 'estimatedDurationDays', label: 'Duration (Days)', type: FieldType.NUMBER, isNullable: true },
  ],
});
