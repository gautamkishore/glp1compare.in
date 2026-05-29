"use client";

import React from "react";
import { WHATSAPP_URL, EMAIL_CTA_URL } from "@/lib/glp1-data";

export default function OralVsInjectableSemaglutide() {
  const customWhatsAppUrl = `https://wa.me/918878199499?text=Hi%2C%20comparing%20Oral%20vs%20Injectable%20Semaglutide%20on%20GLP1Compare.in.%20I'd%20like%20to%20get%20started%20safely.`;

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
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Dosing Formats</span>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Oral vs Injectable Semaglutide: Rybelsus vs Ozempic / Generics
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base leading-relaxed">
            Many patients in India prefer taking a daily pill over a weekly injection. But is oral semaglutide as effective for weight loss? Let&apos;s compare their absorption science, costs, and side effects.
          </p>
        </section>

        {/* Comparison Table */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Comparison Summary</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-150">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-teal-900 text-white">
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Oral Semaglutide (Rybelsus)</th>
                  <th className="px-4 py-3 font-semibold">Injectable Semaglutide (Ozempic/Generics)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-4 font-semibold">Dosing Frequency</td>
                  <td className="px-4 py-4">Daily (every morning on empty stomach)</td>
                  <td className="px-4 py-4">Once Weekly</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold">Bioavailability</td>
                  <td className="px-4 py-4 text-rose-700">Very Low (~1% absorption rate)</td>
                  <td className="px-4 py-4 text-emerald-700 font-semibold">Extremely High (~89% absorption rate)</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold">Typical Monthly Price</td>
                  <td className="px-4 py-4">₹2,500 – ₹4,500 per pack</td>
                  <td className="px-4 py-4 font-semibold">From ₹1,290 (Generic vials) to ₹3,250 (Pens)</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold">Weight Loss Efficacy</td>
                  <td className="px-4 py-4">6% – 10% average reduction</td>
                  <td className="px-4 py-4 font-bold text-teal-900">12% – 17% average reduction</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold">Administration Strictness</td>
                  <td className="px-4 py-4 text-rose-700">High: Requires fasting for 30 minutes, max 120ml plain water</td>
                  <td className="px-4 py-4">Low: Administered weekly regardless of meals</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bioavailability Section */}
        <section className="mt-8 rounded-3xl border border-teal-50 bg-teal-50/50 p-6 border-teal-100 leading-relaxed text-sm text-slate-700 space-y-4">
          <h2 className="text-lg font-bold text-teal-950">The Absorption Science: Why Injections Win</h2>
          <p>
            Semaglutide is a peptide molecule. When swallowed, stomach acid naturally destroys peptides. To bypass this, **Rybelsus (oral semaglutide)** contains a chemical enhancer called SNAC (salcaprozate sodium), which temporarily buffers stomach acidity to allow a tiny portion (roughly 1%) of the active drug to pass into the bloodstream.
          </p>
          <p>
            Because this process is highly sensitive, if you consume coffee, tea, food, or more than 120ml of water within 30 minutes of taking the pill, **zero drug is absorbed**, rendering the treatment ineffective.
          </p>
          <p>
            <strong>Injectable Semaglutide</strong> is injected directly into subcutaneous fat (abdomen, thigh, or arm), bypassing the digestive system entirely. This ensures immediate, highly predictable absorption, resulting in significantly higher weight loss outcomes (typically 12-17% vs 6-10% for oral formats).
          </p>
        </section>

        {/* Pricing Guide */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm leading-relaxed text-sm text-slate-600">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Cost-Efficiency Comparison</h2>
          <p className="mb-4">
            Rybelsus tablets are imported and range between **₹2,500 to ₹4,500/month** depending on the dosage strength (3mg starting dose, 7mg, or 14mg therapeutic dose).
          </p>
          <p className="mb-4">
            With the patent expiry of Semaglutide in **March 2026**, CDSCO-approved domestic generic injections (like Natco&apos;s Semanat, Sun&apos;s Noveltreat, and Dr. Reddy&apos;s Obeda) have entered the market starting at **₹1,290/month**. 
          </p>
          <p>
            This makes injectable formats not only significantly more effective but also substantially more cost-efficient for Indian patients pursuing long-term weight management.
          </p>
        </section>

        {/* Action Banner */}
        <section className="mt-8 rounded-3xl bg-gradient-to-r from-teal-900 to-teal-700 p-6 text-white text-center shadow-md">
          <h3 className="text-lg font-bold">Unsure which format matches your lifestyle?</h3>
          <p className="text-xs text-teal-100 mt-2 max-w-2xl mx-auto">
            Discuss your needle comfort, daily schedule, and metabolic targets with the WeightWonder medical desk to design the safest titration path.
          </p>
          <div className="mt-4">
            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-6 py-2 text-sm font-semibold text-teal-900 transition-colors hover:bg-teal-50"
            >
              Consult an Expert via WhatsApp
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <details className="group rounded-xl border border-slate-150 p-4 transition-all duration-200 open:bg-slate-50">
              <summary className="cursor-pointer list-none font-semibold text-sm text-slate-900 leading-tight">
                Can I use Rybelsus if I have thyroid nodules?
              </summary>
              <p className="mt-2 text-xs leading-normal text-slate-600">
                No. All forms of Semaglutide (both oral and injectable) carry a black-box warning for patients with a personal or family history of Medullary Thyroid Carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).
              </p>
            </details>
            <details className="group rounded-xl border border-slate-150 p-4 transition-all duration-200 open:bg-slate-50">
              <summary className="cursor-pointer list-none font-semibold text-sm text-slate-900 leading-tight">
                Are generic oral semaglutide tablets available in India?
              </summary>
              <p className="mt-2 text-xs leading-normal text-slate-600">
                Yes, some pharmaceutical brands like Dr. Reddy&apos;s (Obeda) offer oral options in addition to injectables. However, supply chain consistency and bioequivalence verification under medical supervision remain crucial.
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
                <li><a href="/semaglutide-vs-tirzepatide" className="hover:text-teal-700 transition-colors">Semaglutide vs Tirzepatide</a></li>
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
