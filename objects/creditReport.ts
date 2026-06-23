// Credit Report — Custom Object
// Auto-imported from Twenty schema | 19 custom fields
import { defineObject, FieldType } from 'twenty-sdk/define';

export default defineObject({
  nameSingular: 'creditReport',
  namePlural: 'creditReports',
  labelSingular: 'Credit Report',
  labelPlural: 'Credit Reports',
  description: 'Credit report pulls from NewLeaf credit monitoring',
  icon: 'IconBox',
  fields: [
    { name: 'name', label: 'Name', type: FieldType.TEXT, isNullable: true },
    { name: 'createdBy', label: 'Created by', type: FieldType.TEXT, isNullable: false },
    { name: 'updatedBy', label: 'Updated by', type: FieldType.TEXT, isNullable: false },
    { name: 'timelineActivities', label: 'Timeline Activities', type: FieldType.RELATION, isNullable: true },
    { name: 'attachments', label: 'Attachments', type: FieldType.RELATION, isNullable: true },
    { name: 'noteTargets', label: 'Note Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'taskTargets', label: 'Task Targets', type: FieldType.RELATION, isNullable: true },
    { name: 'equifaxScore', label: 'Equifax Score', type: FieldType.NUMBER, isNullable: true },
    { name: 'pullDate', label: 'Pull Date', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'negativeCount', label: 'Negative Items', type: FieldType.NUMBER, isNullable: true },
    { name: 'scoresJson', label: 'Scores JSON', type: FieldType.TEXT, isNullable: true },
    { name: 'experianScore', label: 'Experian Score', type: FieldType.NUMBER, isNullable: true },
    { name: 'reportDate', label: 'Report Date', type: FieldType.DATE_TIME, isNullable: true },
    { name: 'transunionScore', label: 'TransUnion Score', type: FieldType.NUMBER, isNullable: true },
    { name: 'status', label: 'Status', type: FieldType.SELECT, isNullable: true },
    { name: 'avgScore', label: 'Average Score', type: FieldType.NUMBER, isNullable: true },
    { name: 'totalDebt', label: 'Total Debt', type: FieldType.NUMBER, isNullable: true },
    { name: 'collectionsCount', label: 'Collections', type: FieldType.NUMBER, isNullable: true },
    { name: 'accountCount', label: 'Total Accounts', type: FieldType.NUMBER, isNullable: true },
  ],
});
