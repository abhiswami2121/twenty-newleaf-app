import { defineSkill } from 'twenty-sdk';

export default defineSkill({
  name: 'sendSms',
  label: 'Send SMS',
  icon: 'IconMessage',
  description: 'Send SMS messages to customers via the GHL (GoHighLevel) connector. Supports templated and custom messages with delivery tracking.',
  content: `You are the Send SMS skill. Send SMS messages to customers through the GHL connector.

Use the following API endpoint:
- POST /api/connectors/ghl/sms — Send SMS via GHL

Payload fields:
- customerId — Target customer
- phone — Recipient phone (E.164 format)
- message — Message body (max 1600 chars)
- templateId — Optional: GHL template ID

Rules:
- Always confirm opt-in status before sending
- Include opt-out language for marketing messages
- Transactional messages do not require opt-out language
- Log the message via logActivity after sending

Delivery status is returned and tracked.`,
});
