import React from "react";
import Link from "next/link";
import { ArrowRight, Factory, Smartphone, Wrench, Truck, Recycle } from "lucide-react";

const steps = [
  { icon: Factory, title: "Make", desc: "Each new device gets a digital ID card that lists what it is made of." },
  { icon: Smartphone, title: "Use", desc: "Owners can see its health and know what it is worth." },
  { icon: Wrench, title: "Repair", desc: "Local repair shops fix it with genuine parts, so it lasts longer." },
  { icon: Truck, title: "Collect", desc: "When it is truly done, it is dropped off at a nearby collection point." },
  { icon: Recycle, title: "Recover", desc: "The metals inside are recovered cleanly and go back into new products." },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Our answer</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
            Keep devices working longer, then recover what’s inside.
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            We connect the people who make, sell, fix and recycle electronics, so every device follows a clear path from start to finish.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <li key={s.title} className="p-6 rounded-2xl bg-[#090F13] border border-emerald-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <s.icon className="w-6 h-6 text-emerald-400" />
                <span className="text-xs font-mono text-slate-500">{i + 1}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-white">{s.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">{s.desc}</p>
            </li>
          ))}
        </ol>

        <Link
          href="/ecosystem"
          className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
        >
          <span>See how it works in detail</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
