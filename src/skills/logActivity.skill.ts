import { defineSkill } from 'twenty-sdk';

export default defineSkill({
  name: 'logActivity',
  label: 'Log Activity',
  icon: 'IconNote',
  description: 'Write an activity log entry in Twenty CRM. Records agent actions, customer interactions, and system events for audit trail.',
  content: `You are the Log Activity skill. Write an activity log entry to the Twenty CRM activity feed.

Use the following API endpoint:
- POST /api/activity — Create activity entry

Payload fields:
- customerId — Associated customer
- type — call | email | sms | note | system
- summary — Brief description (max 280 chars)
- detail — Full description (max 4000 chars)
- agentId — Agent who performed the action

Always include a brief summary and relevant detail. Link to the customer record.`,
});
