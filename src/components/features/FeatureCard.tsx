"use client";

import { LucideIcon, CheckCircle2, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  badgeIcon: LucideIcon;
  badgeColor: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  badge,
  badgeIcon: BadgeIcon,
  badgeColor,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-purple-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-[0_20px_60px_rgba(109,40,217,0.15)]">
      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Verification */}
      <div className="absolute right-5 top-5">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-100">
          <CheckCircle2 className="h-4 w-4 text-pink-500" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex gap-6">
        {/* Icon */}
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-pink-100 transition-transform duration-500 group-hover:scale-110">
          <Icon className="h-12 w-12 text-purple-700" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Badge */}
      <div className="relative z-10 mt-8 flex items-center justify-between">
        <div
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${badgeColor}`}
        >
          <BadgeIcon className="h-4 w-4" />
          <span>{badge}</span>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}