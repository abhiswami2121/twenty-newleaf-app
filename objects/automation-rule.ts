// AutomationRule — Declarative automation definitions
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'automationRule',
  namePlural: 'automationRules',
  labelSingular: 'Automation Rule',
  labelPlural: 'Automation Rules',
  description: 'Declarative automation — triggers, conditions, actions',
  icon: 'IconZap',
  fields: [
    { name: 'name', label: 'Rule Name', type: FieldType.TEXT, isNullable: false },
    { name: 'trigger', label: 'Trigger Event', type: FieldType.SELECT, isNullable: false },
    { name: 'conditions', label: 'Conditions (JSON)', type: FieldType.RICH_TEXT, isNullable: true },
    { name: 'action', label: 'Action Type', type: FieldType.SELECT, isNullable: false },
    { name: 'actionConfig', label: 'Action Config (JSON)', type: FieldType.RICH_TEXT, isNullable: true },
    { name: 'priority', label: 'Priority', type: FieldType.NUMBER, isNullable: false },
    { name: 'isEnabled', label: 'Enabled', type: FieldType.BOOLEAN, isNullable: false },
    { name: 'lastFiredAt', label: 'Last Fired At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'fireCount', label: 'Fire Count', type: FieldType.NUMBER, isNullable: true },
  ],
});
