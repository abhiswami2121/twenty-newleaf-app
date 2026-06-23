// Email Template: referral_thanks — Thank-you email for customer referral
// Category: engagement | Powered by Resend + React Email
// Usage: referral.signup automation

export const referralThanksEmail = {
  name: 'Referral Thanks',
  key: 'referral_thanks',
  subject: 'Thank you for referring {{referralName}}! 🎁',
  category: 'engagement',
  version: 1,
  variables: ['customerName', 'referralName', 'referralReward', 'totalReferrals', 'referralLink', 'agentName'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:40px 40px 32px;text-align:center">
      <p style="font-size:40px;margin:0 0 12px">🎁</p>
      <h1 style="font-size:24px;font-weight:700;color:#0f172a;margin:0">Thank You, {{customerName}}!</h1>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px">
        Your friend <strong>{{referralName}}</strong> just signed up for NewLeaf Credit Repair through your referral!
      </p>

      <div style="background:#f0fdfa;border-radius:10px;padding:24px;text-align:center;margin:0 0 24px">
        <p style="font-size:14px;color:#0f766e;margin:0 0 8px">Your Reward</p>
        <p style="font-size:28px;font-weight:700;color:#06b6a4;margin:0">{{referralReward}}</p>
        <p style="font-size:13px;color:#64748b;margin:8px 0 0">Total referrals: {{totalReferrals}}</p>
      </div>

      <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 24px">Word of mouth is how most people find us — and your trust means everything. Keep sharing; every friend you refer gets the same dedicated care you received.</p>

      <a href="{{referralLink}}" style="display:block;background:#06b6a4;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;text-align:center">Refer Another Friend →</a>

      <p style="font-size:14px;color:#64748b;margin:24px 0 0;text-align:center">— {{agentName}} 🍃</p>
    </td>
  </tr>
  <tr>
    <td style="padding:20px 40px 32px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">NewLeaf Financial · Credit Repair Made Human</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
