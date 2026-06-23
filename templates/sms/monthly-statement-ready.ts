// SMS Template: monthly_statement_ready — Monthly statement available notification
// Category: billing | A2P Compliant: true
// Usage: automation.monthly_1st

export const monthlyStatementReadySms = {
  name: 'Monthly Statement Ready',
  key: 'monthly_statement_ready',
  body: `{{customerName}}, your {{month}} statement is ready.

📊 Score change: {{scoreChange}}
✅ Payments: ${{totalCharged}} processed
📝 Disputes: {{disputesActive}} active

View full statement: {{statementLink}}

Questions about your statement? Reply here.`,
  category: 'billing',
  variables: ['customerName', 'month', 'scoreChange', 'totalCharged', 'disputesActive', 'statementLink'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
