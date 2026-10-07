"use client";

import type { LucideIcon } from "lucide-react";

import CountUp from "./CountUp";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  color: "purple" | "pink";
}

const COLORS = {
  purple: { circle: "bg-purple-100", icon: "text-purple-700" },
  pink: { circle: "bg-pink-100", icon: "text-pink-600" },
} as const;

/*
 * NOTE: StatCard.tsx wasn't included in what you pasted, so the markup and
 * classes below are a reconstruction. If you have the original, keep its
 * markup and change only one thing: render the value as
 * <CountUp text={value} /> instead of {value}.
 */
export default function StatCard({
  icon: Icon,
  value,
  label,
  description,
  color,
}: StatCardProps) {
  const c = COLORS[color];

  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-purple-100">
      <span
        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${c.circle}`}
      >
        <Icon className={`h-6 w-6 ${c.icon}`} />
      </span>

      <p className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 tabular-nums">
        <CountUp text={value} />
      </p>
      <p className="mt-1 text-base font-semibold text-slate-900">{label}</p>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  );
}
