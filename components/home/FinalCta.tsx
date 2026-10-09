import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-28 bg-[#05080A] relative overflow-hidden circuit-grid">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
          Find your place in the loop.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          Whether you repair devices, make or sell them, or want to invest in cleaner electronics, we would like to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/join"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group"
          >
            <span>Work with us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/40 text-slate-200 font-medium text-sm transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact us</span>
          </Link>
        </div>

        <p className="pt-4 text-xs font-mono text-slate-400">Based in Guwahati, Assam, India</p>
      </div>
    </section>
  );
}
