"use client";

import React from "react";
import Link from "next/link";
import { Fingerprint, BrainCircuit, GitFork, Layers, Cpu, Network, ArrowRight } from "lucide-react";

export default function TechPillarsTeaser() {
  const pillars = [
    {
      id: "identity",
      title: "IDENTITY",
      description: "Give products a digital identity so their lifecycle can be connected.",
      icon: Fingerprint,
      accent: "text-emerald-400",
    },
    {
      id: "intelligence",
      title: "INTELLIGENCE",
      description: "Turn lifecycle information into useful insights and decisions.",
      icon: BrainCircuit,
      accent: "text-cyan-400",
    },
    {
      id: "traceability",
      title: "TRACEABILITY",
      description: "Make movement, service and recovery activities more visible.",
      icon: GitFork,
      accent: "text-teal-400",
    },
    {
      id: "resource",
      title: "RESOURCE INTELLIGENCE",
      description: "Understand where materials and economic value exist.",
      icon: Layers,
      accent: "text-amber-400",
    },
    {
      id: "ai",
      title: "AI & AUTOMATION",
      description: "Support prediction, optimization, classification and decision-making.",
      icon: Cpu,
      accent: "text-emerald-400",
    },
    {
      id: "ecosystem",
      title: "CONNECTED ECOSYSTEM",
      description: "Enable different participants to work through shared digital infrastructure.",
      icon: Network,
      accent: "text-cyan-400",
    },
  ];

  return (
    <section className="py-24 bg-[#080D11] border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            DeepTech &bull; CleanTech Infrastructure
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Technology Should Make the Ecosystem Simpler.
          </h2>
          <p className="text-base text-slate-300 font-light max-w-xl mx-auto">
            We use technology as an enabling layer—not as the story itself.
          </p>
        </div>

        {/* 6 Technology Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-[#0B1216] border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 space-y-4 group hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-colors">
                  <Icon className={`w-6 h-6 ${pillar.accent}`} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-base text-white tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 hover:border-emerald-500 text-emerald-300 hover:text-emerald-200 text-xs font-mono tracking-wide transition-all shadow-lg"
          >
            <span>EXPLORE OUR TECHNOLOGY STACK</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
