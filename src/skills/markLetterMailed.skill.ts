import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "markLetterMailed",
  label: "markLetterMailed",
  icon: "IconBolt",
  description: "markLetterMailed skill for NewLeaf Twenty App agents",
  content: `You are the markLetterMailed skill. Execute markLetterMailed operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the markLetterMailed operation.

Always verify inputs before executing and log the result.`,
});
