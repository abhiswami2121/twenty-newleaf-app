// Support Ticket — Custom Object
// Auto-imported from Twenty schema | 22 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'supportTicket',
  namePlural: 'supportTickets',
  labelSingular: 'Support Ticket',
  labelPlural: 'Support Tickets',
  description: 'Canonical support ticket from Slack #newleaf-admin and agent forms',
  icon: 'IconBox',
  fields: [
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'title', label: 'Title', type: FieldType.TEXT, isNullable: true },
    { name: 'description', label: 'Description', type: FieldType.TEXT, isNullable: true },
    { name: 'category', label: 'Category', type: FieldType.SELECT, isNullable: true },
    { name: 'priority', label: 'Priority', type: FieldType.SELECT, isNullable: true },
    { name: 'status', label: 'Status', type: FieldType.SELECT, isNullable: true },
    { name: 'submittedBy', label: 'Submitted By', type: FieldType.TEXT, isNullable: true },
    { name: 'assignedTo', label: 'Assigned To', type: FieldType.TEXT, isNullable: true },
    { name: 'slackTs', label: 'Slack Timestamp', type: FieldType.TEXT, isNullable: true },
    { name: 'source', label: 'Source', type: FieldType.SELECT, isNullable: true },
    { name: 'slackChannel', label: 'Slack Channel', type: FieldType.TEXT, isNullable: true },
    { name: 'resolutionNotes', label: 'Resolution Notes', type: FieldType.TEXT, isNullable: true },
    { name: 'threadTs', label: 'Thread Timestamp', type: FieldType.TEXT, isNullable: true },
    { name: 'threadMessageCount', label: 'Thread Messages', type: FieldType.NUMBER, isNullable: true },
    { name: 'resolvedAt', label: 'Resolved At', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'slaDeadline', label: 'SLA Deadline', type: FieldType.DATE_TIME, isNullable: true },
  ],
});
