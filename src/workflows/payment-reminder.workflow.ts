import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "payment-reminder",
  label: "payment-reminder",
  trigger: { objectName: "person", action: "scheduled" },
  steps: [
    { type: "action", name: "processpayment-reminder", config: {} },
  ],
});
