// Letter Template: identity_theft_affidavit — FTC Identity Theft Affidavit + dispute cover letter
// Category: disputes | Round: SPECIAL | Bureau: ANY
// Usage: Identity theft case workflow

export const identityTheftAffidavitLetter = {
  name: 'Identity Theft Affidavit',
  key: 'identity_theft_affidavit',
  round: 'SPECIAL',
  bureau: 'ANY',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'customerAddress', 'customerCity', 'customerState', 'customerZip', 'bureauName', 'bureauAddress', 'bureauCity', 'bureauState', 'bureauZip', 'identityTheftDate', 'fraudulentAccounts', 'policeReportNumber', 'policeDepartment', 'ftcComplaintNumber', 'currentDate', 'ssnLastFour'],
  body: `{{currentDate}}

VIA CERTIFIED MAIL — RETURN RECEIPT REQUESTED

{{customerName}}
{{customerAddress}}
{{customerCity}}, {{customerState}} {{customerZip}}

{{bureauName}}
{{bureauAddress}}
{{bureauCity}}, {{bureauState}} {{bureauZip}}

Re: IDENTITY THEFT — Request for Block of Fraudulent Information
FCRA § 605B / 15 U.S.C. § 1681c-2

To the Fraud Department:

This letter is a formal request under the Fair Credit Reporting Act § 605B to BLOCK fraudulent information from my credit file resulting from identity theft.

I DECLARE UNDER PENALTY OF PERJURY that:
1. I am a victim of identity theft.
2. The fraudulent accounts/items listed below are NOT associated with any transaction I made or authorized.
3. I did not receive any benefit from these transactions.
4. The attached Identity Theft Affidavit and supporting documents are true and correct.

IDENTIFYING INFORMATION:
Full Name: {{customerName}}
SSN: XXX-XX-{{ssnLastFour}}
Date of Birth: [DOB — PROVIDED SEPARATELY]

IDENTITY THEFT DETAILS:
Date Discovered: {{identityTheftDate}}
Police Report #: {{policeReportNumber}}
Police Department: {{policeDepartment}}
FTC Complaint #: {{ftcComplaintNumber}}

FRAUDULENT ACCOUNTS/ITEMS TO BE BLOCKED:
{{fraudulentAccounts}}

STATUTORY REQUIREMENT:
Under FCRA § 605B, upon receipt of this request with proper documentation, you are REQUIRED to block the identified fraudulent information from my credit report within FOUR (4) BUSINESS DAYS and notify all furnishers that the information may be the result of identity theft.

Pursuant to FCRA § 605B, I am providing:
1. A copy of a valid government-issued identification card.
2. A copy of the police report regarding the identity theft.
3. A completed FTC Identity Theft Affidavit (FTC Form — enclosed).
4. Proof of my residential address.

Please send written confirmation that the fraudulent items have been blocked to the address above within 5 business days.

Sincerely,

{{customerName}}

Enclosures:
- FTC Identity Theft Affidavit (signed)
- Police Report #{{policeReportNumber}}
- Copy of Government-Issued ID
- Proof of Address
- List of Fraudulent Accounts`,
};
