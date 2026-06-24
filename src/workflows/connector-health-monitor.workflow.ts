import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "connector-health-monitor",
  label: "connector-health-monitor",
  trigger: { objectName: "person", action: "scheduled" },
  steps: [
    { type: "action", name: "processconnector-health-monitor", config: {} },
  ],
});
