import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, Eye, Shield, Compass, HeartHandshake } from "lucide-react";
import FinalCta from "@/components/home/FinalCta";

export const metadata = {
  title: "Our Vision & Mission | GreenERZY EcoTech",
  description:
    "Building the Smart Circular Electronics Economy — connecting products, people, businesses, resources and intelligence.",
};

export default function VisionPage() {
  const futurePoints = [
    { title: "Products have connected identities", desc: "Every hardware asset carries an immutable digital soul tracking origin, repairability, and recovery." },
    { title: "Lifecycle information becomes useful intelligence", desc: "Raw supply chain data transforms into predictive maintenance, automated triage, and trade-in pricing." },
    { title: "Repair and reuse become easier to coordinate", desc: "Independent and authorized technicians gain direct access to diagnostic schematics and authentic modules." },
    { title: "Resources become more visible and recoverable", desc: "Precious and critical minerals (Au, Cu, Li) are mapped as urban reserves ready for closed-loop hydrometallurgy." },
    { title: "Businesses can collaborate across lifecycle stages", desc: "OEMs, retailers, logistics fleets, and recyclers synchronize seamlessly on a shared digital infrastructure." },
    { title: "Communities can participate in new circular opportunities", desc: "Youth, technicians, and local entrepreneurs unlock green livelihoods through repair and aggregation." },
    { title: "Institutions can make better-informed decisions", desc: "Policy makers and enterprises access auditable, real-time ESG metrics and verified EPR compliance filings." },
  ];

  const beliefs = [
    { title: "Waste is not the end of the story.", desc: "Electronic waste is an artificial concept borne out of broken information architecture. With digital intelligence, every discarded component is a resource waiting to re-enter production." },
    { title: "A product's value should not disappear when its first use ends.", desc: "The primary consumer ownership phase is only the opening chapter. Second-life refurbishment and certified component harvesting preserve up to 80% of embodied value." },
    { title: "Technology is most powerful when it connects people and systems.", desc: "We build digital protocols not to isolate users in proprietary silos, but to connect local technicians, global OEMs, and certified recyclers in a trusted network." },
    { title: "Circularity is an economic opportunity as well as an environmental necessity.", desc: "Sustainability only scales when it creates compelling unit economics for every participant in the value chain." },
    { title: "The future must be built collaboratively.", desc: "No single company or government can solve the e-waste crisis in isolation. Real transformation requires open, shared infrastructure." },
  ];

  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <Compass className="w-3.5 h-3.5 text-emerald-400" />
          <span>Strategic North Star</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          A Smarter Electronics Economy <br />
          Starts With a <span className="text-gradient-emerald">Connected Journey.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          Electronics are essential to modern life. But the systems around them are still fragmented. GreenERZY is building toward a future where the lifecycle of electronics can be more connected, intelligent and circular.
        </p>
      </section>

      {/* Vision & Mission Core Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="rounded-3xl bg-gradient-to-br from-[#0C1418] to-[#070B0E] border border-emerald-500/30 p-8 sm:p-10 space-y-4 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
              Our Vision
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Building the Smart Circular Electronics Economy.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              We envision an intelligent, connected, and scalable ecosystem where electronics remain valuable for longer, strategic resources remain continuously visible, participants collaborate effectively, and circular economic activity becomes frictionless to manage.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#0C1418] to-[#070B0E] border border-cyan-500/30 p-8 sm:p-10 space-y-4 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/20">
              Our Mission
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Enable a Connected Circular Electronics Ecosystem.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Through intelligent digital infrastructure, decentralized lifecycle ledgers, ecosystem collaboration, and resource-focused hydrometallurgical innovation—starting from Northeast India with national and global ambition.
            </p>
          </div>

        </div>
      </section>

      {/* The Future We Imagine (7 Pillars) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Systemic Target State</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            The Future We Imagine
          </h2>
          <p className="text-sm text-slate-400 font-light">
            Seven fundamental structural evolutions enabled by GreenERZY infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {futurePoints.map((pt, idx) => (
            <div
              key={pt.title}
              className="p-6 rounded-2xl bg-[#090F13] border border-slate-800 hover:border-emerald-500/40 transition-colors space-y-2 flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center flex-shrink-0 text-emerald-400 font-mono text-xs font-bold mt-0.5">
                0{idx + 1}
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-base text-white">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Believe (5 Beliefs) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Our Tenets</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            What We Believe
          </h2>
        </div>

        <div className="space-y-4">
          {beliefs.map((b, idx) => (
            <div
              key={b.title}
              className="p-7 rounded-2xl bg-[#0C1318] border border-emerald-500/20 space-y-2 text-left"
            >
              <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider">
                Belief 0{idx + 1}
              </span>
              <h3 className="font-display font-bold text-lg text-white">
                {b.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
