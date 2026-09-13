"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ECOSYSTEM_NODES, EcosystemNode } from "@/data/ecosystemNodes";
import { Network, ArrowUpRight, Cpu, Layers, Sparkles, CheckCircle2 } from "lucide-react";

export default function EcosystemNetwork() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("manufacturers");

  const selectedNode = ECOSYSTEM_NODES.find((n) => n.id === selectedNodeId) || ECOSYSTEM_NODES[0];

  return (
    <section id="ecosystem-network" className="py-24 bg-[#05080A] relative overflow-hidden circuit-grid border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Network className="w-3.5 h-3.5" />
            <span>Interactive Constellation Topology</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            One Ecosystem. Many Participants. <br className="hidden sm:block" />
            <span className="text-gradient-emerald">Shared Value.</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Select any participant node below to view its functional role, interconnected partners, and the circular economic value it unlocks.
          </p>
        </div>

        {/* Network Interaction Container */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 13 Interactive Participant Nodes (7 Cols) */}
          <div className="lg:col-span-7 bg-[#090F13] border border-slate-800/90 rounded-2xl p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
              <span className="font-mono text-slate-400">13 Ecosystem Stakeholders</span>
              <span className="font-mono text-emerald-400 text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Click any node to inspect links
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {ECOSYSTEM_NODES.map((node, idx) => {
                const isSelected = node.id === selectedNodeId;
                const isConnected = selectedNode.connections.includes(node.id);

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-3.5 rounded-xl text-left transition-all duration-200 border relative ${
                      isSelected
                        ? "bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-lg shadow-emerald-500/30 scale-[1.02] z-10"
                        : isConnected
                        ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-300"
                        : "bg-slate-900/50 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-mono ${isSelected ? "text-slate-950/80" : "text-slate-500"}`}>
                        0{idx + 1}
                      </span>
                      {isConnected && !isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                    </div>
                    <p className={`text-xs leading-snug font-medium ${isSelected ? "text-slate-950 font-bold" : ""}`}>
                      {node.name}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Active Selection
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> Connected Partners ({selectedNode.connections.length})
              </span>
            </div>
          </div>

          {/* Right: Selected Node Details & Connected Relationships (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0C1418] to-[#080D10] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                {selectedNode.category.toUpperCase()} NODE
              </span>
              <span className="text-xs font-mono text-slate-400">
                Connected to {selectedNode.connections.length} nodes
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-2xl text-white">
                {selectedNode.name}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {selectedNode.role}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20 space-y-1.5">
              <p className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                Circular Economy Value
              </p>
              <p className="text-xs text-slate-200 leading-relaxed font-light">
                {selectedNode.circularValue}
              </p>
            </div>

            {/* Direct Interconnected Partners */}
            <div className="space-y-2.5">
              <p className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                Directly Interconnected With:
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedNode.connections.map((connId) => {
                  const targetNode = ECOSYSTEM_NODES.find((n) => n.id === connId);
                  return (
                    <button
                      key={connId}
                      onClick={() => setSelectedNodeId(connId)}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-emerald-500/20 border border-slate-700 hover:border-emerald-500/40 text-[11px] font-mono text-emerald-300 transition-colors"
                    >
                      &rarr; {targetNode?.name || connId}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-slate-800/80">
              <Link
                href="/join?tab=partner"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs text-center flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <span>Partner in this Capacity</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
