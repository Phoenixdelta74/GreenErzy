"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck, Sparkles, ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import FinalCta from "@/components/home/FinalCta";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Institutional Partnership",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider uppercase">
          <Mail className="w-3.5 h-3.5" />
          <span>Institutional &amp; General Inquiries</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Connect With <span className="text-gradient-emerald">GreenERZY.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          For institutional partnerships, regulatory alignment, media inquiries, or general communications.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 rounded-3xl bg-[#090F13] border border-emerald-500/30 p-8 space-y-8 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Headquarters</span>
              <h3 className="font-display font-bold text-2xl text-white mt-1">GreenERZY EcoTech Pvt. Ltd.</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Registration &bull; Guwahati, Assam, India</p>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Operations Center</p>
                  <p className="text-slate-400">Guwahati Regional Aggregation Node 01, Assam, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Official Communications</p>
                  <p className="text-slate-400">contact@greenerzy.com &bull; partnerships@greenerzy.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <Building2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Regulatory Desk</p>
                  <p className="text-slate-400">EPR &amp; CPCB Compliance Division</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1">
              <p className="text-emerald-400 font-bold">Press &amp; Media Inquiries</p>
              <p>For official statements, interviews, and media kits, please contact press@greenerzy.com.</p>
            </div>
          </div>

          {/* Right Direct Message Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#090F13] border border-slate-800 p-8 text-left shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Message Dispatched</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto font-light">
                  Thank you. Your message has been routed to our institutional desk. We typically respond within 24–48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-xl text-white">Send Direct Inquiry</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-400 font-sans"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-400 font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Inquiry Department *</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-400 font-sans">
                    <option>Institutional Partnership &amp; OEM Integration</option>
                    <option>Regulatory &amp; EPR Compliance Desk</option>
                    <option>Media, Press &amp; Thought Leadership</option>
                    <option>General Corporate Communication</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your objectives or questions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-400 font-sans"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Protected by enterprise TLS encryption
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono tracking-wider transition-colors"
                  >
                    SEND INQUIRY &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      <FinalCta />
    </div>
  );
}
