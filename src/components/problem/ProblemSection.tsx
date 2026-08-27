import {
  AlertCircle,
  Coins,
  HeartHandshake,
  Hospital,
  Lightbulb,
} from "lucide-react";

import ProblemCard from "./ProblemCard";

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-pink-50/30 py-12 sm:py-20 lg:py-28">
      {/* Decorative Background */}
      <div className="absolute -left-40 -top-40 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-purple-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-pink-200/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-pink-100 px-4 py-2 sm:px-6 sm:py-3">
          <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-pink-600 shrink-0" />
          <span className="text-xs sm:text-sm font-medium text-pink-600">
            The Problem
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-6 sm:mt-8 max-w-4xl text-center text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="text-slate-900 block sm:inline">Motherhood Shouldn't </span>
          <span className="text-pink-500 block sm:inline">Begin With Financial Stress</span>
        </h2>

        {/* Paragraphs */}
        <div className="mx-auto mt-6 sm:mt-8 max-w-3xl space-y-4 text-center text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
          <p>
            Maternity care can be expensive, unpredictable and difficult to plan
            for. Too often, families only start thinking about the cost when
            pregnancy is already underway and the need for care is immediate.
          </p>
          <p className="font-medium text-slate-800">
            Mama Sure helps you plan ahead—financially and practically—so you
            can approach motherhood with greater confidence and peace of mind.
          </p>
        </div>

        {/* Data Pill */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white/80 px-4 py-2 sm:px-6 sm:py-3 shadow-sm backdrop-blur">
            <span className="text-base sm:text-lg">📊</span>
            <span className="text-xs sm:text-sm font-semibold text-purple-700">
              Real challenge • Real data • Real families
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <ProblemCard
            image="/problem-cost.jpg"
            title="Unexpected Costs"
            description="Delivery, antenatal care, emergencies and newborn expenses often arrive without adequate financial preparation."
            footer="Costs can exceed KES 100,000"
            footerColor="bg-purple-100 text-purple-700"
            statistic="KES 100K+"
            statisticLabel="Average private maternity journey"
            icon={<Coins className="h-7 w-7 sm:h-8 sm:w-8 text-purple-700" />}
          />

          <ProblemCard
            image="/problem-hospital.jpg"
            title="Difficult Decisions"
            description="Many families delay treatment or settle for lower-quality healthcare simply because finances become a barrier."
            footer="Care should never be compromised"
            footerColor="bg-pink-100 text-pink-600"
            statistic="26%"
            statisticLabel="Healthcare costs paid out-of-pocket"
            icon={<Hospital className="h-7 w-7 sm:h-8 sm:w-8 text-pink-600" />}
          />

          <ProblemCard
            image="/problem-family.jpg"
            title="Emotional & Financial Strain"
            description="Loans, fundraising and financial uncertainty create unnecessary stress during one of life's most important journeys."
            footer="Stress affects both mother and baby"
            footerColor="bg-purple-100 text-purple-700"
            statistic="75%"
            statisticLabel="Families would prepare with a trusted platform"
            icon={<HeartHandshake className="h-7 w-7 sm:h-8 sm:w-8 text-purple-700" />}
          />
        </div>

        {/* Insight Card */}
        <div className="mt-16 sm:mt-24 overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[36px] border border-purple-100 bg-white/90 p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(108,74,182,0.08)] backdrop-blur">
          <div className="flex flex-col lg:grid lg:grid-cols-[100px_1fr_1px_auto] items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Icon */}
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 shrink-0 items-center justify-center rounded-full bg-purple-700 shadow-lg">
              <Lightbulb className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-700">
                The Insight
              </h3>
              <p className="mt-2 sm:mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
                Families want to be ready for motherhood. What’s missing is a
                simple, trusted and affordable way to start planning
                financially <strong className="text-slate-900">before pregnancy begins.</strong>
              </p>
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-full w-px bg-gray-200" />
            <div className="block lg:hidden w-full h-px bg-gray-200 my-2" />

            {/* CTA */}
            <div className="w-full lg:w-auto">
              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5">
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-pink-100">
                  <HeartHandshake className="h-6 w-6 sm:h-8 sm:w-8 text-pink-600" />
                </div>

                <div>
                  <p className="text-base sm:text-xl font-bold text-slate-900">
                    That's why we built
                  </p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-pink-500">
                    Mama Sure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}