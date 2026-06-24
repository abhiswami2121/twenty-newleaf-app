import { defineObject, FieldType } from 'twenty-sdk';

export default defineObject({
  nameSingular: 'connectorHealth',
  labelSingular: 'Connector Health',
  labelPlural: 'Connector Health',
  icon: 'IconActivityHeartbeat',
  fields: [
    {
      name: 'connectorName',
      label: 'Connector Name',
      type: FieldType.TEXT,
      isUnique: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: FieldType.SELECT,
      options: [
        { label: 'Healthy', value: 'healthy', color: 'green' },
        { label: 'Degraded', value: 'degraded', color: 'yellow' },
        { label: 'Down', value: 'down', color: 'red' },
        { label: 'Unknown', value: 'unknown', color: 'gray' },
      ],
    },
    {
      name: 'lastChecked',
      label: 'Last Checked',
      type: FieldType.DATE_TIME,
    },
    {
      name: 'latencyMs',
      label: 'Latency (ms)',
      type: FieldType.NUMBER,
    },
    {
      name: 'errorMessage',
      label: 'Error Message',
      type: FieldType.TEXT,
    },
  ],
});
