import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "dispute-opened",
  label: "dispute-opened",
  trigger: { objectName: "person", action: "created" },
  steps: [
    { type: "action", name: "processdispute-opened", config: {} },
  ],
});
