"use client";

import {
  PiggyBank,
  CalendarDays,
  Building2,
  Target,
  ArrowRight,
} from "lucide-react";

import { contributionPlan } from "@/data/contributions";

export default function ContributionPlan() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Contribution Plan
          </h2>

          <p className="mt-2 text-gray-500">
            Your personalized maternity savings roadmap.
          </p>

        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          Active Plan
        </span>

      </div>

      {/* Hero */}

      <div className="mt-8 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <p className="text-purple-100">
          Monthly Contribution
        </p>

        <h2 className="mt-3 text-5xl font-extrabold">
          KES {contributionPlan.monthlyContribution.toLocaleString()}
        </h2>

        <p className="mt-3 text-lg text-purple-100">
          Save every month to comfortably reach your delivery goal.
        </p>

      </div>

      {/* Details */}

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl border border-purple-100 p-6">

          <PiggyBank className="h-8 w-8 text-purple-700" />

          <p className="mt-4 text-sm text-gray-500">
            Total Goal
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            KES {contributionPlan.totalGoal.toLocaleString()}
          </h3>

        </div>

        <div className="rounded-3xl border border-purple-100 p-6">

          <CalendarDays className="h-8 w-8 text-pink-500" />

          <p className="mt-4 text-sm text-gray-500">
            Plan Duration
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            {contributionPlan.duration}
          </h3>

        </div>

        <div className="rounded-3xl border border-purple-100 p-6">

          <Building2 className="h-8 w-8 text-purple-700" />

          <p className="mt-4 text-sm text-gray-500">
            Hospital
          </p>

          <h3 className="mt-2 text-lg font-bold text-slate-900">
            {contributionPlan.hospital}
          </h3>

        </div>

        <div className="rounded-3xl border border-purple-100 p-6">

          <Target className="h-8 w-8 text-pink-500" />

          <p className="mt-4 text-sm text-gray-500">
            Completion
          </p>

          <h3 className="mt-2 text-lg font-bold text-slate-900">
            {contributionPlan.expectedCompletion}
          </h3>

        </div>

      </div>

      {/* Timeline */}

      <div className="mt-10 rounded-3xl border border-purple-100 bg-purple-50 p-8">

        <div className="flex items-center justify-between">

          <div className="text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-700 text-white">

              1

            </div>

            <p className="mt-3 font-semibold text-slate-900">
              Started
            </p>

            <span className="text-sm text-gray-500">
              {contributionPlan.started}
            </span>

          </div>

          <ArrowRight className="h-6 w-6 text-purple-400" />

          <div className="text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-500 text-white">

              2

            </div>

            <p className="mt-3 font-semibold text-slate-900">
              Save Monthly
            </p>

            <span className="text-sm text-gray-500">
              KES {contributionPlan.monthlyContribution.toLocaleString()}
            </span>

          </div>

          <ArrowRight className="h-6 w-6 text-purple-400" />

          <div className="text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white">

              ✓

            </div>

            <p className="mt-3 font-semibold text-slate-900">
              Goal Achieved
            </p>

            <span className="text-sm text-gray-500">
              {contributionPlan.expectedCompletion}
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}