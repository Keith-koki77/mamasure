"use client";

import { ArrowRight, Plus, RefreshCw, Target } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import PlanCard from "../components/PlanCard";
import { getMyPlans } from "../services/plans.api";
import type { Plan } from "../types/plans.types";

const PURPLE = "#6C4AB6";
const NAVY = "#23263A";
const GRAY = "#667085";
const BORDER = "#EAECF0";
const WARM_WHITE = "#FCFCFD";

export default function PlansScreen() {
  const router = useRouter();

  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadPlans() {
    setLoading(true);
    setError("");

    try {
      const result = await getMyPlans();

      setPlans(result);
    } catch (err) {
      console.error("Failed to load plans:", err);

      setError(
        err instanceof Error
          ? err.message
          : "We couldn't load your plans.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPlans();
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
                <Target size={21} />
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
                  My plans
                </h1>
              </div>
            </div>

            <p
              className="mt-3 max-w-2xl text-sm leading-6 sm:text-base"
              style={{ color: GRAY }}
            >
              Keep track of the savings plans you have
              created for your motherhood journey.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={loadPlans}
              disabled={loading}
              className="flex h-11 w-11 items-center justify-center rounded-xl border bg-white transition hover:bg-gray-50 disabled:opacity-50"
              style={{ borderColor: BORDER }}
              aria-label="Refresh plans"
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
                router.push("/dashboard/planning")
              }
              className="flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: PURPLE }}
            >
              <Plus size={17} />
              New plan
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
              onClick={loadPlans}
              className="mt-2 text-sm font-semibold underline"
              style={{ color: "#9B2948" }}
            >
              Try again
            </button>
          </section>
        )}

        {loading ? (
          <PlansSkeleton />
        ) : plans.length === 0 ? (
          <EmptyPlans
            onCreate={() =>
              router.push("/dashboard/planning")
            }
          />
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2
                  className="text-lg font-semibold"
                  style={{ color: NAVY }}
                >
                  Your savings plans
                </h2>

                <p
                  className="mt-1 text-sm"
                  style={{ color: GRAY }}
                >
                  {plans.length}{" "}
                  {plans.length === 1
                    ? "plan"
                    : "plans"}{" "}
                  available
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function PlansSkeleton() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-3xl border bg-white p-6"
          style={{ borderColor: BORDER }}
        >
          <div className="h-12 w-12 rounded-2xl bg-gray-100" />

          <div className="mt-6 h-3 w-24 rounded bg-gray-100" />

          <div className="mt-2 h-8 w-40 rounded bg-gray-100" />

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="h-24 rounded-2xl bg-gray-100" />
            <div className="h-24 rounded-2xl bg-gray-100" />
          </div>

          <div className="mt-5 h-12 rounded-xl bg-gray-100" />
        </div>
      ))}
    </div>
  );
}

function EmptyPlans({
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
        <Target size={28} />
      </div>

      <h2
        className="mt-5 text-xl font-bold"
        style={{ color: NAVY }}
      >
        You don't have a plan yet
      </h2>

      <p
        className="mx-auto mt-2 max-w-md text-sm leading-6"
        style={{ color: GRAY }}
      >
        Create your first MamaSure savings plan and
        start preparing for the expenses that matter
        to you.
      </p>

      <button
        type="button"
        onClick={onCreate}
        className="mx-auto mt-6 flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-white transition hover:opacity-90"
        style={{ backgroundColor: PURPLE }}
      >
        Create my plan
        <ArrowRight size={17} />
      </button>
    </section>
  );
}