import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "invoice-generation",
  label: "invoice-generation",
  trigger: { objectName: "person", action: "scheduled" },
  steps: [
    { type: "action", name: "processinvoice-generation", config: {} },
  ],
});
