"use client";

import {
  Lightbulb,
  Heart,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { weeklyTip } from "@/data/education";

export default function WeeklyHealthTip() {
  return (
    <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 text-white shadow-xl">

      <div className="relative p-10">

        {/* Decorative Circles */}

        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative">

          {/* Header */}

          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">

                <Lightbulb className="h-5 w-5" />

                <span className="font-semibold">
                  Weekly Health Tip
                </span>

              </div>

              <h2 className="mt-6 text-5xl font-extrabold leading-tight">
                {weeklyTip.title}
              </h2>

              <p className="mt-6 text-xl leading-9 text-green-100">
                {weeklyTip.description}
              </p>

            </div>

            {/* Icon */}

            <div className="flex h-44 w-44 items-center justify-center rounded-full bg-white/15 backdrop-blur">

              <Heart className="h-24 w-24 text-white" />

            </div>

          </div>

          {/* Benefits */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-white/15 p-6 backdrop-blur">

              <CheckCircle2 className="h-10 w-10 text-lime-200" />

              <h3 className="mt-5 text-xl font-bold">
                Better Circulation
              </h3>

              <p className="mt-3 leading-7 text-green-100">
                Improves blood flow to your baby and placenta.
              </p>

            </div>

            <div className="rounded-3xl bg-white/15 p-6 backdrop-blur">

              <CheckCircle2 className="h-10 w-10 text-lime-200" />

              <h3 className="mt-5 text-xl font-bold">
                Greater Comfort
              </h3>

              <p className="mt-3 leading-7 text-green-100">
                Helps reduce swelling and supports restful sleep.
              </p>

            </div>

            <div className="rounded-3xl bg-white/15 p-6 backdrop-blur">

              <CheckCircle2 className="h-10 w-10 text-lime-200" />

              <h3 className="mt-5 text-xl font-bold">
                Healthy Pregnancy
              </h3>

              <p className="mt-3 leading-7 text-green-100">
                Small healthy habits every day make a big difference over time.
              </p>

            </div>

          </div>

          {/* Daily Challenge */}

          <div className="mt-10 rounded-3xl bg-white/15 p-8 backdrop-blur">

            <div className="flex items-center gap-3">

              <Sparkles className="h-8 w-8 text-yellow-300" />

              <h3 className="text-2xl font-bold">
                This Week's Challenge
              </h3>

            </div>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-green-100">
              Practice sleeping on your left side for the next seven nights
              and stay hydrated throughout the day. Small consistent habits
              help improve your wellbeing and support your baby's healthy
              development.
            </p>

            <button
              disabled
              className="mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-green-700 opacity-90"
            >
              Complete Challenge

              <ArrowRight className="h-5 w-5" />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}