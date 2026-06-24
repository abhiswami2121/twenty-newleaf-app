import { defineSkill } from 'twenty-sdk';

export default defineSkill({
  name: 'sendEmail',
  label: 'Send Email',
  icon: 'IconMail',
  description: 'Send emails to customers via the Resend API. Supports HTML and plain text emails with template support and open/click tracking.',
  content: `You are the Send Email skill. Send emails to customers through the Resend API.

Use the following API endpoint:
- POST /api/connectors/resend/send — Send email via Resend

Payload fields:
- customerId — Target customer
- to — Recipient email address
- subject — Email subject line
- html — HTML body content
- text — Plain text fallback
- templateId — Optional: Resend template ID
- attachments — Optional: Array of attachment objects

Rules:
- Always include a plain-text fallback
- Transactional emails must include company footer
- Marketing emails must include unsubscribe link
- Log the email via logActivity after sending

Returns: messageId, status, and delivery tracking URL.`,
});
