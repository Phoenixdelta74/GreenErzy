"use client";

import React, { useState } from "react";
import { ArrowRight, RefreshCw, AlertTriangle, CheckCircle2, Zap, Sparkles } from "lucide-react";

export default function LinearToCircular() {
  const [mode, setMode] = useState<"circular" | "linear">("circular");

  const linearStages = [
    { title: "Make", detail: "Virgin mining & high-energy extraction", tag: "Toxic input" },
    { title: "Sell", detail: "Opaque retail with zero post-purchase visibility", tag: "Lost data" },
    { title: "Use", detail: "Artificial obsolescence & repair restrictions", tag: "Frictional repair" },
    { title: "Discard", detail: "Landfills, informal burning & 80%+ material loss", tag: "Permanent loss" },
  ];

  const circularStages = [
    { title: "Make", detail: "Digital Product Passport initialized at assembly" },
    { title: "Sell", detail: "Ownership ledger & automated trade-in thresholds" },
    { title: "Use", detail: "Health telemetry & right-to-repair diagnostics" },
    { title: "Repair", detail: "Certified technician network & verified components" },
    { title: "Reuse", detail: "Second-life grading & authenticated warranties" },
    { title: "Refurbish", detail: "Component renewal extending life by 2-4x" },
    { title: "Recover", detail: "Regional aggregation hubs & geofenced collection" },
    { title: "Recycle", detail: "Hydrometallurgical extraction with >95% purity" },
    { title: "Regenerate", detail: "Precious metals return as circular OEM feedstock" },
  ];

  return (
    <section className="py-24 bg-[#06090A] relative overflow-hidden circuit-grid">
      {/* Dynamic ambient background based on mode */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 ${
          mode === "circular" ? "bg-emerald-500/10" : "bg-red-500/5"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <RefreshCw className={`w-3.5 h-3.5 ${mode === "circular" ? "text-emerald-400 animate-spin" : "text-red-400"}`} />
            <span>Paradigm Shift</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            What If the Electronics Economy Worked Differently?
          </h2>

          <p className="text-base text-slate-300 font-light">
            Toggle between the current linear trajectory and GreenERZY’s connected circular ecosystem.
          </p>

          {/* Interactive Mode Toggle Bar */}
          <div className="pt-2 flex items-center justify-center">
            <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1 shadow-xl">
              <button
                onClick={() => setMode("linear")}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide transition-all ${
                  mode === "linear"
                    ? "bg-red-500/20 text-red-300 border border-red-500/40 font-bold shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                1. LINEAR (The Past)
              </button>
              <button
                onClick={() => setMode("circular")}
                className={`px-5 py-2 rounded-lg text-xs font-mono tracking-wide transition-all flex items-center gap-1.5 ${
                  mode === "circular"
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>2. CIRCULAR (GreenERZY)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Visualizer */}
        <div className="mt-14 max-w-5xl mx-auto">
          {mode === "linear" ? (
            /* LINEAR VIEW */
            <div className="rounded-2xl bg-[#0F1418] border border-red-500/30 p-8 sm:p-10 space-y-8 animate-fadeIn">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-mono text-sm font-bold uppercase tracking-wider">
                    The Linear Dead-End: Make &rarr; Sell &rarr; Use &rarr; Discard
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                  Outcome: &gt;80% Precious Metals Lost to Slag &amp; Slums
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {linearStages.map((stage, idx) => (
                  <div
                    key={stage.title}
                    className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 relative"
                  >
                    <span className="text-[10px] font-mono text-red-400 font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {stage.detail}
                    </p>
                    <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/20">
                      {stage.tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-xs text-red-200 flex items-center justify-between flex-wrap gap-4 font-mono">
                <span>Critical failure: Zero digital memory across stages. Raw materials permanently leak from the economy.</span>
                <button
                  onClick={() => setMode("circular")}
                  className="px-3 py-1 rounded bg-red-500/30 hover:bg-emerald-500 hover:text-slate-950 text-white transition-colors"
                >
                  Transform to Circular &rarr;
                </button>
              </div>
            </div>
          ) : (
            /* CIRCULAR VIEW */
            <div className="rounded-2xl bg-[#090F13] border border-emerald-500/40 p-8 sm:p-10 space-y-8 animate-fadeIn glow-emerald">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-emerald-500/20 pb-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-mono text-sm font-bold uppercase tracking-wider">
                    The Smart Circular Loop: Continuous Value Circulation
                  </span>
                </div>
                <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                  Outcome: &gt;95% Resource Retention &amp; Continuous Economic Value
                </span>
              </div>

              {/* 9-Stage Connected Sequence */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {circularStages.map((stage, idx) => (
                  <div
                    key={stage.title}
                    className="p-4 rounded-xl bg-slate-950/70 border border-emerald-500/20 hover:border-emerald-500/60 transition-colors space-y-1.5 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                        Stage 0{idx + 1}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform" />
                    </div>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-emerald-300 transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                      {stage.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Signature Brief Closing Phrase */}
              <div className="pt-6 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <p className="text-base font-display font-bold text-white tracking-wide">
                    &ldquo;The product may reach an end. Its resources don’t have to.&rdquo;
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    GreenERZY transforms e-waste compliance from a disposal penalty into a resource goldmine.
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-2 rounded-lg border border-emerald-500/30 whitespace-nowrap">
                  Unbroken Digital Provenance
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
