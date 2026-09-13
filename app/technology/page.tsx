import React from "react";
import Link from "next/link";
import { TECH_PILLARS } from "@/data/techPillars";
import DigitalProductPassport from "@/components/interactive/DigitalProductPassport";
import ResourceSimulator from "@/components/interactive/ResourceSimulator";
import { Cpu, Fingerprint, FileCheck, BrainCircuit, GitFork, Layers, Network, ShieldAlert, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import FinalCta from "@/components/home/FinalCta";

export const metadata = {
  title: "Technology Stack & Circular Architecture | GreenERZY EcoTech",
  description:
    "Explore the intelligence behind the circular economy: Digital Product Passports, AI triage diagnostics, and Resource Intelligence.",
};

const iconMap: Record<string, any> = {
  Fingerprint,
  FileCheck,
  BrainCircuit,
  GitFork,
  Layers,
  Network,
  ShieldAlert,
};

export default function TechnologyPage() {
  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <Cpu className="w-3.5 h-3.5" />
          <span>DeepTech Enabling Layer</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Intelligence Behind the <br />
          <span className="text-gradient-emerald">Circular Economy.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          GreenERZY is developing a technology stack that connects physical products and real-world activity with digital identity, data, intelligence, and decision support.
        </p>

        {/* Public disclosure governance notice */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400 max-w-xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>Public Capability Overview &bull; Proprietary algorithm weights and infrastructure topologies protected.</span>
        </div>
      </section>

      {/* Interactive DPP Live Demo */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-3 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Interactive Prototype</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Digital Product Passport (DPP) Interface
          </h2>
          <p className="text-xs text-slate-400 font-light">
            Interact with a live sample passport for a hardware device, demonstrating material breakdowns, verified repair ledgers, and end-of-life instructions.
          </p>
        </div>

        <DigitalProductPassport />
      </section>

      {/* 7 Technology Pillars Detail Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Core Capabilities</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            The Seven Technology Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_PILLARS.map((p) => {
            const Icon = iconMap[p.icon] || Cpu;
            return (
              <div
                key={p.id}
                className="p-7 rounded-2xl bg-[#090F13] border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400/80 mt-0.5">{p.tagline}</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {p.explanation}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800">
                  <p className="text-[10px] font-mono uppercase text-slate-400">Key Subsystems</p>
                  <ul className="space-y-1">
                    {p.capabilities.map((c) => (
                      <li key={c} className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Resource Simulator Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Urban Mining Analytics</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Resource Intelligence Engine
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mx-auto">
            Simulate hardware fleet recovery yields and carbon savings using hydrometallurgical extraction modeling.
          </p>
        </div>

        <ResourceSimulator />
      </section>

      <FinalCta />
    </div>
  );
}
