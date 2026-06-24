import { defineSkill } from 'twenty-sdk';

export default defineSkill({
  name: 'pullCreditReport',
  label: 'Pull Credit Report',
  icon: 'IconFileSearch',
  description: 'Pull a tri-merge credit report via the Forth Credit API. Returns credit scores, tradelines, negatives, and inquiries across all three bureaus.',
  content: `You are the Pull Credit Report skill. Pull a credit report via the Forth Credit API.

Use the following API endpoint:
- POST /api/connectors/forth/credit-pull — Initiate credit pull
- GET /api/connectors/forth/credit-pull/{id} — Check pull status

Payload for initiation:
- customerId — Target customer
- ssn — Last 4 of SSN (encrypted in transit)
- dob — Date of birth
- consentId — Signed consent form reference

The pull returns:
- Tri-merge credit scores (Equifax, Experian, TransUnion)
- Tradeline summary (open accounts, balances, limits)
- Negative items (collections, charge-offs, late payments)
- Inquiry history (hard and soft pulls, last 2 years)
- Public records (bankruptcies, liens, judgments)

Always verify consent exists before pulling. Log the pull via logActivity.`,
});
