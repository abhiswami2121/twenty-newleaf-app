// PipelineStage — Lookup table for customer journey stages
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'pipelineStage',
  namePlural: 'pipelineStages',
  labelSingular: 'Pipeline Stage',
  labelPlural: 'Pipeline Stages',
  description: 'Configuration for the 10-stage NewLeaf customer pipeline',
  icon: 'IconTimeline',
  fields: [
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: false },
    { name: 'key', label: 'Stage Key', type: FieldType.TEXT, isNullable: false },
    { name: 'order', label: 'Display Order', type: FieldType.NUMBER, isNullable: false },
    { name: 'color', label: 'Color', type: FieldType.TEXT, isNullable: false },
    { name: 'description', label: 'Description', type: FieldType.TEXT, isNullable: true },
    { name: 'isTerminal', label: 'Is Terminal', type: FieldType.BOOLEAN, isNullable: false },
    { name: 'autoTriggers', label: 'Auto Triggers', type: FieldType.RICH_TEXT, isNullable: true },
  ],
});
