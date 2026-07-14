"use client";

import {
  Wallet,
  Target,
  Building2,
  CalendarDays,
} from "lucide-react";

import SummaryCard from "./SummaryCard";

export default function SummaryCards() {
  return (
    <section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* Total Savings */}

        <SummaryCard
          title="Total Savings"
          value="KES 48,650"
          subtitle="Saved towards your maternity journey"
          icon={Wallet}
          iconBg="bg-purple-100"
          iconColor="text-purple-700"
          trend="+12% this month"
        />

        {/* Savings Goal */}

        <SummaryCard
          title="Savings Goal"
          value="KES 120,000"
          subtitle="Target before delivery"
          icon={Target}
          iconBg="bg-pink-100"
          iconColor="text-pink-600"
          progress={41}
        />

        {/* Selected Hospital */}

        <SummaryCard
          title="Selected Hospital"
          value="Aga Khan"
          subtitle="Platinum Maternity Package"
          icon={Building2}
          iconBg="bg-purple-100"
          iconColor="text-purple-700"
        />

        {/* Next Contribution */}

        <SummaryCard
          title="Next Deposit"
          value="KES 2,500"
          subtitle="Due on 15 July 2026"
          icon={CalendarDays}
          iconBg="bg-pink-100"
          iconColor="text-pink-600"
        />

      </div>

    </section>
  );
}