"use client";

import React from "react";
import Link from "next/link";
import { Code, Building2, TrendingUp, Lightbulb, Briefcase, Users, ArrowUpRight } from "lucide-react";

export default function PathwaysGrid() {
  const pathways = [
    {
      id: "build",
      title: "BUILD WITH US",
      audience: "Software developers, AI engineers, data engineers & hardware builders",
      pitch: "Architect the cryptographic identity protocols, AI triage models, and reverse-logistics pipelines powering the circular transition.",
      cta: "Become a Builder",
      href: "/join?tab=build",
      icon: Code,
      accent: "text-emerald-400",
      border: "border-emerald-500/30 hover:border-emerald-400",
      bg: "hover:bg-emerald-500/5",
    },
    {
      id: "partner",
      title: "PARTNER WITH US",
      audience: "OEMs, distributors, retailers, recyclers & institutions",
      pitch: "Integrate Digital Product Passports, ensure effortless EPR audit compliance, and turn hardware end-of-life into high-margin circular revenues.",
      cta: "Become a Partner",
      href: "/join?tab=partner",
      icon: Building2,
      accent: "text-cyan-400",
      border: "border-cyan-500/30 hover:border-cyan-400",
      bg: "hover:bg-cyan-500/5",
    },
    {
      id: "invest",
      title: "INVEST WITH US",
      audience: "Venture funds, family offices & strategic clean-tech capital",
      pitch: "Back the critical digital and physical infrastructure connecting billions in electronic hardware and high-grade urban mineral reserves.",
      cta: "Explore Investor Thesis",
      href: "/investors",
      icon: TrendingUp,
      accent: "text-emerald-400",
      border: "border-emerald-500/30 hover:border-emerald-400",
      bg: "hover:bg-emerald-500/5",
    },
    {
      id: "innovate",
      title: "INNOVATE WITH US",
      audience: "Startups, universities & clean metallurgy researchers",
      pitch: "Test laboratory metallurgical recovery breakthroughs and computer vision algorithms on real-world industrial electronics feeds.",
      cta: "Submit an Innovation",
      href: "/join?tab=innovate",
      icon: Lightbulb,
      accent: "text-amber-400",
      border: "border-amber-500/30 hover:border-amber-400",
      bg: "hover:bg-amber-500/5",
    },
    {
      id: "career",
      title: "WORK WITH US",
      audience: "Engineers, operators, sustainability leaders & strategists",
      pitch: "Join a high-velocity team building real-world deep technology at the bleeding edge of hardware lifecycle intelligence.",
      cta: "View Open Roles",
      href: "/join?tab=career",
      icon: Briefcase,
      accent: "text-teal-400",
      border: "border-teal-500/30 hover:border-teal-400",
      bg: "hover:bg-teal-500/5",
    },
    {
      id: "community",
      title: "JOIN THE COMMUNITY",
      audience: "Students, conscious citizens, educators & repair activists",
      pitch: "Participate in local device takebacks, learn right-to-repair diagnostics, and champion zero-landfill electronic stewardship.",
      cta: "Join the Movement",
      href: "/join?tab=community",
      icon: Users,
      accent: "text-emerald-400",
      border: "border-emerald-500/30 hover:border-emerald-400",
      bg: "hover:bg-emerald-500/5",
    },
  ];

  return (
    <section className="py-24 bg-[#080D11] border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Participation Pathways
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            There Is a Place for You in the <br className="hidden sm:block" />
            <span className="text-gradient-emerald">GreenERZY Ecosystem.</span>
          </h2>
          <p className="text-base text-slate-300 font-light max-w-xl mx-auto">
            No single company can build a circular economy alone. It requires builders, businesses, investors, researchers, communities and future leaders.
          </p>
        </div>

        {/* 6 Pathways Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.id}
                className={`p-7 rounded-2xl bg-[#0C1318] border ${path.border} ${path.bg} transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                      {path.title}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                      <Icon className={`w-5 h-5 ${path.accent}`} />
                    </div>
                  </div>

                  <p className="text-xs font-mono text-emerald-400/90 leading-snug">
                    For: {path.audience}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {path.pitch}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <Link
                    href={path.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors"
                  >
                    <span>{path.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
