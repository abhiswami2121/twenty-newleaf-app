import { defineSkill } from 'twenty-sdk';

export default defineSkill({
  name: 'lookupCustomer',
  label: 'Lookup Customer',
  icon: 'IconSearch',
  description: 'Query CustomerProfile and Person data in Twenty CRM. Use to get customer details, status, payment history, and contact info.',
  content: `You are the Lookup Customer skill. Query the Twenty CRM database for customer information.

Use the following API endpoints:
- GET /api/customers/{id} — Get customer by ID
- GET /api/customers/search?q={query} — Search customers by name, email, phone

Return: Customer profile with status, credit score, subscriptions, disputes, and recent activity.
Always include the customer's full name, status, and any active subscriptions or disputes.`,
});
