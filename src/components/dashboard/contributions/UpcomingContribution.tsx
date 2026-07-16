"use client";

import {
  CalendarDays,
  Wallet,
  Building2,
  CreditCard,
  ArrowRight,
} from "lucide-react";

import { upcomingContribution } from "@/data/contributions";

export default function UpcomingContribution() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Upcoming Contribution
          </h2>

          <p className="mt-2 text-gray-500">
            Your next scheduled savings contribution.
          </p>

        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">

          <CalendarDays className="h-8 w-8 text-purple-700" />

        </div>

      </div>

      {/* Hero Card */}

      <div className="mt-8 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <p className="text-purple-100">
          Next Contribution
        </p>

        <h2 className="mt-3 text-5xl font-extrabold">
          KES {upcomingContribution.amount.toLocaleString()}
        </h2>

        <p className="mt-3 text-lg text-purple-100">
          Scheduled for{" "}
          <span className="font-semibold text-white">
            {upcomingContribution.dueDate}
          </span>
        </p>

      </div>

      {/* Details */}

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div className="rounded-3xl border border-purple-100 bg-purple-50 p-6">

          <div className="flex items-center gap-4">

            <Wallet className="h-8 w-8 text-purple-700" />

            <div>

              <p className="text-sm text-gray-500">
                Payment Method
              </p>

              <h3 className="text-lg font-bold text-slate-900">
                {upcomingContribution.paymentMethod}
              </h3>

            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-purple-100 bg-pink-50 p-6">

          <div className="flex items-center gap-4">

            <Building2 className="h-8 w-8 text-pink-500" />

            <div>

              <p className="text-sm text-gray-500">
                Hospital
              </p>

              <h3 className="text-lg font-bold text-slate-900">
                {upcomingContribution.hospital}
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Package */}

      <div className="mt-6 rounded-3xl border border-purple-100 p-6">

        <div className="flex items-center gap-4">

          <CreditCard className="h-8 w-8 text-purple-700" />

          <div>

            <p className="text-sm text-gray-500">
              Saving Towards
            </p>

            <h3 className="text-xl font-bold text-slate-900">
              {upcomingContribution.package}
            </h3>

          </div>

        </div>

      </div>

      {/* Estimated Wallet */}

      <div className="mt-6 rounded-3xl bg-green-50 p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-500">
              Estimated Wallet Balance
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-700">
              KES{" "}
              {upcomingContribution.estimatedBalance.toLocaleString()}
            </h2>

          </div>

          <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

            After Deposit

          </div>

        </div>

      </div>

      {/* CTA */}

      <button
        disabled
        className="mt-8 flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 px-6 py-4 font-semibold text-white opacity-80"
      >

        Pay Contribution

        <ArrowRight className="h-5 w-5" />

        <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
          Coming Soon
        </span>

      </button>

    </section>
  );
}