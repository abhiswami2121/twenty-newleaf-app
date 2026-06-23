// SMS Template: score_celebrate — Celebration when credit score improves
// Category: engagement | A2P Compliant: true
// Usage: engagement.score_improved automation

export const scoreCelebrateSms = {
  name: 'Score Celebrate',
  key: 'score_celebrate',
  body: `🎉 Big news, {{customerName}}!

Your {{bureau}} credit score went up {{points}} points! {{#if newScore}}Your new score is {{newScore}}.{{/if}}

This is real progress. Every round of disputes gets us closer to your goal. Keep the momentum going — we're in this together! 💪`,
  category: 'engagement',
  variables: ['customerName', 'bureau', 'points', 'newScore'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
