"use client";

import {
  BellRing,
  Sparkles,
  CalendarDays,
  Baby,
} from "lucide-react";

import { reminderSummary } from "@/data/reminders";

export default function ReminderHeader() {
  const today = new Date().toLocaleDateString("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="overflow-hidden rounded-[36px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-10 text-white shadow-xl">

      <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">

        {/* Left */}

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">

            <BellRing className="h-5 w-5" />

            <span className="font-semibold">
              Smart Reminder Center
            </span>

          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight">

            Never Miss
            <br />
            An Important Moment

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-purple-100">
            MamaSure keeps track of your pregnancy journey by reminding
            you about medications, hydration, nutrition, clinic visits,
            exercise and important milestones—so you can focus on what
            matters most.
          </p>

          {/* Today's Date */}

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/15 px-5 py-3 backdrop-blur">

            <CalendarDays className="h-5 w-5" />

            <span className="font-medium">
              {today}
            </span>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-5 sm:grid-cols-2">

          {/* Pregnancy Week */}

          <div className="rounded-3xl bg-white/15 p-7 backdrop-blur">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">

              <Baby className="h-8 w-8" />

            </div>

            <p className="mt-6 text-sm uppercase tracking-wide text-purple-100">
              Pregnancy Week
            </p>

            <h2 className="mt-2 text-4xl font-extrabold">
              Week {reminderSummary.pregnancyWeek}
            </h2>

            <p className="mt-3 text-sm leading-6 text-purple-100">
              You're making wonderful progress toward meeting your little one.
            </p>

          </div>

          {/* AI Assistant */}

          <div className="rounded-3xl bg-white/15 p-7 backdrop-blur">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">

              <Sparkles className="h-8 w-8" />

            </div>

            <p className="mt-6 text-sm uppercase tracking-wide text-purple-100">
              AI Assistant
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Smart Monitoring
            </h2>

            <p className="mt-3 text-sm leading-6 text-purple-100">
              Personalized reminders are generated based on your pregnancy
              stage, health plan and savings journey.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}