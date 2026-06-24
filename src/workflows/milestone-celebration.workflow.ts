import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "milestone-celebration",
  label: "milestone-celebration",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processmilestone-celebration", config: {} },
  ],
});
