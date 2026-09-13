"use client";

import React, { useState } from "react";
import { Cpu, Briefcase, Users, Database, Wrench, Layers, BrainCircuit, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductsToPossibilities() {
  const [activeDimension, setActiveDimension] = useState(0);

  const dimensions = [
    {
      title: "Product",
      icon: Cpu,
      subtitle: "Physical Asset & Hardware",
      detail: "Assigned an immutable cryptographic hardware passport at assembly, embedding material composition and repair rights from day zero.",
      metric: "100% Cryptographic DPP",
    },
    {
      title: "Business",
      icon: Briefcase,
      subtitle: "Commercial Lifecycle",
      detail: "Enables OEMs, retailers, refurbishers, and recyclers to monetize every secondary transaction and automate compliance reporting.",
      metric: "EPR & Secondary Monetization",
    },
    {
      title: "People",
      icon: Users,
      subtitle: "Consumers & Technicians",
      detail: "Puts diagnostic transparency in the hands of owners while empowering neighborhood repairers with authenticated component supplies.",
      metric: "Dignified Green Livelihoods",
    },
    {
      title: "Data",
      icon: Database,
      subtitle: "Telemetry & Provenance",
      detail: "Maintains an unbroken, zero-knowledge custody ledger documenting service checks, firmware flashes, and trade-in receipts.",
      metric: "Zero-Knowledge Ledgers",
    },
    {
      title: "Services",
      icon: Wrench,
      subtitle: "Repair & Extension Network",
      detail: "Connects certified diagnostic centers with predictive maintenance dispatch, ensuring products are kept running longer.",
      metric: "2-4x Extended Product Life",
    },
    {
      title: "Resources",
      icon: Layers,
      subtitle: "Urban Mining Recovery",
      detail: "Maps precious metal concentrations (Au, Cu, Li, NdFeB) across regional device fleets for closed-loop hydrometallurgical recovery.",
      metric: ">95% Strategic Metal Yield",
    },
    {
      title: "Intelligence",
      icon: BrainCircuit,
      subtitle: "Predictive Decision Engines",
      detail: "Leverages AI models to estimate remaining useful life, triage returned circuit boards, and optimize reverse logistics corridors.",
      metric: "Instant Computer-Vision Triage",
    },
  ];

  return (
    <section className="py-24 bg-[#080D10] border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Physical &amp; Digital Convergence
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Every Product Has a Story. <br className="hidden sm:block" />
            We’re Building the Infrastructure to Connect It.
          </h2>
          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            GreenERZY brings together the physical and digital sides of the electronics economy—so the journey becomes more visible, coordinated and intelligent.
          </p>
        </div>

        {/* 7 Dimensions Interactive Selector */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {dimensions.map((dim, idx) => {
            const Icon = dim.icon;
            const isSelected = activeDimension === idx;
            return (
              <button
                key={dim.title}
                onClick={() => setActiveDimension(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between h-36 border ${
                  isSelected
                    ? "bg-emerald-500/15 border-emerald-400 shadow-lg shadow-emerald-500/15 ring-1 ring-emerald-400"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isSelected ? "bg-emerald-400 text-slate-950" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">0{idx + 1}</span>
                </div>
                <div>
                  <h3 className={`font-display font-bold text-sm ${isSelected ? "text-emerald-300" : "text-white"}`}>
                    {dim.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 truncate">{dim.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dimension Detail Card */}
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#0C1317] to-[#080D10] border border-emerald-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <span>Dimension 0{activeDimension + 1} of 07</span>
              <span>&bull;</span>
              <span>{dimensions[activeDimension].subtitle}</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {dimensions[activeDimension].title}: Connected Intelligence
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {dimensions[activeDimension].detail}
            </p>
          </div>

          <div className="w-full md:w-auto p-6 rounded-xl bg-slate-950/90 border border-emerald-500/20 text-center md:text-left min-w-[240px]">
            <p className="text-[10px] font-mono uppercase text-slate-400">Key Capability Impact</p>
            <p className="text-lg font-display font-bold text-emerald-400 mt-1">
              {dimensions[activeDimension].metric}
            </p>
            <Link
              href="/technology"
              className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-emerald-300 transition-colors"
            >
              <span>Explore Technology Stack</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
