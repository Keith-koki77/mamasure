"use client";

import { ArrowRight } from "lucide-react";

import { quickActions } from "@/data/wallet";

const colorThemes: Record<
  "purple" | "pink",
  {
    bg: string;
    icon: string;
    gradient: string;
  }
> = {
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-700",
    gradient: "from-purple-700 to-purple-500",
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-500",
    gradient: "from-pink-500 to-rose-400",
  },
};

export default function WalletActions() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Quick Actions
          </h2>

          <p className="mt-2 text-gray-500">
            Manage your maternity wallet with a single tap.
          </p>
        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          MVP Preview
        </span>
      </div>

      {/* Actions */}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {quickActions.map((action) => {
          const Icon = action.icon;

          const theme = colorThemes[action.color];

          return (
            <button
              key={action.id}
              className="group relative overflow-hidden rounded-3xl border border-purple-100 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl"
            >
              {/* Coming Soon */}

              <div className="absolute right-4 top-4 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                Soon
              </div>

              {/* Icon */}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg}`}
              >
                <Icon className={`h-8 w-8 ${theme.icon}`} />
              </div>

              {/* Title */}

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {action.title}
              </h3>

              {/* Description */}

              <p className="mt-3 text-sm leading-6 text-gray-500">
                This feature will be available in the next release.
              </p>

              {/* CTA */}

              <div
                className={`mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-2 text-sm font-semibold text-white ${theme.gradient}`}
              >
                Coming Soon

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}