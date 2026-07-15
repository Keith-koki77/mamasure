"use client";

import { Building2, Search, ShieldCheck } from "lucide-react";

interface MarketplaceHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function MarketplaceHeader({
  search,
  onSearchChange,
}: MarketplaceHeaderProps) {
  return (
    <section className="mb-10 rounded-[32px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-10 text-white shadow-xl">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">
            <Building2 className="h-5 w-5" />
            <span className="text-sm font-semibold">
              Trusted Healthcare Partners
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold lg:text-5xl">
            Hospital Marketplace
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-purple-100">
            Compare trusted maternity hospitals and choose the provider
            that best fits your maternity journey.
          </p>

        </div>

        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-2xl bg-white/10 p-5 text-center">
            <h2 className="text-3xl font-bold">8</h2>
            <p className="text-sm text-purple-100">Hospitals</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 text-center">
            <h2 className="text-3xl font-bold">3</h2>
            <p className="text-sm text-purple-100">Care Tiers</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-green-300" />
            <p className="mt-2 text-sm text-purple-100">
              Verified
            </p>
          </div>

        </div>

      </div>

      <div className="relative mt-10">

        <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search hospitals or locations..."
          className="h-16 w-full rounded-2xl bg-white pl-16 pr-5 text-slate-900 outline-none"
        />

      </div>

    </section>
  );
}