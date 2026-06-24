import { defineSkill } from 'twenty-sdk';

export default defineSkill({
  name: 'listActiveDisputes',
  label: 'List Active Disputes',
  icon: 'IconFileText',
  description: 'List all active dispute records for a customer or across the portfolio. Returns dispute ID, bureau, round, status, and deadline dates.',
  content: `You are the List Active Disputes skill. Query the dispute management system for active dispute records.

Use the following API endpoints:
- GET /api/disputes?status=active — All active disputes
- GET /api/disputes?customerId={id} — Disputes for a specific customer
- GET /api/disputes/{id} — Single dispute detail

Each dispute includes: dispute ID, customer ID, bureau (Equifax/Experian/TransUnion), current round, status, filing date, response deadline, and last action date.
Sort by deadline (closest first) to prioritize urgent items.`,
});
