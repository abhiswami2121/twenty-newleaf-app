// SMS Template: day_zero_charged — Confirmation after first successful charge
// Category: billing | A2P Compliant: true
// Usage: dayZeroChargedWorkflow

export const dayZeroChargedSms = {
  name: 'Day Zero Charged',
  key: 'day_zero_charged',
  body: `✅ Your first payment of ${{amount}} has been processed!

Welcome aboard, {{customerName}}! Here's what happens next:

1. Your credit reports will be pulled within 24 hours
2. Round 1 dispute letters go out within 3-5 business days
3. You'll get updates at every step

Reply any time — I'm your dedicated agent. Let's get that score up! 🍃`,
  category: 'billing',
  variables: ['customerName', 'amount', 'agentName', 'nextStepDate'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
