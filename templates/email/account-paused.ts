// Email Template: account_paused — Account paused due to payment delinquency
// Category: billing | Powered by Resend + React Email
// Usage: subscription.cancelled workflow

export const accountPausedEmail = {
  name: 'Account Paused',
  key: 'account_paused',
  subject: 'Your NewLeaf account has been paused — Reactivate today',
  category: 'billing',
  version: 1,
  variables: ['customerName', 'missedPayments', 'totalDue', 'daysSincePaused', 'reactivationLink', 'agentName', 'agentPhone', 'agentEmail'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:40px 40px 28px">
      <h1 style="font-size:22px;font-weight:700;color:#0f172a;margin:0 0 8px">Account Paused</h1>
      <p style="font-size:14px;color:#64748b;margin:0">{{daysSincePaused}} days since pause · {{missedPayments}} missed {{#if missedPayments === 1}}payment{{else}}payments{{/if}}</p>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px 32px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px">Hi {{customerName}}, your NewLeaf credit repair account has been paused due to <strong>{{missedPayments}} missed {{#if missedPayments === 1}}payment{{else}}payments{{/if}}</strong> totaling <strong>${{totalDue}}</strong>.</p>

      <div style="background:#f0fdfa;border-left:4px solid #06b6a4;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 24px">
        <p style="font-size:14px;color:#0f172a;margin:0"><strong>Good news:</strong> All your credit repair progress — dispute history, deletions, score improvements — is fully preserved. Nothing is lost.</p>
      </div>

      <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 24px">To resume your program and continue where you left off, update your payment method and your next dispute round will be queued immediately.</p>

      <a href="{{reactivationLink}}" style="display:block;background:#06b6a4;color:#ffffff;padding:16px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;text-align:center;margin:0 0 20px">Reactivate My Account →</a>

      <p style="font-size:14px;color:#64748b;text-align:center;margin:0">Questions? {{agentName}} is still your agent — call {{agentPhone}}.</p>
    </td>
  </tr>
  <tr>
    <td style="padding:16px 40px 32px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">NewLeaf Financial · {{agentEmail}}</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
