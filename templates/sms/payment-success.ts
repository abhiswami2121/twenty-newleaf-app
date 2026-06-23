// SMS Template: payment_success — Payment confirmation receipt
// Category: billing | A2P Compliant: true
// Usage: dayZeroChargedWorkflow, payment.success automation

export const paymentSuccessSms = {
  name: 'Payment Success',
  key: 'payment_success',
  body: `✅ Payment received — ${{amount}}

You're all set! Your next charge will be on {{nextDate}}.

Questions about your plan? Reply here anytime.`,
  category: 'billing',
  variables: ['amount', 'nextDate', 'customerName'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
