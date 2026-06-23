// SMS Template: alumni_checkin — Quarterly check-in for graduated/alumni customers
// Category: engagement | A2P Compliant: true
// Usage: ALUMNI stage quarterly trigger

export const alumniCheckinSms = {
  name: 'Alumni Check-in',
  key: 'alumni_checkin',
  body: `Hi {{customerName}}! 👋 It's been {{monthsSinceGrad}} months since you graduated NewLeaf — just checking in!

How's your credit looking? Your last known {{bureau}} score was {{lastScore}}. If you've noticed any changes or have questions, I'm still here for you.

No cost, no strings — just your credit specialist making sure everything is on track. Reply anytime! 🍃`,
  category: 'engagement',
  variables: ['customerName', 'monthsSinceGrad', 'bureau', 'lastScore'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
