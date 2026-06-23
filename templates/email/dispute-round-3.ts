// Email Template: dispute_round_3 — Round 3 Intent to Sue escalation
// Category: disputes | Powered by Resend + React Email
// Usage: dispute_round.mailed (Round 3) / dispute_round.no_response

export const disputeRound3Email = {
  name: 'Dispute Round 3',
  key: 'dispute_round_3',
  subject: 'Round 3 — Intent to Sue filed against {{bureau}}',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'bureau', 'itemsEscalated', 'mailDate', 'responseDeadline', 'agentName', 'dashboardUrl', 'nextSteps'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:40px 40px 28px">
      <p style="font-size:12px;color:#dc2626;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;font-weight:600">Round 3 · Final Escalation</p>
      <h1 style="font-size:22px;font-weight:700;color:#0f172a;margin:0;letter-spacing:-0.3px">Intent to Sue Filed</h1>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px 32px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px">Hi {{customerName}}, we've escalated <strong>{{itemsEscalated}} {{#if itemsEscalated === 1}}item{{else}}items{{/if}}</strong> to <strong>Round 3 — Intent to Sue</strong> against {{bureau}}.</p>

      <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:20px;margin:0 0 24px">
        <p style="font-size:14px;color:#991b1b;margin:0 0 8px"><strong>⚠️ This is the final pre-litigation step.</strong></p>
        <p style="font-size:14px;color:#991b1b;margin:0">We are notifying {{bureau}} of our intent to pursue legal action under the FCRA for failure to conduct a reasonable investigation (§ 611, § 623). This often triggers a final review and deletion.</p>
      </div>

      <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:0 0 24px">
        <p style="font-size:13px;color:#64748b;margin:0 0 4px">📫 Mailed: {{mailDate}}</p>
        <p style="font-size:13px;color:#64748b;margin:0 0 4px">⏱ Response deadline: {{responseDeadline}}</p>
        <p style="font-size:13px;color:#64748b;margin:0">📋 Next: {{nextSteps}}</p>
      </div>

      <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 24px">{{agentName}} is personally managing this escalation and will update you the moment there's a response. If deletion doesn't happen, we proceed with formal legal action.</p>

      <a href="{{dashboardUrl}}" style="display:block;background:#dc2626;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;text-align:center">Track Round 3 →</a>
    </td>
  </tr>
  <tr>
    <td style="padding:16px 40px 32px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">NewLeaf Financial · We fight until it's deleted</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
