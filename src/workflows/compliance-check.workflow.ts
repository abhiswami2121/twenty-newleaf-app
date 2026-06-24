import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "compliance-check",
  label: "compliance-check",
  trigger: { objectName: "person", action: "scheduled" },
  steps: [
    { type: "action", name: "processcompliance-check", config: {} },
  ],
});
