import { defineView } from "twenty-sdk";

export default defineView({
  name: "email-sms-log",
  label: "email-sms-log",
  type: "table",
  icon: "IconTable",
  objectName: "activity_log",
  isDefault: false,
});
