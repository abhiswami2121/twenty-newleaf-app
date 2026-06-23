// Email Template: win_back — Win-back offer for churned customers
// Category: engagement | Powered by Resend + React Email
// Usage: subscription.cancelled / recovery.lost workflow

export const winBackEmail = {
  name: 'Win Back',
  key: 'win_back',
  subject: 'Your credit journey isn't over, {{customerName}}',
  category: 'engagement',
  version: 1,
  variables: ['customerName', 'daysSinceLastActive', 'winBackOffer', 'agentName', 'agentEmail', 'agentPhone', 'reactivationLink'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:44px 40px 28px;text-align:center">
      <p style="font-size:36px;margin:0 0 12px">🍃</p>
      <h1 style="font-size:22px;font-weight:700;color:#0f172a;margin:0">The Door Is Always Open</h1>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px 32px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px">
        Hi {{customerName}}, it's been {{daysSinceLastActive}} days since you were last active with NewLeaf. We've been thinking about you and wanted to share something:
      </p>

      <div style="background:#f0fdfa;border:2px solid #06b6a4;border-radius:10px;padding:24px;text-align:center;margin:0 0 24px">
        <p style="font-size:14px;color:#0f766e;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px">Special Reactivation Offer</p>
        <p style="font-size:20px;font-weight:700;color:#0f172a;margin:0">{{winBackOffer}}</p>
      </div>

      <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 12px"><strong>Your previous credit repair progress is fully preserved:</strong></p>
      <ul style="margin:0 0 24px;padding:0 0 0 18px">
        <li style="font-size:14px;color:#475569;margin-bottom:6px">All dispute history intact</li>
        <li style="font-size:14px;color:#475569;margin-bottom:6px">Your dedicated agent {{agentName}} is still here</li>
        <li style="font-size:14px;color:#475569">Pick up right where you left off</li>
      </ul>

      <a href="{{reactivationLink}}" style="display:block;background:#06b6a4;color:#ffffff;padding:16px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;text-align:center;margin:0 0 20px">Reactivate My Account →</a>

      <p style="font-size:14px;color:#64748b;text-align:center;margin:0">No pressure — just wanted you to know the door is always open. Call {{agentPhone}} anytime.</p>
    </td>
  </tr>
  <tr>
    <td style="padding:20px 40px 32px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">— {{agentName}} & the NewLeaf team 🍃</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
