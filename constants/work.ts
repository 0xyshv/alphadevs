export type ProjectType = "saas" | "web3" | "ai-agents" | "achievements";

export interface Project {
  icon: string;
  name: string;
  tags: string[];
  description: string;
  href: string;
  ctaText?: string;
  type: ProjectType;
}

export const achievementProjects: Project[] = [
  {
    icon: "Bot",
    name: "Near Bitcoin Agent",
    tags: ["NEAR Protocol", "Bitcoin", "AI Agent"],
    description:
      "Built an AI agent for native Bitcoin L1 transactions via NEAR accounts using chain signatures and NEAR Intents — no bridges, no wrapped tokens required.",
    href: "https://github.com/0xAlphaDevs/Near-Bitcoin-Agent",
    ctaText: "NPR Cohort 1 & 2 🏆",
    type: "achievements",
  },
  {
    icon: "Network",
    name: "Multichain Disperse",
    tags: ["Chain Abstraction", "Multichain", "Web3"],
    description:
      "Built a chain abstraction app that disperses tokens to multiple chains and recipients in one transaction — gas payable on any chain the user prefers.",
    href: "https://github.com/0xAlphaDevs/Multichain-Disperse",
    ctaText: "Chain Abstraction Hack Winner 🏆",
    type: "achievements",
  },
  {
    icon: "GraduationCap",
    name: "Photon",
    tags: ["EdTech", "Theta Network", "Web3"],
    description:
      "Built a decentralized education platform on Theta Network with NFT-based DRM course protection, video via Theta EdgeCloud, and native Photon Token payments.",
    href: "https://github.com/0xAlphaDevs/Photon",
    ctaText: "Theta Hack 🏆",
    type: "achievements",
  },
  {
    icon: "Terminal",
    name: "Starknet Txn Simulator",
    tags: ["Starknet", "AI", "Dev Tools"],
    description:
      "Built an AI-enhanced txn simulator for Starknet — auto-fetches contract ABIs, simulates transactions, and generates human-readable summaries on-chain via Galadriel.",
    href: "https://github.com/0xAlphaDevs/Starknet-Txn-Simulator",
    ctaText: "Web3 AI Hack 🏆",
    type: "achievements",
  },
  {
    icon: "Trophy",
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
    icon: "Code2",
    name: "Coding & Dev Workflow",
    tags: ["AI Agents", "Dev Tooling", "Automation"],
    description:
      "Agents wired into your engineering pipeline for automated PR reviews, test generation, code migration, and inline docs. Ship faster without growing the team.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build a Coding Agent",
    type: "ai-agents",
  },
  {
    icon: "ShoppingBag",
    name: "Commerce & Retail",
    tags: ["AI Agents", "E-commerce", "Personalization"],
    description:
      "Agents that run your catalog around the clock. Product recommendations, dynamic pricing, inventory reordering, and cart recovery all learning from every interaction.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build a Commerce Agent",
    type: "ai-agents",
  },
  {
    icon: "Target",
    name: "Sales & Outbound",
    tags: ["AI Agents", "Sales", "GTM"],
    description:
      "Agents that research prospects, draft personalised outreach, and sync your CRM so your reps spend time closing instead of doing data entry.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build a Sales Agent",
    type: "ai-agents",
  },
  {
    icon: "ScanSearch",
    name: "Research & Intelligence",
    tags: ["AI Agents", "Market Research", "Competitive Intel"],
    description:
      "Agents that track competitors, monitor industry signals, and deliver structured research briefs on demand. Your always-on analyst that never misses a signal.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build a Research Agent",
    type: "ai-agents",
  },
];

export const saasProjects: Project[] = [
  {
    icon: "FileSignature",
    name: "Document & Contract Automation",
    tags: ["SaaS", "AI", "Legal Workflows"],
    description:
      "Smart templates that generate contracts, proposals, and NDAs from your data and route for e-signature. From blank page to countersigned in minutes.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    icon: "MessageSquare",
    name: "AI Customer Support",
    tags: ["SaaS", "AI", "Support"],
    description:
      "Autonomous support agents trained on your knowledge base. They resolve tickets, handle escalations, and surface recurring patterns to your product team.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
  {
    icon: "Boxes",
    name: "Developer Tools & APIs",
    tags: ["SaaS", "Dev Tools", "API"],
    description:
      "SDKs, webhook infrastructure, and API products that make your platform the default integration choice. Great developer experience as a competitive moat.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build Your SaaS",
    type: "saas",
  },
];

export const web3Projects: Project[] = [
  {
    icon: "Banknote",
    name: "Stablecoin Payments",
    tags: ["Web3", "Payments", "Stablecoins"],
    description:
      "B2B invoicing, cross-border payroll, and subscription billing settled on-chain in USDC. Programmable money that moves instantly without correspondent banks or FX fees.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build a Payments Product",
    type: "web3",
  },
  {
    icon: "Landmark",
    name: "Tokenized Real-World Assets",
    tags: ["Web3", "RWA", "Tokenization"],
    description:
      "Bring real estate, private equity, and IP rights on-chain with fractional ownership, automated distributions, and secondary liquidity for assets that were never tradeable.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Tokenize Your Asset",
    type: "web3",
  },
  {
    icon: "BarChart2",
    name: "DeFi Protocols",
    tags: ["Web3", "DeFi", "Lending"],
    description:
      "Custom lending markets, yield vaults, and liquidity protocols built security-first. From architecture and smart contract development through to third-party audit.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build a DeFi Protocol",
    type: "web3",
  },
  {
    icon: "Fingerprint",
    name: "ZK Identity & Compliance",
    tags: ["Web3", "ZK Proofs", "Privacy"],
    description:
      "Privacy-preserving KYC and verifiable credentials that satisfy on-chain compliance requirements without exposing user data. Built for regulated markets from day one.",
    href: "https://calendly.com/0xalphadevs/schedule-meeting",
    ctaText: "Build with ZK",
    type: "web3",
  },
];
