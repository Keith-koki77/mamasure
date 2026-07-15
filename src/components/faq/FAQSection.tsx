"use client";

import Image from "next/image";
import { Heart, HelpCircle } from "lucide-react";

import { faqs } from "./faq";
import FAQItem from "./FAQItem";
import WaitlistForm from "./WaitlistForm";

export default function FAQSection() {
  return (
    <section id="faqs" className="scroll-mt-28 relative overflow-hidden bg-gradient-to-b from-white to-purple-50/30 py-28">

      {/* Decorative Elements */}

      <div className="absolute left-14 top-28 grid grid-cols-5 gap-4 opacity-20">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="h-2.5 w-2.5 rounded-full bg-purple-400"
          />
        ))}
      </div>

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full border border-pink-200 opacity-60" />

      <div className="absolute right-20 top-52 flex h-20 w-20 items-center justify-center rounded-full border border-pink-100 bg-white shadow-xl">
        <Heart className="h-9 w-9 fill-pink-500 text-pink-500" />
      </div>

      <div className="mx-auto max-w-7xl px-8">

        {/* Badge */}

        <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-pink-100 px-6 py-3">

          <HelpCircle className="h-5 w-5 text-pink-500" />

          <span className="font-semibold text-pink-600">
            Got Questions? We've Got Answers.
          </span>

        </div>

        {/* Heading */}

        <h2 className="mx-auto mt-8 max-w-5xl text-center text-5xl font-extrabold leading-tight md:text-7xl">

          <span className="text-slate-900">
            Frequently Asked Questions
          </span>

          <br />

          <span className="bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
            Everything You Need to Know
          </span>

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-gray-600">
          We're here to make your motherhood planning journey simple,
          affordable and stress-free. Find answers to the questions most
          future mothers ask before getting started.
        </p>

        {/* Main Grid */}

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          {/* FAQ */}

          <div className="space-y-6">

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

            <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-br from-pink-100 via-purple-50 to-transparent" />

            <Image
              src="/pregnant-mother-faq.png"
              alt="Future mother"
              width={520}
              height={700}
              className="relative z-10 object-contain"
            />

          </div>

        </div>

        {/* Waitlist Banner */}

        <div className="mt-24">
          <WaitlistForm />
        </div>

      </div>

    </section>
  );
}