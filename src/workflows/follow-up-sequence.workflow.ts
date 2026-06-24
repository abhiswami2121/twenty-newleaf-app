import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "follow-up-sequence",
  label: "follow-up-sequence",
  trigger: { objectName: "person", action: "scheduled" },
  steps: [
    { type: "action", name: "processfollow-up-sequence", config: {} },
  ],
});
