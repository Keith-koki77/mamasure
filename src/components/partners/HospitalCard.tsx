"use client";

import Image from "next/image";
import {
  BadgeCheck,
  MapPin,
  Star,
  ArrowUpRight,
} from "lucide-react";

interface HospitalCardProps {
  image: string;
  logo: string;
  name: string;
  location: string;
  rating: number;
  services: string[];
  verified: boolean;
}

export default function HospitalCard({
  image,
  logo,
  name,
  location,
  rating,
  services,
  verified,
}: HospitalCardProps) {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-purple-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-[0_20px_60px_rgba(109,40,217,0.12)]">
      {/* ================= IMAGE ================= */}

      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={320}
          className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Verified Badge */}

        {verified && (
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-purple-700 shadow-lg backdrop-blur">
            <BadgeCheck className="h-4 w-4 text-purple-600" />
            Verified
          </div>
        )}
      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-6">
        {/* Logo + Hospital */}

        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm">
            <Image
              src={logo}
              alt={`${name} logo`}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold leading-tight text-slate-900">
              {name}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-gray-500">
              <MapPin className="h-4 w-4 text-purple-500" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Rating */}

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-5 w-5 ${
                  index < Math.round(rating)
                    ? "fill-pink-500 text-pink-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <span className="font-bold text-slate-700">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Services */}

        <div className="mt-6 flex flex-wrap gap-2">
          {services.map((service) => (
            <span
              key={service}
              className="rounded-xl bg-purple-50 px-3 py-2 text-sm font-medium text-purple-700 transition-colors duration-300 hover:bg-purple-100"
            >
              {service}
            </span>
          ))}
        </div>

        {/* Footer */}

        <div className="mt-8 border-t border-gray-100 pt-5">
          <button className="group/button flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 px-5 py-4 transition-all duration-300 hover:from-purple-100 hover:to-pink-100">
            <span className="font-semibold text-purple-700">
              View Hospital
            </span>

            <ArrowUpRight className="h-5 w-5 text-purple-700 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
          </button>
        </div>
      </div>
    </div>
  );
}