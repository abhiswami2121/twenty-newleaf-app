import { defineView } from "twenty-sdk";

export default defineView({
  name: "support-tickets",
  label: "support-tickets",
  type: "table",
  icon: "IconTable",
  objectName: "activity_log",
  isDefault: false,
});
