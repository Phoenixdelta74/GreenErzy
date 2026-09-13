import React from "react";
import Link from "next/link";
import { LIFECYCLE_STAGES } from "@/data/lifecycleStages";
import { Network, Sparkles, ArrowRight, Building, Layers, ShieldCheck, MapPin, Cpu } from "lucide-react";
import EcosystemNetwork from "@/components/home/EcosystemNetwork";
import FinalCta from "@/components/home/FinalCta";

export const metadata = {
  title: "The Ecosystem & Lifecycle Architecture | GreenERZY EcoTech",
  description:
    "Explore the 9-stage circular electronics lifecycle and distributed hub-and-spoke infrastructure connecting creation to regeneration.",
};

export default function EcosystemPage() {
  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <Network className="w-3.5 h-3.5" />
          <span>Connected Lifecycle Infrastructure</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          One Connected Ecosystem. <br />
          <span className="text-gradient-emerald">From Creation to Regeneration.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          The GreenERZY ecosystem unites hardware manufacturers, logistics fleets, retailers, technicians, refurbishers, and hydrometallurgical processors into a synchronized circular loop.
        </p>
      </section>

      {/* 9-Stage Comprehensive Lifecycle Table / Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Architecture Specification</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            The 9-Stage Circular Electronics Lifecycle
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Every phase produces tangible economic value and verifiable digital provenance.
          </p>
        </div>

        <div className="space-y-4">
          {LIFECYCLE_STAGES.map((stg) => (
            <div
              key={stg.id}
              className="rounded-2xl bg-[#090F13] border border-slate-800 hover:border-emerald-500/40 p-6 sm:p-8 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-3 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-xs font-mono font-bold text-emerald-400">
                    {stg.step}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    {stg.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  {stg.shortDesc}
                </p>
              </div>

              <div className="lg:col-span-5 space-y-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                <p>{stg.detailedDesc}</p>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                  <span className="text-slate-400">Digital Artifact: </span>
                  {stg.digitalOutput}
                </div>
              </div>

              <div className="lg:col-span-4 space-y-2">
                <p className="text-[10px] font-mono uppercase text-slate-400">Participating Stakeholders</p>
                <div className="flex flex-wrap gap-1.5">
                  {stg.participants.map((p) => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-[11px] font-mono text-slate-300"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hub-and-Spoke Physical Infrastructure Concept */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#0C151A] via-[#080D10] to-[#040708] border border-emerald-500/30 p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="space-y-3 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
              Physical + Digital Topology
            </span>
            <h2 className="font-display font-extrabold text-3xl text-white">
              The Distributed Hub-and-Spoke Concept
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-light max-w-3xl">
              GreenERZY supports a distributed physical ecosystem in which regional aggregation hubs, neighborhood spoke centres, and digital cloud infrastructure work as one synchronized machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-white">Regional Mega Hubs</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                High-capacity aggregation facilities equipped with optical triage sorting, automated weighbridges, and secure warehousing for hazardous transit batches.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-white">Neighborhood Spokes</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Vetted local repair franchises and community deposit kiosks providing rapid diagnostic evaluations, battery swaps, and certified consumer intake.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-white">Digital Mesh</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Real-time API ledger matching available scrap volumes with licensed hydrometallurgical refiners, optimizing reverse freight efficiency.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80">
            <p className="text-xs font-mono text-slate-400">
              Explore how your organization can participate as a regional hub or spoke node.
            </p>
            <Link
              href="/join?tab=partner"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold font-mono tracking-wide transition-colors flex items-center gap-1.5"
            >
              <span>PARTNER WITH US</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Constellation */}
      <EcosystemNetwork />

      <FinalCta />
    </div>
  );
}
