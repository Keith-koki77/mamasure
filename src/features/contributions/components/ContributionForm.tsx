"use client";

import {
  LockKeyhole,
  Smartphone,
  WalletCards,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import type { ContributionRequest } from "../types/contributions.types";

interface ContributionFormProps {
  planId: string;
  suggestedAmount?: string | number;
  onSubmit: (payload: ContributionRequest) => Promise<void>;
  loading?: boolean;
}

function normalizeKenyanPhone(phone: string): string {
  const cleaned = phone.replace(/[\s-+]/g, "");

  if (cleaned.startsWith("254")) {
    return cleaned;
  }

  if (cleaned.startsWith("0")) {
    return `254${cleaned.slice(1)}`;
  }

  if ((cleaned.startsWith("7") || cleaned.startsWith("1")) && cleaned.length === 9) {
    return `254${cleaned}`;
  }

  return cleaned;
}

function isValidKenyanPhone(phone: string): boolean {
  return /^(254)(7|1)\d{8}$/.test(phone);
}

function formatMoney(value: string | number): string {
  const amount = Number(value);

  if (!Number.isFinite(amount)) {
    return String(value);
  }

  return amount.toLocaleString("en-KE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

export default function ContributionForm({
  planId,
  suggestedAmount,
  onSubmit,
  loading = false,
}: ContributionFormProps) {
  const [amount, setAmount] = useState(
    suggestedAmount !== undefined ? String(suggestedAmount) : "",
  );

  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const normalizedPhone = useMemo(
    () => normalizeKenyanPhone(phoneNumber),
    [phoneNumber],
  );

  const numericAmount = Number(amount);
  const hasValidAmount =
    amount !== "" &&
    Number.isFinite(numericAmount) &&
    numericAmount > 0;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!planId) {
      setError("No savings plan was selected.");
      return;
    }

    if (!hasValidAmount) {
      setError("Enter a valid contribution amount.");
      return;
    }

    if (!isValidKenyanPhone(normalizedPhone)) {
      setError(
        "Enter a valid Kenyan M-Pesa number, for example 0712 345 678.",
      );
      return;
    }

    try {
      await onSubmit({
        plan_id: planId,
        amount: numericAmount,
        phone_number: normalizedPhone,
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to initiate the M-Pesa payment.",
      );
    }
  }

  function handleAmountChange(value: string) {
    if (value === "") {
      setAmount("");
      return;
    }

    if (!/^\d*\.?\d*$/.test(value)) {
      return;
    }

    setAmount(value);
    setError("");
  }

  function handlePhoneChange(value: string) {
    setPhoneNumber(value);
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Amount */}
      <div>
        <div className="mb-2.5 flex items-center justify-between gap-3">
          <label
            htmlFor="amount"
            className="text-sm font-semibold text-[#23263A]"
          >
            Contribution amount
          </label>

          {suggestedAmount !== undefined && (
            <span className="text-xs font-medium text-[#6C4AB6]">
              Planned: KSh {formatMoney(suggestedAmount)}
            </span>
          )}
        </div>

        <div
          className={`relative overflow-hidden rounded-2xl border bg-white transition ${
            error
              ? "border-red-300"
              : "border-[#EAECF0] focus-within:border-[#6C4AB6] focus-within:ring-4 focus-within:ring-[#6C4AB6]/10"
          }`}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
            <span className="text-sm font-bold text-[#667085]">
              KSh
            </span>
          </div>

          <input
            id="amount"
            name="amount"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={amount}
            onChange={(event) =>
              handleAmountChange(event.target.value)
            }
            placeholder="0"
            disabled={loading}
            aria-invalid={Boolean(error)}
            className="w-full bg-transparent py-5 pl-16 pr-5 text-2xl font-bold tracking-tight text-[#23263A] outline-none placeholder:text-[#D0D5DD] disabled:cursor-not-allowed disabled:bg-[#FCFCFD]"
          />
        </div>

        {hasValidAmount && (
          <p className="mt-2 text-xs text-[#667085]">
            You&apos;re about to contribute{" "}
            <span className="font-semibold text-[#23263A]">
              KSh {formatMoney(numericAmount)}
            </span>
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phoneNumber"
          className="mb-2.5 block text-sm font-semibold text-[#23263A]"
        >
          M-Pesa phone number
        </label>

        <div
          className={`relative overflow-hidden rounded-2xl border bg-white transition ${
            error
              ? "border-red-300"
              : "border-[#EAECF0] focus-within:border-[#6C4AB6] focus-within:ring-4 focus-within:ring-[#6C4AB6]/10"
          }`}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4CAF93]/10">
              <Smartphone
                size={18}
                strokeWidth={2}
                className="text-[#4CAF93]"
              />
            </div>
          </div>

          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            value={phoneNumber}
            onChange={(event) =>
              handlePhoneChange(event.target.value)
            }
            placeholder="0712 345 678"
            disabled={loading}
            aria-invalid={Boolean(error)}
            className="w-full bg-transparent py-[18px] pl-16 pr-4 text-base font-medium text-[#23263A] outline-none placeholder:text-[#98A2B3] disabled:cursor-not-allowed disabled:bg-[#FCFCFD]"
          />
        </div>

        <p className="mt-2 text-xs leading-5 text-[#667085]">
          Use the M-Pesa number that you have access to right now.
        </p>
      </div>

      {/* Error */}
      {error && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3.5"
        >
          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
            !
          </div>

          <p className="text-sm leading-5 text-red-700">
            {error}
          </p>
        </div>
      )}

      {/* M-Pesa information */}
      <div className="overflow-hidden rounded-2xl border border-[#F6A5C0]/30 bg-[#FFF8FB]">
        <div className="flex items-start gap-3 border-b border-[#F6A5C0]/20 px-4 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F6A5C0]/20">
            <WalletCards
              size={19}
              className="text-[#6C4AB6]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-[#23263A]">
              How payment works
            </p>

            <p className="mt-1 text-xs leading-5 text-[#667085]">
              We&apos;ll send an M-Pesa prompt to the number above.
              Simply enter your M-Pesa PIN to approve the payment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 px-4 py-4 sm:grid-cols-3">
          <PaymentStep
            number="1"
            text="Continue"
          />
          <PaymentStep
            number="2"
            text="Check your phone"
          />
          <PaymentStep
            number="3"
            text="Enter your PIN"
          />
        </div>
      </div>

      {/* CTA */}
      <button
        type="submit"
        disabled={loading}
        className="flex min-h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#6C4AB6] px-5 text-sm font-bold text-white shadow-sm transition hover:bg-[#5A32A3] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#6C4AB6]/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#6C4AB6] disabled:hover:shadow-sm"
      >
        {loading ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending M-Pesa prompt...
          </>
        ) : (
          <>
            <Smartphone size={18} />
            Continue with M-Pesa
          </>
        )}
      </button>

      {/* Security */}
      <div className="flex items-center justify-center gap-2 text-center">
        <LockKeyhole
          size={14}
          className="shrink-0 text-[#667085]"
        />

        <p className="text-xs leading-5 text-[#667085]">
          Your payment is securely processed through M-Pesa.
        </p>
      </div>
    </form>
  );
}

function PaymentStep({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2.5 sm:flex-col sm:items-start">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[#6C4AB6] shadow-sm ring-1 ring-[#EAECF0]">
        {number}
      </div>

      <p className="text-xs font-medium text-[#667085]">
        {text}
      </p>
    </div>
  );
}