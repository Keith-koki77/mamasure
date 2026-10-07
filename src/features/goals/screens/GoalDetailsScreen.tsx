"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import { getGoal } from "../services/goals.api";
import type { Goal } from "../types/goals.types";
import GoalStatusBadge from "../components/GoalStatusBadge";

interface GoalDetailsScreenProps {
  goalId: string;
}

function formatAmount(value: number | string) {
  return Number(value).toLocaleString("en-KE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function GoalDetailsScreen({
  goalId,
}: GoalDetailsScreenProps) {
  const [goal, setGoal] = useState<Goal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadGoal = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getGoal(goalId);
      setGoal(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to load this goal.",
      );
    } finally {
      setLoading(false);
    }
  }, [goalId]);

  useEffect(() => {
    loadGoal();
  }, [loadGoal]);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-white px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="h-9 w-36 animate-pulse rounded-xl bg-[#F6EEFF]" />
          <div className="h-56 animate-pulse rounded-3xl bg-[#F6EEFF]" />
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="h-24 animate-pulse rounded-2xl bg-[#F6EEFF]" />
            <div className="h-24 animate-pulse rounded-2xl bg-[#F6EEFF]" />
            <div className="h-24 animate-pulse rounded-2xl bg-[#F6EEFF]" />
          </div>
          <div className="h-64 animate-pulse rounded-2xl bg-[#F6EEFF]" />
        </div>
      </div>
    );
  }

  if (error || !goal) {
    return (
      <div className="min-h-screen w-full bg-white px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-red-200 bg-red-50 p-6 shadow-xs">
          <h1 className="text-lg font-bold text-red-800">
            Unable to load goal
          </h1>

          <p className="mt-2 text-sm text-red-700">
            {error || "Goal not found."}
          </p>

          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={loadGoal}
              className="rounded-xl bg-[#7B19E6] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6813C7]"
            >
              Try again
            </button>

            <Link
              href="/dashboard/goals"
              className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-semibold text-[#101B4D] transition hover:bg-gray-50"
            >
              Back to goals
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const target = Number(goal.target_amount);
  const current = Number(goal.current_amount);

  const progress =
    target > 0
      ? Math.min((current / target) * 100, 100)
      : 0;

  const remaining = Math.max(target - current, 0);

  return (
    <div className="min-h-screen w-full bg-white px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Navigation */}
        <div>
          <Link
            href="/dashboard/goals"
            className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#64748B] shadow-xs transition hover:border-[#7B19E6] hover:text-[#7B19E6]"
          >
            <span>←</span> Back to goals
          </Link>
        </div>

        {/* Hero Card */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7B19E6] via-[#9B25E6] to-[#E92B86] p-6 text-white shadow-[0_12px_32px_rgba(123,25,230,0.18)] sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/80">
                Savings goal
              </p>

              <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                {goal.title}
              </h1>

              <p className="mt-2 text-sm text-white/85">
                Target date:{" "}
                <span className="font-semibold text-white">
                  {formatDate(goal.target_date)}
                </span>
              </p>
            </div>

            <GoalStatusBadge status={goal.status} />
          </div>

          <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur-md">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-medium text-white/80">
                  Current savings
                </p>

                <p className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  KSh {formatAmount(current)}
                </p>
              </div>

              <span className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-xs">
                {progress.toFixed(0)}% Achieved
              </span>
            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-black/20 p-0.5">
              <div
                className="h-full rounded-full bg-white shadow-xs transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </section>

        {/* Summary Metrics */}
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-xs transition hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              Current amount
            </p>

            <p className="mt-2 text-2xl font-bold text-[#101B4D]">
              KSh {formatAmount(current)}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-xs transition hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              Target amount
            </p>

            <p className="mt-2 text-2xl font-bold text-[#101B4D]">
              KSh {formatAmount(target)}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-xs transition hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              Remaining
            </p>

            <p className="mt-2 text-2xl font-bold text-[#7B19E6]">
              KSh {formatAmount(remaining)}
            </p>
          </div>
        </section>

        {/* Goal Details */}
        <section className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-xs">
          <h2 className="text-lg font-bold text-[#101B4D]">
            Goal details
          </h2>

          <div className="mt-5 divide-y divide-[#E5E7EB]">
            <div className="flex items-center justify-between gap-4 py-4">
              <span className="text-sm font-medium text-[#64748B]">
                Target date
              </span>

              <span className="text-sm font-semibold text-[#101B4D]">
                {formatDate(goal.target_date)}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 py-4">
              <span className="text-sm font-medium text-[#64748B]">
                Progress
              </span>

              <span className="text-sm font-semibold text-[#7B19E6]">
                {progress.toFixed(1)}%
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 py-4">
              <span className="text-sm font-medium text-[#64748B]">
                Hospital
              </span>

              <span className="text-sm font-semibold text-[#101B4D]">
                {goal.hospital_id
                  ? "Hospital selected"
                  : "No hospital selected"}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 py-4">
              <span className="text-sm font-medium text-[#64748B]">
                Status
              </span>

              <GoalStatusBadge status={goal.status} />
            </div>
          </div>
        </section>

        {/* Contribution CTA */}
        {goal.status === "active" && (
          <section className="rounded-2xl border border-[#E3D2F8] bg-[#F9F5FF] p-6 shadow-xs transition hover:shadow-md">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#101B4D]">
                  Keep building this goal
                </h2>

                <p className="mt-1 max-w-xl text-sm leading-6 text-[#64748B]">
                  Make a contribution to keep moving towards your target.
                </p>
              </div>

              <Link
                href="/dashboard/contributions/new"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#7B19E6] px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(123,25,230,0.2)] transition hover:bg-[#6813C7] hover:shadow-[0_8px_24px_rgba(123,25,230,0.3)]"
              >
                Make a contribution
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}