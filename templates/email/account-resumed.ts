// Email Template: account_resumed — Account reactivation confirmation
// Category: billing | Powered by Resend + React Email
// Usage: subscription.resumed workflow

export const accountResumedEmail = {
  name: 'Account Resumed',
  key: 'account_resumed',
  subject: '✅ Your NewLeaf account is active again!',
  category: 'billing',
  version: 1,
  variables: ['customerName', 'planAmount', 'nextChargeDate', 'agentName', 'agentEmail', 'dashboardUrl'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:500px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:40px 40px 28px;text-align:center">
      <p style="font-size:36px;margin:0 0 12px">✅</p>
      <h1 style="font-size:22px;font-weight:700;color:#0f172a;margin:0">Account Reactivated!</h1>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px 32px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px">Welcome back, <strong>{{customerName}}</strong>! Your NewLeaf credit repair account is now active.</p>

      <div style="background:#f0fdfa;border-radius:8px;padding:20px;margin:0 0 24px">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="font-size:13px;color:#0f766e;padding:2px 0">Plan</td><td style="font-size:14px;color:#0f172a;font-weight:500;text-align:right;padding:2px 0">${{planAmount}}/month</td></tr>
          <tr><td style="font-size:13px;color:#0f766e;padding:2px 0">Next charge</td><td style="font-size:14px;color:#0f172a;font-weight:500;text-align:right;padding:2px 0">{{nextChargeDate}}</td></tr>
          <tr><td style="font-size:13px;color:#0f766e;padding:2px 0">Agent</td><td style="font-size:14px;color:#0f172a;font-weight:500;text-align:right;padding:2px 0">{{agentName}}</td></tr>
        </table>
      </div>

      <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 20px">Your dispute progress has been fully restored and we're picking up right where you left off. Your next round of dispute letters will be queued automatically.</p>

      <a href="{{dashboardUrl}}" style="display:block;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;text-align:center">Go to Your Dashboard →</a>

      <p style="font-size:14px;color:#64748b;margin:24px 0 0;text-align:center">Glad to have you back. Let's finish strong! 💪</p>
    </td>
  </tr>
  <tr>
    <td style="padding:16px 40px 32px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">{{agentName}} · {{agentEmail}} · NewLeaf Financial</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
