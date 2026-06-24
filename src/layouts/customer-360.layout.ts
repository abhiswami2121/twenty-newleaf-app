import { defineLayout } from 'twenty-sdk';

export default defineLayout({
  name: 'customer-360',
  label: 'Customer 360',
  objectName: 'person',
  tabs: [
    {
      id: 'overview',
      label: 'Overview',
      icon: 'IconUser',
      components: [
        { type: 'field_group', fields: ['name', 'email', 'phone', 'nlf_status', 'nlf_creditScore', 'nlf_pipelineStage'] },
        { type: 'metric_card', metrics: ['monthly_payment', 'subscription_status', 'dispute_count'] },
        { type: 'timeline', source: 'activity_log', limit: 20 },
      ],
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: 'IconCreditCard',
      components: [
        { type: 'table', source: 'subscription', columns: ['plan', 'amount', 'status', 'next_billing', 'card_last4'] },
        { type: 'table', source: 'payment', columns: ['date', 'amount', 'status', 'method'] },
        { type: 'table', source: 'billing_queue', columns: ['scheduled_date', 'amount', 'status', 'retry_count'] },
      ],
    },
    {
      id: 'communications',
      label: 'Communications',
      icon: 'IconMessage',
      components: [
        { type: 'table', source: 'call_log', columns: ['date', 'direction', 'duration', 'agent', 'disposition'] },
        { type: 'table', source: 'sms_message', columns: ['date', 'direction', 'body'] },
        { type: 'table', source: 'email_message', columns: ['date', 'direction', 'subject'] },
      ],
    },
    {
      id: 'tickets',
      label: 'Tickets',
      icon: 'IconTicket',
      components: [
        { type: 'table', source: 'support_ticket', columns: ['subject', 'status', 'priority', 'opened_date', 'resolution'] },
      ],
    },
    {
      id: 'disputes',
      label: 'Disputes',
      icon: 'IconScale',
      components: [
        { type: 'table', source: 'dispute', columns: ['bureau', 'account_name', 'status', 'round_number', 'next_action_date'] },
        { type: 'table', source: 'dispute_round', columns: ['round_number', 'letter_mailed_date', 'response_received', 'result'] },
      ],
    },
    {
      id: 'credit',
      label: 'Credit',
      icon: 'IconReport',
      components: [
        { type: 'metric_card', metrics: ['credit_score', 'negative_items_count', 'total_debt'] },
        { type: 'table', source: 'credit_report', columns: ['report_date', 'bureau', 'credit_score', 'negative_items_count'] },
      ],
    },
    {
      id: 'agreements',
      label: 'Agreements',
      icon: 'IconFileText',
      components: [
        { type: 'table', source: 'agreement', columns: ['template', 'status', 'signed_date', 'expires_date'] },
        { type: 'table', source: 'contract', columns: ['agreement_number', 'status', 'signed_date', 'monthly_payment'] },
      ],
    },
    {
      id: 'connectors',
      label: 'Connectors',
      icon: 'IconPlugConnected',
      components: [
        { type: 'table', source: 'connector_health', columns: ['connector_name', 'status', 'last_checked', 'latency_ms'] },
      ],
    },
    {
      id: 'activity',
      label: 'Activity',
      icon: 'IconTimeline',
      components: [
        { type: 'timeline', source: 'activity_log', limit: 100, groupBy: 'date' },
      ],
    },
  ],
});
