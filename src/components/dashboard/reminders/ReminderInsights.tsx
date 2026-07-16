"use client";

import { ArrowRight } from "lucide-react";

import {
  reminderInsights,
  ReminderColor,
} from "@/data/reminders";

const colorThemes: Record<
  ReminderColor,
  {
    bg: string;
    icon: string;
    gradient: string;
    button: string;
  }
> = {
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-700",
    gradient: "from-purple-700 to-purple-500",
    button: "bg-purple-700 hover:bg-purple-800",
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-600",
    gradient: "from-pink-500 to-rose-400",
    button: "bg-pink-500 hover:bg-pink-600",
  },
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
    gradient: "from-green-600 to-emerald-500",
    button: "bg-green-600 hover:bg-green-700",
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    gradient: "from-blue-600 to-cyan-500",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    gradient: "from-orange-500 to-amber-400",
    button: "bg-orange-600 hover:bg-orange-700",
  },
  red: {
    bg: "bg-red-100",
    icon: "text-red-600",
    gradient: "from-red-600 to-rose-500",
    button: "bg-red-600 hover:bg-red-700",
  },
};

export default function ReminderInsights() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Smart Reminder Insights
          </h2>

          <p className="mt-2 text-gray-500">
            Personalized recommendations based on your reminder
            completion and pregnancy journey.
          </p>

        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          AI Powered
        </span>

      </div>

      {/* Insight Cards */}

      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {reminderInsights.map((insight) => {
          const Icon = insight.icon;
          const theme = colorThemes[insight.color];

          return (
            <div
              key={insight.id}
              className="group rounded-3xl border border-purple-100 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg}`}
              >
                <Icon className={`h-8 w-8 ${theme.icon}`} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {insight.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                {insight.description}
              </p>

              <button
                disabled
                className={`mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white opacity-90 transition ${theme.button}`}
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
          Healthy Habits Start With Consistency
        </h3>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-purple-100">
          Your reminders are designed to support healthier daily habits
          during pregnancy. Staying consistent with medication,
          hydration, nutrition, exercise and clinic visits contributes
          to better maternal wellbeing throughout your journey.
        </p>

      </div>

    </section>
  );
}