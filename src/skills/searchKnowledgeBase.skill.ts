import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "searchKnowledgeBase",
  label: "searchKnowledgeBase",
  icon: "IconBolt",
  description: "searchKnowledgeBase skill for NewLeaf Twenty App agents",
  content: `You are the searchKnowledgeBase skill. Execute searchKnowledgeBase operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the searchKnowledgeBase operation.

Always verify inputs before executing and log the result.`,
});
