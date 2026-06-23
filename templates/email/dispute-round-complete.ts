// Email Template: dispute_round_complete — Round results email with detailed breakdown
// Category: disputes | Powered by Resend + React Email
// Usage: dispute_round.response_received

export const disputeRoundCompleteEmail = {
  name: 'Dispute Round Complete',
  key: 'dispute_round_complete',
  subject: 'Dispute Round {{roundNumber}} Results — {{bureau}}',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'roundNumber', 'bureau', 'totalItems', 'itemsDeleted', 'itemsVerified', 'itemsUpdated', 'itemsPending', 'nextRoundNumber', 'nextRoundDate', 'agentName', 'agentEmail'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:48px 48px 32px;border-bottom:1px solid #e2e8f0">
      <p style="font-size:13px;color:#64748b;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px">DISPUTE UPDATE</p>
      <h1 style="font-size:24px;font-weight:700;color:#0f172a;margin:0;letter-spacing:-0.3px">Round {{roundNumber}} Complete — {{bureau}}</h1>
    </td>
  </tr>
  <tr>
    <td style="padding:40px 48px">
      <p style="font-size:16px;color:#334155;margin:0 0 28px;line-height:1.6">
        Hi {{customerName}}, your Round {{roundNumber}} dispute results from <strong>{{bureau}}</strong> are in. Here's the breakdown:
      </p>

      <!-- Results Cards -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 32px">
        <tr>
          <td width="23%" style="background:#f0fdf4;border-radius:8px;padding:16px;text-align:center;vertical-align:top">
            <p style="font-size:28px;font-weight:700;color:#16a34a;margin:0">{{itemsDeleted}}</p>
            <p style="font-size:12px;color:#64748b;margin:4px 0 0">Deleted ✅</p>
          </td>
          <td width="3%">&nbsp;</td>
          <td width="23%" style="background:#fef2f2;border-radius:8px;padding:16px;text-align:center;vertical-align:top">
            <p style="font-size:28px;font-weight:700;color:#dc2626;margin:0">{{itemsVerified}}</p>
            <p style="font-size:12px;color:#64748b;margin:4px 0 0">Verified ⚠️</p>
          </td>
          <td width="3%">&nbsp;</td>
          <td width="23%" style="background:#eff6ff;border-radius:8px;padding:16px;text-align:center;vertical-align:top">
            <p style="font-size:28px;font-weight:700;color:#2563eb;margin:0">{{itemsUpdated}}</p>
            <p style="font-size:12px;color:#64748b;margin:4px 0 0">Updated 🔄</p>
          </td>
          <td width="3%">&nbsp;</td>
          <td width="23%" style="background:#f5f3ff;border-radius:8px;padding:16px;text-align:center;vertical-align:top">
            <p style="font-size:28px;font-weight:700;color:#7c3aed;margin:0">{{itemsPending}}</p>
            <p style="font-size:12px;color:#64748b;margin:4px 0 0">Pending ⏳</p>
          </td>
        </tr>
      </table>

      {{#if itemsDeleted > 0}}
      <div style="background:#f0fdf4;border-left:4px solid #16a34a;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 20px">
        <p style="font-size:15px;color:#0f172a;margin:0">{{itemsDeleted}} negative {{#if itemsDeleted === 1}}item has{{else}}items have{{/if}} been <strong>permanently deleted</strong> from your {{bureau}} report. This is real progress!</p>
      </div>
      {{/if}}

      {{#if itemsVerified > 0 || itemsUpdated > 0}}
      <div style="background:#eff6ff;border-left:4px solid #2563eb;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 28px">
        <p style="font-size:15px;color:#0f172a;margin:0">We're escalating {{itemsVerified}} verified and {{itemsUpdated}} updated {{#if itemsVerified + itemsUpdated === 1}}item{{else}}items{{/if}} to <strong>Round {{nextRoundNumber}}</strong>. Estimated mail date: {{nextRoundDate}}.</p>
      </div>
      {{/if}}

      <a href="https://crm.newleaf.financial/customers/{{customerId}}/disputes" style="display:block;width:fit-content;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600">View Detailed Results →</a>
    </td>
  </tr>
  <tr>
    <td style="padding:24px 48px 40px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:13px;color:#94a3b8;margin:0 0 4px">Your agent: {{agentName}} · {{agentEmail}}</p>
      <p style="font-size:13px;color:#94a3b8;margin:0">NewLeaf Financial · Progress you can see.</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
