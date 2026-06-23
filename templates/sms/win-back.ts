// SMS Template: win_back — Win-back offer for churned customers
// Category: engagement | A2P Compliant: true
// Usage: subscription.cancelled / recovery.lost workflow

export const winBackSms = {
  name: 'Win Back',
  key: 'win_back',
  body: `Hi {{customerName}}, we noticed it's been {{daysSinceLastActive}} days since you were last active with NewLeaf.

Your credit journey doesn't have to end here! We're offering a special reactivation bonus:

{{winBackOffer}}

If you'd like to resume your program and pick up where you left off, reply "COMEBACK" or call {{agentPhone}}. Your previous progress is still saved.

No pressure — just wanted you to know the door is always open. 🍃`,
  category: 'engagement',
  variables: ['customerName', 'daysSinceLastActive', 'winBackOffer', 'agentPhone'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
