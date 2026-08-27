"use client";

import Image from "next/image";
import { Heart, HelpCircle } from "lucide-react";

import { faqs } from "./faq";
import FAQItem from "./FAQItem";
import WaitlistForm from "./WaitlistForm";

export default function FAQSection() {
  return (
    <section
      id="faqs"
      className="scroll-mt-16 sm:scroll-mt-28 relative overflow-hidden bg-gradient-to-b from-white to-purple-50/30 py-12 sm:py-20 lg:py-28"
    >
      {/* Decorative Elements */}
      <div className="absolute left-6 sm:left-14 top-16 sm:top-28 hidden xl:grid grid-cols-5 gap-4 opacity-20 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="h-2.5 w-2.5 rounded-full bg-purple-400"
          />
        ))}
      </div>

      <div className="absolute right-0 top-0 h-48 w-48 sm:h-72 sm:w-72 rounded-full border border-pink-200 opacity-60 pointer-events-none" />

      <div className="absolute right-4 sm:right-20 top-32 sm:top-52 hidden sm:flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-pink-100 bg-white shadow-xl pointer-events-none">
        <Heart className="h-6 w-6 sm:h-9 sm:w-9 fill-pink-500 text-pink-500" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-pink-100 px-4 py-2 sm:px-6 sm:py-3 text-center shadow-sm">
          <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-pink-600">
            Got Questions? We've Got Answers.
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-6 sm:mt-8 max-w-5xl text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          <span className="text-slate-900 block sm:inline">
            Frequently Asked Questions
          </span>
          <span className="mt-1 sm:mt-2 block bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
            Everything You Need to Know
          </span>
        </h2>

        <p className="mx-auto mt-4 sm:mt-8 max-w-3xl text-center text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
          We're here to make your motherhood planning journey simple,
          affordable and stress-free. Find answers to the questions most
          future mothers ask before getting started.
        </p>

        {/* Main Grid */}
        <div className="mt-10 sm:mt-16 lg:mt-20 grid items-center gap-8 lg:gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          {/* FAQ List */}
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                icon={faq.icon}
                question={faq.question}
                answer={faq.answer}
                color={faq.color}
                defaultOpen={index === 0}
              />
            ))}
          </div>

          {/* Mother Image */}
          <div className="relative hidden justify-center lg:flex">
            <div className="absolute h-[400px] w-[400px] lg:h-[520px] lg:w-[520px] rounded-full bg-gradient-to-br from-pink-100 via-purple-50 to-transparent" />
            <Image
              src="/pregnant-mother-faq.png"
              alt="Future mother"
              width={520}
              height={700}
              className="relative z-10 object-contain max-w-full h-auto"
            />
          </div>
        </div>

        {/* Waitlist Banner */}
        <div className="mt-12 sm:mt-20 lg:mt-24">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}