"use client";

import {
  Apple,
  Beef,
  Milk,
  Droplets,
  Leaf,
  ArrowRight,
} from "lucide-react";

const nutritionTips = [
  {
    id: 1,
    title: "Iron-Rich Foods",
    description:
      "Include spinach, beans, lentils and lean meats to reduce the risk of anaemia.",
    icon: Beef,
    color: "bg-red-100 text-red-600",
  },
  {
    id: 2,
    title: "Calcium Intake",
    description:
      "Consume milk, yoghurt and cheese to strengthen your baby's developing bones.",
    icon: Milk,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    title: "Fresh Fruits",
    description:
      "Eat a variety of fruits every day for vitamins, fibre and antioxidants.",
    icon: Apple,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 4,
    title: "Stay Hydrated",
    description:
      "Aim for at least 2 litres of water every day to support healthy pregnancy.",
    icon: Droplets,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function NutritionTips() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-lg">

      {/* Header */}

      <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 p-8 text-white">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">

            <Leaf className="h-8 w-8" />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Nutrition Tips
            </h2>

            <p className="mt-2 text-green-100">
              Healthy nutrition supports both your wellbeing and your baby's growth.
            </p>

          </div>

        </div>

      </div>

      {/* Tips */}

      <div className="grid gap-6 p-8 md:grid-cols-2">

        {nutritionTips.map((tip) => {
          const Icon = tip.icon;

          return (
            <div
              key={tip.id}
              className="group rounded-3xl border border-purple-100 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${tip.color}`}
              >
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {tip.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                {tip.description}
              </p>

              <button
                disabled
                className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-3 font-semibold text-white opacity-80"
              >
                Learn More

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          );
        })}

      </div>

      {/* Healthy Plate */}

      <div className="border-t border-green-100 bg-green-50 p-8">

        <h3 className="text-2xl font-bold text-slate-900">
          Today's Healthy Plate 🍽️
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="text-4xl">🥬</div>
            <h4 className="mt-3 font-bold">Vegetables</h4>
            <p className="mt-2 text-sm text-gray-500">
              Rich in vitamins and fibre.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="text-4xl">🍗</div>
            <h4 className="mt-3 font-bold">Protein</h4>
            <p className="mt-2 text-sm text-gray-500">
              Supports baby's growth.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="text-4xl">🍚</div>
            <h4 className="mt-3 font-bold">Whole Grains</h4>
            <p className="mt-2 text-sm text-gray-500">
              Provides lasting energy.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="text-4xl">🥛</div>
            <h4 className="mt-3 font-bold">Dairy</h4>
            <p className="mt-2 text-sm text-gray-500">
              Great source of calcium.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}