"use client";

import {
  ArrowUpRight,
  CalendarDays,
  PiggyBank,
  Target,
  TrendingUp,
} from "lucide-react";

export default function SavingsChart() {
  const progress = 41;

  return (
    <section className="overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-sm">

      {/* Header */}

      <div className="flex flex-col gap-6 border-b border-purple-100 p-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            Savings Overview
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Your Maternity Savings Journey
          </h2>

          <p className="mt-3 text-gray-600">
            Track your progress towards a stress-free pregnancy.
          </p>

        </div>

        <div className="rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 px-6 py-4 text-white shadow-lg">

          <p className="text-sm opacity-90">
            Current Progress
          </p>

          <h3 className="mt-1 text-4xl font-extrabold">
            {progress}%
          </h3>

        </div>

      </div>

      {/* Body */}

      <div className="grid gap-10 p-8 xl:grid-cols-[2fr_1fr]">

        {/* Left */}

        <div>

          {/* Chart */}

          <div className="rounded-3xl bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6">

            <svg
              viewBox="0 0 700 300"
              className="h-[300px] w-full"
              preserveAspectRatio="none"
            >
              {/* Grid */}

              {[50, 100, 150, 200, 250].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="700"
                  y2={y}
                  stroke="#ECE7F8"
                  strokeWidth="1"
                />
              ))}

              {/* Area */}

              <path
                d="
                  M20 260
                  C80 250 120 230 180 210
                  S280 170 340 155
                  S430 120 500 100
                  S600 60 680 40
                  L680 280
                  L20 280
                  Z
                "
                fill="url(#gradient)"
              />

              {/* Line */}

              <path
                d="
                  M20 260
                  C80 250 120 230 180 210
                  S280 170 340 155
                  S430 120 500 100
                  S600 60 680 40
                "
                fill="none"
                stroke="#7C3AED"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/* End Dot */}

              <circle
                cx="680"
                cy="40"
                r="8"
                fill="#EC4899"
              />

              <defs>

                <linearGradient
                  id="gradient"
                  x1="0"
                  x2="0"
                  y1="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#A855F7"
                    stopOpacity="0.30"
                  />

                  <stop
                    offset="100%"
                    stopColor="#EC4899"
                    stopOpacity="0.05"
                  />

                </linearGradient>

              </defs>

            </svg>

            {/* Months */}

            <div className="mt-4 flex justify-between text-sm font-medium text-gray-500">

              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="space-y-5">

          <div className="rounded-2xl bg-purple-50 p-6">

            <div className="flex items-center gap-4">

              <PiggyBank className="h-10 w-10 text-purple-700" />

              <div>

                <p className="text-gray-500">
                  Current Savings
                </p>

                <h3 className="text-3xl font-bold text-purple-700">
                  KES 48,650
                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-2xl bg-pink-50 p-6">

            <div className="flex items-center gap-4">

              <Target className="h-10 w-10 text-pink-500" />

              <div>

                <p className="text-gray-500">
                  Savings Goal
                </p>

                <h3 className="text-3xl font-bold text-pink-500">
                  KES 120,000
                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-2xl bg-purple-50 p-6">

            <div className="flex items-center gap-4">

              <TrendingUp className="h-10 w-10 text-purple-700" />

              <div>

                <p className="text-gray-500">
                  Monthly Saving
                </p>

                <h3 className="text-3xl font-bold text-purple-700">
                  KES 7,500
                </h3>

              </div>

            </div>

          </div>

          <div className="rounded-2xl bg-pink-50 p-6">

            <div className="flex items-center gap-4">

              <CalendarDays className="h-10 w-10 text-pink-500" />

              <div>

                <p className="text-gray-500">
                  Goal Completion
                </p>

                <h3 className="text-3xl font-bold text-pink-500">
                  Dec 2026
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-6">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h4 className="text-xl font-bold text-slate-900">
              You're on the right track 🎉
            </h4>

            <p className="mt-2 text-gray-600">
              Keep saving consistently to reach your maternity goal before your expected delivery.
            </p>

          </div>

          <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 px-6 py-4 font-semibold text-white transition hover:scale-105">

            Make Contribution

            <ArrowUpRight className="h-5 w-5" />

          </button>

        </div>

      </div>

    </section>
  );
}