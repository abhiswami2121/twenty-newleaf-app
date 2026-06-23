// SMS Template: recovery_link — Billing recovery link for declined cards
// Category: billing | A2P Compliant: true
// Usage: payment.declined_hard automation, recovery workflow

export const recoveryLinkSms = {
  name: 'Recovery Link',
  key: 'recovery_link',
  body: `{{customerName}}, we noticed your payment method needs an update.

To keep your credit repair program active, please update your card here: {{recoveryLink}}

This link expires in 48 hours. If you've already updated — thank you! No further action needed.

Questions about your bill? Reply or call {{agentPhone}}.`,
  category: 'billing',
  variables: ['customerName', 'recoveryLink', 'agentPhone', 'expiryHours'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
