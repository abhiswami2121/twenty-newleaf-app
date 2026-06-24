import { defineObjectExtension, FieldType } from 'twenty-sdk';

export default defineObjectExtension({
  targetObject: 'person',
  fields: [
    {
      name: 'nlf_status',
      label: 'NLF Status',
      type: FieldType.SELECT,
      options: [
        { label: 'Lead', value: 'lead', color: 'blue' },
        { label: 'Active', value: 'active', color: 'green' },
        { label: 'Churned', value: 'churned', color: 'red' },
        { label: 'VIP', value: 'vip', color: 'yellow' },
      ],
    },
    {
      name: 'nlf_creditScore',
      label: 'Credit Score',
      type: FieldType.NUMBER,
    },
    {
      name: 'nlf_pipelineStage',
      label: 'Pipeline Stage',
      type: FieldType.SELECT,
      options: [
        { label: 'New Lead', value: 'new_lead', color: 'blue' },
        { label: 'Discovery', value: 'discovery', color: 'purple' },
        { label: 'Credit Pull', value: 'credit_pull', color: 'orange' },
        { label: 'Agreement Sent', value: 'agreement_sent', color: 'yellow' },
        { label: 'Day Zero Scheduled', value: 'day_zero_scheduled', color: 'green' },
        { label: 'Closed Won', value: 'closed_won', color: 'green' },
        { label: 'Closed Lost', value: 'closed_lost', color: 'red' },
      ],
    },
    {
      name: 'nlf_subscriptionStatus',
      label: 'Subscription Status',
      type: FieldType.SELECT,
      options: [
        { label: 'Active', value: 'active', color: 'green' },
        { label: 'Past Due', value: 'past_due', color: 'red' },
        { label: 'Canceled', value: 'canceled', color: 'gray' },
        { label: 'Trial', value: 'trial', color: 'blue' },
        { label: 'None', value: 'none', color: 'gray' },
      ],
    },
    {
      name: 'nlf_monthlyPayment',
      label: 'Monthly Payment',
      type: FieldType.CURRENCY,
    },
    {
      name: 'nlf_enrolledDate',
      label: 'Enrolled Date',
      type: FieldType.DATE,
    },
    {
      name: 'nlf_disputeCount',
      label: 'Dispute Count',
      type: FieldType.NUMBER,
    },
    {
      name: 'nlf_lastPaymentDate',
      label: 'Last Payment Date',
      type: FieldType.DATE,
    },
    {
      name: 'nlf_recoveryStatus',
      label: 'Recovery Status',
      type: FieldType.SELECT,
      options: [
        { label: 'None', value: 'none', color: 'gray' },
        { label: 'At Risk', value: 'at_risk', color: 'yellow' },
        { label: 'In Recovery', value: 'in_recovery', color: 'orange' },
        { label: 'Recovered', value: 'recovered', color: 'green' },
        { label: 'Charge Off', value: 'charge_off', color: 'red' },
      ],
    },
    {
      name: 'nlf_vaultId',
      label: 'Vault ID',
      type: FieldType.TEXT,
    },
    {
      name: 'nlf_tags',
      label: 'Tags',
      type: FieldType.TEXT,
    },
  ],
});
