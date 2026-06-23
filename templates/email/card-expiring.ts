// Email Template: card_expiring — 30-day card expiration warning email
// Category: billing | Powered by Resend + React Email
// Usage: card.expiring_in_30_days automation

export const cardExpiringEmail = {
  name: 'Card Expiring',
  key: 'card_expiring',
  subject: 'Your card ending in {{lastFour}} expires soon — Update to avoid interruption',
  category: 'billing',
  version: 1,
  variables: ['customerName', 'lastFour', 'expiryMonth', 'expiryYear', 'updateLink', 'planAmount', 'nextChargeDate', 'agentEmail'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:40px 40px 28px;text-align:center">
      <span style="font-size:22px;color:#06b6a4;font-weight:700">NewLeaf</span><span style="font-size:22px;color:#0f172a;font-weight:700">Financial</span>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px 32px">
      <h1 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 12px">Card Expiring Soon</h1>
      <p style="font-size:15px;color:#475569;line-height:1.6;margin:0 0 24px">
        Hi {{customerName}}, your card ending in <strong>{{lastFour}}</strong> expires in {{expiryMonth}} {{expiryYear}}. To keep your credit repair program active without interruption:
      </p>

      <div style="background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:20px;margin:0 0 24px;text-align:center">
        <p style="font-size:14px;color:#92400e;margin:0 0 4px"><strong>Your next charge:</strong> ${{planAmount}} on {{nextChargeDate}}</p>
        <p style="font-size:13px;color:#a16207;margin:0">Update your card before this date to avoid a missed payment.</p>
      </div>

      <a href="{{updateLink}}" style="display:block;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;text-align:center">Update Payment Method →</a>

      <p style="font-size:13px;color:#94a3b8;margin:20px 0 0;text-align:center">It takes less than a minute and your data is encrypted.</p>
    </td>
  </tr>
  <tr>
    <td style="padding:20px 40px 32px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">Questions? {{agentEmail}} · NewLeaf Financial</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
