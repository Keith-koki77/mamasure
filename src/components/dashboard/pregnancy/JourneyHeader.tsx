"use client";

import { CalendarHeart, Baby, Sparkles } from "lucide-react";
import { pregnancy } from "@/data/pregnancy";

export default function JourneyHeader() {
  return (
    <section className="overflow-hidden rounded-[32px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-10 text-white shadow-xl">

      {/* Top */}

      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

        {/* Left */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">

            <Baby className="h-5 w-5" />

            <span className="font-semibold">
              Pregnancy Journey
            </span>

          </div>

          <h1 className="mt-6 text-5xl font-extrabold">
            Week {pregnancy.currentWeek}
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-purple-100">
            Welcome to your personalized pregnancy companion.
            Follow your baby's development, monitor important
            milestones, prepare for delivery, and stay informed every
            step of the way.
          </p>

        </div>

        {/* Right */}

        <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-md">

          <div className="flex items-center gap-3">

            <CalendarHeart className="h-8 w-8" />

            <div>

              <p className="text-purple-100">
                Expected Delivery
              </p>

              <h2 className="text-2xl font-bold">
                {pregnancy.dueDate}
              </h2>

            </div>

          </div>

          <div className="mt-8 flex items-center gap-3">

            <Sparkles className="h-8 w-8" />

            <div>

              <p className="text-purple-100">
                Current Stage
              </p>

              <h3 className="text-xl font-bold">
                {pregnancy.trimester}
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Stats */}

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">

          <p className="text-purple-100">
            Pregnancy Progress
          </p>

          <h2 className="mt-2 text-4xl font-extrabold">
            {pregnancy.progress}%
          </h2>

        </div>

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">

          <p className="text-purple-100">
            Baby Size
          </p>

          <h2 className="mt-2 text-4xl font-extrabold">
            {pregnancy.babySize}
          </h2>

        </div>

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">

          <p className="text-purple-100">
            Days Remaining
          </p>

          <h2 className="mt-2 text-4xl font-extrabold">
            {pregnancy.daysRemaining}
          </h2>

        </div>

      </div>

    </section>
  );
}