import { defineDashboard } from "twenty-sdk";

export default defineDashboard({
  name: "admin-overview",
  label: "admin-overview",
  icon: "IconDashboard",
  description: "admin-overview dashboard for NewLeaf Twenty App",
  widgets: [
    { type: "metric", label: "Total Customers", position: { x: 0, y: 0, w: 3, h: 2 } },
    { type: "metric", label: "Active Subscriptions", position: { x: 3, y: 0, w: 3, h: 2 } },
    { type: "chart", label: "Revenue Trend", position: { x: 0, y: 2, w: 6, h: 4 } },
  ],
});
