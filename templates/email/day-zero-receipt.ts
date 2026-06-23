// Email Template: day_zero_receipt — Receipt for Day 0 / first successful charge
// Category: billing | Powered by Resend + React Email
// Usage: dayZeroChargedWorkflow

export const dayZeroReceiptEmail = {
  name: 'Day Zero Receipt',
  key: 'day_zero_receipt',
  subject: '🧾 Receipt: Your first payment to NewLeaf Financial',
  category: 'billing',
  version: 1,
  variables: ['customerName', 'amount', 'chargeDate', 'transactionId', 'planName', 'nextChargeDate', 'billingEmail', 'agentEmail'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:36px 40px 24px;border-bottom:1px solid #e2e8f0">
      <h1 style="font-size:18px;font-weight:700;color:#0f172a;margin:0">Payment Receipt</h1>
      <p style="font-size:13px;color:#64748b;margin:4px 0 0">{{chargeDate}} · #{{transactionId}}</p>
    </td>
  </tr>
  <tr>
    <td style="padding:28px 40px">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px">
        <tr>
          <td style="padding:0 0 8px;font-size:14px;color:#64748b">Customer</td>
          <td style="padding:0 0 8px;font-size:14px;color:#0f172a;text-align:right">{{customerName}}</td>
        </tr>
        <tr>
          <td style="padding:0 0 8px;font-size:14px;color:#64748b">Plan</td>
          <td style="padding:0 0 8px;font-size:14px;color:#0f172a;text-align:right">{{planName}}</td>
        </tr>
        <tr>
          <td style="padding:0 0 8px;font-size:14px;color:#64748b">Next charge</td>
          <td style="padding:0 0 8px;font-size:14px;color:#0f172a;text-align:right">{{nextChargeDate}}</td>
        </tr>
        <tr>
          <td colspan="2" style="padding:12px 0;border-top:1px solid #e2e8f0"></td>
        </tr>
        <tr>
          <td style="padding:0;font-size:18px;font-weight:700;color:#0f172a">Total Charged</td>
          <td style="padding:0;font-size:18px;font-weight:700;color:#06b6a4;text-align:right">${{amount}}</td>
        </tr>
      </table>

      <p style="font-size:13px;color:#94a3b8;line-height:1.5;margin:0 0 24px">
        This is your Day 0 charge — the first payment in your credit repair program. Receipts for future payments will appear on your monthly statement. Questions? Reply to this email or contact {{agentEmail}}.
      </p>

      <p style="font-size:12px;color:#94a3b8;text-align:center;margin:0">NewLeaf Financial · 15505 Long Vista Dr, Austin TX</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
