// NMI Vault Cards View — Stored payment methods
import { defineView } from 'twenty-sdk/define';

export default defineView({
  object: 'nmiVault',
  name: 'vault-cards',
  label: 'Stored Cards (NMI Vault)',
  description: 'All stored payment methods from NMI Customer Vault',
  type: 'TABLE',
  icon: 'IconShieldLock',
  columns: [
    { field: 'customerProfileId', label: 'Customer', width: 200 },
    { field: 'cardBrand', label: 'Brand', width: 100 },
    { field: 'cardLastFour', label: 'Last 4', width: 80 },
    { field: 'cardExpiryDate', label: 'Expires', width: 120 },
    { field: 'isDefault', label: 'Default', width: 80 },
    { field: 'createdAt', label: 'Added', width: 140 },
  ],
  quickFilters: [
    { label: 'Expiring Soon', field: 'cardExpiryDate', op: 'lte', value: 'NEXT_30_DAYS' },
    { label: 'Visa', field: 'cardBrand', op: 'eq', value: 'visa' },
    { label: 'Mastercard', field: 'cardBrand', op: 'eq', value: 'mastercard' },
  ],
  sortBy: 'createdAt',
  sortDirection: 'DESC',
});
