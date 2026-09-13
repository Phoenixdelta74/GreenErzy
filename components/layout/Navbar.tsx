"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Cpu, Layers, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Our Vision", href: "/vision" },
    { name: "The Ecosystem", href: "/ecosystem" },
    { name: "Technology", href: "/technology" },
    { name: "Impact", href: "/impact" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06090A]/90 backdrop-blur-md border-b border-emerald-500/15 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400 transition-colors shadow-lg">
            <Cpu className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Green<span className="text-emerald-400">ERZY</span>
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wider">
                EcoTech
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wider font-mono">
              Smart Circular Electronics
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-emerald-300 bg-emerald-500/15 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/investors"
            className="text-xs font-medium text-slate-300 hover:text-emerald-300 px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
          >
            Investors
          </Link>
          <Link
            href="/join"
            className="relative group overflow-hidden px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 text-xs font-semibold tracking-wide transition-all duration-200 shadow-md shadow-emerald-500/20 flex items-center gap-1.5 focus:ring-2 focus:ring-emerald-400"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Join the Vision</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center gap-2">
          <Link
            href="/join"
            className="sm:inline-flex hidden px-3 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold items-center gap-1"
          >
            Join
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden bg-[#0A0F12] border-b border-emerald-500/20 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2.5 text-sm rounded-lg transition-colors ${
                    isActive
                      ? "text-emerald-400 bg-emerald-500/10 font-medium border border-emerald-500/20"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="border-t border-slate-800 pt-3 flex flex-col gap-2">
            <Link
              href="/investors"
              className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg"
            >
              Investor Relations & Inquiries
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg"
            >
              Contact GreenERZY
            </Link>
            <Link
              href="/join"
              className="w-full mt-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore All 6 Participation Pathways</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
