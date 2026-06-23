// Slack Submission — Custom Object
// Auto-imported from Twenty schema | 24 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'slackSubmission',
  namePlural: 'slackSubmissions',
  labelSingular: 'Slack Submission',
  labelPlural: 'Slack Submissions',
  description: 'Customer intake from Slack #jarvis-admin workflow',
  icon: 'IconBox',
  fields: [
    { name: 'slackUser', label: 'Slack User', type: FieldType.TEXT, isNullable: true },
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'parsedPhone', label: 'Parsed Phone', type: FieldType.TEXT, isNullable: true },
    { name: 'parsedIncome', label: 'Parsed Income', type: FieldType.NUMBER, isNullable: true },
    { name: 'paymentFrequency', label: 'Payment Frequency', type: FieldType.TEXT, isNullable: true },
    { name: 'parsedAddress', label: 'Parsed Address', type: FieldType.TEXT, isNullable: true },
    { name: 'slackChannel', label: 'Slack Channel', type: FieldType.TEXT, isNullable: true },
    { name: 'paymentAmount', label: 'Payment Amount', type: FieldType.NUMBER, isNullable: true },
    { name: 'matchConfidence', label: 'Match Confidence', type: FieldType.NUMBER, isNullable: true },
    { name: 'parsedDob', label: 'Parsed DOB', type: FieldType.TEXT, isNullable: true },
    { name: 'rawText', label: 'Raw Text', type: FieldType.TEXT, isNullable: true },
    { name: 'cardLast4', label: 'Card Last 4', type: FieldType.TEXT, isNullable: true },
    { name: 'parsedName', label: 'Parsed Name', type: FieldType.TEXT, isNullable: true },
    { name: 'parsedEmail', label: 'Parsed Email', type: FieldType.TEXT, isNullable: true },
    { name: 'parsedDebt', label: 'Parsed Debt', type: FieldType.NUMBER, isNullable: true },
    { name: 'bankName', label: 'Bank Name', type: FieldType.TEXT, isNullable: true },
    { name: 'status', label: 'Status', type: FieldType.SELECT, isNullable: true },
    { name: 'syncedAt', label: 'Synced At', type: FieldType.DATE_TIME, isNullable: true },
  ],
});
