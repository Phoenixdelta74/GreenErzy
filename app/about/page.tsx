import React from "react";
import Link from "next/link";
import { ShieldCheck, Cpu, Award, Globe, Users, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import FinalCta from "@/components/home/FinalCta";

export const metadata = {
  title: "About GreenERZY EcoTech | Building the Circular Future",
  description:
    "Learn about GreenERZY EcoTech Pvt. Ltd. — our story, leadership structure, regional roots in Assam, and institutional credibility standards.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Institutional Profile</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          We Are Building What We Believe <br />
          the Electronics Economy <span className="text-gradient-emerald">Needs Next.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          GreenERZY EcoTech Pvt. Ltd. is a technology-led GreenTech / CleanTech / DeepTech enterprise pioneering the Smart Circular Electronics Economy.
        </p>
      </section>

      {/* Company Story & Genesis */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-[#090F13] border border-emerald-500/30 p-8 sm:p-12 space-y-6 shadow-2xl text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
            Our Foundation &amp; Philosophy
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            From Fragmented Scrapping to Resource Intelligence
          </h2>
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
            <p>
              Electronics are the lifeblood of modern society, driving communication, work, mobility, and computation. Yet, the economic model governing their afterlife has remained primitive for decades: make, sell, use, and discard into informal scrapyards where precious minerals are burnt or lost forever.
            </p>
            <p>
              GreenERZY EcoTech was founded on a simple conviction: <strong>The product may reach an end, but its resources never have to.</strong> We unite cutting-edge digital infrastructure—cryptographic product passports, automated computer vision diagnostics, and reverse logistics routing—with advanced hydrometallurgical recovery to ensure that hardware remains productive for longer and materials circulate indefinitely.
            </p>
            <p>
              Headquartered with initial operations rooted in Assam and Northeast India, we are proving that decentralized circular models can thrive in challenging regional geographies before scaling nationally across India and connecting with global circular markets.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Governance Structure */}
      <section id="leadership" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Team &amp; Governance</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Leadership &amp; Advisory Council
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Guided by clean-tech operators, systems architects, and circular economy researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-[#090F13] border border-slate-800 space-y-4 text-left">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Executive Leadership</h3>
              <p className="text-xs font-mono text-emerald-400">Strategy &amp; Ecosystem Design</p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Steering the commercial thesis, regulatory alignment with India’s CPCB/EPR framework, and regional infrastructure rollout.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#090F13] border border-slate-800 space-y-4 text-left">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
              <Cpu className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Technology Architecture</h3>
              <p className="text-xs font-mono text-cyan-400">Digital Identity &amp; AI Systems</p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Designing tamper-evident product passport protocols, AI diagnostic vision models, and ERP interoperability layers.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#090F13] border border-slate-800 space-y-4 text-left">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/15 border border-teal-400/40 flex items-center justify-center text-teal-400">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Operations &amp; Metallurgy</h3>
              <p className="text-xs font-mono text-teal-400">Hub Logistics &amp; Clean Recovery</p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Orchestrating regional collection networks, certified smelter partnerships, and closed-loop material assays.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs font-mono text-slate-400">
          Executive profiles are updated in accordance with company governance filings and official disclosures.
        </div>
      </section>

      {/* Credibility & Ethics Charter */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-slate-950 border border-emerald-500/20 p-8 sm:p-10 space-y-6 text-left">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-400" />
            <h3 className="font-display font-bold text-xl text-white">
              Credibility &amp; Transparency Charter
            </h3>
          </div>
          <p className="text-xs text-slate-300 font-light leading-relaxed">
            In strict compliance with our company governance brief, GreenERZY adheres to complete factual integrity across all public disclosures:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#090F13] border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Startup India &amp; DPIIT Alignment
              </span>
              <p className="text-[11px] text-slate-400 font-mono">
                Operating under DPIIT recognized frameworks for innovative clean-tech enterprises.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#090F13] border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero Fabricated Metrics
              </span>
              <p className="text-[11px] text-slate-400 font-mono">
                All reported metrics originate from empirical pilot audits and certified laboratory assays.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#090F13] border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Academic &amp; Research Testbeds
              </span>
              <p className="text-[11px] text-slate-400 font-mono">
                Actively collaborating with regional research institutions and university metallurgy departments.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#090F13] border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Privacy &amp; Data Security
              </span>
              <p className="text-[11px] text-slate-400 font-mono">
                Hardware lifecycle records respect user privacy with zero-knowledge cryptographic verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
