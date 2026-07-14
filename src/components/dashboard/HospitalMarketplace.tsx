"use client";

import { Building2, ArrowRight } from "lucide-react";

import HospitalCard from "./HospitalCard";

export default function HospitalMarketplace() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-sm">

      {/* Header */}

      <div className="flex flex-col gap-6 border-b border-purple-100 p-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2">

            <Building2 className="h-4 w-4 text-purple-700" />

            <span className="text-sm font-semibold text-purple-700">
              Hospital Marketplace
            </span>

          </div>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Choose Your Preferred Hospital
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Compare trusted maternity providers and select the package
            that best matches your healthcare needs and savings goal.
          </p>

        </div>

        <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 px-6 py-4 font-semibold text-white transition hover:scale-105">

          View All Hospitals

          <ArrowRight className="h-5 w-5" />

        </button>

      </div>

      {/* Hospital Cards */}

      <div className="grid gap-6 p-8 lg:grid-cols-3">

        {/* Platinum */}

        <HospitalCard
          tier="Platinum"
          color="purple"
          hospitals={[
            "Aga Khan University Hospital",
            "The Nairobi Hospital",
            "Karen Hospital",
          ]}
          averageCost="KES 180K - 350K"
          features={[
            "Private Rooms",
            "Premium Specialists",
            "24/7 Neonatal Care",
            "Comprehensive Maternity Package",
          ]}
        />

        {/* Gold */}

        <HospitalCard
          tier="Gold"
          color="pink"
          hospitals={[
            "Mater Hospital",
            "Avenue Hospital",
            "MP Shah Hospital",
          ]}
          averageCost="KES 90K - 180K"
          features={[
            "Excellent Maternity Care",
            "Experienced Doctors",
            "Flexible Packages",
            "Modern Facilities",
          ]}
        />

        {/* Silver */}

        <HospitalCard
          tier="Silver"
          color="slate"
          hospitals={[
            "Equity Afya",
            "Ruai Family Hospital",
            "Neema Uhai Hospital",
          ]}
          averageCost="KES 40K - 90K"
          features={[
            "Affordable Care",
            "Qualified Professionals",
            "Routine Antenatal Care",
            "Budget Friendly",
          ]}
        />

      </div>

      {/* Bottom CTA */}

      <div className="border-t border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h3 className="text-2xl font-bold text-slate-900">
              Not sure which hospital is right for you?
            </h3>

            <p className="mt-2 text-gray-600">
              Mama Sure helps you compare hospitals based on your
              budget, preferred location and maternity services.
            </p>

          </div>

          <button className="rounded-2xl border border-purple-200 bg-white px-6 py-4 font-semibold text-purple-700 transition hover:bg-purple-50">

            Compare Packages

          </button>

        </div>

      </div>

    </section>
  );
}