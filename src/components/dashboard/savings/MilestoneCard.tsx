"use client";

import { milestones } from "@/data/savings";
import { CheckCircle2, Circle, Flag } from "lucide-react";

export default function MilestoneCard() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Savings Milestones
          </h2>

          <p className="mt-2 text-gray-500">
            Track every important step towards your maternity savings goal.
          </p>

        </div>

        <div className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
          Journey Progress
        </div>

      </div>

      {/* Timeline */}

      <div className="mt-10 space-y-8">

        {milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className="relative flex gap-6"
          >
            {/* Vertical Line */}

            {index !== milestones.length - 1 && (
              <div className="absolute left-5 top-12 h-full w-[2px] bg-purple-100" />
            )}

            {/* Icon */}

            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full">

              {milestone.completed ? (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  {index === milestones.length - 1 ? (
                    <Flag className="h-5 w-5 text-purple-700" />
                  ) : (
                    <Circle className="h-5 w-5 text-purple-700" />
                  )}
                </div>
              )}

            </div>

            {/* Content */}

            <div className="flex-1 rounded-2xl border border-purple-100 bg-purple-50/40 p-6 transition hover:border-purple-300 hover:bg-purple-50">

              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {milestone.title}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    {milestone.description}
                  </p>

                </div>

                <div
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    milestone.completed
                      ? "bg-green-100 text-green-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {milestone.date}
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Summary Banner */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <h3 className="text-2xl font-bold">
          You're Making Great Progress 🎉
        </h3>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-purple-100">
          You've already completed the first milestones of your maternity
          savings journey. Stay consistent with your monthly contributions
          and you'll reach your target well before your expected delivery.
        </p>

      </div>

    </section>
  );
}