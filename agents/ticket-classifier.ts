// Ticket Classifier Agent — NLP-based ticket categorization + priority detection
// Auto-classifies support tickets by category and priority using keyword matching.
// Pairs with the support_ticket.created workflow for auto-assignment.

import { defineAgent } from 'twenty-sdk/define';

export default defineAgent({
  name: 'ticket-classifier',
  label: 'Ticket Classifier (NLP)',
  description: 'Auto-classifies support tickets by category and priority using keyword detection',
  icon: 'IconBrain',

  skills: [
    {
      name: 'classify-ticket',
      label: 'Classify Support Ticket',
      description: 'Analyzes ticket title + description to detect category and priority',
      trigger: { workflow: 'support-ticket-created' },

      rules: {
        categoryDetection: {
          billing: ['payment', 'charge', 'declined', 'refund', 'bill', 'invoice', 'card', 'subscription', 'amount'],
          dispute: ['dispute', 'credit report', 'bureau', 'creditor', 'negative item', 'deletion', 'round'],
          enrollment: ['sign up', 'enroll', 'join', 'start', 'program', 'qualification'],
          technical: ['bug', 'error', 'broken', 'not working', 'login', 'portal', 'app', 'website'],
          refund: ['refund', 'money back', 'cancel', 'chargeback'],
          cancellation: ['cancel', 'stop', 'quit', 'discontinue'],
        },

        priorityDetection: {
          critical: ['urgent', 'emergency', 'critical', 'asap', 'immediately', 'right now'],
          high: ['important', 'soon', 'today', 'worried', 'concerned'],
          low: ['whenever', 'no rush', 'low priority', 'just wondering'],
        },
      },
    },

    {
      name: 'auto-reply-suggestions',
      label: 'Auto-Reply Suggestions',
      description: 'Suggests response templates based on ticket category and detected intent',
      trigger: { workflow: 'support-ticket-created' },
      templates: {
        billing: 'payment_inquiry_response',
        dispute: 'dispute_status_response',
        enrollment: 'enrollment_help_response',
        technical: 'technical_support_response',
        refund: 'refund_policy_response',
        cancellation: 'cancellation_response',
      },
    },
  ],

  settings: {
    confidenceThreshold: 0.7,
    fallbackCategory: 'general',
    fallbackPriority: 'medium',
  },
});
