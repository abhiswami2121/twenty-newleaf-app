import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "subscription-charge",
  label: "subscription-charge",
  trigger: { objectName: "person", action: "scheduled" },
  steps: [
    { type: "action", name: "processsubscription-charge", config: {} },
  ],
});
