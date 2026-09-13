# GreenERZY EcoTech — Web Platform

> **Building the Smart Circular Electronics Economy**  
> *Lifecycle First. Waste Second. Resources Always.*

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-emerald.svg)](./terms)

The official web platform for **GreenERZY EcoTech Pvt. Ltd.**, engineered to position the company as an institutional GreenTech / CleanTech / DeepTech infrastructure pioneer. The platform connects products, people, businesses, resources, and intelligence across the entire electronics lifecycle.

---

## 🌟 Visual & Architectural Highlights

The platform adheres to a **Deep Tech Hybrid** visual paradigm (**70% visual experience / 30% text**):
- **Obsidian Dark Foundation (`#040708` – `#0A0F13`)**: For cinematic hero moments, hardware nodes, and circuit topologies.
- **Luminous Circular Accents (`#00D084` – `#06B6D4`)**: Highlighting active lifecycle stages, telemetry streams, and recovery assays.
- **High-Trust Institutional Clarity**: For verified governance, CPCB / EPR compliance declarations, and legal frameworks.

---

## ⚡ Signature Interactive Modules

1. **Cinematic Hero Circuit & Telemetry Node (`HeroSection.tsx`)**: Central electronic hardware node with live telemetry tabs for *DID Identity*, *Battery Health*, and *Material Assays*.
2. **10-Step Interactive Lifecycle Scrubber (`ProductQuestion.tsx`)**: Answers *"What Happens to a Product After You Buy It?"* from manufacturing to closed-loop resources.
3. **Linear &rarr; Circular Transformer (`LinearToCircular.tsx`)**: Interactive toggle demonstrating the transition from the old linear dead-end (*Make &rarr; Discard*, losing &gt;80% materials) into GreenERZY's 9-stage circular loop.
4. **Physical + Digital Connectivity Engine (`ProductsToPossibilities.tsx`)**: Interactive selector across 7 core dimensions: *Product, Business, People, Data, Services, Resources, and Intelligence*.
5. **13-Node Ecosystem Constellation (`EcosystemNetwork.tsx`)**: Dynamic network graph mapping all 13 ecosystem participants with real-time connection badges and circular value indicators.
6. **One Product. One Journey Storyboard (`ProductJourneyStepper.tsx`)**: 11-step interactive narrative stepping through a hardware asset's life from assembly to hydrometallurgical return.
7. **Resource Intelligence Simulator (`ResourceSimulator.tsx`)**: Interactive urban mining calculator estimating Gold (Au), Copper (Cu), and Neodymium yields, virgin ore saved, and CO₂ emissions abated across fleet volumes.
8. **Digital Product Passport (DPP) Live Prototype (`DigitalProductPassport.tsx`)**: Verifiable DPP prototype with DID hash, BOM composition (ESPR / India EPR compliant), service ledger, and end-of-life disassembly safety instructions.
9. **Regional to Global Scaling Visualizer (`RegionalToGlobalMap.tsx`)**: 3-stage animated geographic roadmap spanning *Phase 1 (Assam & Northeast)* &rarr; *Phase 2 (Pan-India)* &rarr; *Phase 3 (Global Circular Supply Chains)*.
10. **6-in-1 Dedicated Participation Portal (`PathwayFormWizard.tsx`)**: Dedicated tabbed forms on `/join` for **Builders, Partners, Investors, Innovators, Careers, and Community**, complete with instant validation and confetti feedback.

---

## 🗺️ Page Directory & Information Architecture

| Route | Page | Focus & Content |
| :--- | :--- | :--- |
| **`/`** | **Home** | Master flagship homepage featuring all 11 brief narrative sections |
| **`/vision`** | **Our Vision** | Strategic North Star, Mission, 7 Future Pillars, and 5 Core Beliefs |
| **`/ecosystem`** | **The Ecosystem** | 9-Stage Lifecycle Architecture table & physical Hub-and-Spoke model |
| **`/technology`** | **Technology Stack** | 7 Technology Pillars, interactive DPP demo, and Resource Intelligence simulator |
| **`/impact`** | **Impact** | Economic, Environmental, Social, and Governance pillars + Verified Metrics Tracker |
| **`/industries`** | **Industries & Solutions** | Interactive switcher across 9 industry verticals (OEMs, Retail, Recyclers, etc.) |
| **`/about`** | **About Us** | Company story, Assam headquarters, leadership structure, and ethics charter |
| **`/investors`** | **Investors** | 6-pillar investment thesis, high-level business model, and private data room request |
| **`/insights`** | **Insights & Newsroom** | CMS-ready articles with category filters, live search, and reading modal |
| **`/join`** | **Join Us** | 6-in-1 tabbed participation portal and lead capture engine |
| **`/contact`** | **Contact** | Headquarters info, operations desk, and direct departmental inquiry form |
| **`/privacy`** | **Privacy Policy** | Zero-knowledge asset verification, NIST 800-88 sanitization, DPDPA compliance |
| **`/terms`** | **Terms of Use** | Disclaimers, forward-looking statements, and public disclosure boundaries |
| **`/api/leads`** | **API Endpoint** | Server-side validator and unique lead reference generator (`GRZ-XXXXXX-XXXX`) |

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client Hydration)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom Deep Tech Hybrid tokens
- **Typography**: Space Grotesk, Inter, and JetBrains Mono via `next/font/google`
- **Icons**: [Lucide React](https://lucide.dev/)
- **FX & Particles**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Motion**: Declarative CSS keyframe animations & [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v20.0.0` or higher
- **npm**: `v10.0.0` or higher

### 1. Installation
Clone or navigate to the project workspace and install dependencies:
```bash
cd c:/Saurik/GreenEnergy
npm install
```

### 2. Development Server
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
Compile an optimized production bundle:
```bash
npm run build
npm run start
```

---

## 📖 Complete Documentation Suite

For detailed technical, operational, and design guidelines, refer to the dedicated markdown manuals in the project root:

- 🏛️ **[architecture.md](./architecture.md)**: Technical design principles, system topology, component hierarchy, and security standards.
- 🛠️ **[masterdeveloper.md](./masterdeveloper.md)**: Agent-ready developer handbook, directory file maps, coding rules, and extension recipes.
- 🧪 **[testing.md](./testing.md)**: Automated testing strategy, test scripts (`test_api.py`, `test_routes.py`), E2E verification criteria, and a11y benchmarks.
- 🎨 **[designer.md](./designer.md)**: UI/UX standards, design system tokens, color palettes, typography, spacing, and audit checklists.
- 🔧 **[maintenance.md](./maintenance.md)**: Routine maintenance calendar, operations runbooks, environment variable requirements, and disaster recovery.
- 📝 **[change_log.md](./change_log.md)**: Living version history and changelog adhering to Semantic Versioning.

---

## 🔒 Governance, Compliance & Privacy

- **Data Minimization**: Operates under **Zero-Knowledge Asset Verification**; hardware lifecycle records track components, not private citizen data.
- **Hardware Sanitization**: Conforms to **NIST SP 800-88 Rev. 1** cryptographic wiping standards for all retired assets.
- **Regulatory Alignment**: Fully aligned with India's **CPCB / E-Waste Management Rules (EPR)** and the European Union's **Ecodesign for Sustainable Products Regulation (ESPR)**.

---

## 🏢 Company Information

**GreenERZY EcoTech Pvt. Ltd.**  
*Registered Office & Operations:* Guwahati, Assam, India  
*Official Contact:* [contact@greenerzy.com](mailto:contact@greenerzy.com) &bull; [partnerships@greenerzy.com](mailto:partnerships@greenerzy.com)  

&copy; 2026 GreenERZY EcoTech Pvt. Ltd. All rights reserved.
