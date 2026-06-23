// Letter Template: direct_creditor_validation — Direct creditor/collector debt validation letter
// Category: disputes | Round: N/A (direct to creditor) | Bureau: N/A
// Usage: DISPUTE_ESCALATION, direct creditor dispute workflow

export const directCreditorValidationLetter = {
  name: 'Direct Creditor Validation',
  key: 'direct_creditor_validation',
  round: 'DIRECT',
  bureau: 'N/A',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'customerAddress', 'customerCity', 'customerState', 'customerZip', 'creditorName', 'creditorAddress', 'creditorCity', 'creditorState', 'creditorZip', 'accountNumber', 'disputedAmount', 'ssnLastFour', 'currentDate'],
  body: `{{currentDate}}

VIA CERTIFIED MAIL — RETURN RECEIPT REQUESTED

{{customerName}}
{{customerAddress}}
{{customerCity}}, {{customerState}} {{customerZip}}

{{creditorName}}
{{creditorAddress}}
{{creditorCity}}, {{creditorState}} {{creditorZip}}

Re: Debt Validation Request — FDCPA § 809 / FCRA § 623
Account #: {{accountNumber}}
Alleged Amount: ${{disputedAmount}}

To Whom It May Concern:

This letter is a formal request for debt validation under the Fair Debt Collection Practices Act, 15 U.S.C. § 1692g (FDCPA § 809), and a direct dispute under the Fair Credit Reporting Act, 15 U.S.C. § 1681s-2 (FCRA § 623).

I do NOT acknowledge this debt as valid. I am requesting that you provide verification and documentation that:

1. This alleged debt is valid and belongs to me.
2. You are legally authorized to collect this debt in {{customerState}}.
3. The amount claimed is accurate, including a complete payment and fee history from the original creditor.
4. The original creditor's name, address, and the date the original account was opened.
5. A copy of the original signed contract or credit application bearing my signature.
6. The date of last activity on this account.
7. The statute of limitations for this debt in {{customerState}}.

SPECIFIC REQUESTS:
1. Provide the complete chain of title/assignment if this debt was purchased.
2. Provide a copy of the original contract with my signature.
3. Provide a detailed accounting of all charges, fees, payments, and interest from the original creditor.
4. Provide documentation that you are licensed to collect debts in {{customerState}} (license number required).

Until you provide this verification:
• You must CEASE all collection activities under FDCPA § 809(b).
• You must NOT report this debt to any credit reporting agency.
• Any continued reporting of an unverified debt constitutes a violation of FCRA § 623(b).

If you fail to provide adequate verification within 30 days, I will pursue all remedies under the FDCPA and FCRA, including statutory damages, actual damages, and attorney's fees.

Sincerely,

{{customerName}}
SSN: XXX-XX-{{ssnLastFour}}`,
};
