import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "payment-success",
  label: "payment-success",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processpayment-success", config: {} },
  ],
});
