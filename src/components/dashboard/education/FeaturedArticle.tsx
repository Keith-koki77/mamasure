"use client";

import Image from "next/image";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";

import { featuredArticle } from "@/data/education";

export default function FeaturedArticle() {
  return (
    <section className="overflow-hidden rounded-[36px] border border-purple-100 bg-white shadow-lg">

      <div className="grid xl:grid-cols-2">

        {/* Image */}

        <div className="relative min-h-[420px]">

          <Image
            src={featuredArticle.image}
            alt={featuredArticle.title}
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Featured Badge */}

          <div className="absolute left-8 top-8 rounded-full bg-white px-5 py-2 text-sm font-semibold text-purple-700 shadow-lg">
            ⭐ Featured Article
          </div>

          {/* Category */}

          <div className="absolute bottom-8 left-8 rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white">
            {featuredArticle.category}
          </div>

        </div>

        {/* Content */}

        <div className="flex flex-col justify-center p-10">

          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">

            <BookOpen className="h-4 w-4" />

            Recommended Reading

          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900">

            {featuredArticle.title}

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            {featuredArticle.description}

          </p>

          {/* Info */}

          <div className="mt-8 flex flex-wrap gap-6">

            <div className="flex items-center gap-2 rounded-xl bg-purple-50 px-4 py-3">

              <Clock3 className="h-5 w-5 text-purple-700" />

              <span className="font-medium text-slate-700">
                {featuredArticle.readTime}
              </span>

            </div>

            <div className="rounded-xl bg-pink-50 px-4 py-3 font-medium text-pink-600">

              {featuredArticle.category}

            </div>

          </div>

          {/* CTA */}

          <button
            disabled
            className="mt-10 inline-flex w-fit cursor-not-allowed items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 px-7 py-4 font-semibold text-white opacity-90 transition hover:scale-105"
          >
            Read Article

            <ArrowRight className="h-5 w-5" />

          </button>

          {/* Bottom Banner */}

          <div className="mt-10 rounded-3xl bg-purple-50 p-6">

            <h3 className="font-bold text-slate-900">
              Why This Matters
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Understanding labour before delivery helps reduce anxiety,
              improves communication with your healthcare provider, and
              enables you to make informed decisions when the big day
              arrives.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}