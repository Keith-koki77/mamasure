"use client";

import { overviewCards, ReminderColor } from "@/data/reminders";

const colorThemes: Record<
  ReminderColor,
  {
    bg: string;
    icon: string;
    value: string;
    badge: string;
  }
> = {
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-700",
    value: "text-purple-700",
    badge: "bg-purple-100 text-purple-700",
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-600",
    value: "text-pink-600",
    badge: "bg-pink-100 text-pink-600",
  },
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
    value: "text-green-600",
    badge: "bg-green-100 text-green-700",
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    value: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
  },
  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    value: "text-orange-600",
    badge: "bg-orange-100 text-orange-700",
  },
  red: {
    bg: "bg-red-100",
    icon: "text-red-600",
    value: "text-red-600",
    badge: "bg-red-100 text-red-700",
  },
};

export default function ReminderOverview() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {overviewCards.map((card) => {
        const Icon = card.icon;
        const theme = colorThemes[card.color];

        return (
          <div
            key={card.id}
            className="group rounded-[30px] border border-purple-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl"
          >

            {/* Icon */}

            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg}`}
            >
              <Icon className={`h-8 w-8 ${theme.icon}`} />
            </div>

            {/* Title */}

            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-500">
              {card.title}
            </p>

            {/* Value */}

            <h2
              className={`mt-3 text-4xl font-extrabold ${theme.value}`}
            >
              {card.value}
            </h2>

            {/* Footer */}

            <div className="mt-6 flex items-center justify-between">

              <span className="text-sm text-gray-500">
                Updated today
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.badge}`}
              >
                Live
              </span>

            </div>

          </div>
        );
      })}

    </section>
  );
}