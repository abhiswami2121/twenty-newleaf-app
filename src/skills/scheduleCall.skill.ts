import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "scheduleCall",
  label: "scheduleCall",
  icon: "IconBolt",
  description: "scheduleCall skill for NewLeaf Twenty App agents",
  content: `You are the scheduleCall skill. Execute scheduleCall operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the scheduleCall operation.

Always verify inputs before executing and log the result.`,
});
