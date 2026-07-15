"use client";

import { overviewCards } from "@/data/savings";

const colorThemes = {
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-700",
    value: "text-purple-700",
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-500",
    value: "text-pink-500",
  },
} as const;

export default function SavingsOverview() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {overviewCards.map((card) => {
        const Icon = card.icon;
        const theme = colorThemes[card.color];

        return (
          <div
            key={card.id}
            className="group rounded-[28px] border border-purple-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl"
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

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Live
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}