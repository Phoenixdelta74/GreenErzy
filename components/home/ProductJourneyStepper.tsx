"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Shield, Activity, RefreshCw } from "lucide-react";

export default function ProductJourneyStepper() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: "01",
      title: "Created",
      subtitle: "Manufacturing & Digital Product Identity",
      narrative: "The electronic device is born. GreenERZY binds an indelible Digital Product Passport (DPP) at the assembly line, recording material Bill of Materials, certified solder alloys, and disassembly protocols.",
      dataPoint: "DID Anchored: Cryptographic hash bound to hardware security element.",
      badge: "Origin",
    },
    {
      num: "02",
      title: "Distributed",
      subtitle: "Cross-Border Logistics & Custody Check",
      narrative: "Device moves through regional logistics channels. In-transit check-ins confirm batch authenticity, protecting distributors against grey-market infiltration.",
      dataPoint: "Chain-of-Custody: 100% verified transit waypoints.",
      badge: "Transit",
    },
    {
      num: "03",
      title: "Sold",
      subtitle: "Retail Point-of-Sale & Consumer Onboarding",
      narrative: "Purchase event registers active ownership. The consumer receives access to their device passport with one-click repair scheduling and guaranteed trade-in residual valuation.",
      dataPoint: "Ownership Minted: Warranty initialized with EPR compliance credit.",
      badge: "Commerce",
    },
    {
      num: "04",
      title: "Used",
      subtitle: "Active Lifecycle & Battery Health Telemetry",
      narrative: "The consumer utilizes the device. Proactive AI diagnostics monitor battery cycles and thermal profiles, suggesting preventive maintenance before failure occurs.",
      dataPoint: "Health Telemetry: 96% optimal operating efficiency score.",
      badge: "Ownership",
    },
    {
      num: "05",
      title: "Serviced",
      subtitle: "Scheduled Checkup & Dust Clearance",
      narrative: "First scheduled service event. An authorized local technician runs diagnostic scans and performs cleaning, extending expected motherboard longevity.",
      dataPoint: "Service Ledger: Maintenance performed by certified technician.",
      badge: "Maintenance",
    },
    {
      num: "06",
      title: "Repaired",
      subtitle: "Component-Level Restoration",
      narrative: "Cracked display glass is replaced with an authentic OEM module. The repair technician signs the digital ledger, preserving manufacturer warranty status.",
      dataPoint: "Component Swapped: Serialized screen verified authentic.",
      badge: "Restoration",
    },
    {
      num: "07",
      title: "Reused",
      subtitle: "Consumer Trade-In & Secondary Transfer",
      narrative: "Owner decides to upgrade. Using the GreenERZY trade-in portal, the device is wiped according to NIST 800-88 standards and sold to a secondary user at a transparent valuation.",
      dataPoint: "Residual Realized: Consumer receives instant certified payout.",
      badge: "Second Life",
    },
    {
      num: "08",
      title: "Refurbished",
      subtitle: "Full Diagnostics & Battery Cell Renewal",
      narrative: "Refurbisher replaces worn battery cells, recalibrates sensors, and issues a 1-year certified pre-owned circular warranty for another productive lifecycle.",
      dataPoint: "Lifespan Extended: Additional 36 months of active utility unlocked.",
      badge: "Renewal",
    },
    {
      num: "09",
      title: "Recovered",
      subtitle: "Smart Reverse Logistics Hub",
      narrative: "After 7 years of dual-ownership utility, hardware reaches end-of-use. Returned through a regional GreenERZY aggregation hub with complete custody tracking.",
      dataPoint: "Hub Intake: Serialized device logged at Guwahati Regional Hub.",
      badge: "Collection",
    },
    {
      num: "10",
      title: "Recycled",
      subtitle: "Hydrometallurgical Extraction",
      narrative: "Dismantled by licensed processors. Circuit boards undergo precision hydrometallurgical leaching—yielding zero hazardous toxic smoke while separating pure metals.",
      dataPoint: "Assay Verified: 0.28g Gold (Au) & 48g Copper (Cu) extracted.",
      badge: "Extraction",
    },
    {
      num: "11",
      title: "Regenerated",
      subtitle: "Resources Return to Production",
      narrative: "The recovered Gold and Copper return directly to semiconductor fabricators and hardware OEMs as certified low-carbon circular feedstock for next-generation hardware.",
      dataPoint: "Circular Loop Complete: Zero virgin rock mined for this feedstock.",
      badge: "Closed Loop",
    },
  ];

  const current = stages[activeStage];

  return (
    <section className="py-24 bg-[#05080A] border-b border-slate-800/80 relative overflow-hidden circuit-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Signature Interactive Storyboard</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            One Product. One Journey.
          </h2>
          <p className="text-base text-slate-300 font-light max-w-xl mx-auto">
            Imagine being able to understand an electronic device beyond the moment it is sold.
          </p>
        </div>

        {/* 11 Steps Horizontal Indicator */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-4 no-scrollbar">
            {stages.map((stg, idx) => {
              const isCurrent = activeStage === idx;
              return (
                <button
                  key={stg.title}
                  onClick={() => setActiveStage(idx)}
                  className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                    isCurrent
                      ? "bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-lg shadow-emerald-500/20"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                  }`}
                >
                  <span className="opacity-70 text-[10px]">{stg.num}. </span>
                  <span>{stg.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Storyboard Canvas */}
          <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#0C1418] via-[#090F13] to-[#05080A] border border-emerald-500/30 p-8 sm:p-12 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-6 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-display font-extrabold text-emerald-400">
                  {current.num}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-2xl text-white">
                      {current.title}
                    </h3>
                    <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                      {current.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {current.subtitle}
                  </p>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 disabled:opacity-30 text-slate-300 transition-colors"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-slate-400 px-2">
                  {activeStage + 1} / {stages.length}
                </span>
                <button
                  disabled={activeStage === stages.length - 1}
                  onClick={() => setActiveStage((prev) => Math.min(stages.length - 1, prev + 1))}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 disabled:opacity-30 text-slate-300 transition-colors"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Narrative text & Data insight */}
            <div className="py-8 space-y-6">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                {current.narrative}
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20 flex items-center gap-3">
                <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="font-mono text-xs">
                  <span className="text-slate-400">Digital Product Record: </span>
                  <span className="text-emerald-300 font-medium">{current.dataPoint}</span>
                </div>
              </div>
            </div>

            {/* Micro footer */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>GreenERZY Connected Lifecycle Model</span>
              <span className="text-emerald-400">Continuous Resource Circulation</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
