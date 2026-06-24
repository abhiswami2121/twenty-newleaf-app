import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "deal-closed",
  label: "deal-closed",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processdeal-closed", config: {} },
  ],
});
