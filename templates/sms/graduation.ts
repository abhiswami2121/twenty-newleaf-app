// SMS Template: graduation — Program completion celebration
// Category: engagement | A2P Compliant: true
// Usage: GRADUATED stage trigger

export const graduationSms = {
  name: 'Graduation',
  key: 'graduation',
  body: `🎓 Congratulations, {{customerName}}!

You've completed the NewLeaf credit repair program! Here's what you achieved:

• {{bureau}} score up {{totalPoints}} points
• {{negativeItemsRemoved}} negative items removed
• Program completed in {{programDuration}}

This is YOUR win — you put in the work and it paid off. We're incredibly proud of you.

As an alumni, you'll get quarterly check-ins and ongoing score monitoring. If you know anyone who could use credit help, we'd love an introduction (and we'll thank you for it 😊).

Celebrate this — you earned it! 🍃`,
  category: 'engagement',
  variables: ['customerName', 'bureau', 'totalPoints', 'negativeItemsRemoved', 'programDuration'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
