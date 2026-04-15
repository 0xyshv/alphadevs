export interface WhyUsItem {
  index: string;
  title: string;
  about: string;
  highlights: string[];
}

export const whyUsItems: WhyUsItem[] = [
  {
    index: "01",
    title: "Full-Stack Depth",
    about:
      "We don't hand off work between disconnected teams. Every engineer at AlphaDevs is capable across the full stack — from database schema design and API architecture to pixel-perfect UI and deployment pipelines. This means fewer handoffs, faster decisions, and products that actually hold together.",
    highlights: [
      "Frontend (React, Next.js)",
      "Backend (Node, Python, Go)",
      "Infrastructure (AWS, GCP, Vercel)",
      "Mobile (React Native)",
    ],
  },
  {
    index: "02",
    title: "AI-Native Builds",
    about:
      "AI isn't a feature we bolt on — it's baked into how we think about products from day one. We've shipped multi-agent orchestration systems, LLM-powered workflows, and RAG pipelines that run reliably in production. When AI makes sense for your problem, we know how to build it right.",
    highlights: [
      "LLM Integration (OpenAI, Anthropic, Gemini)",
      "Agentic Workflows",
      "RAG & Vector Search",
      "Fine-tuning & Evals",
    ],
  },
  {
    index: "03",
    title: "Web3 Ready",
    about:
      "We've built on-chain from the start — smart contracts, token protocols, DeFi primitives, and wallet-native UX. Whether you need a consumer dApp or a complex protocol, we know the tradeoffs between chains, understand gas optimization, and ship secure, auditable code.",
    highlights: [
      "Solidity / EVM",
      "DeFi & Staking Protocols",
      "NFT & DAO Infrastructure",
      "Cross-chain Bridges",
    ],
  },
  {
    index: "04",
    title: "Rapid Delivery",
    about:
      "Speed without recklessness. We ship working software in weeks, not quarters, because we keep scope tight, move in small iterations, and don't wait for perfection before we ship. Our process is built around getting real product in front of real users as fast as possible.",
    highlights: [
      "1-week sprints",
      "MVP in 2–4 weeks",
      "CI/CD from day one",
      "Weekly demos",
    ],
  },
  {
    index: "05",
    title: "Full Transparency",
    about:
      "No black boxes. You get access to our task board, you're in the same communication channels as the engineers, and we give you a demo every single week. We don't hide behind project managers or status reports — you always know exactly where things stand.",
    highlights: [
      "Shared Notion / Linear board",
      "Weekly video demos",
      "Direct engineer access",
      "Clear scope agreements",
    ],
  },
  {
    index: "06",
    title: "Long-term Partnership",
    about:
      "We're not a vendor you use once and move on from. Most of our clients return for their next product, refer us to their network, or keep us on retainer. We invest in understanding your business so that every engagement gets faster, sharper, and more aligned with what you're actually trying to build.",
    highlights: [
      "Ongoing retainer options",
      "Dedicated point of contact",
      "Post-launch support",
      "Growth-stage scaling",
    ],
  },
];
