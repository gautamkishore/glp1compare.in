"use client";

import { useState } from "react";

import type { MoleculeProfile } from "@/lib/glp1-data";

interface MoleculeComparisonProps {
  molecules: MoleculeProfile[];
}

type ViewMode = "table" | "cards";

export function MoleculeComparison({ molecules }: MoleculeComparisonProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("table");
  const moleculeHeading = molecules.map((molecule) => molecule.name).join(" vs ");
  const hasInvestigationalMolecule = molecules.some((molecule) => molecule.isInvestigational);

  return (
    <section
      id="molecule-comparison"
      className="rounded-3xl border border-teal-100/80 bg-white/90 p-6 shadow-lg shadow-teal-900/5 backdrop-blur sm:p-8"
      aria-labelledby="molecule-heading"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
            Molecule Comparison
          </p>
          <h2
            id="molecule-heading"
            className="mt-2 text-2xl font-semibold text-slate-900"
          >
            {moleculeHeading}
          </h2>
          {hasInvestigationalMolecule ? (
            <p className="mt-2 text-xs text-slate-600">
              Includes investigational molecules that are not commercially available yet.
            </p>
          ) : null}
        </div>

        <div
          className="inline-flex min-h-11 rounded-2xl border border-teal-200 bg-teal-50/60 p-1"
          role="tablist"
          aria-label="Molecule comparison view"
        >
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === "table"}
            onClick={() => setViewMode("table")}
            className={`min-h-11 rounded-xl px-4 text-sm font-semibold transition-all duration-200 ${
              viewMode === "table"
                ? "bg-teal-900 text-white shadow"
                : "text-teal-900 hover:bg-white"
            }`}
          >
            Side by Side
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === "cards"}
            onClick={() => setViewMode("cards")}
            className={`min-h-11 rounded-xl px-4 text-sm font-semibold transition-all duration-200 ${
              viewMode === "cards"
                ? "bg-teal-900 text-white shadow"
                : "text-teal-900 hover:bg-white"
            }`}
          >
            Cards
          </button>
        </div>
      </div>

      {viewMode === "table" ? (
        <div className="overflow-x-auto rounded-2xl border border-teal-100">
          <table className="w-full min-w-[840px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-teal-900 text-white">
                <th className="px-4 py-3 font-semibold">Molecule</th>
                <th className="px-4 py-3 font-semibold">Dosing</th>
                <th className="px-4 py-3 font-semibold">Weight Loss %</th>
                <th className="px-4 py-3 font-semibold">Cost</th>
                <th className="px-4 py-3 font-semibold">Availability</th>
                <th className="px-4 py-3 font-semibold">Patent</th>
                <th className="px-4 py-3 font-semibold">Muscle Risk</th>
              </tr>
            </thead>
            <tbody>
              {molecules.map((molecule, index) => {
                const isBestValue = molecule.badge === "Best Value";
                const badgeClassName = isBestValue
                  ? "bg-teal-100 text-teal-800"
                  : "bg-amber-100 text-amber-900";

                return (
                  <tr
                    key={molecule.id}
                    className={`${
                      index % 2 === 0 ? "bg-teal-50/30" : "bg-white"
                    } ${isBestValue ? "ring-1 ring-inset ring-teal-400" : ""}`}
                  >
                    <td className="px-4 py-4 align-top font-semibold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span>{molecule.name}</span>
                        {molecule.badge ? (
                          <span
                            className={`rounded-full px-2 py-1 text-xs font-semibold ${badgeClassName}`}
                          >
                            {molecule.badge}
                          </span>
                        ) : null}
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top text-slate-700">
                      {molecule.dosing}
                    </td>
                    <td className="px-4 py-4 align-top text-slate-700">
                      {molecule.weightLoss}
                    </td>
                    <td className="px-4 py-4 align-top text-slate-700">
                      {molecule.costRange}
                    </td>
                    <td className="px-4 py-4 align-top text-slate-700">
                      {molecule.availability}
                    </td>
                    <td className="px-4 py-4 align-top text-slate-700">
                      {molecule.patent}
                    </td>
                    <td className="px-4 py-4 align-top text-slate-700">
                      {molecule.muscleRisk}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {molecules.map((molecule) => {
            const isBestValue = molecule.badge === "Best Value";

            return (
              <article
                key={molecule.id}
                className={`rounded-2xl border p-5 transition-all duration-200 ${
                  isBestValue
                    ? "border-teal-300 bg-teal-50 shadow-md shadow-teal-900/10"
                    : "border-slate-200 bg-white hover:border-teal-200"
                }`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{molecule.name}</h3>
                  {isBestValue ? (
                    <span className="rounded-full bg-teal-900 px-2.5 py-1 text-xs font-semibold text-white">
                      {molecule.badge}
                    </span>
                  ) : null}
                </div>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-slate-500">Dosing</dt>
                    <dd className="font-medium text-slate-800">{molecule.dosing}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-slate-500">Weight Loss %</dt>
                    <dd className="font-medium text-slate-800">{molecule.weightLoss}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-slate-500">Cost</dt>
                    <dd className="font-medium text-slate-800">{molecule.costRange}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-slate-500">Availability</dt>
                    <dd className="text-right font-medium text-slate-800">
                      {molecule.availability}
                    </dd>
                  </div>
                  <div className="pt-2 text-xs text-slate-600">{molecule.patent}</div>
                  <div className="text-xs text-slate-600">
                    Muscle risk: {molecule.muscleRisk}
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
