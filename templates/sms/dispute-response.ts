// SMS Template: dispute_response — Notification that bureau responded to a dispute
// Category: disputes | A2P Compliant: true
// Usage: dispute_round.response_received automation

export const disputeResponseSms = {
  name: 'Dispute Response',
  key: 'dispute_response',
  body: `{{customerName}}, the {{bureau}} responded to your dispute for {{creditorName}}.

{{#if result === 'DELETED'}}✅ DELETED — The negative item has been removed from your report!{{/if}}
{{#if result === 'VERIFIED'}}⚠️ VERIFIED — The creditor verified the item. We're escalating to Round {{nextRound}}.{{/if}}
{{#if result === 'UPDATED'}}🔄 UPDATED — The account information was corrected but not removed.{{/if}}
{{#if result === 'PENDING'}}⏳ PENDING — Still under review. Expected resolution: {{expectedDate}}.{{/if}}

We'll keep you posted on next steps.`,
  category: 'disputes',
  variables: ['customerName', 'bureau', 'creditorName', 'result', 'nextRound', 'expectedDate'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
