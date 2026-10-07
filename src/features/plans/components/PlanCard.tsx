"use client";

import {
  ArrowRight,
  CalendarDays,
  CircleDollarSign,
  Target,
} from "lucide-react";
import { useRouter } from "next/navigation";

import type { Plan } from "../types/plans.types";
import PlanStatusBadge from "./PlanStatusBadge";

const PURPLE = "#6C4AB6";
const NAVY = "#23263A";
const GRAY = "#667085";
const BORDER = "#EAECF0";

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
    month: "short",
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

export default function PlanCard({
  plan,
}: {
  plan: Plan;
}) {
  const router = useRouter();

  return (
    <article
      className="rounded-3xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
      style={{ borderColor: BORDER }}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: "#F1EEF9",
            color: PURPLE,
          }}
        >
          <Target size={22} />
        </div>

        <PlanStatusBadge status={plan.status} />
      </div>

      <div className="mt-5">
        <p
          className="text-xs font-medium"
          style={{ color: GRAY }}
        >
          Savings target
        </p>

        <h2
          className="mt-1 text-2xl font-bold tracking-tight"
          style={{ color: NAVY }}
        >
          {formatKES(plan.target_amount)}
        </h2>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div
          className="rounded-2xl p-4"
          style={{ backgroundColor: "#FAF9FE" }}
        >
          <div className="flex items-center gap-2">
            <CircleDollarSign
              size={17}
              style={{ color: PURPLE }}
            />

            <span
              className="text-xs font-medium"
              style={{ color: GRAY }}
            >
              Contribution
            </span>
          </div>

          <p
            className="mt-2 text-sm font-bold"
            style={{ color: NAVY }}
          >
            {formatKES(plan.contribution_amount)}
          </p>

          <p
            className="mt-1 text-xs"
            style={{ color: GRAY }}
          >
            {formatFrequency(
              plan.contribution_frequency,
            )}
          </p>
        </div>

        <div
          className="rounded-2xl p-4"
          style={{ backgroundColor: "#F8FBFA" }}
        >
          <div className="flex items-center gap-2">
            <CalendarDays
              size={17}
              style={{ color: "#4CAF93" }}
            />

            <span
              className="text-xs font-medium"
              style={{ color: GRAY }}
            >
              Target date
            </span>
          </div>

          <p
            className="mt-2 text-sm font-bold"
            style={{ color: NAVY }}
          >
            {formatDate(plan.target_date)}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() =>
          router.push(
            `/dashboard/plans/${plan.id}`,
          )
        }
        className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition hover:opacity-90"
        style={{
          backgroundColor: PURPLE,
          color: "white",
        }}
      >
        View plan
        <ArrowRight size={17} />
      </button>
    </article>
  );
}