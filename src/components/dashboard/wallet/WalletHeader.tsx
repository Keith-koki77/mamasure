"use client";

import {
  Wallet,
  PiggyBank,
  Target,
} from "lucide-react";

import { wallet } from "@/data/wallet";

export default function WalletHeader() {
  const progress = Math.round(
    (wallet.savedAmount / wallet.savingsGoal) * 100
  );

  const monthlyProgress = Math.round(
    (wallet.monthlySaved / wallet.monthlyGoal) * 100
  );

  return (
    <section className="rounded-[32px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-10 text-white shadow-xl">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 backdrop-blur">

            <Wallet className="h-5 w-5" />

            <span className="text-sm font-semibold">
              Your Digital Maternity Wallet
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-extrabold lg:text-5xl">
            Save Today,
            <br />
            Prepare for Tomorrow.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-purple-100">
            Secure your pregnancy journey by saving consistently.
            Track your balance, manage contributions and stay
            prepared for every maternity milestone.
          </p>

        </div>

        {/* Right Stats */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

          {/* Balance */}

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <Wallet className="h-8 w-8 text-pink-200" />

            <p className="mt-5 text-sm text-purple-100">
              Wallet Balance
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              KES {wallet.balance.toLocaleString()}
            </h2>

          </div>

          {/* Savings */}

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <PiggyBank className="h-8 w-8 text-pink-200" />

            <p className="mt-5 text-sm text-purple-100">
              Savings Progress
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {progress}%
            </h2>

          </div>

          {/* Monthly Goal */}

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <Target className="h-8 w-8 text-pink-200" />

            <p className="mt-5 text-sm text-purple-100">
              Monthly Goal
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {monthlyProgress}%
            </h2>

          </div>

        </div>

      </div>

    </section>
  );
}