"use client";

import {
  Heart,
  Moon,
  Utensils,
  Activity,
  CheckCircle2,
} from "lucide-react";

import { motherChanges } from "@/data/pregnancy";

const icons = [
  Heart,
  Activity,
  Utensils,
  Moon,
  CheckCircle2,
];

export default function MotherChangesCard() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-lg">

      {/* Header */}

      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">

            <Heart className="h-8 w-8" />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              {motherChanges.title}
            </h2>

            <p className="mt-2 text-purple-100">
              {motherChanges.description}
            </p>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="grid gap-8 p-8 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <h3 className="text-xl font-bold text-slate-900">
            What You May Experience
          </h3>

          <div className="mt-6 space-y-5">

            {motherChanges.changes.map((change, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-purple-100 p-5 transition hover:border-purple-300 hover:bg-purple-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100">

                    <Icon className="h-6 w-6 text-pink-500" />

                  </div>

                  <p className="leading-7 text-gray-700">
                    {change}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* Right Side */}

        <div className="rounded-3xl bg-gradient-to-br from-purple-50 via-pink-50 to-white p-8">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-pink-500">

            <Heart className="h-10 w-10 text-white" />

          </div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            Take Care of Yourself 💜
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            Pregnancy brings many physical and emotional changes. Listen
            to your body, stay hydrated, eat nutritious meals, and don't
            hesitate to reach out to your healthcare provider whenever
            something feels unusual.
          </p>

          {/* Wellness Tips */}

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">

              <span className="text-2xl">💧</span>

              <div>

                <h4 className="font-semibold text-slate-900">
                  Stay Hydrated
                </h4>

                <p className="text-sm text-gray-500">
                  Aim for at least 2 litres of water daily.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">

              <span className="text-2xl">🥗</span>

              <div>

                <h4 className="font-semibold text-slate-900">
                  Eat Balanced Meals
                </h4>

                <p className="text-sm text-gray-500">
                  Include iron, protein and folate-rich foods.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">

              <span className="text-2xl">😴</span>

              <div>

                <h4 className="font-semibold text-slate-900">
                  Prioritize Rest
                </h4>

                <p className="text-sm text-gray-500">
                  Quality sleep supports both you and your baby.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Note */}

      <div className="border-t border-purple-100 bg-purple-50 px-8 py-6">

        <p className="text-center text-gray-600">
          💕 Remember: Every pregnancy is unique. These experiences are
          common but may vary from person to person. Always consult your
          healthcare provider if you have concerns.
        </p>

      </div>

    </section>
  );
}