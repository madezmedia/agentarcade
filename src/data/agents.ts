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
  capabilities: { label: string; score: number }[];
  integrations: string[];
  iconColor: string;
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
    description: "Codex is a production-grade AI coding agent that integrates directly with your IDE. It understands your codebase context, writes idiomatic code, and handles everything from scaffolding to debugging across 12 programming languages.",
    price: 29,
    priceLabel: "/seat·mo",
    rating: 4.8,
    reviewCount: 1240,
    runsPerDay: 218000,
    version: "2.8.1",
    category: "Coding",
    capabilities: [
      { label: "Code Quality", score: 94 },
      { label: "Speed", score: 88 },
      { label: "Context Recall", score: 82 },
      { label: "Language Support", score: 76 },
      { label: "Security", score: 91 },
    ],
    integrations: ["VS Code", "JetBrains", "GitHub", "GitLab", "CLI", "API"],
    iconColor: "accent-1",
    publisher: "AgentArcade",
    updatedAt: "2026-06-01",
    pricingPlans: [
      { name: "Solo", price: "$29/mo", features: ["1 seat", "12 languages", "VS Code + JetBrains", "Basic support"] },
      { name: "Team", price: "$49/mo", popular: true, features: ["5 seats", "All languages", "All IDEs", "Priority support", "Team analytics"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited seats", "On-prem deployment", "SSO/SAML", "Dedicated support", "SLA"] },
    ],
    reviews: [
      { reviewer: "Alex Chen", role: "Senior Engineer", company: "ScaleTech", date: "2026-05-28", rating: 5, text: "Codex cut our PR cycle time by 60%. The context awareness is spooky good — it actually understands our monorepo structure." },
      { reviewer: "Sarah Kim", role: "Tech Lead", company: "DataFlow Inc", date: "2026-05-15", rating: 4, text: "Solid code generation. Occasionally needs handholding on complex architecture decisions but for day-to-day coding it's indispensable." },
      { reviewer: "Marcus Johnson", role: "Freelancer", company: "Independent", date: "2026-05-02", rating: 5, text: "Worth every penny. I ship features 3x faster and the code quality is consistently better than what I was writing solo." },
    ],
    changelog: [
      { version: "v2.8.1", date: "2026-06-01", notes: "Fixed AST parsing for TypeScript 5.7 decorators. Improved monorepo context awareness." },
      { version: "v2.8.0", date: "2026-05-15", notes: "New multi-file refactoring engine. Added JetBrains Fleet support." },
      { version: "v2.7.0", date: "2026-04-28", notes: "Rust code generation (beta). Performance improvements to context indexing." },
      { version: "v2.6.0", date: "2026-04-10", notes: "Initial release of code review agent mode. GitHub Actions integration." },
    ],
  },
  {
    id: "bug-sweep",
    name: "BugSweep",
    slug: "bug-sweep",
    tagline: "Automated bug detection, PR diff scans",
    description: "BugSweep automatically scans your pull requests for potential bugs, regressions, and anti-patterns. It integrates into your CI pipeline and provides actionable feedback before code reaches production.",
    price: 19,
    priceLabel: "/mo",
    rating: 4.6,
    reviewCount: 890,
    runsPerDay: 145000,
    version: "1.4.2",
    category: "Coding",
    capabilities: [
      { label: "Bug Detection", score: 92 },
      { label: "False Positive Rate", score: 87 },
      { label: "Speed", score: 95 },
      { label: "Language Support", score: 78 },
    ],
    integrations: ["GitHub Actions", "GitLab CI", "Jenkins", "VS Code"],
    iconColor: "accent-2",
    publisher: "AgentArcade",
    updatedAt: "2026-05-28",
    pricingPlans: [
      { name: "Starter", price: "$19/mo", features: ["100 scans/mo", "5 repos", "GitHub integration", "Email alerts"] },
      { name: "Pro", price: "$49/mo", popular: true, features: ["Unlimited scans", "Unlimited repos", "All CI platforms", "Slack notifications", "Custom rules"] },
      { name: "Enterprise", price: "Custom", features: ["On-prem", "Custom rules engine", "Audit trail", "SSO", "SLA"] },
    ],
    reviews: [
      { reviewer: "Priya Patel", role: "DevOps Lead", company: "CloudStack", date: "2026-05-20", rating: 5, text: "Caught a subtle race condition that our entire team missed. Paid for itself in the first week." },
      { reviewer: "Tom Bradley", role: "Full Stack Dev", company: "WebCraft", date: "2026-05-01", rating: 4, text: "Low false positive rate compared to other tools. The PR integration is seamless." },
    ],
    changelog: [
      { version: "v1.4.2", date: "2026-05-28", notes: "Reduced false positive rate by 15%. New Rust analysis module." },
      { version: "v1.4.0", date: "2026-05-10", notes: "Added Python type-safety checks. Performance regression detection." },
    ],
  },
  {
    id: "pr-pilot",
    name: "PR Pilot",
    slug: "pr-pilot",
    tagline: "PR reviewer, code quality + security",
    description: "PR Pilot automates code review at scale. It analyzes every PR for code quality, security vulnerabilities, and best practices, providing line-level feedback before human reviewers get involved.",
    price: 14,
    priceLabel: "/mo",
    rating: 4.5,
    reviewCount: 720,
    runsPerDay: 98000,
    version: "2.1.0",
    category: "Coding",
    capabilities: [
      { label: "Review Speed", score: 96 },
      { label: "Security Detection", score: 88 },
      { label: "Code Quality", score: 85 },
      { label: "Context Awareness", score: 79 },
    ],
    integrations: ["GitHub", "GitLab", "Bitbucket", "Slack"],
    iconColor: "accent-3",
    publisher: "AgentArcade",
    updatedAt: "2026-05-25",
    pricingPlans: [
      { name: "Free", price: "$0/mo", features: ["50 reviews/mo", "3 repos", "Basic quality checks"] },
      { name: "Pro", price: "$14/mo", popular: true, features: ["Unlimited reviews", "Unlimited repos", "Security scanning", "Custom rules"] },
      { name: "Team", price: "$39/mo", features: ["Team dashboard", "Slack integration", "Enforcement policies"] },
    ],
    reviews: [
      { reviewer: "Lisa Wang", role: "Engineering Manager", company: "FinSync", date: "2026-05-18", rating: 5, text: "Cut our average review time from 4 hours to 45 minutes. The security checks alone are worth it." },
    ],
    changelog: [
      { version: "v2.1.0", date: "2026-05-25", notes: "New security vulnerability scanner. Custom rules engine now supports regex patterns." },
    ],
  },
  {
    id: "doc-smith",
    name: "DocSmith",
    slug: "doc-smith",
    tagline: "Documentation from codebase analysis",
    description: "DocSmith analyzes your codebase and generates comprehensive documentation — API references, architecture guides, and changelogs — automatically updated with every commit.",
    price: 12,
    priceLabel: "/mo",
    rating: 4.7,
    reviewCount: 560,
    runsPerDay: 67000,
    version: "1.8.3",
    category: "Content",
    capabilities: [
      { label: "Coverage", score: 93 },
      { label: "Accuracy", score: 90 },
      { label: "Readability", score: 86 },
      { label: "Format Support", score: 82 },
    ],
    integrations: ["GitHub", "GitLab", "Notion", "Confluence"],
    iconColor: "accent-4",
    publisher: "AgentArcade",
    updatedAt: "2026-05-22",
    pricingPlans: [
      { name: "Starter", price: "$12/mo", features: ["1 repo", "Markdown output", "API docs"] },
      { name: "Pro", price: "$29/mo", popular: true, features: ["5 repos", "Notion + Confluence sync", "Architecture diagrams"] },
    ],
    reviews: [
      { reviewer: "Ryan O'Brien", role: "CTO", company: "BuildRight", date: "2026-05-12", rating: 5, text: "Finally, documentation that stays in sync with code. Our onboarding time dropped by 40%." },
    ],
    changelog: [
      { version: "v1.8.3", date: "2026-05-22", notes: "Improved diagram generation. New Mermaid flowchart support." },
    ],
  },
  {
    id: "refactor-kit",
    name: "RefactorKit",
    slug: "refactor-kit",
    tagline: "AST-based code restructure",
    description: "RefactorKit uses AST-level analysis to safely restructure your codebase. Rename symbols across files, extract modules, migrate patterns, and apply codemods with confidence.",
    price: 34,
    priceLabel: "/mo",
    rating: 4.4,
    reviewCount: 340,
    runsPerDay: 24000,
    version: "3.0.1",
    category: "Coding",
    capabilities: [
      { label: "Safety", score: 95 },
      { label: "Speed", score: 84 },
      { label: "Language Support", score: 80 },
      { label: "Complexity Handling", score: 88 },
    ],
    integrations: ["VS Code", "JetBrains", "CLI", "GitHub"],
    iconColor: "accent-5",
    publisher: "AgentArcade",
    updatedAt: "2026-05-20",
    pricingPlans: [
      { name: "Individual", price: "$34/mo", features: ["3 repos", "All languages", "VS Code + CLI", "Basic codemods"] },
      { name: "Team", price: "$79/mo", popular: true, features: ["Unlimited repos", "Custom codemod builder", "Safety validation", "Team templates"] },
    ],
    reviews: [
      { reviewer: "Diana Foster", role: "Architect", company: "MicroServices Co", date: "2026-05-08", rating: 4, text: "Renamed a package across 200+ files in seconds. The safety analysis caught two edge cases I would have missed." },
    ],
    changelog: [
      { version: "v3.0.1", date: "2026-05-20", notes: "New safety validation engine. AST caching for 10x faster repeated operations." },
    ],
  },
  {
    id: "test-gen",
    name: "TestGen",
    slug: "test-gen",
    tagline: "Autonomous test writer",
    description: "TestGen automatically generates unit tests, integration tests, and edge case coverage from your codebase. It analyzes code paths and produces production-quality test suites.",
    price: 22,
    priceLabel: "/mo",
    rating: 4.3,
    reviewCount: 480,
    runsPerDay: 52000,
    version: "2.4.0",
    category: "Coding",
    capabilities: [
      { label: "Coverage", score: 91 },
      { label: "Accuracy", score: 85 },
      { label: "Edge Case Detection", score: 83 },
      { label: "Framework Support", score: 78 },
    ],
    integrations: ["Jest", "Mocha", "PyTest", "JUnit", "GitHub"],
    iconColor: "accent-6",
    publisher: "AgentArcade",
    updatedAt: "2026-05-18",
    pricingPlans: [
      { name: "Starter", price: "$22/mo", features: ["1 repo", "Jest + PyTest", "Unit tests"] },
      { name: "Pro", price: "$49/mo", popular: true, features: ["5 repos", "All frameworks", "Integration tests", "Edge case expansion"] },
    ],
    reviews: [
      { reviewer: "James Wilson", role: "QA Lead", company: "ShipFast", date: "2026-05-05", rating: 4, text: "Generated 200 tests in under a minute. Some needed tweaking but the coverage was impressive." },
    ],
    changelog: [
      { version: "v2.4.0", date: "2026-05-18", notes: "New edge case expansion engine. Support for Playwright e2e tests." },
    ],
  },
  {
    id: "vault-keeper",
    name: "Vault Keeper",
    slug: "vault-keeper",
    tagline: "Secrets/config auditor",
    description: "Vault Keeper scans your codebase, infrastructure, and CI pipelines for exposed secrets, misconfigurations, and compliance violations. It prevents credential leaks before they happen.",
    price: 39,
    priceLabel: "/mo",
    rating: 4.8,
    reviewCount: 620,
    runsPerDay: 89000,
    version: "2.1.3",
    category: "Analytics",
    capabilities: [
      { label: "Detection Rate", score: 97 },
      { label: "False Positives", score: 92 },
      { label: "Scan Speed", score: 90 },
      { label: "Compliance", score: 86 },
    ],
    integrations: ["GitHub", "GitLab", "AWS", "GCP", "Slack", "PagerDuty"],
    iconColor: "accent-7",
    publisher: "AgentArcade",
    updatedAt: "2026-05-16",
    pricingPlans: [
      { name: "Team", price: "$39/mo", features: ["10 repos", "GitHub + GitLab", "Slack alerts", "Compliance reports"] },
      { name: "Enterprise", price: "Custom", popular: true, features: ["Unlimited repos", "All integrations", "Custom policies", "On-prem option"] },
    ],
    reviews: [
      { reviewer: "Mike Torres", role: "Security Engineer", company: "SafeGate", date: "2026-05-10", rating: 5, text: "Found an AWS key in a public repo within 30 seconds of connecting. Essential security tool." },
    ],
    changelog: [
      { version: "v2.1.3", date: "2026-05-16", notes: "New entropy-based detection for previously unknown secret patterns." },
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
    capabilities: [
      { label: "Type Accuracy", score: 94 },
      { label: "Speed", score: 91 },
      { label: "Protocol Support", score: 84 },
      { label: "Code Quality", score: 82 },
    ],
    integrations: ["OpenAPI", "GraphQL", "gRPC", "VS Code", "CLI"],
    iconColor: "accent-8",
    publisher: "AgentArcade",
    updatedAt: "2026-05-14",
    pricingPlans: [
      { name: "Starter", price: "$16/mo", features: ["5 APIs", "TypeScript clients", "OpenAPI + GraphQL"] },
      { name: "Pro", price: "$39/mo", popular: true, features: ["Unlimited APIs", "All protocols", "Custom templates", "Diff monitoring"] },
    ],
    reviews: [
      { reviewer: "Elena Rodriguez", role: "Platform Engineer", company: "ConnectHub", date: "2026-05-03", rating: 5, text: "Generates production-quality SDKs from our OpenAPI spec. Saved us weeks of manual wrapper maintenance." },
    ],
    changelog: [
      { version: "v1.6.2", date: "2026-05-14", notes: "Support for gRPC reflection-based codegen. Improved GraphQL subscription types." },
    ],
  },
];

export const categories = [
  { name: "Coding", count: 8 },
  { name: "Research", count: 5 },
  { name: "Content", count: 4 },
  { name: "Voice", count: 3 },
  { name: "Analytics", count: 2 },
  { name: "Orchestration", count: 2 },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}

export function formatPrice(price: number, label: string): string {
  return `$${price}${label}`;
}
