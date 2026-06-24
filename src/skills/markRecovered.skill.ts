import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "markRecovered",
  label: "markRecovered",
  icon: "IconBolt",
  description: "markRecovered skill for NewLeaf Twenty App agents",
  content: `You are the markRecovered skill. Execute markRecovered operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the markRecovered operation.

Always verify inputs before executing and log the result.`,
});
