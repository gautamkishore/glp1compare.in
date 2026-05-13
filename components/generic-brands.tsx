"use client";

import { useMemo, useState } from "react";

import type { GenericBrand } from "@/lib/glp1-data";

interface GenericBrandsProps {
  brands: GenericBrand[];
}

type BrandFilter = "all" | "vials" | "pens" | "under2k";

const FILTER_LABELS: Record<BrandFilter, string> = {
  all: "All",
  vials: "Vials",
  pens: "Pens",
  under2k: "Under ₹2K/mo",
};

export function GenericBrands({ brands }: GenericBrandsProps) {
  const [activeFilter, setActiveFilter] = useState<BrandFilter>("all");

  const filteredBrands = useMemo(() => {
    if (activeFilter === "vials") {
      return brands.filter((brand) => brand.format === "Vial");
    }

    if (activeFilter === "pens") {
      return brands.filter((brand) => brand.format === "Pen");
    }

    if (activeFilter === "under2k") {
      return brands.filter((brand) => brand.estMonthlyPrice <= 2000);
    }

    return brands;
  }, [activeFilter, brands]);

  return (
    <section
      id="generic-brands"
      className="rounded-3xl border border-teal-100/80 bg-white/90 p-6 shadow-lg shadow-teal-900/5 backdrop-blur sm:p-8"
      aria-labelledby="brands-heading"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
            Generic Brands
          </p>
          <h2 id="brands-heading" className="mt-2 text-2xl font-semibold text-slate-900">
            Explore India Market Brands by Format and Budget
          </h2>
        </div>

        <div
          className="inline-flex min-h-11 flex-wrap gap-2 rounded-2xl border border-teal-200 bg-teal-50/60 p-1"
          role="tablist"
          aria-label="Brand filter"
        >
          {(Object.keys(FILTER_LABELS) as BrandFilter[]).map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`min-h-11 rounded-xl px-4 text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-teal-900 text-white shadow"
                  : "text-teal-900 hover:bg-white"
              }`}
            >
              {FILTER_LABELS[filter]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBrands.map((brand) => (
          <article
            key={brand.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md hover:shadow-teal-900/10"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">{brand.brand}</h3>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  brand.format === "Vial"
                    ? "bg-amber-100 text-amber-900"
                    : "bg-teal-100 text-teal-900"
                }`}
              >
                {brand.format}
              </span>
            </div>
            <p className="text-sm text-slate-600">{brand.manufacturer}</p>

            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-slate-500">Strength Plan</dt>
                <dd className="font-medium text-slate-800">{brand.strength}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-slate-500">Est. Monthly Price</dt>
                <dd className="font-semibold text-slate-900">
                  ₹{brand.estMonthlyPrice.toLocaleString("en-IN")}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-slate-500">Availability</dt>
                <dd className="text-right font-medium text-slate-800">{brand.availability}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
