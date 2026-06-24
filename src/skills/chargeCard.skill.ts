import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "chargeCard",
  label: "chargeCard",
  icon: "IconBolt",
  description: "chargeCard skill for NewLeaf Twenty App agents",
  content: `You are the chargeCard skill. Execute chargeCard operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the chargeCard operation.

Always verify inputs before executing and log the result.`,
});
