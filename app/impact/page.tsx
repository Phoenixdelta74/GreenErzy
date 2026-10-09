import React from "react";
import Link from "next/link";
import { TrendingUp, Leaf, Users, ShieldCheck, Activity, Sparkles, ArrowRight, Clock } from "lucide-react";
import FinalCta from "@/components/home/FinalCta";

export const metadata = {
  title: "Impact | GreenERZY EcoTech",
  description:
    "What GreenERZY aims to change for people, businesses and the environment, and the goals we are working towards.",
};

export default function ImpactPage() {
  const futureMetrics = [
    { label: "Devices with a digital ID", status: "Goal", target: "100,000+", note: "Starting with pilot batches in Assam" },
    { label: "Device updates recorded", status: "Goal", target: "500,000+", note: "Sales, repairs, drop-offs and recycling" },
    { label: "Longer device life", status: "Goal", target: "75% longer", note: "Through repair and reuse" },
    { label: "Metals recovered", status: "Goal", target: "95%+", note: "Of the gold, copper and lithium inside" },
    { label: "Partner businesses", status: "Goal", target: "50+", note: "Brands, repair shops and recyclers" },
    { label: "Green jobs", status: "Goal", target: "500+", note: "Technicians, collectors and drivers" },
    { label: "Districts reached", status: "Goal", target: "25+", note: "In the Northeast, through drop-off drives and workshops" },
    { label: "Carbon saved", status: "Goal", target: "To be measured", note: "We are choosing an independent method to measure it" },
  ];

  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Our impact</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Good for people, business <br />
          <span className="text-gradient-emerald">and the planet.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          When devices last longer and their metals are reused, everyone gains: owners save money, local businesses grow, and less is mined and burned.
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
            <h2 className="font-display font-bold text-2xl text-white">For the economy</h2>
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed font-light">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>New services such as trade-ins, warranties and certified second-hand devices.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>Devices keep their value longer through repair and refurbishment.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>We know where valuable materials are, so they can be recovered.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>More work for small repair shops in smaller towns.</span>
              </li>
            </ul>
          </div>

          {/* Environmental */}
          <div className="rounded-3xl bg-[#090F13] border border-teal-500/30 p-8 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">Pillar 02</span>
              <Leaf className="w-6 h-6 text-teal-400" />
            </div>
            <h2 className="font-display font-bold text-2xl text-white">For the environment</h2>
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed font-light">
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">&bull;</span>
                <span>Old devices are handled safely, not dumped.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">&bull;</span>
                <span>More gold, copper, lithium and rare earths recovered.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">&bull;</span>
                <span>Less open burning of electronic waste.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">&bull;</span>
                <span>Less new mining, and less carbon from making new materials.</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="rounded-3xl bg-[#090F13] border border-cyan-500/30 p-8 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Pillar 03</span>
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="font-display font-bold text-2xl text-white">For people</h2>
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed font-light">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span>Safer, fairer work for repair technicians and scrap collectors.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span>Training and certificates in modern repair skills.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">&bull;</span>
                <span>Green jobs for students and young people in the region.</span>
              </li>
            </ul>
          </div>

          {/* Governance */}
          <div className="rounded-3xl bg-[#090F13] border border-emerald-500/30 p-8 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Pillar 04</span>
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="font-display font-bold text-2xl text-white">For trust and transparency</h2>
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed font-light">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>Clear records of where each device went, so fake recycling certificates are harder to pass off.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>Easier e-waste reporting for brands and importers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>Better data for government planning.</span>
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
                  Our goals
                </h3>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-1">
                These are targets we are working towards, not results yet. We will publish real numbers as we reach them.
              </p>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Northeast India
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
