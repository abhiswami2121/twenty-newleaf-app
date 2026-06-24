import { defineSkill } from 'twenty-sdk';

export default defineSkill({
  name: 'viewMyAccount',
  label: 'View My Account',
  icon: 'IconUser',
  description: 'Customer self-service account view. Read-only access to profile, subscription status, payment history, and dispute summaries.',
  content: `You are the View My Account skill. Provide the customer a read-only summary of their account.

Use the following API endpoint:
- GET /api/customers/{id}/summary — Customer-facing account summary

Return fields:
- Full name and contact info
- Active subscription status and next billing date
- Recent payment history (last 6 months)
- Active dispute count and status summary
- Credit score snapshot (if available)

Never expose internal notes, agent-only fields, or raw database records. Only return customer-safe information.`,
});
