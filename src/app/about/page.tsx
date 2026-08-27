"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  const principles = [
    "Prepare financially",
    "Understand your journey",
    "Access trusted care",
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#FFF8FA] py-16 sm:py-20 lg:py-28"
    >
      {/* Ambient background elements */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-200/30 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-pink-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-purple-700" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-purple-700 sm:text-sm">
              About MamaSure
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Preparing for motherhood
            <span className="block bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              should feel empowering.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            MamaSure helps expecting families prepare financially,
            understand their maternal health journey, and plan for
            quality care before they need it.
          </p>

        </div>

        {/* =========================================================
            STORY
        ========================================================= */}

        <div className="mt-16 grid items-center gap-12 lg:mt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* IMAGE */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-purple-200/50 via-transparent to-pink-200/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_-25px_rgba(107,33,168,0.25)]">

              <Image
                src="/about-mother.jpg"
                alt="Mother caring for her newborn baby"
                width={800}
                height={650}
                priority
                className="h-auto w-full object-cover"
              />

              {/* Image caption */}

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">

                <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 p-3 shadow-xl backdrop-blur-md sm:p-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-100 sm:h-11 sm:w-11">
                    <Heart className="h-5 w-5 fill-pink-500 text-pink-500" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Built around the mother
                    </p>

                    <p className="text-xs text-slate-500">
                      Because preparation should bring peace, not pressure.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* STORY CONTENT */}

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-pink-600">
              Why MamaSure exists
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Pregnancy should be a time of anticipation, not financial uncertainty.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">

              <p>
                For many families, preparing for a baby also means preparing
                for healthcare costs that can feel unpredictable and difficult
                to manage.
              </p>

              <p>
                MamaSure was created to change that experience. We bring
                financial preparation, maternal education, healthcare planning,
                and timely guidance into one simple digital experience.
              </p>

              <p>
                Instead of waiting until the last moment to figure everything
                out, mothers and families can start preparing early, understand
                what lies ahead, and make informed decisions with greater
                confidence.
              </p>

            </div>

            {/* Principles */}

            <div className="mt-8 space-y-3">

              {principles.map((principle) => (
                <div
                  key={principle}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-600" />

                  <span className="text-sm font-semibold text-slate-800 sm:text-base">
                    {principle}
                  </span>
                </div>
              ))}

            </div>

            {/* Small mission statement */}

            <div className="mt-10 border-l-4 border-purple-600 pl-5">

              <p className="text-lg font-semibold leading-8 text-slate-900">
                "Our goal is simple: help every mother feel more prepared,
                informed, and confident for the journey ahead."
              </p>

            </div>

          </div>

        </div>

        {/* =========================================================
            WHAT WE BELIEVE
        ========================================================= */}

        <div className="mt-20 border-y border-purple-100 py-10 sm:mt-28 sm:py-12">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
                What we believe
              </p>

              <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Better preparation creates more confident beginnings.
              </h2>

            </div>

            <div className="grid gap-6 sm:grid-cols-3">

              <div>
                <p className="text-lg font-bold text-slate-900">
                  Financially
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Plan gradually instead of facing costs unexpectedly.
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-slate-900">
                  Medically
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Understand important milestones and prepare for care.
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-slate-900">
                  Emotionally
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Feel supported rather than overwhelmed by the journey.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================
            CTA
        ========================================================= */}

        <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-800 via-purple-700 to-pink-600 px-6 py-12 text-center shadow-[0_25px_70px_-25px_rgba(107,33,168,0.45)] sm:mt-28 sm:px-12 sm:py-16">

          {/* Decorative circles */}

          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-pink-200">
              Start preparing early
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Give yourself the confidence to welcome what's next.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-purple-100 sm:text-base">
              Join the MamaSure waitlist and be among the first families
              to experience a simpler way to prepare for motherhood.
            </p>

            <div className="mt-8 flex justify-center">

              <Link
                href="https://surveymars.com/q/NCVBi4nlK"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-purple-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-pink-50 hover:shadow-2xl"
              >
                <span>Join the Waitlist</span>

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}