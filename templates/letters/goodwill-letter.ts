// Letter Template: goodwill_letter — Goodwill deletion request to creditor
// Category: disputes | Round: GOODWILL | Bureau: N/A
// Usage: Agent manual trigger, end-of-dispute-round goodwill attempt

export const goodwillLetter = {
  name: 'Goodwill Letter',
  key: 'goodwill_letter',
  round: 'GOODWILL',
  bureau: 'N/A',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'customerAddress', 'customerCity', 'customerState', 'customerZip', 'creditorName', 'creditorAddress', 'creditorCity', 'creditorState', 'creditorZip', 'accountNumber', 'latePayments', 'latePaymentDates', 'currentDate', 'customerNarrative', 'correctiveActions'],
  body: `{{currentDate}}

{{customerName}}
{{customerAddress}}
{{customerCity}}, {{customerState}} {{customerZip}}

{{creditorName}}
{{creditorAddress}}
{{creditorCity}}, {{creditorState}} {{creditorZip}}

Re: Goodwill Request — Removal of Late Payments
Account #: {{accountNumber}}

Dear {{creditorName}} Customer Relations:

I am writing to request a goodwill adjustment regarding {{latePayments}} late {{#if latePayments === 1}}payment{{else}}payments{{/if}} reported on the above-referenced account.

MY SITUATION:
{{customerNarrative}}

The late {{#if latePayments === 1}}payment occurred on{{else}}payments occurred on{{/if}} {{latePaymentDates}}. Since that time, I have taken the following steps:

{{correctiveActions}}

I have been a customer of {{creditorName}} for some time and have otherwise maintained a positive payment history. I am not asking for a refund or adjustment — only that you consider removing the late payment notation from my credit reports as a gesture of goodwill.

WHY THIS MATTERS:
These late payment notations are preventing me from [qualifying for a mortgage / refinancing my home / obtaining favorable interest rates — select appropriate]. A single late payment can remain on a credit report for up to 7 years, causing disproportionate harm relative to the infraction.

I take full responsibility for the late {{#if latePayments === 1}}payment{{else}}payments{{/if}} and am not making excuses. I am simply asking for an act of goodwill that will help me move forward.

Thank you for your time and consideration.

Sincerely,

{{customerName}}
Phone: [PHONE NUMBER]
Email: [EMAIL ADDRESS]

Enclosures: Payment history showing restored on-time payments, Personal statement`,
};
