// SMS Template: manual_review — Customer is in manual review queue
// Category: operations | A2P Compliant: true
// Usage: agent manual trigger, disputed item under manual review

export const manualReviewSms = {
  name: 'Manual Review',
  key: 'manual_review',
  body: `{{customerName}}, your dispute for {{creditorName}} is currently under manual review.

Our dispute specialist is reviewing the bureau's response and will determine the next step within 48 hours. We'll update you as soon as there's news.

No action needed from you right now — we're on it. 🔍`,
  category: 'operations',
  variables: ['customerName', 'creditorName', 'reviewDeadline'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
