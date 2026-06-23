// Letter Template: round_1_factual_dispute — Round 1 factual dispute letter to credit bureau
// Category: disputes | Round: 1 | Bureau: TransUnion, Equifax, Experian
// Usage: DISPUTE_ACTIVE stage, Round 1 mailing

export const round1FactualDisputeLetter = {
  name: 'Round 1 — Factual Dispute',
  key: 'round_1_factual_dispute',
  round: '1',
  bureau: 'ANY',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'customerAddress', 'customerCity', 'customerState', 'customerZip', 'bureauName', 'bureauAddress', 'bureauCity', 'bureauState', 'bureauZip', 'ssnLastFour', 'dob', 'disputeItems', 'currentDate'],
  body: `{{currentDate}}

{{customerName}}
{{customerAddress}}
{{customerCity}}, {{customerState}} {{customerZip}}

{{bureauName}}
{{bureauAddress}}
{{bureauCity}}, {{bureauState}} {{bureauZip}}

Re: Dispute of Inaccurate Information — FCRA § 611

To Whom It May Concern:

I am writing to dispute the following information in my credit report. I have circled the items I dispute on the attached copy of the report I received.

This letter constitutes a formal dispute under the Fair Credit Reporting Act, 15 U.S.C. § 1681i (FCRA § 611). I request that you investigate the following items and delete them from my credit file if they cannot be verified.

IDENTIFYING INFORMATION:
Full Name: {{customerName}}
Date of Birth: {{dob}}
Social Security Number: XXX-XX-{{ssnLastFour}}
Current Address: {{customerAddress}}, {{customerCity}}, {{customerState}} {{customerZip}}

DISPUTED ITEMS:
{{disputeItems}}

Each of these items is inaccurate, incomplete, or unverifiable. Specifically:
1. The reported information is factually incorrect.
2. The creditor/collector has failed to provide verifiable documentation supporting these entries.
3. These items do not meet the requirements for reporting under the FCRA.

REQUESTED ACTION:
Pursuant to FCRA § 611(a), I request that you:
1. Conduct a reasonable investigation into each disputed item.
2. Delete or correct each inaccurate item within 30 days as required by law.
3. Provide me with the name, address, and phone number of each furnisher of information contacted.
4. Send me an updated copy of my credit report reflecting any changes.
5. Do NOT simply "verify" these items through your automated dispute system (e-OSCAR). I am requesting a MANUAL investigation with actual documentation from the furnisher.

Please process this dispute promptly. The FCRA requires you to complete your investigation within 30 days of receipt of this letter.

Sincerely,

{{customerName}}

Enclosures: Copy of credit report with disputed items circled, Copy of government-issued ID`,
};
