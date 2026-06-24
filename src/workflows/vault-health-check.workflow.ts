import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "vault-health-check",
  label: "vault-health-check",
  trigger: { objectName: "person", action: "scheduled" },
  steps: [
    { type: "action", name: "processvault-health-check", config: {} },
  ],
});
