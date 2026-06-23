// SMS Template: dispute_update — Notify customer of dispute round result
// Category: disputes | A2P Compliant: true
// Usage: dispute_round.response_received automation

export const disputeUpdateSms = {
  name: 'Dispute Update',
  key: 'dispute_update',
  body: `Dispute update 📋

Creditor: {{creditorName}}
Result: {{result}}
Bureau: {{bureau}}
Items removed: {{itemsRemoved}} / {{itemsTotal}}

{{#if itemsRemoved}}🎉 Progress! {{itemsRemoved}} negative items deleted from your {{bureau}} report.{{/if}}
{{#unless itemsRemoved}}No changes this round. We'll escalate to the next step.{{/unless}}

Reply with any questions.`,
  category: 'disputes',
  variables: ['customerName', 'creditorName', 'result', 'bureau', 'itemsRemoved', 'itemsTotal'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
