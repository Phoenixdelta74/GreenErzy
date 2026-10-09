import React from "react";
import { Flame, Gem, Trash2 } from "lucide-react";

const problems = [
  {
    icon: Trash2,
    title: "Thrown away too early",
    desc: "Many devices are discarded when a small repair would have kept them going for years.",
  },
  {
    icon: Flame,
    title: "Burned in the open",
    desc: "Much of what is left goes to informal scrapyards, where it is burned or dumped. The smoke harms workers and neighbours.",
  },
  {
    icon: Gem,
    title: "Valuable metals lost",
    desc: "Gold, copper and lithium inside these devices are lost for good, so more has to be mined.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-[#040708] border-y border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">The problem</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
            Most old electronics end up burned or dumped.
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            Think of the old phones and chargers in your drawer. Once a device stops being useful to its owner, nobody keeps track of it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="p-7 rounded-2xl bg-[#090F13] border border-slate-800 space-y-3">
              <p.icon className="w-6 h-6 text-amber-400" />
              <h3 className="font-display font-bold text-lg text-white">{p.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
