"use client";

import ContributionHeader from "@/components/dashboard/contributions/ContributionHeader";
import ContributionOverview from "@/components/dashboard/contributions/ContributionOverview";
import ContributionPlan from "@/components/dashboard/contributions/ContributionPlan";
import AutoSaveCard from "@/components/dashboard/contributions/AutoSaveCard";
import ContributionCalendar from "@/components/dashboard/contributions/ContributionCalendar";
import UpcomingContribution from "@/components/dashboard/contributions/UpcomingContribution";
import StreakCard from "@/components/dashboard/contributions/StreakCard";
import ContributionHistory from "@/components/dashboard/contributions/ContributionHistory";

export default function ContributionsPage() {
  return (
    <main className="space-y-8">

      {/* Page Header */}

      <ContributionHeader />

      {/* Summary Cards */}

      <ContributionOverview />

      {/* Contribution Plan */}

      <ContributionPlan />

      {/* AutoSave */}

      <AutoSaveCard />

      {/* Monthly Calendar */}

      <ContributionCalendar />

      {/* Upcoming Contribution + Savings Streak */}

      <section className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <UpcomingContribution />
        </div>

        <div>
          <StreakCard />
        </div>

      </section>

      {/* Contribution History */}

      <ContributionHistory />

    </main>
  );
}