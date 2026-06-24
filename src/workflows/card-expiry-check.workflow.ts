import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "card-expiry-check",
  label: "card-expiry-check",
  trigger: { objectName: "person", action: "scheduled" },
  steps: [
    { type: "action", name: "processcard-expiry-check", config: {} },
  ],
});
