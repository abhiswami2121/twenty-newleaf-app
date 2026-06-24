import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "day-zero-setup",
  label: "day-zero-setup",
  trigger: { objectName: "person", action: "updated" },
  steps: [
    { type: "action", name: "processday-zero-setup", config: {} },
  ],
});
