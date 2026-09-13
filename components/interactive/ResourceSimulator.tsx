"use client";

import React, { useState } from "react";
import { Layers, Sparkles, Scale, TrendingUp, ShieldCheck, Cpu } from "lucide-react";

export default function ResourceSimulator() {
  const [deviceType, setDeviceType] = useState<"smartphones" | "laptops" | "servers">("smartphones");
  const [quantity, setQuantity] = useState<number>(5000);

  // Multipliers per device
  const multipliers = {
    smartphones: {
      goldPerUnit: 0.034, // grams
      copperPerUnit: 0.015, // kg
      rareEarthPerUnit: 0.002, // kg
      virginOreAvoidedPerUnit: 0.025, // tons of ore per phone
      co2AbatedPerUnit: 0.008, // tons CO2
      economicResidual: 850, // INR per unit
    },
    laptops: {
      goldPerUnit: 0.22, // grams
      copperPerUnit: 0.085, // kg
      rareEarthPerUnit: 0.012, // kg
      virginOreAvoidedPerUnit: 0.14, // tons of ore per laptop
      co2AbatedPerUnit: 0.045, // tons CO2
      economicResidual: 4200, // INR per unit
    },
    servers: {
      goldPerUnit: 1.85, // grams
      copperPerUnit: 0.95, // kg
      rareEarthPerUnit: 0.11, // kg
      virginOreAvoidedPerUnit: 1.25, // tons of ore per server
      co2AbatedPerUnit: 0.38, // tons CO2
      economicResidual: 28500, // INR per unit
    },
  };

  const currentMult = multipliers[deviceType];
  const totalGoldGrams = (quantity * currentMult.goldPerUnit).toFixed(1);
  const totalCopperKg = (quantity * currentMult.copperPerUnit).toFixed(0);
  const totalRareEarthKg = (quantity * currentMult.rareEarthPerUnit).toFixed(1);
  const totalOreAvoidedTons = (quantity * currentMult.virginOreAvoidedPerUnit).toFixed(0);
  const totalCo2Tons = (quantity * currentMult.co2AbatedPerUnit).toFixed(0);
  const totalEconomicValueINR = (quantity * currentMult.economicResidual).toLocaleString("en-IN");

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#0D1418] to-[#070B0E] border border-emerald-500/30 p-6 sm:p-10 shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Resource Intelligence Simulator
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1 font-light">
            Quantify the hidden mineral reserves and carbon savings locked inside retired hardware fleets.
          </p>
        </div>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          Hydrometallurgical Recovery Model
        </span>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Device Type Selector */}
        <div className="space-y-3 text-left">
          <label className="text-xs font-mono text-slate-300">
            Select Asset Category
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(["smartphones", "laptops", "servers"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setDeviceType(type)}
                className={`py-2.5 px-3 rounded-xl text-xs font-mono capitalize transition-all border ${
                  deviceType === type
                    ? "bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md shadow-emerald-500/20"
                    : "bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Slider */}
        <div className="space-y-3 text-left">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-slate-300">Fleet Volume</span>
            <span className="text-emerald-400 font-bold text-sm">
              {quantity.toLocaleString()} units
            </span>
          </div>
          <input
            type="range"
            min={500}
            max={50000}
            step={500}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>500 units</span>
            <span>25,000 units</span>
            <span>50,000 units</span>
          </div>
        </div>

      </div>

      {/* Calculated Output Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-amber-500/20 space-y-1">
          <p className="text-[10px] font-mono uppercase text-amber-400">Pure Gold (Au)</p>
          <p className="text-xl font-display font-bold text-white">{totalGoldGrams} g</p>
          <p className="text-[10px] text-slate-500 font-mono">&gt;99.5% Assay Purity</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/20 space-y-1">
          <p className="text-[10px] font-mono uppercase text-emerald-400">Copper (Cu)</p>
          <p className="text-xl font-display font-bold text-white">{totalCopperKg} kg</p>
          <p className="text-[10px] text-slate-500 font-mono">Electrolytic Grade</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 space-y-1">
          <p className="text-[10px] font-mono uppercase text-cyan-400">Rare Earths</p>
          <p className="text-xl font-display font-bold text-white">{totalRareEarthKg} kg</p>
          <p className="text-[10px] text-slate-500 font-mono">Neodymium &amp; Dy</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/80 border border-teal-500/20 space-y-1">
          <p className="text-[10px] font-mono uppercase text-teal-400">Ore Mining Avoided</p>
          <p className="text-xl font-display font-bold text-white">{totalOreAvoidedTons} tons</p>
          <p className="text-[10px] text-slate-500 font-mono">Virgin Rock Saved</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/20 space-y-1">
          <p className="text-[10px] font-mono uppercase text-emerald-400">CO2e Abated</p>
          <p className="text-xl font-display font-bold text-white">{totalCo2Tons} tons</p>
          <p className="text-[10px] text-slate-500 font-mono">Scope 3 Avoidance</p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-400/40 space-y-1">
          <p className="text-[10px] font-mono uppercase text-emerald-300">Circular Realization</p>
          <p className="text-lg font-display font-bold text-emerald-400">₹{totalEconomicValueINR}</p>
          <p className="text-[10px] text-emerald-400/70 font-mono">Residual Recovery</p>
        </div>

      </div>

      <div className="pt-2 text-center text-xs font-mono text-slate-400">
        Simulated based on global hydrometallurgical recovery benchmarks. Connect your corporate hardware ledger to receive verified batch audits.
      </div>
    </div>
  );
}
