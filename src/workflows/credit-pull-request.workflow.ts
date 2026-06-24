import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "credit-pull-request",
  label: "credit-pull-request",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processcredit-pull-request", config: {} },
  ],
});
