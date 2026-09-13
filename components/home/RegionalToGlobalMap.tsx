"use client";

import React, { useState } from "react";
import { Globe, MapPin, Navigation, ArrowRight, Sparkles, Building, Layers } from "lucide-react";

export default function RegionalToGlobalMap() {
  const [activeTier, setActiveTier] = useState<0 | 1 | 2>(0);

  const tiers = [
    {
      level: "PHASE 01",
      region: "Northeast Proving Ground",
      focus: "Assam & Northeast Corridor",
      desc: "Establishing foundational regional aggregation hubs, technician training nodes, and reverse-logistics networks in Guwahati and across Assam. Validating the hub-and-spoke model in diverse terrains.",
      milestones: [
        "Regional Hub 01 & spoke diagnostic centers",
        "Local university & research collaborations",
        "Formalization of independent repairers",
      ],
      tag: "Active Foundation",
      color: "border-emerald-500 text-emerald-400 bg-emerald-500/10",
    },
    {
      level: "PHASE 02",
      region: "Pan-India Expansion",
      focus: "National Industrial Corridors",
      desc: "Scaling digital product identity protocols and urban mining aggregation pipelines across major metropolitan manufacturing and retail clusters (Delhi-NCR, Bengaluru, Mumbai, Chennai).",
      milestones: [
        "Automated EPR compliance network for Tier-1 OEMs",
        "Multi-city hydrometallurgical refinery partnerships",
        "Standardized digital product passport adoption",
      ],
      tag: "Scaling Blueprint",
      color: "border-cyan-500 text-cyan-400 bg-cyan-500/10",
    },
    {
      level: "PHASE 03",
      region: "Global Circular Connectivity",
      focus: "International Resource Supply Chains",
      desc: "Interconnecting Indian circular feedstock with global electronics manufacturers in Europe, Japan, and North America—advancing cross-border critical raw material security and carbon credit offsets.",
      milestones: [
        "EU ESPR interoperable DPP data bridges",
        "Export of certified low-carbon recycled metals",
        "Cross-border circular economy standard alliance",
      ],
      tag: "Long-term Horizon",
      color: "border-teal-500 text-teal-400 bg-teal-500/10",
    },
  ];

  return (
    <section className="py-24 bg-[#05080A] border-b border-slate-800/80 relative overflow-hidden circuit-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Globe className="w-3.5 h-3.5" />
            <span>Geographic Scaling Roadmap</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            A Regional Beginning. <br className="hidden sm:block" />
            <span className="text-gradient-emerald">A National Ambition.</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            The journey starts in the Northeast, where a connected circular electronics ecosystem can create economic opportunity while addressing resource and environmental challenges.
          </p>
        </div>

        {/* 3-Tier Selector Buttons */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          {tiers.map((t, idx) => {
            const isSelected = activeTier === idx;
            return (
              <button
                key={t.level}
                onClick={() => setActiveTier(idx as 0 | 1 | 2)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border ${
                  isSelected
                    ? "bg-gradient-to-b from-[#0F1B22] to-[#0A1216] border-emerald-400 shadow-xl shadow-emerald-500/15 ring-1 ring-emerald-400"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500">
                    {t.level}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${t.color}`}>
                    {t.tag}
                  </span>
                </div>
                <h3 className={`font-display font-bold text-base ${isSelected ? "text-white" : "text-slate-300"}`}>
                  {t.region}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{t.focus}</p>
              </button>
            );
          })}
        </div>

        {/* Refined Vector Map & Detail Display */}
        <div className="mt-8 max-w-4xl mx-auto rounded-3xl bg-[#080D11] border border-emerald-500/20 p-8 sm:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Abstract Map Nodes */}
            <div className="lg:col-span-5 relative flex items-center justify-center p-6 bg-slate-950/80 rounded-2xl border border-slate-800">
              <div className="relative w-56 h-56 flex items-center justify-center">
                {/* Concentric rings */}
                <div className="absolute inset-0 rounded-full border border-emerald-500/10 animate-pulse-slow" />
                <div className="absolute inset-6 rounded-full border border-emerald-500/20" />
                <div className="absolute inset-14 rounded-full border border-cyan-500/30" />

                {/* Central Geographic Hub */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-emerald-500/15 border border-emerald-400 flex flex-col items-center justify-center text-center p-2">
                  <MapPin className="w-6 h-6 text-emerald-400 animate-bounce" />
                  <span className="text-[9px] font-mono font-bold text-white mt-1">
                    {activeTier === 0 ? "Guwahati, AS" : activeTier === 1 ? "Pan-India" : "Global Grid"}
                  </span>
                </div>

                {/* Orbiting Nodes */}
                <div className="absolute top-2 right-4 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-[9px] font-mono text-slate-300">
                  {activeTier === 0 ? "Spoke: Jorhat" : activeTier === 1 ? "Hub: Bengaluru" : "Tokyo Node"}
                </div>
                <div className="absolute bottom-3 left-4 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-[9px] font-mono text-slate-300">
                  {activeTier === 0 ? "Spoke: Silchar" : activeTier === 1 ? "Hub: Mumbai" : "Berlin Node"}
                </div>
              </div>
            </div>

            {/* Narrative & Milestones */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  {tiers[activeTier].level} &bull; {tiers[activeTier].focus}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  {tiers[activeTier].region}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {tiers[activeTier].desc}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  Strategic Deployment Targets:
                </p>
                <div className="space-y-2">
                  {tiers[activeTier].milestones.map((m) => (
                    <div key={m} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
