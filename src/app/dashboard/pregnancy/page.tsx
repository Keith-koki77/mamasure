"use client";

import JourneyHeader from "@/components/dashboard/pregnancy/JourneyHeader";
import PregnancyOverview from "@/components/dashboard/pregnancy/PregnancyOverview";
import WeekProgressCard from "@/components/dashboard/pregnancy/WeekProgressCard";
import BabyDevelopmentCard from "@/components/dashboard/pregnancy/BabyDevelopmentCard";
import MotherChangesCard from "@/components/dashboard/pregnancy/MotherChangesCard";
import UpcomingMilestones from "@/components/dashboard/pregnancy/UpcomingMilestones";
import HealthChecklist from "@/components/dashboard/pregnancy/HealthChecklist";
import AppointmentTimeline from "@/components/dashboard/pregnancy/AppointmentTimeline";
import NutritionTips from "@/components/dashboard/pregnancy/NutritionTips";
import WeeklyQuote from "@/components/dashboard/pregnancy/WeeklyQuote";
import EmergencyContacts from "@/components/dashboard/pregnancy/EmergencyContacts";

export default function PregnancyPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <JourneyHeader />

      {/* Pregnancy Overview */}

      <PregnancyOverview />

      {/* Week Progress */}

      <WeekProgressCard />

      {/* Baby + Mother */}

      <section className="grid gap-8 xl:grid-cols-2">

        <BabyDevelopmentCard />

        <MotherChangesCard />

      </section>

      {/* Upcoming Journey */}

      <UpcomingMilestones />

      {/* Daily Health */}

      <HealthChecklist />

      {/* Appointment Timeline */}

      <AppointmentTimeline />

      {/* Nutrition */}

      <NutritionTips />

      {/* Weekly Motivation */}

      <WeeklyQuote />

      {/* Emergency Contacts */}

      <EmergencyContacts />

    </div>
  );
}