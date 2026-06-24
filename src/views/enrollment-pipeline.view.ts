import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'enrollment-pipeline',
  label: 'Enrollment Pipeline',
  type: 'kanban',
  icon: 'IconUserCheck',
  objectName: 'customerProfile',
  description: 'Kanban view of customer enrollment pipeline — track customers from Lead through Active. Manage onboarding stages and identify bottlenecks.',
  kanbanField: 'pipelineStage',
  groupByField: 'pipelineStage',
  filters: [
    { field: 'pipelineStage', operator: 'neq', value: 'Active' },
  ],
  columns: [
    { id: 'New', title: 'New Lead', color: '#6B7280' },
    { id: 'Contacted', title: 'Contacted', color: '#3B82F6' },
    { id: 'CreditPulled', title: 'Credit Pulled', color: '#8B5CF6' },
    { id: 'AnalysisDone', title: 'Analysis Done', color: '#EC4899' },
    { id: 'AgreementSent', title: 'Agreement Sent', color: '#F59E0B' },
    { id: 'PaymentSetup', title: 'Payment Setup', color: '#10B981' },
  ],
  cardFields: ['fullName', 'email', 'phonePrimary', 'enrolledAt', 'hasDisputes'],
  sorting: [
    { field: 'enrolledAt', direction: 'desc' },
  ],
});
