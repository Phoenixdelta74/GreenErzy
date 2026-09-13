"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INSIGHTS_ARTICLES, Article } from "@/data/insightsArticles";
import { BookOpen, Search, ArrowUpRight, Sparkles, Clock, User, X } from "lucide-react";
import FinalCta from "@/components/home/FinalCta";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = [
    "All",
    "Digital Product Identity",
    "Resource Intelligence",
    "Company Updates",
    "AI & Technology",
    "Policy & Regulation",
  ];

  const filteredArticles = INSIGHTS_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Research, Analysis &amp; Field Notes</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Insights from the Frontier of <br />
          <span className="text-gradient-emerald">Circular Electronics.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          Deep dives into Digital Product Passports, urban metallurgy, AI diagnostic systems, and policy evolutions shaping the future of hardware.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#090F13] border border-slate-800 p-4 rounded-2xl">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? "bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-sm"
                    : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search research & papers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 font-mono"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <article
              key={art.slug}
              onClick={() => setActiveArticle(art)}
              className="p-7 rounded-3xl bg-[#090F13] border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 cursor-pointer group hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h2 className="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {art.title}
                </h2>

                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="truncate max-w-[150px]">{art.author.name}</span>
                </div>
                <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Read &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reader Modal for Selected Article */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#090F13] border border-emerald-500/40 rounded-3xl p-6 sm:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto space-y-6 relative shadow-2xl">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                {activeArticle.category} &bull; {activeArticle.readTime}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 border-b border-slate-800 pb-4">
                <span>By {activeArticle.author.name}</span>
                <span>&bull;</span>
                <span>{activeArticle.publishedAt}</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800 flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">GreenERZY Research Library</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      <FinalCta />
    </div>
  );
}
