// Letter Template: round_2_method_of_verification — Round 2 Method of Verification demand
// Category: disputes | Round: 2 | Bureau: ANY
// Usage: dispute_round.no_response → Round 2 escalation

export const round2MethodOfVerificationLetter = {
  name: 'Round 2 — Method of Verification',
  key: 'round_2_method_of_verification',
  round: '2',
  bureau: 'ANY',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'customerAddress', 'customerCity', 'customerState', 'customerZip', 'bureauName', 'bureauAddress', 'bureauCity', 'bureauState', 'bureauZip', 'ssnLastFour', 'dob', 'disputeItems', 'previousDisputeDate', 'previousDisputeResult', 'currentDate'],
  body: `{{currentDate}}

{{customerName}}
{{customerAddress}}
{{customerCity}}, {{customerState}} {{customerZip}}

{{bureauName}}
{{bureauAddress}}
{{bureauCity}}, {{bureauState}} {{bureauZip}}

Re: SECOND REQUEST — Method of Verification — FCRA § 611(a)(6)(B)(iii) & (iv)

CERTIFIED MAIL — RETURN RECEIPT REQUESTED

To Whom It May Concern:

This is my SECOND dispute regarding the following items. On {{previousDisputeDate}}, I submitted a formal dispute (copy enclosed). You responded on {{previousDisputeDate}} stating these items were "verified." However, you failed to provide any documentation supporting this verification.

I am now exercising my right under FCRA § 611(a)(6)(B)(iii) and (iv) to demand the METHOD OF VERIFICATION used.

IDENTIFYING INFORMATION:
Full Name: {{customerName}}
Date of Birth: {{dob}}
SSN: XXX-XX-{{ssnLastFour}}

ITEMS PREVIOUSLY DISPUTED AND ALLEGEDLY "VERIFIED":
{{disputeItems}}

DEMAND FOR METHOD OF VERIFICATION:
Pursuant to FCRA § 611(a)(7), I demand that you provide me, within 15 days of receipt of this letter:

1. A detailed description of the EXACT procedure used to determine the accuracy and completeness of each disputed item, including but not limited to:
   a. The name and contact information of each person contacted at the furnisher.
   b. The specific documentation reviewed (or a statement that no documentation was reviewed).
   c. The date and method of each contact with the furnisher.
   d. Whether any automated system (e-OSCAR, etc.) was used in lieu of a manual investigation.

2. The business name, address, and telephone number of each furnisher of information contacted.

3. An updated copy of my credit report reflecting the results of any re-investigation.

If you fail to provide this information within the statutory timeframe, or if the method of verification is found to be insufficient, I will pursue all remedies available under the FCRA, including filing complaints with the CFPB and FTC, and pursuing statutory damages of up to $1,000 per violation plus attorney's fees.

Sincerely,

{{customerName}}

Enclosures: Copy of original dispute letter, Copy of bureau response, Copy of government-issued ID`,
};
