// Letter Template: cfpb_complaint — CFPB complaint template with narrative structure
// Category: disputes | Round: FEDERAL | Bureau: ANY
// Usage: dispute.cfpb_escalation_needed automation

export const cfpbComplaintLetter = {
  name: 'CFPB Complaint',
  key: 'cfpb_complaint',
  round: 'FEDERAL',
  bureau: 'ANY',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'customerAddress', 'customerCity', 'customerState', 'customerZip', 'bureauName', 'creditorName', 'accountNumber', 'disputedItems', 'round1Date', 'round2Date', 'round3Date', 'currentDate', 'consumerNarrative', 'desiredResolution'],
  body: `CONSUMER FINANCIAL PROTECTION BUREAU COMPLAINT

Date: {{currentDate}}

CONSUMER INFORMATION:
Name: {{customerName}}
Address: {{customerAddress}}, {{customerCity}}, {{customerState}} {{customerZip}}

COMPANY COMPLAINED ABOUT:
Company: {{bureauName}} / {{creditorName}}
Account/Reference Number: {{accountNumber}}

PRODUCT: Credit Reporting
SUB-PRODUCT: Credit repair dispute process
ISSUE: Incorrect information on credit report / Failure to investigate

TIMELINE OF EVENTS:
• {{round1Date}}: Submitted Round 1 factual dispute to {{bureauName}} identifying inaccurate items. (Attachment 1)
• {{round2Date}}: Submitted Round 2 Method of Verification demand after inadequate "verified" response. (Attachment 2)
• {{round3Date}}: Submitted Round 3 pre-litigation notice of intent to sue. (Attachment 3)
• To date: {{bureauName}} continues to report inaccurate information and has failed to provide required verification.

CONSUMER NARRATIVE:
{{consumerNarrative}}

DISPUTED ITEMS:
{{disputedItems}}

DESIRED RESOLUTION:
{{desiredResolution}}

SUPPORTING DOCUMENTS ATTACHED:
1. Round 1 dispute letter with certified mail receipt
2. Round 2 Method of Verification demand with certified mail receipt
3. Round 3 Intent to Sue notice with certified mail receipt
4. Bureau responses (or documentation of non-response)
5. Credit reports showing disputed items
6. Copy of government-issued ID

I certify that the information I have provided is true and correct to the best of my knowledge.

{{customerName}}
{{currentDate}}`,
};
