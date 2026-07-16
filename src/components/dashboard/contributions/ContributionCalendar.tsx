"use client";

import {
  CalendarDays,
  CheckCircle2,
  Circle,
} from "lucide-react";

import { contributionCalendar } from "@/data/contributions";

export default function ContributionCalendar() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Contribution Calendar
          </h2>

          <p className="mt-2 text-gray-500">
            Track your scheduled monthly deposits and stay consistent.
          </p>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">

          <CalendarDays className="h-7 w-7 text-purple-700" />

        </div>

      </div>

      {/* Calendar */}

      <div className="mt-10 grid grid-cols-5 gap-5">

        {contributionCalendar.map((item) => (
          <div
            key={item.day}
            className={`group rounded-3xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              item.contributed
                ? "border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50"
                : "border-gray-200 bg-white hover:border-purple-200"
            }`}
          >

            {/* Day */}

            <div className="text-sm font-medium text-gray-500">
              Day
            </div>

            <div
              className={`mt-2 text-4xl font-extrabold ${
                item.contributed
                  ? "text-purple-700"
                  : "text-slate-800"
              }`}
            >
              {item.day}
            </div>

            {/* Status */}

            <div className="mt-6 flex justify-center">

              {item.contributed ? (
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              ) : (
                <Circle className="h-8 w-8 text-gray-300" />
              )}

            </div>

            <p
              className={`mt-3 text-sm font-semibold ${
                item.contributed
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
            >
              {item.contributed
                ? "Contribution Made"
                : "Upcoming"}
            </p>

          </div>
        ))}

      </div>

      {/* Legend */}

      <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-purple-100 pt-6">

        <div className="flex items-center gap-3">

          <CheckCircle2 className="h-5 w-5 text-green-500" />

          <span className="text-sm text-gray-600">
            Contribution Completed
          </span>

        </div>

        <div className="flex items-center gap-3">

          <Circle className="h-5 w-5 text-gray-400" />

          <span className="text-sm text-gray-600">
            Upcoming Contribution
          </span>

        </div>

      </div>

    </section>
  );
}