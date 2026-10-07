"use client";

import {
  useEffect,
  useRef,
  useState,
  Suspense,
} from "react";
import {
  ArrowLeft,
  CheckCircle2,
  CircleAlert,
  Clock3,
  LockKeyhole,
  Smartphone,
  X,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  cancelContribution,
  getContribution,
  initiateContribution,
} from "../services/contributions.api";

import { getPlan } from "@/features/plans/services/plans.api";

import type { Contribution } from "../types/contributions.types";
import type { Plan } from "@/features/plans/types/plans.types";


type PaymentState =
  | "form"
  | "processing"
  | "success"
  | "failed"
  | "cancelled";


function formatCurrency(value: string | number) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(Number(value));
}


function normalizeStatus(status?: string) {
  return String(status ?? "").toLowerCase();
}


function ContributionSkeleton() {
  return (
    <main className="min-h-screen bg-[#FCFCFD]">
      <div className="mx-auto max-w-xl px-4 py-6 sm:px-6">
        <div className="animate-pulse space-y-5">
          <div className="h-6 w-24 rounded bg-[#EAECF0]" />
          <div className="h-10 w-64 rounded bg-[#EAECF0]" />
          <div className="h-32 rounded-3xl bg-[#EAECF0]" />
          <div className="h-48 rounded-3xl bg-[#EAECF0]" />
        </div>
      </div>
    </main>
  );
}


function ContributionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const planId = searchParams.get("planId");

  const [plan, setPlan] = useState<Plan | null>(null);
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [contribution, setContribution] =
    useState<Contribution | null>(null);

  const [paymentState, setPaymentState] =
    useState<PaymentState>("form");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [cancelling, setCancelling] = useState(false);

  const [error, setError] = useState("");
  const [paymentError, setPaymentError] = useState("");

  const isMountedRef = useRef(true);
  const pollingTimeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopPolling = () => {
    if (pollingTimeoutRef.current) {
      clearTimeout(pollingTimeoutRef.current);
      pollingTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
      stopPolling();
    };
  }, []);

  useEffect(() => {
    async function loadPlan() {
      if (!planId) {
        setError("No savings plan was selected.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const result = await getPlan(planId);

        if (!isMountedRef.current) return;

        setPlan(result);

        if (!amount) {
          setAmount(
            String(result.contribution_amount ?? ""),
          );
        }
      } catch (err) {
        if (!isMountedRef.current) return;

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load your savings plan.",
        );
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    }

    loadPlan();
  }, [planId]);


  async function monitorContribution(
    contributionId: string,
  ) {
    stopPolling();

    const maxAttempts = 24;
    let attempts = 0;

    const poll = async () => {
      if (!isMountedRef.current) return;

      attempts += 1;

      try {
        const updated =
          await getContribution(contributionId);

        if (!isMountedRef.current) return;

        setContribution(updated);

        const status = normalizeStatus(
          updated.status,
        );

        if (
          status === "successful" ||
          status === "completed"
        ) {
          setPaymentState("success");
          return;
        }

        if (status === "failed") {
          setPaymentState("failed");
          return;
        }

        if (status === "cancelled") {
          setPaymentState("cancelled");
          return;
        }

        if (attempts < maxAttempts) {
          pollingTimeoutRef.current =
            setTimeout(poll, 5000);
        } else {
          setPaymentState("failed");
          setPaymentError(
            "We could not confirm the payment in time. You can check the contribution details for the latest status.",
          );
        }
      } catch (err) {
        if (!isMountedRef.current) return;

        if (attempts < maxAttempts) {
          pollingTimeoutRef.current =
            setTimeout(poll, 5000);
          return;
        }

        setPaymentState("failed");
        setPaymentError(
          err instanceof Error
            ? err.message
            : "Unable to confirm the payment.",
        );
      }
    };

    await poll();
  }


  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!planId) {
      setError("No savings plan was selected.");
      return;
    }

    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount <= 0) {
      setError("Enter a valid contribution amount.");
      return;
    }

    if (!phoneNumber.trim()) {
      setError(
        "Enter the M-Pesa phone number to use.",
      );
      return;
    }

    try {
      setSubmitting(true);
      setError("");
      setPaymentError("");
      stopPolling();

      const created =
        await initiateContribution({
          plan_id: planId,
          amount: numericAmount,
          phone_number: phoneNumber.trim(),
        });

      if (!isMountedRef.current) return;

      setContribution(created);
      setPaymentState("processing");

      await monitorContribution(created.id);
    } catch (err) {
      if (!isMountedRef.current) return;

      setPaymentState("failed");
      setPaymentError(
        err instanceof Error
          ? err.message
          : "Unable to start the M-Pesa payment.",
      );
    } finally {
      if (isMountedRef.current) {
        setSubmitting(false);
      }
    }
  }


  async function handleCancelContribution() {
    if (!contribution?.id || cancelling) {
      return;
    }

    try {
      setCancelling(true);
      setPaymentError("");

      /*
       * Stop polling before cancelling so a stale
       * contribution response cannot overwrite the
       * cancelled state in the UI.
       */
      stopPolling();

      const updated =
        await cancelContribution(
          contribution.id,
        );

      if (!isMountedRef.current) return;

      setContribution(updated);
      setPaymentState("cancelled");
    } catch (err) {
      if (!isMountedRef.current) return;

      setPaymentError(
        err instanceof Error
          ? err.message
          : "Unable to cancel this contribution.",
      );
    } finally {
      if (isMountedRef.current) {
        setCancelling(false);
      }
    }
  }


  function resetPayment() {
    stopPolling();

    setContribution(null);
    setPaymentError("");
    setPaymentState("form");
  }


  if (loading) {
    return <ContributionSkeleton />;
  }


  if (error && !plan) {
    return (
      <main className="min-h-screen bg-[#FCFCFD]">
        <div className="mx-auto max-w-xl px-4 py-6 sm:px-6">
          <button
            type="button"
            onClick={() =>
              router.push("/dashboard/plans")
            }
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5A32A3]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to plans
          </button>

          <div className="mt-10 rounded-3xl border border-red-200 bg-red-50 p-6">
            <CircleAlert className="h-7 w-7 text-red-600" />

            <h1 className="mt-4 text-xl font-bold text-[#23263A]">
              Unable to load contribution
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {error}
            </p>
          </div>
        </div>
      </main>
    );
  }


  if (paymentState === "processing") {
    return (
      <ProcessingState
        contribution={contribution}
        phoneNumber={phoneNumber}
        cancelling={cancelling}
        paymentError={paymentError}
        onCancel={handleCancelContribution}
        onViewContribution={() => {
          if (contribution?.id) {
            router.push(
              `/dashboard/contributions/${contribution.id}`,
            );
          }
        }}
      />
    );
  }


  if (paymentState === "success") {
    return (
      <SuccessState
        contribution={contribution}
        onViewContribution={() => {
          if (contribution?.id) {
            router.push(
              `/dashboard/contributions/${contribution.id}`,
            );
          }
        }}
        onMakeAnother={() => {
          resetPayment();
        }}
      />
    );
  }


  if (paymentState === "cancelled") {
    return (
      <CancelledState
        contribution={contribution}
        onTryAgain={() => {
          resetPayment();
        }}
        onViewContribution={() => {
          if (contribution?.id) {
            router.push(
              `/dashboard/contributions/${contribution.id}`,
            );
          }
        }}
      />
    );
  }


  if (paymentState === "failed") {
    return (
      <FailedState
        contribution={contribution}
        error={paymentError}
        onTryAgain={() => {
          resetPayment();
        }}
        onViewContribution={() => {
          if (contribution?.id) {
            router.push(
              `/dashboard/contributions/${contribution.id}`,
            );
          }
        }}
      />
    );
  }


  return (
    <main className="min-h-screen bg-[#FCFCFD]">
      <div className="mx-auto max-w-xl px-4 py-6 sm:px-6">
        <button
          type="button"
          onClick={() =>
            router.push("/dashboard/plans")
          }
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#5A32A3] transition hover:text-[#6C4AB6]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to plan
        </button>

        <div className="mt-7">
          <p className="text-sm font-semibold text-[#6C4AB6]">
            Add to your savings
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#23263A] sm:text-3xl">
            Make a contribution
          </h1>

          <p className="mt-2 text-sm leading-6 text-[#667085]">
            Add money to your MamaSure plan securely
            through M-Pesa.
          </p>
        </div>

        {plan && (
          <div className="mt-6 rounded-3xl border border-[#EAECF0] bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#667085]">
                  Your plan
                </p>

                <p className="mt-1 text-lg font-bold text-[#23263A]">
                  {formatCurrency(
                    plan.target_amount,
                  )}
                </p>

                <p className="mt-1 text-sm text-[#667085]">
                  Target by{" "}
                  {new Date(
                    plan.target_date,
                  ).toLocaleDateString(
                    "en-KE",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    },
                  )}
                </p>
              </div>

              <div className="rounded-2xl bg-[#F6A5C0]/20 px-3 py-2 text-right">
                <p className="text-xs text-[#667085]">
                  Planned
                </p>

                <p className="mt-0.5 text-sm font-bold text-[#5A32A3]">
                  {formatCurrency(
                    plan.contribution_amount,
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-5 space-y-5"
        >
          <div className="rounded-3xl border border-[#EAECF0] bg-white p-5 shadow-sm sm:p-6">
            <label
              htmlFor="amount"
              className="block text-sm font-semibold text-[#23263A]"
            >
              Contribution amount
            </label>

            <div className="relative mt-2">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#667085]">
                KES
              </span>

              <input
                id="amount"
                type="number"
                min="1"
                step="1"
                inputMode="numeric"
                value={amount}
                onChange={(event) =>
                  setAmount(event.target.value)
                }
                className="min-h-14 w-full rounded-2xl border border-[#EAECF0] bg-[#FCFCFD] pl-14 pr-4 text-lg font-semibold text-[#23263A] outline-none transition placeholder:text-[#98A2B3] focus:border-[#6C4AB6] focus:ring-4 focus:ring-[#6C4AB6]/10"
                placeholder="1,000"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-[#EAECF0] bg-white p-5 shadow-sm sm:p-6">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-[#23263A]"
            >
              M-Pesa phone number
            </label>

            <p className="mt-1 text-xs leading-5 text-[#667085]">
              This is the number that will receive
              the M-Pesa payment prompt.
            </p>

            <div className="relative mt-3">
              <Smartphone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#667085]" />

              <input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={phoneNumber}
                onChange={(event) =>
                  setPhoneNumber(event.target.value)
                }
                className="min-h-14 w-full rounded-2xl border border-[#EAECF0] bg-[#FCFCFD] pl-12 pr-4 text-base font-medium text-[#23263A] outline-none transition placeholder:text-[#98A2B3] focus:border-[#6C4AB6] focus:ring-4 focus:ring-[#6C4AB6]/10"
                placeholder="07XX XXX XXX"
              />
            </div>
          </div>

          {error && (
            <div className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">
              <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

              <p className="text-sm leading-5 text-red-700">
                {error}
              </p>
            </div>
          )}

          <div className="rounded-2xl bg-[#F6A5C0]/15 p-4">
            <div className="flex gap-3">
              <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-[#5A32A3]" />

              <div>
                <p className="text-sm font-semibold text-[#23263A]">
                  Secure M-Pesa payment
                </p>

                <p className="mt-1 text-xs leading-5 text-[#667085]">
                  Your M-Pesa PIN is entered only on
                  your phone. MamaSure never sees or
                  stores your PIN.
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="flex min-h-14 w-full items-center justify-center rounded-2xl bg-[#5A32A3] px-5 text-sm font-bold text-white shadow-sm transition hover:bg-[#6C4AB6] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting
              ? "Starting M-Pesa payment..."
              : "Continue with M-Pesa"}
          </button>
        </form>
      </div>
    </main>
  );
}


function ProcessingState({
  contribution,
  phoneNumber,
  cancelling,
  paymentError,
  onCancel,
  onViewContribution,
}: {
  contribution: Contribution | null;
  phoneNumber: string;
  cancelling: boolean;
  paymentError: string;
  onCancel: () => void;
  onViewContribution: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#FCFCFD]">
      <div className="mx-auto flex min-h-screen max-w-xl items-center px-4 py-8 sm:px-6">
        <div className="w-full rounded-[2rem] border border-[#EAECF0] bg-white p-6 text-center shadow-sm sm:p-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F6A5C0]/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6C4AB6]">
              <Clock3 className="h-6 w-6 animate-pulse text-white" />
            </div>
          </div>

          <p className="mt-6 text-sm font-semibold text-[#6C4AB6]">
            M-Pesa payment
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#23263A]">
            Check your phone
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#667085]">
            We have sent an M-Pesa payment prompt to{" "}
            <span className="font-semibold text-[#23263A]">
              {phoneNumber}
            </span>
            . Enter your M-Pesa PIN to complete
            the contribution.
          </p>

          {contribution && (
            <div className="mt-6 rounded-3xl bg-[#FCFCFD] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#667085]">
                Contribution
              </p>

              <p className="mt-1 text-2xl font-bold text-[#23263A]">
                {formatCurrency(
                  contribution.amount,
                )}
              </p>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#F6A5C0]/20 px-3 py-1.5 text-xs font-semibold text-[#5A32A3]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#6C4AB6]" />
                Waiting for payment
              </div>
            </div>
          )}

          <div className="mt-6 rounded-2xl border border-[#EAECF0] p-4 text-left">
            <div className="flex gap-3">
              <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-[#5A32A3]" />

              <p className="text-xs leading-5 text-[#667085]">
                Keep this page open while you complete
                the payment. We will automatically update
                the contribution when M-Pesa confirms it.
              </p>
            </div>
          </div>

          {paymentError && (
            <div className="mt-4 flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-left">
              <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

              <p className="text-sm leading-5 text-red-700">
                {paymentError}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={onViewContribution}
            className="mt-6 min-h-12 w-full rounded-2xl bg-[#5A32A3] px-5 text-sm font-bold text-white transition hover:bg-[#6C4AB6]"
          >
            View contribution
          </button>

          <button
            type="button"
            onClick={onCancel}
            disabled={cancelling}
            className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-5 text-sm font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <X className="h-4 w-4" />

            {cancelling
              ? "Cancelling payment..."
              : "Cancel payment"}
          </button>

          <p className="mt-3 text-xs leading-5 text-[#667085]">
            Cancelling here stops MamaSure from waiting
            for this contribution. If the M-Pesa prompt
            is still open, you can decline it on your
            phone.
          </p>
        </div>
      </div>
    </main>
  );
}


function SuccessState({
  contribution,
  onViewContribution,
  onMakeAnother,
}: {
  contribution: Contribution | null;
  onViewContribution: () => void;
  onMakeAnother: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#FCFCFD]">
      <div className="mx-auto flex min-h-screen max-w-xl items-center px-4 py-8 sm:px-6">
        <div className="w-full rounded-[2rem] border border-[#EAECF0] bg-white p-6 text-center shadow-sm sm:p-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#4CAF93]/15">
            <CheckCircle2 className="h-12 w-12 text-[#4CAF93]" />
          </div>

          <p className="mt-6 text-sm font-semibold text-[#4CAF93]">
            Payment successful
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#23263A]">
            Contribution confirmed
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#667085]">
            Your contribution has been received and
            added to your MamaSure savings plan.
          </p>

          {contribution && (
            <div className="mt-6 rounded-3xl bg-[#FCFCFD] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#667085]">
                Amount contributed
              </p>

              <p className="mt-1 text-3xl font-bold text-[#5A32A3]">
                {formatCurrency(
                  contribution.amount,
                )}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={onViewContribution}
            className="mt-6 min-h-12 w-full rounded-2xl bg-[#5A32A3] px-5 text-sm font-bold text-white transition hover:bg-[#6C4AB6]"
          >
            View contribution
          </button>

          <button
            type="button"
            onClick={onMakeAnother}
            className="mt-3 min-h-12 w-full rounded-2xl border border-[#EAECF0] px-5 text-sm font-semibold text-[#23263A] transition hover:bg-[#FCFCFD]"
          >
            Make another contribution
          </button>
        </div>
      </div>
    </main>
  );
}


function CancelledState({
  contribution,
  onTryAgain,
  onViewContribution,
}: {
  contribution: Contribution | null;
  onTryAgain: () => void;
  onViewContribution: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#FCFCFD]">
      <div className="mx-auto flex min-h-screen max-w-xl items-center px-4 py-8 sm:px-6">
        <div className="w-full rounded-[2rem] border border-[#EAECF0] bg-white p-6 text-center shadow-sm sm:p-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F6A5C0]/20">
            <X className="h-10 w-10 text-[#5A32A3]" />
          </div>

          <p className="mt-6 text-sm font-semibold text-[#5A32A3]">
            Payment stopped
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#23263A]">
            Contribution cancelled
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#667085]">
            This contribution has been cancelled in
            MamaSure. No money has been added to your
            savings plan through this contribution.
          </p>

          {contribution && (
            <div className="mt-6 rounded-3xl bg-[#FCFCFD] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#667085]">
                Cancelled amount
              </p>

              <p className="mt-1 text-3xl font-bold text-[#5A32A3]">
                {formatCurrency(
                  contribution.amount,
                )}
              </p>
            </div>
          )}

          <div className="mt-5 rounded-2xl border border-[#EAECF0] bg-[#FCFCFD] p-4 text-left">
            <p className="text-xs leading-5 text-[#667085]">
              If the M-Pesa prompt is still showing on
              your phone, decline it there as well.
            </p>
          </div>

          <button
            type="button"
            onClick={onTryAgain}
            className="mt-6 min-h-12 w-full rounded-2xl bg-[#5A32A3] px-5 text-sm font-bold text-white transition hover:bg-[#6C4AB6]"
          >
            Make another contribution
          </button>

          <button
            type="button"
            onClick={onViewContribution}
            className="mt-3 min-h-12 w-full rounded-2xl border border-[#EAECF0] px-5 text-sm font-semibold text-[#23263A] transition hover:bg-[#FCFCFD]"
          >
            View contribution
          </button>
        </div>
      </div>
    </main>
  );
}


function FailedState({
  contribution,
  error,
  onTryAgain,
  onViewContribution,
}: {
  contribution: Contribution | null;
  error: string;
  onTryAgain: () => void;
  onViewContribution: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#FCFCFD]">
      <div className="mx-auto flex min-h-screen max-w-xl items-center px-4 py-8 sm:px-6">
        <div className="w-full rounded-[2rem] border border-[#EAECF0] bg-white p-6 text-center shadow-sm sm:p-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
            <CircleAlert className="h-10 w-10 text-red-600" />
          </div>

          <p className="mt-6 text-sm font-semibold text-red-600">
            Payment not completed
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#23263A]">
            We could not complete it
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#667085]">
            {error ||
              "The M-Pesa payment was not completed. You can try again."}
          </p>

          {contribution && (
            <div className="mt-6 rounded-3xl bg-[#FCFCFD] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#667085]">
                Contribution
              </p>

              <p className="mt-1 text-2xl font-bold text-[#23263A]">
                {formatCurrency(
                  contribution.amount,
                )}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={onTryAgain}
            className="mt-6 min-h-12 w-full rounded-2xl bg-[#5A32A3] px-5 text-sm font-bold text-white transition hover:bg-[#6C4AB6]"
          >
            Try again
          </button>

          {contribution && (
            <button
              type="button"
              onClick={onViewContribution}
              className="mt-3 min-h-12 w-full rounded-2xl border border-[#EAECF0] px-5 text-sm font-semibold text-[#23263A] transition hover:bg-[#FCFCFD]"
            >
              View contribution
            </button>
          )}
        </div>
      </div>
    </main>
  );
}


export default function NewContributionScreen() {
  return (
    <Suspense
      fallback={<ContributionSkeleton />}
    >
      <ContributionContent />
    </Suspense>
  );
}