import React from "react";
import Link from "next/link";
import { ArrowRight, Smartphone, Wrench, Recycle, Factory, CheckCircle2 } from "lucide-react";
import HeroBackground from "./HeroBackground";

const journey = [
  { icon: Factory, label: "Made", detail: "Jan 2024, materials recorded" },
  { icon: Smartphone, label: "Used", detail: "Battery health 92%" },
  { icon: Wrench, label: "Repaired", detail: "New battery, genuine part" },
  { icon: Recycle, label: "Next", detail: "Resell, or recover the metals" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-20 overflow-hidden circuit-grid">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <HeroBackground />
      {/* Darken behind the text so it stays easy to read over the animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06090A]/90 via-[#06090A]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Starting in Assam, built for India</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
              Old electronics still hold value. <br className="hidden sm:block" />
              <span className="text-gradient-emerald">We make sure it isn’t thrown away.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
              GreenERZY helps phones, laptops and other devices last longer, get repaired when they break, and get recycled cleanly at the end, so the gold, copper and lithium inside can be used again.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/join"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-semibold text-sm tracking-wide transition-all duration-200 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group"
              >
                <span>Work with us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/investors"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/40 text-slate-200 font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>For investors</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md w-full">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/10 blur-xl opacity-60" />
              <div className="relative rounded-2xl bg-[#090F13]/90 border border-emerald-500/30 p-6 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <p className="font-display font-semibold text-white text-sm">A phone’s digital ID card</p>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                    Example
                  </span>
                </div>
                <p className="text-xs text-slate-400 pt-4 leading-relaxed">
                  Every device gets a simple record of where it came from, how it was cared for, and what it is made of.
                </p>
                <ol className="mt-5 space-y-4">
                  {journey.map((step) => (
                    <li key={step.label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{step.label}</p>
                        <p className="text-xs text-slate-400">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-300">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Nothing valuable ends up in a dump.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
