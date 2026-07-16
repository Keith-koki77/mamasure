"use client";

import { ArrowRight } from "lucide-react";
import { educationCategories } from "@/data/education";

const colorThemes = {
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-700",
    gradient: "from-purple-700 to-purple-500",
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-500",
    gradient: "from-pink-500 to-rose-400",
  },
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
    gradient: "from-green-600 to-emerald-500",
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    gradient: "from-blue-600 to-cyan-500",
  },
} as const;

type ThemeColor = keyof typeof colorThemes;

export default function EducationCategories() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Browse Learning Categories
          </h2>

          <p className="mt-2 text-gray-500">
            Explore expert-curated lessons covering every stage of your
            pregnancy journey.
          </p>

        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          6 Categories
        </span>

      </div>

      {/* Categories Grid */}

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {educationCategories.map((category) => {
          const Icon = category.icon;
          const theme =
            colorThemes[category.color as ThemeColor];

          return (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-3xl border border-purple-100 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl"
            >

              {/* Coming Soon */}

              <div className="absolute right-5 top-5 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                Coming Soon
              </div>

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

              {/* Course Info */}

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-gray-50 px-5 py-4">

                <div>

                  <p className="font-bold text-slate-900">
                    {category.lessons} Lessons
                  </p>

                  <p className="font-bold text-green-600">
                    {category.level}
                  </p>

                </div>

                <div>

                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Difficulty
                  </p>

                  <p className="font-bold text-green-600">
                    Beginner
                  </p>

                </div>

              </div>

              {/* CTA */}

              <button
                disabled
                className={`mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-2xl bg-gradient-to-r px-5 py-3 font-semibold text-white opacity-90 ${theme.gradient}`}
              >
                Explore Category

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

              </button>

            </div>
          );
        })}

      </div>

    </section>
  );
}