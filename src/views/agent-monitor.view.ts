import { defineView } from "twenty-sdk";

export default defineView({
  name: "agent-monitor",
  label: "agent-monitor",
  type: "table",
  icon: "IconTable",
  objectName: "activity_log",
  isDefault: false,
});
