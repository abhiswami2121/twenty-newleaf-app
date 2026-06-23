// SMS Template: appointment_reminder — Reminder for scheduled call/appointment
// Category: engagement | A2P Compliant: true
// Usage: scheduled reminder, agent calendar integration

export const appointmentReminderSms = {
  name: 'Appointment Reminder',
  key: 'appointment_reminder',
  body: `⏰ Reminder {{customerName}}: you have a call with {{agentName}} today at {{appointmentTime}}.

We'll call you at {{customerPhone}}. If you need to reschedule, reply to this text or call {{agentPhone}}.

Looking forward to connecting!`,
  category: 'engagement',
  variables: ['customerName', 'agentName', 'appointmentTime', 'customerPhone', 'agentPhone'],
  isA2PCompliant: true,
  optOutNotice: 'Reply STOP to unsubscribe.',
};
