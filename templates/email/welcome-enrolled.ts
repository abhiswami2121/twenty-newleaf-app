// Email Template: welcome_enrolled — Onboarding email after Day 0 charge success
// Category: onboarding | Powered by Resend + React Email
// Usage: dayZeroChargedWorkflow

export const welcomeEnrolledEmail = {
  name: 'Welcome Enrolled',
  key: 'welcome_enrolled',
  subject: 'Welcome to NewLeaf Financial, {{customerName}}! 🍃',
  category: 'onboarding',
  version: 1,
  variables: ['customerName', 'agentName', 'planAmount', 'nextChargeDate', 'agentEmail', 'dashboardUrl'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:48px 48px 32px;text-align:center;border-bottom:1px solid #e2e8f0">
      <span style="font-size:28px;letter-spacing:-0.5px;color:#06b6a4;font-weight:700">NewLeaf</span>
      <span style="font-size:28px;letter-spacing:-0.5px;color:#0f172a;font-weight:700">Financial</span>
    </td>
  </tr>
  <tr>
    <td style="padding:40px 48px">
      <h1 style="font-size:24px;font-weight:700;color:#0f172a;margin:0 0 12px;letter-spacing:-0.3px">Welcome aboard, {{customerName}}!</h1>
      <p style="font-size:16px;line-height:1.6;color:#475569;margin:0 0 24px">
        Your first payment of <strong>${{planAmount}}</strong> has been processed and your credit repair program is now active. We're thrilled to have you on this journey.
      </p>

      <div style="background:#f0fdfa;border-left:4px solid #06b6a4;padding:20px 24px;border-radius:0 8px 8px 0;margin:0 0 32px">
        <p style="font-size:15px;color:#0f172a;margin:0;line-height:1.5"><strong>Your dedicated agent:</strong> {{agentName}}<br>
        <strong>Plan:</strong> ${{planAmount}}/month<br>
        <strong>Next charge:</strong> {{nextChargeDate}}</p>
      </div>

      <h2 style="font-size:18px;font-weight:600;color:#0f172a;margin:0 0 16px">What happens next:</h2>
      <ol style="padding:0 0 0 20px;margin:0 0 32px">
        <li style="font-size:15px;color:#475569;margin-bottom:10px;line-height:1.5"><strong>Credit Analysis</strong> — Your credit reports will be pulled within 24 hours and analyzed for negative items.</li>
        <li style="font-size:15px;color:#475569;margin-bottom:10px;line-height:1.5"><strong>Round 1 Disputes</strong> — Your first round of dispute letters will be mailed within 3-5 business days.</li>
        <li style="font-size:15px;color:#475569;margin-bottom:10px;line-height:1.5"><strong>Regular Updates</strong> — You'll get SMS and email updates at every milestone — deletions, score changes, and round progress.</li>
      </ol>

      <a href="{{dashboardUrl}}" style="display:block;width:fit-content;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;text-align:center;margin:0 auto">View Your Dashboard →</a>
    </td>
  </tr>
  <tr>
    <td style="padding:24px 48px 40px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:13px;color:#94a3b8;margin:0 0 8px">Questions? Reply to this email or contact your agent at {{agentEmail}}</p>
      <p style="font-size:13px;color:#94a3b8;margin:0">NewLeaf Financial · Credit Repair Made Human</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
