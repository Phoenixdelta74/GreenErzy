"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Cpu, Activity, Database, RefreshCw, Zap } from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"dpp" | "telemetry" | "recovery">("dpp");

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden circuit-grid">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Vision & Positioning (approx 55%) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>The Smart Circular Electronics Economy</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
              The Future of <br className="hidden sm:block" />
              Electronics Is <span className="text-gradient-emerald">Circular.</span><br />
              Let’s Build It Together.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
              GreenERZY is building the connected ecosystem that brings <span className="text-white font-medium">products, people, businesses, resources</span> and <span className="text-white font-medium">intelligence</span> together across the electronics lifecycle.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/join"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-semibold text-sm tracking-wide transition-all duration-200 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Join the Vision</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#ecosystem-network"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/40 text-slate-200 font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Explore the Ecosystem</span>
                <span className="text-xs font-mono text-emerald-400">13 Nodes &darr;</span>
              </Link>
            </div>

            {/* Micro Highlights Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Positioning</p>
                <p className="text-xs font-semibold text-white mt-1">Lifecycle First. Resources Always.</p>
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Foundation</p>
                <p className="text-xs font-semibold text-white mt-1">Northeast &rarr; India &rarr; Global</p>
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Pillars</p>
                <p className="text-xs font-semibold text-white mt-1">Identity &bull; AI &bull; Recovery</p>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Connected Device Node Experience (approx 45%) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md w-full">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/10 blur-xl opacity-60 animate-pulse-slow" />

              {/* Main Glass Card Frame */}
              <div className="relative rounded-2xl bg-[#090F13]/90 border border-emerald-500/30 p-6 backdrop-blur-xl shadow-2xl">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-mono text-emerald-400 font-semibold uppercase tracking-wider text-[11px]">
                      Digital Product Passport (DPP)
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                    ID: ERZY-2026-X89
                  </span>
                </div>

                {/* Central Device Node Visualization */}
                <div className="py-6 relative flex flex-col items-center justify-center text-center">
                  <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-slate-900 border border-emerald-400/40 flex items-center justify-center shadow-lg shadow-emerald-500/20 group">
                    {/* Concentric pulse rings */}
                    <div className="absolute inset-0 rounded-2xl border border-emerald-400/30 animate-ping opacity-30" />
                    <Cpu className="w-12 h-12 text-emerald-400 transition-transform duration-500 group-hover:scale-110" />
                    
                    {/* Floating corner node badges */}
                    <div className="absolute -top-2 -left-2 bg-slate-900 border border-emerald-500/40 px-2 py-0.5 rounded-md text-[9px] font-mono text-emerald-300">
                      DID Verified
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-cyan-500/40 px-2 py-0.5 rounded-md text-[9px] font-mono text-cyan-300">
                      Tier-1 Circular
                    </div>
                  </div>

                  <h3 className="mt-4 font-display font-bold text-white text-base">
                    Smart Silicon Architecture
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Stage 04: Active Ownership &bull; 98.4% Health Score
                  </p>
                </div>

                {/* Interactive Telemetry Tabs */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px] font-medium text-center">
                  <button
                    onClick={() => setActiveTab("dpp")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "dpp"
                        ? "bg-emerald-500 text-slate-950 font-semibold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Identity
                  </button>
                  <button
                    onClick={() => setActiveTab("telemetry")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "telemetry"
                        ? "bg-emerald-500 text-slate-950 font-semibold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Telemetry
                  </button>
                  <button
                    onClick={() => setActiveTab("recovery")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "recovery"
                        ? "bg-emerald-500 text-slate-950 font-semibold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Materials
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-2">
                  {activeTab === "dpp" && (
                    <div className="space-y-1.5 font-mono text-[11px]">
                      <div className="flex justify-between text-slate-400">
                        <span>OEM Origin:</span>
                        <span className="text-white font-medium">EcoCompute Ind.</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Warranty State:</span>
                        <span className="text-emerald-400">Circularity Guaranteed</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Disassembly Guide:</span>
                        <span className="text-cyan-400">NIST / EU ESPR Standard</span>
                      </div>
                    </div>
                  )}

                  {activeTab === "telemetry" && (
                    <div className="space-y-1.5 font-mono text-[11px]">
                      <div className="flex justify-between text-slate-400">
                        <span>Battery Cycle Life:</span>
                        <span className="text-white">92% (680 Cycles)</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Service Status:</span>
                        <span className="text-emerald-400">Authorized Module Swapped</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Residual Value:</span>
                        <span className="text-cyan-400">₹14,200 Buyback Lock</span>
                      </div>
                    </div>
                  )}

                  {activeTab === "recovery" && (
                    <div className="space-y-1.5 font-mono text-[11px]">
                      <div className="flex justify-between text-slate-400">
                        <span>Gold (Au) Content:</span>
                        <span className="text-amber-400 font-semibold">0.24 g (99.8% Rec.)</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Copper (Cu) Grade:</span>
                        <span className="text-white">42.5 g High-Purity</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Neodymium Magnets:</span>
                        <span className="text-emerald-400">Closed-Loop Compatible</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Micro Footer Indicator */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-emerald-400" />
                    Cryptographically Anchored
                  </span>
                  <span>Node: Guwahati Hub 01</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
