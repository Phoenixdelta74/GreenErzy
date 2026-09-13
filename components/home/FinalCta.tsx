"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Mail, ShieldCheck } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-28 bg-[#05080A] relative overflow-hidden circuit-grid">
      {/* Centered luminous glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>The Circular Electronics Era Has Begun</span>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          Don’t Just Watch the Future Being Built. <br />
          <span className="text-gradient-emerald">Build It With Us.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          Whether you are an electronics OEM, independent repairer, clean-tech investor, or ambitious software builder—your role in the circular infrastructure starts today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/join"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>JOIN THE VISION</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/40 text-slate-200 font-medium text-sm transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>CONTACT GREENERZY</span>
          </Link>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Enterprise Data Security
          </span>
          <span>&bull;</span>
          <span>EPR Audit Compliance Ready</span>
          <span>&bull;</span>
          <span className="text-emerald-400">Guwahati &bull; Delhi &bull; Global</span>
        </div>
      </div>
    </section>
  );
}
