"use client";

import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Clock3,
} from "lucide-react";

import { recommendedArticles } from "@/data/education";

export default function RecommendedArticles() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Recommended Articles
          </h2>

          <p className="mt-2 text-gray-500">
            Carefully selected reading materials to help you make informed
            decisions throughout your pregnancy.
          </p>

        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          {recommendedArticles.length} Articles
        </span>

      </div>

      {/* Articles */}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        {recommendedArticles.map((article) => (
          <article
            key={article.id}
            className="group overflow-hidden rounded-3xl border border-purple-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl"
          >

            {/* Image */}

            <div className="relative h-64 w-full overflow-hidden">

              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow">

                {article.category}

              </div>

            </div>

            {/* Content */}

            <div className="p-7">

              <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-purple-700">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                {article.description}
              </p>

              {/* Meta */}

              <div className="mt-6 flex flex-wrap gap-4">

                <div className="flex items-center gap-2 rounded-xl bg-purple-50 px-4 py-2">

                  <Clock3 className="h-4 w-4 text-purple-700" />

                  <span className="text-sm font-medium">
                    {article.readTime}
                  </span>

                </div>

                <div className="flex items-center gap-2 rounded-xl bg-pink-50 px-4 py-2">

                  <BookOpen className="h-4 w-4 text-pink-600" />

                  <span className="text-sm font-medium">
                    {article.category}
                  </span>

                </div>

              </div>

              {/* CTA */}

              <button
                disabled
                className="mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 px-6 py-3 font-semibold text-white opacity-90"
              >
                Read Article

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

              </button>

            </div>

          </article>
        ))}

      </div>

      {/* Footer */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 to-pink-500 p-8 text-white">

        <h3 className="text-2xl font-bold">
          Keep Learning Every Week
        </h3>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-purple-100">
          Reading trusted maternal health resources regularly helps you
          prepare for pregnancy, labour, delivery and newborn care with
          greater confidence.
        </p>

      </div>

    </section>
  );
}