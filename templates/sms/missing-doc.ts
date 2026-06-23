// SMS Template: missing_doc — Request missing documentation from customer
// Category: operations | A2P Compliant: true
// Usage: agent manual trigger, automation on missing document detection

export const missingDocSms = {
  name: 'Missing Document',
  key: 'missing_doc',
  body: `Hi {{customerName}}, we're missing one document to continue your dispute process:

📄 {{documentName}}

You can upload it securely here: {{uploadLink}}

This is needed to proceed with your {{round}} dispute. Takes about 2 minutes — reply if you need help!`,
  category: 'operations',
  variables: ['customerName', 'documentName', 'uploadLink', 'round'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
