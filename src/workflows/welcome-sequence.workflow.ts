import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "welcome-sequence",
  label: "welcome-sequence",
  trigger: { objectName: "person", action: "created" },
  steps: [
    { type: "action", name: "processwelcome-sequence", config: {} },
  ],
});
