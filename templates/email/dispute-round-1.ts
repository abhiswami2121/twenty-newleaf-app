// Email Template: dispute_round_1 — Round 1 dispute initiation notification
// Category: disputes | Powered by Resend + React Email
// Usage: dispute_round.mailed (Round 1)

export const disputeRound1Email = {
  name: 'Dispute Round 1',
  key: 'dispute_round_1',
  subject: 'Round 1 Disputes Initiated — {{bureau}}',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'bureau', 'itemsDisputed', 'mailDate', 'estimatedResponseDate', 'roundNumber', 'agentName', 'dashboardUrl'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:40px 40px 28px">
      <p style="font-size:12px;color:#06b6a4;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;font-weight:600">Round 1 · In Progress</p>
      <h1 style="font-size:22px;font-weight:700;color:#0f172a;margin:0;letter-spacing:-0.3px">Disputes Initiated with {{bureau}}</h1>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px 32px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px">Hi {{customerName}}, your <strong>Round 1 factual dispute letters</strong> have been mailed to <strong>{{bureau}}</strong>. Here's what was sent:</p>

      <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:0 0 24px">
        <p style="font-size:14px;color:#475569;margin:0 0 8px"><strong>📫 {{itemsDisputed}} negative {{#if itemsDisputed === 1}}item{{else}}items{{/if}} disputed</strong></p>
        <p style="font-size:13px;color:#64748b;margin:0 0 4px">Mailed: {{mailDate}}</p>
        <p style="font-size:13px;color:#64748b;margin:0">Estimated response: {{estimatedResponseDate}} (up to 30 days)</p>
      </div>

      <div style="background:#eff6ff;border-left:4px solid #3b82f6;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 24px">
        <p style="font-size:14px;color:#1e40af;margin:0"><strong>What happens now:</strong> Under the Fair Credit Reporting Act (FCRA), {{bureau}} has 30 days to investigate and respond. If they can't verify an item, it must be removed.</p>
      </div>

      <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 24px">We'll notify you the moment results come back. In the meantime, your agent {{agentName}} is monitoring your file and will escalate anything that comes back verified.</p>

      <a href="{{dashboardUrl}}" style="display:block;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;text-align:center">Track Your Disputes →</a>
    </td>
  </tr>
  <tr>
    <td style="padding:16px 40px 32px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">NewLeaf Financial · {{agentName}}, your dispute specialist</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
