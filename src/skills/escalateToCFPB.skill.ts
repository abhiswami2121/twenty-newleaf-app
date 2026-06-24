import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "escalateToCFPB",
  label: "escalateToCFPB",
  icon: "IconBolt",
  description: "escalateToCFPB skill for NewLeaf Twenty App agents",
  content: `You are the escalateToCFPB skill. Execute escalateToCFPB operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the escalateToCFPB operation.

Always verify inputs before executing and log the result.`,
});
