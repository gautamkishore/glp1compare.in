"use client";

import React from "react";
import { WHATSAPP_URL, EMAIL_CTA_URL } from "@/lib/glp1-data";

export default function RetatrutideTrialsIndia() {
  const customWhatsAppUrl = `https://wa.me/918878199499?text=Hi%2C%20reading%20about%20Retatrutide%20trials%20on%20GLP1Compare.in.%20I%20want%20to%20know%20what%20approved%20alternatives%20are%20available%20for%20me.`;

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
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">Investigational Watch</span>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Retatrutide Phase 3 Trials &amp; Availability in India (2026)
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base leading-relaxed">
            Eli Lilly&apos;s experimental triple-agonist molecule Retatrutide has demonstrated up to 24–28% weight loss in trials. When will it launch in India, and how can patients participate?
          </p>
        </section>

        {/* Efficacy & trial stats */}
        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm text-center">
            <p className="text-3xl font-bold text-teal-900">~24.2%</p>
            <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">Average Weight Loss</p>
            <p className="mt-2 text-xs text-slate-400">Observed in Phase 2 clinical trials over 48 weeks</p>
          </article>
          <article className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm text-center">
            <p className="text-3xl font-bold text-teal-900">Triple Agonist</p>
            <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">Hormonal Targets</p>
            <p className="mt-2 text-xs text-slate-400">Co-agonist activating GLP-1, GIP, and Glucagon receptors</p>
          </article>
          <article className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm text-center">
            <p className="text-3xl font-bold text-rose-600">Phase 3</p>
            <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">Clinical Status</p>
            <p className="mt-2 text-xs text-slate-400">Currently undergoing global trials (TRIUMPH programs)</p>
          </article>
        </section>

        {/* Danger Warning Box */}
        <section className="mt-8 rounded-3xl border border-rose-200 bg-rose-50 p-6">
          <h2 className="text-lg font-bold text-rose-950 mb-3">⚠️ Critical Warning: Retatrutide Is NOT Commercially Available</h2>
          <div className="text-sm text-rose-900 space-y-3 leading-relaxed">
            <p>
              As of <strong>May 2026</strong>, Retatrutide remains an **investigational therapeutic agent**. It has NOT been approved by the CDSCO in India or the FDA in the US for prescription or commercial sale. 
            </p>
            <p>
              Many B2B trade platforms, chemical stores, and online wholesalers list &quot;Retatrutide peptide vial&quot; at prices ranging from ₹3,500 to ₹25,000. These products are explicitly labeled <strong>&quot;for research purposes only&quot;</strong> or <strong>&quot;not for human consumption.&quot;</strong>
            </p>
            <p>
              Injecting unregulated peptides sourced from B2B trade websites carries severe, life-threatening risks. These substances are manufactured without sterile controls, are prone to extreme dosage instability, and could contain toxic contaminants.
            </p>
          </div>
        </section>

        {/* Trial Status */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm leading-relaxed text-sm text-slate-600 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Eli Lilly Phase 3 Trial (TRIUMPH) Status in India</h2>
          <p>
            Eli Lilly is conducting its Phase 3 registration trial program (including TRIUMPH-1, TRIUMPH-2, etc.) to assess Retatrutide for chronic weight management. Some select tier-1 medical centers in India with dedicated endocrine research desks are locations for participant recruitment.
          </p>
          <p>
            Participation is highly restricted and requires patients to fit specific clinical profiles (such as age, BMI criteria, and no history of cardiovascular or pancreatic concerns).
          </p>
          <p>
            If you are seeking weight loss solutions today, it is highly recommended to start with legally approved, CDSCO-cleared molecules—such as **Generic Semaglutide** (which starts as low as ₹1,290/month) or **Tirzepatide (Yurpeak/Mounjaro)**—under doctor supervision, rather than risking your health on unapproved experimental drugs.
          </p>
        </section>

        {/* Call to Action */}
        <section className="mt-8 rounded-3xl bg-teal-900 p-6 text-white text-center">
          <h3 className="text-lg font-bold">Looking for Safe, Approved Weight Loss Solutions?</h3>
          <p className="text-xs text-teal-100 mt-2 max-w-xl mx-auto">
            Get evaluated by the WeightWonder medical desk to see if you qualify for supervised Generic Semaglutide or Tirzepatide treatments.
          </p>
          <div className="mt-4">
            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-6 py-2 text-sm font-semibold text-teal-900 transition-colors hover:bg-teal-50"
            >
              Consult WeightWonder on WhatsApp
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">FAQs</h2>
          <div className="space-y-3">
            <details className="group rounded-xl border border-slate-150 p-4 transition-all duration-200 open:bg-slate-50">
              <summary className="cursor-pointer list-none font-semibold text-sm text-slate-900 leading-tight">
                When is Retatrutide expected to launch commercially in India?
              </summary>
              <p className="mt-2 text-xs leading-normal text-slate-600">
                Phase 3 trials are expected to continue through late 2026. A commercial launch in India is unlikely before late 2027 or 2028, depending on regulatory review timelines by the CDSCO.
              </p>
            </details>
            <details className="group rounded-xl border border-slate-150 p-4 transition-all duration-200 open:bg-slate-50">
              <summary className="cursor-pointer list-none font-semibold text-sm text-slate-900 leading-tight">
                How does Retatrutide compare to Tirzepatide (Mounjaro)?
              </summary>
              <p className="mt-2 text-xs leading-normal text-slate-600">
                Tirzepatide is a dual agonist (GIP and GLP-1), while Retatrutide is a triple agonist (GIP, GLP-1, and Glucagon). Adding glucagon receptor agonism increases energy expenditure, driving the ~24-28% weight loss, compared to Tirzepatide&apos;s ~15-22%.
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
                <li><a href="/oral-vs-injectable-semaglutide" className="hover:text-teal-700 transition-colors">Oral vs Injectable</a></li>
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
