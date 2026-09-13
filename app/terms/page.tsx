import React from "react";
import { FileText, ShieldAlert, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms of Use & Legal Disclaimer | GreenERZY EcoTech",
  description: "Terms of use and public disclosure boundaries for GreenERZY EcoTech Pvt. Ltd.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-16 w-full circuit-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-left">
        
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
            Legal &bull; Version 1.0
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
            Terms of Use &amp; Disclaimers
          </h1>
          <p className="text-xs font-mono text-slate-400">
            GreenERZY EcoTech Pvt. Ltd. &bull; Registered in Guwahati, Assam, India
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#090F13] border border-slate-800 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these Terms of Use. The website is maintained to inform stakeholders, partners, and the public about GreenERZY’s mission, technology concepts, and participation pathways.
            </p>
          </section>

          <section id="disclaimer" className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">2. Public Information &amp; Technical Disclosures</h2>
            <p>
              The diagrams, interactive simulations, and technology descriptions displayed on this website represent high-level capability overviews and conceptual architecture. In accordance with company policy, GreenERZY does not publicly publish proprietary algorithms, confidential source code, internal security topologies, or sensitive client agreements on public pages.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">3. Forward-Looking Statements &amp; Metrics</h2>
            <p>
              Certain statements regarding scaling milestones, target recovery yields, and expansion corridors are forward-looking. They reflect current engineering objectives and operational projections. Actual results may vary based on regulatory evolution, logistics terrain, and laboratory assay validations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">4. Intellectual Property</h2>
            <p>
              All trademarks, brand marks (&ldquo;GreenERZY&rdquo;, &ldquo;Lifecycle First. Waste Second. Resources Always.&rdquo;), diagrams, and original content are the exclusive intellectual property of GreenERZY EcoTech Pvt. Ltd. Unauthorized commercial reproduction is strictly prohibited.
            </p>
          </section>

          <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
            For legal inquiries, please contact legal@greenerzy.com.
          </div>
        </div>

      </div>
    </div>
  );
}
