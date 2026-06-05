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
  accentColor: string;
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

const agentIcons: Record<string, string> = {
  codex: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="oklch(52% 0.14 265 / 0.15)"/><path d="M12 14l8 6-8 6" stroke="oklch(52% 0.14 265)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 26h6" stroke="oklch(52% 0.14 265)" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  bugsweep: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="oklch(55% 0.12 145 / 0.15)"/><circle cx="20" cy="18" r="7" stroke="oklch(55% 0.12 145)" stroke-width="2.5"/><path d="M20 25v5M16 30h8" stroke="oklch(55% 0.12 145)" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  prpilot: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="oklch(60% 0.10 75 / 0.15)"/><path d="M14 12v16M14 12l6 6-6 6" stroke="oklch(60% 0.10 75)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 14h4v12h-4" stroke="oklch(60% 0.10 75)" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  docsmith: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="oklch(52% 0.14 265 / 0.15)"/><path d="M14 10h8l4 4v16H14V10z" stroke="oklch(52% 0.14 265)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 20h6M17 24h6M17 16h2" stroke="oklch(52% 0.14 265)" stroke-width="2" stroke-linecap="round"/></svg>`,
  refactorkit: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="oklch(50% 0.14 25 / 0.15)"/><path d="M12 14l4-2v16l-4-2M20 12l4-2v20l-4-2M28 14l4-2v16l-4-2" stroke="oklch(50% 0.14 25)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  testgen: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="oklch(55% 0.12 145 / 0.15)"/><path d="M12 20l4 4 8-8" stroke="oklch(55% 0.12 145)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="10" width="20" height="20" rx="3" stroke="oklch(55% 0.12 145)" stroke-width="2.5"/></svg>`,
  vaultkeeper: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="oklch(60% 0.10 75 / 0.15)"/><rect x="10" y="16" width="20" height="14" rx="3" stroke="oklch(60% 0.10 75)" stroke-width="2.5"/><path d="M16 16v-3a4 4 0 018 0v3" stroke="oklch(60% 0.10 75)" stroke-width="2.5" stroke-linecap="round"/><circle cx="20" cy="23" r="2" fill="oklch(60% 0.10 75)"/></svg>`,
  apibridge: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="oklch(52% 0.14 265 / 0.15)"/><path d="M12 20h4l2-6 4 12 2-6h4" stroke="oklch(52% 0.14 265)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  claude: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="oklch(52% 0.14 265 / 0.15)"/><path d="M16 12l-4 8 4 8M24 12l4 8-4 8" stroke="oklch(52% 0.14 265)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  minimax: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="oklch(55% 0.12 145 / 0.15)"/><path d="M14 12h12M14 20h12M14 28h6" stroke="oklch(55% 0.12 145)" stroke-width="2.5" stroke-linecap="round"/></svg>`,
};

export const agents: Agent[] = [
  {
    id: "codex",
    name: "Codex",
    slug: "codex",
    tagline: "Production code agent with 12-language support",
    description: "Codex is an advanced AI code generation agent that writes, reviews, and refactors production-grade code across 12 programming languages. Seamlessly integrates with VS Code and JetBrains IDEs, offering real-time suggestions, automated refactoring, and intelligent code completion that understands your project context.",
    price: 29,
    priceLabel: "/mo",
    rating: 4.8,
    reviewCount: 1240,
    runsPerDay: 218000,
    version: "2.8.1",
    category: "Coding",
    subCategory: "Code Generation",
    capabilities: [
      { label: "Code Quality", score: 94 },
      { label: "Speed", score: 88 },
      { label: "Context Recall", score: 82 },
      { label: "Language Support", score: 76 },
      { label: "Security", score: 91 },
    ],
    integrations: ["VS Code", "JetBrains", "GitHub", "GitLab", "CLI", "API"],
    iconSvg: agentIcons.codex,
    publisher: "AgentArcade Labs",
    updatedAt: "2026-05-28",
    accentColor: "oklch(52% 0.14 265)",
    pricingPlans: [
      { name: "Solo", price: "$29/mo", features: ["5,000 runs/mo", "VS Code + JetBrains", "Basic context", "Email support"] },
      { name: "Team", price: "$49/mo", popular: true, features: ["25,000 runs/mo", "All IDEs", "Full project context", "Priority support", "Team dashboard"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited runs", "On-prem deploy", "Custom models", "SLA guarantee", "Dedicated support"] },
    ],
    reviews: [
      { reviewer: "Sarah Chen", role: "Engineering Lead", company: "Finova", date: "May 2026", rating: 5, text: "Codex cut our PR cycle time by 40%. Its context awareness is uncanny — it understands our monorepo structure and suggests changes that fit our patterns perfectly." },
      { reviewer: "Marcus Rivera", role: "Full-Stack Developer", company: "Nextera", date: "Apr 2026", rating: 4, text: "Remarkably good at boilerplate and migrations. Occasionally misses edge cases in complex business logic, but catches most issues before they reach review." },
      { reviewer: "Aisha Patel", role: "Tech Lead", company: "ScaleStack", date: "Apr 2026", rating: 5, text: "We tried GitHub Copilot, Cursor, and Codeium. Codex is the only one that doesn't fight our existing patterns. The JetBrains integration is flawless." },
    ],
    changelog: [
      { version: "v2.8.1", date: "May 28, 2026", notes: "Improved context window handling for large files. Fixed occasional token overflow in PR review mode. Enhanced TypeScript JSX support." },
      { version: "v2.8.0", date: "May 12, 2026", notes: "New PR review mode with inline suggestions. Improved multi-file refactoring. Added support for Rust and Go. 15% faster response times." },
      { version: "v2.7.0", date: "Apr 22, 2026", notes: "Project-wide context awareness. Git-aware suggestions. New CLI mode for CI/CD pipelines. Performance improvements across all language models." },
      { version: "v2.6.0", date: "Apr 1, 2026", notes: "Initial release of Codex with support for JavaScript, TypeScript, Python, Java, C++, C#, Ruby, PHP, Swift, Kotlin, Rust, and Go." },
    ],
  },
  {
    id: "bugsweep",
    name: "BugSweep",
    slug: "bugsweep",
    tagline: "Automated bug detection through PR diff scanning",
    description: "BugSweep automatically scans pull request diffs to detect potential bugs, regressions, and anti-patterns before they reach production. Integrates directly with your CI pipeline and provides inline annotations on every PR.",
    price: 19,
    priceLabel: "/mo",
    rating: 4.6,
    reviewCount: 870,
    runsPerDay: 95000,
    version: "1.6.3",
    category: "Coding",
    subCategory: "QA & Testing",
    capabilities: [
      { label: "Bug Detection", score: 91 },
      { label: "False Positive Rate", score: 86 },
      { label: "Speed", score: 93 },
      { label: "Diff Coverage", score: 78 },
      { label: "CI Integration", score: 95 },
    ],
    integrations: ["GitHub", "GitLab", "Bitbucket", "CI/CD", "Slack", "API"],
    iconSvg: agentIcons.bugsweep,
    publisher: "AgentArcade Labs",
    updatedAt: "2026-05-25",
    accentColor: "oklch(55% 0.12 145)",
    pricingPlans: [
      { name: "Solo", price: "$19/mo", features: ["1,000 scans/mo", "GitHub integration", "Basic rules", "Email support"] },
      { name: "Team", price: "$39/mo", popular: true, features: ["5,000 scans/mo", "All Git providers", "Custom rule engine", "Slack alerts", "Team dashboard"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited scans", "Self-hosted", "Custom ML models", "SLA", "Priority support"] },
    ],
    reviews: [
      { reviewer: "Tom Bradley", role: "DevOps Engineer", company: "ShipFast", date: "May 2026", rating: 5, text: "Caught a subtle race condition that would have taken down production. Worth every penny just for that one incident." },
      { reviewer: "Lisa Kim", role: "Software Engineer", company: "WebStack", date: "Apr 2026", rating: 4, text: "Integrates beautifully with our GitHub Actions pipeline. The false positive rate is remarkably low compared to other tools we've tried." },
      { reviewer: "James Okonkwo", role: "QA Lead", company: "DataBridge", date: "Mar 2026", rating: 5, text: "We ship with confidence now. BugSweep catches what our manual review process misses, especially around edge cases." },
    ],
    changelog: [
      { version: "v1.6.3", date: "May 25, 2026", notes: "Reduced false positive rate by 22%. Improved handling of TypeScript generics. New security-oriented scan rules." },
      { version: "v1.6.0", date: "May 5, 2026", notes: "Custom rule engine now available. Bitbucket integration. Performance improvements for large diffs." },
      { version: "v1.5.0", date: "Apr 10, 2026", notes: "Added support for Python and Ruby. New anti-pattern detection module. Slack notification integration." },
    ],
  },
  {
    id: "pr-pilot",
    name: "PR Pilot",
    slug: "pr-pilot",
    tagline: "PR reviewer with code quality and security analysis",
    description: "PR Pilot provides comprehensive pull request reviews combining code quality analysis, security vulnerability scanning, and best practice enforcement. Reduces review time by 60% while catching issues human reviewers miss.",
    price: 14,
    priceLabel: "/mo",
    rating: 4.5,
    reviewCount: 620,
    runsPerDay: 72000,
    version: "2.1.0",
    category: "Coding",
    subCategory: "Code Review",
    capabilities: [
      { label: "Review Accuracy", score: 89 },
      { label: "Security Detection", score: 85 },
      { label: "Speed", score: 94 },
      { label: "Custom Rules", score: 72 },
      { label: "Integration Depth", score: 80 },
    ],
    integrations: ["GitHub", "GitLab", "VS Code", "Slack", "API"],
    iconSvg: agentIcons.prpilot,
    publisher: "AgentArcade Labs",
    updatedAt: "2026-05-20",
    accentColor: "oklch(60% 0.10 75)",
    pricingPlans: [
      { name: "Starter", price: "$14/mo", features: ["500 reviews/mo", "GitHub integration", "Standard rules", "Email support"] },
      { name: "Pro", price: "$34/mo", popular: true, features: ["2,000 reviews/mo", "All Git providers", "Custom rules", "Slack notifications", "Security scans"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited reviews", "On-prem", "Custom ML", "Audit logs", "Priority support"] },
    ],
    reviews: [
      { reviewer: "Diana Ross", role: "Engineering Manager", company: "CloudNine", date: "May 2026", rating: 5, text: "PR Pilot handles the routine review work so my team can focus on architecture decisions. Best productivity gain we've had this year." },
      { reviewer: "Kevin Park", role: "Security Engineer", company: "SafeNet", date: "Apr 2026", rating: 4, text: "The security scanning caught a SQL injection vector that our SAST tools missed. Impressive for the price point." },
    ],
    changelog: [
      { version: "v2.1.0", date: "May 20, 2026", notes: "New security vulnerability detection module. 40% faster analysis. Support for monorepo diff traversal." },
      { version: "v2.0.0", date: "Apr 28, 2026", notes: "Major rewrite: now supports 12 languages. Custom rule engine. GitHub Actions native integration." },
    ],
  },
  {
    id: "docsmith",
    name: "DocSmith",
    slug: "docsmith",
    tagline: "Documentation generated from deep codebase analysis",
    description: "DocSmith analyzes your codebase to generate and maintain comprehensive documentation. From API references to architecture guides, it keeps documentation in sync with your code through continuous analysis of changes.",
    price: 12,
    priceLabel: "/mo",
    rating: 4.7,
    reviewCount: 540,
    runsPerDay: 45000,
    version: "1.4.2",
    category: "Content",
    subCategory: "Documentation",
    capabilities: [
      { label: "Code Analysis", score: 92 },
      { label: "Doc Quality", score: 87 },
      { label: "API Coverage", score: 84 },
      { label: "Sync Accuracy", score: 79 },
      { label: "Format Variety", score: 73 },
    ],
    integrations: ["GitHub", "GitLab", "VS Code", "Notion", "API"],
    iconSvg: agentIcons.docsmith,
    publisher: "AgentArcade Labs",
    updatedAt: "2026-05-18",
    accentColor: "oklch(52% 0.14 265)",
    pricingPlans: [
      { name: "Starter", price: "$12/mo", features: ["1 repo", "Markdown output", "API docs", "Email support"] },
      { name: "Team", price: "$32/mo", popular: true, features: ["5 repos", "Markdown + HTML + PDF", "API docs + guides", "Notion sync", "Priority support"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited repos", "Custom formats", "SLA", "Dedicated support"] },
    ],
    reviews: [
      { reviewer: "Rachel Green", role: "Technical Writer", company: "OpenDocs", date: "May 2026", rating: 5, text: "DocSmith generates 80% of our API documentation automatically. I just polish the prose. The codebase analysis is remarkably thorough." },
      { reviewer: "Andy Liu", role: "Backend Developer", company: "APIFirst", date: "Apr 2026", rating: 4, text: "Keeps our OpenAPI spec in sync with the actual implementation. The diff detection catches changes before they reach production." },
    ],
    changelog: [
      { version: "v1.4.2", date: "May 18, 2026", notes: "Notion integration now supports nested pages. Improved TypeScript type alias documentation. Fixes for JSDoc parsing edge cases." },
      { version: "v1.4.0", date: "May 1, 2026", notes: "New Notion sync feature. Support for JSDoc and TSDoc. Improved graph-based code analysis." },
    ],
  },
  {
    id: "refactorkit",
    name: "RefactorKit",
    slug: "refactorkit",
    tagline: "AST-based code restructuring and migration agent",
    description: "RefactorKit uses AST-level analysis to perform safe, large-scale code restructuring. Automate migrations, rename symbols across projects, extract methods, and apply design patterns consistently across your entire codebase.",
    price: 34,
    priceLabel: "/mo",
    rating: 4.4,
    reviewCount: 380,
    runsPerDay: 31000,
    version: "1.2.0",
    category: "Coding",
    subCategory: "Refactoring",
    capabilities: [
      { label: "AST Analysis", score: 95 },
      { label: "Safety Guarantees", score: 88 },
      { label: "Migration Speed", score: 82 },
      { label: "Language Support", score: 70 },
      { label: "Pattern Detection", score: 78 },
    ],
    integrations: ["VS Code", "JetBrains", "CLI", "GitHub", "API"],
    iconSvg: agentIcons.refactorkit,
    publisher: "AgentArcade Labs",
    updatedAt: "2026-05-15",
    accentColor: "oklch(50% 0.14 25)",
    pricingPlans: [
      { name: "Starter", price: "$34/mo", features: ["10 refactors/mo", "VS Code integration", "AST safety checks", "Email support"] },
      { name: "Pro", price: "$74/mo", popular: true, features: ["50 refactors/mo", "All IDEs", "Migration pipelines", "Preview diffs", "Priority support"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited refactors", "Custom AST rules", "SLA", "Dedicated support"] },
    ],
    reviews: [
      { reviewer: "Elena Voss", role: "Staff Engineer", company: "MonolithSoft", date: "Apr 2026", rating: 5, text: "We migrated 200,000 lines of Java to Kotlin with RefactorKit. It handled the AST transformations flawlessly and highlighted only 12 manual intervention points." },
      { reviewer: "Raj Patel", role: "Architect", company: "ScaleUp", date: "Mar 2026", rating: 4, text: "The safety guarantees are impressive. RefactorKit never produces broken code — if it can't transform something safely, it tells you instead of guessing." },
    ],
    changelog: [
      { version: "v1.2.0", date: "May 15, 2026", notes: "Added Python AST support. New migration pipeline for React class to hooks. Performance improvements for large codebases." },
      { version: "v1.1.0", date: "Apr 20, 2026", notes: "TypeScript AST transformations now supported. Pattern detection for common refactoring opportunities. Preview diff mode." },
    ],
  },
  {
    id: "testgen",
    name: "TestGen",
    slug: "testgen",
    tagline: "Autonomous test writer with coverage optimization",
    description: "TestGen analyzes your code and automatically generates comprehensive test suites. It covers unit tests, integration tests, and edge cases, optimizing for maximum coverage with minimal redundancy. Works with Jest, Vitest, Mocha, PyTest, and more.",
    price: 22,
    priceLabel: "/mo",
    rating: 4.3,
    reviewCount: 460,
    runsPerDay: 56000,
    version: "2.0.1",
    category: "Coding",
    subCategory: "QA & Testing",
    capabilities: [
      { label: "Coverage", score: 93 },
      { label: "Test Quality", score: 85 },
      { label: "Framework Support", score: 80 },
      { label: "Edge Cases", score: 78 },
      { label: "Maintenance", score: 72 },
    ],
    integrations: ["Jest", "Vitest", "Mocha", "PyTest", "GitHub", "CI/CD"],
    iconSvg: agentIcons.testgen,
    publisher: "AgentArcade Labs",
    updatedAt: "2026-05-22",
    accentColor: "oklch(55% 0.12 145)",
    pricingPlans: [
      { name: "Starter", price: "$22/mo", features: ["500 tests/mo", "Jest + Vitest", "Unit tests", "Email support"] },
      { name: "Pro", price: "$52/mo", popular: true, features: ["2,000 tests/mo", "All frameworks", "Unit + integration", "CI integration", "Priority support"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited tests", "Custom frameworks", "SLA", "Dedicated support"] },
    ],
    reviews: [
      { reviewer: "Mike Torres", role: "QA Engineer", company: "QualityFirst", date: "May 2026", rating: 4, text: "TestGen writes tests that actually test the right things. The coverage optimization means we get 90%+ coverage without thousands of redundant test cases." },
      { reviewer: "Sophie Martin", role: "Full-Stack Developer", company: "DevStream", date: "Apr 2026", rating: 5, text: "It caught edge cases in our auth flow that I would never have thought to test. The generated tests are readable and follow our project conventions." },
    ],
    changelog: [
      { version: "v2.0.1", date: "May 22, 2026", notes: "Improved Jest fixture generation. Fixed PyTest async test detection. New coverage gap analysis report." },
      { version: "v2.0.0", date: "May 5, 2026", notes: "Major rewrite: now supports integration tests. Coverage optimization engine. 15 test frameworks supported. CI/CD native mode." },
    ],
  },
  {
    id: "vault-keeper",
    name: "Vault Keeper",
    slug: "vault-keeper",
    tagline: "Secrets and configuration security auditor",
    description: "Vault Keeper continuously scans your repositories, infrastructure configs, and environments for exposed secrets, misconfigured permissions, and security vulnerabilities. It integrates with your CI pipeline and blocks PRs that introduce security risks.",
    price: 39,
    priceLabel: "/mo",
    rating: 4.8,
    reviewCount: 310,
    runsPerDay: 18000,
    version: "1.1.0",
    category: "Analytics",
    subCategory: "Security",
    capabilities: [
      { label: "Secret Detection", score: 97 },
      { label: "Config Audit", score: 90 },
      { label: "Speed", score: 85 },
      { label: "False Positives", score: 88 },
      { label: "Integration", score: 82 },
    ],
    integrations: ["GitHub", "GitLab", "Slack", "AWS", "GCP", "Azure", "API"],
    iconSvg: agentIcons.vaultkeeper,
    publisher: "AgentArcade Labs",
    updatedAt: "2026-05-26",
    accentColor: "oklch(60% 0.10 75)",
    pricingPlans: [
      { name: "Starter", price: "$39/mo", features: ["5 repos", "Secret scanning", "CI blocking", "Email support"] },
      { name: "Team", price: "$89/mo", popular: true, features: ["25 repos", "Secret + config audit", "Cloud providers", "Slack alerts", "Priority support"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited repos", "On-prem deploy", "Custom rules", "SLA", "Dedicated support"] },
    ],
    reviews: [
      { reviewer: "Nina Kowalski", role: "Security Lead", company: "CloudShield", date: "May 2026", rating: 5, text: "Found an AWS key in a public repo that had been there for 8 months — something our existing tools completely missed. The config audits are worth the price alone." },
      { reviewer: "Carlos Mendez", role: "DevOps Engineer", company: "InfraPro", date: "Apr 2026", rating: 5, text: "Vault Keeper's CI integration blocks PRs that leak secrets. It's become a mandatory part of our review pipeline. The false positive rate is impressively low." },
    ],
    changelog: [
      { version: "v1.1.0", date: "May 26, 2026", notes: "AWS/GCP/Azure config audit support. New secret pattern detector for custom formats. Integration with HashiCorp Vault." },
      { version: "v1.0.0", date: "May 10, 2026", notes: "Initial release. Secret scanning across 200+ patterns. CI pipeline integration. GitHub native app." },
    ],
  },
  {
    id: "apibridge",
    name: "APIBridge",
    slug: "apibridge",
    tagline: "API integration and SDK wrapper generation",
    description: "APIBridge analyzes API specifications (OpenAPI, GraphQL, gRPC) and generates type-safe SDK wrappers, client libraries, and integration code. Supports 8 languages and keeps generated code in sync with API changes automatically.",
    price: 16,
    priceLabel: "/mo",
    rating: 4.5,
    reviewCount: 290,
    runsPerDay: 22000,
    version: "1.3.0",
    category: "Orchestration",
    subCategory: "Integration",
    capabilities: [
      { label: "Spec Parsing", score: 94 },
      { label: "Code Gen Quality", score: 89 },
      { label: "Language Support", score: 78 },
      { label: "Sync Accuracy", score: 85 },
      { label: "Performance", score: 82 },
    ],
    integrations: ["OpenAPI", "GraphQL", "gRPC", "GitHub", "npm", "PyPI"],
    iconSvg: agentIcons.apibridge,
    publisher: "AgentArcade Labs",
    updatedAt: "2026-05-23",
    accentColor: "oklch(52% 0.14 265)",
    pricingPlans: [
      { name: "Starter", price: "$16/mo", features: ["3 APIs", "3 languages", "SDK generation", "Email support"] },
      { name: "Pro", price: "$46/mo", popular: true, features: ["15 APIs", "8 languages", "Auto-sync", "npm/pypi publish", "Priority support"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited APIs", "Custom codegen", "SLA", "Dedicated support"] },
    ],
    reviews: [
      { reviewer: "Jenny Huang", role: "Platform Engineer", company: "MicroServices", date: "May 2026", rating: 5, text: "We have 40+ microservices and APIBridge generates all our client SDKs. When an API changes, the SDK updates automatically. No more broken clients." },
      { reviewer: "Alex Wright", role: "Backend Developer", company: "ConnectHub", date: "Apr 2026", rating: 4, text: "The generated TypeScript SDKs are production-quality. Typed, documented, and tree-shakeable. Saves us hours per API integration." },
    ],
    changelog: [
      { version: "v1.3.0", date: "May 23, 2026", notes: "GraphQL support added. New Rust and Go target languages. Auto-publish to npm and PyPI. Performance improvements for large schemas." },
      { version: "v1.2.0", date: "May 5, 2026", notes: "OpenAPI 3.1 support. Improved type generation for complex schemas. Webhook event type generation." },
    ],
  },
];

export const featuredAgents = [
  { ...agents.find(a => a.id === "codex")!, accentColor: "oklch(52% 0.14 265)" },
  { ...agents.find(a => a.id === "claude-research")!, name: "Claude Research", slug: "claude-research", id: "claude-research", tagline: "Deep research assistant with multi-source synthesis", description: "Claude Research conducts comprehensive research across web sources, documents, and databases, synthesizing findings into actionable intelligence. Features citation management, source verification, and collaborative workspaces.", price: 39, priceLabel: "/seat · mo", rating: 4.9, reviewCount: 2100, runsPerDay: 156000, version: "3.2.0", category: "Research", subCategory: "Deep Research", capabilities: [{ label: "Research Depth", score: 96 }, { label: "Source Accuracy", score: 91 }, { label: "Synthesis", score: 88 }, { label: "Speed", score: 78 }, { label: "Citation Mgmt", score: 85 }], integrations: ["Web Browser", "PDF", "Notion", "Google Drive", "Slack", "API"], iconSvg: agentIcons.claude, publisher: "Anthropic", updatedAt: "2026-05-30", pricingPlans: [
    { name: "Solo", price: "$39/seat · mo", features: ["200 queries/mo", "Web research", "Basic citations", "Email support"] },
    { name: "Team", price: "$79/seat · mo", popular: true, features: ["1000 queries/mo", "Deep research", "Source verification", "Collaborative workspace", "Priority support"] },
    { name: "Enterprise", price: "Custom", features: ["Unlimited queries", "Custom sources", "SLA", "Dedicated support"] },
  ], reviews: [
    { reviewer: "Priya Sharma", role: "Analyst", company: "MarketIntel", date: "May 2026", rating: 5, text: "Claude Research cut our report generation time from 3 days to 4 hours. The source synthesis is remarkably accurate." },
    { reviewer: "David Kim", role: "Product Manager", company: "InnovateLab", date: "May 2026", rating: 5, text: "The citation management alone saves hours per report. It tracks sources, verifies claims, and formats citations automatically." },
    { reviewer: "Emma Williams", role: "Content Strategist", company: "WordFlow", date: "Apr 2026", rating: 4, text: "Excellent for competitive analysis research. Sometimes needs guidance on source selection, but the synthesis quality is top-notch." },
  ], changelog: [
    { version: "v3.2.0", date: "May 30, 2026", notes: "New multi-source synthesis engine. Improved citation verification with cross-referencing. Support for 50+ source types." },
    { version: "v3.1.0", date: "May 10, 2026", notes: "Collaborative workspace added. Real-time research sharing. PDF deep analysis. Performance improvements." },
  ], accentColor: "oklch(52% 0.14 265)" },
  { ...agents.find(a => a.id === "minimax-studio")!, name: "MiniMax Studio", slug: "minimax-studio", id: "minimax-studio", tagline: "AI video generation and editing studio", description: "MiniMax Studio is a comprehensive AI video generation platform that creates professional-grade videos from text prompts, images, and existing footage. Features include text-to-video, style transfer, motion control, and multi-scene composition.", price: 49, priceLabel: "/seat · mo", rating: 4.7, reviewCount: 1800, runsPerDay: 134000, version: "1.5.0", category: "Content", subCategory: "Video Generation", capabilities: [{ label: "Video Quality", score: 92 }, { label: "Style Control", score: 87 }, { label: "Motion Coherence", score: 84 }, { label: "Speed", score: 76 }, { label: "Scene Composition", score: 80 }], integrations: ["Web App", "API", "Slack", "Google Drive", "Notion"], iconSvg: agentIcons.minimax, publisher: "MiniMax", updatedAt: "2026-05-29", pricingPlans: [
    { name: "Creator", price: "$49/seat · mo", features: ["50 generations/mo", "720p export", "Text-to-video", "Basic styles", "Email support"] },
    { name: "Pro", price: "$99/seat · mo", popular: true, features: ["200 generations/mo", "1080p export", "Image-to-video", "Style transfer", "Priority support"] },
    { name: "Studio", price: "Custom", features: ["Unlimited generations", "4K export", "Custom models", "API access", "Dedicated support"] },
  ], reviews: [
    { reviewer: "Chris Evans", role: "Creative Director", company: "MotionHouse", date: "May 2026", rating: 5, text: "MiniMax Studio produces the most coherent AI-generated video we've seen. The motion consistency between frames is remarkable." },
    { reviewer: "Maya Patel", role: "Content Creator", company: "DigitalWave", date: "Apr 2026", rating: 4, text: "Great for rapid prototyping video concepts. The style transfer feature opens up creative possibilities we didn't have before." },
  ], changelog: [
    { version: "v1.5.0", date: "May 29, 2026", notes: "New multi-scene composition feature. Improved motion consistency. Style transfer now supports 20+ reference styles." },
    { version: "v1.4.0", date: "May 12, 2026", notes: "Image-to-video generation. Enhanced 1080p output quality. New API endpoints for programmatic access." },
  ], accentColor: "oklch(55% 0.12 145)" },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find(a => a.slug === slug);
}

export const categories = [
  { name: "Coding", count: 8 },
  { name: "Research", count: 5 },
  { name: "Content", count: 4 },
  { name: "Voice", count: 3 },
  { name: "Analytics", count: 2 },
  { name: "Orchestration", count: 2 },
];

export type SortOption = "popular" | "price-low" | "price-high" | "rating";
