import React from "react";
import Link from "next/link";
import { ArrowRight, User, Wrench, Building2 } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Device owners",
    desc: "Get a fair trade-in value, find a trusted repair shop, or drop off old devices safely.",
    cta: "Get involved",
    href: "/join?tab=community",
  },
  {
    icon: Wrench,
    title: "Repair shops and recyclers",
    desc: "Get genuine parts, training and a steady flow of devices to repair or recycle.",
    cta: "Partner with us",
    href: "/join?tab=partner",
  },
  {
    icon: Building2,
    title: "Brands and retailers",
    desc: "Meet India’s e-waste rules with the tracking and paperwork handled for you.",
    cta: "Talk to us",
    href: "/industries",
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-24 bg-[#040708] border-y border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Who it’s for</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
            A simple path for each of you.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div key={a.title} className="p-7 rounded-2xl bg-[#090F13] border border-slate-800 hover:border-emerald-500/40 transition-colors flex flex-col">
              <a.icon className="w-6 h-6 text-emerald-400" />
              <h3 className="font-display font-bold text-lg text-white mt-4">{a.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light mt-2 flex-grow">{a.desc}</p>
              <Link
                href={a.href}
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              >
                <span>{a.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
