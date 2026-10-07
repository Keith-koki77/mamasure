import {
    CalendarDays,
    CircleDollarSign,
    Target,
    TrendingUp,
  } from "lucide-react";
  
  import type { PlanProgress as PlanProgressType } from "../types/plans.types";
  
  const PURPLE = "#6C4AB6";
  const MINT = "#4CAF93";
  const ROSE = "#F6A5C0";
  const NAVY = "#23263A";
  const GRAY = "#667085";
  const BORDER = "#EAECF0";
  
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
  
  export default function PlanProgress({
    progress,
  }: {
    progress: PlanProgressType;
  }) {
    const percentage = Math.min(
      100,
      Math.max(
        0,
        Number(progress.progress_percentage) || 0,
      ),
    );
  
    return (
      <div>
        <section
          className="rounded-3xl border bg-white p-5 shadow-sm sm:p-7"
          style={{ borderColor: BORDER }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-sm font-medium"
                style={{ color: GRAY }}
              >
                Current progress
              </p>
  
              <h2
                className="mt-1 text-3xl font-bold tracking-tight"
                style={{ color: NAVY }}
              >
                {formatKES(progress.current_balance)}
              </h2>
  
              <p
                className="mt-1 text-sm"
                style={{ color: GRAY }}
              >
                of {formatKES(progress.target_amount)}
              </p>
            </div>
  
            <div className="text-left sm:text-right">
              <p
                className="text-3xl font-bold"
                style={{ color: PURPLE }}
              >
                {percentage.toFixed(0)}%
              </p>
  
              <p
                className="text-xs"
                style={{ color: GRAY }}
              >
                of your target
              </p>
            </div>
          </div>
  
          <div
            className="mt-7 h-3 overflow-hidden rounded-full"
            style={{ backgroundColor: "#EEEAF6" }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${percentage}%`,
                backgroundColor: PURPLE,
              }}
            />
          </div>
  
          <div className="mt-3 flex items-center justify-between text-xs">
            <span style={{ color: GRAY }}>
              {formatKES(progress.current_balance)} saved
            </span>
  
            <span
              className="font-semibold"
              style={{ color: PURPLE }}
            >
              {formatKES(progress.remaining_amount)} remaining
            </span>
          </div>
        </section>
  
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ProgressStat
            icon={<Target size={19} />}
            label="Target"
            value={formatKES(progress.target_amount)}
            accent={PURPLE}
          />
  
          <ProgressStat
            icon={<CircleDollarSign size={19} />}
            label="Contribution"
            value={formatKES(progress.contribution_amount)}
            accent={MINT}
          />
  
          <ProgressStat
            icon={<TrendingUp size={19} />}
            label="Contributions"
            value={
              progress.total_contributions !== undefined
                ? String(progress.total_contributions)
                : "—"
            }
            accent={ROSE}
          />
  
          <ProgressStat
            icon={<CalendarDays size={19} />}
            label="Target date"
            value={formatDate(progress.target_date)}
            accent={PURPLE}
          />
        </div>
      </div>
    );
  }
  
  function ProgressStat({
    icon,
    label,
    value,
    accent,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string;
    accent: string;
  }) {
    return (
      <div
        className="rounded-2xl border bg-white p-4"
        style={{ borderColor: BORDER }}
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${accent}15`,
            color: accent,
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
          className="mt-1 text-sm font-bold"
          style={{ color: NAVY }}
        >
          {value}
        </p>
      </div>
    );
  }