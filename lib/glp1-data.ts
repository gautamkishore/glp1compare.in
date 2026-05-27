export type MoleculeId =
  | "semaglutide"
  | "liraglutide"
  | "tirzepatide"
  | "retatrutide";
export type FormatId = "vial" | "pen";

export interface MoleculeFormat {
  id: FormatId;
  label: string;
  monthlyCost: number;
}

export interface MoleculeProfile {
  id: MoleculeId;
  name: string;
  badge?: string;
  isInvestigational?: boolean;
  dosing: string;
  weightLoss: string;
  costRange: string;
  availability: string;
  patent: string;
  muscleRisk: string;
  formats: MoleculeFormat[];
}

export interface GenericBrand {
  id: string;
  brand: string;
  manufacturer: string;
  format: "Vial" | "Pen";
  strength: string;
  estMonthlyPrice: number;
  availability: string;
}

export interface MethodRow {
  method: string;
  typicalCost: string;
  expectedLoss: string;
  monitoring: string;
  downside: string;
  highlighted?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_URL = "https://glp1compare.in";

export const WHATSAPP_URL =
  "https://wa.me/918878199499?text=Hi%2C%20comparing%20GLP-1%20options.%20Found%20you%20on%20GLP1Compare.in.%20Can%20you%20help%20me%20choose%3F";

export const EMAIL_CTA_URL =
  "mailto:glp1@einsteinaura.com?subject=GLP-1%20Compare%20Inquiry";

export const MOLECULES: MoleculeProfile[] = [
  {
    id: "semaglutide",
    name: "Semaglutide",
    badge: "Best Value",
    dosing: "Weekly (after titration)",
    weightLoss: "12-17%",
    costRange: "₹1,600-₹4,200/mo",
    availability: "High in metro + tier-2 channels",
    patent:
      "Core molecule off-patent in India; device-level protections may vary",
    muscleRisk: "Moderate if protein + resistance training are not structured",
    formats: [
      { id: "vial", label: "Vial", monthlyCost: 1850 },
      { id: "pen", label: "Pen", monthlyCost: 3250 },
    ],
  },
  {
    id: "liraglutide",
    name: "Liraglutide",
    dosing: "Daily",
    weightLoss: "6-10%",
    costRange: "₹2,600-₹5,500/mo",
    availability: "Moderate, stronger in established chains",
    patent: "Older molecule landscape; branded device formats remain premium",
    muscleRisk: "Moderate due to daily adherence variability",
    formats: [
      { id: "vial", label: "Vial", monthlyCost: 2650 },
      { id: "pen", label: "Pen", monthlyCost: 4450 },
    ],
  },
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    dosing: "Weekly",
    weightLoss: "15-22%",
    costRange: "₹5,500-₹12,500/mo",
    availability: "Lower coverage; mostly specialist-led access",
    patent: "Newer molecule with active patent constraints",
    muscleRisk: "Moderate-high with aggressive calorie deficits",
    formats: [
      { id: "vial", label: "Vial", monthlyCost: 5600 },
      { id: "pen", label: "Pen", monthlyCost: 8200 },
    ],
  },
  {
    id: "retatrutide",
    name: "Retatrutide",
    badge: "Research Watch",
    isInvestigational: true,
    dosing: "Weekly (investigational titration in trials)",
    weightLoss: "~24.2% (Phase 2, 48w) to ~28.3% (Phase 3 topline, 80w)",
    costRange: "No retail price (investigational, May 2026)",
    availability: "Not approved for public retail use; clinical-trial access only",
    patent: "Investigational triple-agonist under active global Phase 3 development",
    muscleRisk:
      "Long-term real-world body-composition data pending; GI side effects are dose-dependent in trials",
    formats: [
      { id: "vial", label: "Vial", monthlyCost: 0 },
      { id: "pen", label: "Pen", monthlyCost: 0 },
    ],
  },
];

export const GENERIC_BRANDS: GenericBrand[] = [
  {
    id: "obeda",
    brand: "Obeda",
    manufacturer: "Aarsh Biocare Pvt. Ltd.",
    format: "Vial",
    strength: "1mg weekly protocol",
    estMonthlyPrice: 1790,
    availability: "Metro + online resellers",
  },
  {
    id: "semanat",
    brand: "Semanat",
    manufacturer: "Natrax Therapeutics",
    format: "Pen",
    strength: "0.5mg to 1mg titration",
    estMonthlyPrice: 3390,
    availability: "Major pharmacy chains",
  },
  {
    id: "semafull",
    brand: "Semafull",
    manufacturer: "FullLife Biopharma",
    format: "Vial",
    strength: "1mg weekly protocol",
    estMonthlyPrice: 1940,
    availability: "Urban + tier-2 wholesale",
  },
  {
    id: "noveltreat",
    brand: "Noveltreat",
    manufacturer: "NovelTreat Labs",
    format: "Pen",
    strength: "0.25mg to 1mg program",
    estMonthlyPrice: 2890,
    availability: "Specialty obesity clinics",
  },
  {
    id: "sematrinity",
    brand: "Sematrinity",
    manufacturer: "Trinity Medilabs",
    format: "Vial",
    strength: "1mg weekly protocol",
    estMonthlyPrice: 2140,
    availability: "Tier-1 distributor network",
  },
  {
    id: "glipiq",
    brand: "GLIPIQ",
    manufacturer: "GlenPeak Innovations",
    format: "Pen",
    strength: "1mg maintained dose",
    estMonthlyPrice: 2620,
    availability: "Selected online channels",
  },
  {
    id: "semaglyn",
    brand: "Semaglyn",
    manufacturer: "Glynova Lifesciences",
    format: "Vial",
    strength: "1mg weekly protocol",
    estMonthlyPrice: 1690,
    availability: "High in west + south India",
  },
  {
    id: "mashema",
    brand: "Mashema",
    manufacturer: "Mashema Remedies",
    format: "Pen",
    strength: "0.5mg to 1mg titration",
    estMonthlyPrice: 2460,
    availability: "Hospital-linked pharmacies",
  },
  {
    id: "sembolic",
    brand: "Sembolic",
    manufacturer: "Bolic Healthcare",
    format: "Vial",
    strength: "1mg weekly protocol",
    estMonthlyPrice: 1590,
    availability: "High-volume e-pharmacy stock",
  },
  {
    id: "semasize",
    brand: "Semasize",
    manufacturer: "SizeWell Pharma",
    format: "Pen",
    strength: "0.5mg to 1mg stepped plan",
    estMonthlyPrice: 2240,
    availability: "Metro + specialist channels",
  },
];

export const HIDDEN_COSTS = [
  {
    title: "Baseline + follow-up labs",
    value: "₹1,500-₹3,500",
    detail: "Often needed for glucose, thyroid, liver markers, and dose safety checks.",
  },
  {
    title: "Doctor + nutrition reviews",
    value: "₹800-₹2,000/mo",
    detail: "Without follow-up, dosing mistakes and rebound risk rise significantly.",
  },
  {
    title: "Side-effect downtime",
    value: "1-2 lost workdays/mo",
    detail: "Nausea/dehydration episodes can add recovery cost in unsupervised setups.",
  },
];

export const FEAR_STATS = [
  {
    stat: "31%",
    label: "Reported stop within 90 days",
    tone: "rose",
    detail: "Common reasons: nausea, dosing confusion, and low supervision.",
  },
  {
    stat: "2.1x",
    label: "Higher rebound risk",
    tone: "amber",
    detail: "Seen when medication is discontinued without maintenance planning.",
  },
  {
    stat: "₹8K+",
    label: "Average avoidable spend",
    tone: "teal",
    detail: "From mismatched formats, fake stock, or frequent restarts.",
  },
] as const;

export const METHODS_COMPARISON: MethodRow[] = [
  {
    method: "Unsupervised GLP-1",
    typicalCost: "₹2.2L - ₹4.1L",
    expectedLoss: "5-12%",
    monitoring: "Low",
    downside: "High dropout, dosing inconsistency, and fake-stock exposure",
  },
  {
    method: "Crash Diets",
    typicalCost: "₹10K - ₹45K",
    expectedLoss: "3-8% (short-term)",
    monitoring: "Low",
    downside: "Muscle loss and rebound are common",
  },
  {
    method: "Online Plans",
    typicalCost: "₹25K - ₹80K",
    expectedLoss: "4-10%",
    monitoring: "Medium",
    downside: "Often generic meal plans, limited medical personalization",
  },
  {
    method: "Bariatric Surgery",
    typicalCost: "₹2.8L - ₹6.5L",
    expectedLoss: "20-35%",
    monitoring: "High",
    downside: "Surgical risk, recovery time, and higher upfront spend",
  },
  {
    method: "WW GLP-1 Care",
    typicalCost: "₹1.5L - ₹2.7L",
    expectedLoss: "15-25%",
    monitoring: "High",
    downside: "Requires long-term adherence and program engagement",
    highlighted: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Which is the best generic GLP-1 brand in India?",
    answer:
      "There is no single best brand for everyone. Match the brand to your dose, format preference, supply reliability, and verified source. Use the brand filter and cost calculator first, then confirm batch authenticity.",
  },
  {
    question: "Vial or pen: which format should I choose?",
    answer:
      "Vials are usually lower-cost but require precise handling. Pens are easier and faster for routine use but often cost more. The right choice depends on your comfort, supervision, and monthly budget.",
  },
  {
    question: "How do I verify if a GLP-1 product is genuine?",
    answer:
      "Verify manufacturer details, batch number, expiry, cold-chain handling, and GST invoice. Avoid sources that cannot provide traceable procurement records.",
  },
  {
    question: "Is tirzepatide worth paying more than semaglutide?",
    answer:
      "For some users, tirzepatide may drive stronger loss outcomes, but cost and availability are much higher. Compare 6-12 month total cost and adherence feasibility before choosing.",
  },
  {
    question: "Is retatrutide available in India right now?",
    answer:
      "As of May 2026, retatrutide is still investigational and not approved for public retail use. Legitimate access is through regulated clinical trials only.",
  },
  {
    question: "What does WW GLP-1 Care include?",
    answer:
      "It includes physician oversight, dose progression tracking, nutrition guidance, and follow-up planning. It is listed as one structured option in this neutral comparison.",
  },
  {
    question: "How do I start with GLP-1 safely?",
    answer:
      "Start with baseline labs, a medical review, and a monitored titration plan. Avoid self-escalation without follow-up, especially in the first 8-12 weeks.",
  },
];

export const SUPERVISED_OUTCOMES = [
  {
    metric: "15-25%",
    label: "Typical supervised weight-loss range",
  },
  {
    metric: "90%",
    label: "Program adherence at key follow-up milestones",
  },
  {
    metric: "₹40K+",
    label: "Potential saving vs fragmented trial-and-error",
  },
];
