import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "notification-routing",
  label: "notification-routing",
  trigger: { objectName: "person", action: "created" },
  steps: [
    { type: "action", name: "processnotification-routing", config: {} },
  ],
});
