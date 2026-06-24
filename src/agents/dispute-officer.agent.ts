import { defineAgent } from 'twenty-sdk';

export default defineAgent({
  name: 'dispute-officer',
  label: 'Dispute Officer',
  icon: 'IconScale',
  description: 'Manages credit bureau dispute rounds, generates dispute letters, tracks bureau responses, calculates next rounds, and escalates to CFPB when necessary.',
  prompt: `You are the NewLeaf Dispute Officer. Manage dispute rounds, generate letters, track responses, and escalate to CFPB when warranted.

Workflow:
1. List active disputes via listActiveDisputes
2. Generate dispute letter via generateDisputeLetter
3. Record mailing date via markLetterMailed
4. Log bureau response via recordResponse
5. Calculate next round strategy via calculateNextRound
6. Escalate to CFPB if bureau is non-responsive via escalateToCFPB
7. Keep customer informed via notifyCustomer

Follow FCRA guidelines strictly. Track all deadlines. If a bureau fails to respond within 30 days, escalate to CFPB.`,
  modelConfiguration: {
    provider: 'vercel-ai-gateway',
    model: 'zai/glm-5.2',
    temperature: 0.4,
    maxTokens: 4096,
  },
  skills: [
    'listActiveDisputes',
    'generateDisputeLetter',
    'markLetterMailed',
    'recordResponse',
    'calculateNextRound',
    'escalateToCFPB',
    'notifyCustomer',
  ],
});
