// Sequence Enrollment — Custom Object
// Auto-imported from Twenty schema | 15 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'sequenceEnrollment',
  namePlural: 'sequenceEnrollments',
  labelSingular: 'Sequence Enrollment',
  labelPlural: 'Sequence Enrollments',
  description: 'Automation sequence enrollment tracking per customer',
  icon: 'IconBox',
  fields: [
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'enrolledAt', label: 'Enrolled At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'completedAt', label: 'Completed At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'source', label: 'Source', type: FieldType.TEXT, isNullable: true },
    { name: 'status', label: 'Status', type: FieldType.SELECT, isNullable: true },
    { name: 'currentStep', label: 'Current Step', type: FieldType.NUMBER, isNullable: true },
    { name: 'totalSteps', label: 'Total Steps', type: FieldType.NUMBER, isNullable: true },
    { name: 'lastActivityAt', label: 'Last Activity At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'sequenceName', label: 'Sequence Name', type: FieldType.TEXT, isNullable: true },
  ],
});
