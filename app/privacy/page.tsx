import React from "react";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & Data Governance | GreenERZY EcoTech",
  description: "Learn how GreenERZY EcoTech protects stakeholder data, hardware telemetry, and privacy standards.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-left">
        
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
            Data Governance &bull; Version 1.0
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
            Privacy Policy &amp; Data Governance
          </h1>
          <p className="text-xs font-mono text-slate-400">
            Last Updated: September 2026 &bull; GreenERZY EcoTech Pvt. Ltd.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#090F13] border border-slate-800 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">1. Core Principles of Data Stewardship</h2>
            <p>
              GreenERZY EcoTech Pvt. Ltd. operates at the intersection of physical hardware logistics and digital lifecycle intelligence. We adhere strictly to the principle of <strong>Zero-Knowledge Asset Verification</strong>: digital product passports and repair records verify component health, material authenticity, and custody transfers without tracking individual personal identities or private device data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">2. Device Sanitization &amp; Hardware Privacy</h2>
            <p>
              Before any hardware asset is ingested into a GreenERZY regional hub for refurbishment, component harvesting, or hydrometallurgical recycling, all data-bearing storage media undergo certified sanitization conforming to <strong>NIST SP 800-88 Rev. 1</strong> standards. Devices unable to complete cryptographically verified wiping are mechanically shredded under strict chain-of-custody protocols.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">3. Information Collected via Website Forms</h2>
            <p>
              When you submit inquiries via our participation pathways (Partner, Builder, Investor, Innovate, Career, Community), we collect only the necessary contact parameters (name, verified business email, organization, and message). We never sell, lease, or monetize your contact information with external data brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">4. Cookies &amp; Telemetry</h2>
            <p id="cookies">
              We employ privacy-preserving, cookieless session analytics to monitor website performance and Core Web Vitals. No third-party invasive behavioral tracking or advertising pixels are loaded on GreenERZY properties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">5. Regulatory Compliance</h2>
            <p>
              Our governance architecture aligns with the Digital Personal Data Protection Act (DPDPA) of India and GDPR data minimization requirements for international participants.
            </p>
          </section>

          <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
            For privacy inquiries or data subject access requests, contact privacy@greenerzy.com.
          </div>
        </div>

      </div>
    </div>
  );
}
