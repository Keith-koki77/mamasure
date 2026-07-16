"use client";

import {
  Baby,
  CalendarDays,
  Heart,
  Ruler,
} from "lucide-react";

import { pregnancy } from "@/data/pregnancy";

export default function WeekProgressCard() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-lg">

      {/* Hero */}

      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

          <div>

            <p className="text-purple-100">
              Pregnancy Progress
            </p>

            <h2 className="mt-2 text-5xl font-extrabold">
              Week {pregnancy.currentWeek}
            </h2>

            <p className="mt-4 max-w-xl text-lg leading-8 text-purple-100">
              You're doing an amazing job. Your pregnancy is progressing
              beautifully and your baby continues to grow every day.
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-md">

            <Baby className="mx-auto h-16 w-16" />

            <p className="mt-4 text-purple-100">
              Current Trimester
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {pregnancy.trimester}
            </h3>

          </div>

        </div>

      </div>

      {/* Progress */}

      <div className="p-8">

        <div className="flex items-center justify-between">

          <span className="text-sm font-semibold text-gray-500">
            Pregnancy Timeline
          </span>

          <span className="font-bold text-purple-700">
            {pregnancy.progress}%
          </span>

        </div>

        <div className="mt-4 h-5 overflow-hidden rounded-full bg-purple-100">

          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-700 to-pink-500 transition-all duration-700"
            style={{ width: `${pregnancy.progress}%` }}
          />

        </div>

        <div className="mt-2 flex justify-between text-sm text-gray-500">

          <span>Week 1</span>

          <span>Week {pregnancy.currentWeek}</span>

          <span>Week {pregnancy.totalWeeks}</span>

        </div>

      </div>

      {/* Stats */}

      <div className="grid gap-6 border-t border-purple-100 p-8 md:grid-cols-3">

        <div className="rounded-3xl bg-purple-50 p-6">

          <Heart className="h-8 w-8 text-pink-500" />

          <p className="mt-4 text-sm text-gray-500">
            Baby Weight
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {pregnancy.babyWeight}
          </h3>

        </div>

        <div className="rounded-3xl bg-purple-50 p-6">

          <Ruler className="h-8 w-8 text-purple-700" />

          <p className="mt-4 text-sm text-gray-500">
            Baby Length
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {pregnancy.babyLength}
          </h3>

        </div>

        <div className="rounded-3xl bg-purple-50 p-6">

          <CalendarDays className="h-8 w-8 text-pink-500" />

          <p className="mt-4 text-sm text-gray-500">
            Days Remaining
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {pregnancy.daysRemaining}
          </h3>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-purple-100 bg-purple-50 px-8 py-6">

        <p className="text-center text-gray-600">
          🌸 Every week brings your little one closer to meeting you.
          Stay consistent with your appointments, nutrition, and savings
          to enjoy a healthy pregnancy journey.
        </p>

      </div>

    </section>
  );
}