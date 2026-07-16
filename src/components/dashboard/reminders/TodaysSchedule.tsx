"use client";

import {
  todayReminders,
  ReminderColor,
} from "@/data/reminders";

const colorThemes: Record<
  ReminderColor,
  {
    bg: string;
    icon: string;
    badge: string;
    line: string;
  }
> = {
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-700",
    badge: "bg-purple-100 text-purple-700",
    line: "bg-purple-500",
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-600",
    badge: "bg-pink-100 text-pink-600",
    line: "bg-pink-500",
  },
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
    badge: "bg-green-100 text-green-700",
    line: "bg-green-500",
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
    line: "bg-blue-500",
  },
  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    badge: "bg-orange-100 text-orange-700",
    line: "bg-orange-500",
  },
  red: {
    bg: "bg-red-100",
    icon: "text-red-600",
    badge: "bg-red-100 text-red-700",
    line: "bg-red-500",
  },
};

const priorityStyles = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-orange-100 text-orange-700",
  Low: "bg-green-100 text-green-700",
} as const;

const statusStyles = {
  Completed: "bg-green-100 text-green-700",
  Upcoming: "bg-blue-100 text-blue-700",
  Missed: "bg-red-100 text-red-700",
} as const;

export default function TodaysSchedule() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Today's Schedule
          </h2>

          <p className="mt-2 text-gray-500">
            Stay on track with today's pregnancy reminders.
          </p>

        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          {todayReminders.length} Reminders
        </span>

      </div>

      {/* Timeline */}

      <div className="mt-10 space-y-8">

        {todayReminders.map((reminder, index) => {
          const Icon = reminder.icon;
          const theme = colorThemes[reminder.color];

          return (
            <div
              key={reminder.id}
              className="relative flex gap-6"
            >
              {/* Timeline */}

              <div className="flex flex-col items-center">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.bg}`}
                >
                  <Icon className={`h-7 w-7 ${theme.icon}`} />
                </div>

                {index !== todayReminders.length - 1 && (
                  <div
                    className={`mt-2 h-20 w-1 rounded-full ${theme.line}`}
                  />
                )}
              </div>

              {/* Content */}

              <div className="flex-1 rounded-3xl border border-purple-100 p-6 transition-all duration-300 hover:border-purple-300 hover:shadow-lg">

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                      {reminder.time}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {reminder.title}
                    </h3>

                  </div>

                  <div className="flex flex-wrap gap-3">

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${priorityStyles[reminder.priority]}`}
                    >
                      {reminder.priority} Priority
                    </span>

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${statusStyles[reminder.status]}`}
                    >
                      {reminder.status}
                    </span>

                  </div>

                </div>

                {/* Bottom */}

                <div className="mt-6 flex items-center justify-between">

                  <p className="text-gray-500">
                    Reminder notifications and completion tracking will
                    be available in an upcoming release.
                  </p>

                  {/* Coming Soon Toggle */}

                  <div className="flex items-center gap-3">

                    <span className="text-sm text-gray-500">
                      Coming Soon
                    </span>

                    <button
                      disabled
                      className="relative h-8 w-14 cursor-not-allowed rounded-full bg-gray-300"
                    >
                      <span className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow" />
                    </button>

                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Bottom Summary */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <h3 className="text-2xl font-bold">
          Keep Your Daily Streak Alive
        </h3>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-purple-100">
          Completing your daily reminders consistently helps you build
          healthy pregnancy habits. Small actions like staying hydrated,
          taking supplements, eating balanced meals, and attending clinic
          visits contribute to a healthier pregnancy journey.
        </p>

      </div>

    </section>
  );
}