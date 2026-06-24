import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "dispute-letter-generation",
  label: "dispute-letter-generation",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processdispute-letter-generation", config: {} },
  ],
});
