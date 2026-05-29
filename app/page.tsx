import type { Metadata } from "next";
import Image from "next/image";

import { CostCalculator } from "@/components/cost-calculator";
import { GenericBrands } from "@/components/generic-brands";
import { MoleculeComparison } from "@/components/molecule-comparison";
import {
  EMAIL_CTA_URL,
  FAQ_ITEMS,
  FEAR_STATS,
  GENERIC_BRANDS,
  HIDDEN_COSTS,
  METHODS_COMPARISON,
  MOLECULES,
  SITE_URL,
  SUPERVISED_OUTCOMES,
  WHATSAPP_URL,
} from "@/lib/glp1-data";

export const metadata: Metadata = {
  title: {
    absolute: "GLP-1 India 2026: Semaglutide vs Tirzepatide vs Retatrutide",
  },
  description:
    "Compare semaglutide, liraglutide, tirzepatide, and retatrutide (investigational) in India with molecule tables, brand filters, and a GLP-1 cost calculator.",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  keywords: [
    "semaglutide vs tirzepatide",
    "retatrutide India",
    "retatrutide trial status",
    "best generic GLP-1 brand India",
    "GLP-1 cost India",
    "GLP-1 comparison tool",
    "semaglutide price India",
  ],
  authors: [{ name: "GLP-1 Compare Research Desk" }],
  category: "Health",
  openGraph: {
    type: "website",
    url: SITE_URL,
    locale: "en_IN",
    title: "GLP-1 India 2026: Semaglutide vs Tirzepatide vs Retatrutide",
    description:
      "India-focused GLP-1 comparison with molecule profiles, brand pricing filters, and retatrutide trial-only status.",
    siteName: "GLP-1 Compare",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GLP-1 Compare India 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GLP-1 India 2026: Semaglutide vs Tirzepatide vs Retatrutide",
    description:
      "Compare leading GLP-1 options for India, including retatrutide trial-stage data.",
    images: ["/twitter-image"],
  },
};

const LAST_UPDATED_ISO = "2026-05-27";
const RETATRUTIDE_RESEARCH_URLS = [
  "https://www.nejm.org/doi/abs/10.1056/NEJMoa2301972",
  "https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss",
  "https://www.lilly.com/news/stories/what-to-know-about-retatrutide",
];

const medicalWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "GLP-1 Compare",
  url: SITE_URL,
  inLanguage: "en-IN",
  headline: "GLP-1 Medication Comparison for India (2026)",
  about: MOLECULES.map((molecule) => molecule.name).concat([
    "GLP-1 costs in India",
    "Generic brand comparison",
  ]),
  specialty: "Endocrinology",
  isAccessibleForFree: true,
  audience: {
    "@type": "MedicalAudience",
    audienceType: "Patients researching GLP-1 options in India",
  },
  dateModified: LAST_UPDATED_ISO,
  citation: RETATRUTIDE_RESEARCH_URLS,
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WeightWonder",
  url: SITE_URL,
  sameAs: [
    "https://glp1-india.com",
    "https://semaglutideindia.top",
    "https://weightwonder.in",
    "https://wa.me/918878199499",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: WHATSAPP_URL,
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GLP-1 Compare",
  url: SITE_URL,
  inLanguage: "en-IN",
};

const moleculeItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "GLP-1 molecules compared",
  itemListElement: MOLECULES.map((molecule, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: molecule.name,
    description: molecule.isInvestigational
      ? `${molecule.name} is listed as investigational and trial-only as of ${LAST_UPDATED_ISO}.`
      : `${molecule.name}: ${molecule.weightLoss} expected loss range with ${molecule.dosing.toLowerCase()} dosing.`,
  })),
};

const fearToneClass: Record<(typeof FEAR_STATS)[number]["tone"], string> = {
  rose: "border-rose-200 bg-rose-50 text-rose-900",
  amber: "border-amber-200 bg-amber-50 text-amber-900",
  teal: "border-teal-200 bg-teal-50 text-teal-900",
};

export default function Home() {
  const commerciallyAvailableMolecules = MOLECULES.filter((molecule) => !molecule.isInvestigational);
  const commercialMonthlyCosts = commerciallyAvailableMolecules.flatMap((molecule) =>
    molecule.formats.map((format) => format.monthlyCost),
  );
  const minCommercialCost = Math.min(...commercialMonthlyCosts);
  const maxCommercialCost = Math.max(...commercialMonthlyCosts);
  const compactCostRange = `₹${(minCommercialCost / 1000).toFixed(1)}K-₹${(maxCommercialCost / 1000).toFixed(1)}K/mo`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(moleculeItemListJsonLd) }}
      />

      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-teal-200/50 to-transparent" />

        <header className="sticky top-0 z-20 border-b border-teal-100/80 bg-white/85 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <a href="#top" className="inline-flex items-center gap-2">
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

        <main id="top" className="mx-auto w-full max-w-6xl px-4 pb-14 pt-6 sm:px-6 sm:pt-8">
          <section className="relative overflow-hidden rounded-3xl border border-teal-100 bg-white/90 p-6 shadow-lg shadow-teal-900/10 sm:p-8">
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-teal-200/40 blur-2xl" />
            <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-amber-200/30 blur-2xl" />

            <div className="relative grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div className="max-h-[40vh] space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
                  2026 India GLP-1 Intelligence
                </p>
                <h1 className="font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                  Compare GLP-1 Medications in India (2026)
                </h1>
                <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                  Built for high-intent searches like <strong>semaglutide vs liraglutide</strong>,
                  <strong> retatrutide India status</strong>, <strong>best generic brand India</strong>,
                  and <strong>GLP-1 cost</strong>. Start with tools first, then connect on WhatsApp.
                </p>
                <p className="text-xs text-slate-500">
                  New to GLP-1 therapy?{' '}
                  <a href="https://glp1-india.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-900">Read our complete beginners guide →</a>
                </p>

                <div className="flex flex-wrap gap-2">
                  {MOLECULES.map((molecule) => (
                    <a
                      key={molecule.id}
                      href="#molecule-comparison"
                      className="inline-flex min-h-11 items-center rounded-full border border-teal-200 bg-teal-50 px-4 text-sm font-semibold text-teal-900 transition-all duration-200 hover:border-teal-300 hover:bg-teal-100"
                    >
                      {molecule.name}
                    </a>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  Independent research · Powered by WeightWonder
                </p>
              </div>

              <aside className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
                <p className="text-sm font-semibold text-slate-900">AI-Optimized Snapshot</p>
                <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-white p-3">
                    <dt className="text-slate-500">Molecules compared</dt>
                    <dd className="mt-1 font-semibold text-slate-900">{MOLECULES.length}</dd>
                  </div>
                  <div className="rounded-lg bg-white p-3">
                    <dt className="text-slate-500">Brands indexed</dt>
                    <dd className="mt-1 font-semibold text-slate-900">{GENERIC_BRANDS.length}</dd>
                  </div>
                  <div className="rounded-lg bg-white p-3">
                    <dt className="text-slate-500">Cost range</dt>
                    <dd className="mt-1 font-semibold text-slate-900">{compactCostRange}</dd>
                  </div>
                  <div className="rounded-lg bg-white p-3">
                    <dt className="text-slate-500">Output mode</dt>
                    <dd className="mt-1 font-semibold text-slate-900">Live calculator</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </section>

          <div className="mt-8 grid gap-6">
            <MoleculeComparison molecules={MOLECULES} />
            <GenericBrands brands={GENERIC_BRANDS} />
            <CostCalculator molecules={MOLECULES} hiddenCosts={HIDDEN_COSTS} />

            <section
              id="risk-callout"
              className="rounded-3xl border border-rose-100 bg-white/90 p-6 shadow-lg shadow-rose-900/5 sm:p-8"
            >
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-700">
                  Risk Callout
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  The Cost of Wrong GLP-1 Decisions Is Usually Hidden Upfront
                </h2>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  Price-only choices can look smart in month one, then become expensive through side
                  effects, drop-offs, and restarts.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {FEAR_STATS.map((item) => (
                  <article
                    key={item.label}
                    className={`rounded-2xl border p-5 ${fearToneClass[item.tone]}`}
                  >
                    <p className="text-2xl font-semibold">{item.stat}</p>
                    <p className="mt-1 text-sm font-semibold">{item.label}</p>
                    <p className="mt-2 text-xs">{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-teal-100/80 bg-white/90 p-6 shadow-lg shadow-teal-900/5 sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
                  Methods Comparison
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Compare Weight-Loss Paths, Not Just Drug Names
                </h2>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-teal-100">
                <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-teal-900 text-white">
                      <th className="px-4 py-3 font-semibold">Method</th>
                      <th className="px-4 py-3 font-semibold">Typical Cost (12 months)</th>
                      <th className="px-4 py-3 font-semibold">Expected Loss</th>
                      <th className="px-4 py-3 font-semibold">Monitoring</th>
                      <th className="px-4 py-3 font-semibold">Honest Cons</th>
                    </tr>
                  </thead>
                  <tbody>
                    {METHODS_COMPARISON.map((row, index) => (
                      <tr
                        key={row.method}
                        className={`${
                          index % 2 === 0 ? "bg-teal-50/30" : "bg-white"
                        } ${row.highlighted ? "ring-1 ring-inset ring-teal-300" : ""}`}
                      >
                        <td className="px-4 py-4 font-semibold text-slate-900">{row.method}</td>
                        <td className="px-4 py-4 text-slate-700">{row.typicalCost}</td>
                        <td className="px-4 py-4 text-slate-700">{row.expectedLoss}</td>
                        <td className="px-4 py-4 text-slate-700">{row.monitoring}</td>
                        <td className="px-4 py-4 text-slate-700">{row.downside}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-100 bg-white/90 p-6 shadow-lg shadow-amber-900/5 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
                {/* Left: stats + heading */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">
                    Supervised Outcomes
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                    Better Supervision Usually Converts into Better Long-Term Results
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Unsupervised GLP-1 use often leads to early drop-off, muscle loss, and rebound. Structured programs with dose titration, nutrition tracking, and follow-up consistently outperform self-managed approaches.
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {SUPERVISED_OUTCOMES.map((item) => (
                      <article key={item.metric} className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                        <p className="text-2xl font-semibold text-amber-950">{item.metric}</p>
                        <p className="mt-1 text-sm text-amber-900">{item.label}</p>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Right: Dr. Pooja card */}
                <aside className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 shadow-sm">
                  {/* Photo + name */}
                  <div className="flex items-center gap-4">
                    <div className="relative flex-shrink-0">
                      <Image
                        src="/dr-pooja-singh.jpg"
                        alt="Dr. Pooja Singh, PhD — Clinical Advisor, WeightWonder"
                        width={88}
                        height={88}
                        className="h-20 w-20 rounded-2xl object-cover shadow-md ring-2 ring-amber-200"
                      />
                      <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 ring-2 ring-white">
                        <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Dr. Pooja Singh</p>
                      <p className="text-xs text-slate-500">PhD, NCL Pune</p>
                      <p className="text-xs font-medium text-teal-700">Co-founder, WeightWonder</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <hr className="border-slate-200" />

                  {/* Quote */}
                  <blockquote className="relative pl-4">
                    <span className="absolute left-0 top-0 text-3xl leading-none text-amber-300 select-none" aria-hidden="true">&ldquo;</span>
                    <p className="text-sm leading-6 text-slate-700 italic">
                      Outcomes improve when titration, protein targets, and behavioural adherence are tracked together — not treated as separate concerns. The molecule alone is only 30% of the outcome.
                    </p>
                  </blockquote>

                  {/* Credentials */}
                  <ul className="space-y-2">
                    {[
                      { icon: "🔬", text: "Metabolic research, NCL Pune" },
                      { icon: "⚖️", text: "10+ years obesity medicine" },
                      { icon: "📋", text: "500+ supervised GLP-1 patients" },
                    ].map((c) => (
                      <li key={c.text} className="flex items-center gap-2.5 text-xs text-slate-600">
                        <span className="text-base leading-none">{c.icon}</span>
                        {c.text}
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <hr className="border-slate-200" />

                  {/* CTA */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
                  >
                    <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Ask Dr. Pooja's Team
                  </a>
                </aside>
              </div>
            </section>


            <section className="rounded-3xl border border-teal-100/80 bg-white/90 p-6 shadow-lg shadow-teal-900/5 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">FAQ</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-5 space-y-3">
                {FAQ_ITEMS.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-slate-200 bg-slate-50/60 p-4 transition-all duration-200 open:bg-white"
                  >
                    <summary className="min-h-11 cursor-pointer list-none pr-6 text-sm font-semibold text-slate-900 marker:content-none">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-800">
                Limited Weekly Intake Slots
              </p>
              <p className="mt-2 text-base font-medium text-amber-900 sm:text-lg">
                If you are comparing options this week, act before dosage-support queues reset.
              </p>
              <div className="mt-4">
                <a
                  href="https://semaglutideindia.top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-teal-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-teal-800"
                >
                  Ready to Start? Get Supervised Treatment →
                </a>
              </div>
            </section>

            <section className="rounded-3xl border border-teal-200 bg-gradient-to-r from-teal-900 to-teal-700 p-6 text-white shadow-xl shadow-teal-900/25 sm:p-8">
              <h2 className="font-display text-2xl font-semibold">Get Your Personalized GLP-1 Comparison Path</h2>
              <p className="mt-3 max-w-3xl text-sm text-teal-100 sm:text-base">
                Use your tool results as input, then continue on WhatsApp or send your requirements for a detailed callback.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-teal-900 transition-all duration-200 hover:bg-teal-50"
                >
                  Continue on WhatsApp
                </a>
                <a
                  href={EMAIL_CTA_URL}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20"
                >
                  Email My Comparison Request
                </a>
              </div>
            </section>
          </div>
        </main>

        <footer className="border-t border-teal-100 bg-white/80">
          <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm">
              <div>
                <p className="font-semibold text-slate-800 mb-2">GLP-1 India Research Network</p>
                <ul className="space-y-1.5">
                  <li><a href="https://glp1-india.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 transition-colors">📚 GLP-1 India — Complete Guide</a></li>
                  <li><a href="https://semaglutideindia.top" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 transition-colors">💊 Start Supervised Treatment</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">Resources</p>
                <ul className="space-y-1.5 text-slate-600">
                  <li><a href="#molecule-comparison" className="hover:text-teal-700 transition-colors">Molecule Comparison</a></li>
                  <li><a href="#generic-brands" className="hover:text-teal-700 transition-colors">Generic Brand Prices</a></li>
                  <li><a href="#cost-calculator" className="hover:text-teal-700 transition-colors">Cost Calculator</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">Contact</p>
                <ul className="space-y-1.5 text-slate-600">
                  <li><a href="https://wa.me/918878199499?text=Hi%2C%20comparing%20GLP-1%20options.%20Found%20you%20on%20GLP1Compare.in.%20Can%20you%20help%20me%20choose%3F" target="_blank" rel="noopener noreferrer" className="hover:text-teal-700 transition-colors">💬 WhatsApp Expert</a></li>
                  <li><a href="mailto:glp1@einsteinaura.com" className="hover:text-teal-700 transition-colors">✉ glp1@einsteinaura.com</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-t border-teal-100 pt-6 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-600">
              <p>© 2026 GLP-1 Compare. Neutral research and comparison tool for India.</p>
              <p>Powered by <a href="https://weightwonder.in" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 transition-colors font-medium">WeightWonder</a> research collaboration.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
