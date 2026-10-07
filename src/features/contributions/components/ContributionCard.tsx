"use client";

import {
  ArrowRight,
  CalendarDays,
  CircleDollarSign,
} from "lucide-react";
import { useRouter } from "next/navigation";

import type { Contribution } from "../types/contributions.types";
import ContributionStatusBadge from "./ContributionStatusBadge";

const PURPLE = "#6C4AB6";
const MINT = "#4CAF93";
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

export default function ContributionCard({
  contribution,
}: {
  contribution: Contribution;
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
          <CircleDollarSign size={22} />
        </div>

        <ContributionStatusBadge
          status={contribution.status}
        />
      </div>

      <div className="mt-5">
        <p
          className="text-xs font-medium"
          style={{ color: GRAY }}
        >
          Contribution amount
        </p>

        <h2
          className="mt-1 text-2xl font-bold tracking-tight"
          style={{ color: NAVY }}
        >
          {formatKES(contribution.amount)}
        </h2>
      </div>

      <div className="mt-6 space-y-3">
        <div
          className="flex items-center justify-between rounded-2xl p-4"
          style={{ backgroundColor: "#FAF9FE" }}
        >
          <div className="flex items-center gap-3">
            <CalendarDays
              size={18}
              style={{ color: PURPLE }}
            />

            <div>
              <p
                className="text-xs font-medium"
                style={{ color: GRAY }}
              >
                Contribution date
              </p>

              <p
                className="mt-1 text-sm font-semibold"
                style={{ color: NAVY }}
              >
                {formatDate(
                  contribution.contribution_date,
                )}
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-between rounded-2xl p-4"
          style={{ backgroundColor: "#F8FBFA" }}
        >
          <div className="flex items-center gap-3">
            <CircleDollarSign
              size={18}
              style={{ color: MINT }}
            />

            <div>
              <p
                className="text-xs font-medium"
                style={{ color: GRAY }}
              >
                Payment provider
              </p>

              <p
                className="mt-1 text-sm font-semibold"
                style={{ color: NAVY }}
              >
                {contribution.payment_provider ||
                  "M-Pesa"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() =>
          router.push(
            `/dashboard/contributions/${contribution.id}`,
          )
        }
        className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
        style={{
          backgroundColor: PURPLE,
        }}
      >
        View contribution
        <ArrowRight size={17} />
      </button>
    </article>
  );
}