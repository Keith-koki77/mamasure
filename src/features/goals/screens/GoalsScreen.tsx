"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import { getMyGoals } from "../services/goals.api";
import type { Goal } from "../types/goals.types";
import GoalCard from "../components/GoalCard";

export default function GoalsScreen() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadGoals = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getMyGoals();
      setGoals(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to load your goals.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadGoals();
  }, [loadGoals]);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-[#101B4D]">
              My Goals
            </h1>
            <p className="mt-1 text-sm text-[#64748B]">
              Loading your maternity savings goals...
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="h-5 w-40 animate-pulse rounded bg-[#F6EEFF]" />
            <div className="mt-4 h-4 w-64 animate-pulse rounded bg-[#F6EEFF]" />
            <div className="mt-6 h-3 w-full animate-pulse rounded bg-[#F6EEFF]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#7B19E6]">
              MamaSure Goals
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#101B4D] sm:text-3xl">
              My Goals
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#64748B]">
              Keep track of the maternity goals you are saving towards.
            </p>
          </div>

          <Link
            href="/dashboard/goals/new"
            className="inline-flex w-fit items-center justify-center rounded-xl bg-[#7B19E6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6813C7]"
          >
            + Create goal
          </Link>
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-medium text-red-700">
              {error}
            </p>

            <button
              type="button"
              onClick={loadGoals}
              className="mt-3 text-sm font-semibold text-red-700 underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Empty state */}
        {!error && goals.length === 0 && (
          <div className="rounded-3xl border border-[#E5E7EB] bg-white px-6 py-12 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F6EEFF] text-2xl">
              🎯
            </div>

            <h2 className="mt-5 text-xl font-bold text-[#101B4D]">
              You don't have any goals yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748B]">
              Create a savings goal for your maternity journey and
              start planning towards it.
            </p>

            <Link
              href="/dashboard/goals/new"
              className="mt-6 inline-flex rounded-xl bg-[#7B19E6] px-5 py-3 text-sm font-semibold text-white"
            >
              Create your first goal
            </Link>
          </div>
        )}

        {/* Goals */}
        {!error && goals.length > 0 && (
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#101B4D]">
                Your goals
              </h2>

              <span className="rounded-full bg-[#F6EEFF] px-3 py-1 text-xs font-semibold text-[#7B19E6]">
                {goals.length}{" "}
                {goals.length === 1 ? "goal" : "goals"}
              </span>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {goals.map((goal) => (
                <GoalCard
                  key={goal.id}
                  goal={goal}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}