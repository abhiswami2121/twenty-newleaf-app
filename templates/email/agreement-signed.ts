// Email Template: agreement_signed — Confirmation after agreement is signed
// Category: onboarding | Powered by Resend + React Email
// Usage: agreementSignedWorkflow

export const agreementSignedEmail = {
  name: 'Agreement Signed',
  key: 'agreement_signed',
  subject: '✅ Agreement signed — Welcome to the program, {{customerName}}',
  category: 'onboarding',
  version: 1,
  variables: ['customerName', 'planAmount', 'firstChargeDate', 'agentName', 'agentEmail', 'dashboardUrl'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:40px 40px 28px;text-align:center">
      <p style="font-size:36px;margin:0 0 12px">✅</p>
      <h1 style="font-size:22px;font-weight:700;color:#0f172a;margin:0">Agreement Signed!</h1>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px 32px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px">Hi {{customerName}}, your enrollment agreement has been signed and your account is being set up. Here's what to expect:</p>

      <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:0 0 24px">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="padding:4px 0;font-size:14px;color:#64748b">Plan</td><td style="padding:4px 0;font-size:14px;color:#0f172a;text-align:right;font-weight:500">${{planAmount}}/month</td></tr>
          <tr><td style="padding:4px 0;font-size:14px;color:#64748b">First charge</td><td style="padding:4px 0;font-size:14px;color:#0f172a;text-align:right;font-weight:500">{{firstChargeDate}}</td></tr>
          <tr><td style="padding:4px 0;font-size:14px;color:#64748b">Agent</td><td style="padding:4px 0;font-size:14px;color:#0f172a;text-align:right;font-weight:500">{{agentName}}</td></tr>
        </table>
      </div>

      <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 24px">Your first payment will process today. Once complete, you'll receive a confirmation and your credit repair program officially begins. Looking forward to working with you!</p>

      <a href="{{dashboardUrl}}" style="display:block;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;text-align:center">View Your Dashboard →</a>
    </td>
  </tr>
  <tr>
    <td style="padding:20px 40px 32px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">{{agentName}} · {{agentEmail}} · NewLeaf Financial</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
