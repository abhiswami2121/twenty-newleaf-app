import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "agent-activity-log",
  label: "agent-activity-log",
  trigger: { objectName: "person", action: "created" },
  steps: [
    { type: "action", name: "processagent-activity-log", config: {} },
  ],
});
