// Email Template: milestone_celebration — General milestone achievement celebration
// Category: engagement | Powered by Resend + React Email
// Usage: customer.celebrated_milestone automation (general milestones)

export const milestoneCelebrationEmail = {
  name: 'Milestone Celebration',
  key: 'milestone_celebration',
  subject: '🎯 Milestone achieved: {{milestoneName}}!',
  category: 'engagement',
  version: 1,
  variables: ['customerName', 'milestoneName', 'milestoneDescription', 'agentName', 'dashboardUrl'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:44px 40px 32px;text-align:center;background:linear-gradient(135deg,#06b6a4,#0d9488);border-radius:12px 12px 0 0">
      <p style="font-size:44px;margin:0 0 12px">🎯</p>
      <h1 style="font-size:24px;font-weight:700;color:#ffffff;margin:0">{{milestoneName}}</h1>
    </td>
  </tr>
  <tr>
    <td style="padding:32px 40px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px">Amazing work, <strong>{{customerName}}</strong>! You just hit a major milestone in your credit repair journey.</p>

      <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:0 0 28px;text-align:center">
        <p style="font-size:15px;color:#475569;margin:0;line-height:1.5">{{milestoneDescription}}</p>
      </div>

      <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 24px">Every milestone means you're that much closer to your credit goals. Your consistency is paying off — and we're here to help you reach the next one.</p>

      <a href="{{dashboardUrl}}" style="display:block;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;text-align:center">See Your Progress →</a>

      <p style="font-size:14px;color:#64748b;margin:24px 0 0;text-align:center">— {{agentName}} 🍃</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
