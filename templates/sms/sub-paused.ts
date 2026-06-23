// SMS Template: sub_paused — Notification when subscription is paused
// Category: billing | A2P Compliant: true
// Usage: subscription.paused workflow

export const subPausedSms = {
  name: 'Subscription Paused',
  key: 'sub_paused',
  body: `{{customerName}}, your NewLeaf program has been paused as requested.

Your dispute progress is saved and you won't be charged while paused. When you're ready to resume, just reply "RESUME" or call us at {{agentPhone}}.

We'll keep your account warm until {{resumeByDate}}. Take care!`,
  category: 'billing',
  variables: ['customerName', 'agentPhone', 'resumeByDate'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
