# GreenERZY Master Developer Handbook & Agent Build Guide

**GreenERZY EcoTech Pvt. Ltd.** &bull; Document Version: 1.0 &bull; September 2026

---

## 1. Developer Intent & Guiding Ethos

Welcome, Builder. If you are an autonomous AI agent or an engineer tasked with extending, maintaining, or refactoring the GreenERZY platform, **treat this document as your immutable architectural north star**.

### 1.1 Non-Negotiable Brand Rules
1. **Never make GreenERZY look like a generic e-waste or NGO recycling website**. Avoid clichéd recycling bin graphics, green leaf clipart, cheap neon gradients, or generic stock photographs of trash.
2. **Position GreenERZY as an institutional DeepTech & CleanTech infrastructure platform**. The visual aesthetic is **Deep Tech Hybrid**: obsidian `#040708` to `#090F13`, luminous emerald `#00D084`, cyber cyan `#06B6D4`, and high-trust slate typography.
3. **Respect public disclosure boundaries**: Do not publish internal neural net weights, raw proprietary source code, private token economics, or unverified corporate partnerships.

---

## 2. Directory Structure & File Map

```
c:\Saurik\GreenEnergy\
├── app/                              # Next.js 14 App Router entrypoints
│   ├── layout.tsx                    # Root HTML shell, fonts, SEO & global JSON-LD
│   ├── page.tsx                      # Master Homepage (11 narrative sections)
│   ├── globals.css                   # Tailwind base, circuit-grid, glows & keyframes
│   ├── api/
│   │   └── leads/route.ts            # POST /api/leads - Pathway lead ingestion
│   ├── vision/page.tsx               # Strategic vision, mission, 7 pillars, beliefs
│   ├── ecosystem/page.tsx            # 9-stage circular lifecycle & Hub-and-Spoke model
│   ├── technology/page.tsx           # 7 tech pillars, live DPP demo & resource simulator
│   ├── impact/page.tsx               # 4 impact pillars & verified metrics tracker
│   ├── industries/page.tsx           # 9 industry vertical profiles & interactive switcher
│   ├── about/page.tsx                # Company history, Assam HQ, leadership & ethics charter
│   ├── investors/page.tsx            # Investment thesis, high-level business model & inquiry
│   ├── insights/page.tsx             # Research library with search & category filters
│   ├── join/page.tsx                 # 6-in-1 dedicated participation wizard
│   ├── contact/page.tsx              # Institutional headquarters & direct inquiry form
│   ├── privacy/page.tsx              # DPDPA / NIST 800-88 data stewardship policy
│   └── terms/page.tsx                # Terms of use & public disclosure boundaries
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                # Sticky, responsive navbar with mobile drawer
│   │   └── Footer.tsx                # Institutional 6-column footer matching brief Sec 23
│   ├── home/                         # Homepage narrative components
│   │   ├── HeroSection.tsx           # Central device node, pulse rings & telemetry
│   │   ├── ProductQuestion.tsx       # 10-step lifecycle scrubber
│   │   ├── LinearToCircular.tsx      # Interactive Linear vs Circular transformer
│   │   ├── ProductsToPossibilities.tsx# 7 physical & digital dimensions selector
│   │   ├── EcosystemNetwork.tsx      # 13-node interactive SVG constellation
│   │   ├── TechPillarsTeaser.tsx     # 6 technology pillars overview
│   │   ├── ProductJourneyStepper.tsx # 11-stage product lifecycle storyboard
│   │   ├── ImpactCards.tsx           # Economy, Environment, Society, Governance
│   │   ├── RegionalToGlobalMap.tsx   # Northeast -> India -> Global scale visualizer
│   │   ├── PathwaysGrid.tsx          # 6 participation entry points
│   │   └── FinalCta.tsx              # Cinematic closing conversion call-to-action
│   └── interactive/                  # Deep interactive widgets
│       ├── DigitalProductPassport.tsx# ESPR / India EPR compliant DPP explorer
│       ├── ResourceSimulator.tsx     # Hydrometallurgical recovery calculator
│       └── PathwayFormWizard.tsx     # 6-in-1 tabbed lead capture engine
├── data/                             # Decoupled static data contracts
│   ├── ecosystemNodes.ts             # 13 participant nodes with connections
│   ├── lifecycleStages.ts            # 9 circular lifecycle stages
│   ├── techPillars.ts                # 7 technology capability pillars
│   ├── industries.ts                 # 9 industry verticals & solution profiles
│   └── insightsArticles.ts           # Research articles with category tags
├── tailwind.config.ts                # Custom design system tokens
├── tsconfig.json                     # Strict TypeScript configuration
└── package.json                      # Dependencies & build scripts
```

---

## 3. Coding Conventions & Best Practices

### 3.1 Component Architecture
- **Server vs Client**:
  - Default to React Server Components (RSC) for static layouts and content pages (`/vision`, `/about`, `/impact`).
  - Use `"use client"` at the top of files containing state (`useState`, `useEffect`), event handlers, or browser APIs (`HeroSection`, `LinearToCircular`, `PathwayFormWizard`, `EcosystemNetwork`).
- **Accessibility (a11y)**:
  - All interactive buttons must have visible focus rings (`focus:ring-2 focus:ring-emerald-400`).
  - Icon-only buttons must provide `aria-label` attributes.
  - Headings must follow strict hierarchical order (`h1` &rarr; `h2` &rarr; `h3`).

### 3.2 TypeScript Standards
- **No Implicit Any**: Explicitly type all component props, event handlers, and data models.
- **Shared Data Models**: When defining new structured data, add TypeScript interfaces to `data/*.ts` and export them.

### 3.3 Styling Rules
- Use custom Tailwind color tokens:
  - Backgrounds: `bg-[#06090A]`, `bg-[#090F13]`, `bg-[#0C1418]`
  - Accents: `text-emerald-400`, `text-cyan-400`, `text-teal-400`, `text-amber-400`
  - Circuit utilities: `.circuit-grid`, `.glow-emerald`, `.text-gradient-emerald`

---

## 4. How to Extend the Platform (Step-by-Step Recipes)

### 4.1 Adding a New Article to Insights
1. Open `data/insightsArticles.ts`.
2. Add a new object conforming to the `Article` interface:
   ```typescript
   {
     slug: "new-article-slug",
     title: "Article Title Here",
     category: "Resource Intelligence", // Valid category
     author: { name: "GreenERZY Research Team", role: "Metallurgy & Data" },
     publishedAt: "October 2026",
     readTime: "6 min read",
     summary: "Brief 1-2 sentence overview...",
     featured: false,
     content: ["Paragraph 1...", "Paragraph 2..."],
   }
   ```
3. The article will automatically appear in `/insights`, be searchable, and open in the reader modal.

### 4.2 Adding a New Ecosystem Participant Node
1. Open `data/ecosystemNodes.ts`.
2. Add a node object with `id`, `name`, `category`, `role`, `circularValue`, `connections` (array of other node IDs), and `icon`.
3. The `EcosystemNetwork.tsx` component will automatically render the new node and calculate dynamic linkages.

### 4.3 Adding or Modifying a Participation Pathway Form
1. Modify `data/ecosystemNodes.ts` or `components/interactive/PathwayFormWizard.tsx`.
2. Ensure the new fields are validated in `app/api/leads/route.ts`.

---

## 5. Agent Verification Checklist

When completing any code modification, an autonomous agent MUST run and verify:

```bash
# 1. Zero TypeScript errors
npx tsc --noEmit

# 2. Complete production build with all routes generated
npm run build

# 3. Development server responds with HTTP 200
npm run dev
```
Do not mark a task as complete if `npm run build` exits with a non-zero code.
