export interface Agent {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  priceLabel: string;
  rating: number;
  reviewCount: number;
  runsPerDay: number;
  version: string;
  category: string;
  subCategory: string;
  capabilities: { label: string; score: number }[];
  integrations: string[];
  iconSvg: string;
  publisher: string;
  updatedAt: string;
  pricingPlans: {
    name: string;
    price: string;
    popular?: boolean;
    features: string[];
  }[];
  reviews: {
    reviewer: string;
    role: string;
    company: string;
    date: string;
    rating: number;
    text: string;
  }[];
  changelog: {
    version: string;
    date: string;
    notes: string;
  }[];
}

export const agents: Agent[] = [
  {
    id: "codex",
    name: "Codex",
    slug: "codex",
    tagline: "Production code agent, 12 languages",
    description: "Codex is a production-grade AI coding agent purpose-built for teams shipping daily. It writes, reviews, and refactors code across 12 languages — TypeScript, Python, Rust, Go, Java, C#, PHP, Ruby, Swift, Kotlin, C++, and SQL.",
    price: 29,
    priceLabel: "/seat · mo",
    rating: 4.8,
    reviewCount: 1240,
    runsPerDay: 218000,
    version: "2.8.1",
    category: "Coding",
    subCategory: "Autonomous",
    capabilities: [
      { label: "Code quality", score: 94 },
      { label: "Speed", score: 88 },
      { label: "Context recall", score: 82 },
      { label: "Language support", score: 76 },
      { label: "Security", score: 91 },
    ],
    integrations: ["VS Code", "JetBrains", "GitHub", "GitLab", "CLI", "API"],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="3" y="3" width="18" height="14" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    publisher: "AgentArcade Labs",
    updatedAt: "Apr 2026",
    pricingPlans: [
      { name: "Solo", price: "$29/mo", features: ["1 user seat", "2 concurrent sessions", "5,000 requests/month", "VS Code + GitHub", "Community support"] },
      { name: "Team", price: "$49/mo", popular: true, features: ["5 user seats", "10 concurrent sessions", "25,000 requests/month", "All integrations", "Autonomous PR review", "Slack + email support"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited seats", "Unlimited sessions", "Unlimited requests", "Custom integrations", "Dedicated infra", "On-premise option", "SAML / SCIM", "Priority support"] },
    ],
    reviews: [
      { reviewer: "Mira Chen", role: "Engineering Lead", company: "Scale AI", date: "2 weeks ago", rating: 5, text: "We replaced two offshore QA contractors with Codex PR reviews. It catches edge cases our team was missing. The Go and Rust support is noticeably better than alternatives." },
      { reviewer: "David Okonkwo", role: "Full-stack", company: "Freelance", date: "3 weeks ago", rating: 5, text: "Context recall is the differentiator — it remembers my project conventions across sessions. RefactorKit integration is seamless." },
      { reviewer: "Sarah Kim", role: "Tech Lead", company: "Vercel", date: "1 month ago", rating: 4, text: "Strong for TypeScript and Python. Would like deeper C++ template awareness. Customer support responded within 4 hours to a question about monorepo config." },
    ],
    changelog: [
      { version: "v2.8.1", date: "Apr 22, 2026", notes: "Fixed memory leak in long-running review sessions. Improved Rust borrow-checker analysis." },
      { version: "v2.8.0", date: "Apr 8, 2026", notes: "Added GitLab MR support. Context window expanded to 128K. New /explain command." },
      { version: "v2.7.0", date: "Mar 15, 2026", notes: "Native Rust support (experimental). PR Pilot integration for batch reviews." },
      { version: "v2.6.0", date: "Feb 20, 2026", notes: "Multi-file refactoring (extract module, inline variable, rename across files)." },
    ],
  },
  {
    id: "claude-research",
    name: "Claude Research",
    slug: "claude-research",
    tagline: "Deep research, structured briefs",
    description: "Claude Research is a deep research agent that reads documents, synthesises findings, and produces structured briefs. It connects to Slack, Notion, Google Drive, and email — turning scattered information into actionable intelligence.",
    price: 39,
    priceLabel: "/seat · mo",
    rating: 4.9,
    reviewCount: 2180,
    runsPerDay: 156000,
    version: "1.6.3",
    category: "Research",
    subCategory: "Writing",
    capabilities: [
      { label: "Analysis depth", score: 96 },
      { label: "Speed", score: 84 },
      { label: "Source quality", score: 91 },
      { label: "Brief structure", score: 88 },
      { label: "Integration", score: 79 },
    ],
    integrations: ["Slack", "Notion", "Google Drive", "Email", "GitHub"],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 2a10 10 0 0 0 0 20"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10"/><path d="M12 2a15 15 0 0 0-4 10 15 15 0 0 0 4 10"/></svg>`,
    publisher: "Anthropic",
    updatedAt: "Apr 2026",
    pricingPlans: [
      { name: "Starter", price: "$39/mo", features: ["1 user", "10 briefs/month", "Slack + Notion", "Email reports", "Standard support"] },
      { name: "Team", price: "$79/mo", popular: true, features: ["5 users", "Unlimited briefs", "All integrations", "Shared library", "Priority support"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited users", "Custom sources", "SAML/SSO", "Dedicated support", "SLA"] },
    ],
    reviews: [
      { reviewer: "Elena Voss", role: "Director of Research", company: "Global Insights", date: "2 weeks ago", rating: 5, text: "Reduced our research cycle from days to hours. The source synthesis is surprisingly nuanced. We use it for competitive intelligence briefs." },
      { reviewer: "Raj Patel", role: "Strategy Lead", company: "Growth Partners", date: "3 weeks ago", rating: 5, text: "Connected to our Slack and Notion — now every Monday morning we get a synthesized brief of everything important from the past week. Game changer." },
    ],
    changelog: [
      { version: "v1.6.3", date: "Apr 18, 2026", notes: "Improved citation accuracy. New Google Drive folder watch mode." },
      { version: "v1.6.0", date: "Mar 28, 2026", notes: "Multi-source synthesis engine rewrite. Added source quality scoring." },
    ],
  },
  {
    id: "bug-sweep",
    name: "BugSweep",
    slug: "bug-sweep",
    tagline: "Automated bug detection, PR diff scans",
    description: "BugSweep automatically scans your pull requests for potential bugs, regressions, and anti-patterns. It integrates into your CI pipeline and provides actionable feedback in under 30 seconds.",
    price: 19,
    priceLabel: "/mo",
    rating: 4.6,
    reviewCount: 890,
    runsPerDay: 145000,
    version: "1.4.2",
    category: "Coding",
    subCategory: "CI/CD",
    capabilities: [
      { label: "Bug detection", score: 92 },
      { label: "False positive rate", score: 87 },
      { label: "Speed", score: 95 },
      { label: "Language support", score: 78 },
    ],
    integrations: ["GitHub Actions", "GitLab CI", "Jenkins", "VS Code"],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><circle cx="12" cy="8" r="0.5" fill="currentColor"/></svg>`,
    publisher: "AgentArcade",
    updatedAt: "May 2026",
    pricingPlans: [
      { name: "Starter", price: "$19/mo", features: ["100 scans/mo", "5 repos", "GitHub integration", "Email alerts"] },
      { name: "Pro", price: "$49/mo", popular: true, features: ["Unlimited scans", "Unlimited repos", "All CI platforms", "Slack notifications", "Custom rules"] },
      { name: "Enterprise", price: "Custom", features: ["On-prem", "Custom rules engine", "Audit trail", "SSO", "SLA"] },
    ],
    reviews: [
      { reviewer: "Priya Patel", role: "DevOps Lead", company: "CloudStack", date: "May 2026", rating: 5, text: "Caught a subtle race condition that our entire team missed. Paid for itself in the first week." },
      { reviewer: "Tom Bradley", role: "Full Stack Dev", company: "WebCraft", date: "May 2026", rating: 4, text: "Low false positive rate compared to other tools. The PR integration is seamless." },
    ],
    changelog: [
      { version: "v1.4.2", date: "May 28, 2026", notes: "Reduced false positive rate by 15%. New Rust analysis module." },
      { version: "v1.4.0", date: "May 10, 2026", notes: "Added Python type-safety checks. Performance regression detection." },
    ],
  },
  {
    id: "pr-pilot",
    name: "PR Pilot",
    slug: "pr-pilot",
    tagline: "PR reviewer, code quality + security",
    description: "PR Pilot automates code review at scale. It analyses code quality, test coverage, and security, posting inline comments autonomously before human reviewers get involved.",
    price: 14,
    priceLabel: "/mo",
    rating: 4.5,
    reviewCount: 720,
    runsPerDay: 98000,
    version: "2.1.0",
    category: "Coding",
    subCategory: "Review",
    capabilities: [
      { label: "Review speed", score: 96 },
      { label: "Security detection", score: 88 },
      { label: "Code quality", score: 85 },
      { label: "Context awareness", score: 79 },
    ],
    integrations: ["GitHub", "GitLab", "Bitbucket", "Slack"],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    publisher: "AgentArcade",
    updatedAt: "May 2026",
    pricingPlans: [
      { name: "Free", price: "$0/mo", features: ["50 reviews/mo", "3 repos", "Basic quality checks"] },
      { name: "Pro", price: "$14/mo", popular: true, features: ["Unlimited reviews", "Unlimited repos", "Security scanning", "Custom rules"] },
      { name: "Team", price: "$39/mo", features: ["Team dashboard", "Slack integration", "Enforcement policies"] },
    ],
    reviews: [
      { reviewer: "Lisa Wang", role: "Engineering Manager", company: "FinSync", date: "May 2026", rating: 5, text: "Cut our average review time from 4 hours to 45 minutes. The security checks alone are worth it." },
    ],
    changelog: [
      { version: "v2.1.0", date: "May 25, 2026", notes: "New security vulnerability scanner. Custom rules engine now supports regex patterns." },
    ],
  },
  {
    id: "doc-smith",
    name: "DocSmith",
    slug: "doc-smith",
    tagline: "Documentation from codebase analysis",
    description: "DocSmith generates and maintains documentation from codebase analysis. It keeps READMEs, API docs, and changelogs in sync with every commit, so your docs never drift from your code.",
    price: 12,
    priceLabel: "/mo",
    rating: 4.7,
    reviewCount: 560,
    runsPerDay: 67000,
    version: "1.8.3",
    category: "Coding",
    subCategory: "Docs",
    capabilities: [
      { label: "Coverage", score: 93 },
      { label: "Accuracy", score: 90 },
      { label: "Readability", score: 86 },
      { label: "Format support", score: 82 },
    ],
    integrations: ["GitHub", "GitLab", "Notion", "Confluence"],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    publisher: "AgentArcade",
    updatedAt: "May 2026",
    pricingPlans: [
      { name: "Starter", price: "$12/mo", features: ["1 repo", "Markdown output", "API docs"] },
      { name: "Pro", price: "$29/mo", popular: true, features: ["5 repos", "Notion + Confluence sync", "Architecture diagrams"] },
    ],
    reviews: [
      { reviewer: "Ryan O'Brien", role: "CTO", company: "BuildRight", date: "May 2026", rating: 5, text: "Finally, documentation that stays in sync with code. Our onboarding time dropped by 40%." },
    ],
    changelog: [
      { version: "v1.8.3", date: "May 22, 2026", notes: "Improved diagram generation. New Mermaid flowchart support." },
    ],
  },
  {
    id: "refactor-kit",
    name: "RefactorKit",
    slug: "refactor-kit",
    tagline: "AST-based code restructure",
    description: "Semi-automated code restructure — identifies extract-method, rename, and module-split candidates with AST precision. RefactorKit transforms your codebase safely and confidently.",
    price: 34,
    priceLabel: "/mo",
    rating: 4.4,
    reviewCount: 340,
    runsPerDay: 24000,
    version: "3.0.1",
    category: "Coding",
    subCategory: "Refactor",
    capabilities: [
      { label: "Safety", score: 95 },
      { label: "Speed", score: 84 },
      { label: "Language support", score: 80 },
      { label: "Complexity handling", score: 88 },
    ],
    integrations: ["VS Code", "JetBrains", "CLI", "GitHub"],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    publisher: "AgentArcade",
    updatedAt: "May 2026",
    pricingPlans: [
      { name: "Individual", price: "$34/mo", features: ["3 repos", "All languages", "VS Code + CLI", "Basic codemods"] },
      { name: "Team", price: "$79/mo", popular: true, features: ["Unlimited repos", "Custom codemod builder", "Safety validation", "Team templates"] },
    ],
    reviews: [
      { reviewer: "Diana Foster", role: "Architect", company: "MicroServices Co", date: "May 2026", rating: 4, text: "Renamed a package across 200+ files in seconds. The safety analysis caught two edge cases I would have missed." },
    ],
    changelog: [
      { version: "v3.0.1", date: "May 20, 2026", notes: "New safety validation engine. AST caching for 10x faster repeated operations." },
    ],
  },
  {
    id: "test-gen",
    name: "TestGen",
    slug: "test-gen",
    tagline: "Autonomous test writer",
    description: "TestGen automatically generates unit tests, integration tests, and edge case coverage from your codebase. It analyses function signatures and usage patterns to produce production-quality test suites.",
    price: 22,
    priceLabel: "/mo",
    rating: 4.3,
    reviewCount: 480,
    runsPerDay: 52000,
    version: "2.4.0",
    category: "Coding",
    subCategory: "Testing",
    capabilities: [
      { label: "Coverage", score: 91 },
      { label: "Accuracy", score: 85 },
      { label: "Edge case detection", score: 83 },
      { label: "Framework support", score: 78 },
    ],
    integrations: ["Jest", "Mocha", "PyTest", "JUnit", "GitHub"],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
    publisher: "AgentArcade",
    updatedAt: "May 2026",
    pricingPlans: [
      { name: "Starter", price: "$22/mo", features: ["1 repo", "Jest + PyTest", "Unit tests"] },
      { name: "Pro", price: "$49/mo", popular: true, features: ["5 repos", "All frameworks", "Integration tests", "Edge case expansion"] },
    ],
    reviews: [
      { reviewer: "James Wilson", role: "QA Lead", company: "ShipFast", date: "May 2026", rating: 4, text: "Generated 200 tests in under a minute. Some needed tweaking but the coverage was impressive." },
    ],
    changelog: [
      { version: "v2.4.0", date: "May 18, 2026", notes: "New edge case expansion engine. Support for Playwright e2e tests." },
    ],
  },
  {
    id: "vault-keeper",
    name: "Vault Keeper",
    slug: "vault-keeper",
    tagline: "Secrets/config auditor",
    description: "Vault Keeper scans your repos, CI pipelines, and infra config for exposed secrets, hardcoded credentials, and misconfigured permissions. It prevents credential leaks before they happen.",
    price: 39,
    priceLabel: "/mo",
    rating: 4.8,
    reviewCount: 620,
    runsPerDay: 89000,
    version: "2.1.3",
    category: "Security",
    subCategory: "Coding",
    capabilities: [
      { label: "Detection rate", score: 97 },
      { label: "False positives", score: 92 },
      { label: "Scan speed", score: 90 },
      { label: "Compliance", score: 86 },
    ],
    integrations: ["GitHub", "GitLab", "AWS", "GCP", "Slack", "PagerDuty"],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    publisher: "AgentArcade",
    updatedAt: "May 2026",
    pricingPlans: [
      { name: "Team", price: "$39/mo", features: ["10 repos", "GitHub + GitLab", "Slack alerts", "Compliance reports"] },
      { name: "Enterprise", price: "Custom", popular: true, features: ["Unlimited repos", "All integrations", "Custom policies", "On-prem option"] },
    ],
    reviews: [
      { reviewer: "Mike Torres", role: "Security Engineer", company: "SafeGate", date: "May 2026", rating: 5, text: "Found an AWS key in a public repo within 30 seconds of connecting. Essential security tool." },
    ],
    changelog: [
      { version: "v2.1.3", date: "May 16, 2026", notes: "New entropy-based detection for previously unknown secret patterns." },
    ],
  },
  {
    id: "api-bridge",
    name: "APIBridge",
    slug: "api-bridge",
    tagline: "API integration, SDK wrappers",
    description: "APIBridge generates type-safe API clients and SDK wrappers from OpenAPI specs, GraphQL schemas, or by observing network traffic. It keeps integrations in sync as APIs evolve.",
    price: 16,
    priceLabel: "/mo",
    rating: 4.5,
    reviewCount: 390,
    runsPerDay: 41000,
    version: "1.6.2",
    category: "Coding",
    subCategory: "API",
    capabilities: [
      { label: "Type accuracy", score: 94 },
      { label: "Speed", score: 91 },
      { label: "Protocol support", score: 84 },
      { label: "Code quality", score: 82 },
    ],
    integrations: ["OpenAPI", "GraphQL", "gRPC", "VS Code", "CLI"],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M20 7h-4.5a2.5 2.5 0 0 1 0-5H20"/><path d="M4 17h4.5a2.5 2.5 0 0 1 0 5H4"/><path d="M4 12h16"/></svg>`,
    publisher: "AgentArcade",
    updatedAt: "May 2026",
    pricingPlans: [
      { name: "Starter", price: "$16/mo", features: ["5 APIs", "TypeScript clients", "OpenAPI + GraphQL"] },
      { name: "Pro", price: "$39/mo", popular: true, features: ["Unlimited APIs", "All protocols", "Custom templates", "Diff monitoring"] },
    ],
    reviews: [
      { reviewer: "Elena Rodriguez", role: "Platform Engineer", company: "ConnectHub", date: "May 2026", rating: 5, text: "Generates production-quality SDKs from our OpenAPI spec. Saved us weeks of manual wrapper maintenance." },
    ],
    changelog: [
      { version: "v1.6.2", date: "May 14, 2026", notes: "Support for gRPC reflection-based codegen. Improved GraphQL subscription types." },
    ],
  },
  {
    id: "minimax-studio",
    name: "MiniMax Studio",
    slug: "minimax-studio",
    tagline: "Multimodal content agent",
    description: "MiniMax Studio is a multimodal content agent that generates images, video, music, and voice from text briefs. Ideal for marketing teams producing social assets at scale.",
    price: 49,
    priceLabel: "/seat · mo",
    rating: 4.7,
    reviewCount: 890,
    runsPerDay: 72000,
    version: "2.2.0",
    category: "Content",
    subCategory: "Multimodal",
    capabilities: [
      { label: "Image quality", score: 93 },
      { label: "Video coherence", score: 87 },
      { label: "Music composition", score: 82 },
      { label: "Voice synthesis", score: 90 },
    ],
    integrations: ["Slack", "API", "Webhook", "REST"],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
    publisher: "MiniMax",
    updatedAt: "May 2026",
    pricingPlans: [
      { name: "Creator", price: "$49/mo", features: ["1 user", "500 credits/mo", "Image + voice", "API access", "Community templates"] },
      { name: "Studio", price: "$149/mo", popular: true, features: ["5 users", "5,000 credits/mo", "All modalities", "Priority queue", "Custom models"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited users", "Unlimited credits", "Dedicated infra", "Custom training", "SLA"] },
    ],
    reviews: [
      { reviewer: "Amara Okafor", role: "Creative Director", company: "BrandFlow", date: "May 2026", rating: 5, text: "We produce a week's worth of social assets in one afternoon. The video generation is genuinely impressive — coherent movement, good lip-sync." },
    ],
    changelog: [
      { version: "v2.2.0", date: "May 12, 2026", notes: "New voice synthesis engine with 12 preset voices. Improved video scene transitions." },
    ],
  },
];

export const categories = [
  { name: "Coding", count: 6 },
  { name: "Research", count: 1 },
  { name: "Content", count: 1 },
  { name: "Security", count: 1 },
  { name: "Analytics", count: 0 },
  { name: "Orchestration", count: 0 },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}

export const featuredAgentSlugs = ["codex", "claude-research", "minimax-studio"];
