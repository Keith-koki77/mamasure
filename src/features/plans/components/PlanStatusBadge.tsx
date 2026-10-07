import type { PlanStatus } from "../types/plans.types";

const statusConfig: Record<
  string,
  {
    label: string;
    background: string;
    color: string;
  }
> = {
  active: {
    label: "Active",
    background: "#EAF7F2",
    color: "#287A61",
  },

  completed: {
    label: "Completed",
    background: "#EAF7F2",
    color: "#287A61",
  },

  paused: {
    label: "Paused",
    background: "#FFF8E7",
    color: "#967019",
  },

  cancelled: {
    label: "Cancelled",
    background: "#FFF1F4",
    color: "#A63A58",
  },

  pending: {
    label: "Pending",
    background: "#FFF8E7",
    color: "#967019",
  },

  draft: {
    label: "Draft",
    background: "#F2F4F7",
    color: "#667085",
  },
};

const fallbackStatus = {
  label: "Active",
  background: "#EAF7F2",
  color: "#287A61",
};

export default function PlanStatusBadge({
  status,
}: {
  status: PlanStatus | string;
}) {
  const config =
    statusConfig[String(status).toLowerCase()] ??
    fallbackStatus;

  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
      style={{
        backgroundColor: config.background,
        color: config.color,
      }}
    >
      {config.label}
    </span>
  );
}