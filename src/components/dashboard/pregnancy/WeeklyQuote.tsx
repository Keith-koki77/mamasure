"use client";

import {
  Quote,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function WeeklyQuote() {
  return (
    <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 text-white shadow-xl">

      {/* Decorative Background */}

      <div className="relative">

        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

        <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-pink-300/10 blur-3xl" />

        <div className="relative p-10">

          {/* Header */}

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">

              <Quote className="h-8 w-8" />

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Weekly Encouragement
              </h2>

              <p className="mt-2 text-purple-100">
                A little reminder that you're doing an amazing job.
              </p>

            </div>

          </div>

          {/* Quote */}

          <div className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur">

            <Quote className="h-12 w-12 text-pink-200" />

            <blockquote className="mt-6 text-3xl font-semibold leading-relaxed">
              Every heartbeat, every kick, and every sacrifice brings
              you one step closer to meeting the little person who will
              change your life forever.
            </blockquote>

            <p className="mt-6 text-lg text-purple-100">
              — MamaSure Weekly Inspiration
            </p>

          </div>

          {/* Bottom Grid */}

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {/* Affirmation */}

            <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">

              <div className="flex items-center gap-3">

                <Heart className="h-8 w-8 text-pink-200" />

                <h3 className="text-xl font-bold">
                  Today's Affirmation
                </h3>

              </div>

              <p className="mt-5 text-lg leading-8 text-purple-100">
                I am strong.
                <br />
                My baby is growing beautifully.
                <br />
                I trust my body and embrace this incredible journey.
              </p>

            </div>

            {/* Encouragement */}

            <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">

              <div className="flex items-center gap-3">

                <Sparkles className="h-8 w-8 text-yellow-200" />

                <h3 className="text-xl font-bold">
                  This Week's Reminder
                </h3>

              </div>

              <p className="mt-5 text-lg leading-8 text-purple-100">
                Celebrate every milestone, no matter how small.
                Your consistency in saving, attending appointments,
                eating well, and caring for yourself is one of the
                greatest gifts you can give your baby.
              </p>

            </div>

          </div>

          {/* Footer */}

          <div className="mt-10 flex flex-col gap-4 rounded-3xl bg-white/10 p-6 md:flex-row md:items-center md:justify-between">

            <div>

              <h3 className="text-xl font-bold">
                Keep Going 💜
              </h3>

              <p className="mt-2 text-purple-100">
                Every week is a new milestone worth celebrating.
              </p>

            </div>

            <button
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-purple-700 opacity-90"
            >
              Read More Inspirations

              <ArrowRight className="h-5 w-5" />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}