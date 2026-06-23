// Task Board View — Kanban of NewLeaf tasks grouped by status
import { defineView } from 'twenty-sdk/define';

export default defineView({
  object: 'newleafTask',
  name: 'task-board',
  label: 'Task Board',
  description: 'Linear-style kanban board: To Do / In Progress / Done with priority coloring',
  type: 'KANBAN',
  icon: 'IconCheckbox',
  groupBy: 'status',
  cardFields: ['title', 'priority', 'assignee', 'customerProfileId', 'dueDate', 'pipelineStage'],
  stages: [
    { id: 'TODO', label: 'To Do', color: '#94a3b8', backgroundColor: '#f8fafc' },
    { id: 'IN_PROGRESS', label: 'In Progress', color: '#3b82f6', backgroundColor: '#eff6ff' },
    { id: 'IN_REVIEW', label: 'In Review', color: '#f59e0b', backgroundColor: '#fffbeb' },
    { id: 'DONE', label: 'Done', color: '#10b981', backgroundColor: '#ecfdf5' },
  ],
  filters: { status: { not: 'DONE' } },
  sortBy: 'priority',
  sortDirection: 'ASC',
});
