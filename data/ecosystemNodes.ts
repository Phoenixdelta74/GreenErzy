export interface EcosystemNode {
  id: string;
  name: string;
  category: "upstream" | "core" | "downstream" | "enabler";
  role: string;
  circularValue: string;
  connections: string[];
  icon: string;
}

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: "manufacturers",
    name: "Manufacturers & OEMs",
    category: "upstream",
    role: "Product design, digital product identity assignment, and circular material sourcing.",
    circularValue: "Embed Digital Product Passports (DPP) at point of origin; enable end-of-life recovery visibility.",
    connections: ["importers", "distributors", "tech_providers", "institutions"],
    icon: "Cpu",
  },
  {
    id: "importers",
    name: "Importers & Brand Partners",
    category: "upstream",
    role: "Cross-border regulatory alignment and initial supply-chain registration.",
    circularValue: "Compliance assurance and lifecycle initialization before domestic market release.",
    connections: ["manufacturers", "distributors", "policy_stakeholders"],
    icon: "Ship",
  },
  {
    id: "distributors",
    name: "Distributors & Logistics",
    category: "upstream",
    role: "Movement coordination, custody verification, and batch tracking.",
    circularValue: "Reverse logistics routing and efficient supply-chain circulation.",
    connections: ["importers", "retailers", "collection_partners"],
    icon: "Truck",
  },
  {
    id: "retailers",
    name: "Retailers & Marketplaces",
    category: "core",
    role: "Consumer touchpoint, trade-in enablement, and lifecycle warranty initiation.",
    circularValue: "Customer onboarding to digital product passports, trade-in buybacks, and verified second-life incentives.",
    connections: ["distributors", "consumers", "refurbishers"],
    icon: "Store",
  },
  {
    id: "consumers",
    name: "Consumers & Enterprise Users",
    category: "core",
    role: "Product ownership, proactive maintenance, and responsible end-of-use return.",
    circularValue: "Access to verified repair histories, asset residual valuation, and simplified trade-in.",
    connections: ["retailers", "service_networks", "collection_partners"],
    icon: "Users",
  },
  {
    id: "service_networks",
    name: "Service & Repair Networks",
    category: "core",
    role: "Product-life extension, diagnostics, component replacement, and repair logging.",
    circularValue: "Verified repair ledger, prevention of premature disposal, and genuine parts circulation.",
    connections: ["consumers", "refurbishers", "tech_providers"],
    icon: "Wrench",
  },
  {
    id: "refurbishers",
    name: "Refurbishers & Resellers",
    category: "downstream",
    role: "Testing, component restoration, recertification, and secondary market distribution.",
    circularValue: "Multiplies useful product lifespan by 2–4x, unlocking secondary economic value.",
    connections: ["service_networks", "retailers", "recyclers"],
    icon: "RotateCcw",
  },
  {
    id: "collection_partners",
    name: "Collection & Aggregation Partners",
    category: "downstream",
    role: "Regional intake hubs, sorting, reverse logistics, and chain-of-custody verification.",
    circularValue: "Prevents toxic leakage to informal dumping; routes devices to certified processors.",
    connections: ["consumers", "distributors", "recyclers"],
    icon: "PackageCheck",
  },
  {
    id: "recyclers",
    name: "Recyclers & Smelters",
    category: "downstream",
    role: "Advanced mechanical dismantling, hydrometallurgical extraction, and raw material recovery.",
    circularValue: "Recovers Gold, Silver, Copper, Lithium, and Rare Earth Elements at >95% purity.",
    connections: ["collection_partners", "refurbishers", "manufacturers"],
    icon: "Recycle",
  },
  {
    id: "tech_providers",
    name: "Technology Providers",
    category: "enabler",
    role: "IoT, scanning infrastructure, cryptographic identity, and cloud compute nodes.",
    circularValue: "Provides continuous digital infrastructure underpinning the physical flow.",
    connections: ["manufacturers", "startups_researchers", "service_networks"],
    icon: "Database",
  },
  {
    id: "startups_researchers",
    name: "Startups & Universities",
    category: "enabler",
    role: "Circular metallurgy innovation, AI diagnostics, and reverse-logistics optimization algorithms.",
    circularValue: "Transforms laboratory science into commercial-scale green technology.",
    connections: ["tech_providers", "recyclers", "institutions"],
    icon: "GraduationCap",
  },
  {
    id: "institutions",
    name: "Institutions & Enterprises",
    category: "enabler",
    role: "Bulk asset management, circular procurement mandates, and ESG reporting.",
    circularValue: "Scale adoption and institutional compliance across commercial IT footprints.",
    connections: ["manufacturers", "collection_partners", "policy_stakeholders"],
    icon: "Building2",
  },
  {
    id: "policy_stakeholders",
    name: "Policy & Regulatory Stakeholders",
    category: "enabler",
    role: "E-waste rules compliance, Extended Producer Responsibility (EPR) auditing, and incentives.",
    circularValue: "Transparent, real-time audit trails replacing manual paper certificates.",
    connections: ["importers", "institutions", "recyclers"],
    icon: "ShieldCheck",
  },
];
