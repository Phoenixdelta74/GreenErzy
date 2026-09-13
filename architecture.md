# GreenERZY Platform Architecture & Technical Design Principles

**GreenERZY EcoTech Pvt. Ltd.** &bull; Document Version: 1.0 &bull; September 2026

---

## 1. Executive Summary & Purpose

The GreenERZY digital platform is designed as an immersive, enterprise-grade, high-performance web application representing the **Smart Circular Electronics Economy**. It bridges the physical lifecycle of electrical and electronic equipment (EEE) with cryptographic digital identity, artificial intelligence, and urban resource metallurgy.

The technical architecture enforces a strict **70% visual / 30% text** balance, ultra-responsive client-side interaction, server-side data isolation, and verified regulatory alignment (India EPR / CPCB & EU ESPR) without disclosing proprietary intellectual property.

---

## 2. Core Architectural Principles

1. **Lifecycle First, Jargon Second**: Every interface element maps to a stage of the product journey (Create &rarr; Move &rarr; Sell &rarr; Use &rarr; Service &rarr; Extend &rarr; Recover &rarr; Recycle &rarr; Regenerate). Technical abstractions are grounded in tangible physical and economic value.
2. **Deep Tech Hybrid Theming**: Cinematic dark theme (`#040708` to `#0A0F13`) for deep tech credibility, circuitry topologies, and hero experiences; paired with crisp, high-trust light elements for governance, data transparency, and institutional auditability.
3. **Zero-Trust Information Governance**: Public pages describe capabilities, schemas, and impact methodologies at a conceptual level. No raw proprietary neural network weights, internal API keys, confidential client contracts, or unverified claims are exposed.
4. **Resilient Component Modularity**: Every signature interaction is decoupled into an isolated client-side component backed by static datasets (`data/*.ts`), enabling atomic testing, headless migration, or CMS integration.
5. **Progressive Enhancement & Touch Parity**: All desktop hover-based micro-interactions possess explicit touch/click fallbacks, ensuring flawless functionality on mobile devices without layout shift.

---

## 3. Technology Stack & Topology

```
+-------------------------------------------------------------------------+
|                              CLIENT LAYER                               |
|   Next.js 14 App Router (React 18, TypeScript, Tailwind CSS, Lucide)     |
|   Framer Motion & Canvas Confetti (Declarative, GPU-Accelerated UI)    |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                             EDGE & RUNTIME                              |
|   Next.js Server Runtime (Node.js 20+, Standalone Output / Vercel Edge)  |
|   Security Headers, Rate Limiting, Input Sanitization                   |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                            APPLICATION API                              |
|   /api/leads: Dynamic multi-pathway ingestion & verification validator  |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                        DATA & METADATA CONTRACTS                        |
|   Static Datasets: ecosystemNodes, lifecycleStages, techPillars         |
|   Future Integrations: CRM Webhooks, CPCB EPR Registry, Dec. Ledgers    |
+-------------------------------------------------------------------------+
```

### 3.1 Technology Specification
- **Framework**: Next.js 14.2+ (App Router architecture with React Server Components by default, selective `"use client"` for interactive widgets).
- **Language**: TypeScript 5.5+ (Strict type checking, zero `any` allowance).
- **Styling**: Tailwind CSS 3.4+ with custom design tokens (`obsidian`, `emerald-tech`, `cyber-cyan`).
- **Icons**: `lucide-react` (SVG-based, tree-shaken).
- **Animations**: CSS GPU keyframes (`globals.css`) + `canvas-confetti` + declarative CSS transitions.

---

## 4. Information Architecture & URL Routing

The platform features 14 primary and auxiliary routes designed for distinct user personas:

```
c:\Saurik\GreenEnergy\app\
├── layout.tsx                # Root layout, typography, global SEO & JSON-LD metadata
├── page.tsx                  # Master Homepage (11 sequential narrative sections)
├── globals.css               # Design system tokens, circuit grid utilities & glow effects
├── vision/page.tsx           # Strategic vision, mission, 7 future pillars & 5 beliefs
├── ecosystem/page.tsx        # 9-stage circular lifecycle architecture & Hub-and-Spoke model
├── technology/page.tsx       # 7 core tech pillars, live DPP prototype & resource simulator
├── impact/page.tsx           # 4 systemic impact dimensions & verified metrics tracker
├── industries/page.tsx       # Interactive solutions across 9 industry verticals
├── about/page.tsx            # Company story, leadership council & DPIIT ethics charter
├── investors/page.tsx        # Platform thesis, high-level business model & data room inquiry
├── insights/page.tsx         # CMS-ready research articles with search & category filters
├── join/page.tsx             # 6-in-1 dedicated participation wizard & lead engine
├── contact/page.tsx          # Institutional headquarters, regional desks & direct inquiry
├── privacy/page.tsx          # Zero-knowledge asset verification, NIST 800-88, DPDPA
├── terms/page.tsx            # Terms of use, public disclosure bounds & IP protections
└── api/
    └── leads/route.ts        # POST endpoint for lead capture, validation & ID generation
```

---

## 5. Signature Interactive Modules

### 5.1 Linear-to-Circular Interactive Engine (`LinearToCircular.tsx`)
- **State Machine**: Toggles between `"linear"` and `"circular"`.
- **Visual Mechanics**: Renders the 4-stage dead-end (*Make &rarr; Sell &rarr; Use &rarr; Discard*) with warning indicators and material loss metrics vs. the 9-stage closed loop with continuous value circulation.
- **Narrative Anchor**: *"The product may reach an end. Its resources don't have to."*

### 5.2 13-Node Ecosystem Constellation (`EcosystemNetwork.tsx`)
- **Data Source**: `data/ecosystemNodes.ts`
- **Topology**: 13 stakeholder categories (Upstream, Core, Downstream, Enablers).
- **Interaction**: Clicking any node highlights direct connections, renders role descriptions, displays unlocked circular value, and generates a context-aware participation CTA.

### 5.3 One Product. One Journey Storyboard (`ProductJourneyStepper.tsx`)
- **State Machine**: Sequential 11-step index (`0` to `10`).
- **Output**: Detailed lifecycle chapter narrative, serialized hardware state, and cryptographic ledger verification badges.

### 5.4 Resource Intelligence Simulator (`ResourceSimulator.tsx`)
- **State Engine**: Device selector (`smartphones` | `laptops` | `servers`) + Volume slider (`500` to `50,000` units).
- **Algorithms**: Dynamically computes Gold (Au) grams, Copper (Cu) kg, Neodymium kg, virgin ore mining avoided (metric tons), Scope 3 CO₂e emissions abated, and residual recovery valuation (INR).

### 5.5 Digital Product Passport Interface (`DigitalProductPassport.tsx`)
- **Compliance**: Modeled after EU Ecodesign (ESPR) and India CPCB guidelines.
- **Tabs**: Asset Overview (DID hash & circularity index), Material BOM (precious, conductive, and recycled content), Service Ledger (repair history with cryptographic hashes), and End-of-Life Disassembly protocols.

### 5.6 Six-Pathway Lead Capture Portal (`PathwayFormWizard.tsx`)
- **Target Audiences**: Builders, Partners, Investors, Innovators, Careers, Community.
- **Validation**: Schema verification, dedicated fields per pathway, instant client feedback, celebratory confetti particle effect, and secure API handoff.

---

## 6. Security, Compliance & Governance

1. **Input Sanitization**: Client and server-side validation on all lead forms.
2. **Encrypted Communications**: Enforcement of HTTPS/TLS 1.3 across all endpoints.
3. **Data Protection**: Alignment with India's Digital Personal Data Protection Act (DPDPA 2023) and GDPR data minimization standards.
4. **Hardware Sanitization Standard**: NIST SP 800-88 Rev. 1 compliance for all physical asset disposal workflows.
5. **Confidentiality Boundaries**: Zero disclosure of proprietary firmware code, private keys, neural network weights, or unit cap tables.
