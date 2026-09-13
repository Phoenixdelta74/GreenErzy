export interface LifecycleStage {
  id: string;
  step: number;
  name: string;
  shortDesc: string;
  detailedDesc: string;
  participants: string[];
  digitalOutput: string;
  linearComparison: string;
}

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: "create",
    step: 1,
    name: "CREATE",
    shortDesc: "Manufacture & Component Assembly",
    detailedDesc: "The physical device is engineered and assigned a unique Digital Product Passport (DPP) containing material bill of materials, disassembly guide, and warranty token.",
    participants: ["OEMs", "Component Makers", "GreenERZY Registry"],
    digitalOutput: "Cryptographic Device Identity (DID) & Component Ledger",
    linearComparison: "In linear models, products are created with no plan or metadata for post-consumer recovery.",
  },
  {
    id: "move",
    step: 2,
    name: "MOVE",
    shortDesc: "Distribution & Custody Tracking",
    detailedDesc: "Real-time movement through global and regional supply chains with verified custody handoffs and environmental footprint logging.",
    participants: ["Logistics Providers", "Customs / Importers", "Regional Hubs"],
    digitalOutput: "Chain-of-Custody Checkpoint Logs & Transit Verification",
    linearComparison: "Linear logistics focus only on forward shipping speed with zero visibility once sold.",
  },
  {
    id: "sell",
    step: 3,
    name: "SELL",
    shortDesc: "Retail & Consumer Onboarding",
    detailedDesc: "Purchase event automatically transfers digital ownership, activates circular warranty coverage, and registers prospective trade-in value thresholds.",
    participants: ["Retailers", "E-Commerce Platforms", "Consumers"],
    digitalOutput: "Active Digital Product Passport & Ownership Certificate",
    linearComparison: "Sales receipt is where brand responsibility traditionally ended permanently.",
  },
  {
    id: "use",
    step: 4,
    name: "USE",
    shortDesc: "Active Ownership & Telemetry",
    detailedDesc: "Consumers receive intelligent battery health updates, firmware optimization, maintenance alerts, and repairability rights notices.",
    participants: ["Device Owners", "Enterprise Fleet Managers"],
    digitalOutput: "Device Health Telemetry & Maintenance Reminders",
    linearComparison: "No engagement after purchase; users are nudged into premature upgrades.",
  },
  {
    id: "service",
    step: 5,
    name: "SERVICE",
    shortDesc: "Diagnostics, Maintenance & Repair",
    detailedDesc: "Certified repair networks diagnose issues, install genuine replacement components, and update the device's authenticated repair history.",
    participants: ["Authorized & Independent Technicians", "Parts Distributors"],
    digitalOutput: "Immutable Service Ledger Entry & Renewed Health Score",
    linearComparison: "Repairs are difficult, overpriced, or void warranties, driving disposal.",
  },
  {
    id: "extend",
    step: 6,
    name: "EXTEND",
    shortDesc: "Refurbishment & Second-Life Resale",
    detailedDesc: "Products entering upgrade cycles are graded, restored with verified components, and matched to secondary buyers with transparent warranties.",
    participants: ["Certified Refurbishers", "Secondary Marketplaces"],
    digitalOutput: "Second-Life Certification & Residual Value Ledger",
    linearComparison: "Old units gather dust in drawers or are dumped into uncontrolled informal streams.",
  },
  {
    id: "recover",
    step: 7,
    name: "RECOVER",
    shortDesc: "Smart Collection & Reverse Logistics",
    detailedDesc: "At end of functional life, devices are collected via regional hubs, incentivized deposit returns, and enterprise takeback programs.",
    participants: ["Regional Collection Hubs", "Reverse Logistics Fleets"],
    digitalOutput: "E-Waste Ingestion Receipt & Traceable Chain of Custody",
    linearComparison: "Devices are discarded with general municipal garbage or hazardous informal burning.",
  },
  {
    id: "recycle",
    step: 8,
    name: "RECYCLE",
    shortDesc: "Hydrometallurgical Extraction",
    detailedDesc: "Precision robotic dismantling segregates high-grade circuit boards, lithium cells, and rare earth magnets for closed-loop chemical extraction.",
    participants: ["Licensed Clean Recyclers", "Smelters"],
    digitalOutput: "Material Purity Assay & Environmental Abatement Proof",
    linearComparison: "Crude burning releases neurotoxins, dioxins, and loses 80%+ of valuable elements.",
  },
  {
    id: "regenerate",
    step: 9,
    name: "REGENERATE",
    shortDesc: "Resource Return to Modern Production",
    detailedDesc: "Refined Gold, Copper, Palladium, and Cobalt return to industrial manufacturers as certified circular feedstock for new electronic generations.",
    participants: ["Commodity Buyers", "Electronics OEMs"],
    digitalOutput: "Circular Material Token & Scope 3 Offset Credit",
    linearComparison: "Virgin mining continues relentlessly, destroying habitats and consuming gigawatts.",
  },
];
