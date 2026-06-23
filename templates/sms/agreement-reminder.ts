// SMS Template: agreement_reminder — Sent when agreement is ready for signature
// Category: lead-lifecycle | A2P Compliant: true
// Usage: creditReportReceivedWorkflow, manual reminder

export const agreementReminderSms = {
  name: 'Agreement Reminder',
  key: 'agreement_reminder',
  body: `{{customerName}}, your credit analysis is ready and your enrollment agreement is waiting for your signature.

Review & sign here: {{agreementLink}}

It takes about 3 minutes. Questions? Reply or call me at {{agentPhone}}.`,
  category: 'lead-lifecycle',
  variables: ['customerName', 'agreementLink', 'agentPhone', 'agentName'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
