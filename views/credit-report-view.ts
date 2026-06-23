// Credit Report View — All credit reports with score trend
import { defineView } from 'twenty-sdk/define';

export default defineView({
  object: 'creditReport',
  name: 'credit-report-view',
  label: 'Credit Reports',
  description: 'All credit reports by bureau with score and negative item counts',
  type: 'TABLE',
  icon: 'IconReport',
  columns: [
    { field: 'customerProfileId', label: 'Customer', width: 200 },
    { field: 'bureau', label: 'Bureau', width: 120 },
    { field: 'score', label: 'Score', width: 100 },
    { field: 'reportDate', label: 'Report Date', width: 140 },
    { field: 'negativeItemCount', label: 'Negative Items', width: 120 },
  ],
  quickFilters: [
    { label: 'TransUnion', field: 'bureau', op: 'eq', value: 'TRANSUNION' },
    { label: 'Experian', field: 'bureau', op: 'eq', value: 'EXPERIAN' },
    { label: 'Equifax', field: 'bureau', op: 'eq', value: 'EQUIFAX' },
  ],
  sortBy: 'reportDate',
  sortDirection: 'DESC',
});
