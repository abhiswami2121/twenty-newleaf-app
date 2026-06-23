// Email Template: alumni_quarterly — Quarterly check-in for alumni customers
// Category: engagement | Powered by Resend + React Email
// Usage: ALUMNI stage quarterly trigger

export const alumniQuarterlyEmail = {
  name: 'Alumni Quarterly',
  key: 'alumni_quarterly',
  subject: 'Your quarterly credit check-in, {{customerName}}',
  category: 'engagement',
  version: 1,
  variables: ['customerName', 'monthsSinceGrad', 'lastKnownScore', 'bureau', 'agentName', 'agentEmail', 'dashboardUrl'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:40px 40px 28px;text-align:center">
      <p style="font-size:32px;margin:0 0 8px">👋</p>
      <h1 style="font-size:20px;font-weight:700;color:#0f172a;margin:0">Quarterly Check-in</h1>
      <p style="font-size:14px;color:#64748b;margin:8px 0 0">{{monthsSinceGrad}} months since graduation</p>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px 32px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px">Hi {{customerName}}! Just checking in to see how everything is going. Your last known <strong>{{bureau}}</strong> score was <strong>{{lastKnownScore}}</strong> — we hope it's stayed strong or even improved!</p>

      <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:0 0 24px">
        <p style="font-size:14px;color:#0f172a;margin:0 0 12px"><strong>Quick pulse check:</strong></p>
        <ul style="margin:0;padding:0 0 0 18px">
          <li style="font-size:14px;color:#475569;margin-bottom:6px">Any new negative items appear on your report?</li>
          <li style="font-size:14px;color:#475569;margin-bottom:6px">Planning a major purchase (house, car) soon?</li>
          <li style="font-size:14px;color:#475569">Do you have questions about maintaining your score?</li>
        </ul>
      </div>

      <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 20px"><strong>Your agent {{agentName}} is still here for you.</strong> Reply to this email or call anytime — no cost, no strings. Just ongoing support from the team that got you here.</p>

      <a href="{{dashboardUrl}}" style="display:block;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;text-align:center;margin:0 0 8px">View Your Alumni Dashboard →</a>
      <p style="font-size:13px;color:#94a3b8;text-align:center;margin:0">You can also reply directly to this email.</p>
    </td>
  </tr>
  <tr>
    <td style="padding:16px 40px 28px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">NewLeaf Financial · Once a client, always family 🍃</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
