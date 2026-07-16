"use client";

import {
  CalendarDays,
  Clock3,
  Building2,
  ArrowRight,
} from "lucide-react";

import { upcomingReminders } from "@/data/reminders";

export default function UpcomingReminders() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Upcoming Reminders
          </h2>

          <p className="mt-2 text-gray-500">
            Stay prepared for your upcoming appointments, scans and
            important pregnancy milestones.
          </p>

        </div>

        <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
          Next 30 Days
        </span>

      </div>

      {/* Cards */}

      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {upcomingReminders.map((reminder) => {
          const Icon = reminder.icon;

          return (
            <div
              key={reminder.id}
              className="group rounded-3xl border border-purple-100 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl"
            >

              {/* Icon */}

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">

                <Icon className="h-8 w-8 text-purple-700" />

              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {reminder.title}
              </h3>

              {/* Date */}

              <div className="mt-6 flex items-center gap-3">

                <CalendarDays className="h-5 w-5 text-purple-600" />

                <span className="font-medium text-gray-700">
                  {reminder.date}
                </span>

              </div>

              {/* Time */}

              <div className="mt-4 flex items-center gap-3">

                <Clock3 className="h-5 w-5 text-pink-500" />

                <span className="text-gray-700">
                  {reminder.time}
                </span>

              </div>

              {/* Hospital */}

              {reminder.hospital && (

                <div className="mt-4 flex items-start gap-3">

                  <Building2 className="mt-0.5 h-5 w-5 text-green-600" />

                  <span className="text-gray-700">
                    {reminder.hospital}
                  </span>

                </div>

              )}

              {/* Status */}

              <div className="mt-8 flex items-center justify-between">

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  {reminder.status}
                </span>

                <button
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-gradient-to-r from-purple-700 to-pink-500 px-4 py-2 text-sm font-semibold text-white opacity-90"
                >
                  View

                  <ArrowRight className="h-4 w-4" />

                </button>

              </div>

            </div>
          );
        })}

      </div>

      {/* Bottom Banner */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <h3 className="text-2xl font-bold">
          Never Miss an Important Appointment
        </h3>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-purple-100">
          MamaSure will remind you before every antenatal clinic visit,
          ultrasound scan, nutrition review and other important maternity
          events. Upcoming reminders will eventually sync with your
          calendar and notify you automatically.
        </p>

      </div>

    </section>
  );
}