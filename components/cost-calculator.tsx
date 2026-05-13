"use client";

import { useMemo, useState } from "react";

import type { MoleculeProfile } from "@/lib/glp1-data";

interface HiddenCostCard {
  title: string;
  value: string;
  detail: string;
}

interface CostCalculatorProps {
  molecules: MoleculeProfile[];
  hiddenCosts: HiddenCostCard[];
}

const WW_MONTHLY_CARE_COST = 6900;

export function CostCalculator({ molecules, hiddenCosts }: CostCalculatorProps) {
  const [selectedMoleculeId, setSelectedMoleculeId] = useState(molecules[0]?.id ?? "semaglutide");
  const [selectedFormatId, setSelectedFormatId] = useState("vial");
  const [durationMonths, setDurationMonths] = useState(3);

  const selectedMolecule = useMemo(
    () => molecules.find((molecule) => molecule.id === selectedMoleculeId) ?? molecules[0],
    [molecules, selectedMoleculeId],
  );

  const formatOptions = selectedMolecule?.formats ?? [];

  const selectedFormat =
    formatOptions.find((format) => format.id === selectedFormatId) ?? formatOptions[0];

  const medicationMonthlyCost = selectedFormat?.monthlyCost ?? 0;
  const medicationTotalCost = medicationMonthlyCost * durationMonths;

  const unsupervisedBuffer = 1700;
  const trueMonthlyEstimate = medicationMonthlyCost + unsupervisedBuffer;
  const wwTotalCost = WW_MONTHLY_CARE_COST * durationMonths;
  const wwDelta = wwTotalCost - medicationTotalCost;

  return (
    <section
      id="cost-calculator"
      className="rounded-3xl border border-teal-100/80 bg-white/90 p-6 shadow-lg shadow-teal-900/5 backdrop-blur sm:p-8"
      aria-labelledby="calculator-heading"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
          GLP-1 Cost Calculator
        </p>
        <h2 id="calculator-heading" className="mt-2 text-2xl font-semibold text-slate-900">
          Estimate Monthly and 12-Month Spend in Seconds
        </h2>
      </div>

      <div className="grid gap-5 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 md:grid-cols-3">
        <label className="text-sm font-medium text-slate-700">
          Molecule
          <select
            className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-900 outline-none transition-all duration-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
            value={selectedMolecule?.id}
            onChange={(event) => {
              const nextMolecule = molecules.find((item) => item.id === event.target.value);
              setSelectedMoleculeId(event.target.value as MoleculeProfile["id"]);
              setSelectedFormatId(nextMolecule?.formats[0]?.id ?? "vial");
            }}
          >
            {molecules.map((molecule) => (
              <option key={molecule.id} value={molecule.id}>
                {molecule.name}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-slate-700">
          Format
          <select
            className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-900 outline-none transition-all duration-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
            value={selectedFormat?.id ?? "vial"}
            onChange={(event) => setSelectedFormatId(event.target.value)}
          >
            {formatOptions.map((format) => (
              <option key={format.id} value={format.id}>
                {format.label} - ₹{format.monthlyCost.toLocaleString("en-IN")}/mo
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-slate-700">
          Duration: <span className="font-semibold">{durationMonths} months</span>
          <input
            type="range"
            min={1}
            max={12}
            step={1}
            value={durationMonths}
            onChange={(event) => setDurationMonths(Number(event.target.value))}
            className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-teal-100 accent-teal-700"
            aria-label="Select duration in months"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-500">
            <span>1</span>
            <span>12</span>
          </div>
        </label>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-teal-200 bg-teal-50 p-5">
          <p className="text-sm text-teal-900">Monthly medication cost</p>
          <p className="mt-2 text-2xl font-semibold text-teal-950">
            ₹{medicationMonthlyCost.toLocaleString("en-IN")}
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-600">Total for {durationMonths} months</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">
            ₹{medicationTotalCost.toLocaleString("en-IN")}
          </p>
        </article>

        <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm text-amber-900">WW GLP-1 Care comparison</p>
          <p className="mt-2 text-lg font-semibold text-amber-950">
            {wwDelta > 0
              ? `Medication-only is ₹${wwDelta.toLocaleString("en-IN")} lower`
              : `WW GLP-1 Care is ₹${Math.abs(wwDelta).toLocaleString("en-IN")} lower`}
          </p>
          <p className="mt-2 text-xs text-amber-900">
            WW benchmark uses ₹{WW_MONTHLY_CARE_COST.toLocaleString("en-IN")}/month inclusive-care baseline.
          </p>
        </article>
      </div>

      <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5">
        <p className="text-sm font-semibold text-rose-900">Hidden costs of unsupervised use</p>
        <p className="mt-1 text-sm text-rose-800">
          Medication-only plans often miss follow-up expenses. True monthly exposure estimate: ₹
          {trueMonthlyEstimate.toLocaleString("en-IN")}/mo.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {hiddenCosts.map((cost) => (
            <article key={cost.title} className="rounded-xl border border-rose-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{cost.title}</p>
              <p className="mt-1 text-lg font-semibold text-rose-900">{cost.value}</p>
              <p className="mt-1 text-xs text-slate-600">{cost.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
