"use client";

import {
  CalendarDays,
  TrendingUp,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import { wallet } from "@/data/wallet";

export default function MonthlyContributionCard() {
  const progress = Math.round(
    (wallet.monthlySaved / wallet.monthlyGoal) * 100
  );

  const remaining =
    wallet.monthlyGoal - wallet.monthlySaved;

  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Monthly Contribution
          </h2>

          <p className="mt-2 text-gray-500">
            Stay consistent with your monthly savings target.
          </p>

        </div>

        <div className="rounded-full bg-purple-100 px-4 py-2 font-semibold text-purple-700">
          {progress}% Complete
        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between text-sm font-medium text-gray-600">

          <span>
            KES {wallet.monthlySaved.toLocaleString()}
          </span>

          <span>
            KES {wallet.monthlyGoal.toLocaleString()}
          </span>

        </div>

        <div className="mt-3 h-4 overflow-hidden rounded-full bg-purple-100">

          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-700 to-pink-500 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />

        </div>

      </div>

      {/* Statistics */}

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        {/* Saved */}

        <div className="rounded-2xl bg-purple-50 p-6">

          <TrendingUp className="h-8 w-8 text-purple-700" />

          <p className="mt-4 text-sm text-gray-500">
            Saved This Month
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            KES {wallet.monthlySaved.toLocaleString()}
          </h3>

        </div>

        {/* Remaining */}

        <div className="rounded-2xl bg-pink-50 p-6">

          <Clock3 className="h-8 w-8 text-pink-500" />

          <p className="mt-4 text-sm text-gray-500">
            Remaining
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            KES {remaining.toLocaleString()}
          </h3>

        </div>

        {/* Next Contribution */}

        <div className="rounded-2xl bg-purple-50 p-6">

          <CalendarDays className="h-8 w-8 text-purple-700" />

          <p className="mt-4 text-sm text-gray-500">
            Next Contribution
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            {wallet.nextContribution.date}
          </h3>

          <p className="mt-2 font-semibold text-purple-700">
            KES{" "}
            {wallet.nextContribution.amount.toLocaleString()}
          </p>

        </div>

      </div>

      {/* Encouragement */}

      <div className="mt-8 rounded-3xl border border-green-100 bg-green-50 p-6">

        <div className="flex items-start gap-4">

          <div className="rounded-full bg-green-100 p-3">

            <CheckCircle2 className="h-6 w-6 text-green-600" />

          </div>

          <div>

            <h3 className="text-lg font-bold text-slate-900">
              Great consistency!
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              You've achieved{" "}
              <span className="font-semibold text-purple-700">
                {progress}%
              </span>{" "}
              of your monthly savings target. Keep making regular
              contributions and you'll comfortably reach your maternity
              savings goal.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}