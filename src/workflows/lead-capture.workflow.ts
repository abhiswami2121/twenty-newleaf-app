import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "lead-capture",
  label: "lead-capture",
  trigger: { objectName: "person", action: "created" },
  steps: [
    { type: "action", name: "processlead-capture", config: {} },
  ],
});
