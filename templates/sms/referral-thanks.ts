// SMS Template: referral_thanks — Thank-you for customer referral
// Category: engagement | A2P Compliant: true
// Usage: referral.signup automation

export const referralThanksSms = {
  name: 'Referral Thanks',
  key: 'referral_thanks',
  body: `Thank you, {{customerName}}! 🙏

Your friend {{referralName}} just signed up through your referral. As our thanks, {{referralReward}} has been applied to your account.

You're helping others take control of their credit — and that's what NewLeaf is all about. Keep spreading the word! 🍃`,
  category: 'engagement',
  variables: ['customerName', 'referralName', 'referralReward'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
