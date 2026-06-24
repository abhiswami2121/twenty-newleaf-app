import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "dispute-resolved",
  label: "dispute-resolved",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processdispute-resolved", config: {} },
  ],
});
