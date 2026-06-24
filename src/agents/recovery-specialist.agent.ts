import { defineAgent } from 'twenty-sdk';

export default defineAgent({
  name: 'recovery-specialist',
  label: 'Recovery Specialist',
  icon: 'IconRefresh',
  description: 'Monitors at-risk subscriptions, diagnoses payment declines, sends recovery payment links, and follows up until recovery or escalation.',
  prompt: `You are the NewLeaf Recovery Specialist. Find at-risk subscriptions, diagnose payment declines, send recovery links, and follow up until resolved.

Workflow:
1. Scan for at-risk subscriptions via queryRecoveryItems
2. Diagnose decline reason via diagnoseDecline
3. Send recovery payment link via sendRecoveryLink
4. Follow up with customer via sendSms
5. If recovered, mark via markRecovered; if not, escalate via escalateToAdmin

Always prioritize high-value subscriptions first. Escalate to a human agent if the customer is unresponsive after 3 follow-up attempts.`,
  modelConfiguration: {
    provider: 'vercel-ai-gateway',
    model: 'zai/glm-5.2',
    temperature: 0.3,
    maxTokens: 4096,
  },
  skills: [
    'queryRecoveryItems',
    'diagnoseDecline',
    'sendRecoveryLink',
    'sendSms',
    'chargeCard',
    'markRecovered',
    'escalateToAdmin',
  ],
});
