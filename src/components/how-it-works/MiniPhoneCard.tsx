"use client";

import {
  Building2,
  BookOpen,
  CheckCircle2,
  CreditCard,
  LineChart,
  Wallet,
  Star,
} from "lucide-react";

interface MiniPhoneCardProps {
  type:
    | "hospital"
    | "goal"
    | "payment"
    | "progress"
    | "education"
    | "success";
}

export default function MiniPhoneCard({
  type,
}: MiniPhoneCardProps) {
  switch (type) {
    case "hospital":
      return (
        <div className="rounded-2xl border bg-white p-4 shadow-sm">

          <p className="text-xs font-medium text-gray-500">
            Recommended Hospital
          </p>

          <div className="mt-4 flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">

              <Building2 className="h-6 w-6 text-purple-700" />

            </div>

            <div>

              <h4 className="font-semibold">
                Aga Khan Hospital
              </h4>

              <p className="text-xs text-gray-500">
                Nairobi
              </p>

            </div>

          </div>

          <div className="mt-4 flex items-center justify-between">

            <div className="flex">

              <Star className="h-4 w-4 fill-pink-500 text-pink-500" />
              <Star className="h-4 w-4 fill-pink-500 text-pink-500" />
              <Star className="h-4 w-4 fill-pink-500 text-pink-500" />
              <Star className="h-4 w-4 fill-pink-500 text-pink-500" />
              <Star className="h-4 w-4 fill-pink-500 text-pink-500" />

            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Selected
            </span>

          </div>

        </div>
      );

    case "goal":
      return (
        <div className="rounded-2xl border bg-white p-4 shadow-sm">

          <p className="text-xs text-gray-500">
            Maternity Goal
          </p>

          <h3 className="mt-3 text-3xl font-bold text-purple-700">
            KES 120K
          </h3>

          <div className="mt-5 h-2 rounded-full bg-gray-200">

            <div className="h-full w-1/4 rounded-full bg-purple-700" />

          </div>

          <div className="mt-3 flex justify-between text-xs text-gray-500">

            <span>25% Saved</span>

            <span>Target Dec 2026</span>

          </div>

        </div>
      );

    case "payment":
      return (
        <div className="rounded-2xl border bg-white p-4 shadow-sm">

          <div className="flex items-center gap-2">

            <Wallet className="h-5 w-5 text-purple-700" />

            <span className="text-sm font-semibold">
              Monthly Contribution
            </span>

          </div>

          <h3 className="mt-4 text-3xl font-bold">
            KES 2,500
          </h3>

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-pink-500 py-3 text-sm font-semibold text-white">

            <CreditCard className="h-4 w-4" />

            Pay with M-Pesa

          </button>

        </div>
      );

    case "progress":
      return (
        <div className="rounded-2xl border bg-white p-4 shadow-sm">

          <div className="flex items-center gap-2">

            <LineChart className="h-5 w-5 text-purple-700" />

            <span className="text-sm font-semibold">
              Savings Progress
            </span>

          </div>

          <div className="mt-6 flex h-24 items-end justify-between">

            {[20, 35, 50, 45, 70, 90].map((height, index) => (
              <div
                key={index}
                className="w-4 rounded-full bg-purple-500"
                style={{ height: `${height}%` }}
              />
            ))}

          </div>

          <p className="mt-4 text-center text-sm font-semibold text-purple-700">
            54% Complete
          </p>

        </div>
      );

    case "education":
      return (
        <div className="rounded-2xl border bg-white p-4 shadow-sm">

          <div className="flex items-center gap-2">

            <BookOpen className="h-5 w-5 text-pink-500" />

            <span className="font-semibold">
              Weekly Learning
            </span>

          </div>

          <div className="mt-5 rounded-xl bg-pink-50 p-4">

            <h4 className="font-semibold">
              Nutrition During Pregnancy
            </h4>

            <p className="mt-2 text-xs text-gray-500">
              Learn healthy eating habits for every trimester.
            </p>

          </div>

          <p className="mt-3 text-xs text-gray-400">
            5 min read
          </p>

        </div>
      );

    case "success":
      return (
        <div className="rounded-2xl border bg-white p-5 text-center shadow-sm">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">

            <CheckCircle2 className="h-8 w-8 text-green-600" />

          </div>

          <h3 className="mt-5 text-lg font-bold">
            Goal Achieved!
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            You're financially ready for your maternity journey.
          </p>

          <div className="mt-5 rounded-xl bg-purple-100 py-2 font-semibold text-purple-700">
            Deliver with Confidence ❤️
          </div>

        </div>
      );

    default:
      return null;
  }
}