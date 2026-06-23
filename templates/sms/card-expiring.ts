// SMS Template: card_expiring — 30-day card expiration warning
// Category: billing | A2P Compliant: true
// Usage: card.expiring_in_30_days automation

export const cardExpiringSms = {
  name: 'Card Expiring',
  key: 'card_expiring',
  body: `Quick heads up {{customerName}} — your card ending in {{lastFour}} expires next month.

To avoid any interruption in your credit repair program, update your card here: {{updateLink}}

It only takes a minute and ensures your next payment goes through smoothly. 👍`,
  category: 'billing',
  variables: ['customerName', 'lastFour', 'updateLink', 'expiryMonth'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
