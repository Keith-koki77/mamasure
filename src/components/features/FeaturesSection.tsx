"use client";

import { Heart } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { features } from "./features";
import CommunityBanner from "./CommunityBanner";

export default function FeaturesSection() {
  return (
    <section
      id="why-mamasure"
      className="scroll-mt-16 sm:scroll-mt-28 relative overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-purple-50/30 py-12 sm:py-20 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-purple-200/20 blur-[90px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute -right-40 top-0 h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] rounded-full bg-pink-200/20 blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Decorative Dots Pattern */}
      <div className="absolute left-16 top-24 hidden opacity-40 xl:block pointer-events-none">
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 25 }).map((_, index) => (
            <div
              key={index}
              className="h-2.5 w-2.5 rounded-full bg-purple-200"
            />
          ))}
        </div>
      </div>

      {/* Decorative Curves */}
      <div className="absolute right-0 top-0 hidden h-80 w-80 rounded-full border border-pink-200/50 xl:block pointer-events-none" />
      <div className="absolute right-8 top-10 hidden h-72 w-72 rounded-full border border-pink-100/40 xl:block pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-pink-100 px-4 py-2 sm:px-6 sm:py-3 shadow-sm">
          <Heart className="h-4 w-4 sm:h-5 sm:w-5 fill-pink-500 text-pink-500 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-pink-600">
            Why Mama Sure
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-6 sm:mt-8 max-w-5xl text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          <span className="text-slate-900 block sm:inline">
            Everything You Need.{" "}
          </span>
          <span className="mt-1 sm:mt-2 block sm:inline-block bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
            All in One Place.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 sm:mt-8 max-w-3xl text-center text-base sm:text-lg lg:text-xl leading-relaxed text-slate-700">
          Mama Sure combines smart savings, trusted hospitals and expert
          guidance so you can focus on what matters most—
          <span className="font-semibold text-slate-800">
            {" "}
            your health and your baby.
          </span>
        </p>

        {/* Feature Grid */}
        <div className="mt-10 sm:mt-16 lg:mt-20 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
              badgeIcon={feature.badgeIcon}
              badgeColor={feature.badgeColor}
            />
          ))}
        </div>
      </div>

      <CommunityBanner />
    </section>
  );
}