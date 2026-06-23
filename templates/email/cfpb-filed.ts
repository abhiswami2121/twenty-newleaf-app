// Email Template: cfpb_filed — CFPB complaint filing notification
// Category: disputes | Powered by Resend + React Email
// Usage: dispute.cfpb_escalation_needed automation

export const cfpbFiledEmail = {
  name: 'CFPB Filed',
  key: 'cfpb_filed',
  subject: 'CFPB Complaint Filed — {{bureau}} / {{creditorName}}',
  category: 'disputes',
  version: 1,
  variables: ['customerName', 'bureau', 'creditorName', 'cfpbComplaintId', 'filingDate', 'estimatedResponse', 'agentName', 'dashboardUrl'],
  htmlBody: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:40px 0;margin:0">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
  <tr>
    <td style="padding:40px 40px 28px">
      <p style="font-size:12px;color:#b45309;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;font-weight:600">CFPB · Federal Escalation</p>
      <h1 style="font-size:22px;font-weight:700;color:#0f172a;margin:0;letter-spacing:-0.3px">CFPB Complaint Filed</h1>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px 32px">
      <p style="font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px">Hi {{customerName}}, a formal complaint has been filed with the <strong>Consumer Financial Protection Bureau (CFPB)</strong> regarding:</p>

      <div style="background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:20px;margin:0 0 24px">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="font-size:13px;color:#92400e;padding:2px 0">Bureau:</td><td style="font-size:14px;color:#0f172a;font-weight:500;padding:2px 0">{{bureau}}</td></tr>
          <tr><td style="font-size:13px;color:#92400e;padding:2px 0">Creditor:</td><td style="font-size:14px;color:#0f172a;font-weight:500;padding:2px 0">{{creditorName}}</td></tr>
          <tr><td style="font-size:13px;color:#92400e;padding:2px 0">Complaint ID:</td><td style="font-size:14px;color:#0f172a;font-weight:500;padding:2px 0">{{cfpbComplaintId}}</td></tr>
          <tr><td style="font-size:13px;color:#92400e;padding:2px 0">Filed:</td><td style="font-size:14px;color:#0f172a;font-weight:500;padding:2px 0">{{filingDate}}</td></tr>
        </table>
      </div>

      <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:0 0 24px">
        <p style="font-size:14px;color:#0f172a;margin:0 0 12px"><strong>What this means:</strong></p>
        <ul style="margin:0;padding:0 0 0 18px">
          <li style="font-size:14px;color:#475569;margin-bottom:6px">The CFPB will forward your complaint to {{bureau}} and {{creditorName}}</li>
          <li style="font-size:14px;color:#475569;margin-bottom:6px">They have 15 days to respond to the CFPB</li>
          <li style="font-size:14px;color:#475569">Estimated resolution window: {{estimatedResponse}}</li>
        </ul>
      </div>

      <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 24px">This is the highest level of consumer protection escalation available. The CFPB complaint process carries significant weight, and we typically see resolution within 15-60 days.</p>

      <a href="{{dashboardUrl}}" style="display:block;background:#b45309;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;text-align:center">Track CFPB Case →</a>
    </td>
  </tr>
  <tr>
    <td style="padding:16px 40px 32px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0">NewLeaf Financial · {{agentName}} managing your case</p>
    </td>
  </tr>
</table>
</body>
</html>`,
};
