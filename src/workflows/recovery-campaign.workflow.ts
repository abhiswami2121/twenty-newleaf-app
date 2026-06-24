import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "recovery-campaign",
  label: "recovery-campaign",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processrecovery-campaign", config: {} },
  ],
});
