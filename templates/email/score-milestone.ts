// Email Template: score_milestone — Score milestone celebration email
// Category: engagement | Powered by Resend + React Email
// Usage: customer.celebrated_milestone automation

export const scoreMilestoneEmail = {
  name: 'Score Milestone',
  key: 'score_milestone',
  subject: '🎉 {{pointsGained}} point increase — Your {{bureau}} score is climbing!',
  category: 'engagement',
  version: 1,
  variables: ['customerName', 'bureau', 'pointsGained', 'startingScore', 'currentScore', 'itemsRemoved', 'programDuration', 'agentName', 'dashboardUrl'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:48px 48px 32px;background:linear-gradient(135deg,#06b6a4,#0d9488);border-radius:12px 12px 0 0;text-align:center">
      <p style="font-size:48px;margin:0 0 12px">🎉</p>
      <h1 style="font-size:28px;font-weight:700;color:#ffffff;margin:0;letter-spacing:-0.5px">Credit Score Milestone!</h1>
    </td>
  </tr>
  <tr>
    <td style="padding:40px 48px">
      <p style="font-size:16px;color:#334155;line-height:1.6;margin:0 0 24px">
        <strong>{{customerName}}</strong>, your <strong>{{bureau}}</strong> credit score has increased by <strong style="color:#16a34a">{{pointsGained}} points</strong> since you started with NewLeaf!
      </p>

      <div style="background:#f0fdfa;border-radius:12px;padding:28px;text-align:center;margin:0 0 28px">
        <p style="font-size:13px;color:#0f766e;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px">Your Progress</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="45%" style="text-align:center">
              <p style="font-size:14px;color:#64748b;margin:0 0 4px">Starting Score</p>
              <p style="font-size:32px;font-weight:700;color:#0f172a;margin:0">{{startingScore}}</p>
            </td>
            <td width="10%" style="text-align:center">
              <p style="font-size:24px;color:#06b6a4;margin:0">→</p>
            </td>
            <td width="45%" style="text-align:center">
              <p style="font-size:14px;color:#64748b;margin:0 0 4px">Current Score</p>
              <p style="font-size:32px;font-weight:700;color:#06b6a4;margin:0">{{currentScore}}</p>
            </td>
          </tr>
        </table>
      </div>

      <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:0 0 28px">
        <p style="font-size:15px;color:#0f172a;margin:0 0 8px"><strong>Your Stats:</strong></p>
        <p style="font-size:14px;color:#475569;margin:0 0 4px">📝 Negative items removed: <strong>{{itemsRemoved}}</strong></p>
        <p style="font-size:14px;color:#475569;margin:0">⏱ Time in program: <strong>{{programDuration}}</strong></p>
      </div>

      <p style="font-size:15px;color:#475569;line-height:1.6;margin:0 0 24px">This is real, measurable progress — and it's all because of your commitment. Every round of disputes brings you closer to your credit goals.</p>

      <a href="{{dashboardUrl}}" style="display:block;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;text-align:center">See Your Progress Dashboard →</a>

      <p style="font-size:14px;color:#64748b;margin:24px 0 0;text-align:center">— {{agentName}}, your credit specialist</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
