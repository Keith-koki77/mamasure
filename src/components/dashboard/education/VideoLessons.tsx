"use client";

import Image from "next/image";
import {
  PlayCircle,
  Clock3,
  UserRound,
  ArrowRight,
} from "lucide-react";

import { videoLessons } from "@/data/education";

export default function VideoLessons() {
  const featuredVideo = videoLessons[0];
  const otherVideos = videoLessons.slice(1);

  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Video Learning Center
          </h2>

          <p className="mt-2 text-gray-500">
            Learn visually with expert-led maternity education videos
            designed for every stage of pregnancy.
          </p>

        </div>

        <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
          {videoLessons.length} Lessons
        </span>

      </div>

      {/* Featured Video */}

      <div className="mt-10 overflow-hidden rounded-3xl border border-purple-100">

        <div className="grid lg:grid-cols-2">

          {/* Thumbnail */}

          <div className="relative h-[340px]">

            <Image
              src={featuredVideo.thumbnail}
              alt={featuredVideo.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />

            <button
              disabled
              className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 cursor-not-allowed items-center justify-center rounded-full bg-white/90 shadow-xl"
            >
              <PlayCircle className="h-12 w-12 text-purple-700" />
            </button>

          </div>

          {/* Content */}

          <div className="flex flex-col justify-center p-10">

            <span className="w-fit rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              Featured Lesson
            </span>

            <h3 className="mt-6 text-4xl font-extrabold text-slate-900">
              {featuredVideo.title}
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Watch this expert-led session to gain practical knowledge
              that prepares you for a healthier pregnancy and a more
              confident delivery experience.
            </p>

            {/* Meta */}

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="flex items-center gap-2 rounded-xl bg-purple-50 px-4 py-3">

                <Clock3 className="h-5 w-5 text-purple-700" />

                <span>{featuredVideo.duration}</span>

              </div>

              <div className="flex items-center gap-2 rounded-xl bg-pink-50 px-4 py-3">

                <UserRound className="h-5 w-5 text-pink-600" />

                <span>{featuredVideo.instructor}</span>

              </div>

            </div>

            <button
              disabled
              className="mt-10 inline-flex w-fit cursor-not-allowed items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 px-7 py-4 font-semibold text-white opacity-90"
            >
              Watch Lesson

              <ArrowRight className="h-5 w-5" />

            </button>

          </div>

        </div>

      </div>

      {/* More Lessons */}

      <div className="mt-10">

        <h3 className="text-2xl font-bold text-slate-900">
          More Lessons
        </h3>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">

          {otherVideos.map((video) => (
            <div
              key={video.id}
              className="group flex gap-5 rounded-3xl border border-purple-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg"
            >

              {/* Thumbnail */}

              <div className="relative h-32 w-48 overflow-hidden rounded-2xl">

                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30" />

                <PlayCircle className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-white" />

              </div>

              {/* Details */}

              <div className="flex flex-1 flex-col justify-between">

                <div>

                  <h4 className="text-xl font-bold text-slate-900">
                    {video.title}
                  </h4>

                  <p className="mt-2 text-gray-500">
                    {video.instructor}
                  </p>

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2 text-sm text-gray-500">

                    <Clock3 className="h-4 w-4" />

                    {video.duration}

                  </div>

                  <button
                    disabled
                    className="rounded-xl bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700"
                  >
                    Coming Soon
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Bottom Banner */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-600 to-purple-700 p-8 text-white">

        <h3 className="text-2xl font-bold">
          Learn Anywhere, Anytime
        </h3>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-purple-100">
          Short educational videos make it easier to understand important
          pregnancy topics whenever you have a few minutes to spare.
          Build confidence one lesson at a time.
        </p>

      </div>

    </section>
  );
}