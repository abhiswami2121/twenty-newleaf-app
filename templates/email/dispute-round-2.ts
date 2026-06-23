// Email Template: dispute_round_2 — Round 2 Method of Verification escalation
// Category: disputes | Powered by Resend + React Email
// Usage: dispute_round.mailed (Round 2) / dispute_round.no_response escalation

export const disputeRound2Email = {
  name: 'Dispute Round 2',
  key: 'dispute_round_2',
  subject: 'Round 2 Escalation — Method of Verification sent to {{bureau}}',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'bureau', 'round1Results', 'itemsEscalated', 'mailDate', 'estimatedResponseDate', 'agentName', 'dashboardUrl'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:40px 40px 28px">
      <p style="font-size:12px;color:#7c3aed;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;font-weight:600">Round 2 · Escalated</p>
      <h1 style="font-size:22px;font-weight:700;color:#0f172a;margin:0;letter-spacing:-0.3px">Method of Verification Sent</h1>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px 32px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px">Hi {{customerName}}, we're escalating <strong>{{itemsEscalated}} {{#if itemsEscalated === 1}}item{{else}}items{{/if}}</strong> to <strong>Round 2</strong> with {{bureau}}.</p>

      <div style="background:#f5f3ff;border-left:4px solid #7c3aed;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 24px">
        <p style="font-size:14px;color:#5b21b6;margin:0 0 8px"><strong>Round 1 results:</strong> {{round1Results}}</p>
        <p style="font-size:14px;color:#5b21b6;margin:0">We're now demanding the <strong>Method of Verification</strong> — the exact procedures {{bureau}} used to "verify" these items. Under FCRA § 611(a)(7), they must provide this.</p>
      </div>

      <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:0 0 24px">
        <p style="font-size:13px;color:#64748b;margin:0 0 4px">📫 Mailed: {{mailDate}}</p>
        <p style="font-size:13px;color:#64748b;margin:0">⏱ Estimated response: {{estimatedResponseDate}}</p>
      </div>

      <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 24px">This is a stronger challenge. If {{bureau}} can't produce a satisfactory method of verification, the items must be deleted. {{agentName}} is monitoring closely.</p>

      <a href="{{dashboardUrl}}" style="display:block;background:#7c3aed;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;text-align:center">Track Round 2 →</a>
    </td>
  </tr>
  <tr>
    <td style="padding:16px 40px 32px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">NewLeaf Financial · Persistence wins disputes</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
