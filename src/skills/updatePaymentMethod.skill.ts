import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "updatePaymentMethod",
  label: "updatePaymentMethod",
  icon: "IconBolt",
  description: "updatePaymentMethod skill for NewLeaf Twenty App agents",
  content: `You are the updatePaymentMethod skill. Execute updatePaymentMethod operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the updatePaymentMethod operation.

Always verify inputs before executing and log the result.`,
});
