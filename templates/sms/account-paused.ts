// SMS Template: account_paused — Account paused due to payment delinquency
// Category: billing | A2P Compliant: true
// Usage: subscription.cancelled / account paused workflow

export const accountPausedSms = {
  name: 'Account Paused',
  key: 'account_paused',
  body: `{{customerName}}, your NewLeaf account has been temporarily paused due to a missed payment.

Don't worry — your credit repair progress is preserved. To reactivate:

1. Update your payment: {{recoveryLink}}
2. Reply "RESUME" once done

Your next dispute round is ready to go as soon as your account is current. We're here if you need to discuss options at {{agentPhone}}.`,
  category: 'billing',
  variables: ['customerName', 'recoveryLink', 'agentPhone', 'missedAmount'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
