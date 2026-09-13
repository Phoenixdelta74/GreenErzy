"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, Leaf, Users, ShieldCheck, ArrowRight } from "lucide-react";

export default function ImpactCards() {
  const impacts = [
    {
      id: "economy",
      area: "ECONOMY",
      title: "Circulating Economic Value",
      message: "Keep products, materials and economic value in productive circulation for longer.",
      metrics: "Multiply hardware economic utility by 2–4x",
      icon: TrendingUp,
      color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
    },
    {
      id: "environment",
      area: "ENVIRONMENT",
      title: "Conserving Virgin Resources",
      message: "Reduce avoidable waste and improve recovery of valuable strategic resources.",
      metrics: ">95% closed-loop recovery of Au, Cu & Li",
      icon: Leaf,
      color: "from-teal-500/20 via-teal-500/5 to-transparent",
      accent: "text-teal-400",
      border: "border-teal-500/30",
    },
    {
      id: "society",
      area: "SOCIETY",
      title: "Dignified Green Livelihoods",
      message: "Create opportunities across repair, refurbishment, technology, services and new businesses.",
      metrics: "Empowering regional technicians & youth",
      icon: Users,
      color: "from-cyan-500/20 via-cyan-500/5 to-transparent",
      accent: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      id: "governance",
      area: "GOVERNANCE",
      title: "Auditable Transparency",
      message: "Enable better visibility, coordination and data-informed ecosystem management.",
      metrics: "Zero-knowledge cryptographic compliance",
      icon: ShieldCheck,
      color: "from-emerald-500/20 via-slate-800/10 to-transparent",
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
    },
  ];

  return (
    <section className="py-24 bg-[#080D10] border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Systemic Outcomes
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            What If We Changed the Journey?
          </h2>
          <p className="text-base text-slate-300 font-light max-w-xl mx-auto">
            A circular electronics economy creates measurable, long-term dividends across four vital dimensions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`rounded-2xl bg-gradient-to-b ${card.color} bg-[#0A0F13] border ${card.border} p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                      {card.area}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                      <Icon className={`w-5 h-5 ${card.accent}`} />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {card.message}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <p className="text-[10px] font-mono text-slate-400 uppercase">Target Outcome</p>
                  <p className={`text-xs font-semibold mt-0.5 ${card.accent}`}>
                    {card.metrics}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 text-xs font-mono tracking-wide transition-all"
          >
            <span>VIEW OUR DETAILED IMPACT FRAMEWORK</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
