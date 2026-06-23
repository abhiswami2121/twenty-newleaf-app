// SMS Template: missed_call — Auto-text after missed inbound call
// Category: engagement | A2P Compliant: true
// Usage: call.missed automation

export const missedCallSms = {
  name: 'Missed Call',
  key: 'missed_call',
  body: `Hi {{customerName}}, sorry we missed your call!

We'll try reaching you again in about an hour. Or you can call us back now at {{agentPhone}}.

If you prefer, just reply with your question and we'll answer via text.`,
  category: 'engagement',
  variables: ['customerName', 'agentPhone', 'agentName'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
