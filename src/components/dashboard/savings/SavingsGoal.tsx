"use client";

import { Building2, CheckCircle2, Target } from "lucide-react";

import { savingsGoal } from "@/data/savings";

export default function SavingsGoal() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">

              <Target className="h-7 w-7 text-pink-500" />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-slate-900">
                Savings Goal
              </h2>

              <p className="mt-1 text-gray-500">
                Your maternity financial target.
              </p>

            </div>

          </div>

        </div>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {savingsGoal.progress}% Complete
        </span>

      </div>

      {/* Hospital */}

      <div className="mt-10 rounded-3xl border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">

            <Building2 className="h-7 w-7 text-purple-700" />

          </div>

          <div>

            <h3 className="text-xl font-bold text-slate-900">
              {savingsGoal.hospital}
            </h3>

            <p className="text-gray-500">
              {savingsGoal.packageName}
            </p>

          </div>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-10">

        <div className="mb-3 flex items-center justify-between">

          <span className="font-semibold text-slate-700">
            Overall Progress
          </span>

          <span className="font-bold text-purple-700">
            {savingsGoal.progress}%
          </span>

        </div>

        <div className="h-5 overflow-hidden rounded-full bg-purple-100">

          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 transition-all duration-700"
            style={{
              width: `${savingsGoal.progress}%`,
            }}
          />

        </div>

      </div>

      {/* Statistics */}

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-purple-50 p-6">

          <p className="text-sm font-medium text-gray-500">
            Target Amount
          </p>

          <h3 className="mt-2 text-3xl font-extrabold text-purple-700">
            KES {savingsGoal.targetAmount.toLocaleString()}
          </h3>

        </div>

        <div className="rounded-2xl bg-green-50 p-6">

          <p className="text-sm font-medium text-gray-500">
            Saved So Far
          </p>

          <h3 className="mt-2 text-3xl font-extrabold text-green-600">
            KES {savingsGoal.savedAmount.toLocaleString()}
          </h3>

        </div>

        <div className="rounded-2xl bg-pink-50 p-6">

          <p className="text-sm font-medium text-gray-500">
            Remaining
          </p>

          <h3 className="mt-2 text-3xl font-extrabold text-pink-500">
            KES {savingsGoal.remainingAmount.toLocaleString()}
          </h3>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 to-pink-500 p-6 text-white">

        <div className="flex items-start gap-4">

          <div className="rounded-2xl bg-white/20 p-3">

            <CheckCircle2 className="h-7 w-7" />

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Keep Going!
            </h3>

            <p className="mt-2 max-w-2xl leading-7 text-purple-100">
              You've already funded <strong>{savingsGoal.progress}%</strong> of
              your maternity journey. Continue making consistent monthly
              contributions to reach your goal before your expected delivery.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}