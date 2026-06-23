// Engagement Workflows (4 of 30)
// Triggers: at_risk_detected → score_improved → silent_30_days → celebrated_milestone

import { defineWorkflow } from 'twenty-sdk/define';

// ── 16. engagement.at_risk_detected ──────────────────────────
export const atRiskDetectedWorkflow = defineWorkflow({
  name: 'engagement-at-risk-detected',
  label: 'At Risk Detected → Agent Alert + Retention Sequence',
  description: 'When a customer engagement score drops below 50: alert agent, start retention workflow',
  trigger: {
    object: 'customerProfile',
    event: 'SCHEDULED',
    condition: { pipelineStage: 'ACTIVE_SERVICE', engagementScore: { lt: 50 } },
    schedule: '0 9 * * *',
  },
  actions: [
    {
      type: 'UPDATE_OBJECT',
      object: 'customerProfile',
      id: '{{customer.id}}',
      data: { pipelineStage: 'AT_RISK' },
    },
    {
      type: 'CREATE_TASK',
      task: {
        title: 'At-risk customer outreach: {{customer.firstName}} {{customer.lastName}}',
        priority: 'HIGH',
        assignee: '{{customer.agentEmail}}',
        customerProfileId: '{{customer.id}}',
        dueDate: 'NOW_PLUS_2_HOURS',
        description: 'Engagement score: {{customer.engagementScore}}. Last activity: {{customer.lastActivity}}. Call to re-engage.',
      },
    },
    {
      type: 'ENROLL_SEQUENCE',
      sequenceKey: 'retention_reactivation',
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '⚠️ AT RISK: {{customer.firstName}} {{customer.lastName}} engagement score {{customer.engagementScore}}. Retention sequence started.',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'AT_RISK_DETECTED',
        title: 'Customer At Risk',
        description: 'Engagement score dropped to {{customer.engagementScore}}. Retention workflow triggered.',
        source: 'WORKFLOW',
        customerProfileId: '{{customer.id}}',
      },
    },
  ],
});

// ── 17. engagement.score_improved ────────────────────────────
export const scoreImprovedWorkflow = defineWorkflow({
  name: 'engagement-score-improved',
  label: 'Score Improved → Celebrate + Share Progress',
  description: 'When customer credit score improves significantly: celebrate with SMS, share progress update',
  trigger: { object: 'creditReport', event: 'CREATED', condition: { score: { change: { gt: 20 } } } },
  actions: [
    {
      type: 'SEND_SMS',
      template: 'score_celebrate',
      to: '{{customer.phone}}',
      params: {
        bureau: '{{creditReport.bureau}}',
        points: '{{scoreDelta}}',
        newScore: '{{creditReport.score}}',
      },
    },
    {
      type: 'SEND_EMAIL',
      template: 'score_milestone',
      to: '{{customer.email}}',
      params: {
        customerName: '{{customer.firstName}}',
        bureau: '{{creditReport.bureau}}',
        oldScore: '{{previousScore}}',
        newScore: '{{creditReport.score}}',
        pointsGained: '{{scoreDelta}}',
      },
    },
    {
      type: 'SLACK_NOTIFY',
      channel: '#jarvis-admin',
      message: '📈 Score improvement: {{customer.firstName}} {{customer.lastName}} +{{scoreDelta}} points on {{creditReport.bureau}} → {{creditReport.score}}',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'SCORE_IMPROVED',
        title: 'Credit Score Improved',
        description: '{{creditReport.bureau}} score increased by {{scoreDelta}} points to {{creditReport.score}}.',
        source: 'DPP',
        customerProfileId: '{{creditReport.customerProfileId}}',
      },
    },
  ],
});

// ── 18. customer.silent_30_days ──────────────────────────────
export const customerSilent30DaysWorkflow = defineWorkflow({
  name: 'customer-silent-30-days',
  label: 'Customer Silent 30 Days → Check-in SMS',
  description: 'When customer has no activity for 30 days: send check-in SMS from assigned agent',
  trigger: {
    object: 'customerProfile',
    event: 'SCHEDULED',
    condition: { lastActivity: { lt: 'NOW_MINUS_30_DAYS' }, pipelineStage: 'ACTIVE_SERVICE' },
    schedule: '0 10 * * 1', // Monday 10am
  },
  actions: [
    {
      type: 'SEND_SMS',
      template: 'check_in_silent',
      to: '{{customer.phone}}',
      params: {
        customerName: '{{customer.firstName}}',
        agentName: '{{customer.agentEmail}}',
        agentPhone: '{{customer.agentPhone}}',
      },
    },
    {
      type: 'CREATE_TASK',
      task: {
        title: 'Silent customer check-in: {{customer.firstName}} {{customer.lastName}}',
        priority: 'MEDIUM',
        assignee: '{{customer.agentEmail}}',
        customerProfileId: '{{customer.id}}',
        dueDate: 'NOW_PLUS_48_HOURS',
        description: 'No activity for 30+ days. SMS sent. Follow up if no response.',
      },
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'SILENT_CUSTOMER_CHECKIN',
        title: 'Silent Customer Check-in',
        description: 'Customer has been inactive for 30+ days. Check-in SMS sent.',
        source: 'WORKFLOW',
        customerProfileId: '{{customer.id}}',
      },
    },
  ],
});

// ── 19. customer.celebrated_milestone ────────────────────────
export const celebratedMilestoneWorkflow = defineWorkflow({
  name: 'customer-celebrated-milestone',
  label: 'Milestone Reached → Badge + Referral Ask',
  description: 'When customer hits a program milestone: send milestone badge, ask for referral',
  trigger: {
    object: 'customerProfile',
    event: 'SCHEDULED',
    condition: { enrolledAt: { anniversary: [3, 6, 12] } },
    schedule: '0 9 * * *',
  },
  actions: [
    {
      type: 'SEND_EMAIL',
      template: 'milestone_badge',
      to: '{{customer.email}}',
      params: {
        customerName: '{{customer.firstName}}',
        monthsEnrolled: '{{anniversaryMonth}}',
        badgeType: '{{milestoneBadge}}',
      },
    },
    {
      type: 'SEND_SMS',
      template: 'milestone_celebrate',
      to: '{{customer.phone}}',
      params: {
        customerName: '{{customer.firstName}}',
        months: '{{anniversaryMonth}}',
        referralLink: '{{connectors.ghl.referralUrl}}',
      },
    },
    {
      type: 'ENROLL_SEQUENCE',
      sequenceKey: 'referral_ask',
      delay: '7d',
    },
    {
      type: 'LOG_ACTIVITY',
      activity: {
        type: 'MILESTONE_REACHED',
        title: 'Program Milestone: {{anniversaryMonth}} Months',
        description: 'Customer reached {{anniversaryMonth}}-month milestone. Badge + referral ask sent.',
        source: 'WORKFLOW',
        customerProfileId: '{{customer.id}}',
      },
    },
  ],
});
