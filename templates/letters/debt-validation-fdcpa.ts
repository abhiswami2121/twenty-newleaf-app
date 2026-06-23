// Letter Template: debt_validation_FDCPA — FDCPA § 809 debt validation letter (30-day window)
// Category: disputes | Round: FDCPA | Bureau: N/A
// Usage: New collection notice received, within 30-day window

export const debtValidationFdcpaLetter = {
  name: 'Debt Validation FDCPA',
  key: 'debt_validation_FDCPA',
  round: 'FDCPA',
  bureau: 'N/A',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'customerAddress', 'customerCity', 'customerState', 'customerZip', 'collectorName', 'collectorAddress', 'collectorCity', 'collectorState', 'collectorZip', 'accountNumber', 'allegedAmount', 'originalCreditor', 'currentDate', 'initialContactDate'],
  body: `{{currentDate}}

VIA CERTIFIED MAIL — RETURN RECEIPT REQUESTED
(DO NOT CALL — ALL COMMUNICATION IN WRITING)

{{customerName}}
{{customerAddress}}
{{customerCity}}, {{customerState}} {{customerZip}}

{{collectorName}}
{{collectorAddress}}
{{collectorCity}}, {{collectorState}} {{collectorZip}}

Re: DEBT VALIDATION DEMAND — FDCPA § 809(b)
Account #: {{accountNumber}}
Alleged Amount: ${{allegedAmount}}
Original Creditor (claimed): {{originalCreditor}}
Date of Initial Communication: {{initialContactDate}}

To Whom It May Concern:

This letter is sent in response to your communication dated {{initialContactDate}} regarding the above-referenced alleged debt. This is NOT an acknowledgment of the debt. I DISPUTE this debt in its entirety.

IMPORTANT: This letter is sent within the 30-day validation period under the Fair Debt Collection Practices Act, 15 U.S.C. § 1692g (FDCPA § 809). All collection activities MUST CEASE until validation is provided.

Pursuant to FDCPA § 809(b), I demand that you provide the following:

1. The name and address of the ORIGINAL CREDITOR. (If different from {{originalCreditor}}, state the actual original creditor.)

2. VERIFICATION OF THE DEBT — A copy of the original contract, credit application, or other instrument bearing my signature creating this obligation.

3. A COMPLETE PAYMENT HISTORY from the original creditor — not just a printout from your collection software — showing:
   a. Date the account was opened.
   b. Date of each charge, payment, fee, and adjustment.
   c. The date of first delinquency leading to charge-off (if applicable).
   d. The complete chain of assignment if this debt was purchased.

4. PROOF OF YOUR AUTHORITY — Documentation that you are:
   a. Licensed to collect debts in {{customerState}} (include license number).
   b. Authorized by the original creditor to collect on this specific account.

5. THE STATUTE OF LIMITATIONS — A statement as to whether the statute of limitations for this debt has expired, including the date you claim it began and the applicable time period under {{customerState}} law.

NOTICE OF DISPUTE & CEASE COMMUNICATION:
• I dispute this debt. Do NOT report this debt to any credit reporting agency without also reporting that it is DISPUTED.
• I request that you CEASE communication regarding this debt until you have provided the validation requested above.
• Do NOT call me at any phone number. All communication must be in writing to the address above.

FAILURE TO VALIDATE:
If you cannot or will not provide this validation within 30 days, you must:
1. Cease all collection efforts on this debt.
2. Delete any trade lines reported to credit bureaus.
3. Not sell, transfer, or assign this debt.

Any violation of the FDCPA will result in a lawsuit for statutory damages of up to $1,000 plus actual damages and attorney's fees.

Sincerely,

{{customerName}}
(NOT an acknowledgment of debt.)
`;
};
