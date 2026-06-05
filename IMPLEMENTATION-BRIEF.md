# AgentArcade — AI Agent Marketplace (Implementation Brief)

## Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Component library**: shadcn/ui
- **Auth**: Clerk
- **Animation**: anime.js v4 (NO Framer Motion — this is a hard constraint)
- **Font**: Inter (body/sans), serif display font via next/font (Iowan Old Style / Charter / Georgia)
- **Type safety**: TypeScript strict mode

## Design Reference
Full HTML prototypes exist at:
`/Users/michaelshaw/Projects/open-design/.od/projects/7d475c44-038c-442e-8fc7-165040523b05/`

### Palette (OKLCH tokens — map these to Tailwind config)
```css
--bg:      oklch(99% 0.003 250);
--surface: oklch(100% 0 0);
--fg:      oklch(18% 0.012 250);
--muted:   oklch(54% 0.012 250);
--border:  oklch(92% 0.005 250);
--accent:  oklch(52% 0.14 265);
--success: oklch(55% 0.12 145);
--warn:    oklch(60% 0.10 75);
--danger:  oklch(50% 0.14 25);
```

### Tone
Editorial serif display headlines (Iowan Old Style/Charter/Georgia), system sans body. Clean, precise, software-native. Hairline borders, no shadows except on cards. Single blue-iris accent used at most twice per screen.

### Anti-patterns (MUST avoid)
- ❌ No emoji icons anywhere — use SVG monoline `currentColor` icons
- ❌ No rounded cards with left coloured border accent
- ❌ No Inter/Roboto/Arial as display face
- ❌ No invented metrics — every stat must be specific to this product
- ❌ No warm beige/peach/pink/orange-brown backgrounds
- ❌ No gradient-on-every-background patterns
- ❌ No hand-drawn SVG humans/faces
- ❌ No Framer Motion (only anime.js v4 for animations)
- ❌ No "Feature One / Feature Two" filler copy
- ❌ No viewport toggle / platform selector / designer controls in final UI

## Pages to Build

### 1. Landing (`/`)
- **Hero**: "Find the right AI agent for every job." Eyebrow: "AGENT MARKETPLACE". Two CTAs: "Browse agents" + "How it works" anchor link.
- **Featured agents** (3-card grid): Codex ($29/seat·mo), Claude Research ($39/seat·mo), MiniMax Studio ($49/seat·mo) — each with avatar SVG, stars, category pills, description
- **How it works** (3 steps): 01 Browse catalogue (24 agents, 6 categories, filtering), 02 Connect workspace (Slack, GitHub, Google Drive, Notion), 03 Assign and monitor (team access, budgets, dashboard)
- **Stats row** (3 counters, animated on scroll via anime.js): 218K runs/day, 98.7% uptime, 3.6 min setup time
- **CTA strip**: "Your first agent is three clicks away. Free for solo use with one agent. $12/seat per agent after that."

### 2. Browse (`/browse`)
- **Topnav**: logo, nav links (Home, Marketplace, Dashboard), "Get started" CTA
- **Layout**: sidebar (220px) + grid content area, responsive → single column at 920px
- **Sidebar filters**: 
  - Search input (text, pre-filled "Codex")
  - Category checkboxes: Coding (8), Research (5), Content (4), Voice (3), Analytics (2), Orchestration (2)
  - Pricing radio: All, Free, Under $20, $20–$50, Over $50
  - Rating radio: All, 4.5+, 4.0+, 3.5+
- **Agent grid** (auto-fill, min 260px cards): 8 cards with agent avatar, name, price, description, stars, category pills
- **Sort dropdown**: Popular, Price low, Price high, Rating
- **Pagination**: page buttons 1-2-3-⋯-Next

#### 8 Agent Cards content:
1. **Codex** $29/mo — Production code agent, 12 languages. VS Code + JetBrains. ★4.8
2. **BugSweep** $19/mo — Automated bug detection, PR diff scans. ★4.6
3. **PR Pilot** $14/mo — PR reviewer, code quality + security. ★4.5
4. **DocSmith** $12/mo — Documentation from codebase analysis. ★4.7
5. **RefactorKit** $34/mo — AST-based code restructure. ★4.4
6. **TestGen** $22/mo — Autonomous test writer. ★4.3
7. **Vault Keeper** $39/mo — Secrets/config auditor. ★4.8
8. **APIBridge** $16/mo — API integration, SDK wrappers. ★4.5

### 3. Detail (`/agents/[id]`)
- **Agent header**: avatar (72px), name, pills, version, rating stars (4.8), reviews count (1,240), runs/day (218K), "Install agent" CTA
- **Capability bars** (animated on scroll): Code quality 94%, Speed 88%, Context recall 82%, Language support 76%, Security 91%
- **About section**: description, integrations (VS Code, JetBrains, GitHub, GitLab, CLI, API)
- **Tabs** (Reviews / Pricing / Changelog):
  - Reviews: 3 review cards + overall rating card (4.8 from 1,240 reviews)
  - Pricing: 3 tiers — Solo $29/mo, Team $49/mo (featured), Enterprise Custom
  - Changelog: v2.8.1, v2.8.0, v2.7.0, v2.6.0 entries

### 4. Onboarding (`/onboarding`)
- **4-step wizard** with progress indicator, animated step transitions
- **Step 1 — Welcome**: "Welcome to AgentArcade" with checklist of what you get (24 agents, 6 categories, deploy in 2 min, $12/seat after free)
- **Step 2 — Preferences**: role selector (Developer, Product, Design, Executive), team size radio (Solo, 2-5, 6-20, 20+), primary use case checkboxes (Coding, Research, Content, Voice, Analytics, Automation)
- **Step 3 — Connect**: connect buttons for Slack, GitHub, Google Drive, Notion — each with status dot (connected/disconnected)
- **Step 4 — Done**: checkmark animation, "You're all set" with summary and "Go to dashboard" CTA

### 5. Dashboard (`/dashboard`)
- **Layout**: main content (1fr) + sidebar (320px), responsive → single column at 920px
- **Metric cards** (4, animated on scroll): 
  - 24 agents installed
  - 218K runs today (+12% vs yesterday)
  - $384 monthly spend
  - 99.2% avg uptime
- **Installed agents table**: rows with agent icon, name, usage (runs/week), last active, status dot (online/warn/offline)
  - Codex — 4,180 runs/wk — 2 min ago (online)
  - Claude Research — 2,340 runs/wk — 15 min ago (online)
  - BugSweep — 890 runs/wk — 3 hours ago (warn)
  - DocSmith — 420 runs/wk — 1 day ago (offline)
- **Activity feed**: chronological entries with blue dot, bold text, timestamp
  - Codex completed review on PR #1427 (2 min ago)
  - Claude Research published brief "Q2 Competitive Analysis" (18 min ago)
  - BugSweep found 3 potential regressions in main (45 min ago)
  - Billing invoice #INV-2026-0428 processed ($384.00) (2 hours ago)
  - DocSmith synced API docs for agentarcade/packages (4 hours ago)
  - TestGen generated 47 new test cases for auth module (6 hours ago)
- **Sidebar**: account info, billing summary, upgrade CTA

## Design System / Components (shadcn/ui + Tailwind)

Create a design system with these tokens in `tailwind.config.ts`:

### Colors
```ts
colors: {
  bg: 'oklch(99% 0.003 250)',
  surface: 'oklch(100% 0 0)',
  fg: 'oklch(18% 0.012 250)',
  muted: 'oklch(54% 0.012 250)',
  border: 'oklch(92% 0.005 250)',
  accent: 'oklch(52% 0.14 265)',
  success: 'oklch(55% 0.12 145)',
  warn: 'oklch(60% 0.10 75)',
  danger: 'oklch(50% 0.14 25)',
}
```

### Fonts (next/font)
- Display: `Iowan Old Style` / `Charter` / `Georgia` serif (self-host or system stack)
- Body/UI: Inter or system sans
- Mono: JetBrains Mono or system monospace stack

### Theme
- Light theme only (no dark mode in v1)
- Border radius: 10px buttons, 14px cards
- Container width: 1120px landing, 1200px browse/dashboard
- Gutter: 24px desktop, 16px mobile
- Transition defaults: 0.15s ease on colors/backgrounds

### Component Inventory
Create shadcn/ui components for:
- `agent-card` — image/icon, name, price, description, stars, pills, hover state
- `stat-counter` — large number + label + optional change indicator, anime.js scroll-triggered counter
- `review-card` — reviewer, role, date, stars, text
- `pricing-card` — plan name, price, feature list, CTA, "featured" variant
- `step-indicator` — horizontal progress with dots, labels, progress line
- `step-panel` — content container per wizard step
- `activity-feed-item` — dot, text, timestamp
- `metric-card` — value, label, change percentage
- `filter-group` — category heading + checkbox/radio list
- `search-bar` — icon, input, border wrapper
- `pagination` — page button, active state, next button
- `capability-bar` — label, animated bar, percentage
- `tabs` — tab bar with active indicator + panel switching
- `topnav` — sticky, frosted glass, logo, nav links, CTA
- `footer` — copyright, tagline

## Animation Rules (anime.js v4 — strict)
1. **Hero elements**: spring stagger `spring(0.5, 0.825, 0, 0)` with stagger 100ms
2. **Card entries**: spring `spring(0.4, 0.9, 0, 0)` with stagger 60-80ms
3. **Stat counters**: `easeOutCubic` over 1200ms, IntersectionObserver triggered
4. **Capability bars**: `easeOutCubic` over 600ms, IntersectionObserver triggered
5. **Step transitions**: spring for panel switching
6. **Tab content**: opacity/translateY spring transition
7. **Always respect `prefers-reduced-motion: reduce`** — set all animated elements to opacity:1, transform:none
8. **No animation on page load unless visible** — use IntersectionObserver for all scroll-triggered animations

## Quality Gates (mandatory before delivery)
1. **Stop-Slop audit**: score 40+/50. Zero generic AI patterns: no emoji as icons, no "10× faster" without source, no "Feature One / Feature Two" labels, no invented metrics
2. **P0 checklist**: no scrollIntoView, all sections have data-od-id, no external CDN images, mobile reflow at 920px works, all links resolve
3. **5D critique**: every dimension ≥ 3/5 (Philosophy, Hierarchy, Execution, Specificity, Restraint)

## Data Model (for Clerk auth + DB)
```typescript
interface Agent {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  priceLabel: string; // "/mo" or "/seat · mo"
  rating: number;
  reviewCount: number;
  runsPerDay: number;
  version: string;
  category: string;
  subCategory: string;
  capabilities: { label: string; score: number }[];
  integrations: string[];
  iconSvg: string; // Inline SVG string
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

interface UserPreferences {
  role: string;
  teamSize: string;
  useCases: string[];
  connectedAccounts: string[];
}
```

## Implementation Order
1. Init Next.js 14 project with Tailwind + shadcn/ui + Clerk
2. Configure design tokens in tailwind.config.ts, layout.tsx
3. Build shared components (topnav, footer, agent-card, etc.)
4. Build landing page (/)
5. Build browse page (/browse)
6. Build detail page (/agents/[id]) with sample data
7. Build onboarding wizard (/onboarding)
8. Build dashboard (/dashboard)
9. Add anime.js v4 animations to all pages
10. Run quality gates (stop-slop, checklist, 5D critique)
11. Commit with ACMI atomic commit message format

## Color for Agent Avatars
Use distinct muted accent colors per agent card (rotate through accent-soft variants). All icons are inline SVGs from the design references.

## Animation Library Installation
```bash
npm install animejs@4.0.0
```

Import pattern:
```ts
import anime from 'animejs';
```
