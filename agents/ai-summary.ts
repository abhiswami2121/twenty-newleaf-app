// AI Summary Agent — Generates call summaries, customer digests, and reports
// Runs after VAPI calls, generates morning pulse reports, and creates customer 360 digests.
// Uses LLM integration for natural language summarization.

import { defineAgent } from 'twenty-sdk/define';

export default defineAgent({
  name: 'ai-summary',
  label: 'AI Summary Generator',
  description: 'Generates call summaries, customer digests, and morning pulse reports',
  icon: 'IconSparkles',

  skills: [
    {
      name: 'call-summary',
      label: 'Call Summary',
      description: 'Generates a concise summary from VAPI/Freshcaller call transcripts',
      trigger: { workflow: 'vapi-transfer-received' },
      output: {
        fields: ['summary', 'disposition', 'qualificationScore', 'nextSteps', 'sentiment'],
        format: 'STRUCTURED',
        targetObject: 'callEvent',
      },
    },
    {
      name: 'customer-360-digest',
      label: 'Customer 360 Digest',
      description: 'Generates a natural language summary of a customer\'s full history',
      trigger: { type: 'MANUAL', action: 'generate-digest' },
      dataSources: [
        { object: 'customerProfile', fields: ['firstName', 'lastName', 'pipelineStage', 'enrolledAt'] },
        { object: 'creditReport', fields: ['bureau', 'score', 'reportDate'], limit: 3 },
        { object: 'dispute', fields: ['bureau', 'currentRound', 'status'], limit: 10 },
        { object: 'billingEvent', fields: ['amount', 'status', 'createdAt'], limit: 5 },
        { object: 'communicationLog', fields: ['channel', 'direction', 'createdAt'], limit: 10 },
      ],
      template: 'Customer: {{firstName}} {{lastName}}\nStage: {{pipelineStage}}\nEnrolled: {{enrolledAt}}\nLatest Scores: {{creditReports}}\nActive Disputes: {{disputes}}\nRecent Billing: {{billing}}\nLast Contact: {{lastCommunication}}',
    },
    {
      name: 'morning-pulse-report',
      label: 'Morning Pulse Report',
      description: 'Daily morning summary: new leads, enrollments, at-risk customers, revenue',
      trigger: { type: 'SCHEDULED', schedule: '0 7 * * *' },
      dataSources: [
        { object: 'customerProfile', aggregate: 'COUNT', filter: { createdAt: 'TODAY' }, label: 'New Leads' },
        { object: 'customerProfile', aggregate: 'COUNT', filter: { enrolledAt: 'TODAY' }, label: 'New Enrollments' },
        { object: 'customerProfile', aggregate: 'COUNT', filter: { pipelineStage: 'AT_RISK' }, label: 'At Risk' },
        { object: 'billingEvent', aggregate: 'SUM', field: 'amount', filter: { status: 'success', createdAt: 'TODAY' }, label: 'Revenue Today' },
        { object: 'recoveryItem', aggregate: 'COUNT', filter: { status: 'pending' }, label: 'Recovery Queue' },
      ],
      output: {
        channel: 'SLACK',
        target: '#jarvis-admin',
        format: 'MORNING_PULSE',
      },
    },
  ],

  settings: {
    model: 'claude-sonnet-4-20250514',
    maxTokens: 2000,
    temperature: 0.3,
  },
});
