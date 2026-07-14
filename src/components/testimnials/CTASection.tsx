"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTASection() {
  return (
    <section className="mt-10">
      <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 shadow-[0_30px_80px_rgba(109,40,217,0.28)]">

        {/* Decorative circles */}

        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

        {/* Dot pattern */}

        <div className="absolute left-8 top-8 grid grid-cols-4 gap-3 opacity-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-white"
            />
          ))}
        </div>

        <div className="relative grid items-center gap-10 px-8 py-10 lg:grid-cols-[320px_1fr_340px] lg:px-14 lg:py-14">

          {/* Mother Image */}

          <div className="relative flex justify-center lg:justify-start">

            <Image
              src="/pregnant-mother-cta.png"
              alt="Pregnant mother"
              width={920}
              height={1020}
              className="relative z-10 object-contain"
            />

          </div>

          {/* Content */}

          <div className="text-center lg:text-left">

            <h2 className="text-4xl font-extrabold leading-tight text-white lg:text-5xl">
              Your Journey Deserves
              <br />
              the Best Start.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-purple-100">
              Join the Mama Sure community today and begin preparing for
              motherhood with confidence. Save consistently, access trusted
              hospitals, and enjoy expert guidance—all in one place.
            </p>

          </div>

          {/* CTA */}

          <div className="flex flex-col items-center lg:items-end">

            <button className="group flex w-full max-w-xs items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 text-lg font-bold text-pink-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:w-auto">

              Join the Waitlist

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

            </button>

            <div className="mt-6 flex items-center gap-3 text-sm text-purple-100">

              <ShieldCheck className="h-5 w-5" />

              <span>
                No commitment. Just better preparation.
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}