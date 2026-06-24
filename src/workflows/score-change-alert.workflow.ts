import { defineWorkflow } from 'twenty-sdk';

export default defineWorkflow({
  name: 'score-change-alert',
  label: 'Score Change Alert',
  trigger: {
    objectName: 'creditReport',
    action: 'updated',
  },
  steps: [
    {
      type: 'condition',
      name: 'checkScoreDelta',
      config: {
        field: 'scoreDelta',
        operator: 'gte',
        value: 10,
      },
    },
    {
      type: 'action',
      name: 'notifyCustomer',
      config: {
        skill: 'notifyCustomer',
        template: 'score-change',
        channels: ['email', 'sms'],
      },
    },
    {
      type: 'action',
      name: 'logActivity',
      config: {
        skill: 'logActivity',
        eventType: 'score_change_alert',
      },
    },
    {
      type: 'condition',
      name: 'checkNegativeChange',
      config: {
        field: 'scoreDelta',
        operator: 'lt',
        value: 0,
      },
    },
    {
      type: 'action',
      name: 'escalateToAdmin',
      config: {
        skill: 'escalateToAdmin',
        priority: 'medium',
        message: 'Credit score decreased for customer — review dispute strategy',
      },
    },
  ],
  description: 'Monitors credit score changes and alerts customers when scores increase by 10+ points. Escalates to admin on score decreases.',
});
