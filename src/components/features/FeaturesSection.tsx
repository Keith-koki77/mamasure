"use client";

import { Heart } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { features } from "./features";
import CommunityBanner from "./CommunityBanner";

export default function FeaturesSection() {
  return (
    <section id="why-mamasure" className="relative overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-purple-50/30 py-28">

      {/* Background Glow */}

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-200/20 blur-[120px]" />

      <div className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-pink-200/20 blur-[140px]" />

      {/* Dots */}

      <div className="absolute left-16 top-24 hidden opacity-40 lg:block">

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

      <div className="absolute right-0 top-0 hidden h-80 w-80 rounded-full border border-pink-200/50 lg:block" />

      <div className="absolute right-8 top-10 hidden h-72 w-72 rounded-full border border-pink-100/40 lg:block" />

      <div className="relative mx-auto max-w-7xl px-8">

        {/* Badge */}

        <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-pink-100 px-6 py-3 shadow-sm">

          <Heart className="h-5 w-5 fill-pink-500 text-pink-500" />

          <span className="font-semibold text-pink-600">

            Why Mama Sure

          </span>

        </div>

        {/* Heading */}

        <h2 className="mx-auto mt-8 max-w-5xl text-center text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">

          <span className="text-slate-900">

            Everything You Need.

          </span>

          <span className="mt-2 block bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">

            All in One Place.

          </span>

        </h2>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-slate-600">

          Mama Sure combines smart savings, trusted hospitals and expert
          guidance so you can focus on what matters most—
          <span className="font-semibold text-slate-800">
            {" "}
            your health and your baby.
          </span>

        </p>

        {/* Feature Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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