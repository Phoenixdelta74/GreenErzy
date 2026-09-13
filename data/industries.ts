export interface IndustrySector {
  id: string;
  name: string;
  shortDescription: string;
  challenges: string[];
  greenErzySolution: string;
  outcomes: string[];
  icon: string;
}

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: "oems",
    name: "Electronics Manufacturers & OEMs",
    shortDescription: "Empower products with digital passports and comply effortlessly with EPR mandates.",
    challenges: [
      "Complying with stringent EPR and Digital Product Passport mandates",
      "Lack of post-sale product visibility once hardware leaves retail shelves",
      "Rising costs of virgin critical raw materials (lithium, copper, gold)",
    ],
    greenErzySolution: "GreenERZY provides OEMs with plug-and-play Digital Product Passport APIs, automated EPR registry filings, and certified circular feedstock guarantees.",
    outcomes: ["100% automated EPR audit compliance", "Direct relationship with second-life users", "Guaranteed supply of low-carbon recycled metals"],
    icon: "Cpu",
  },
  {
    id: "retail",
    name: "Electrical & Electronics Retail",
    shortDescription: "Turn customer trade-ins and warranty returns into high-margin circular touchpoints.",
    challenges: [
      "Frictional, manual trade-in appraisal workflows in retail stores",
      "Uncertain residual value and fraud in returned devices",
      "Consumer hesitation around data privacy during hardware disposal",
    ],
    greenErzySolution: "In-store digital diagnostic portals that instantly price trade-ins based on cryptographic product history and issue verifiable data-wipe certificates.",
    outcomes: ["Up to 35% higher trade-in conversion", "Instant verifiable data sanitization", "Continuous customer lifecycle engagement"],
    icon: "Store",
  },
  {
    id: "logistics",
    name: "Distributors & Logistics Fleets",
    shortDescription: "Optimize reverse logistics with dynamic routing and verified custody handoffs.",
    challenges: [
      "High freight costs for irregular, fragmented reverse logistics routes",
      "Pilferage and paper manifest discrepancies in hazardous transit",
      "Lack of specialized e-waste transit tracking infrastructure",
    ],
    greenErzySolution: "Geofenced custody tracking protocols that aggregate regional pick-ups into optimized milk-runs feeding directly into GreenERZY aggregation hubs.",
    outcomes: ["40% reduction in reverse freight costs", "Tamper-proof digital transit manifests", "Full hazardous shipment regulatory compliance"],
    icon: "Truck",
  },
  {
    id: "repair",
    name: "Service & Independent Repair",
    shortDescription: "Empower technicians with OEM repair schematics, authentic parts, and repair ledgers.",
    challenges: [
      "Access barriers to authentic diagnostic schematics and components",
      "Lack of formal certification for independent neighborhood repairers",
      "Customer distrust in unrecorded aftermarket component swaps",
    ],
    greenErzySolution: "Digital Product Identity integration that logs certified repairs, issues cryptographic warranty extensions, and routes vetted repair jobs.",
    outcomes: ["Higher customer trust via verified repair logs", "Direct access to OEM-grade parts networks", "Formalized economic inclusion for local technicians"],
    icon: "Wrench",
  },
  {
    id: "refurbishment",
    name: "Refurbishers & Secondary Markets",
    shortDescription: "Unlock premium market premiums for graded, authenticated pre-owned devices.",
    challenges: [
      "Lemon market dynamics: buyers discount all used devices due to lack of verifiable history",
      "Inconsistent grading standards across regional markets",
      "Stolen or blacklisted hardware entering secondary channels",
    ],
    greenErzySolution: "GreenERZY Second-Life Certification backed by full immutable history, component integrity checks, and warranty passports.",
    outcomes: ["20–30% higher secondary sales realization", "Zero risk of counterfeit or blacklisted units", "Institutional-grade resale assurance"],
    icon: "RotateCcw",
  },
  {
    id: "recyclers",
    name: "Recycling & Smelting Operations",
    shortDescription: "Upgrade from crude shredding to precision urban mining with material intelligence.",
    challenges: [
      "Unpredictable feedstock grades and hazardous battery contamination",
      "Low recovery yields of critical rare-earths and strategic minerals",
      "Complex paper-based compliance and pollution control reporting",
    ],
    greenErzySolution: "Pre-arrival batch intelligence forecasting exact precious metal yields and battery safety chemistry, paired with automated pollution board filings.",
    outcomes: ["High recovery yields (>95% for gold & copper)", "Safe handling protocols prior to battery shredding", "Verifiable digital certificates for carbon & EPR credits"],
    icon: "Recycle",
  },
  {
    id: "institutions",
    name: "Enterprises & Public Institutions",
    shortDescription: "Manage enterprise IT assets with audit-ready ESG reporting and zero data leakage.",
    challenges: [
      "Auditing corporate IT asset turnover across multi-city campuses",
      "Enterprise cybersecurity liability during bulk hardware retirement",
      "Complex Scope 3 supply chain carbon disclosures",
    ],
    greenErzySolution: "Turnkey enterprise IT asset disposition (ITAD) tracking with NIST 800-88 compliant digital wiping certificates and automated Scope 3 reduction reports.",
    outcomes: ["100% legal immunity from e-waste dumping", "NIST-compliant cryptographic data destruction", "Audit-ready ESG & CSR compliance packs"],
    icon: "Building2",
  },
  {
    id: "tech_partners",
    name: "Technology Providers & Integrators",
    shortDescription: "Build on GreenERZY's open circular API layer to deploy customized green solutions.",
    challenges: [
      "Absence of open standards in circular economy software",
      "High barrier to integrating disparate IoT, ERP, and recycling platforms",
    ],
    greenErzySolution: "Open API gateways, developer SDKs, and sandbox environments to integrate ERPs, supply chain software, and fintech financing.",
    outcomes: ["Rapid circular workflow development", "Interoperable hardware & software bridges", "Revenue sharing through ecosystem marketplace modules"],
    icon: "Code",
  },
  {
    id: "academia",
    name: "Research & Universities",
    shortDescription: "Leverage real-world lifecycle datasets to accelerate metallurgical and AI breakthroughs.",
    challenges: [
      "Lack of empirical real-world electronics lifecycle and failure data",
      "Difficulties in commercializing lab-scale green extraction technologies",
    ],
    greenErzySolution: "Anonymized research sandboxes and collaborative testbeds linking university metallurgy labs with industrial recycling facilities.",
    outcomes: ["Empirical datasets for peer-reviewed studies", "Fast-track technology transfer pilots", "Joint grant funding and incubator support"],
    icon: "GraduationCap",
  },
];
