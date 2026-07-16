"use client";

import {
  CheckCircle2,
  Circle,
  Droplets,
  Pill,
  Footprints,
  Moon,
  Apple,
  HeartPulse,
} from "lucide-react";

const checklist = [
  {
    id: 1,
    title: "Drink 2 Litres of Water",
    description: "Stay hydrated throughout the day.",
    completed: true,
    icon: Droplets,
  },
  {
    id: 2,
    title: "Take Prenatal Vitamins",
    description: "Remember your daily supplements.",
    completed: true,
    icon: Pill,
  },
  {
    id: 3,
    title: "30 Minutes of Walking",
    description: "Light exercise improves circulation.",
    completed: false,
    icon: Footprints,
  },
  {
    id: 4,
    title: "Eat Nutritious Meals",
    description: "Prioritize iron, protein and folate-rich foods.",
    completed: true,
    icon: Apple,
  },
  {
    id: 5,
    title: "Monitor Baby Kicks",
    description: "Track your baby's daily movements.",
    completed: false,
    icon: HeartPulse,
  },
  {
    id: 6,
    title: "Get Enough Sleep",
    description: "Aim for at least 8 hours of rest.",
    completed: false,
    icon: Moon,
  },
];

export default function HealthChecklist() {
  const completedTasks = checklist.filter(
    (item) => item.completed
  ).length;

  const progress = Math.round(
    (completedTasks / checklist.length) * 100
  );

  return (
    <section className="overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-lg">

      {/* Header */}

      <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-8 text-white">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold">
              Daily Health Checklist
            </h2>

            <p className="mt-3 max-w-2xl text-green-100">
              Healthy habits every day contribute to a healthier pregnancy
              for both you and your baby.
            </p>

          </div>

          <div className="rounded-3xl bg-white/20 px-6 py-5 text-center backdrop-blur-md">

            <p className="text-sm text-green-100">
              Today's Progress
            </p>

            <h3 className="mt-2 text-4xl font-extrabold">
              {progress}%
            </h3>

          </div>

        </div>

      </div>

      {/* Progress */}

      <div className="px-8 pt-8">

        <div className="flex items-center justify-between">

          <span className="font-semibold text-gray-600">
            Completed Tasks
          </span>

          <span className="font-bold text-green-600">
            {completedTasks}/{checklist.length}
          </span>

        </div>

        <div className="mt-4 h-4 overflow-hidden rounded-full bg-green-100">

          <div
            className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Checklist */}

      <div className="grid gap-5 p-8 md:grid-cols-2">

        {checklist.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`flex items-start gap-5 rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                item.completed
                  ? "border-green-200 bg-green-50"
                  : "border-purple-100 hover:border-purple-300"
              }`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  item.completed
                    ? "bg-green-100"
                    : "bg-purple-100"
                }`}
              >
                <Icon
                  className={`h-7 w-7 ${
                    item.completed
                      ? "text-green-600"
                      : "text-purple-700"
                  }`}
                />
              </div>

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <h3 className="font-bold text-slate-900">
                    {item.title}
                  </h3>

                  {item.completed ? (
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-300" />
                  )}

                </div>

                <p className="mt-2 leading-7 text-gray-500">
                  {item.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

      {/* Wellness Banner */}

      <div className="border-t border-green-100 bg-green-50 px-8 py-7">

        <h3 className="text-xl font-bold text-slate-900">
          🌿 Wellness Reminder
        </h3>

        <p className="mt-3 leading-8 text-gray-600">
          Building healthy habits today supports your baby's development
          and helps prepare your body for delivery. Even completing a few
          small tasks each day can make a significant difference over the
          course of your pregnancy.
        </p>

      </div>

    </section>
  );
}