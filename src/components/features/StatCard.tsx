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
    <div className="group rounded-2xl sm:rounded-3xl border border-purple-100 bg-white p-6 sm:p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      {/* Icon */}
      <div
        className={`mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl ${theme.iconBg}`}
      >
        <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${theme.icon}`} />
      </div>

      {/* Value */}
      <h3 className={`mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${theme.value}`}>
        {value}
      </h3>

      {/* Label */}
      <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-slate-900">
        {label}
      </p>

      {/* Description */}
      <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed text-gray-500">
        {description}
      </p>
    </div>
  );
}