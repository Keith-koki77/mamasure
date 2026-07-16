"use client";

import {
  Flame,
  Award,
  TrendingUp,
  Target,
  ChevronRight,
} from "lucide-react";

import { contributionStreak } from "@/data/contributions";

export default function StreakCard() {
  const progress =
    (contributionStreak.currentStreak /
      contributionStreak.nextMilestone) *
    100;

  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Savings Streak
          </h2>

          <p className="mt-2 text-gray-500">
            Stay consistent and unlock new achievement badges.
          </p>

        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">

          <Flame className="h-8 w-8 text-orange-500" />

        </div>

      </div>

      {/* Current Streak */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-purple-100">
              Current Streak
            </p>

            <h2 className="mt-2 text-6xl font-extrabold">

              {contributionStreak.currentStreak}

            </h2>

            <p className="mt-2 text-purple-100">
              Consecutive Contributions
            </p>

          </div>

          <Flame className="h-20 w-20 text-orange-300" />

        </div>

      </div>

      {/* Stats */}

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        <div className="rounded-3xl border border-purple-100 bg-purple-50 p-6">

          <Award className="h-8 w-8 text-purple-700" />

          <p className="mt-4 text-sm text-gray-500">
            Current Badge
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            {contributionStreak.badge}
          </h3>

        </div>

        <div className="rounded-3xl border border-purple-100 bg-pink-50 p-6">

          <TrendingUp className="h-8 w-8 text-pink-500" />

          <p className="mt-4 text-sm text-gray-500">
            Consistency
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            {contributionStreak.consistency}%
          </h3>

        </div>

        <div className="rounded-3xl border border-purple-100 bg-purple-50 p-6">

          <Target className="h-8 w-8 text-purple-700" />

          <p className="mt-4 text-sm text-gray-500">
            Longest Streak
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            {contributionStreak.longestStreak} Months
          </h3>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-10">

        <div className="flex items-center justify-between">

          <h3 className="font-semibold text-slate-900">
            Next Achievement
          </h3>

          <span className="text-sm text-gray-500">
            {contributionStreak.currentStreak}/
            {contributionStreak.nextMilestone} Months
          </span>

        </div>

        <div className="mt-4 h-4 overflow-hidden rounded-full bg-purple-100">

          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-700 to-pink-500 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />

        </div>

        <div className="mt-4 flex items-center justify-between">

          <p className="text-sm text-gray-500">
            Complete{" "}
            {contributionStreak.nextMilestone -
              contributionStreak.currentStreak}{" "}
            more monthly contribution
            {contributionStreak.nextMilestone -
              contributionStreak.currentStreak >
            1
              ? "s"
              : ""}{" "}
            to unlock your next badge.
          </p>

          <button
            disabled
            className="flex cursor-not-allowed items-center gap-2 rounded-xl bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700"
          >
            Coming Soon

            <ChevronRight className="h-4 w-4" />

          </button>

        </div>

      </div>

    </section>
  );
}