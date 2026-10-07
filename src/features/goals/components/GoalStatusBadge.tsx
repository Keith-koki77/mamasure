"use client";

import {
  CheckCircle2,
  Circle,
  CircleAlert,
} from "lucide-react";

import type { GoalStatus } from "../types/goals.types";

interface GoalStatusBadgeProps {
  status: GoalStatus;
}

function formatStatus(status: string) {
  return status
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function GoalStatusBadge({
  status,
}: GoalStatusBadgeProps) {
  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] px-3 py-1.5 text-xs font-semibold text-[#16A36A]">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Completed
      </span>
    );
  }

  if (normalizedStatus === "cancelled") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0F7] px-3 py-1.5 text-xs font-semibold text-[#E92B86]">
        <CircleAlert className="h-3.5 w-3.5" />
        Cancelled
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6EEFF] px-3 py-1.5 text-xs font-semibold text-[#7B19E6]">
      <Circle className="h-3.5 w-3.5 fill-current" />
      {formatStatus(status)}
    </span>
  );
}