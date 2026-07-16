"use client";

import {
  CalendarDays,
  CheckCircle2,
  CreditCard,
  Wallet,
  Landmark,
} from "lucide-react";

import { contributionHistory } from "@/data/contributions";

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
            Review all your previous monthly savings contributions.
          </p>

        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          {contributionHistory.length} Contributions
        </span>

      </div>

      {/* Table */}

      <div className="mt-8 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-purple-100 text-left">

              <th className="pb-4 font-semibold text-gray-500">
                Date
              </th>

              <th className="pb-4 font-semibold text-gray-500">
                Payment Method
              </th>

              <th className="pb-4 font-semibold text-gray-500">
                Amount
              </th>

              <th className="pb-4 font-semibold text-gray-500">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {contributionHistory.map((item) => {

              const MethodIcon =
                item.method === "M-PESA"
                  ? Wallet
                  : item.method === "Bank Transfer"
                  ? Landmark
                  : CreditCard;

              return (

                <tr
                  key={item.id}
                  className="border-b border-purple-50 transition hover:bg-purple-50"
                >

                  {/* Date */}

                  <td className="py-5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">

                        <CalendarDays className="h-5 w-5 text-purple-700" />

                      </div>

                      <span className="font-medium text-slate-900">
                        {item.date}
                      </span>

                    </div>

                  </td>

                  {/* Method */}

                  <td>

                    <div className="flex items-center gap-3">

                      <MethodIcon className="h-5 w-5 text-purple-600" />

                      <span className="text-slate-700">
                        {item.method}
                      </span>

                    </div>

                  </td>

                  {/* Amount */}

                  <td>

                    <span className="font-bold text-purple-700">
                      KES {item.amount.toLocaleString()}
                    </span>

                  </td>

                  {/* Status */}

                  <td>

                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                      <CheckCircle2 className="h-4 w-4" />

                      {item.status}

                    </span>

                  </td>

                </tr>

              );
            })}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-3xl bg-gradient-to-r from-purple-700 to-pink-500 p-6 text-white">

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="text-xl font-bold">
              Excellent Consistency 🎉
            </h3>

            <p className="mt-2 text-purple-100">
              You've made {contributionHistory.length} consecutive monthly
              contributions. Keep it up to reach your maternity savings goal
              sooner.
            </p>

          </div>

          <div className="rounded-2xl bg-white/20 px-6 py-4 text-center">

            <p className="text-sm text-purple-100">
              Total Saved
            </p>

            <h2 className="mt-2 text-3xl font-extrabold">
              KES{" "}
              {contributionHistory
                .reduce((sum, item) => sum + item.amount, 0)
                .toLocaleString()}
            </h2>

          </div>

        </div>

      </div>

    </section>
  );
}