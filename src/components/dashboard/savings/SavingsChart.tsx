"use client";

import { monthlySavings } from "@/data/savings";
import { TrendingUp } from "lucide-react";

export default function SavingsChart() {
  const maxAmount = Math.max(
    ...monthlySavings.map((month) => month.amount)
  );

  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Savings Growth
          </h2>

          <p className="mt-2 text-gray-500">
            Your monthly savings progress throughout the year.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2">
          <TrendingUp className="h-5 w-5 text-purple-700" />

          <span className="font-semibold text-purple-700">
            +18%
          </span>
        </div>
      </div>

      {/* Chart */}

      <div className="mt-12 flex h-80 items-end justify-between gap-5">
        {monthlySavings.map((item) => {
          const height = (item.amount / maxAmount) * 100;

          return (
            <div
              key={item.month}
              className="flex flex-1 flex-col items-center"
            >
              {/* Value */}

              <span className="mb-3 text-sm font-semibold text-slate-700">
                {item.amount.toLocaleString()}
              </span>

              {/* Bar */}

              <div className="flex h-56 w-full items-end">
                <div
                  className="w-full rounded-t-3xl bg-gradient-to-t from-purple-700 via-purple-600 to-pink-500 transition-all duration-700 hover:opacity-90"
                  style={{
                    height: `${height}%`,
                  }}
                />
              </div>

              {/* Month */}

              <span className="mt-4 font-semibold text-gray-600">
                {item.month}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer Stats */}

      <div className="mt-10 grid gap-6 border-t border-purple-100 pt-8 md:grid-cols-3">
        <div>
          <p className="text-sm text-gray-500">
            Highest Month
          </p>

          <h3 className="mt-2 text-2xl font-bold text-purple-700">
            KES 22,000
          </h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Average Monthly Savings
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            KES 12,714
          </h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Current Trend
          </p>

          <h3 className="mt-2 text-2xl font-bold text-green-600">
            Increasing 📈
          </h3>
        </div>
      </div>
    </section>
  );
}