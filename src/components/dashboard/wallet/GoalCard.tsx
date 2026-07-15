"use client";

import {
  Target,
  Trophy,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { goals } from "@/data/wallet";

export default function GoalCard() {
  const progress = Math.round(
    (goals.current / goals.target) * 100
  );

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 p-8 text-white shadow-xl">

      {/* Background Decorations */}

      <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

      <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative">

        {/* Badge */}

        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 backdrop-blur">

          <Sparkles className="h-5 w-5" />

          <span className="text-sm font-semibold">
            Personal Goal Tracker
          </span>

        </div>

        {/* Heading */}

        <h2 className="mt-6 text-4xl font-extrabold">
          You're {progress}% of
          <br />
          the way there 🎉
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-purple-100">
          Every contribution brings you closer to a financially
          stress-free maternity journey. Stay consistent and let
          MamaSure help you prepare with confidence.
        </p>

        {/* Progress */}

        <div className="mt-10">

          <div className="mb-3 flex justify-between text-sm font-semibold">

            <span>
              KES {goals.current.toLocaleString()}
            </span>

            <span>
              KES {goals.target.toLocaleString()}
            </span>

          </div>

          <div className="h-5 overflow-hidden rounded-full bg-white/20">

            <div
              className="h-full rounded-full bg-white transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {/* Current */}

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <Target className="h-9 w-9 text-pink-200" />

            <p className="mt-5 text-sm text-purple-100">
              Current Savings
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              KES {goals.current.toLocaleString()}
            </h3>

          </div>

          {/* Remaining */}

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <ArrowRight className="h-9 w-9 text-pink-200" />

            <p className="mt-5 text-sm text-purple-100">
              Remaining
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              KES {goals.remaining.toLocaleString()}
            </h3>

          </div>

          {/* Target */}

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <Trophy className="h-9 w-9 text-pink-200" />

            <p className="mt-5 text-sm text-purple-100">
              Goal Target
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              KES {goals.target.toLocaleString()}
            </h3>

          </div>

        </div>

        {/* Encouragement */}

        <div className="mt-10 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">

          <h3 className="flex items-center gap-2 text-xl font-bold">

            <Sparkles className="h-6 w-6" />

            Keep Going!

          </h3>

          <p className="mt-4 max-w-3xl leading-8 text-purple-100">
            You're only{" "}
            <span className="font-bold text-white">
              KES {goals.remaining.toLocaleString()}
            </span>{" "}
            away from reaching your maternity savings goal.
            Maintain your monthly contributions and you'll be
            financially prepared well before your expected delivery.
          </p>

        </div>

      </div>

    </section>
  );
}