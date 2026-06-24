import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "report-generation",
  label: "report-generation",
  trigger: { objectName: "person", action: "scheduled" },
  steps: [
    { type: "action", name: "processreport-generation", config: {} },
  ],
});
