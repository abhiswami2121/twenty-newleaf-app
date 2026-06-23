// Email Template: monthly_statement — Automated monthly statement (sent 1st of each month)
// Category: billing | Powered by Resend + React Email
// Usage: automation.monthly_1st

export const monthlyStatementEmail = {
  name: 'Monthly Statement',
  key: 'monthly_statement',
  subject: 'Your {{month}} Statement — NewLeaf Financial',
  category: 'billing',
  version: 1,
  variables: ['customerName', 'month', 'year', 'paymentsProcessed', 'totalCharged', 'scoreStart', 'scoreCurrent', 'scoreChange', 'disputesActive', 'itemsRemoved', 'planAmount', 'statementUrl', 'agentEmail'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:48px 48px 32px;text-align:center;border-bottom:1px solid #e2e8f0">
      <span style="font-size:24px;letter-spacing:-0.5px;color:#06b6a4;font-weight:700">NewLeaf</span><span style="font-size:24px;letter-spacing:-0.5px;color:#0f172a;font-weight:700">Financial</span>
      <p style="font-size:14px;color:#64748b;margin:8px 0 0">{{month}} {{year}} Statement</p>
    </td>
  </tr>
  <tr>
    <td style="padding:40px 48px">
      <h1 style="font-size:22px;font-weight:700;color:#0f172a;margin:0 0 24px;letter-spacing:-0.3px">Hi {{customerName}}, here's your monthly summary.</h1>

      <!-- Score Card -->
      <div style="background:#f1f5f9;border-radius:10px;padding:24px;margin:0 0 24px;text-align:center">
        <p style="font-size:13px;color:#64748b;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px">Credit Score</p>
        <p style="font-size:36px;font-weight:700;color:#0f172a;margin:0;font-variant-numeric:tabular-nums">{{scoreCurrent}}</p>
        <p style="font-size:14px;color:{{#if scoreChange >= 0}}#16a34a{{else}}#dc2626{{/if}};margin:4px 0 0">
          {{#if scoreChange >= 0}}↑{{else}}↓{{/if}} {{scoreChange}} points this month
        </p>
      </div>

      <!-- Stats Grid -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 32px">
        <tr>
          <td width="48%" style="background:#f8fafc;border-radius:8px;padding:16px;vertical-align:top">
            <p style="font-size:12px;color:#64748b;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px">Payments Processed</p>
            <p style="font-size:20px;font-weight:600;color:#0f172a;margin:0">{{paymentsProcessed}} ({{totalCharged}})</p>
          </td>
          <td width="4%">&nbsp;</td>
          <td width="48%" style="background:#f8fafc;border-radius:8px;padding:16px;vertical-align:top">
            <p style="font-size:12px;color:#64748b;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px">Active Disputes</p>
            <p style="font-size:20px;font-weight:600;color:#0f172a;margin:0">{{disputesActive}}</p>
          </td>
        </tr>
        <tr><td colspan="3" style="height:12px"></td></tr>
        <tr>
          <td width="48%" style="background:#f8fafc;border-radius:8px;padding:16px;vertical-align:top">
            <p style="font-size:12px;color:#64748b;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px">Items Removed</p>
            <p style="font-size:20px;font-weight:600;color:#0f172a;margin:0">{{itemsRemoved}}</p>
          </td>
          <td width="4%">&nbsp;</td>
          <td width="48%" style="background:#f8fafc;border-radius:8px;padding:16px;vertical-align:top">
            <p style="font-size:12px;color:#64748b;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.5px">Plan</p>
            <p style="font-size:20px;font-weight:600;color:#0f172a;margin:0">{{planAmount}}/mo</p>
          </td>
        </tr>
      </table>

      <a href="{{statementUrl}}" style="display:block;width:fit-content;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;margin:0 auto">View Full Statement →</a>
    </td>
  </tr>
  <tr>
    <td style="padding:24px 48px 40px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:13px;color:#94a3b8;margin:0 0 8px">Questions about your statement? Reply or contact {{agentEmail}}</p>
      <p style="font-size:13px;color:#94a3b8;margin:0">NewLeaf Financial · 15505 Long Vista Dr, Austin TX · Unsubscribe</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
