// SMS Template: chargeback_received — Notification when chargeback is filed
// Category: billing | A2P Compliant: true
// Usage: chargeback.dispute_filed workflow

export const chargebackReceivedSms = {
  name: 'Chargeback Received',
  key: 'chargeback_received',
  body: `{{customerName}}, we received notice of a chargeback for a payment of ${{amount}} on {{chargeDate}}.

If this was filed in error or by your bank without your knowledge, please contact us immediately at {{agentPhone}} so we can resolve it together.

If you intended to dispute the charge, we'd love to understand what went wrong and make it right. Your program remains active while we sort this out.`,
  category: 'billing',
  variables: ['customerName', 'amount', 'chargeDate', 'agentPhone'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
