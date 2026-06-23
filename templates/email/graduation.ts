// Email Template: graduation — Program completion celebration email
// Category: engagement | Powered by Resend + React Email
// Usage: GRADUATED stage trigger

export const graduationEmail = {
  name: 'Graduation',
  key: 'graduation',
  subject: '🎓 You did it, {{customerName}}! — Program Complete',
  category: 'engagement',
  version: 1,
  variables: ['customerName', 'bureau', 'totalPointsGained', 'negativeItemsRemoved', 'programDuration', 'finalScore', 'agentName', 'agentEmail', 'referralLink', 'alumniDashboardUrl'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:56px 48px 36px;background:linear-gradient(135deg,#06b6a4,#0d9488,#0f766e);border-radius:12px 12px 0 0;text-align:center">
      <p style="font-size:56px;margin:0 0 12px">🎓</p>
      <h1 style="font-size:30px;font-weight:700;color:#ffffff;margin:0;letter-spacing:-0.5px">Program Complete!</h1>
      <p style="font-size:16px;color:rgba(255,255,255,0.9);margin:12px 0 0">{{customerName}}, you graduated NewLeaf Credit Repair.</p>
    </td>
  </tr>
  <tr>
    <td style="padding:40px 48px">
      <div style="background:#f0fdfa;border-radius:12px;padding:28px;text-align:center;margin:0 0 28px">
        <p style="font-size:13px;color:#0f766e;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px">Your Results</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="33%" style="text-align:center">
              <p style="font-size:32px;font-weight:700;color:#0f172a;margin:0">+{{totalPointsGained}}</p>
              <p style="font-size:13px;color:#64748b;margin:4px 0 0">Points Gained</p>
            </td>
            <td width="34%" style="text-align:center">
              <p style="font-size:32px;font-weight:700;color:#0f172a;margin:0">{{negativeItemsRemoved}}</p>
              <p style="font-size:13px;color:#64748b;margin:4px 0 0">Items Removed</p>
            </td>
            <td width="33%" style="text-align:center">
              <p style="font-size:32px;font-weight:700;color:#0f172a;margin:0">{{finalScore}}</p>
              <p style="font-size:13px;color:#64748b;margin:4px 0 0">{{bureau}} Score</p>
            </td>
          </tr>
        </table>
        <p style="font-size:13px;color:#64748b;margin:16px 0 0">Completed in {{programDuration}}</p>
      </div>

      <p style="font-size:16px;color:#334155;line-height:1.6;margin:0 0 20px">This is YOUR win, {{customerName}}. You showed up, stayed committed, and took control of your credit. A better credit score opens doors — better interest rates, loan approvals, and financial freedom. <strong>You earned every point.</strong></p>

      <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:0 0 28px">
        <p style="font-size:15px;font-weight:600;color:#0f172a;margin:0 0 8px">What's next — You're now an Alumni member:</p>
        <ul style="margin:0;padding:0 0 0 18px">
          <li style="font-size:14px;color:#475569;margin-bottom:6px">Quarterly credit score check-ins from {{agentName}}</li>
          <li style="font-size:14px;color:#475569;margin-bottom:6px">Ongoing monitoring — we'll alert you to any changes</li>
          <li style="font-size:14px;color:#475569;margin-bottom:6px">Priority support whenever you need us</li>
        </ul>
      </div>

      <p style="font-size:15px;color:#475569;margin:0 0 12px">Know someone who could use credit help? We'd love to take care of them — and we'll thank you for the introduction:</p>
      <a href="{{referralLink}}" style="display:block;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;text-align:center;margin:0 0 8px">Refer a Friend →</a>
      <p style="font-size:13px;color:#94a3b8;text-align:center;margin:0 0 28px">You'll get a thank-you bonus when they enroll.</p>

      <a href="{{alumniDashboardUrl}}" style="display:block;width:fit-content;color:#06b6a4;text-decoration:none;font-size:15px;font-weight:500;margin:0 auto">View Your Alumni Dashboard →</a>

      <p style="font-size:14px;color:#64748b;margin:28px 0 0;text-align:center">With gratitude — {{agentName}} & the NewLeaf team 🍃</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
