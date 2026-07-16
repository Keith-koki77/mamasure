"use client";

import { CalendarDays, PiggyBank } from "lucide-react";

import { contributionSummary } from "@/data/contributions";

export default function ContributionHeader() {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-10 text-white shadow-xl">

      {/* Background Decoration */}

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

      <div className="absolute right-20 top-12 h-52 w-52 rounded-full border border-white/10" />

      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Content */}

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">

            <PiggyBank className="h-5 w-5" />

            <span className="text-sm font-semibold">
              Monthly Savings Plan
            </span>

          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight">

            Stay Consistent.
            <br />
            Build Your Future.

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-purple-100">

            Track your monthly maternity contributions, stay on schedule,
            and steadily build your savings towards a stress-free pregnancy
            and delivery.

          </p>

        </div>

        {/* Right Summary Card */}

        <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-medium text-gray-500">
                Next Contribution
              </p>

              <h3 className="mt-2 text-3xl font-extrabold">

                KES{" "}
                {contributionSummary.nextContribution.amount.toLocaleString()}

              </h3>

            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">

              <CalendarDays className="h-8 w-8 text-purple-700" />

            </div>

          </div>

          <div className="mt-8 rounded-2xl bg-purple-50 p-5">

            <p className="text-sm font-medium text-gray-500">
              Due Date
            </p>

            <p className="mt-2 text-xl font-bold text-purple-700">
              {contributionSummary.nextContribution.date}
            </p>

          </div>

          <div className="mt-6 flex items-center justify-between">

            <span className="text-sm text-gray-500">
              Monthly Progress
            </span>

            <span className="font-bold text-purple-700">
              {contributionSummary.contributionRate}%
            </span>

          </div>

          {/* Progress Bar */}

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-purple-100">

            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-700 to-pink-500 transition-all duration-700"
              style={{
                width: `${contributionSummary.contributionRate}%`,
              }}
            />

          </div>

        </div>

      </div>

    </section>
  );
}