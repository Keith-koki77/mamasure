"use client";

import { Filter, SlidersHorizontal } from "lucide-react";

const filters = [
  "All",
  "Platinum",
  "Gold",
  "Silver",
] as const;

type Tier = (typeof filters)[number];

interface HospitalFiltersProps {
  selectedTier: Tier;
  onTierChange: (tier: Tier) => void;
}

export default function HospitalFilters({
  selectedTier,
  onTierChange,
}: HospitalFiltersProps) {
  return (
    <section className="mb-10 flex flex-col gap-6 rounded-3xl border border-purple-100 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
          <Filter className="h-6 w-6 text-purple-700" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Filter Hospitals
          </h3>

          <p className="text-sm text-gray-500">
            Browse by tier.
          </p>

        </div>

      </div>

      <div className="flex flex-wrap gap-3">

        {filters.map((filter) => {

          const active = selectedTier === filter;

          return (
            <button
              key={filter}
              onClick={() => onTierChange(filter)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                active
                  ? "bg-gradient-to-r from-purple-700 to-pink-500 text-white"
                  : "border border-purple-100 bg-white hover:bg-purple-50"
              }`}
            >
              {filter}
            </button>
          );
        })}

      </div>

      <button className="flex items-center gap-2 rounded-2xl border border-purple-100 bg-purple-50 px-5 py-3 text-purple-700">

        <SlidersHorizontal className="h-5 w-5" />

        Sort

      </button>

    </section>
  );
}