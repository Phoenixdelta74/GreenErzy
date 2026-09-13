export interface TechPillar {
  id: string;
  title: string;
  tagline: string;
  explanation: string;
  capabilities: string[];
  publicDisclosureBoundary: string;
  icon: string;
}

export const TECH_PILLARS: TechPillar[] = [
  {
    id: "identity",
    title: "Digital Product Identity",
    tagline: "Every device receives an enduring digital soul.",
    explanation: "A persistent, tamper-evident cryptographic digital identity that connects each physical electronic unit with its material composition, repair history, and ownership states across its entire lifespan.",
    capabilities: [
      "Decentralized Identifiers (DIDs) for hardware assets",
      "Dynamic QR & NFC cryptotag integration",
      "Tamper-resistant component fingerprinting",
      "Privacy-preserving identity delegation",
    ],
    publicDisclosureBoundary: "Described at capability level without exposing cryptographic key derivation or internal signature schemas.",
    icon: "Fingerprint",
  },
  {
    id: "passport",
    title: "Digital Product Passport (DPP)",
    tagline: "Structured intelligence for circular compliance.",
    explanation: "A machine-readable digital dossier containing material bill of materials, repair manuals, disassembly safety instructions, recycled content percentages, and carbon footprint metrics.",
    capabilities: [
      "EU ESPR & India EPR compliant schema",
      "Dynamic lifecycle state machine",
      "Hierarchical component breakdown tree",
      "Granular permissioned read/write access",
    ],
    publicDisclosureBoundary: "High-level standard data schemas without revealing proprietary OEM supplier bill-of-materials.",
    icon: "FileCheck",
  },
  {
    id: "intelligence",
    title: "AI & Data Intelligence",
    tagline: "Predictive decision engines for the circular economy.",
    explanation: "Machine learning models trained to classify electronic components, predict failure rates, optimize reverse logistics routes, and automate visual grading of pre-owned hardware.",
    capabilities: [
      "Computer vision for automated component triage",
      "Predictive remaining useful life (RUL) modeling",
      "Dynamic pricing & residual valuation algorithms",
      "Supply-demand matching for recycled feedstock",
    ],
    publicDisclosureBoundary: "Algorithmic purpose and outcome without disclosing model weights, training sets, or scoring formulas.",
    icon: "BrainCircuit",
  },
  {
    id: "traceability",
    title: "End-to-End Traceability",
    tagline: "Unbroken visibility from factory floor to smelter.",
    explanation: "Decentralized verification protocols that log custody transfers, repair authorizations, and recycling certifications into an auditable ledger.",
    capabilities: [
      "Zero-knowledge custody verification",
      "Automated e-waste manifest tracking",
      "Anti-counterfeiting repair component verification",
      "Real-time regulatory compliance reporting",
    ],
    publicDisclosureBoundary: "Ledger mechanics explained conceptually without exposing node topology or consensus mechanisms.",
    icon: "GitFork",
  },
  {
    id: "resource",
    title: "Resource Intelligence",
    tagline: "Urban mining transformed into precision logistics.",
    explanation: "Data models that quantify the concentration of precious, critical, and strategic materials (Au, Cu, Li, NdFeB) locked inside regional electronics inventories.",
    capabilities: [
      "Geospatial material density heatmaps",
      "Hydrometallurgical extraction yield forecasting",
      "Critical Raw Materials (CRM) supply risk hedging",
      "Scope 3 carbon abatement calculations",
    ],
    publicDisclosureBoundary: "Yield categories and chemical elements indicated without publishing proprietary metallurgical formulas.",
    icon: "Layers",
  },
  {
    id: "interoperability",
    title: "Enterprise Interoperability",
    tagline: "Connect existing ERPs, recyclers, and portals seamlessly.",
    explanation: "Universal REST & GraphQL interfaces enabling OEMs, ERP systems (SAP, Oracle), logistics carriers, and recycler scales to exchange lifecycle data effortlessly.",
    capabilities: [
      "Standardized Circular API Gateway",
      "Webhooks for custody event triggers",
      "Batch manifest ingestion pipelines",
      "SDKs for ERP and warehouse management systems",
    ],
    publicDisclosureBoundary: "Public API contract concepts without exposing production endpoints or secret keys.",
    icon: "Network",
  },
  {
    id: "governance",
    title: "Analytics & Governance Layer",
    tagline: "Verified trust for institutions, regulators, and consumers.",
    explanation: "Enterprise dashboards delivering auditable environmental metrics, ESG audit-ready packages, EPR compliance filings, and circular economy KPI tracking.",
    capabilities: [
      "Automated CPCB / EPR compliance filing packs",
      "Third-party auditor verification portals",
      "Material recovery efficiency scores",
      "Multi-tenant institutional governance controls",
    ],
    publicDisclosureBoundary: "Governance workflows illustrated without exposing client confidential internal audit records.",
    icon: "ShieldAlert",
  },
];
