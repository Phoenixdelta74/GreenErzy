import React, { Suspense } from "react";
import PathwayFormWizard from "@/components/interactive/PathwayFormWizard";
import { Sparkles, ShieldCheck, ArrowRight, Users, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Join the Vision & Participation Pathways | GreenERZY EcoTech",
  description:
    "Explore 6 dedicated participation pathways: Build, Partner, Invest, Innovate, Work, and Community with GreenERZY EcoTech.",
};

export default function JoinPage() {
  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Six Participation Routes</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          The Ecosystem Needs More Than <br />
          <span className="text-gradient-emerald">One Kind of Builder.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          Whether you are writing cryptographic protocols, manufacturing hardware, investing strategic capital, or organizing community takebacks—there is an active role for you.
        </p>
      </section>

      {/* Main Interactive Form Wizard wrapped in Suspense */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Suspense fallback={<div className="p-12 text-center font-mono text-xs text-slate-500">Loading participation portal...</div>}>
          <PathwayFormWizard />
        </Suspense>
      </section>

    </div>
  );
}
