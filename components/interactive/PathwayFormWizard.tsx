"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Code, Building2, TrendingUp, Lightbulb, Briefcase, Users, CheckCircle2, ArrowRight, Loader2, ShieldCheck, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

type PathwayType = "builder" | "partner" | "investor" | "innovate" | "career" | "community";

export default function PathwayFormWizard() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get("tab") as PathwayType) || "partner";

  const [activeTab, setActiveTab] = useState<PathwayType>("partner");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ id: string; type: string; name: string } | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    organizationType: "OEM / Hardware Manufacturer",
    interest: "Digital Product Passport Integration",
    investorType: "Venture Capital / Growth Equity",
    ticketRange: "$500k - $2M",
    discipline: "Full-Stack / Systems Engineer",
    portfolioUrl: "",
    innovationType: "Circular Metallurgy / Extraction",
    innovationStage: "Lab Prototype / Pilot",
    careerRole: "Senior Systems Architect",
    participantType: "Student / Academic Researcher",
    location: "Guwahati, Assam",
    message: "",
  });

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && ["builder", "partner", "investor", "innovate", "career", "community"].includes(tabParam)) {
      setActiveTab(tabParam as PathwayType);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pathway: activeTab,
          ...formData,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmittedData({
          id: data.leadId || "GRZ-" + Math.floor(100000 + Math.random() * 900000),
          type: activeTab.toUpperCase(),
          name: formData.name,
        });
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00D084", "#10B981", "#06B6D4", "#E0F2FE"],
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabs = [
    { id: "partner", label: "Partner", icon: Building2, desc: "OEMs, Recyclers, Retailers" },
    { id: "builder", label: "Builder", icon: Code, desc: "Developers & Engineers" },
    { id: "investor", label: "Investor", icon: TrendingUp, desc: "Strategic Capital" },
    { id: "innovate", label: "Innovate", icon: Lightbulb, desc: "Startups & Research" },
    { id: "career", label: "Career", icon: Briefcase, desc: "Join Our Core Team" },
    { id: "community", label: "Community", icon: Users, desc: "Citizens & Students" },
  ];

  if (submittedData) {
    return (
      <div className="rounded-3xl bg-[#090F13] border border-emerald-500/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl max-w-2xl mx-auto glow-emerald">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 uppercase tracking-widest">
            Application Received &bull; {submittedData.type}
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Welcome to the Movement, {submittedData.name}
          </h3>
          <p className="text-sm text-slate-300 font-light max-w-md mx-auto">
            Your inquiry has been registered in the GreenERZY ecosystem pipeline. Our team will review your submission and reach out within 48 business hours.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 space-y-1 max-w-sm mx-auto">
          <div className="flex justify-between">
            <span>Reference ID:</span>
            <span className="text-emerald-400 font-bold">{submittedData.id}</span>
          </div>
          <div className="flex justify-between">
            <span>Routing Node:</span>
            <span className="text-slate-200">Guwahati Operations Desk</span>
          </div>
          <div className="flex justify-between">
            <span>Privacy Standard:</span>
            <span className="text-slate-200">Confidential / Encrypted</span>
          </div>
        </div>

        <button
          onClick={() => setSubmittedData(null)}
          className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-[#090F13] border border-emerald-500/30 p-6 sm:p-10 shadow-2xl relative">
      
      {/* 6 Tabs Navigator */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 border-b border-slate-800 pb-6">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isSelected = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as PathwayType)}
              className={`p-3 rounded-xl text-left transition-all duration-200 flex flex-col justify-between border ${
                isSelected
                  ? "bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-lg shadow-emerald-500/20"
                  : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <Icon className={`w-4 h-4 ${isSelected ? "text-slate-950" : "text-emerald-400"}`} />
                <span className="text-[10px] font-mono opacity-70">
                  {isSelected ? "ACTIVE" : ""}
                </span>
              </div>
              <div>
                <p className="text-xs font-bold leading-tight">{t.label}</p>
                <p className={`text-[10px] truncate ${isSelected ? "text-slate-900/80" : "text-slate-500"}`}>
                  {t.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Form Header */}
      <div className="py-6 border-b border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-xl text-white">
            {activeTab === "partner" && "Partner With Us: Build the Circular Ecosystem"}
            {activeTab === "builder" && "Build With Us: Architect the Circular Stack"}
            {activeTab === "investor" && "Invest With Us: Scale Sustainable Infrastructure"}
            {activeTab === "innovate" && "Innovate With Us: Commercialize Clean Tech"}
            {activeTab === "career" && "Work With Us: Join the GreenERZY Core Team"}
            {activeTab === "community" && "Join the Community: Champion Electronics Stewardship"}
          </h3>
          <p className="text-xs text-slate-400 font-light mt-0.5">
            Dedicated pathway form. All submissions are processed securely under GreenERZY’s data governance standards.
          </p>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 whitespace-nowrap">
          Secured Lead Pipeline
        </span>
      </div>

      {/* The Dynamic Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-left">
        
        {/* Row 1: Common Identity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300">
              Your Full Name <span className="text-emerald-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ananya Sharma"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 font-sans"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300">
              Work / Direct Email <span className="text-emerald-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="ananya@organization.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 font-sans"
            />
          </div>
        </div>

        {/* Tab Specific Fields */}
        {activeTab === "partner" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Organization Name *</label>
              <input
                type="text"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                placeholder="Apex Electronics Ltd."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Organization Type *</label>
              <select
                name="organizationType"
                value={formData.organizationType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-400 font-sans"
              >
                <option>OEM / Hardware Manufacturer</option>
                <option>Distributor / Importer</option>
                <option>Electronics Retailer</option>
                <option>Service & Repair Network</option>
                <option>Refurbisher / Secondary Market</option>
                <option>Authorized Recycler / Smelter</option>
                <option>Government / Regulatory Body</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Primary Interest Area *</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-400 font-sans"
              >
                <option>Digital Product Passport Integration</option>
                <option>Automated EPR Compliance Filing</option>
                <option>Reverse Logistics & Hub Ingestion</option>
                <option>Secondary Device Certification</option>
                <option>Hydrometallurgical Scrap Offtake</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === "builder" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Technical Discipline *</label>
              <select
                name="discipline"
                value={formData.discipline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-400"
              >
                <option>Full-Stack / Systems Engineer</option>
                <option>AI / Computer Vision Engineer</option>
                <option>Data / Pipeline Engineer</option>
                <option>Cryptographic & DID Protocol Architect</option>
                <option>Embedded Hardware & IoT Specialist</option>
                <option>Product & Spatial UI Designer</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">GitHub / Portfolio / LinkedIn *</label>
              <input
                type="url"
                name="portfolioUrl"
                required
                value={formData.portfolioUrl}
                onChange={handleChange}
                placeholder="https://github.com/yourhandle"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>
        )}

        {activeTab === "investor" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Institution / Fund *</label>
              <input
                type="text"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                placeholder="Nordic CleanTech Capital"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Investor Type *</label>
              <select
                name="investorType"
                value={formData.investorType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-400"
              >
                <option>Venture Capital / Growth Equity</option>
                <option>Family Office</option>
                <option>Corporate Venture (CVC)</option>
                <option>Sovereign / Impact Fund</option>
                <option>Strategic Angel Syndicate</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Target Ticket Range</label>
              <select
                name="ticketRange"
                value={formData.ticketRange}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-400"
              >
                <option>$250k - $500k</option>
                <option>$500k - $2M</option>
                <option>$2M - $5M+</option>
                <option>Strategic Joint Venture / Co-Build</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === "innovate" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">University / Startup Name *</label>
              <input
                type="text"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                placeholder="IIT Guwahati Tech Lab"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Innovation Focus *</label>
              <select
                name="innovationType"
                value={formData.innovationType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-400"
              >
                <option>Circular Metallurgy / Chemical Extraction</option>
                <option>AI Visual Inspection & Diagnostics</option>
                <option>Battery Regeneration & Cell Reconditioning</option>
                <option>Reverse Logistics Optimization</option>
                <option>Polymer / Plastic Upcycling</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Development Stage *</label>
              <select
                name="innovationStage"
                value={formData.innovationStage}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-400"
              >
                <option>Academic Research / Patent Pending</option>
                <option>Lab Prototype / Pilot</option>
                <option>Validated Commercial Scale</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === "career" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Desired Role Track *</label>
              <input
                type="text"
                name="careerRole"
                required
                value={formData.careerRole}
                onChange={handleChange}
                placeholder="Senior Systems Architect / Operations Lead"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Resume Link / LinkedIn URL *</label>
              <input
                type="url"
                name="portfolioUrl"
                required
                value={formData.portfolioUrl}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>
        )}

        {activeTab === "community" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Participant Type *</label>
              <select
                name="participantType"
                value={formData.participantType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-emerald-400"
              >
                <option>Student / Academic Researcher</option>
                <option>Independent Hardware Technician</option>
                <option>Conscious Consumer / Advocate</option>
                <option>Educator / Community Organizer</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300">Location (City, State) *</label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="Guwahati, Assam"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>
        )}

        {/* Message Box */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-300">
            Tell us about your project, background, or objectives
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share key details or questions..."
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 font-sans"
          />
        </div>

        {/* Consent & Submit */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Encrypted submission &bull; No third-party data sharing</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                <span>Encrypting &amp; Submitting...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>SUBMIT {activeTab.toUpperCase()} APPLICATION</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
