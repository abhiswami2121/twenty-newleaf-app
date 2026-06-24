import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "dispute-next-round",
  label: "dispute-next-round",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processdispute-next-round", config: {} },
  ],
});
