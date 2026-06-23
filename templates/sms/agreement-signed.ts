// SMS Template: agreement_signed — Confirmation after agreement is signed
// Category: lead-lifecycle | A2P Compliant: true
// Usage: agreementSignedWorkflow

export const agreementSignedSms = {
  name: 'Agreement Signed',
  key: 'agreement_signed',
  body: `Thanks for signing, {{customerName}}! ✅

Your enrollment is almost complete. We're setting up your account now — your first payment of ${{amount}} will process today.

You'll get a confirmation text once everything is active. In the meantime, any questions? Reply here!`,
  category: 'lead-lifecycle',
  variables: ['customerName', 'amount', 'planType'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
