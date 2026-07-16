"use client";

import {
  BookOpen,
  Trophy,
  Flame,
  Target,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";

import { learningProgress } from "@/data/education";

export default function LearningProgress() {
  const progress = Math.round(
    (learningProgress.completed / learningProgress.total) * 100
  );

  const nextMilestone = 75;

  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Your Learning Progress
          </h2>

          <p className="mt-2 text-gray-500">
            Keep learning every week to unlock more maternal education
            resources and achievements.
          </p>

        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          {progress}% Complete
        </span>

      </div>

      {/* Main Grid */}

      <div className="mt-10 grid gap-8 xl:grid-cols-3">

        {/* Left */}

        <div className="xl:col-span-2">

          {/* Progress */}

          <div className="rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-purple-100">
                  Overall Progress
                </p>

                <h3 className="mt-2 text-5xl font-extrabold">
                  {progress}%
                </h3>

              </div>

              <BookOpen className="h-16 w-16 text-white/80" />

            </div>

            <div className="mt-8 h-5 overflow-hidden rounded-full bg-white/20">

              <div
                className="h-full rounded-full bg-white transition-all duration-700"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <div className="mt-5 flex justify-between text-sm">

              <span>
                {learningProgress.completed} of{" "}
                {learningProgress.total} lessons completed
              </span>

              <span>{progress}%</span>

            </div>

          </div>

          {/* Statistics */}

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-purple-100 bg-purple-50 p-6">

              <Flame className="h-10 w-10 text-orange-500" />

              <h3 className="mt-5 text-3xl font-bold">
                {learningProgress.streak}
              </h3>

              <p className="mt-2 text-gray-600">
                Day Learning Streak
              </p>

            </div>

            <div className="rounded-3xl border border-purple-100 bg-pink-50 p-6">

              <Trophy className="h-10 w-10 text-pink-600" />

              <h3 className="mt-5 text-3xl font-bold">
                {learningProgress.certificates}
              </h3>

              <p className="mt-2 text-gray-600">
                Certificates Earned
              </p>

            </div>

            <div className="rounded-3xl border border-purple-100 bg-green-50 p-6">

              <Target className="h-10 w-10 text-green-600" />

              <h3 className="mt-5 text-3xl font-bold">
                {learningProgress.total -
                  learningProgress.completed}
              </h3>

              <p className="mt-2 text-gray-600">
                Lessons Remaining
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="rounded-3xl border border-purple-100 bg-gray-50 p-8">

          <h3 className="text-2xl font-bold text-slate-900">
            Achievements
          </h3>

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">

              <CheckCircle2 className="h-7 w-7 text-green-600" />

              <div>

                <p className="font-semibold">
                  First Lesson Completed
                </p>

                <p className="text-sm text-gray-500">
                  Achievement unlocked
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <CheckCircle2 className="h-7 w-7 text-green-600" />

              <div>

                <p className="font-semibold">
                  7-Day Learning Streak
                </p>

                <p className="text-sm text-gray-500">
                  Achievement unlocked
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <Lock className="h-7 w-7 text-gray-400" />

              <div>

                <p className="font-semibold text-gray-500">
                  75% Course Completion
                </p>

                <p className="text-sm text-gray-400">
                  Locked
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <Lock className="h-7 w-7 text-gray-400" />

              <div>

                <p className="font-semibold text-gray-500">
                  Maternal Champion
                </p>

                <p className="text-sm text-gray-400">
                  Complete all lessons
                </p>

              </div>

            </div>

          </div>

          {/* Next Goal */}

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 p-6 text-white">

            <h4 className="font-bold">
              Next Milestone
            </h4>

            <p className="mt-3 leading-7 text-purple-100">
              Reach{" "}
              <span className="font-bold text-white">
                {nextMilestone}%
              </span>{" "}
              completion to unlock advanced pregnancy preparation
              lessons.
            </p>

            <button
              disabled
              className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-purple-700 opacity-90"
            >
              Continue Learning

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}