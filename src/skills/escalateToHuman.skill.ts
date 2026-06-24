import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "escalateToHuman",
  label: "escalateToHuman",
  icon: "IconBolt",
  description: "escalateToHuman skill for NewLeaf Twenty App agents",
  content: `You are the escalateToHuman skill. Execute escalateToHuman operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the escalateToHuman operation.

Always verify inputs before executing and log the result.`,
});
