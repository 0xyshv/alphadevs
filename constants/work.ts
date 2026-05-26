export type ProjectType = "saas" | "web3" | "ai-agents" | "achievements";

export interface Project {
  image: string;
  name: string;
  tags: string[];
  description: string;
  href: string;
  ctaText?: string;
  type: ProjectType;
}
export const achievementProjects: Project[] = [
  {
    image: "/assets/achivements/bitcoin-agent.png",
    name: "Near Bitcoin Agent",
    tags: ["NEAR Protocol", "Bitcoin", "AI Agent"],
    description:
      "Built an AI agent enabling native Bitcoin L1 transactions through NEAR accounts using chain signatures and NEAR Intents, no bridges or wrapped tokens needed.",
    href: "https://github.com/0xAlphaDevs/Near-Bitcoin-Agent",
    ctaText: "NPR Cohort 1 & 2 🏆",
    type: "achievements",
  },
  {
    image: "/assets/achivements/multichain-disperse.png",
    name: "Multichain Disperse",
    tags: ["Chain Abstraction", "Multichain", "Web3"],
    description:
      "Built a chain abstraction app to disperse tokens across multiple chains and recipients in a single transaction — pay gas on any preferred chain.",
    href: "https://github.com/0xAlphaDevs/Multichain-Disperse",
    ctaText: "Chain Abstraction Hack Winner 🏆",
    type: "achievements",
  },
  {
    image: "/assets/achivements/photon.png",
    name: "Photon",
    tags: ["EdTech", "Theta Network", "Web3"],
    description:
      "Built a decentralized platform on Theta with NFT-based DRM-protected courses, decentralized video via Theta EdgeCloud, and payments in Photon Tokens.",
    href: "https://github.com/0xAlphaDevs/Photon",
    ctaText: "Theta Hack 🏆",
    type: "achievements",
  },
  {
    image: "/assets/achivements/starknet-txn-simulator.png",
    name: "Starknet Txn Simulator",
    tags: ["Starknet", "AI", "Dev Tools"],
    description:
      "Built an AI-enhanced transaction simulator on Starknet — auto-fetches ABIs, simulates txns, and generates on-chain AI summaries of transaction behaviour via Galadriel.",
    href: "https://github.com/0xAlphaDevs/Starknet-Txn-Simulator",
    ctaText: "Web3 AI Hack 🏆",
    type: "achievements",
  },
  {
    image: "/assets/achivements/game-of-pots.png",
    name: "Game of Pots",
    tags: ["DeFi", "Ethena", "No-Loss Lottery"],
    description:
      "Built a no-loss lottery platform on Ethena's sUSDe — users pool deposits that earn staking rewards, with winners picked via Conduit VRF and principal always withdrawable.",
    href: "https://github.com/0xAlphaDevs/Game-of-Pots",
    ctaText: "Ethena Hackathon 🏆",
    type: "achievements",
  },
];

export const saasProjects: Project[] = [
  {
    image: "/sample.png",
    name: "Launchpad",
    tags: ["SaaS", "Productivity"],
    description:
      "Built a multi-tenant project management SaaS with real-time collaboration, custom workflows, and deep analytics for distributed teams.",
    href: "#",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    image: "/sample.png",
    name: "BillingFlow",
    tags: ["SaaS", "Fintech"],
    description:
      "Developed a subscription billing platform with usage-based pricing, automated invoicing, and Stripe integration for B2B SaaS companies.",
    href: "#",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    image: "/sample.png",
    name: "FormForge",
    tags: ["SaaS", "No-code"],
    description:
      "Created a no-code form builder SaaS with conditional logic, webhook integrations, and branded form portals for non-technical teams.",
    href: "#",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    image: "/sample.png",
    name: "InboxIQ",
    tags: ["SaaS", "Email"],
    description:
      "Engineered a smart email management SaaS that auto-categorizes, prioritizes, and drafts responses using AI to cut inbox time in half.",
    href: "#",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    image: "/sample.png",
    name: "TrackHive",
    tags: ["SaaS", "Analytics"],
    description:
      "Designed an event analytics SaaS that captures user behavior across web and mobile, with funnel visualizations and retention dashboards.",
    href: "#",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    image: "/sample.png",
    name: "ShiftSync",
    tags: ["SaaS", "HR"],
    description:
      "Built a workforce scheduling SaaS for shift-based businesses, featuring drag-and-drop planning, auto-conflict detection, and SMS notifications.",
    href: "#",
    ctaText: "Build Your SaaS",
    type: "saas",
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
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/sample.png",
    name: "MintMesh",
    tags: ["Web3", "NFT"],
    description:
      "Developed a generative NFT platform with lazy minting, royalty enforcement via ERC-2981, and a curated creator marketplace.",
    href: "#",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/sample.png",
    name: "VoteChain",
    tags: ["Web3", "DAO"],
    description:
      "Engineered a DAO governance system with token-weighted voting, proposal lifecycle management, and Snapshot integration for off-chain signaling.",
    href: "#",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/sample.png",
    name: "BridgeX",
    tags: ["Web3", "Cross-chain"],
    description:
      "Created a cross-chain token bridge supporting EVM-compatible networks with atomic swaps, slippage protection, and real-time fee estimation.",
    href: "#",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/sample.png",
    name: "StakeStream",
    tags: ["Web3", "Staking"],
    description:
      "Designed a liquid staking protocol that issues receipt tokens for staked assets, enabling users to stay liquid while earning staking rewards.",
    href: "#",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/sample.png",
    name: "DecentID",
    tags: ["Web3", "Identity"],
    description:
      "Built a decentralized identity solution using DIDs and verifiable credentials, allowing users to own and selectively share their on-chain reputation.",
    href: "#",
    ctaText: "Build Your Web3 Product",
    type: "web3",
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
    ctaText: "Build Your AI Agent",
    type: "ai-agents",
  },
  {
    image: "/sample.png",
    name: "DataMind",
    tags: ["AI Agents", "Data"],
    description:
      "Developed an autonomous data analyst agent that ingests raw datasets and surfaces actionable insights without human intervention.",
    href: "#",
    ctaText: "Build Your AI Agent",
    type: "ai-agents",
  },
  {
    image: "/sample.png",
    name: "FlowBot",
    tags: ["AI Agents", "SaaS"],
    description:
      "Designed and deployed a conversational AI agent integrated into a SaaS platform to handle onboarding, billing queries, and feature discovery.",
    href: "#",
    ctaText: "Build Your AI Agent",
    type: "ai-agents",
  },
  {
    image: "/sample.png",
    name: "Sentinel",
    tags: ["AI Agents", "Security"],
    description:
      "Created an AI-powered security monitoring agent that detects anomalies in real time and triggers automated incident response pipelines.",
    href: "#",
    ctaText: "Build Your AI Agent",
    type: "ai-agents",
  },
  {
    image: "/sample.png",
    name: "LogicLoop",
    tags: ["AI Agents", "Fintech"],
    description:
      "Engineered a financial reconciliation agent that autonomously processes transactions, flags discrepancies, and generates audit-ready reports.",
    href: "#",
    ctaText: "Build Your AI Agent",
    type: "ai-agents",
  },
  {
    image: "/sample.png",
    name: "ScaleOps",
    tags: ["AI Agents", "DevOps"],
    description:
      "Built a DevOps agent that monitors infrastructure, auto-scales resources based on load predictions, and notifies teams of critical events.",
    href: "#",
    ctaText: "Build Your AI Agent",
    type: "ai-agents",
  },
];
