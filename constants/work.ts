export interface Project {
  image: string;
  name: string;
  tags: string[];
  description: string;
  href: string;
}

export const saasProjects: Project[] = [
  {
    image: "/sample.png",
    name: "Launchpad",
    tags: ["SaaS", "Productivity"],
    description:
      "Built a multi-tenant project management SaaS with real-time collaboration, custom workflows, and deep analytics for distributed teams.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "BillingFlow",
    tags: ["SaaS", "Fintech"],
    description:
      "Developed a subscription billing platform with usage-based pricing, automated invoicing, and Stripe integration for B2B SaaS companies.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "FormForge",
    tags: ["SaaS", "No-code"],
    description:
      "Created a no-code form builder SaaS with conditional logic, webhook integrations, and branded form portals for non-technical teams.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "InboxIQ",
    tags: ["SaaS", "Email"],
    description:
      "Engineered a smart email management SaaS that auto-categorizes, prioritizes, and drafts responses using AI to cut inbox time in half.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "TrackHive",
    tags: ["SaaS", "Analytics"],
    description:
      "Designed an event analytics SaaS that captures user behavior across web and mobile, with funnel visualizations and retention dashboards.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "ShiftSync",
    tags: ["SaaS", "HR"],
    description:
      "Built a workforce scheduling SaaS for shift-based businesses, featuring drag-and-drop planning, auto-conflict detection, and SMS notifications.",
    href: "#",
  },
];

export const web3Projects: Project[] = [
  {
    image: "/sample.png",
    name: "ChainVault",
    tags: ["Web3", "DeFi"],
    description:
      "Built a decentralized asset vault protocol on Ethereum with multi-sig governance, yield strategies, and on-chain risk controls.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "MintMesh",
    tags: ["Web3", "NFT"],
    description:
      "Developed a generative NFT platform with lazy minting, royalty enforcement via ERC-2981, and a curated creator marketplace.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "VoteChain",
    tags: ["Web3", "DAO"],
    description:
      "Engineered a DAO governance system with token-weighted voting, proposal lifecycle management, and Snapshot integration for off-chain signaling.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "BridgeX",
    tags: ["Web3", "Cross-chain"],
    description:
      "Created a cross-chain token bridge supporting EVM-compatible networks with atomic swaps, slippage protection, and real-time fee estimation.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "StakeStream",
    tags: ["Web3", "Staking"],
    description:
      "Designed a liquid staking protocol that issues receipt tokens for staked assets, enabling users to stay liquid while earning staking rewards.",
    href: "#",
  },
  {
    image: "/sample.png",
    name: "DecentID",
    tags: ["Web3", "Identity"],
    description:
      "Built a decentralized identity solution using DIDs and verifiable credentials, allowing users to own and selectively share their on-chain reputation.",
    href: "#",
  },
];

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
