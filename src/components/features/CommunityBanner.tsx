"use client";

import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Users,
  Quote,
} from "lucide-react";

import StatCard from "./StatCard";

export default function CommunityBanner() {
  return (
    <section className="pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= INTRO + ILLUSTRATION ================= */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white-600">
              Join thousands of future moms
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              A Community That
              <span className="mt-2 block bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
                Plans, Saves & Thrives
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white-600">
              Mama Sure is more than a savings platform. It's a trusted
              community helping women prepare financially and confidently for
              one of life's most important journeys.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                Join the Waitlist
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <Image
                    src="/avatar1.jpg"
                    alt="Community member"
                    width={46}
                    height={46}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/avatar2.jpg"
                    alt="Community member"
                    width={46}
                    height={46}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/avatar3.jpg"
                    alt="Community member"
                    width={46}
                    height={46}
                    className="rounded-full border-2 border-white"
                  />
                </div>

                <div>
                  <p className="font-bold text-purple-700">2.5K+</p>
                  <p className="text-sm text-gray-500">Already joined</p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration — one calm shape, one badge, no bouncing icon cluster */}

          <div className="relative flex justify-center">
            <div className="absolute inset-0 -z-10 rounded-[50%] bg-gradient-to-br from-purple-100 via-pink-50 to-transparent blur-2xl" />

            <Image
              src="/pregnant-mother.png"
              alt="Pregnant mother"
              width={780}
              height={920}
              className="relative h-auto max-w-full"
            />

            <div className="absolute bottom-6 left-2 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl lg:left-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                <ShieldCheck className="h-5 w-5 text-pink-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Trusted & Verified
                </p>
                <p className="text-xs text-gray-500">Licensed hospital partners</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <StatCard
            icon={Users}
            value="5K+"
            label="Waitlist"
            description="Growing every day"
            color="purple"
          />
          <StatCard
            icon={Target}
            value="KES 250M+"
            label="Savings Planned"
            description="Towards maternity care"
            color="pink"
          />
          <StatCard
            icon={ShieldCheck}
            value="98%"
            label="Trust Score"
            description="Families would recommend Mama Sure"
            color="purple"
          />
        </div>

        {/* ================= TESTIMONIAL ================= */}

        <div className="mt-16 overflow-hidden rounded-[40px] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-pink-50 p-10 shadow-[0_25px_80px_rgba(109,40,217,0.08)] lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
            <Quote className="h-12 w-12 shrink-0 text-purple-300" />

            <div>
              <p className="max-w-3xl text-xl leading-9 text-gray-700 italic lg:text-2xl">
                "Mama Sure gives me peace of mind knowing that I'm preparing
                early instead of worrying when my baby arrives. Every mother
                deserves this kind of confidence."
              </p>

              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">Faith Wanjiru</h4>
                  <p className="text-sm text-gray-500">Nairobi, Kenya</p>
                </div>

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700">
                  ✓ Verified Waitlist Member
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}