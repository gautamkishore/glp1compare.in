"use client";

import React, { useState } from "react";
import { WHATSAPP_URL, EMAIL_CTA_URL } from "@/lib/glp1-data";

export default function SemaglutideVsTirzepatide() {
  const [months, setMonths] = useState<number>(6);
  const [format, setFormat] = useState<"vial" | "pen">("vial");

  // Semaglutide typical monthly: Vial ~1850, Pen ~3250
  // Tirzepatide typical monthly: Vial ~5600, Pen ~8200
  const semaCost = format === "vial" ? 1850 : 3250;
  const tirzCost = format === "vial" ? 5600 : 8200;

  const totalSema = semaCost * months;
  const totalTirz = tirzCost * months;
  const savings = totalTirz - totalSema;

  const pcosWhatsAppUrl = `https://wa.me/918878199499?text=Hi%2C%20comparing%20Semaglutide%20vs%20Tirzepatide%20on%20GLP1Compare.in.%20I%20have%20selected%20a%20${months}-month%20plan%20in%20${format}%20format.%20Can%20you%20help%20me%20choose%3F`;

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-teal-200/40 to-transparent" />

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-teal-100/80 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="/" className="inline-flex items-center gap-2">
            <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-xl bg-teal-900 px-2 text-sm font-semibold text-white">
              GLP-1
            </span>
            <span className="font-display text-lg font-semibold text-slate-900">
              GLP-1 Compare
            </span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-teal-900 px-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-teal-800"
          >
            WhatsApp Expert
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
        <section className="relative overflow-hidden rounded-3xl border border-teal-100 bg-white p-6 shadow-lg shadow-teal-900/5 sm:p-8">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Molecule Comparison</span>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Semaglutide vs Tirzepatide in India (2026)
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base leading-relaxed">
            Which molecule is better for your goals, body, and budget? Here is a breakdown of efficacy, side effects, and a custom interactive cost comparison.
          </p>
        </section>

        {/* Efficacy Comparison Matrix */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Efficacy &amp; Profile Matrix</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-150">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-teal-900 text-white">
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Semaglutide (Ozempic/Wegovy)</th>
                  <th className="px-4 py-3 font-semibold">Tirzepatide (Mounjaro/Yurpeak)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-4 font-semibold">Class</td>
                  <td className="px-4 py-4">Single GLP-1 Agonist</td>
                  <td className="px-4 py-4">Dual GLP-1 &amp; GIP Co-Agonist</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold">Expected Loss</td>
                  <td className="px-4 py-4">12% – 17% of body weight</td>
                  <td className="px-4 py-4 font-bold text-teal-900">15% – 22%+ of body weight</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold">Typical Monthly Price</td>
                  <td className="px-4 py-4 text-emerald-700 font-semibold">From ₹1,290 (Generic vials)</td>
                  <td className="px-4 py-4">From ₹5,600 to ₹14,000+</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold">Dosing</td>
                  <td className="px-4 py-4">Once Weekly</td>
                  <td className="px-4 py-4">Once Weekly</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold">Gastrointestinal Risks</td>
                  <td className="px-4 py-4">Moderate nausea, acid reflux, constipation</td>
                  <td className="px-4 py-4">Slightly lower nausea, but higher diarrhea risk in clinical trials</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive Cost Calculator */}
        <section className="mt-8 rounded-3xl border border-teal-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Interactive Cost of Ownership Calculator</h2>
          <p className="text-xs text-slate-500 mb-6">Estimate and compare the long-term cost differences based on format and duration.</p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Select Format</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setFormat("vial")}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-semibold border ${
                    format === "vial"
                      ? "bg-teal-900 text-white border-teal-900"
                      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  Vial (Syringe)
                </button>
                <button
                  onClick={() => setFormat("pen")}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-semibold border ${
                    format === "pen"
                      ? "bg-teal-900 text-white border-teal-900"
                      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  Adjustable Pen
                </button>
              </div>

              <label className="block text-sm font-semibold text-slate-700 mt-5 mb-2">
                Program Duration: <span className="text-teal-900 font-bold">{months} months</span>
              </label>
              <input
                type="range"
                min="1"
                max="12"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full accent-teal-800"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>1 mo</span>
                <span>6 mo</span>
                <span>12 mo</span>
              </div>
            </div>

            <div className="rounded-2xl bg-teal-50 border border-teal-100 p-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-teal-800 mb-3">Estimated Cost Comparison</h3>
              <div className="space-y-2.5 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Semaglutide Total:</span>
                  <span className="font-semibold text-slate-900">₹{totalSema.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tirzepatide Total:</span>
                  <span className="font-semibold text-slate-900">₹{totalTirz.toLocaleString()}</span>
                </div>
                <hr className="border-teal-200" />
                <div className="flex justify-between text-base font-bold text-teal-950">
                  <span>Savings with Semaglutide:</span>
                  <span>₹{savings.toLocaleString()}</span>
                </div>
              </div>
              <p className="text-[11px] text-teal-700 mt-3 italic leading-normal">
                * Note: Pricing is based on typical 2026 generic/branded averages. Actual dosage titration requires individual specialist guidance.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href={pcosWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-teal-900 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-teal-800"
            >
              Get Custom Quote &amp; Advice on WhatsApp
            </a>
          </div>
        </section>

        {/* Science & Analysis */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm leading-relaxed text-sm text-slate-600 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Which should you choose?</h2>
          <p>
            <strong>Choose Semaglutide if:</strong> Your primary driver is value. Since the patent expiration of Semaglutide in early 2026, domestic generic alternatives have made this treatment highly affordable (starting from ₹1,290). It is highly accessible and offers solid 15% weight reduction when combined with calorie management.
          </p>
          <p>
            <strong>Choose Tirzepatide if:</strong> You have high insulin resistance, type-2 diabetes, or need aggressive weight reduction (up to 22%). Tirzepatide (marketed as Mounjaro or Yurpeak by Eli Lilly/Cipla) activates both GIP and GLP-1 receptors, driving stronger results but at a much higher monthly cost (typically ₹14,000+ for standard therapeutic doses).
          </p>
          <p>
            No matter which molecule you select, both require consistent clinical tracking, dosage titration, and muscle retention mapping (protein targets) to prevent rapid weight rebound.
          </p>
        </section>

        {/* FAQs */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">FAQs</h2>
          <div className="space-y-3">
            <details className="group rounded-xl border border-slate-150 p-4 transition-all duration-200 open:bg-slate-50">
              <summary className="cursor-pointer list-none font-semibold text-sm text-slate-900 leading-tight">
                Can I shift from Semaglutide to Tirzepatide?
              </summary>
              <p className="mt-2 text-xs leading-normal text-slate-600">
                Yes, under doctor supervision. If weight loss plateaus on Semaglutide, physicians sometimes transition patients to Tirzepatide. However, you will need to restart at a base titration dose (e.g., 2.5mg) to monitor side-effect tolerance.
              </p>
            </details>
            <details className="group rounded-xl border border-slate-150 p-4 transition-all duration-200 open:bg-slate-50">
              <summary className="cursor-pointer list-none font-semibold text-sm text-slate-900 leading-tight">
                Are there generic versions of Tirzepatide in India?
              </summary>
              <p className="mt-2 text-xs leading-normal text-slate-600">
                No. Eli Lilly holds active patent protection on Tirzepatide in India. Cipla distributes it under the licensed brand name &quot;Yurpeak,&quot; but it remains a premium-priced branded therapeutic option.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-teal-100 bg-white/80 mt-14">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm">
            <div>
              <p className="font-semibold text-slate-800 mb-2">GLP-1 India Research Network</p>
              <ul className="space-y-1.5 text-xs">
                <li><a href="https://glp1-india.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 transition-colors">📚 GLP-1 India — Complete Guide</a></li>
                <li><a href="https://semaglutideindia.top" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 transition-colors">💊 Start Supervised Treatment</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-800 mb-2">Resources</p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li><a href="/" className="hover:text-teal-700 transition-colors">Molecule Comparison</a></li>
                <li><a href="/oral-vs-injectable-semaglutide" className="hover:text-teal-700 transition-colors">Oral vs Injectable</a></li>
                <li><a href="/retatrutide-trials-india" className="hover:text-teal-700 transition-colors">Retatrutide Status</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-800 mb-2">Contact</p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700 transition-colors">💬 WhatsApp Expert</a></li>
                <li><a href={EMAIL_CTA_URL} className="hover:text-teal-700 transition-colors">✉ glp1@einsteinaura.com</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-teal-100 pt-6 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-600">
            <p>© 2026 GLP-1 Compare. Neutral research and comparison tool for India.</p>
            <p>Powered by <a href="https://weightwonder.in" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 transition-colors font-medium">WeightWonder</a>.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
