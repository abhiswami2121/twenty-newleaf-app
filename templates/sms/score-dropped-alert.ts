// SMS Template: score_dropped_alert — Alert when score drops unexpectedly
// Category: engagement | A2P Compliant: true
// Usage: engagement.at_risk_detected automation, credit monitoring

export const scoreDroppedAlertSms = {
  name: 'Score Dropped Alert',
  key: 'score_dropped_alert',
  body: `Hi {{customerName}}, we noticed your {{bureau}} credit score dropped by {{pointsDrop}} points.

This can happen for various reasons — a new inquiry, a reported balance change, or a new collection. Don't panic.

We're investigating now and will reach out within 24 hours with a plan. Your agent {{agentName}} is on it. 💪`,
  category: 'engagement',
  variables: ['customerName', 'bureau', 'pointsDrop', 'agentName'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
