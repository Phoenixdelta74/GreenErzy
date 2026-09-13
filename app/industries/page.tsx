"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INDUSTRY_SECTORS } from "@/data/industries";
import { Cpu, Store, Truck, Wrench, RotateCcw, Recycle, Building2, Code, GraduationCap, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import FinalCta from "@/components/home/FinalCta";

const iconMap: Record<string, any> = {
  Cpu,
  Store,
  Truck,
  Wrench,
  RotateCcw,
  Recycle,
  Building2,
  Code,
  GraduationCap,
};

export default function IndustriesPage() {
  const [activeSectorId, setActiveSectorId] = useState<string>("oems");

  const currentSector = INDUSTRY_SECTORS.find((s) => s.id === activeSectorId) || INDUSTRY_SECTORS[0];

  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <Building2 className="w-3.5 h-3.5" />
          <span>Sector Solutions</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          One Ecosystem. Multiple Industries. <br />
          <span className="text-gradient-emerald">Shared Infrastructure.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          GreenERZY delivers tailored integration modules for every sector across the electronics value chain—from global OEMs to local repair workshops.
        </p>
      </section>

      {/* Interactive Sector Switcher & Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 9 Sectors Menu */}
          <div className="lg:col-span-4 space-y-2">
            <p className="text-xs font-mono uppercase text-slate-400 px-2 pb-2">
              Select an Industry Vertical:
            </p>
            {INDUSTRY_SECTORS.map((sec) => {
              const Icon = iconMap[sec.icon] || Cpu;
              const isSelected = sec.id === activeSectorId;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSectorId(sec.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? "bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-lg shadow-emerald-500/20"
                      : "bg-[#090F13] border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isSelected ? "text-slate-950" : "text-emerald-400"}`} />
                    <div>
                      <p className="text-xs font-bold">{sec.name}</p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? "text-slate-950" : "text-slate-600"}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Sector Solution Deep-Dive */}
          <div className="lg:col-span-8 rounded-3xl bg-gradient-to-br from-[#0C1418] via-[#090F13] to-[#05080A] border border-emerald-500/30 p-8 sm:p-12 shadow-2xl space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
                Industry Solution Profile
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {currentSector.name}
              </h2>
              <p className="text-sm text-emerald-300 font-mono">
                {currentSector.shortDescription}
              </p>
            </div>

            {/* Pain Points */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Current Industry Challenges:
              </p>
              <div className="space-y-2">
                {currentSector.challenges.map((ch) => (
                  <div key={ch} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                    <span className="text-red-400 font-mono font-bold text-sm mt-0.5">&times;</span>
                    <span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GreenERZY Solution */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-emerald-500/20 space-y-2 text-left">
              <p className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                The GreenERZY Solution Architecture
              </p>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                {currentSector.greenErzySolution}
              </p>
            </div>

            {/* Outcomes */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Measurable Business Outcomes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentSector.outcomes.map((out) => (
                  <div key={out} className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/25 space-y-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <p className="text-xs font-mono text-emerald-200">{out}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
              <p className="text-xs font-mono text-slate-400">
                Ready to deploy this capability in your operational pipeline?
              </p>
              <Link
                href="/join?tab=partner"
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono tracking-wide transition-colors flex items-center gap-1.5"
              >
                <span>CONNECT WITH OUR SOLUTIONS DESK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <FinalCta />
    </div>
  );
}
