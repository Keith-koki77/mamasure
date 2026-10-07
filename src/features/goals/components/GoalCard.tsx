import Link from "next/link";

import type { Goal } from "../types/goals.types";
import GoalStatusBadge from "./GoalStatusBadge";

interface GoalCardProps {
  goal: Goal;
}

function formatAmount(value: number | string) {
  return Number(value).toLocaleString("en-KE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function GoalCard({
  goal,
}: GoalCardProps) {
  const target = Number(goal.target_amount);
  const current = Number(goal.current_amount);

  const progress =
    target > 0
      ? Math.min((current / target) * 100, 100)
      : 0;

  const remaining = Math.max(target - current, 0);

  return (
    <Link
      href={`/dashboard/goals/${goal.id}`}
      className="group block rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#DCC2F8] hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold text-[#101B4D] group-hover:text-[#7B19E6]">
            {goal.title}
          </h3>

          <p className="mt-1 text-sm text-[#64748B]">
            Target date: {formatDate(goal.target_date)}
          </p>
        </div>

        <GoalStatusBadge status={goal.status} />
      </div>

      <div className="mt-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#64748B]">
              Saved
            </p>

            <p className="mt-1 text-2xl font-bold text-[#101B4D]">
              KSh {formatAmount(current)}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs font-medium text-[#64748B]">
              Target
            </p>

            <p className="mt-1 text-sm font-bold text-[#101B4D]">
              KSh {formatAmount(target)}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="h-2.5 overflow-hidden rounded-full bg-[#F6EEFF]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#7B19E6] to-[#E92B86] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="font-semibold text-[#7B19E6]">
              {progress.toFixed(0)}% complete
            </span>

            <span className="text-[#64748B]">
              KSh {formatAmount(remaining)} remaining
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[#E5E7EB] pt-4">
        <span className="text-sm font-medium text-[#64748B]">
          View goal details
        </span>

        <span className="text-lg font-semibold text-[#7B19E6] transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}