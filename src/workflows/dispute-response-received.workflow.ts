import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "dispute-response-received",
  label: "dispute-response-received",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processdispute-response-received", config: {} },
  ],
});
