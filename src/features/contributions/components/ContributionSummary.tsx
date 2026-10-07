import {
    CircleDollarSign,
    Clock3,
    CheckCircle2,
    XCircle,
  } from "lucide-react";
  
  import type { Contribution } from "../types/contributions.types";
  
  const PURPLE = "#6C4AB6";
  const MINT = "#4CAF93";
  const ROSE = "#F6A5C0";
  const NAVY = "#23263A";
  const GRAY = "#667085";
  const BORDER = "#EAECF0";
  
  function formatKES(value: number) {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      maximumFractionDigits: 0,
    }).format(value);
  }
  
  export default function ContributionSummary({
    contributions,
  }: {
    contributions: Contribution[];
  }) {
    const total = contributions.reduce(
      (sum, contribution) =>
        sum + (Number(contribution.amount) || 0),
      0,
    );
  
    const successful = contributions.filter(
      (contribution) => {
        const status = String(
          contribution.status,
        ).toLowerCase();
  
        return (
          status === "successful" ||
          status === "completed"
        );
      },
    ).length;
  
    const pending = contributions.filter(
      (contribution) =>
        String(contribution.status).toLowerCase() ===
        "pending",
    ).length;
  
    const failed = contributions.filter(
      (contribution) => {
        const status = String(
          contribution.status,
        ).toLowerCase();
  
        return (
          status === "failed" ||
          status === "cancelled"
        );
      },
    ).length;
  
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          icon={<CircleDollarSign size={19} />}
          label="Total contributed"
          value={formatKES(total)}
          accent={PURPLE}
        />
  
        <SummaryCard
          icon={<CheckCircle2 size={19} />}
          label="Successful"
          value={String(successful)}
          accent={MINT}
        />
  
        <SummaryCard
          icon={<Clock3 size={19} />}
          label="Pending"
          value={String(pending)}
          accent={ROSE}
        />
  
        <SummaryCard
          icon={<XCircle size={19} />}
          label="Failed"
          value={String(failed)}
          accent="#A63A58"
        />
      </div>
    );
  }
  
  function SummaryCard({
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
          className="mt-1 text-lg font-bold"
          style={{ color: NAVY }}
        >
          {value}
        </p>
      </div>
    );
  }