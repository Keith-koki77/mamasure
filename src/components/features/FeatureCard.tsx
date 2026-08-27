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
    <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[28px] border border-purple-100 bg-white p-5 sm:p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-200 hover:shadow-[0_20px_60px_rgba(109,40,217,0.15)]">
      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      {/* Verification Badge */}
      <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
        <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-pink-100">
          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-pink-500" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-stretch">
        {/* Icon */}
        <div className="flex h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 shrink-0 items-center justify-center rounded-2xl sm:rounded-full bg-gradient-to-br from-purple-100 to-pink-100 transition-transform duration-500 group-hover:scale-105">
          <Icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-purple-700" />
        </div>

        {/* Text Details */}
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
            {title}
          </h3>

          <p className="mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-600">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Badge & Action Button */}
      <div className="relative z-10 mt-6 sm:mt-8 flex items-center justify-between gap-3 pt-2">
        <div
          className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium ${badgeColor}`}
        >
          <BadgeIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
          <span className="whitespace-nowrap">{badge}</span>
        </div>

        <button 
          aria-label={`Explore ${title}`}
          className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-700 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white"
        >
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
}