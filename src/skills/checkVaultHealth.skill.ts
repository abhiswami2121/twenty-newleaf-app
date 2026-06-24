import { defineSkill } from 'twenty-sdk';

export default defineSkill({
  name: 'checkVaultHealth',
  label: 'Check Vault Health',
  icon: 'IconShieldCheck',
  description: 'Verify NMI customer vault health — check card expiry, stored credentials, token validity, and subscription status. Run before any billing operation.',
  content: `You are the Check Vault Health skill. Verify the health of NMI customer vault records.

Use the following checks:
- Verify customer_vault_id exists and is active
- Check card expiry date is in the future
- Validate DPAN / network token status
- Confirm subscription status and next billing date
- Flag any expired cards or invalid tokens

Return: Vault health report with status (healthy/at-risk/critical), expired cards, invalid tokens, and recommended actions.
Always include specific vault IDs and subscription references.`,
});
