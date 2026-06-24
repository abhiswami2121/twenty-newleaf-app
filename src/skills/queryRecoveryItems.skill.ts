import { defineSkill } from 'twenty-sdk';

export default defineSkill({
  name: 'queryRecoveryItems',
  label: 'Query Recovery Items',
  icon: 'IconAlertTriangle',
  description: 'Query the recovery queue for at-risk subscriptions. Returns items with failed payments, retry counts, decline codes, and last contact timestamps.',
  content: `You are the Query Recovery Items skill. Scan the recovery queue for at-risk subscriptions.

Use the following API endpoints:
- GET /api/recovery/items?status=at_risk — All at-risk items
- GET /api/recovery/items?status=past_due — Past due subscriptions
- GET /api/recovery/items/{id} — Single recovery item detail

Each item includes: subscription ID, customer ID, amount due, days past due, decline code, retry count, last contact date.
Prioritize by amount (descending) and days past due (descending).`,
});
