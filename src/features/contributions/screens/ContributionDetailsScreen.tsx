"use client";

import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  CreditCard,
  RefreshCw,
  UserRound,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ContributionStatusBadge from "../components/ContributionStatusBadge";
import { getContribution } from "../services/contributions.api";
import type { Contribution } from "../types/contributions.types";

const PURPLE = "#6C4AB6";
const MINT = "#4CAF93";
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

function formatDateTime(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function getStatusIcon(status: string) {
  const normalized = status
    .toLowerCase()
    .trim();

  if (
    normalized === "successful" ||
    normalized === "completed"
  ) {
    return <CheckCircle2 size={22} />;
  }

  if (
    normalized === "failed" ||
    normalized === "cancelled"
  ) {
    return <XCircle size={22} />;
  }

  return <Clock3 size={22} />;
}

export default function ContributionDetailsScreen({
  contributionId,
}: {
  contributionId: string;
}) {
  const router = useRouter();

  const [contribution, setContribution] =
    useState<Contribution | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadContribution() {
    setLoading(true);
    setError("");

    try {
      const result =
        await getContribution(contributionId);

      setContribution(result);
    } catch (err) {
      console.error(
        "Failed to load contribution:",
        err,
      );

      setError(
        err instanceof Error
          ? err.message
          : "We couldn't load this contribution.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadContribution();
  }, [contributionId]);

  if (loading) {
    return <DetailsSkeleton />;
  }

  if (!contribution) {
    return (
      <main
        className="min-h-screen px-4 py-6"
        style={{
          backgroundColor: WARM_WHITE,
        }}
      >
        <div className="mx-auto max-w-3xl">
          <button
            type="button"
            onClick={() =>
              router.push(
                "/dashboard/contributions",
              )
            }
            className="mb-6 flex items-center gap-2 text-sm font-semibold"
            style={{ color: PURPLE }}
          >
            <ArrowLeft size={18} />
            Back to contributions
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
              <XCircle size={25} />
            </div>

            <h1
              className="mt-5 text-xl font-bold"
              style={{ color: NAVY }}
            >
              We couldn't load this contribution
            </h1>

            <p
              className="mt-2 text-sm"
              style={{ color: GRAY }}
            >
              {error ||
                "The requested contribution could not be found."}
            </p>

            <button
              type="button"
              onClick={loadContribution}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-white"
              style={{
                backgroundColor: PURPLE,
              }}
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
      style={{
        backgroundColor: WARM_WHITE,
      }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() =>
              router.push(
                "/dashboard/contributions",
              )
            }
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: PURPLE }}
          >
            <ArrowLeft size={18} />
            Back to contributions
          </button>

          <button
            type="button"
            onClick={loadContribution}
            className="flex h-10 w-10 items-center justify-center rounded-xl border bg-white"
            style={{ borderColor: BORDER }}
            aria-label="Refresh contribution"
          >
            <RefreshCw
              size={17}
              style={{ color: GRAY }}
            />
          </button>
        </div>

        {error && (
          <div
            className="mb-5 rounded-xl border px-4 py-3 text-sm"
            style={{
              borderColor: "#F2C4D2",
              backgroundColor: "#FFF6F8",
              color: "#9B2948",
            }}
          >
            {error}
          </div>
        )}

        <section
          className="overflow-hidden rounded-3xl border bg-white shadow-sm"
          style={{ borderColor: BORDER }}
        >
          <div
            className="p-6 sm:p-8"
            style={{
              background:
                "linear-gradient(135deg, #6C4AB6 0%, #5A32A3 100%)",
            }}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                  {getStatusIcon(
                    contribution.status,
                  )}
                </div>

                <p className="mt-5 text-sm font-medium text-white/70">
                  Contribution
                </p>

                <h1 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {formatKES(contribution.amount)}
                </h1>

                <p className="mt-2 text-sm text-white/75">
                  {contribution.payment_provider ||
                    "M-Pesa"}{" "}
                  contribution
                </p>
              </div>

              <ContributionStatusBadge
                status={contribution.status}
              />
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <DetailItem
                icon={<CalendarDays size={19} />}
                label="Contribution date"
                value={formatDate(
                  contribution.contribution_date,
                )}
              />

              <DetailItem
                icon={<CreditCard size={19} />}
                label="Payment provider"
                value={
                  contribution.payment_provider ||
                  "M-Pesa"
                }
              />

              <DetailItem
                icon={<UserRound size={19} />}
                label="Contribution ID"
                value={contribution.id}
                compact
              />

              <DetailItem
                icon={<CircleDollarSign size={19} />}
                label="Plan ID"
                value={contribution.plan_id}
                compact
              />
            </div>

            <div
              className="mt-6 rounded-2xl border p-5"
              style={{
                borderColor: BORDER,
                backgroundColor: "#FAF9FE",
              }}
            >
              <h2
                className="text-sm font-semibold"
                style={{ color: NAVY }}
              >
                Payment timeline
              </h2>

              <div className="mt-4 space-y-4">
                <TimelineItem
                  title="Contribution created"
                  value={formatDateTime(
                    contribution.created_at,
                  )}
                  completed
                />

                <TimelineItem
                  title="Last updated"
                  value={formatDateTime(
                    contribution.updated_at,
                  )}
                  completed
                />

                {contribution.successful_at && (
                  <TimelineItem
                    title="Payment successful"
                    value={formatDateTime(
                      contribution.successful_at,
                    )}
                    completed
                  />
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                router.push(
                  `/dashboard/plans/${contribution.plan_id}`,
                )
              }
              className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
              style={{
                backgroundColor: PURPLE,
              }}
            >
              View associated plan
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

function DetailItem({
  icon,
  label,
  value,
  compact = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  compact?: boolean;
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
        className={`mt-1 font-bold ${
          compact
            ? "break-all text-xs"
            : "text-sm"
        }`}
        style={{ color: NAVY }}
      >
        {value}
      </p>
    </div>
  );
}

function TimelineItem({
  title,
  value,
  completed,
}: {
  title: string;
  value: string;
  completed: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
        style={{
          backgroundColor: completed
            ? "#EAF7F2"
            : "#F2F4F7",
          color: completed
            ? MINT
            : GRAY,
        }}
      >
        <CheckCircle2 size={16} />
      </div>

      <div>
        <p
          className="text-sm font-semibold"
          style={{ color: NAVY }}
        >
          {title}
        </p>

        <p
          className="mt-1 text-xs"
          style={{ color: GRAY }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function DetailsSkeleton() {
  return (
    <main
      className="min-h-screen px-4 py-6"
      style={{ backgroundColor: WARM_WHITE }}
    >
      <div className="mx-auto max-w-3xl animate-pulse">
        <div className="mb-6 h-5 w-36 rounded bg-gray-100" />

        <div
          className="overflow-hidden rounded-3xl border bg-white"
          style={{ borderColor: BORDER }}
        >
          <div className="h-56 bg-gray-100" />

          <div className="grid gap-4 p-6 sm:grid-cols-2">
            <div className="h-28 rounded-2xl bg-gray-100" />
            <div className="h-28 rounded-2xl bg-gray-100" />
            <div className="h-28 rounded-2xl bg-gray-100" />
            <div className="h-28 rounded-2xl bg-gray-100" />
          </div>

          <div className="mx-6 mb-6 h-40 rounded-2xl bg-gray-100" />
        </div>
      </div>
    </main>
  );
}