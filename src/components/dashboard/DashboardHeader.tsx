"use client";

import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Heart,
  Sparkles,
  Wallet,
} from "lucide-react";

export default function DashboardHeader() {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white shadow-xl lg:p-10">

      {/* Decorative Background */}

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">

        {/* Left Content */}

        <div>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight lg:text-5xl">

            Every contribution brings
            <br />
            you closer to a
            <br />

            <span className="text-pink-200">
              stress-free motherhood.
            </span>

          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-purple-100">

            You've already saved towards your maternity journey.
            Keep the momentum going and prepare confidently for
            pregnancy, delivery and your baby's arrival.

          </p>

          {/* Quick Stats */}

          <div className="mt-10 flex flex-wrap gap-5">

            <div className="flex items-center gap-3 rounded-2xl bg-white/15 px-5 py-4 backdrop-blur-md">

              <Wallet className="h-6 w-6 text-pink-200" />

              <div>

                <p className="text-xs uppercase tracking-wide text-purple-100">
                  Saved
                </p>

                <h4 className="text-xl font-bold">
                  KES 48,650
                </h4>

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white/15 px-5 py-4 backdrop-blur-md">

              <CalendarDays className="h-6 w-6 text-pink-200" />

              <div>

                <p className="text-xs uppercase tracking-wide text-purple-100">
                  Next Deposit
                </p>

                <h4 className="text-xl font-bold">
                  15 July
                </h4>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-purple-700 transition hover:scale-105">

              Continue Saving

              <ArrowRight className="h-5 w-5" />

            </button>

            <button className="rounded-2xl border border-white/30 bg-white/10 px-7 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20">

              View Marketplace

            </button>

          </div>

        </div>

        {/* Right Illustration */}

        <div className="relative flex justify-center">

          <div className="absolute h-72 w-72 rounded-full border border-white/20" />

          <div className="absolute h-96 w-96 rounded-full border border-white/10" />

          {/* Floating Card */}

          <div className="absolute left-0 top-12 rounded-2xl bg-white p-4 text-slate-900 shadow-xl">

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-pink-100 p-2">

                <Heart className="h-5 w-5 fill-pink-500 text-pink-500" />

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Savings Progress
                </p>

                <h4 className="font-bold">
                  41% Complete
                </h4>

              </div>

            </div>

          </div>

          <Image
            src="/pregnant-dashboard.png"
            alt="Pregnant Mother"
            width={360}
            height={460}
            priority
            className="relative z-10 object-contain"
          />

        </div>

      </div>

    </section>
  );
}