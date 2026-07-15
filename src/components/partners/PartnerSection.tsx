"use client";

import Image from "next/image";
import { HeartHandshake } from "lucide-react";

import HospitalCard from "./HospitalCard";
import PartnerBenefit from "./PartnerBenefit";
import PartnerStat from "./PartnerStat";

import {
  hospitals,
  partnerBenefits,
  partnerStats,
} from "./partners";

export default function PartnerSection() {
  return (
    <section  id="partners" className="scroll-mt-28 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-pink-50 py-28">
      {/* Decorative Background */}

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-purple-200/20 blur-[120px]" />

      <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-pink-200/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <div className="text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-pink-100 px-6 py-3 shadow-sm">
            <HeartHandshake className="h-5 w-5 text-pink-500" />

            <span className="font-semibold text-pink-600">
              Trusted Partner Hospitals
            </span>
          </div>

          <h2 className="mx-auto mt-8 max-w-5xl text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            <span className="text-slate-900">
              Healthcare You Can
            </span>

            <span className="mt-2 block bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
              Trust Every Step
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Mama Sure works with trusted maternity hospitals to give
            families confidence, transparent pricing and quality care
            throughout pregnancy.
          </p>
        </div>

        {/* ===================================================== */}
        {/* CONTENT */}
        {/* ===================================================== */}

        <div className="mt-20 grid gap-10 xl:grid-cols-[1.6fr_420px]">
          {/* LEFT */}

          <div className="grid gap-8 md:grid-cols-2">
            {hospitals.map((hospital) => (
              <HospitalCard
                key={hospital.id}
                image={hospital.image}
                logo={hospital.logo}
                name={hospital.name}
                location={hospital.location}
                rating={hospital.rating}
                services={hospital.services}
                verified={hospital.verified}
              />
            ))}
          </div>

          {/* RIGHT */}

          <div className="rounded-[36px] border border-purple-100 bg-white p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-slate-900">
              Why Our Partners?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Every hospital in the Mama Sure network is selected to
              provide mothers with trusted maternity care, transparent
              pricing and a better planning experience.
            </p>

            <div className="mt-8">
              {partnerBenefits.map((benefit, index) => (
                <PartnerBenefit
                  key={benefit.id}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  color={benefit.color}
                  showDivider={
                    index !== partnerBenefits.length - 1
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* BOTTOM BANNER */}
        {/* ===================================================== */}

        <div className="mt-24 overflow-hidden rounded-[40px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 shadow-[0_30px_80px_rgba(109,40,217,0.25)]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_420px]">
            {/* LEFT */}

            <div className="p-10 text-white lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-100">
                Building Trust Together
              </p>

              <h3 className="mt-6 text-4xl font-extrabold leading-tight lg:text-5xl">
                A Growing Network
                <br />
                of Trusted Care
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-purple-100">
                Our hospital partners share one mission:
                making maternity care more accessible,
                affordable and predictable for every family.
              </p>

              <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
                {partnerStats.map((stat, index) => (
                  <PartnerStat
                    key={stat.id}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                    description={stat.description}
                    color={stat.color}
                    showDivider={
                      index !== partnerStats.length - 1
                    }
                  />
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative flex justify-center self-end">
              <div className="absolute h-80 w-80 rounded-full bg-white/10 blur-3xl" />

              <Image
                src="/mother-baby.png"
                alt="Mother holding her baby"
                width={420}
                height={620}
                className="relative z-10 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}