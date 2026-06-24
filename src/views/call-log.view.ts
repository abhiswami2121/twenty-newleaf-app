import { defineView } from "twenty-sdk";

export default defineView({
  name: "call-log",
  label: "call-log",
  type: "table",
  icon: "IconTable",
  objectName: "activity_log",
  isDefault: false,
});
