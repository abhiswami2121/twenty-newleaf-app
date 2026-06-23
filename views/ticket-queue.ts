// Ticket Queue View — Kanban of support tickets by status
import { defineView } from 'twenty-sdk/define';

export default defineView({
  object: 'supportTicket',
  name: 'ticket-queue',
  label: 'Ticket Queue',
  description: 'Kanban-style support ticket queue grouped by status',
  type: 'KANBAN',
  icon: 'IconLifebuoy',
  groupBy: 'status',
  cardFields: ['title', 'customerProfileId', 'priority', 'assignee', 'category', 'createdAt'],
  stages: [
    { id: 'NEW', label: 'New', color: '#3b82f6', backgroundColor: '#eff6ff' },
    { id: 'IN_PROGRESS', label: 'In Progress', color: '#f59e0b', backgroundColor: '#fffbeb' },
    { id: 'WAITING_ON_CUSTOMER', label: 'Waiting', color: '#94a3b8', backgroundColor: '#f8fafc' },
    { id: 'RESOLVED', label: 'Resolved', color: '#10b981', backgroundColor: '#ecfdf5' },
    { id: 'CLOSED', label: 'Closed', color: '#64748b', backgroundColor: '#f1f5f9' },
  ],
  filters: { status: { not: 'CLOSED' } },
  sortBy: 'priority',
  sortDirection: 'ASC',
});
