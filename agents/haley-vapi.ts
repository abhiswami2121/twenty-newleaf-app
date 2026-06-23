// Haley VAPI Agent — AI Voice Assistant Integration
// Haley handles lead qualification calls, processes inbound support, and transfers to agents when needed.
// Connected to VAPI Voice AI connector.

import { defineAgent } from 'twenty-sdk/define';

export default defineAgent({
  name: 'haley-vapi',
  label: 'Haley — VAPI Voice AI',
  description: 'AI voice assistant for lead qualification, support triage, and agent warm transfers',
  icon: 'IconPhone',
  connector: 'VAPI',

  skills: [
    {
      name: 'lead-qualification',
      label: 'Lead Qualification Call',
      description: 'Calls new leads to collect DOB, SSN, credit goals, and assess qualification',
      trigger: { workflow: 'lead-created', delay: '30s' },
      script: 'You are Haley, a friendly credit repair specialist from NewLeaf Financial. Greet the lead, explain our program briefly, and ask qualification questions: date of birth, last 4 of SSN, and credit goals. Score their qualification 1-10 based on engagement and fit.',
    },
    {
      name: 'support-triage',
      label: 'Support Triage Bot',
      description: 'Answers inbound support calls, categorizes issues, and routes to appropriate agent',
      trigger: { type: 'INBOUND_CALL' },
      script: 'You are Haley, NewLeaf support. Ask how you can help, categorize the issue (billing, dispute, enrollment, technical, general), and either resolve or warm-transfer to the appropriate specialist.',
    },
    {
      name: 'payment-reminder',
      label: 'Friendly Payment Reminder',
      description: 'Calls customers with soft declines to remind them to update payment method',
      trigger: { workflow: 'payment-declined-soft', delay: '1h' },
      script: 'You are Haley from NewLeaf. A recent payment didn\'t go through — likely a temporary issue. Can the customer update their card or check with their bank? Be friendly, not demanding.',
    },
  ],

  settings: {
    voice: 'female-1',
    transferNumber: 'AGENT_ROUND_ROBIN',
    maxCallDuration: 300, // seconds
    voicemailDetection: true,
    leaveVoicemail: true,
  },
});
