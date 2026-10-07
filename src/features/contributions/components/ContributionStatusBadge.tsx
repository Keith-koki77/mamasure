import type { ContributionStatus } from "../types/contributions.types";

interface StatusConfig {
  label: string;
  background: string;
  color: string;
}

const statusConfig: Record<string, StatusConfig> = {
  pending: {
    label: "Pending",
    background: "#FFF8E7",
    color: "#967019",
  },

  successful: {
    label: "Successful",
    background: "#EAF7F2",
    color: "#287A61",
  },

  completed: {
    label: "Completed",
    background: "#EAF7F2",
    color: "#287A61",
  },

  failed: {
    label: "Failed",
    background: "#FFF1F4",
    color: "#A63A58",
  },

  cancelled: {
    label: "Cancelled",
    background: "#FFF1F4",
    color: "#A63A58",
  },

  processing: {
    label: "Processing",
    background: "#F1EEF9",
    color: "#6C4AB6",
  },
};

const fallbackStatus: StatusConfig = {
  label: "Pending",
  background: "#FFF8E7",
  color: "#967019",
};

function formatStatus(status: string) {
  return status
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase(),
    );
}

export default function ContributionStatusBadge({
  status,
}: {
  status: ContributionStatus;
}) {
  const normalizedStatus = String(status)
    .trim()
    .toLowerCase();

  const config =
    statusConfig[normalizedStatus] ??
    fallbackStatus;

  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
      style={{
        backgroundColor: config.background,
        color: config.color,
      }}
    >
      {statusConfig[normalizedStatus]
        ? config.label
        : formatStatus(String(status))}
    </span>
  );
}