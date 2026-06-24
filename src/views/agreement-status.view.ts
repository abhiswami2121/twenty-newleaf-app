import { defineView } from 'twenty-sdk';

export default defineView({
  name: 'agreement-status',
  label: 'Agreement Status',
  type: 'table',
  icon: 'IconFileText',
  objectName: 'agreement',
  description: 'All agreements by status with customer, template, signed date, and expiration.',
  filters: [],
  columns: [
    {
      field: 'customer',
      label: 'Customer',
      type: 'relation',
      width: 200,
    },
    {
      field: 'template',
      label: 'Template',
      type: 'text',
      width: 160,
    },
    {
      field: 'status',
      label: 'Status',
      type: 'chip',
      width: 140,
      options: [
        { value: 'draft', label: 'Draft', color: '#6b7280' },
        { value: 'sent', label: 'Sent', color: '#3b82f6' },
        { value: 'viewed', label: 'Viewed', color: '#8b5cf6' },
        { value: 'signed', label: 'Signed', color: '#22c55e' },
        { value: 'expired', label: 'Expired', color: '#ef4444' },
        { value: 'voided', label: 'Voided', color: '#6b7280' },
      ],
    },
    {
      field: 'signedDate',
      label: 'Signed Date',
      type: 'date',
      width: 140,
    },
    {
      field: 'expiresDate',
      label: 'Expires',
      type: 'date',
      width: 140,
    },
    {
      field: 'monthlyAmount',
      label: 'Monthly Amount',
      type: 'currency',
      width: 150,
    },
    {
      field: 'createdAt',
      label: 'Created',
      type: 'date',
      width: 140,
    },
  ],
  sorting: [{ field: 'createdAt', direction: 'desc' }],
  isDefault: false,
});
