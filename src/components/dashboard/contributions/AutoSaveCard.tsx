"use client";

import {
  Repeat,
  CalendarDays,
  Wallet,
  ShieldCheck,
  ToggleLeft,
} from "lucide-react";

import { autoSave } from "@/data/contributions";

export default function AutoSaveCard() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Automatic Savings
          </h2>

          <p className="mt-2 text-gray-500">
            Let MamaSure save for you automatically every month.
          </p>

        </div>

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          Coming Soon
        </span>

      </div>

      {/* Hero */}

      <div className="mt-8 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-purple-100">
              AutoSave Status
            </p>

            <h2 className="mt-3 text-4xl font-extrabold">
              {autoSave.enabled ? "Enabled" : "Disabled"}
            </h2>

          </div>

          <ToggleLeft className="h-20 w-20 opacity-80" />

        </div>

      </div>

      {/* Settings */}

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl border border-purple-100 p-6">

          <Repeat className="h-8 w-8 text-purple-700" />

          <p className="mt-4 text-sm text-gray-500">
            Frequency
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            {autoSave.frequency}
          </h3>

        </div>

        <div className="rounded-3xl border border-purple-100 p-6">

          <Wallet className="h-8 w-8 text-pink-500" />

          <p className="mt-4 text-sm text-gray-500">
            Amount
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            KES {autoSave.amount.toLocaleString()}
          </h3>

        </div>

        <div className="rounded-3xl border border-purple-100 p-6">

          <CalendarDays className="h-8 w-8 text-purple-700" />

          <p className="mt-4 text-sm text-gray-500">
            Next Debit
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            {autoSave.nextDebit}
          </h3>

        </div>

        <div className="rounded-3xl border border-purple-100 p-6">

          <ShieldCheck className="h-8 w-8 text-green-600" />

          <p className="mt-4 text-sm text-gray-500">
            Payment Method
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            {autoSave.paymentMethod}
          </h3>

        </div>

      </div>

      {/* Information */}

      <div className="mt-8 rounded-3xl bg-purple-50 p-6">

        <h3 className="text-lg font-bold text-slate-900">
          Why AutoSave?
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          AutoSave helps you build consistent savings without remembering
          to make manual deposits. Once activated, your selected amount
          will be deducted automatically based on your preferred schedule,
          keeping you on track toward your maternity savings goal.
        </p>

      </div>

      {/* CTA */}

      <button
        disabled
        className="mt-8 w-full cursor-not-allowed rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 px-6 py-4 font-semibold text-white opacity-80"
      >
        Enable AutoSave (Coming Soon)
      </button>

    </section>
  );
}