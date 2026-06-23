// SMS Template: welcome_lead — Sent when new lead enters pipeline
// Category: lead-lifecycle | A2P Compliant: true
// Usage: leadCreatedWorkflow, manual outreach

export const welcomeLeadSms = {
  name: 'Welcome Lead',
  key: 'welcome_lead',
  body: `Hi {{customerName}}! Welcome to NewLeaf Financial — I'm {{agentName}}, your personal credit specialist.

Quick question: what's your biggest credit goal right now? (Reply to this text — I read every message.)

Talk soon! 🍃`,
  category: 'lead-lifecycle',
  variables: ['customerName', 'agentName', 'agentPhone'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
