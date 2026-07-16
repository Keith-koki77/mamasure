"use client";

import {
  Bell,
  Smartphone,
  MessageSquare,
  Users,
  Mail,
  Lock,
} from "lucide-react";

import { reminderSettings } from "@/data/reminders";

const icons = [
  Smartphone,
  MessageSquare,
  Users,
  Mail,
];

const colors = [
  {
    bg: "bg-purple-100",
    icon: "text-purple-700",
  },
  {
    bg: "bg-green-100",
    icon: "text-green-600",
  },
  {
    bg: "bg-blue-100",
    icon: "text-blue-600",
  },
  {
    bg: "bg-pink-100",
    icon: "text-pink-600",
  },
];

export default function ReminderSettings() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Reminder Settings
          </h2>

          <p className="mt-2 text-gray-500">
            Choose how you'd like MamaSure to notify you. These features
            will be available in an upcoming release.
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2">

          <Bell className="h-5 w-5 text-purple-700" />

          <span className="font-semibold text-purple-700">
            Coming Soon
          </span>

        </div>

      </div>

      {/* Settings */}

      <div className="mt-8 space-y-5">

        {reminderSettings.map((setting, index) => {
          const Icon = icons[index];
          const theme = colors[index];

          return (
            <div
              key={setting.id}
              className="flex flex-col gap-6 rounded-3xl border border-purple-100 p-6 transition-all duration-300 hover:border-purple-300 hover:shadow-lg lg:flex-row lg:items-center lg:justify-between"
            >

              <div className="flex items-start gap-5">

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg}`}
                >
                  <Icon className={`h-8 w-8 ${theme.icon}`} />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {setting.title}
                  </h3>

                  <p className="mt-2 max-w-2xl leading-7 text-gray-500">
                    {setting.description}
                  </p>

                </div>

              </div>

              {/* Disabled Toggle */}

              <div className="flex items-center gap-4">

                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                  Soon
                </span>

                <button
                  disabled
                  className="relative h-8 w-14 cursor-not-allowed rounded-full bg-gray-300"
                >
                  <span className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow" />
                </button>

              </div>

            </div>
          );
        })}

      </div>

      {/* Privacy Banner */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">

            <Lock className="h-8 w-8" />

          </div>

          <div>

            <h3 className="text-2xl font-bold">
              Your Privacy Comes First
            </h3>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-purple-100">
              Notification preferences will always be under your control.
              MamaSure will only send reminders you've explicitly enabled,
              and your personal health information will remain secure and
              confidential.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}