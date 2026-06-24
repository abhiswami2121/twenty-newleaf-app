import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "sendAgreement",
  label: "sendAgreement",
  icon: "IconBolt",
  description: "sendAgreement skill for NewLeaf Twenty App agents",
  content: `You are the sendAgreement skill. Execute sendAgreement operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the sendAgreement operation.

Always verify inputs before executing and log the result.`,
});
