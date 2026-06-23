// SMS Template: sub_resumed — Notification when subscription resumes
// Category: billing | A2P Compliant: true
// Usage: subscription.resumed workflow

export const subResumedSms = {
  name: 'Subscription Resumed',
  key: 'sub_resumed',
  body: `Welcome back, {{customerName}}! 🎉

Your NewLeaf credit repair program is active again. Your next charge of ${{amount}} will be on {{nextDate}}.

Your dispute progress has been preserved and we're picking up right where we left off. Let's finish strong! 💪`,
  category: 'billing',
  variables: ['customerName', 'amount', 'nextDate'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
