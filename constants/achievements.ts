export interface Achievement {
  year: string;
  category: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export const teamAchievements: Achievement[] = [
  {
    year: "2024",
    category: "Milestone",
    title: "50+ Projects Shipped",
    description:
      "Crossed 50 successfully delivered products across AI, Web3, and SaaS — from MVP to full-scale production.",
    metric: "50+",
    metricLabel: "Products Delivered",
  },
  {
    year: "2024",
    category: "Client Impact",
    title: "80% Avg. Response Time Cut",
    description:
      "AI automation solutions we built reduced average client response times by 80%, directly improving customer satisfaction scores.",
    metric: "80%",
    metricLabel: "Response Time Reduced",
  },
  {
    year: "2023",
    category: "Scale",
    title: "$10M+ On-chain Volume",
    description:
      "DeFi and Web3 protocols built by our team collectively processed over $10 million in on-chain transaction volume.",
    metric: "$10M+",
    metricLabel: "On-chain Volume",
  },
  {
    year: "2024",
    category: "Speed",
    title: "14-Day MVP Launches",
    description:
      "Established a repeatable process to take clients from zero to a live, fully functional MVP in under two weeks.",
    metric: "14",
    metricLabel: "Days to MVP",
  },
  {
    year: "2023",
    category: "Growth",
    title: "100% Client Retention",
    description:
      "Every client we've worked with has either extended their engagement or returned for a follow-on project — zero churn.",
    metric: "100%",
    metricLabel: "Client Retention",
  },
  {
    year: "2024",
    category: "Recognition",
    title: "Top Web3 Dev Studio",
    description:
      "Recognised by three independent developer communities as a leading boutique Web3 and AI development studio.",
    metric: "#1",
    metricLabel: "Boutique Studio Rank",
  },
];
