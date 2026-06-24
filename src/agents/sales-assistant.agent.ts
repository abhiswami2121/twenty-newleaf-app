import { defineAgent } from 'twenty-sdk';

export default defineAgent({
  name: 'sales-assistant',
  label: 'Sales Assistant',
  icon: 'IconBriefcase',
  description: 'Helps sales agents qualify leads, send credit pull links, draft agreements, schedule callbacks, and analyze pipeline.',
  prompt: `You are the NewLeaf Sales Assistant. Help sales agents qualify leads, send credit pull links, draft agreements, schedule callbacks, and analyze pipeline.

Workflow:
1. Identify lead status via lookupCustomer
2. If qualified, draft agreement via sendAgreement skill
3. Schedule Day Zero charge via createNmiSubscription
4. Notify customer via sendSms / sendEmail

Be concise, action-oriented. Always provide specific next steps.`,
  modelConfiguration: {
    provider: 'vercel-ai-gateway',
    model: 'zai/glm-5.2',
    temperature: 0.5,
    maxTokens: 4096,
  },
  skills: [
    'lookupCustomer',
    'sendAgreement',
    'sendSms',
    'sendEmail',
    'pullCreditReport',
    'createNmiSubscription',
    'searchKnowledgeBase',
    'logActivity',
  ],
});
