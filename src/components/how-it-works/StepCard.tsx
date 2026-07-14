"use client";

import { ReactNode } from "react";
import MiniPhoneCard from "./MiniPhoneCard";

interface StepCardProps {
  number: number;
  icon: ReactNode;
  title: string;
  description: string;
  phoneType:
    | "hospital"
    | "goal"
    | "payment"
    | "progress"
    | "education"
    | "success";
}

export default function StepCard({
  number,
  icon,
  title,
  description,
  phoneType,
}: StepCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-purple-100 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-purple-300 hover:shadow-[0_20px_60px_rgba(109,40,217,0.18)]">

      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-purple-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />

      {/* Step Number */}

      <div className="relative z-10 flex items-center justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-xl font-bold text-white shadow-lg">
          {number}
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-100">
          {icon}
        </div>

      </div>

      {/* Title */}

      <div className="relative z-10 mt-8">

        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

      </div>

      {/* Divider */}

      <div className="relative z-10 my-8 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />

      {/* Mini App Preview */}

      <div className="relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
        <MiniPhoneCard type={phoneType} />
      </div>

      {/* Bottom Label */}

      <div className="relative z-10 mt-6 flex items-center justify-between">

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-500">
          Step {number}
        </span>

        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-purple-500" />
          <span className="h-2 w-2 rounded-full bg-pink-400" />
          <span className="h-2 w-2 rounded-full bg-purple-200" />
        </div>

      </div>

      {/* Hover Border */}

      <div className="pointer-events-none absolute inset-0 rounded-[32px] border-2 border-transparent transition-all duration-500 group-hover:border-purple-200" />

    </div>
  );
}