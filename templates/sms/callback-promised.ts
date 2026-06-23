// SMS Template: callback_promised — Follow-up after promising to call back
// Category: engagement | A2P Compliant: true
// Usage: agent manual trigger, after-hours response

export const callbackPromisedSms = {
  name: 'Callback Promised',
  key: 'callback_promised',
  body: `Hi {{customerName}} — {{agentName}} here. I promised I'd follow up with you.

{{#if specificTopic}}Re: {{specificTopic}}{{/if}}

Call me back at {{agentPhone}} when you're free, or reply here with a good time to reach you.

Talk soon!`,
  category: 'engagement',
  variables: ['customerName', 'agentName', 'agentPhone', 'specificTopic'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
