export interface Project {
  image: string;
  name: string;
  tags: string[];
  description: string;
  href: string;
}

export const aiAgentProjects: Project[] = [
  {
    image: "/sample.png",
    name: "Nexus AI",
    tags: ["AI Agents", "Automation"],
    description:
      "Built a multi-agent orchestration system that automates end-to-end customer support workflows, reducing response time by 80%.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "DataMind",
    tags: ["AI Agents", "Data"],
    description:
      "Developed an autonomous data analyst agent that ingests raw datasets and surfaces actionable insights without human intervention.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "FlowBot",
    tags: ["AI Agents", "SaaS"],
    description:
      "Designed and deployed a conversational AI agent integrated into a SaaS platform to handle onboarding, billing queries, and feature discovery.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "Sentinel",
    tags: ["AI Agents", "Security"],
    description:
      "Created an AI-powered security monitoring agent that detects anomalies in real time and triggers automated incident response pipelines.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "LogicLoop",
    tags: ["AI Agents", "Fintech"],
    description:
      "Engineered a financial reconciliation agent that autonomously processes transactions, flags discrepancies, and generates audit-ready reports.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "ScaleOps",
    tags: ["AI Agents", "DevOps"],
    description:
      "Built a DevOps agent that monitors infrastructure, auto-scales resources based on load predictions, and notifies teams of critical events.",
    href: "#",
  },
];
