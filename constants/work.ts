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
    image: "/assets/saas/launchpad.png",
    name: "Launchpad",
    tags: ["SaaS", "Productivity"],
    description:
      "Built a multi-tenant project management SaaS with real-time collaboration, custom workflows, and deep analytics for distributed teams.",
    href: "#",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    image: "/assets/saas/billingflow.png",
    name: "BillingFlow",
    tags: ["SaaS", "Fintech"],
    description:
      "Developed a subscription billing platform with usage-based pricing, automated invoicing, and Stripe integration for B2B SaaS companies.",
    href: "#",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    image: "/assets/saas/formforge.png",
    name: "FormForge",
    tags: ["SaaS", "No-code"],
    description:
      "Created a no-code form builder SaaS with conditional logic, webhook integrations, and branded form portals for non-technical teams.",
    href: "#",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    image: "/assets/saas/inboxiq.png",
    name: "InboxIQ",
    tags: ["SaaS", "Email"],
    description:
      "Engineered a smart email management SaaS that auto-categorizes, prioritizes, and drafts responses using AI to cut inbox time in half.",
    href: "#",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    image: "/assets/saas/trackhive.png",
    name: "TrackHive",
    tags: ["SaaS", "Analytics"],
    description:
      "Designed an event analytics SaaS that captures user behavior across web and mobile, with funnel visualizations and retention dashboards.",
    href: "#",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    image: "/assets/saas/shiftsync.png",
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
    image: "/assets/web3/chainvault.png",
    name: "ChainVault",
    tags: ["Web3", "DeFi"],
    description:
      "Built a decentralized asset vault protocol on Ethereum with multi-sig governance, yield strategies, and on-chain risk controls.",
    href: "#",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/assets/web3/mintmesh.png",
    name: "MintMesh",
    tags: ["Web3", "NFT"],
    description:
      "Developed a generative NFT platform with lazy minting, royalty enforcement via ERC-2981, and a curated creator marketplace.",
    href: "#",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/assets/web3/votechain.png",
    name: "VoteChain",
    tags: ["Web3", "DAO"],
    description:
      "Engineered a DAO governance system with token-weighted voting, proposal lifecycle management, and Snapshot integration for off-chain signaling.",
    href: "#",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/assets/web3/bridgex.png",
    name: "BridgeX",
    tags: ["Web3", "Cross-chain"],
    description:
      "Created a cross-chain token bridge supporting EVM-compatible networks with atomic swaps, slippage protection, and real-time fee estimation.",
    href: "#",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/assets/web3/stakestream.png",
    name: "StakeStream",
    tags: ["Web3", "Staking"],
    description:
      "Designed a liquid staking protocol that issues receipt tokens for staked assets, enabling users to stay liquid while earning staking rewards.",
    href: "#",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
  {
    image: "/assets/web3/decentid.png",
    name: "DecentID",
    tags: ["Web3", "Identity"],
    description:
      "Built a decentralized identity solution using DIDs and verifiable credentials, allowing users to own and selectively share their on-chain reputation.",
    href: "#",
    ctaText: "Build Your Web3 Product",
    type: "web3",
  },
];
