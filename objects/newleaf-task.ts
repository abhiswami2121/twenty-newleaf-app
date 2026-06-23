// NewLeafTask — Enhanced task with pipeline stage association
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'newleafTask',
  namePlural: 'newleafTasks',
  labelSingular: 'NewLeaf Task',
  labelPlural: 'NewLeaf Tasks',
  description: 'Assignable task with customer, pipeline stage, and SLA tracking',
  icon: 'IconCheckbox',
  fields: [
    { name: 'title', label: 'Title', type: FieldType.TEXT, isNullable: false },
    { name: 'description', label: 'Description', type: FieldType.RICH_TEXT, isNullable: true },
    { name: 'status', label: 'Status', type: FieldType.SELECT, isNullable: false },
    { name: 'priority', label: 'Priority', type: FieldType.SELECT, isNullable: false },
    { name: 'assignee', label: 'Assignee', type: FieldType.TEXT, isNullable: true },
    { name: 'dueDate', label: 'Due Date', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'pipelineStage', label: 'Pipeline Stage', type: FieldType.TEXT, isNullable: true },
    { name: 'customerProfileId', label: 'Customer Profile ID', type: FieldType.TEXT, isNullable: true },
    { name: 'slaDeadline', label: 'SLA Deadline', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'completedAt', label: 'Completed At', type: FieldType.DATE_TIME, isNullable: true },
  ],
});
