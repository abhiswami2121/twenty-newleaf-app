// Letter Template: metro2_challenge — Metro2 compliance challenge for data furnishers
// Category: disputes | Round: TECHNICAL | Bureau: ANY
// Usage: DISPUTE_ESCALATION, specialist dispute workflow

export const metro2ChallengeLetter = {
  name: 'Metro2 Challenge',
  key: 'metro2_challenge',
  round: 'TECHNICAL',
  bureau: 'ANY',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'customerAddress', 'customerCity', 'customerState', 'customerZip', 'furnisherName', 'furnisherAddress', 'furnisherCity', 'furnisherState', 'furnisherZip', 'accountNumber', 'metro2Fields', 'currentDate', 'ssnLastFour'],
  body: `{{currentDate}}

VIA CERTIFIED MAIL

{{customerName}}
{{customerAddress}}
{{customerCity}}, {{customerState}} {{customerZip}}

{{furnisherName}}
{{furnisherAddress}}
{{furnisherCity}}, {{furnisherState}} {{furnisherZip}}

Re: METRO2 Reporting Challenge — FCRA § 623(a)
Account #: {{accountNumber}}
Consumer: {{customerName}} (SSN: XXX-XX-{{ssnLastFour}})

To the Compliance Department / Data Furnisher Desk:

This letter is a direct dispute under FCRA § 623(a)(8) regarding inaccurate Metro2 data fields being reported by your organization to consumer reporting agencies.

METRO2 FIELDS IN DISPUTE:
{{metro2Fields}}

BACKGROUND:
Under the Credit Data Industry Association (CDIA) Metro2 Format, data furnishers are required to report accurate information using specific field codes. Your organization is reporting the fields identified above in a manner that does not comply with Metro2 standards and/or contains factually incorrect information.

SPECIFIC COMPLIANCE ISSUES:
1. Incorrect Account Status Code — The Metro2 Account Status Code reported does not accurately reflect the current status of this account.
2. Incorrect Date of First Delinquency (DOFD) — The reported DOFD is inaccurate. Under FCRA § 605, the 7-year reporting period must begin from the correct DOFD. Reporting an incorrect DOFD extends the reporting period beyond statutory limits.
3. Inconsistent Payment History Profile — The payment history fields contain discrepancies when compared to actual payment records.
4. Incorrect Compliance Condition Code — The condition code applied does not accurately describe the account.

REQUESTED CORRECTIONS:
Pursuant to FCRA § 623(a)(8) and 12 CFR § 1022.42:
1. Correct ALL Metro2 fields identified above.
2. Submit corrected data to ALL consumer reporting agencies to which the inaccurate information was furnished.
3. Provide written confirmation of corrections within 30 days.
4. Provide a copy of the corrected Metro2 data tape/transmission report.

CONSEQUENCES OF NON-COMPLIANCE:
Failure to correct inaccurate Metro2 reporting may result in:
• Formal complaint to the CFPB
• Complaint to the FTC
• Private right of action under FCRA § 623(b) and § 617
• Statutory damages of up to $1,000 per violation

Sincerely,

{{customerName}}

Enclosures: Credit reports highlighting Metro2 discrepancies, Metro2 Field Reference Guide excerpts`,
};
