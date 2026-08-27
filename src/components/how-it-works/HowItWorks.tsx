"use client";

import {
  Building2,
  Wallet,
  CreditCard,
  LineChart,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import StepCard from "./StepCard";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Choose Your Hospital",
      description:
        "Browse trusted maternity hospitals and compare their delivery packages before making a decision.",
      icon: <Building2 className="h-6 w-6 sm:h-7 sm:w-7" />,
      phoneType: "hospital" as const,
    },
    {
      number: 2,
      title: "Set Your Savings Goal",
      description:
        "Mama Sure calculates how much you need to save based on your selected maternity package.",
      icon: <Wallet className="h-6 w-6 sm:h-7 sm:w-7" />,
      phoneType: "goal" as const,
    },
    {
      number: 3,
      title: "Contribute Easily",
      description:
        "Save consistently through flexible M-Pesa payments that fit your monthly budget.",
      icon: <CreditCard className="h-6 w-6 sm:h-7 sm:w-7" />,
      phoneType: "payment" as const,
    },
    {
      number: 4,
      title: "Track Your Progress",
      description:
        "Monitor every contribution and watch your maternity fund grow with real-time updates.",
      icon: <LineChart className="h-6 w-6 sm:h-7 sm:w-7" />,
      phoneType: "progress" as const,
    },
    {
      number: 5,
      title: "Learn Along the Journey",
      description:
        "Receive trusted maternal health education, reminders, and preparation tips personalized to your stage.",
      icon: <BookOpen className="h-6 w-6 sm:h-7 sm:w-7" />,
      phoneType: "education" as const,
    },
    {
      number: 6,
      title: "Welcome Your Baby Confidently",
      description:
        "When the time comes, you'll be financially prepared and ready to focus on what truly matters.",
      icon: <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7" />,
      phoneType: "success" as const,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="scroll-mt-16 sm:scroll-mt-28 relative overflow-hidden bg-gradient-to-b from-purple-50/30 via-white to-pink-50/20 py-12 sm:py-20 lg:py-32"
    >
      {/* Background Decorations */}
      <div className="absolute -top-52 left-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-purple-200/20 blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-pink-200/20 blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-purple-100 px-4 py-2 sm:px-6 sm:py-3">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-purple-700 shrink-0" />
          <span className="text-xs sm:text-sm font-medium text-purple-700">
            How Mama Sure Works
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-6 sm:mt-8 max-w-4xl text-center text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="text-slate-900 block sm:inline">Preparing for Motherhood </span>
          <span className="block sm:inline text-pink-500">
            Has Never Been This Simple
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 sm:mt-8 max-w-3xl text-center text-base sm:text-lg lg:text-xl leading-relaxed text-white">
          From choosing your preferred hospital to saving consistently and
          accessing trusted maternal guidance, Mama Sure supports you every
          step of the way.
        </p>

        {/* Cards Grid */}
        <div className="relative mt-10 sm:mt-16 lg:mt-20 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              phoneType={step.phoneType}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 sm:mt-24 overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[36px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-[1px] shadow-[0_25px_80px_rgba(124,58,237,0.15)]">
          <div className="rounded-[15px] sm:rounded-[23px] lg:rounded-[35px] bg-white p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:grid lg:grid-cols-[80px_1fr_auto] items-center gap-6 sm:gap-8 lg:gap-10">
              {/* Icon */}
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 shrink-0 items-center justify-center rounded-full bg-purple-100">
                <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-purple-700" />
              </div>

              {/* Content */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Your Journey. Our Technology.
                </h3>
                <p className="mt-2 sm:mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
                  Mama Sure helps you plan early, save consistently,
                  receive trusted health information, and prepare for one of
                  life's most important milestones with confidence.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-col gap-2.5 sm:gap-3 w-full lg:w-auto">
                {[
                  "Trusted Hospitals",
                  "Flexible Savings",
                  "Secure Payments",
                  "Health Education",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center justify-center lg:justify-start gap-2.5 rounded-full bg-purple-50 px-4 py-2.5 sm:px-5 sm:py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-purple-700 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}