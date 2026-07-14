"use client";

import { MessageCircleHeart } from "lucide-react";

import TestimonialCard from "./TestimonialCard";
import SocialProofStat from "./SocialProofStat";
import CTASection from "./CTASection";

import {
  testimonials,
  socialStats,
} from "./testimonials";

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-28">

      {/* Decorative Background */}

      <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-purple-100/40 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-pink-100/40 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ===================================================== */}
        {/* Badge */}
        {/* ===================================================== */}

        <div className="mx-auto flex w-fit items-center gap-3 rounded-full bg-pink-100 px-6 py-3 shadow-sm">

          <MessageCircleHeart className="h-5 w-5 text-pink-500" />

          <span className="font-semibold text-pink-600">
            Real Stories From Mothers
          </span>

        </div>

        {/* ===================================================== */}
        {/* Heading */}
        {/* ===================================================== */}

        <h2 className="mx-auto mt-8 max-w-5xl text-center text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">

          <span className="text-slate-900">
            Trusted By Mothers
          </span>

          <span className="mt-2 block bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
            Preparing For Tomorrow
          </span>

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-gray-600">

          Hear from women who believe planning ahead creates
          healthier pregnancies, greater financial confidence,
          and peace of mind for their families.

        </p>

        {/* ===================================================== */}
        {/* Testimonials */}
        {/* ===================================================== */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((testimonial) => (

            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              stage={testimonial.stage}
              location={testimonial.location}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              verified={testimonial.verified}
              review={testimonial.review}
            />

          ))}

        </div>

        {/* ===================================================== */}
        {/* Social Proof */}
        {/* ===================================================== */}

        <div className="mt-20 overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-lg">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

            {socialStats.map((stat, index) => (

              <SocialProofStat
                key={stat.id}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                color={stat.color}
                showDivider={index !== socialStats.length - 1}
              />

            ))}

          </div>

        </div>

        {/* ===================================================== */}
        {/* CTA */}
        {/* ===================================================== */}

        <div className="mt-24">

          <CTASection />

        </div>

      </div>

    </section>
  );
}