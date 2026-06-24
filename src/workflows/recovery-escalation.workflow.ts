import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "recovery-escalation",
  label: "recovery-escalation",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processrecovery-escalation", config: {} },
  ],
});
