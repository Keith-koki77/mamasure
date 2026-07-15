"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  Building2,
  CheckCircle2,
} from "lucide-react";

import { transactions } from "@/data/wallet";

export default function RecentTransactions() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Recent Transactions
          </h2>

          <p className="mt-2 text-gray-500">
            Your latest wallet activity and maternity payments.
          </p>

        </div>

        <button className="rounded-xl border border-purple-200 px-5 py-2 font-medium text-purple-700 transition hover:bg-purple-50">
          View All
        </button>

      </div>

      {/* Transactions */}

      <div className="mt-8 space-y-4">

        {transactions.map((transaction) => {
          const isDeposit = transaction.positive;

          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between rounded-2xl border border-purple-100 p-5 transition hover:border-purple-300 hover:bg-purple-50/40"
            >

              {/* Left */}

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    isDeposit
                      ? "bg-purple-100"
                      : "bg-pink-100"
                  }`}
                >
                  {transaction.type ===
                  "Hospital Payment" ? (
                    <Building2 className="h-7 w-7 text-pink-500" />
                  ) : isDeposit ? (
                    <ArrowDownLeft className="h-7 w-7 text-purple-700" />
                  ) : (
                    <ArrowUpRight className="h-7 w-7 text-pink-500" />
                  )}
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    {transaction.type}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {transaction.date}
                  </p>

                </div>

              </div>

              {/* Right */}

              <div className="text-right">

                <h3
                  className={`text-xl font-bold ${
                    isDeposit
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {isDeposit ? "+" : "-"}KES{" "}
                  {transaction.amount.toLocaleString()}
                </h3>

                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">

                  <CheckCircle2 className="h-4 w-4" />

                  {transaction.status}

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}