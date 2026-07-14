"use client";

import { LucideIcon } from "lucide-react";

interface PartnerStatProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  color?: "purple" | "pink";
  showDivider?: boolean;
}

export default function PartnerStat({
  icon: Icon,
  value,
  label,
  description,
  color = "purple",
  showDivider = true,
}: PartnerStatProps) {
  const theme = {
    purple: {
      bg: "bg-purple-100",
      icon: "text-purple-700",
      value: "text-purple-700",
    },
    pink: {
      bg: "bg-pink-100",
      icon: "text-pink-500",
      value: "text-pink-500",
    },
  };

  const colors = theme[color];

  return (
    <div className="relative flex items-center">
      {/* Stat */}

      <div className="group flex flex-1 flex-col items-center px-8 py-4 text-center">
        {/* Icon */}

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full ${colors.bg} transition-all duration-300 group-hover:scale-110`}
        >
          <Icon className={`h-8 w-8 ${colors.icon}`} />
        </div>

        {/* Value */}

        <h3 className={`mt-6 text-5xl font-extrabold ${colors.value}`}>
          {value}
        </h3>

        {/* Label */}

        <p className="mt-3 text-lg font-semibold text-slate-900">
          {label}
        </p>

        {/* Description */}

        <p className="mt-2 max-w-[180px] text-sm leading-6 text-gray-500">
          {description}
        </p>
      </div>

      {/* Divider */}

      {showDivider && (
        <div className="hidden h-36 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent lg:block" />
      )}
    </div>
  );
}