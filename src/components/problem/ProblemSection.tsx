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
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-pink-50/30 py-28">
  
        {/* Decorative Background */}
  
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />
  
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-pink-200/20 blur-3xl" />
  
        <div className="relative mx-auto max-w-7xl px-8">
  
          {/* Badge */}
  
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-pink-100 px-6 py-3">
  
            <AlertCircle className="h-5 w-5 text-pink-600" />
  
            <span className="font-medium text-pink-600">
              The Problem
            </span>
  
          </div>
  
          {/* Heading */}
  
          <h2 className="mx-auto mt-8 max-w-4xl text-center text-6xl font-extrabold leading-tight">
  
            <span className="text-slate-900">
              Motherhood Shouldn't
            </span>
  
            <br />
  
            <span className="text-pink-500">
              Begin With Financial Stress
            </span>
  
          </h2>
  
          <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-gray-600">
  
            Every year, thousands of Kenyan families struggle to afford
            quality maternity care. The challenges are real—and they
            usually begin when it's already too late to prepare.
  
          </p>
  
          {/* Data Pill */}
  
          <div className="mt-14 flex justify-center">
  
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-6 py-3 shadow-sm">
  
              <span className="text-lg">📊</span>
  
              <span className="text-sm font-semibold text-purple-700">
                Real challenge • Real data • Real families
              </span>
  
            </div>
  
          </div>
  
          {/* Cards */}
  
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
  
            <ProblemCard
              image="/problem-cost.jpg"
              title="Unexpected Costs"
              description="Delivery, antenatal care, emergencies and newborn expenses often arrive without adequate financial preparation."
              footer="Costs can exceed KES 100,000"
              footerColor="bg-purple-100 text-purple-700"
              statistic="KES 100K+"
              statisticLabel="Average private maternity journey"
              icon={<Coins className="h-8 w-8 text-purple-700" />}
            />
  
            <ProblemCard
              image="/problem-hospital.jpg"
              title="Difficult Decisions"
              description="Many families delay treatment or settle for lower-quality healthcare simply because finances become a barrier."
              footer="Care should never be compromised"
              footerColor="bg-pink-100 text-pink-600"
              statistic="26%"
              statisticLabel="Healthcare costs paid out-of-pocket"
              icon={<Hospital className="h-8 w-8 text-pink-600" />}
            />
  
            <ProblemCard
              image="/problem-family.jpg"
              title="Emotional & Financial Strain"
              description="Loans, fundraising and financial uncertainty create unnecessary stress during one of life's most important journeys."
              footer="Stress affects both mother and baby"
              footerColor="bg-purple-100 text-purple-700"
              statistic="75%"
              statisticLabel="Families would prepare with a trusted platform"
              icon={<HeartHandshake className="h-8 w-8 text-purple-700" />}
            />
  
          </div>
  
          {/* Insight Card */}
  
          <div className="mt-24 overflow-hidden rounded-[36px] border border-purple-100 bg-white/90 p-10 shadow-[0_20px_60px_rgba(108,74,182,0.08)] backdrop-blur">
  
            <div className="grid items-center gap-10 lg:grid-cols-[120px_1fr_1px_340px]">
  
              {/* Icon */}
  
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-700 shadow-lg">
  
                <Lightbulb className="h-10 w-10 text-white" />
  
              </div>
  
              {/* Content */}
  
              <div>
  
                <h3 className="text-3xl font-bold text-purple-700">
  
                  The Insight
  
                </h3>
  
                <p className="mt-4 text-lg leading-8 text-gray-600">
  
                  Families already want to prepare for pregnancy.
                  What’s missing is a structured, trusted and affordable
                  way to plan ahead <strong>before pregnancy begins.</strong>
  
                </p>
  
              </div>
  
              {/* Divider */}
  
              <div className="hidden h-full w-px bg-gray-200 lg:block" />
  
              {/* CTA */}
  
              <div>
  
                <div className="flex items-center gap-5">
  
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
  
                    <HeartHandshake className="h-8 w-8 text-pink-600" />
  
                  </div>
  
                  <div>
  
                    <p className="text-xl font-bold text-slate-900">
                      That's why we built
                    </p>
  
                    <p className="text-3xl font-extrabold text-pink-500">
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