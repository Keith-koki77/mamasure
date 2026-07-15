"use client";

import {
  PiggyBank,
  Target,
  TrendingUp,
  CalendarDays,
} from "lucide-react";

import { wallet } from "@/data/wallet";

export default function SavingsProgress() {
  const progress = Math.round(
    (wallet.savedAmount / wallet.savingsGoal) * 100
  );

  const remaining =
    wallet.savingsGoal - wallet.savedAmount;

  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Savings Progress
          </h2>

          <p className="mt-2 text-gray-500">
            Track how close you are to achieving your maternity
            savings goal.
          </p>

        </div>

        <div className="rounded-full bg-purple-100 px-5 py-2 font-semibold text-purple-700">
          {progress}% Complete
        </div>

      </div>

      {/* Progress */}

      <div className="mt-10">

        <div className="flex justify-between text-sm font-medium text-gray-600">

          <span>
            KES {wallet.savedAmount.toLocaleString()}
          </span>

          <span>
            KES {wallet.savingsGoal.toLocaleString()}
          </span>

        </div>

        <div className="mt-3 h-5 overflow-hidden rounded-full bg-purple-100">

          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />

        </div>

      </div>

      {/* Statistics */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-purple-50 p-6">

          <PiggyBank className="h-8 w-8 text-purple-700" />

          <p className="mt-5 text-sm text-gray-500">
            Saved So Far
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            KES {wallet.savedAmount.toLocaleString()}
          </h3>

        </div>

        <div className="rounded-2xl bg-pink-50 p-6">

          <Target className="h-8 w-8 text-pink-500" />

          <p className="mt-5 text-sm text-gray-500">
            Remaining
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            KES {remaining.toLocaleString()}
          </h3>

        </div>

        <div className="rounded-2xl bg-purple-50 p-6">

          <TrendingUp className="h-8 w-8 text-purple-700" />

          <p className="mt-5 text-sm text-gray-500">
            Monthly Goal
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            KES {wallet.monthlyGoal.toLocaleString()}
          </h3>

        </div>

        <div className="rounded-2xl bg-pink-50 p-6">

          <CalendarDays className="h-8 w-8 text-pink-500" />

          <p className="mt-5 text-sm text-gray-500">
            Next Contribution
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            {wallet.nextContribution.date}
          </h3>

          <p className="mt-2 text-pink-500 font-semibold">
            KES{" "}
            {wallet.nextContribution.amount.toLocaleString()}
          </p>

        </div>

      </div>

      {/* Encouragement */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 to-pink-500 p-8 text-white">

        <h3 className="text-2xl font-bold">
          🎉 You're doing an amazing job!
        </h3>

        <p className="mt-4 max-w-3xl text-purple-100 leading-8">
          You've already saved{" "}
          <span className="font-bold text-white">
            KES {wallet.savedAmount.toLocaleString()}
          </span>
          . Keep contributing consistently and you'll be financially
          prepared for your maternity journey long before your due
          date.
        </p>

      </div>

    </section>
  );
}