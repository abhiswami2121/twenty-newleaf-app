import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "payment-failed",
  label: "payment-failed",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processpayment-failed", config: {} },
  ],
});
