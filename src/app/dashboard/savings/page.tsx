"use client";

import SavingsHeader from "@/components/dashboard/savings/SavingsHeader";
import SavingsOverview from "@/components/dashboard/savings/SavingsOverview";
import SavingsChart from "@/components/dashboard/savings/SavingsChart";
import SavingsGoal from "@/components/dashboard/savings/SavingsGoal";
import ContributionHistory from "@/components/dashboard/savings/ContributionHistory";
import SavingsInsights from "@/components/dashboard/savings/SavingsInsights";
import MilestoneCard from "@/components/dashboard/savings/MilestoneCard";

export default function SavingsPage() {
  return (
    <div className="space-y-8">
      <SavingsHeader />

      <SavingsOverview />

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <SavingsChart />
        </div>

        <SavingsGoal />
      </div>

      <ContributionHistory />

      <MilestoneCard />

      <SavingsInsights />
    </div>
  );
}