// SMS Template: ach_failed — ACH payment failure notification
// Category: billing | A2P Compliant: true
// Usage: payment.declined_hard (ACH variant)

export const achFailedSms = {
  name: 'ACH Failed',
  key: 'ach_failed',
  body: `{{customerName}}, your ACH payment of ${{amount}} could not be processed.

Reason: {{failureReason}}

To update your payment method, visit: {{recoveryLink}}
Or switch to a card payment by replying "CARD" to this message.

We'll retry in {{retryDays}} days. Questions? Call {{agentPhone}}.`,
  category: 'billing',
  variables: ['customerName', 'amount', 'failureReason', 'recoveryLink', 'retryDays', 'agentPhone'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
