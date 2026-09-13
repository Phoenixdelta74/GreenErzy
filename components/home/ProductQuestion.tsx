"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Eye, Sparkles } from "lucide-react";

export default function ProductQuestion() {
  const [selectedStep, setSelectedStep] = useState(3); // Start at "Use"

  const journeySteps = [
    { label: "Manufacture", state: "Assembly & DID Injection", color: "border-slate-700 text-slate-300" },
    { label: "Distribution", state: "Geofenced Cold-Chain & Freight", color: "border-slate-700 text-slate-300" },
    { label: "Retail", state: "Point of Sale & Warranty Mint", color: "border-slate-700 text-slate-300" },
    { label: "Use", state: "Consumer Ownership & Telemetry", color: "border-emerald-500 text-emerald-400 bg-emerald-500/10" },
    { label: "Repair", state: "Certified Technician Module Fix", color: "border-emerald-500 text-emerald-300" },
    { label: "Reuse", state: "Secondary Marketplace Transfer", color: "border-cyan-500 text-cyan-300" },
    { label: "Refurbish", state: "Full Diagnostics & Recertification", color: "border-cyan-500 text-cyan-300" },
    { label: "Recovery", state: "Smart Regional Aggregation Hub", color: "border-teal-500 text-teal-300" },
    { label: "Recycling", state: "Hydrometallurgical Smelting", color: "border-teal-500 text-teal-300" },
    { label: "Resources", state: "Precious Metals Return to OEM", color: "border-amber-500 text-amber-300 bg-amber-500/10" },
  ];

  return (
    <section className="py-24 bg-[#0A0F13] border-t border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono">
            <Eye className="w-3.5 h-3.5 text-emerald-400" />
            <span>The Invisible Electronics Lifecycle</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            What Happens to a Product After You Buy It?
          </h2>

          <p className="text-base text-slate-400 font-light leading-relaxed">
            We see the product. We rarely see the journey behind it—or what happens when its first life is over.
          </p>
        </div>

        {/* Interactive Lifecycle Timeline Scrubber */}
        <div className="mt-14 max-w-5xl mx-auto">
          {/* Horizontal Step Indicator */}
          <div className="relative">
            <div className="overflow-x-auto pb-4 pt-2 no-scrollbar">
              <div className="flex items-center justify-between min-w-[700px] relative px-2">
                {/* Connecting Track Line */}
                <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-0.5 bg-slate-800 z-0" />
                <div
                  className="absolute top-1/2 left-4 -translate-y-1/2 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-400 z-0 transition-all duration-300"
                  style={{ width: `${(selectedStep / (journeySteps.length - 1)) * 95}%` }}
                />

                {journeySteps.map((step, idx) => {
                  const isCurrent = selectedStep === idx;
                  const isPast = selectedStep >= idx;
                  return (
                    <button
                      key={step.label}
                      onClick={() => setSelectedStep(idx)}
                      className={`relative z-10 flex flex-col items-center group focus:outline-none`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-200 ${
                          isCurrent
                            ? "bg-emerald-400 text-slate-950 ring-4 ring-emerald-500/20 scale-125"
                            : isPast
                            ? "bg-emerald-950 text-emerald-300 border border-emerald-500/50"
                            : "bg-slate-900 text-slate-500 border border-slate-700 group-hover:border-slate-500"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <span
                        className={`text-[11px] font-mono mt-2 transition-colors whitespace-nowrap ${
                          isCurrent
                            ? "text-emerald-400 font-semibold"
                            : "text-slate-400 group-hover:text-slate-200"
                        }`}
                      >
                        {step.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Step Reveal Card */}
          <div className="mt-8 rounded-2xl bg-[#06090A] border border-emerald-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Step {selectedStep + 1} of 10
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {journeySteps[selectedStep].label} Phase
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                {journeySteps[selectedStep].state}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-light">
                GreenERZY connects this phase directly to the next, guaranteeing unbroken data custody, preventing premature landfill disposal, and orchestrating resource regeneration.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/ecosystem"
                className="px-5 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 text-xs font-mono tracking-wide transition-all flex items-center gap-1.5"
              >
                <span>SEE FULL JOURNEY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
