import React from "react";
import Link from "next/link";
import { TrendingUp, ShieldCheck, ArrowRight, Lock, Database, Layers, Sparkles, Building2, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Investor Relations & Infrastructure Thesis | GreenERZY EcoTech",
  description:
    "Explore the investment thesis and business model behind building the critical infrastructure for the Smart Circular Electronics Economy.",
};

export default function InvestorsPage() {
  const thesisPillars = [
    {
      title: "Massive & Accelerating Electronics Market",
      desc: "India is the 3rd largest e-waste generator globally, generating over 1.7 million metric tonnes annually with less than 15% processed through formal, verified channels.",
    },
    {
      title: "Regulatory Tailwinds & Mandatory EPR",
      desc: "Stricter CPCB E-Waste Management Rules and EU Digital Product Passport mandates make digital traceability and recycling credits an essential corporate compliance priority.",
    },
    {
      title: "Fragmented Ecosystem Demands Connective Rails",
      desc: "The electronics afterlife is currently siloed between unorganized scrapyards, independent repairers, and disparate recyclers. GreenERZY builds the unifying digital and physical coordination layer.",
    },
    {
      title: "High-Margin Urban Mining Economics",
      desc: "Extracting gold, copper, and neodymium from printed circuit boards offers up to 50x higher ore grade concentration compared to traditional virgin open-pit mining.",
    },
    {
      title: "Scalable Regional-to-Global Blueprint",
      desc: "Proving capital-efficient unit economics across Assam and Northeast India provides a robust, stress-tested blueprint ready for rapid pan-India and emerging-market scaling.",
    },
    {
      title: "Multiple Compounding Revenue Streams",
      desc: "Diversified monetization spanning SaaS software, EPR compliance transactions, hydrometallurgical material offtake, and secondary hardware certification fees.",
    },
  ];

  const businessModelStreams = [
    { title: "Digital Infrastructure & SaaS", desc: "Enterprise subscriptions for OEMs and brand owners to issue, track, and manage Digital Product Passports across their product portfolios." },
    { title: "EPR & Compliance Services", desc: "Automated aggregation, custody verification, and digital filing packages generating compliance facilitation fees." },
    { title: "API & Enterprise Integrations", desc: "Usage-based API fees for ERP platforms (SAP, Oracle) and retail trade-in kiosks querying real-time device provenance." },
    { title: "Secondary Market Certification", desc: "Inspection, diagnostics, and warranty issuance fees for graded pre-owned hardware entering secondary markets." },
    { title: "Resource Intelligence & Scrap Offtake", desc: "Precious and strategic metal recovery margins generated from hydrometallurgical refinery partnerships." },
    { title: "Data & Lifecycle Analytics", desc: "Aggregated, anonymized material density heatmaps and lifecycle reliability reports for policymakers and insurers." },
  ];

  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Capital &amp; Platform Thesis</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Building Infrastructure for a <br />
          <span className="text-gradient-emerald">Circular Electronics Economy.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          GreenERZY represents a generational opportunity at the nexus of deep technology, hardware lifecycle intelligence, critical minerals security, and climate infrastructure.
        </p>

        {/* Private Data Room Notice */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 max-w-xl mx-auto">
          <Lock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <span>Detailed financial models, cap table, and private data room access are available to verified institutional investors upon inquiry.</span>
        </div>
      </section>

      {/* Investment Thesis (6 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Market Dynamics</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            The Investment Thesis
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Why circular electronics infrastructure is the defining clean-tech category of the next decade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thesisPillars.map((tp, idx) => (
            <div
              key={tp.title}
              className="p-7 rounded-2xl bg-[#090F13] border border-slate-800 hover:border-emerald-500/40 transition-colors space-y-3 text-left"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 font-bold">0{idx + 1}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400/60" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                {tp.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {tp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* High-Level Business Model */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-[#0B1216] border border-emerald-500/30 p-8 sm:p-12 shadow-2xl space-y-8 text-left">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
              Commercial Engine
            </span>
            <h2 className="font-display font-extrabold text-3xl text-white">
              Diversified High-Margin Business Model
            </h2>
            <p className="text-sm text-slate-300 font-light max-w-2xl">
              A hybrid SaaS and infrastructure revenue model combining recurring enterprise subscriptions with transaction-based volume monetization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {businessModelStreams.map((bm) => (
              <div key={bm.title} className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <h3 className="font-display font-bold text-sm text-white text-emerald-300">
                  {bm.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {bm.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Funding CTA matching Section 14 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0C151A] via-[#090F13] to-[#040708] border border-emerald-500/40 space-y-6 glow-emerald">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Strategic Engagement
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            If You See the Opportunity, Let’s Talk.
          </h2>
          <p className="text-sm text-slate-300 font-light max-w-xl mx-auto">
            We welcome conversations with venture capital, family offices, and strategic industrial partners committed to scalable sustainable technology.
          </p>
          <div className="pt-2">
            <Link
              href="/join?tab=investor"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-bold text-xs font-mono tracking-wider transition-all shadow-xl shadow-emerald-500/20"
            >
              <span>REQUEST INVESTOR INFORMATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
