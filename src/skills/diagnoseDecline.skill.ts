import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "diagnoseDecline",
  label: "diagnoseDecline",
  icon: "IconBolt",
  description: "diagnoseDecline skill for NewLeaf Twenty App agents",
  content: `You are the diagnoseDecline skill. Execute diagnoseDecline operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the diagnoseDecline operation.

Always verify inputs before executing and log the result.`,
});
