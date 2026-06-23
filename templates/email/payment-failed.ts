// Email Template: payment_failed — Payment failure notification (soft decline)
// Category: billing | Powered by Resend + React Email
// Usage: payment.declined_soft automation

export const paymentFailedEmail = {
  name: 'Payment Failed',
  key: 'payment_failed',
  subject: 'Your payment of ${{amount}} could not be processed',
  category: 'billing',
  version: 1,
  variables: ['customerName', 'amount', 'declineDate', 'retryDate', 'recoveryLink', 'agentName', 'agentEmail'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:500px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:36px 36px 24px">
      <h1 style="font-size:20px;font-weight:700;color:#0f172a;margin:0">Payment Unsuccessful</h1>
    </td>
  </tr>
  <tr>
    <td style="padding:0 36px 32px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 16px">Hi {{customerName}}, your scheduled payment of <strong>${{amount}}</strong> on <strong>{{declineDate}}</strong> could not be completed.</p>

      <p style="font-size:14px;color:#475569;margin:0 0 20px">This happens sometimes — an expired card, a temporary hold, or insufficient funds. <strong>We'll automatically retry on {{retryDate}}.</strong></p>

      <a href="{{recoveryLink}}" style="display:block;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;text-align:center;margin:0 0 20px">Update Payment Method →</a>

      <p style="font-size:13px;color:#94a3b8;text-align:center;margin:0">No rush — you have until {{retryDate}} before any action is needed.</p>
    </td>
  </tr>
  <tr>
    <td style="padding:16px 36px 28px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">{{agentName}} · {{agentEmail}}</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
