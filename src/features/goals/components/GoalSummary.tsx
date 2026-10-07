"use client";

import {
  CalendarDays,
  CircleDollarSign,
  Target,
  TrendingUp,
} from "lucide-react";

import type { Goal } from "../types/goals.types";

interface GoalSummaryProps {
  goal: Goal;
}

function toNumber(value: number | string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatCurrency(value: number | string) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(toNumber(value));
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function GoalSummary({
  goal,
}: GoalSummaryProps) {
  const target = toNumber(goal.target_amount);
  const current = toNumber(goal.current_amount);

  const progress =
    target > 0
      ? Math.min((current / target) * 100, 100)
      : 0;

  const remaining = Math.max(target - current, 0);

  return (
    <section className="rounded-3xl bg-gradient-to-br from-[#7B19E6] to-[#E92B86] p-5 text-white shadow-[0_18px_50px_rgba(123,25,230,0.18)] sm:p-7">
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-white/75">
              Your financial goal
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              {goal.title}
            </h2>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <Target className="h-5 w-5" />
          </div>
        </div>

        <div>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-white/70">
                Saved
              </p>

              <p className="mt-1 text-2xl font-bold">
                {formatCurrency(current)}
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs font-medium text-white/70">
                Target
              </p>

              <p className="mt-1 text-lg font-semibold">
                {formatCurrency(target)}
              </p>
            </div>
          </div>

          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-2 flex items-center justify-between text-xs text-white/75">
            <span>{Math.round(progress)}% saved</span>

            <span>
              {formatCurrency(remaining)} remaining
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="flex items-center gap-2 text-white/70">
              <CircleDollarSign className="h-4 w-4" />

              <span className="text-xs font-medium">
                Current amount
              </span>
            </div>

            <p className="mt-2 text-sm font-semibold">
              {formatCurrency(current)}
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-4">
            <div className="flex items-center gap-2 text-white/70">
              <CalendarDays className="h-4 w-4" />

              <span className="text-xs font-medium">
                Target date
              </span>
            </div>

            <p className="mt-2 text-sm font-semibold">
              {formatDate(goal.target_date)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}