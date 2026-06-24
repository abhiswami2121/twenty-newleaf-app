import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "agreement-generation",
  label: "agreement-generation",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processagreement-generation", config: {} },
  ],
});
