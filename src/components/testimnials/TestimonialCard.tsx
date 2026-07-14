"use client";

import Image from "next/image";
import {
  BadgeCheck,
  MapPin,
  Quote,
  Star,
} from "lucide-react";

interface TestimonialCardProps {
  name: string;
  stage: string;
  location: string;
  avatar: string;
  rating: number;
  verified: boolean;
  review: string;
}

export default function TestimonialCard({
  name,
  stage,
  location,
  avatar,
  rating,
  verified,
  review,
}: TestimonialCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-purple-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-[0_20px_60px_rgba(109,40,217,0.12)]">

      {/* Background Glow */}

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-start justify-between">

          <Quote className="h-12 w-12 text-purple-300 transition-transform duration-300 group-hover:scale-110" />

          {verified && (
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">

              <BadgeCheck className="h-4 w-4" />

              Verified Member

            </div>
          )}

        </div>

        {/* Rating */}

        <div className="mt-6 flex items-center gap-1">

          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${
                index < rating
                  ? "fill-pink-500 text-pink-500"
                  : "text-gray-300"
              }`}
            />
          ))}

        </div>

        {/* Review */}

        <p className="mt-6 text-lg leading-9 text-gray-700">
          {review}
        </p>

        {/* Divider */}

        <div className="my-8 border-t border-dashed border-gray-200" />

        {/* User */}

        <div className="flex items-center gap-4">

          <Image
            src={avatar}
            alt={name}
            width={72}
            height={72}
            className="rounded-full object-cover ring-4 ring-purple-50"
          />

          <div className="flex-1">

            <h3 className="text-xl font-bold text-slate-900">
              {name}
            </h3>

            <p className="mt-1 text-gray-500">
              {stage}
            </p>

            <div className="mt-2 flex items-center gap-2 text-purple-600">

              <MapPin className="h-4 w-4" />

              <span className="text-sm">
                {location}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}