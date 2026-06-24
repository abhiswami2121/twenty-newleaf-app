import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "recordResponse",
  label: "recordResponse",
  icon: "IconBolt",
  description: "recordResponse skill for NewLeaf Twenty App agents",
  content: `You are the recordResponse skill. Execute recordResponse operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the recordResponse operation.

Always verify inputs before executing and log the result.`,
});
