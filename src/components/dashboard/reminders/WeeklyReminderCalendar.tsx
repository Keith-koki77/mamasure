"use client";

import {
  weeklySchedule,
  reminderSummary,
} from "@/data/reminders";

import {
  CheckCircle2,
  Circle,
  CalendarDays,
  Flame,
} from "lucide-react";

export default function WeeklyReminderCalendar() {
  const completedDays = weeklySchedule.filter(
    (day) => day.completed
  ).length;

  const completionRate = Math.round(
    (completedDays / weeklySchedule.length) * 100
  );

  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Weekly Reminder Calendar
          </h2>

          <p className="mt-2 text-gray-500">
            Track your reminder completion throughout the week and
            build healthy pregnancy habits.
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2">

          <CalendarDays className="h-5 w-5 text-purple-700" />

          <span className="font-semibold text-purple-700">
            Week {reminderSummary.pregnancyWeek}
          </span>

        </div>

      </div>

      {/* Week Tracker */}

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7">

        {weeklySchedule.map((day) => (
          <div
            key={day.day}
            className={`rounded-3xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              day.completed
                ? "border-green-200 bg-green-50"
                : "border-purple-100 bg-slate-50"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              {day.day}
            </p>

            <div className="mt-5 flex justify-center">

              {day.completed ? (
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              ) : (
                <Circle className="h-12 w-12 text-gray-300" />
              )}

            </div>

            <p className="mt-5 text-sm font-medium text-gray-600">
              {day.completed ? "Completed" : "Pending"}
            </p>

          </div>
        ))}

      </div>

      {/* Stats */}

      <div className="mt-10 grid gap-6 lg:grid-cols-2">

        {/* Completion */}

        <div className="rounded-3xl border border-purple-100 bg-purple-50 p-8">

          <h3 className="text-xl font-bold text-slate-900">
            Weekly Completion
          </h3>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-purple-100">

            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-700 to-pink-500 transition-all duration-700"
              style={{
                width: `${completionRate}%`,
              }}
            />

          </div>

          <div className="mt-5 flex items-center justify-between">

            <span className="text-gray-600">
              {completedDays} of {weeklySchedule.length} days completed
            </span>

            <span className="font-bold text-purple-700">
              {completionRate}%
            </span>

          </div>

        </div>

        {/* Streak */}

        <div className="rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 p-8 text-white">

          <div className="flex items-center gap-3">

            <Flame className="h-8 w-8" />

            <h3 className="text-2xl font-bold">
              Reminder Streak
            </h3>

          </div>

          <p className="mt-5 text-5xl font-extrabold">
            {completedDays} Days
          </p>

          <p className="mt-4 text-lg leading-8 text-orange-100">
            Stay consistent every day to build healthy pregnancy habits.
            Completing reminders regularly helps you prepare for a safe
            and confident motherhood journey.
          </p>

        </div>

      </div>

      {/* Bottom Banner */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <h3 className="text-2xl font-bold">
          Small Daily Actions Lead to Better Outcomes
        </h3>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-purple-100">
          Drinking enough water, taking your supplements, attending
          antenatal appointments, staying active, and following healthy
          routines every day can make a meaningful difference throughout
          your pregnancy. MamaSure is here to help you stay consistent.
        </p>

      </div>

    </section>
  );
}