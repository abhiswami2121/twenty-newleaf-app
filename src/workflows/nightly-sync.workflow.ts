import { defineWorkflow } from "twenty-sdk";

export default defineWorkflow({
  name: "nightly-sync",
  label: "nightly-sync",
  trigger: { objectName: "person", action: "scheduled" },
  steps: [
    { type: "action", name: "processnightly-sync", config: {} },
  ],
});
