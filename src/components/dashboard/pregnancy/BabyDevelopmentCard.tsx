"use client";

import {
  Baby,
  Heart,
  Ear,
  Brain,
  Eye,
  Footprints,
  Weight,
  Ruler,
} from "lucide-react";

import { babyDevelopment } from "@/data/pregnancy";

const icons = [
  Heart,
  Ear,
  Footprints,
  Brain,
  Eye,
];

export default function BabyDevelopmentCard() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-lg">

      {/* Header */}

      <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-purple-700 p-8 text-white">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">

            <Baby className="h-9 w-9" />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              {babyDevelopment.title}
            </h2>

            <p className="mt-2 text-purple-100">
              {babyDevelopment.description}
            </p>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="grid gap-10 p-8 lg:grid-cols-2">

        {/* Illustration */}

        <div className="flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 p-8">

          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-700 shadow-xl">

            <Baby className="h-24 w-24 text-white" />

          </div>

          <h3 className="mt-8 text-2xl font-bold text-slate-900">
            Growing Beautifully 💜
          </h3>

          <p className="mt-4 text-center leading-7 text-gray-500">
            Your baby continues to grow stronger every day.
            Every heartbeat, movement and milestone brings
            you closer to meeting your little one.
          </p>

        </div>

        {/* Development List */}

        <div>

          <h3 className="text-xl font-bold text-slate-900">
            Development Highlights
          </h3>

          <div className="mt-6 space-y-5">

            {babyDevelopment.developments.map(
              (development, index) => {
                const Icon = icons[index];

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-purple-100 p-5 transition hover:border-purple-300 hover:bg-purple-50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">

                      <Icon className="h-6 w-6 text-purple-700" />

                    </div>

                    <p className="leading-7 text-gray-700">
                      {development}
                    </p>

                  </div>
                );
              }
            )}

          </div>

          {/* Baby Measurements */}

          <div className="mt-8 grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl bg-purple-50 p-6">

              <Weight className="h-8 w-8 text-purple-700" />

              <p className="mt-3 text-sm text-gray-500">
                Current Weight
              </p>

              <h4 className="mt-2 text-2xl font-bold text-slate-900">
                {babyDevelopment.weight}
              </h4>

            </div>

            <div className="rounded-2xl bg-pink-50 p-6">

              <Ruler className="h-8 w-8 text-pink-500" />

              <p className="mt-3 text-sm text-gray-500">
                Current Length
              </p>

              <h4 className="mt-2 text-2xl font-bold text-slate-900">
                {babyDevelopment.length}
              </h4>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}