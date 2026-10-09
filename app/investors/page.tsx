import React from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight, Lock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Investors | GreenERZY EcoTech",
  description:
    "Why GreenERZY exists, how it makes money, and where we are today. Request our investor information.",
};

export default function InvestorsPage() {
  // TODO: add a source link for the market figures below before launch.
  const whyNow = [
    {
      title: "A large, growing problem",
      desc: "India is one of the world's largest producers of e-waste, at over 1.7 million tonnes a year. Less than 15% goes through formal, safe recycling.",
    },
    {
      title: "New rules make it urgent",
      desc: "India's e-waste rules and the EU's digital product passport rules mean brands must now prove where their devices end up.",
    },
    {
      title: "Nobody connects the pieces",
      desc: "Brands, repair shops, scrap collectors and recyclers work separately today. GreenERZY links them into one system.",
    },
    {
      title: "Valuable materials",
      desc: "Circuit boards hold far more gold and copper per tonne than mined ore, which makes recovery worth doing well.",
    },
  ];

  const revenue = [
    {
      title: "Software for brands",
      desc: "Subscriptions for manufacturers and retailers to issue and manage digital ID cards for their devices, plus usage fees for connecting their systems.",
    },
    {
      title: "Compliance and certification fees",
      desc: "Fees for handling e-waste reporting, and for inspecting and certifying second-hand devices before resale.",
    },
    {
      title: "Recovered materials",
      desc: "A share of the value of the gold, copper and other metals recovered through our recycling partners.",
    },
  ];

  const goals = [
    { value: "100,000+", label: "devices given a digital ID" },
    { value: "50+", label: "partner businesses" },
    { value: "500+", label: "green jobs" },
  ];

  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>For investors</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Turning India’s e-waste <br />
          <span className="text-gradient-emerald">into a working business.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          GreenERZY connects the companies that make, fix and recycle electronics, and will earn from software, compliance services and recovered metals.
        </p>
      </section>

      {/* Why now */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">The opportunity</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">Why this, and why now</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyNow.map((item, idx) => (
            <div
              key={item.title}
              className="p-7 rounded-2xl bg-[#090F13] border border-slate-800 hover:border-emerald-500/40 transition-colors space-y-3 text-left"
            >
              <span className="text-xs font-mono text-emerald-400 font-bold">0{idx + 1}</span>
              <h3 className="font-display font-bold text-lg text-white">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business model */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-[#0B1216] border border-emerald-500/30 p-8 sm:p-12 shadow-2xl space-y-8 text-left">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Business model</span>
            <h2 className="font-display font-extrabold text-3xl text-white">Three ways we earn</h2>
            <p className="text-sm text-slate-300 font-light max-w-2xl">
              Steady subscription income from brands, plus fees and material revenue that grow with every device we handle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {revenue.map((r) => (
              <div key={r.title} className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h3 className="font-display font-bold text-base text-emerald-300">{r.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we are */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-3 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Where we are</span>
          <h2 className="font-display font-extrabold text-3xl text-white">Starting in Assam</h2>
          <p className="text-sm text-slate-300 font-light max-w-2xl">
            We are building our first collection hub and partner network in Guwahati. The Northeast is our testing ground before we grow across India.
          </p>
        </div>
        <div className="rounded-2xl bg-[#090F13] border border-slate-800 p-7">
          <p className="text-xs text-slate-400 mb-5">Our goals for the Northeast. These are targets, not results yet.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {goals.map((g) => (
              <div key={g.label} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400/60 mt-1" />
                <div>
                  <p className="font-display font-extrabold text-2xl text-white">{g.value}</p>
                  <p className="text-sm text-slate-300">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0C151A] via-[#090F13] to-[#040708] border border-emerald-500/40 space-y-6 glow-emerald">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">Let’s talk.</h2>
          <p className="text-sm text-slate-300 font-light max-w-xl mx-auto">
            We welcome conversations with venture funds, family offices and strategic partners.
          </p>
          <div className="pt-2">
            <Link
              href="/join?tab=investor"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-emerald-500/20"
            >
              <span>Request investor information</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="inline-flex items-center gap-2 text-xs text-slate-400">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            Financials and the full deck are shared privately on request.
          </p>
        </div>
      </section>
    </div>
  );
}
