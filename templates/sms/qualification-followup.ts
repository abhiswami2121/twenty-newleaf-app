// SMS Template: qualification_followup — Sent after lead qualifies (DOB+SSN collected)
// Category: lead-lifecycle | A2P Compliant: true
// Usage: leadQualifiedWorkflow

export const qualificationFollowupSms = {
  name: 'Qualification Followup',
  key: 'qualification_followup',
  body: `Hey {{customerName}}! Great news — you're qualified and we're ready to review your credit.

Click here to pull your credit report securely: {{dppLink}}

This takes about 2 minutes and doesn't affect your score. Let me know once you're done!`,
  category: 'lead-lifecycle',
  variables: ['customerName', 'dppLink', 'agentName'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
