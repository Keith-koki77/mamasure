"use client";

import Image from "next/image";
import {
  Stethoscope,
  BadgeCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { expertAdvice } from "@/data/education";

export default function ExpertAdvice() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Expert Advice
          </h2>

          <p className="mt-2 text-gray-500">
            Trusted guidance from experienced maternal healthcare
            professionals to help you make informed decisions throughout
            your pregnancy.
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">

          <ShieldCheck className="h-5 w-5 text-green-700" />

          <span className="font-semibold text-green-700">
            Medically Reviewed
          </span>

        </div>

      </div>

      {/* Main Card */}

      <div className="mt-10 overflow-hidden rounded-3xl border border-purple-100">

        <div className="grid lg:grid-cols-[320px_1fr]">

          {/* Doctor */}

          <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

            <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white">

              <Image
                src={expertAdvice.image}
                alt={expertAdvice.name}
                width={160}
                height={160}
                className="h-full w-full object-cover"
              />

            </div>

            <h3 className="mt-6 text-center text-2xl font-bold">
              {expertAdvice.name}
            </h3>

            <p className="mt-2 text-center text-purple-100">
              {expertAdvice.specialization}
            </p>

            <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">

              <div className="flex items-center gap-3">

                <BadgeCheck className="h-6 w-6 text-green-300" />

                <span className="font-semibold">
                  Verified Specialist
                </span>

              </div>

              <p className="mt-3 text-sm leading-7 text-purple-100">
                {expertAdvice.experience} years of experience in maternal,
                fetal and newborn healthcare.
              </p>

            </div>

          </div>

          {/* Advice */}

          <div className="p-10">

            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2">

              <Stethoscope className="h-5 w-5 text-purple-700" />

              <span className="font-semibold text-purple-700">
                Weekly Professional Advice
              </span>

            </div>

            <h3 className="mt-6 text-4xl font-extrabold text-slate-900">
              {expertAdvice.title}
            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              {expertAdvice.message}
            </p>

            {/* Recommendations */}

            <div className="mt-10">

              <h4 className="text-xl font-bold text-slate-900">
                Key Recommendations
              </h4>

              <div className="mt-6 space-y-5">

                {expertAdvice.recommendations.map(
                  (recommendation, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-2xl bg-purple-50 p-5"
                    >

                      <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />

                      <p className="leading-7 text-gray-700">
                        {recommendation}
                      </p>

                    </div>
                  )
                )}

              </div>

            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 px-7 py-4 font-semibold text-white opacity-90"
              >
                Book Consultation

                <ArrowRight className="h-5 w-5" />

              </button>

              <button
                disabled
                className="cursor-not-allowed rounded-2xl border border-purple-200 px-7 py-4 font-semibold text-purple-700 opacity-80"
              >
                View Profile
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Trust Banner */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 p-8 text-white">

        <h3 className="text-2xl font-bold">
          Evidence-Based Maternal Education
        </h3>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-green-100">
          MamaSure is committed to providing educational content that aligns
          with recognized maternal health guidance. The information in this
          section is designed to support learning and preparation, but it
          does not replace personalized medical advice from your healthcare
          provider.
        </p>

      </div>

    </section>
  );
}