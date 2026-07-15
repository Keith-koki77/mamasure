"use client";

import {
  Wallet,
  PiggyBank,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

import { wallet } from "@/data/wallet";

export default function WalletBalance() {
  const progress = Math.round(
    (wallet.savedAmount / wallet.savingsGoal) * 100
  );

  return (
    <section className="overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-lg">

      {/* Top Card */}

      <div className="relative overflow-hidden bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        {/* Decorative Circles */}

        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />

        <div className="absolute right-8 bottom-0 h-32 w-32 rounded-full border border-white/10" />

        <div className="relative flex items-start justify-between">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

              <Wallet className="h-5 w-5" />

              <span className="text-sm font-medium">
                Available Balance
              </span>

            </div>

            <h2 className="mt-6 text-5xl font-extrabold">

              {wallet.currency}{" "}
              {wallet.balance.toLocaleString()}

            </h2>

            <p className="mt-3 text-purple-100">
              Available for your maternity expenses
            </p>

          </div>

          <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">

            <ShieldCheck className="h-10 w-10" />

          </div>

        </div>

      </div>

      {/* Bottom Stats */}

      <div className="grid gap-8 p-8 lg:grid-cols-3">

        {/* Saved */}

        <div>

          <div className="flex items-center gap-3">

            <PiggyBank className="h-6 w-6 text-purple-700" />

            <span className="font-semibold text-slate-900">
              Saved So Far
            </span>

          </div>

          <h3 className="mt-4 text-3xl font-bold text-purple-700">

            KES {wallet.savedAmount.toLocaleString()}

          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Total maternity savings accumulated.
          </p>

        </div>

        {/* Goal */}

        <div>

          <div className="flex items-center gap-3">

            <TrendingUp className="h-6 w-6 text-pink-500" />

            <span className="font-semibold text-slate-900">
              Savings Goal
            </span>

          </div>

          <h3 className="mt-4 text-3xl font-bold text-pink-500">

            KES {wallet.savingsGoal.toLocaleString()}

          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Target before your delivery.
          </p>

        </div>

        {/* Progress */}

        <div>

          <div className="flex items-center justify-between">

            <span className="font-semibold text-slate-900">
              Goal Progress
            </span>

            <span className="font-bold text-purple-700">
              {progress}%
            </span>

          </div>

          <div className="mt-5 h-4 overflow-hidden rounded-full bg-purple-100">

            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-700 to-pink-500 transition-all duration-700"
              style={{ width: `${progress}%` }}
            />

          </div>

          <p className="mt-3 text-sm text-gray-500">

            KES{" "}
            {(
              wallet.savingsGoal - wallet.savedAmount
            ).toLocaleString()}{" "}
            remaining to reach your target.

          </p>

        </div>

      </div>

    </section>
  );
}