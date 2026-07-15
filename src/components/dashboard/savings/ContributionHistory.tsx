"use client";

import { CheckCircle2, Clock3 } from "lucide-react";

import { contributionHistory } from "@/data/savings";

export default function ContributionHistory() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Contribution History
          </h2>

          <p className="mt-2 text-gray-500">
            Review all your maternity savings contributions.
          </p>

        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          {contributionHistory.length} Transactions
        </span>

      </div>

      {/* Table */}

      <div className="mt-8 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-purple-100 text-left">

              <th className="pb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Date
              </th>

              <th className="pb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Amount
              </th>

              <th className="pb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Method
              </th>

              <th className="pb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {contributionHistory.map((transaction) => (

              <tr
                key={transaction.id}
                className="border-b border-purple-50 transition hover:bg-purple-50/40"
              >

                {/* Date */}

                <td className="py-6">

                  <p className="font-semibold text-slate-900">
                    {transaction.date}
                  </p>

                </td>

                {/* Amount */}

                <td className="py-6">

                  <p className="text-lg font-bold text-purple-700">

                    + KES {transaction.amount.toLocaleString()}

                  </p>

                </td>

                {/* Payment Method */}

                <td className="py-6">

                  <span className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">

                    {transaction.method}

                  </span>

                </td>

                {/* Status */}

                <td className="py-6">

                  {transaction.status === "Completed" ? (

                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-2 text-sm font-semibold text-green-700">

                      <CheckCircle2 className="h-4 w-4" />

                      Completed

                    </span>

                  ) : (

                    <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-2 text-sm font-semibold text-yellow-700">

                      <Clock3 className="h-4 w-4" />

                      Pending

                    </span>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between rounded-2xl bg-purple-50 px-6 py-5">

        <div>

          <p className="text-sm text-gray-500">
            Total Contributions
          </p>

          <h3 className="mt-1 text-2xl font-bold text-purple-700">

            KES{" "}
            {contributionHistory
              .reduce((sum, item) => sum + item.amount, 0)
              .toLocaleString()}

          </h3>

        </div>

        <button
          disabled
          className="cursor-not-allowed rounded-xl bg-purple-700 px-5 py-3 font-semibold text-white opacity-70"
        >
          View Full Statement
        </button>

      </div>

    </section>
  );
}