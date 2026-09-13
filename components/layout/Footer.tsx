"use client";

import React from "react";
import Link from "next/link";
import { Cpu, ArrowUpRight, ShieldCheck, Globe, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040708] border-t border-slate-800/80 text-slate-400 relative overflow-hidden">
      {/* Subtle background ambient circuit glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top brand header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Green<span className="text-emerald-400">ERZY</span>{" "}
                <span className="text-xs font-mono font-normal text-emerald-400/80 uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  EcoTech
                </span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Building the Smart Circular Electronics Economy — connecting products, people, businesses, resources and intelligence across the electronics lifecycle.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Assam &amp; Northeast &bull; India &bull; Global Ambition
            </span>
            <Link
              href="/join"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 px-3.5 py-1.5 rounded-full transition-colors"
            >
              Join the Movement
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 6-Column Navigation Grid matching Section 23 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12 text-xs">
          {/* Column 1: Company */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider font-mono text-[11px] text-emerald-400">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-emerald-300 transition-colors">
                  About GreenERZY
                </Link>
              </li>
              <li>
                <Link href="/vision" className="hover:text-emerald-300 transition-colors">
                  Our Vision &amp; Mission
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:text-emerald-300 transition-colors">
                  Founder &amp; Leadership
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-emerald-300 transition-colors">
                  Systemic Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Ecosystem */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider font-mono text-[11px] text-emerald-400">
              Ecosystem
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ecosystem" className="hover:text-emerald-300 transition-colors">
                  The Connected Lifecycle
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-emerald-300 transition-colors">
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-emerald-300 transition-colors">
                  Industries &amp; Solutions
                </Link>
              </li>
              <li>
                <Link href="/technology#research" className="hover:text-emerald-300 transition-colors">
                  Research &amp; Innovation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Participate */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider font-mono text-[11px] text-emerald-400">
              Participate
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/join?tab=build" className="hover:text-emerald-300 transition-colors">
                  Build With Us
                </Link>
              </li>
              <li>
                <Link href="/join?tab=partner" className="hover:text-emerald-300 transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-emerald-300 transition-colors">
                  Invest With Us
                </Link>
              </li>
              <li>
                <Link href="/join?tab=innovate" className="hover:text-emerald-300 transition-colors">
                  Innovate With Us
                </Link>
              </li>
              <li>
                <Link href="/join?tab=career" className="hover:text-emerald-300 transition-colors">
                  Careers &amp; Talent
                </Link>
              </li>
              <li>
                <Link href="/join?tab=community" className="hover:text-emerald-300 transition-colors">
                  Join Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Insights */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider font-mono text-[11px] text-emerald-400">
              Insights
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/insights" className="hover:text-emerald-300 transition-colors">
                  Research &amp; Perspectives
                </Link>
              </li>
              <li>
                <Link href="/insights?category=policy" className="hover:text-emerald-300 transition-colors">
                  Policy &amp; EPR Updates
                </Link>
              </li>
              <li>
                <Link href="/insights?category=tech" className="hover:text-emerald-300 transition-colors">
                  Digital Product Identity
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-emerald-300 transition-colors">
                  Media &amp; Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider font-mono text-[11px] text-emerald-400">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-emerald-300 transition-colors">
                  General Contact
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-emerald-300 transition-colors">
                  Institutional Inquiries
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <span className="text-slate-500 font-mono text-[10px]">Guwahati, Assam, India</span>
              </li>
            </ul>
          </div>

          {/* Column 6: Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider font-mono text-[11px] text-emerald-400">
              Governance &amp; Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-emerald-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-300 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/terms#disclaimer" className="hover:text-emerald-300 transition-colors">
                  Public Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy#cookies" className="hover:text-emerald-300 transition-colors">
                  Cookie Preferences
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Closing Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            &copy; {currentYear} <strong className="text-slate-300">GreenERZY EcoTech Pvt. Ltd.</strong> &mdash; Building the Smart Circular Electronics Economy.
          </p>
          <p className="font-mono text-emerald-400/90 text-xs tracking-wide">
            Lifecycle First. Waste Second. Resources Always.
          </p>
        </div>
      </div>
    </footer>
  );
}
