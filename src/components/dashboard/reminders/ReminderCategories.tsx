"use client";

import {
  reminderCategories,
  ReminderColor,
} from "@/data/reminders";

import { ArrowRight } from "lucide-react";

const colorThemes: Record<
  ReminderColor,
  {
    bg: string;
    icon: string;
    gradient: string;
    badge: string;
  }
> = {
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-700",
    gradient: "from-purple-700 to-purple-500",
    badge: "bg-purple-100 text-purple-700",
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-600",
    gradient: "from-pink-500 to-rose-400",
    badge: "bg-pink-100 text-pink-600",
  },
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
    gradient: "from-green-600 to-emerald-500",
    badge: "bg-green-100 text-green-700",
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    gradient: "from-blue-600 to-cyan-500",
    badge: "bg-blue-100 text-blue-700",
  },
  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    gradient: "from-orange-500 to-amber-400",
    badge: "bg-orange-100 text-orange-700",
  },
  red: {
    bg: "bg-red-100",
    icon: "text-red-600",
    gradient: "from-red-600 to-rose-500",
    badge: "bg-red-100 text-red-700",
  },
};

export default function ReminderCategories() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Reminder Categories
          </h2>

          <p className="mt-2 text-gray-500">
            MamaSure keeps you on track with personalized reminders for
            every stage of your pregnancy journey.
          </p>

        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          {reminderCategories.length} Categories
        </span>

      </div>

      {/* Categories Grid */}

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {reminderCategories.map((category) => {
          const Icon = category.icon;
          const theme = colorThemes[category.color];

          return (
            <div
              key={category.id}
              className="group rounded-3xl border border-purple-100 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl"
            >

              {/* Icon */}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg}`}
              >
                <Icon className={`h-8 w-8 ${theme.icon}`} />
              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {category.title}
              </h3>

              {/* Description */}

              <p className="mt-4 leading-7 text-gray-500">
                {category.description}
              </p>

              {/* Footer */}

              <div className="mt-8 flex items-center justify-between">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.badge}`}
                >
                  Active
                </span>

                <button
                  disabled
                  className={`inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-gradient-to-r px-4 py-2 text-sm font-semibold text-white opacity-90 ${theme.gradient}`}
                >
                  Coming Soon

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                </button>

              </div>

            </div>
          );
        })}

      </div>

      {/* Bottom CTA */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <h3 className="text-2xl font-bold">
          Personalized Just for You
        </h3>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-purple-100">
          As your pregnancy progresses, MamaSure will intelligently adjust
          your reminders based on your gestational age, healthcare plan,
          appointments, nutrition goals, and maternity savings journey to
          ensure you receive the right reminder at the right time.
        </p>

      </div>

    </section>
  );
}