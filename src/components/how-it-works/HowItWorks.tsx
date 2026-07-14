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
      icon: <Building2 className="h-7 w-7" />,
      phoneType: "hospital" as const,
    },
    {
      number: 2,
      title: "Set Your Savings Goal",
      description:
        "Mama Sure calculates how much you need to save based on your selected maternity package.",
      icon: <Wallet className="h-7 w-7" />,
      phoneType: "goal" as const,
    },
    {
      number: 3,
      title: "Contribute Easily",
      description:
        "Save consistently through flexible M-Pesa payments that fit your monthly budget.",
      icon: <CreditCard className="h-7 w-7" />,
      phoneType: "payment" as const,
    },
    {
      number: 4,
      title: "Track Your Progress",
      description:
        "Monitor every contribution and watch your maternity fund grow with real-time updates.",
      icon: <LineChart className="h-7 w-7" />,
      phoneType: "progress" as const,
    },
    {
      number: 5,
      title: "Learn Along the Journey",
      description:
        "Receive trusted maternal health education, reminders, and preparation tips personalized to your stage.",
      icon: <BookOpen className="h-7 w-7" />,
      phoneType: "education" as const,
    },
    {
      number: 6,
      title: "Welcome Your Baby Confidently",
      description:
        "When the time comes, you'll be financially prepared and ready to focus on what truly matters.",
      icon: <CheckCircle2 className="h-7 w-7" />,
      phoneType: "success" as const,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/30 via-white to-pink-50/20 py-32">

      {/* Background Decorations */}

      <div className="absolute -top-52 left-0 h-[500px] w-[500px] rounded-full bg-purple-200/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-pink-200/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-8">

        {/* Badge */}

        <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-purple-100 px-6 py-3">

          <Sparkles className="h-5 w-5 text-purple-700" />

          <span className="font-medium text-purple-700">
            How Mama Sure Works
          </span>

        </div>

        {/* Heading */}

        <h2 className="mx-auto mt-8 max-w-4xl text-center text-5xl font-extrabold leading-tight md:text-6xl">

          Preparing for Motherhood

          <span className="block text-pink-500">
            Has Never Been This Simple
          </span>

        </h2>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-gray-600">

          From choosing your preferred hospital to saving consistently and
          accessing trusted maternal guidance, Mama Sure supports you every
          step of the way.

        </p>

        {/* Timeline */}

        <div className="relative mt-20 hidden lg:block">

          <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300" />

        </div>

        {/* Cards */}

        <div className="relative mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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

        <div className="mt-24 overflow-hidden rounded-[36px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-[1px] shadow-[0_25px_80px_rgba(124,58,237,0.20)]">

          <div className="rounded-[35px] bg-white p-10">

            <div className="grid items-center gap-10 lg:grid-cols-[100px_1fr_auto]">

              {/* Icon */}

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">

                <ShieldCheck className="h-12 w-12 text-purple-700" />

              </div>

              {/* Content */}

              <div>

                <h3 className="text-3xl font-bold text-slate-900">

                  Your Journey. Our Technology.

                </h3>

                <p className="mt-4 text-lg leading-8 text-gray-600">

                  Mama Sure helps you plan early, save consistently,
                  receive trusted health information, and prepare for one of
                  life's most important milestones with confidence.

                </p>

              </div>

              {/* Features */}

              <div className="space-y-3">

                {[
                  "Trusted Hospitals",
                  "Flexible Savings",
                  "Secure Payments",
                  "Health Education",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-full bg-purple-50 px-5 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-purple-700" />

                    <span className="font-medium text-slate-700">
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