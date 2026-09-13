export interface Article {
  slug: string;
  title: string;
  category: "Circular Electronics" | "AI & Technology" | "Digital Product Identity" | "Resource Intelligence" | "Policy & Regulation" | "Company Updates";
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  summary: string;
  featured: boolean;
  content: string[];
}

export const INSIGHTS_ARTICLES: Article[] = [
  {
    slug: "demystifying-digital-product-passports-electronics",
    title: "Demystifying Digital Product Passports: How Cryptographic Identity Reimagines E-Waste",
    category: "Digital Product Identity",
    author: {
      name: "GreenERZY Research Group",
      role: "Ecosystem Architecture Team",
    },
    publishedAt: "September 2026",
    readTime: "5 min read",
    summary: "Why persistent hardware passports are transforming compliance into a high-margin secondary market across India and global supply chains.",
    featured: true,
    content: [
      "For decades, the journey of an electronic device ended in an informational black hole the instant consumer purchase completed. Once an appliance leaves the retail showroom, manufacturers lose contact, recyclers guess material composition, and informal smelters burn toxic printed circuit boards.",
      "The Digital Product Passport (DPP) replaces this opacity with unbroken digital provenance. By binding a tamper-resistant cryptographic identifier to the physical hardware at manufacture, every subsequent repair, diagnostic test, and component upgrade becomes an immutable chapter in that device's lifecycle.",
      "Crucially, DPPs turn reverse logistics from a burdensome regulatory tax into an organized asset recovery channel. When recyclers know precisely how many grams of palladium and neodymium reside in an incoming chassis, extraction efficiency jumps by over 40% while hazardous risk drops to near zero.",
    ],
  },
  {
    slug: "urban-mining-vs-traditional-extraction",
    title: "Urban Mining vs. Traditional Extraction: The Hidden Ore Reserves in Discarded Silicon",
    category: "Resource Intelligence",
    author: {
      name: "GreenERZY Technology Group",
      role: "Resource Science & Metallurgy",
    },
    publishedAt: "August 2026",
    readTime: "7 min read",
    summary: "One ton of high-grade printed circuit boards contains up to 50 times more gold than one ton of mined gold ore. Discover the economics of precision recovery.",
    featured: false,
    content: [
      "Mining one ton of virgin rock yields on average 1 to 5 grams of gold, demanding thousands of liters of water, heavy diesel machinery, and massive habitat displacement. In contrast, one ton of discarded smartphone printed circuit boards contains between 150 to 300 grams of gold, plus kilograms of high-grade copper and grams of platinum.",
      "The bottleneck has never been the physics of metallurgy; it has been the logistics of aggregation and triage. Without digital coordination, 80% of electronics end up in general trash or unorganized scrapyards where precious elements are incinerated.",
      "GreenERZY's Resource Intelligence layer acts as an air-traffic controller for these dispersed materials, routing scrap directly to hydrometallurgical refiners who extract critical elements with closed-loop, zero-toxic-gas chemical processes.",
    ],
  },
  {
    slug: "nep-regional-hub-model-northeast-india",
    title: "Starting From the Northeast: Building India's Resilient Green Corridor",
    category: "Company Updates",
    author: {
      name: "GreenERZY Strategy Team",
      role: "Regional Infrastructure Operations",
    },
    publishedAt: "August 2026",
    readTime: "4 min read",
    summary: "Why Assam and the Northeast provide the ideal strategic proving ground for distributed circular logistics before national scaling.",
    featured: false,
    content: [
      "GreenERZY's operational roadmap begins in Northeast India. The region's unique geographical topology, growing digital adoption, and delicate ecological biodiversity make it an urgent and high-impact theater for structured resource conservation.",
      "By establishing regional aggregation nodes that connect local technicians, academic institutions, and logistics carriers in Assam, GreenERZY is testing a decentralized hub-and-spoke infrastructure that can withstand challenging transit logistics while formalizing local livelihood opportunities.",
      "Lessons learned in the Northeast will directly inform deployment across tier-1 and tier-2 corridors across India and exportable frameworks for emerging economies worldwide.",
    ],
  },
  {
    slug: "ai-diagnostics-in-component-triage",
    title: "How Computer Vision and Predictive AI Speed Up Electronics Refurbishment",
    category: "AI & Technology",
    author: {
      name: "GreenERZY AI Labs",
      role: "Applied Machine Learning",
    },
    publishedAt: "July 2026",
    readTime: "6 min read",
    summary: "Automating visual fault detection and remaining useful life (RUL) estimation for pre-owned electronic components.",
    featured: false,
    content: [
      "Manual inspection of returned hardware is labor-intensive, error-prone, and inconsistent. A technician in one center might classify an LCD panel as grade B, while another grades it as unrecoverable scrap.",
      "GreenERZY is training deep learning computer vision models capable of microscopic surface defect analysis, solder fatigue identification, and automatic component classification in under 1.5 seconds per board.",
      "Combined with automated telemetry diagnostics, this system generates an instant health score that recommends whether an asset should be serviced, refurbished, or dismantled for raw elements.",
    ],
  },
  {
    slug: "extended-producer-responsibility-evolution-india",
    title: "The Evolution of EPR in India: Moving Beyond Paper Quotas to Real Circularity",
    category: "Policy & Regulation",
    author: {
      name: "GreenERZY Policy Desk",
      role: "Regulatory & Compliance Analysis",
    },
    publishedAt: "June 2026",
    readTime: "5 min read",
    summary: "India's updated E-Waste Management Rules demand auditable proof of recycling. How digital infrastructure bridges the compliance gap.",
    featured: false,
    content: [
      "The days of superficial paper certificates in e-waste compliance are drawing to a close. Regulatory authorities and progressive enterprises are mandating verifiable, end-to-end evidence of recycling and material recovery.",
      "GreenERZY creates automated digital compliance pipelines that link physical collection weights with processor assays and certified smelter releases, providing brands with unforgeable audit packages.",
      "This systemic transparency protects companies from greenwashing penalties while rewarding those who genuinely invest in circular hardware architectures.",
    ],
  },
];
