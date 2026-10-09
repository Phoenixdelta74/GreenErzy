import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const phases = [
  { tag: "Now", title: "Assam and the Northeast", desc: "Our first collection hub in Guwahati, local repair partners, and training for technicians." },
  { tag: "Next", title: "Across India", desc: "Take what works in the Northeast to other states." },
  { tag: "Later", title: "Beyond India", desc: "Connect recovered materials to manufacturers worldwide." },
];

const goals = [
  { value: "100,000+", label: "devices given a digital ID" },
  { value: "50+", label: "partner businesses" },
  { value: "500+", label: "green jobs" },
  { value: "25+", label: "districts in the Northeast" },
];

export default function StartingInAssam() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Where we start</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
            Starting in Assam, growing step by step.
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            We are proving the model in the Northeast first, where getting it right is hardest, before growing across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((p) => (
            <div key={p.title} className="p-7 rounded-2xl bg-[#090F13] border border-slate-800 space-y-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <MapPin className="w-3 h-3" />
                {p.tag}
              </span>
              <h3 className="font-display font-bold text-lg text-white">{p.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-[#090F13] border border-emerald-500/25 p-7">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
            <h3 className="font-display font-bold text-lg text-white">Our goals for the Northeast</h3>
            <p className="text-xs text-slate-400">These are targets, not results yet. We will report real numbers as we reach them.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((g) => (
              <div key={g.label}>
                <p className="font-display font-extrabold text-3xl text-emerald-300">{g.value}</p>
                <p className="text-sm text-slate-300 mt-1">{g.label}</p>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/impact"
          className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
        >
          <span>See the impact we are working towards</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
