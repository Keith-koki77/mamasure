"use client";

import { CalendarDays, Download } from "lucide-react";

export default function SavingsHeader() {
  return (
    <section className="flex flex-col gap-6 rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}

      <div>

        <div className="flex items-center gap-3">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">

            <CalendarDays className="h-7 w-7 text-purple-700" />

          </div>

          <div>

            <h1 className="text-4xl font-extrabold text-slate-900">
              Savings Tracker
            </h1>

            <p className="mt-2 text-lg text-gray-500">
              Monitor your maternity savings progress and stay on track toward your financial goal.
            </p>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-4">

        <div className="rounded-full bg-pink-100 px-5 py-3 font-semibold text-pink-600">

          July 2026

        </div>

        <button
          disabled
          className="flex cursor-not-allowed items-center gap-2 rounded-2xl border border-purple-200 bg-purple-50 px-6 py-3 font-semibold text-purple-700 opacity-80"
        >

          <Download className="h-5 w-5" />

          Export Report

          <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-700">
            Soon
          </span>

        </button>

      </div>

    </section>
  );
}