// Email Template: billing_recovery — Payment recovery email with billing link
// Category: billing | Powered by Resend + React Email
// Usage: payment.declined_hard automation, recovery workflow

export const billingRecoveryEmail = {
  name: 'Billing Recovery',
  key: 'billing_recovery',
  subject: 'Action needed: Update your payment method for NewLeaf',
  category: 'billing',
  version: 1,
  variables: ['customerName', 'amount', 'declineDate', 'recoveryLink', 'retryDate', 'agentName', 'agentEmail', 'agentPhone'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:40px 40px 28px">
      <h1 style="font-size:22px;font-weight:700;color:#0f172a;margin:0 0 8px">Payment Update Needed</h1>
      <p style="font-size:13px;color:#94a3b8;margin:0">Reference: {{declineDate}}</p>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px 32px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px">
        Hi {{customerName}}, your payment of <strong>${{amount}}</strong> scheduled for <strong>{{declineDate}}</strong> could not be processed.
      </p>

      <div style="background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:20px;margin:0 0 24px;text-align:center">
        <p style="font-size:14px;color:#92400e;margin:0">We'll automatically retry on <strong>{{retryDate}}</strong>. To avoid any interruption, update your payment method now.</p>
      </div>

      <a href="{{recoveryLink}}" style="display:block;background:#06b6a4;color:#ffffff;padding:16px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;text-align:center;margin:0 0 24px">Update Payment Method →</a>

      <p style="font-size:13px;color:#94a3b8;text-align:center;margin:0 0 24px">Link secure · Card details encrypted · Takes about 1 minute</p>

      <div style="background:#f8fafc;border-radius:8px;padding:16px;text-align:center">
        <p style="font-size:14px;color:#475569;margin:0 0 4px">Need help or prefer to update over the phone?</p>
        <p style="font-size:14px;color:#0f172a;margin:0"><strong>{{agentName}}</strong> — {{agentPhone}} or {{agentEmail}}</p>
      </div>
    </td>
  </tr>
  <tr>
    <td style="padding:20px 40px 32px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">Your credit repair program progress is fully preserved.</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
