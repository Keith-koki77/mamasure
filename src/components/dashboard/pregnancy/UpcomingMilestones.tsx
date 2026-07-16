"use client";

import {
  CalendarCheck,
  Baby,
  HeartPulse,
  ClipboardList,
  BriefcaseMedical,
  CheckCircle2,
} from "lucide-react";

import { upcomingMilestones } from "@/data/pregnancy";

const icons = [
  CalendarCheck,
  HeartPulse,
  ClipboardList,
  BriefcaseMedical,
  Baby,
];

export default function UpcomingMilestones() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Upcoming Pregnancy Milestones
          </h2>

          <p className="mt-2 text-gray-500">
            Stay prepared for important moments throughout your pregnancy.
          </p>

        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          Timeline
        </span>

      </div>

      {/* Timeline */}

      <div className="mt-10 space-y-8">

        {upcomingMilestones.map((milestone, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={milestone.id}
              className="relative flex gap-6"
            >
              {/* Timeline */}

              {index !== upcomingMilestones.length - 1 && (
                <div className="absolute left-6 top-16 h-full w-0.5 bg-purple-200" />
              )}

              {/* Icon */}

              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-700 to-pink-500 text-white shadow-lg">

                <Icon className="h-7 w-7" />

              </div>

              {/* Card */}

              <div className="flex-1 rounded-3xl border border-purple-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg">

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                  <div>

                    <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                      Week {milestone.week}
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {milestone.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {milestone.description}
                    </p>

                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-green-700">

                    <CheckCircle2 className="h-5 w-5" />

                    <span className="font-semibold">
                      Upcoming
                    </span>

                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Bottom CTA */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 to-pink-500 p-8 text-white">

        <h3 className="text-2xl font-bold">
          Plan Ahead for a Stress-Free Journey
        </h3>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-purple-100">
          Keeping track of upcoming milestones helps you prepare financially,
          schedule medical appointments, and confidently welcome your baby
          when the time comes.
        </p>

      </div>

    </section>
  );
}