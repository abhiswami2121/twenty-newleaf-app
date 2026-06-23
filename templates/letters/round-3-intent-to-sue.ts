// Letter Template: round_3_intent_to_sue — Round 3 Intent to Sue / Pre-Litigation Notice
// Category: disputes | Round: 3 | Bureau: ANY
// Usage: dispute_round.no_response → Round 3 final escalation

export const round3IntentToSueLetter = {
  name: 'Round 3 — Intent to Sue',
  key: 'round_3_intent_to_sue',
  round: '3',
  bureau: 'ANY',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'customerAddress', 'customerCity', 'customerState', 'customerZip', 'bureauName', 'bureauAddress', 'bureauCity', 'bureauState', 'bureauZip', 'ssnLastFour', 'dob', 'disputeItems', 'round1Date', 'round2Date', 'currentDate', 'attorneyName', 'attorneyFirm', 'attorneyPhone'],
  body: `{{currentDate}}

VIA CERTIFIED MAIL — RETURN RECEIPT REQUESTED

{{bureauName}}
{{bureauAddress}}
{{bureauCity}}, {{bureauState}} {{bureauZip}}

Re: NOTICE OF INTENT TO SUE — Willful Noncompliance with FCRA
Disputes dated {{round1Date}} (Round 1) and {{round2Date}} (Round 2)

To the General Counsel / Legal Department:

This letter constitutes formal notice of my intent to file a lawsuit against {{bureauName}} for willful and negligent violations of the Fair Credit Reporting Act, 15 U.S.C. § 1681 et seq.

PROCEDURAL HISTORY:
1. On {{round1Date}}, I submitted a formal dispute identifying multiple inaccuracies in my credit file (Round 1, enclosed).
2. On {{round2Date}}, after receiving an inadequate "verified" response, I demanded the Method of Verification under FCRA § 611(a)(7) (Round 2, enclosed).
3. To date, {{bureauName}} has failed to conduct a reasonable investigation OR provide the required Method of Verification.

YOUR VIOLATIONS:
• FCRA § 611(a)(1)(A) — Failure to conduct a reasonable reinvestigation
• FCRA § 611(a)(6)(B)(iii)-(iv) — Failure to provide method of verification
• FCRA § 611(a)(5)(A) — Failure to promptly delete inaccurate information
• FCRA § 623(b)(1) — Failure to conduct investigation upon notice of dispute

DISPUTED ITEMS STILL REPORTING INACCURATELY:
{{disputeItems}}

DEMAND FOR CURE:
To avoid litigation, I demand that within FIFTEEN (15) CALENDAR DAYS of receipt of this notice:
1. Permanently delete ALL disputed items listed above from my credit file.
2. Provide written confirmation of deletion.
3. Furnish a complete updated credit report.

DAMAGES SOUGHT IF LITIGATION PROCEEDS:
• Statutory damages: $1,000 per FCRA violation
• Actual damages for credit denials, increased interest rates, and emotional distress
• Punitive damages for willful noncompliance
• Attorney's fees and costs under FCRA § 616 and § 617

This is my final attempt to resolve this matter without judicial intervention.

Sincerely,

{{customerName}}
{{customerAddress}}
{{customerCity}}, {{customerState}} {{customerZip}}

cc: {{attorneyName}}, {{attorneyFirm}} — {{attorneyPhone}}
Consumer Financial Protection Bureau
Federal Trade Commission
State Attorney General — {{customerState}}

Enclosures: Round 1 dispute letter, Round 2 Method of Verification demand, Bureau responses, Credit reports showing disputed items`,
};
