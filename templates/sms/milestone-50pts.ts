// SMS Template: milestone_50pts — 50-point score milestone celebration
// Category: engagement | A2P Compliant: true
// Usage: customer.celebrated_milestone automation

export const milestone50ptsSms = {
  name: 'Milestone 50 Points',
  key: 'milestone_50pts',
  body: `🚀 Milestone unlocked, {{customerName}}!

Your {{bureau}} credit score has improved by 50+ points since you started with NewLeaf! That's a HUGE deal — it can mean better rates on loans, credit cards, and mortgages.

Your new score: {{newScore}}
Points gained: {{pointsGained}}

Keep going — the next milestone is right around the corner! 🌟`,
  category: 'engagement',
  variables: ['customerName', 'bureau', 'newScore', 'pointsGained'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
