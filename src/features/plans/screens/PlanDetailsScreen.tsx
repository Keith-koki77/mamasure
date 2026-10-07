"use client";

import {
  ArrowLeft,
  CalendarDays,
  CircleDollarSign,
  RefreshCw,
  Target,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import PlanProgress from "../components/PlanProgress";
import PlanStatusBadge from "../components/PlanStatusBadge";
import {
  getPlan,
  getPlanProgress,
} from "../services/plans.api";
import type {
  Plan,
  PlanProgress as PlanProgressType,
} from "../types/plans.types";

const PURPLE = "#6C4AB6";
const NAVY = "#23263A";
const GRAY = "#667085";
const BORDER = "#EAECF0";
const WARM_WHITE = "#FCFCFD";

function formatKES(value: string | number) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "KES 0";
  }

  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(number);
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatFrequency(
  frequency: Plan["contribution_frequency"],
) {
  return (
    frequency.charAt(0).toUpperCase() +
    frequency.slice(1)
  );
}

export default function PlanDetailsScreen({
  planId,
}: {
  planId: string;
}) {
  const router = useRouter();

  const [plan, setPlan] = useState<Plan | null>(
    null,
  );

  const [progress, setProgress] =
    useState<PlanProgressType | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadPlan() {
    setLoading(true);
    setError("");

    try {
      const [planResult, progressResult] =
        await Promise.all([
          getPlan(planId),
          getPlanProgress(planId),
        ]);

      setPlan(planResult);
      setProgress(progressResult);
    } catch (err) {
      console.error(
        "Failed to load plan details:",
        err,
      );

      setError(
        err instanceof Error
          ? err.message
          : "We couldn't load this plan.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPlan();
  }, [planId]);

  if (loading) {
    return <DetailsSkeleton />;
  }

  if (error || !plan || !progress) {
    return (
      <main
        className="min-h-screen px-4 py-6"
        style={{ backgroundColor: WARM_WHITE }}
      >
        <div className="mx-auto max-w-4xl">
          <button
            type="button"
            onClick={() =>
              router.push("/dashboard/plans")
            }
            className="mb-6 flex items-center gap-2 text-sm font-semibold"
            style={{ color: PURPLE }}
          >
            <ArrowLeft size={18} />
            Back to plans
          </button>

          <section
            className="rounded-3xl border bg-white p-8 text-center"
            style={{ borderColor: BORDER }}
          >
            <div
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: "#FFF6F8",
                color: "#9B2948",
              }}
            >
              <Target size={24} />
            </div>

            <h1
              className="mt-5 text-xl font-bold"
              style={{ color: NAVY }}
            >
              We couldn't load this plan
            </h1>

            <p
              className="mt-2 text-sm"
              style={{ color: GRAY }}
            >
              {error ||
                "The requested plan could not be found."}
            </p>

            <button
              type="button"
              onClick={loadPlan}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-white"
              style={{ backgroundColor: PURPLE }}
            >
              <RefreshCw size={17} />
              Try again
            </button>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen px-4 py-5 sm:px-6 lg:px-8 lg:py-8"
      style={{ backgroundColor: WARM_WHITE }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() =>
              router.push("/dashboard/plans")
            }
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: PURPLE }}
          >
            <ArrowLeft size={18} />
            Back to plans
          </button>

          <button
            type="button"
            onClick={loadPlan}
            className="flex h-10 w-10 items-center justify-center rounded-xl border bg-white"
            style={{ borderColor: BORDER }}
            aria-label="Refresh plan"
          >
            <RefreshCw
              size={17}
              style={{ color: GRAY }}
            />
          </button>
        </div>

        <section
          className="mb-6 overflow-hidden rounded-3xl border bg-white shadow-sm"
          style={{ borderColor: BORDER }}
        >
          <div
            className="p-5 sm:p-7"
            style={{
              background:
                "linear-gradient(135deg, #6C4AB6 0%, #5A32A3 100%)",
            }}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <Target size={23} />
                </div>

                <p className="mt-5 text-sm font-medium text-white/70">
                  MamaSure savings plan
                </p>

                <h1 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {formatKES(plan.target_amount)}
                </h1>

                <p className="mt-2 text-sm text-white/75">
                  Target amount
                </p>
              </div>

              <PlanStatusBadge status={plan.status} />
            </div>
          </div>

          <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-7">
            <DetailItem
              icon={<CircleDollarSign size={19} />}
              label="Contribution"
              value={formatKES(
                plan.contribution_amount,
              )}
              description={`${formatFrequency(
                plan.contribution_frequency,
              )} contribution`}
            />

            <DetailItem
              icon={<CalendarDays size={19} />}
              label="Target date"
              value={formatDate(plan.target_date)}
              description="Your planned savings deadline"
            />

            <DetailItem
              icon={<Target size={19} />}
              label="Plan created"
              value={formatDate(plan.created_at)}
              description="When this plan was created"
            />
          </div>

          <div className="border-t p-5 sm:p-7">
            <button
              type="button"
              onClick={() =>
                router.push(
                  `/dashboard/contributions/new?planId=${plan.id}`,
                )
              }
              className="flex min-h-12 w-full items-center justify-center rounded-xl px-5 text-sm font-semibold text-white transition hover:opacity-95 sm:w-auto"
              style={{ backgroundColor: PURPLE }}
            >
              Make contribution
            </button>
          </div>
        </section>

        <div className="mb-4">
          <h2
            className="text-xl font-bold"
            style={{ color: NAVY }}
          >
            Your progress
          </h2>

          <p
            className="mt-1 text-sm"
            style={{ color: GRAY }}
          >
            See how close you are to reaching your
            savings target.
          </p>
        </div>

        <PlanProgress progress={progress} />
      </div>
    </main>
  );
}

function DetailItem({
  icon,
  label,
  value,
  description,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div
      className="rounded-2xl border p-4"
      style={{ borderColor: BORDER }}
    >
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl"
        style={{
          backgroundColor: "#F1EEF9",
          color: PURPLE,
        }}
      >
        {icon}
      </div>

      <p
        className="mt-4 text-xs font-medium"
        style={{ color: GRAY }}
      >
        {label}
      </p>

      <p
        className="mt-1 text-sm font-bold"
        style={{ color: NAVY }}
      >
        {value}
      </p>

      <p
        className="mt-1 text-xs"
        style={{ color: GRAY }}
      >
        {description}
      </p>
    </div>
  );
}

function DetailsSkeleton() {
  return (
    <main
      className="min-h-screen px-4 py-6"
      style={{ backgroundColor: WARM_WHITE }}
    >
      <div className="mx-auto max-w-5xl animate-pulse">
        <div className="mb-6 h-5 w-28 rounded bg-gray-100" />

        <div
          className="overflow-hidden rounded-3xl border bg-white"
          style={{ borderColor: BORDER }}
        >
          <div className="h-52 bg-gray-100" />

          <div className="grid gap-4 p-6 sm:grid-cols-3">
            <div className="h-28 rounded-2xl bg-gray-100" />
            <div className="h-28 rounded-2xl bg-gray-100" />
            <div className="h-28 rounded-2xl bg-gray-100" />
          </div>

          <div className="border-t p-6">
            <div className="h-12 w-full rounded-xl bg-gray-100 sm:w-48" />
          </div>
        </div>

        <div className="mt-6 h-8 w-40 rounded bg-gray-100" />

        <div className="mt-4 h-64 rounded-3xl bg-gray-100" />
      </div>
    </main>
  );
}