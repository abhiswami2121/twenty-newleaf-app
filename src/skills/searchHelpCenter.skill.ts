import { defineSkill } from "twenty-sdk";

export default defineSkill({
  name: "searchHelpCenter",
  label: "searchHelpCenter",
  icon: "IconBolt",
  description: "searchHelpCenter skill for NewLeaf Twenty App agents",
  content: `You are the searchHelpCenter skill. Execute searchHelpCenter operations as directed by the agent.

Input: Context from the agent about the operation needed.
Output: Structured result of the searchHelpCenter operation.

Always verify inputs before executing and log the result.`,
});
