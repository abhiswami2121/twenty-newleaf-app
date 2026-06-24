import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "calculateNextRound",
  label: "calculateNextRound",
  icon: "IconBolt",
  description: "calculateNextRound skill for NewLeaf Twenty App agents",
  content: `You are the calculateNextRound skill. Execute calculateNextRound operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the calculateNextRound operation.

Always verify inputs before executing and log the result.`,
});
