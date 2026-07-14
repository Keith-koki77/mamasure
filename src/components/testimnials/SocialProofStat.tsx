"use client";

import { LucideIcon } from "lucide-react";

interface SocialProofStatProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  color?: "purple" | "pink";
  showDivider?: boolean;
}

export default function SocialProofStat({
  icon: Icon,
  value,
  label,
  description,
  color = "purple",
  showDivider = true,
}: SocialProofStatProps) {
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
      {/* Content */}

      <div className="group flex flex-1 items-center gap-5 px-8 py-6 transition-all duration-300">
        {/* Icon */}

        <div
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${colors.bg} transition-all duration-300 group-hover:scale-110`}
        >
          <Icon className={`h-8 w-8 ${colors.icon}`} />
        </div>

        {/* Text */}

        <div>
          <h3 className={`text-4xl font-extrabold ${colors.value}`}>
            {value}
          </h3>

          <p className="mt-1 text-lg font-semibold text-slate-900">
            {label}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>

      {/* Vertical Divider */}

      {showDivider && (
        <div className="hidden h-20 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent lg:block" />
      )}
    </div>
  );
}