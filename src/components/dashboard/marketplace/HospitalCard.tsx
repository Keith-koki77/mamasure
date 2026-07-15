"use client";

import Image from "next/image";
import {
  MapPin,
  Star,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import HospitalTierBadge from "./HospitalTierBadge";

interface HospitalCardProps {
  name: string;
  image: string;
  logo: string;
  location: string;
  tier: "Platinum" | "Gold" | "Silver";
  rating: number;
  packagePrice: string;
  savingsTarget: string;
  services: string[];
}

export default function HospitalCard({
  name,
  image,
  logo,
  location,
  tier,
  rating,
  packagePrice,
  savingsTarget,
  services,
}: HospitalCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Hospital Cover */}

      <div className="relative h-52 overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <div className="absolute right-5 top-5">
          <HospitalTierBadge tier={tier} />
        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        {/* Logo + Name */}

        <div className="flex items-center gap-4">

          <div className="relative h-14 w-14 overflow-hidden rounded-2xl border bg-white shadow-sm">

            <Image
              src={logo}
              alt={name}
              fill
              className="object-contain p-2"
            />

          </div>

          <div className="flex-1">

            <h3 className="text-xl font-bold text-slate-900">
              {name}
            </h3>

            <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">

              <MapPin className="h-4 w-4 text-pink-500" />

              {location}

            </div>

          </div>

        </div>

        {/* Rating */}

        <div className="mt-5 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

            <span className="font-semibold text-slate-700">
              {rating}
            </span>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1">

            <BadgeCheck className="h-4 w-4 text-green-600" />

            <span className="text-xs font-semibold text-green-700">
              Verified
            </span>

          </div>

        </div>

        {/* Pricing */}

        <div className="mt-6 rounded-2xl bg-purple-50 p-4">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs uppercase tracking-wide text-gray-500">
                Delivery Package
              </p>

              <p className="mt-1 text-2xl font-bold text-purple-700">
                {packagePrice}
              </p>

            </div>

            <div className="text-right">

              <p className="text-xs uppercase tracking-wide text-gray-500">
                Savings Goal
              </p>

              <p className="mt-1 font-bold text-slate-800">
                {savingsTarget}
              </p>

            </div>

          </div>

        </div>

        {/* Services */}

        <div className="mt-6">

          <h4 className="mb-3 font-semibold text-slate-800">
            Maternity Services
          </h4>

          <div className="flex flex-wrap gap-2">

            {services.map((service) => (

              <span
                key={service}
                className="rounded-full bg-pink-50 px-3 py-2 text-xs font-medium text-pink-600"
              >
                {service}
              </span>

            ))}

          </div>

        </div>

        {/* CTA */}

        <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 py-4 font-semibold text-white transition hover:opacity-90">

          View Package

          <ArrowRight className="h-5 w-5" />

        </button>

      </div>

    </div>
  );
}