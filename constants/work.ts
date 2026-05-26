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
      "Built an AI agent for native Bitcoin L1 transactions via NEAR accounts using chain signatures and NEAR Intents — no bridges, no wrapped tokens required.",
    href: "https://github.com/0xAlphaDevs/Near-Bitcoin-Agent",
    ctaText: "NPR Cohort 1 & 2 🏆",
    type: "achievements",
  },
  {
    image: "/assets/achivements/multichain-disperse.png",
    name: "Multichain Disperse",
    tags: ["Chain Abstraction", "Multichain", "Web3"],
    description:
      "Built a chain abstraction app that disperses tokens to multiple chains and recipients in one transaction — gas payable on any chain the user prefers.",
    href: "https://github.com/0xAlphaDevs/Multichain-Disperse",
    ctaText: "Chain Abstraction Hack Winner 🏆",
    type: "achievements",
  },
  {
    image: "/assets/achivements/photon.png",
    name: "Photon",
    tags: ["EdTech", "Theta Network", "Web3"],
    description:
      "Built a decentralized education platform on Theta Network with NFT-based DRM course protection, video via Theta EdgeCloud, and native Photon Token payments.",
    href: "https://github.com/0xAlphaDevs/Photon",
    ctaText: "Theta Hack 🏆",
    type: "achievements",
  },
  {
    image: "/assets/achivements/starknet-txn-simulator.png",
    name: "Starknet Txn Simulator",
    tags: ["Starknet", "AI", "Dev Tools"],
    description:
      "Built an AI-enhanced txn simulator for Starknet — auto-fetches contract ABIs, simulates transactions, and generates human-readable summaries on-chain via Galadriel.",
    href: "https://github.com/0xAlphaDevs/Starknet-Txn-Simulator",
    ctaText: "Web3 AI Hack 🏆",
    type: "achievements",
  },
  {
    image: "/assets/achivements/game-of-pots.png",
    name: "Game of Pots",
    tags: ["DeFi", "Ethena", "No-Loss Lottery"],
    description:
      "Built a no-loss lottery on Ethena's sUSDe — pooled deposits earn staking rewards, Conduit VRF picks winners transparently, and the principal stays withdrawable.",
    href: "https://github.com/0xAlphaDevs/Game-of-Pots",
    ctaText: "Ethena Hackathon 🏆",
    type: "achievements",
  },
];

export const aiAgentProjects: Project[] = [
  {
    image: "/assets/ai-agents/defi-risk-monitor.png",
    name: "DeFi Risk Monitor",
    tags: ["AI Agents", "DeFi", "Risk"],
    description:
      "Autonomous agent monitoring on-chain positions across DeFi protocols, flagging liquidation risk in real time and executing rebalances before a position gets wiped.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Book a Discovery Call",
    type: "ai-agents",
  },
  {
    image: "/assets/ai-agents/contract-audit-agent.png",
    name: "Contract Audit Agent",
    tags: ["AI Agents", "Security", "Web3"],
    description:
      "AI agent that scans Solidity and Cairo contracts for vulnerability patterns, generates structured audit reports, and surfaces prioritised remediations for dev teams.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Book a Discovery Call",
    type: "ai-agents",
  },
  {
    image: "/assets/ai-agents/on-chain-alpha-agent.png",
    name: "On-chain Alpha Agent",
    tags: ["AI Agents", "Research", "DeFi"],
    description:
      "Monitors whale wallet movements, governance proposals, and protocol TVL shifts across chains to surface actionable trading signals and daily on-chain research digests.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Book a Discovery Call",
    type: "ai-agents",
  },
];

export const saasProjects: Project[] = [
  {
    image: "/assets/saas/documint.png",
    name: "DocuMint",
    tags: ["SaaS", "Productivity", "AI"],
    description:
      "AI-powered document platform that generates contracts, proposals, and NDAs from smart templates , populate variables in seconds and send for e-signature.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    image: "/assets/saas/feedbackloop.png",
    name: "FeedbackLoop",
    tags: ["SaaS", "Analytics", "AI"],
    description:
      "Aggregates customer feedback from email, Slack, and support tools, then uses AI to cluster, tag, and surface the top product issues to your team weekly.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    image: "/assets/saas/jira-summarizer.png",
    name: "Jira Summarizer",
    tags: ["SaaS", "Productivity", "AI"],
    description:
      "Built a Jira plugin that auto-summarises issue descriptions and generates PR summaries using Llama 2, cutting documentation overhead for engineering teams.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
];

export const web3Projects: Project[] = [
  {
    image: "/assets/web3/savendpay.png",
    name: "SavendPay",
    tags: ["Web3", "Bitcoin", "DeFi"],
    description:
      "Bitcoin-native app on Mezo, deposit BTC as collateral, mint MUSD stablecoin, and spend it daily via an AI allocator managing your save/spend balance.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/assets/web3/a2a-capital.png",
    name: "A2A Capital",
    tags: ["Web3", "AI Agents", "DeFi"],
    description:
      "Autonomous portfolio system where AI agents coordinate via A2A protocols, pay for market signals using x402, and continuously rebalance BTC, ETH, and USDC.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/assets/web3/streamline.png",
    name: "Streamline",
    tags: ["Web3", "DeFi", "Payments"],
    description:
      "Built a real-time token streaming protocol for continuous payroll, vesting, and subscriptions, funds flow per second on-chain rather than in lump-sum transactions.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/assets/web3/zkcreditscore.png",
    name: "zkCreditScore",
    tags: ["Web3", "ZK Proofs", "Privacy"],
    description:
      "Zero-knowledge credit scoring that lets users prove creditworthiness to lenders on-chain without revealing any underlying financial data or wallet history.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
];
