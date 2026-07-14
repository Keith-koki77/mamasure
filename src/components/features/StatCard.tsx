"use client";

import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  color?: "purple" | "pink";
}

export default function StatCard({
  icon: Icon,
  value,
  label,
  description,
  color = "purple",
}: StatCardProps) {
  const colors = {
    purple: {
      iconBg: "bg-purple-100",
      icon: "text-purple-700",
      value: "text-purple-700",
    },
    pink: {
      iconBg: "bg-pink-100",
      icon: "text-pink-500",
      value: "text-pink-500",
    },
  };

  const theme = colors[color];

  return (
    <div className="group rounded-3xl border border-purple-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Icon */}

      <div
        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${theme.iconBg}`}
      >
        <Icon className={`h-8 w-8 ${theme.icon}`} />
      </div>

      {/* Value */}

      <h3 className={`mt-6 text-5xl font-extrabold ${theme.value}`}>
        {value}
      </h3>

      {/* Label */}

      <p className="mt-3 text-lg font-semibold text-slate-900">
        {label}
      </p>

      {/* Description */}

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}