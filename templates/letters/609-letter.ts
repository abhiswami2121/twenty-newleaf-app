// Letter Template: 609_letter — FCRA § 609 request for disclosure / verification
// Category: disputes | Round: SPECIAL | Bureau: ANY
// Usage: Specialist dispute workflow, pre-dispute information gathering

export const section609Letter = {
  name: 'FCRA Section 609 Letter',
  key: '609_letter',
  round: 'SPECIAL',
  bureau: 'ANY',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'customerAddress', 'customerCity', 'customerState', 'customerZip', 'bureauName', 'bureauAddress', 'bureauCity', 'bureauState', 'bureauZip', 'ssnLastFour', 'dob', 'disputedItems', 'currentDate'],
  body: `{{currentDate}}

VIA CERTIFIED MAIL — RETURN RECEIPT REQUESTED

{{customerName}}
{{customerAddress}}
{{customerCity}}, {{customerState}} {{customerZip}}

{{bureauName}}
{{bureauAddress}}
{{bureauCity}}, {{bureauState}} {{bureauZip}}

Re: REQUEST FOR VERIFICATION AND DISCLOSURE — FCRA § 609
15 U.S.C. § 1681g

To the Consumer Disclosure Department:

This letter is a formal request under the Fair Credit Reporting Act § 609 (15 U.S.C. § 1681g) for the full disclosure of information in my consumer file and verification of specific items reported therein.

IDENTIFYING INFORMATION:
Full Name: {{customerName}}
SSN: XXX-XX-{{ssnLastFour}}
Date of Birth: {{dob}}
Current Address: {{customerAddress}}, {{customerCity}}, {{customerState}} {{customerZip}}

NATURE OF REQUEST:
Pursuant to FCRA § 609(a), I request that you provide me with ALL information in my consumer file at the time of this request, including but not limited to:

1. ALL information in my file — not just a summary or credit report, but the COMPLETE file contents as defined under FCRA § 609(a)(1).

2. The SOURCE of each item of information — including the name, address, and phone number of each furnisher.

3. For the following specific items, I request copies of the ORIGINAL DOCUMENTS providing the basis for their inclusion in my file:
   {{disputedItems}}

4. The dates on which each of these items was first reported and last updated.

5. A record of ALL inquiries into my file for the past 24 months, including:
   a. The identity of each person/entity that received my consumer report.
   b. The date of each inquiry.
   c. The permissible purpose claimed for each inquiry.
   d. Any certification of permissible purpose made by the requester.

6. All disclosures made pursuant to FCRA § 609(a)(3).

STATUTORY RIGHT:
FCRA § 609(a)(1) states: "Every consumer reporting agency shall, upon request, and subject to section 610(a)(1), clearly and accurately disclose to the consumer: (1) All information in the consumer's file at the time of the request."

This is NOT a dispute letter. This is a request for DISCLOSURE of the complete contents of my consumer file and the originals/records forming the basis of each item.

Please provide this information within the timeframe required by law. I have enclosed a copy of my government-issued identification and proof of address as verification of my identity.

Sincerely,

{{customerName}}

Enclosures: Copy of government-issued ID, Proof of current address (utility bill)`,
};
