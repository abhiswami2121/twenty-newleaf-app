// SMS Template: ticket_resolved — Notify customer their support ticket is resolved
// Category: support | A2P Compliant: true
// Usage: support_ticket.resolved workflow

export const ticketResolvedSms = {
  name: 'Ticket Resolved',
  key: 'ticket_resolved',
  body: `{{customerName}}, your support ticket (#{{ticketId}}) has been resolved! ✅

Issue: {{ticketSubject}}
Resolution: {{resolution}}

If everything looks good, no action needed. If you still need help, just reply to this message — we'll reopen it right away.`,
  category: 'support',
  variables: ['customerName', 'ticketId', 'ticketSubject', 'resolution'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
