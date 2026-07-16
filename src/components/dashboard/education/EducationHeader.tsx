"use client";

import {
  GraduationCap,
  Flame,
  Trophy,
  BookOpen,
} from "lucide-react";

import {
  learningProgress,
  educationStats,
} from "@/data/education";

const colorThemes = {
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-700",
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-500",
  },
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
  },
} as const;

type ThemeColor = keyof typeof colorThemes;

export default function EducationHeader() {
  const progress = Math.round(
    (learningProgress.completed / learningProgress.total) * 100
  );

  return (
    <section className="overflow-hidden rounded-[36px] bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white shadow-xl">

      <div className="relative p-10">

        {/* Decorative Background */}

        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-pink-300/10 blur-3xl" />

        <div className="relative">

          {/* Hero */}

          <div className="flex flex-col justify-between gap-10 xl:flex-row">

            {/* Left */}

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">

                <GraduationCap className="h-5 w-5" />

                <span className="font-semibold">
                  Maternal Learning Hub
                </span>

              </div>

              <h1 className="mt-6 text-5xl font-extrabold leading-tight">
                Learn. Prepare.
                <br />
                Thrive Through Pregnancy.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-purple-100">
                Explore trusted articles, videos, expert guidance and
                practical tips designed to support you through every
                stage of pregnancy and early motherhood.
              </p>

            </div>

            {/* Progress Card */}

            <div className="w-full rounded-[30px] bg-white/15 p-8 backdrop-blur xl:max-w-md">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-purple-100">
                    Learning Progress
                  </p>

                  <h2 className="mt-2 text-5xl font-extrabold">
                    {progress}%
                  </h2>

                </div>

                <div className="rounded-2xl bg-white/20 p-4">

                  <BookOpen className="h-10 w-10" />

                </div>

              </div>

              <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/20">

                <div
                  className="h-full rounded-full bg-white transition-all duration-700"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

              <div className="mt-6 flex justify-between text-sm">

                <span>
                  {learningProgress.completed} of{" "}
                  {learningProgress.total} lessons completed
                </span>

                <span>
                  {progress}%
                </span>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white/15 p-5 text-center">

                  <Flame className="mx-auto h-8 w-8 text-yellow-300" />

                  <p className="mt-3 text-sm text-purple-100">
                    Current Streak
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    {learningProgress.streak} Days
                  </h3>

                </div>

                <div className="rounded-2xl bg-white/15 p-5 text-center">

                  <Trophy className="mx-auto h-8 w-8 text-yellow-300" />

                  <p className="mt-3 text-sm text-purple-100">
                    Certificates
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    {learningProgress.certificates}
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* Stats */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {educationStats.map((stat) => {
              const Icon = stat.icon;
              const theme =
                colorThemes[stat.color as ThemeColor];

              return (
                <div
                  key={stat.id}
                  className="rounded-3xl bg-white p-6 text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg}`}
                  >
                    <Icon
                      className={`h-8 w-8 ${theme.icon}`}
                    />
                  </div>

                  <h3 className="mt-6 text-4xl font-extrabold">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    {stat.title}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}