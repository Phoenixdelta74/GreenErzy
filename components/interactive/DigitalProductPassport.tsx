"use client";

import React, { useState } from "react";
import { ShieldCheck, Cpu, FileText, Wrench, AlertCircle, CheckCircle, QrCode, Layers, Sparkles } from "lucide-react";

export default function DigitalProductPassport() {
  const [activeSection, setActiveSection] = useState<"overview" | "bom" | "repairs" | "recycling">("overview");

  return (
    <div className="rounded-3xl bg-[#090F13] border border-emerald-500/30 p-6 sm:p-10 shadow-2xl relative">
      
      {/* Passport Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <QrCode className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-xl text-white">
                Verifiable Digital Product Passport (DPP)
              </h3>
              <span className="text-[10px] font-mono uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                ESPR &bull; India EPR Compliant
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              DID: did:erzy:in:assam:98f3b2a74c6d81
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300">Status: Active Second Life</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 border-b border-slate-800 py-4 overflow-x-auto no-scrollbar">
        {[
          { id: "overview", label: "Asset Overview", icon: Cpu },
          { id: "bom", label: "Material Composition", icon: Layers },
          { id: "repairs", label: "Service & Repair Ledger", icon: Wrench },
          { id: "recycling", label: "Disassembly & Recovery", icon: ShieldCheck },
        ].map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                isSelected
                  ? "bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md shadow-emerald-500/20"
                  : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-slate-950" : "text-emerald-400"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="pt-6">
        {activeSection === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono uppercase text-slate-400">Device Model</span>
              <p className="font-display font-bold text-lg text-white">Solaris Core X-15</p>
              <p className="text-xs text-slate-400 font-mono">Manufacture Date: Jan 2024</p>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <CheckCircle className="w-3.5 h-3.5" /> OEM Cryptographic Signature Valid
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono uppercase text-slate-400">Circularity Index</span>
              <p className="font-display font-bold text-2xl text-emerald-400">88.4 / 100</p>
              <p className="text-xs text-slate-400 font-mono">Repairability Class: Grade A</p>
              <div className="pt-2 text-xs text-slate-300 font-mono">
                Component Modularity: 94% separable
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono uppercase text-slate-400">Carbon Abatement</span>
              <p className="font-display font-bold text-2xl text-cyan-400">142 kg CO2e</p>
              <p className="text-xs text-slate-400 font-mono">Saved via Life-Extension</p>
              <div className="pt-2 text-xs text-emerald-400 font-mono">
                Verified Scope 3 Offset Token
              </div>
            </div>
          </div>
        )}

        {activeSection === "bom" && (
          <div className="space-y-4 text-left">
            <p className="text-xs text-slate-300">
              Material disclosures according to European Union Ecodesign (ESPR) and India CPCB guidelines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <p className="text-xs font-mono text-amber-400">Precious Metals</p>
                <p className="text-sm font-bold text-white mt-1">Gold: 0.28 g</p>
                <p className="text-xs text-slate-400 mt-0.5">Palladium: 0.04 g &bull; Silver: 1.4 g</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <p className="text-xs font-mono text-emerald-400">Conductive Metals</p>
                <p className="text-sm font-bold text-white mt-1">Copper: 54.0 g</p>
                <p className="text-xs text-slate-400 mt-0.5">Aluminum Chassis: 320 g</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <p className="text-xs font-mono text-cyan-400">Critical Rare Earths</p>
                <p className="text-sm font-bold text-white mt-1">Neodymium: 4.8 g</p>
                <p className="text-xs text-slate-400 mt-0.5">Dysprosium in audio drivers</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <p className="text-xs font-mono text-teal-400">Recycled Content</p>
                <p className="text-sm font-bold text-white mt-1">Post-Consumer: 68%</p>
                <p className="text-xs text-slate-400 mt-0.5">Bio-based polycarbonate casing</p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "repairs" && (
          <div className="space-y-3 text-left">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <p className="text-xs font-mono text-emerald-400">Event 02 &bull; Oct 14, 2025</p>
                <p className="text-sm font-bold text-white">Battery Module Recertification</p>
                <p className="text-xs text-slate-400">Authorized Spoke Center: Guwahati East Hub &bull; Tech ID: TECH-842</p>
              </div>
              <span className="text-[10px] font-mono px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                Verified Ledger #88921
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <p className="text-xs font-mono text-emerald-400">Event 01 &bull; Feb 19, 2025</p>
                <p className="text-sm font-bold text-white">Display Panel Replacement</p>
                <p className="text-xs text-slate-400">OEM Genuine OLED Module Installed &bull; Tech ID: TECH-119</p>
              </div>
              <span className="text-[10px] font-mono px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                Verified Ledger #41029
              </span>
            </div>
          </div>
        )}

        {activeSection === "recycling" && (
          <div className="space-y-4 text-left">
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-emerald-400 font-bold">End-of-Life Routing Protocol</p>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  At end-of-use, this unit is programmed for automated intake at any GreenERZY regional hub. Battery chemistry is Li-NMC with magnetic release tabs—zero adhesive prying required.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
