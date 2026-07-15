"use client";

import { savingsInsights } from "@/data/savings";
import { ArrowRight } from "lucide-react";

const colorThemes = {
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-700",
    gradient: "from-purple-700 to-purple-500",
    button: "bg-purple-700 hover:bg-purple-800",
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-500",
    gradient: "from-pink-500 to-rose-400",
    button: "bg-pink-500 hover:bg-pink-600",
  },
} as const;

export default function SavingsInsights() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Smart Savings Insights
          </h2>

          <p className="mt-2 text-gray-500">
            Personalized recommendations based on your current savings
            behaviour.
          </p>

        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          AI Insights
        </span>

      </div>

      {/* Insight Cards */}

      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {savingsInsights.map((insight) => {
          const Icon = insight.icon;
          const theme = colorThemes[insight.color];

          return (
            <div
              key={insight.id}
              className="group rounded-3xl border border-purple-100 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl"
            >

              {/* Icon */}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg}`}
              >
                <Icon className={`h-8 w-8 ${theme.icon}`} />
              </div>

              {/* Title */}

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {insight.title}
              </h3>

              {/* Description */}

              <p className="mt-4 leading-7 text-gray-500">
                {insight.description}
              </p>

              {/* CTA */}

              <button
                disabled
                className={`mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white opacity-80 transition ${theme.button}`}
              >
                Learn More

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

              </button>

            </div>
          );
        })}

      </div>

      {/* Bottom Banner */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <h3 className="text-2xl font-bold">
          Stay Consistent
        </h3>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-purple-100">
          Consistent monthly contributions are the fastest way to reach
          your maternity savings goal. Even small deposits made regularly
          can significantly reduce financial stress before delivery.
        </p>

      </div>

    </section>
  );
}