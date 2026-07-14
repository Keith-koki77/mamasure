"use client";

import { LucideIcon, TrendingUp } from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  trend?: string;
  progress?: number;
}

export default function SummaryCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg,
  iconColor,
  trend,
  progress,
}: SummaryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Decorative Glow */}

      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">

        {/* Top Row */}

        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
              {title}
            </p>

            <h3 className="mt-3 text-4xl font-extrabold text-slate-900">
              {value}
            </h3>

          </div>

          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${iconBg}`}
          >
            <Icon className={`h-8 w-8 ${iconColor}`} />
          </div>

        </div>

        {/* Subtitle */}

        <p className="mt-4 text-gray-600">
          {subtitle}
        </p>

        {/* Progress */}

        {progress !== undefined && (
          <div className="mt-6">

            <div className="mb-2 flex items-center justify-between text-sm">

              <span className="text-gray-500">
                Progress
              </span>

              <span className="font-semibold text-purple-700">
                {progress}%
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-purple-100">

              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-700 to-pink-500 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />

            </div>

          </div>
        )}

        {/* Trend */}

        {trend && (
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-green-600">

            <TrendingUp className="h-4 w-4" />

            <span>{trend}</span>

          </div>
        )}

      </div>
    </div>
  );
}