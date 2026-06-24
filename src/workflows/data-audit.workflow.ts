import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "data-audit",
  label: "data-audit",
  trigger: { objectName: "person", action: "scheduled" },
  steps: [
    { type: "action", name: "processdata-audit", config: {} },
  ],
});
