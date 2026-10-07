"use client";

import {
  Plus,
  RefreshCw,
  WalletCards,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ContributionCard from "../components/ContributionCard";
import ContributionSummary from "../components/ContributionSummary";
import { getMyContributions } from "../services/contributions.api";
import type { Contribution } from "../types/contributions.types";

const PURPLE = "#6C4AB6";
const NAVY = "#23263A";
const GRAY = "#667085";
const BORDER = "#EAECF0";
const WARM_WHITE = "#FCFCFD";

export default function ContributionsScreen() {
  const router = useRouter();

  const [contributions, setContributions] =
    useState<Contribution[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadContributions() {
    setLoading(true);
    setError("");

    try {
      const result = await getMyContributions();

      setContributions(result);
    } catch (err) {
      console.error(
        "Failed to load contributions:",
        err,
      );

      setError(
        err instanceof Error
          ? err.message
          : "We couldn't load your contributions.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadContributions();
  }, []);

  return (
    <main
      className="min-h-screen px-4 py-5 sm:px-6 lg:px-8 lg:py-8"
      style={{ backgroundColor: WARM_WHITE }}
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "#F1EEF9",
                  color: PURPLE,
                }}
              >
                <WalletCards size={21} />
              </div>

              <div>
                <p
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: PURPLE }}
                >
                  MamaSure
                </p>

                <h1
                  className="text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ color: NAVY }}
                >
                  Contributions
                </h1>
              </div>
            </div>

            <p
              className="mt-3 max-w-2xl text-sm leading-6 sm:text-base"
              style={{ color: GRAY }}
            >
              Track every contribution you make toward
              your MamaSure savings plans.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={loadContributions}
              disabled={loading}
              className="flex h-11 w-11 items-center justify-center rounded-xl border bg-white transition hover:bg-gray-50 disabled:opacity-50"
              style={{ borderColor: BORDER }}
              aria-label="Refresh contributions"
            >
              <RefreshCw
                size={18}
                className={
                  loading ? "animate-spin" : ""
                }
                style={{ color: GRAY }}
              />
            </button>

            <button
              type="button"
              onClick={() =>
                router.push("/dashboard/plans")
              }
              className="flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold text-white transition hover:opacity-90"
              style={{
                backgroundColor: PURPLE,
              }}
            >
              <Plus size={17} />
              Make contribution
            </button>
          </div>
        </header>

        {error && (
          <section
            className="mb-6 rounded-2xl border px-4 py-4"
            style={{
              borderColor: "#F2C4D2",
              backgroundColor: "#FFF6F8",
            }}
          >
            <p
              className="text-sm font-medium"
              style={{ color: "#9B2948" }}
            >
              {error}
            </p>

            <button
              type="button"
              onClick={loadContributions}
              className="mt-2 text-sm font-semibold underline"
              style={{ color: "#9B2948" }}
            >
              Try again
            </button>
          </section>
        )}

        {!loading && contributions.length > 0 && (
          <ContributionSummary
            contributions={contributions}
          />
        )}

        <div className="mt-7">
          {loading ? (
            <ContributionsSkeleton />
          ) : contributions.length === 0 ? (
            <EmptyContributions
              onCreate={() =>
                router.push("/dashboard/plans")
              }
            />
          ) : (
            <>
              <div className="mb-5">
                <h2
                  className="text-lg font-semibold"
                  style={{ color: NAVY }}
                >
                  Contribution history
                </h2>

                <p
                  className="mt-1 text-sm"
                  style={{ color: GRAY }}
                >
                  {contributions.length}{" "}
                  {contributions.length === 1
                    ? "contribution"
                    : "contributions"}{" "}
                  recorded
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {contributions.map((contribution) => (
                  <ContributionCard
                    key={contribution.id}
                    contribution={contribution}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

function ContributionsSkeleton() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-3xl border bg-white p-6"
          style={{ borderColor: BORDER }}
        >
          <div className="flex justify-between">
            <div className="h-12 w-12 rounded-2xl bg-gray-100" />
            <div className="h-6 w-20 rounded-full bg-gray-100" />
          </div>

          <div className="mt-6 h-3 w-32 rounded bg-gray-100" />

          <div className="mt-2 h-8 w-36 rounded bg-gray-100" />

          <div className="mt-6 space-y-3">
            <div className="h-16 rounded-2xl bg-gray-100" />
            <div className="h-16 rounded-2xl bg-gray-100" />
          </div>

          <div className="mt-5 h-12 rounded-xl bg-gray-100" />
        </div>
      ))}
    </div>
  );
}

function EmptyContributions({
  onCreate,
}: {
  onCreate: () => void;
}) {
  return (
    <section
      className="rounded-3xl border bg-white px-5 py-14 text-center shadow-sm sm:px-8"
      style={{ borderColor: BORDER }}
    >
      <div
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{
          backgroundColor: "#F1EEF9",
          color: PURPLE,
        }}
      >
        <WalletCards size={28} />
      </div>

      <h2
        className="mt-5 text-xl font-bold"
        style={{ color: NAVY }}
      >
        No contributions yet
      </h2>

      <p
        className="mx-auto mt-2 max-w-md text-sm leading-6"
        style={{ color: GRAY }}
      >
        Once you make your first contribution, it
        will appear here so you can track your savings
        history.
      </p>

      <button
        type="button"
        onClick={onCreate}
        className="mt-6 min-h-12 rounded-xl px-5 text-sm font-semibold text-white transition hover:opacity-90"
        style={{
          backgroundColor: PURPLE,
        }}
      >
        View my plans
      </button>
    </section>
  );
}