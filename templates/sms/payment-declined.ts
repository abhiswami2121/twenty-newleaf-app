// SMS Template: payment_declined — Soft decline notification with recovery link
// Category: billing | A2P Compliant: true
// Usage: payment.declined_soft automation, recovery workflow

export const paymentDeclinedSms = {
  name: 'Payment Declined',
  key: 'payment_declined',
  body: `Heads up {{customerName}} — today's payment of ${{amount}} didn't go through.

Don't worry! Update your card here to keep your account active: {{recoveryLink}}

We'll retry automatically in 3 days. Need help? Reply to this text.`,
  category: 'billing',
  variables: ['customerName', 'amount', 'recoveryLink', 'retryDate'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
