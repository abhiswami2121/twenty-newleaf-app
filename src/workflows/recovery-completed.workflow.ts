import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "recovery-completed",
  label: "recovery-completed",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processrecovery-completed", config: {} },
  ],
});
