"use client";

import { LucideIcon } from "lucide-react";

interface PartnerBenefitProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "purple" | "pink";
  showDivider?: boolean;
}

export default function PartnerBenefit({
  icon: Icon,
  title,
  description,
  color = "purple",
  showDivider = true,
}: PartnerBenefitProps) {
  const theme = {
    purple: {
      bg: "bg-purple-100",
      icon: "text-purple-700",
    },
    pink: {
      bg: "bg-pink-100",
      icon: "text-pink-500",
    },
  };

  const colors = theme[color];

  return (
    <>
      <div className="group flex items-start gap-5 py-6">
        {/* Icon */}

        <div
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${colors.bg} transition-all duration-300 group-hover:scale-110`}
        >
          <Icon className={`h-8 w-8 ${colors.icon}`} />
        </div>

        {/* Content */}

        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 leading-7 text-gray-600">
            {description}
          </p>
        </div>
      </div>

      {/* Divider */}

      {showDivider && (
        <div className="border-b border-dashed border-gray-200" />
      )}
    </>
  );
}