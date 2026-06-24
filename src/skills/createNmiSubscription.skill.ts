import { defineSkill } from 'twenty-sdk';

export default defineSkill({
  name: 'createNmiSubscription',
  label: 'Create NMI Subscription',
  icon: 'IconCreditCard',
  description: 'Create a recurring subscription in the NMI Customer Vault. Sets up billing schedule, amount, and links to customer record.',
  content: `You are the Create NMI Subscription skill. Create a recurring subscription in the NMI Customer Vault.

Use the following API endpoint:
- POST /api/connectors/nmi/subscription — Create subscription

Payload fields:
- customerId — Twenty CRM customer ID
- vaultId — NMI customer vault ID (create first if needed)
- amount — Recurring charge amount in cents
- currency — USD (default)
- interval — day | week | month | year
- intervalCount — Interval multiplier (e.g., 1 for monthly)
- startDate — First charge date (ISO 8601)
- description — Subscription description
- planId — Optional: NMI plan reference

Pre-requisites:
- Customer must have a valid vault entry with payment method
- Agreement must be signed and on file
- Day Zero charge amount must be authorized

Returns: NMI subscription ID, next billing date, and status.`,
});
