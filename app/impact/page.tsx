import React from "react";
import Link from "next/link";
import { TrendingUp, Leaf, Users, ShieldCheck, Activity, Sparkles, ArrowRight, Clock } from "lucide-react";
import FinalCta from "@/components/home/FinalCta";

export const metadata = {
  title: "Systemic Impact & Future-Ready Metrics | GreenERZY EcoTech",
  description:
    "Circularity is an economic opportunity. Explore our economic, environmental, social, and institutional governance impact pillars.",
};

export default function ImpactPage() {
  const futureMetrics = [
    { label: "Products Connected", status: "Pilot Phase", target: "100,000+ Units Target", note: "Integrating pilot batches across Assam" },
    { label: "Lifecycle Events Recorded", status: "Pilot Phase", target: "500,000+ Checkpoints", note: "Cryptographic custody handoffs" },
    { label: "Repair / Reuse Activity", status: "Active Pilot", target: "75% Life-Extension", note: "Authorized technician network repairs" },
    { label: "Strategic Resources Recovered", status: "Lab Verified", target: ">95% Au, Cu, Li", note: "Hydrometallurgical extraction assays" },
    { label: "Businesses Connected", status: "Onboarding", target: "50+ Regional Partners", note: "OEMs, recyclers, and spoke nodes" },
    { label: "Livelihoods Supported", status: "Active Scaling", target: "500+ Green Tech Jobs", note: "Technicians and reverse logistics operators" },
    { label: "Communities Reached", status: "Active Scaling", target: "25+ Districts in NE", note: "Takeback campaigns & university workshops" },
    { label: "Carbon Abated (Scope 3)", status: "Methodology Review", target: "Verified Tonnes CO2e", note: "Third-party LCA methodology in progress" },
  ];

  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Quad-Pillar Value Creation</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Circularity Is an <br />
          <span className="text-gradient-emerald">Economic Opportunity.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          Transforming electronics from a disposable linear burden into a continuous economic flywheel for businesses, citizens, and the environment.
        </p>
      </section>

      {/* 4 Impact Pillars Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Economic */}
          <div className="rounded-3xl bg-[#090F13] border border-emerald-500/30 p-8 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Pillar 01</span>
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="font-display font-bold text-2xl text-white">Economic Impact</h2>
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed font-light">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>Enable new digital and physical services around electronics across trade-ins and warranties.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>Extend product value through verified diagnostics, component swaps, and secondary refurbishment.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>Improve visibility of recoverable materials and economic value locked in dormant hardware.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>Support new micro-enterprises and local franchise repairers across tier-2 and tier-3 towns.</span>
              </li>
            </ul>
          </div>

          {/* Environmental */}
          <div className="rounded-3xl bg-[#090F13] border border-teal-500/30 p-8 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">Pillar 02</span>
              <Leaf className="w-6 h-6 text-teal-400" />
            </div>
            <h2 className="font-display font-bold text-2xl text-white">Environmental Impact</h2>
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed font-light">
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">&bull;</span>
                <span>Support responsible, zero-landfill end-of-life electronics management.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">&bull;</span>
                <span>Improve recovery yields of strategic minerals (Gold, Copper, Lithium, Rare Earths).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">&bull;</span>
                <span>Reduce avoidable loss of critical materials to informal hazardous burning and slag.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">&bull;</span>
                <span>Dramatically slash virgin mining footprint and embodied supply-chain carbon emissions.</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="rounded-3xl bg-[#090F13] border border-cyan-500/30 p-8 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Pillar 03</span>
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="font-display font-bold text-2xl text-white">Social &amp; Livelihood Impact</h2>
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed font-light">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span>Formalize dignified pathways for independent repair technicians and scrap collectors.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span>Provide technical skilling and certification in advanced diagnostic hardware tools.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span>Connect students, academic researchers, and local youth with high-tech GreenTech employment.</span>
              </li>
            </ul>
          </div>

          {/* Governance */}
          <div className="rounded-3xl bg-[#090F13] border border-emerald-500/30 p-8 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Pillar 04</span>
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="font-display font-bold text-2xl text-white">Governance &amp; Institutional Impact</h2>
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed font-light">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>Improve end-to-end supply chain visibility and eliminate fraudulent compliance certificates.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>Automate audit-ready CPCB / EPR filings for electronics manufacturers and importers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>Provide policymakers with empirical material density data for national resource planning.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Future-Ready Impact Metrics Tracker (Transparent Stance) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-slate-950 border border-emerald-500/25 p-8 sm:p-12 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-400" />
                <h3 className="font-display font-bold text-2xl text-white">
                  Verified Impact Metrics Tracker
                </h3>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Data Integrity Policy: GreenERZY reports only verified pilot statistics. No fabricated estimations.
              </p>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Live &bull; Pilot Phase Deployment
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {futureMetrics.map((m) => (
              <div
                key={m.label}
                className="p-5 rounded-2xl bg-[#090F13] border border-slate-800 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {m.status}
                  </span>
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <h4 className="font-display font-bold text-sm text-white">{m.label}</h4>
                <p className="text-base font-display font-bold text-emerald-300">{m.target}</p>
                <p className="text-[10px] text-slate-400 font-mono">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
