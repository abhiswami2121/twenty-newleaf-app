import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "sendRecoveryLink",
  label: "sendRecoveryLink",
  icon: "IconBolt",
  description: "sendRecoveryLink skill for NewLeaf Twenty App agents",
  content: `You are the sendRecoveryLink skill. Execute sendRecoveryLink operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the sendRecoveryLink operation.

Always verify inputs before executing and log the result.`,
});
