import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "escalateToAdmin",
  label: "escalateToAdmin",
  icon: "IconBolt",
  description: "escalateToAdmin skill for NewLeaf Twenty App agents",
  content: `You are the escalateToAdmin skill. Execute escalateToAdmin operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the escalateToAdmin operation.

Always verify inputs before executing and log the result.`,
});
