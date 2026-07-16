"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

import { faqs } from "@/data/education";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-2 text-gray-500">
            Answers to common questions expectant mothers ask throughout
            their pregnancy journey.
          </p>

        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">

          <HelpCircle className="h-8 w-8 text-purple-700" />

        </div>

      </div>

      {/* FAQ Items */}

      <div className="mt-10 space-y-5">

        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="overflow-hidden rounded-3xl border border-purple-100 transition-all duration-300"
            >

              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex w-full items-center justify-between bg-white px-7 py-6 text-left transition hover:bg-purple-50"
              >

                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-6 w-6 text-purple-700 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />

              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >

                <div className="overflow-hidden">

                  <div className="border-t border-purple-100 bg-purple-50 px-7 py-6">

                    <p className="leading-8 text-gray-700">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Bottom Banner */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 text-white">

        <h3 className="text-2xl font-bold">
          Didn't Find Your Answer?
        </h3>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-purple-100">
          Every pregnancy is unique. If your question isn't covered here,
          consult your healthcare provider during your next antenatal visit
          or contact your maternity care team for personalized advice.
        </p>

        <button
          disabled
          className="mt-8 rounded-2xl bg-white px-6 py-4 font-semibold text-purple-700 opacity-90"
        >
          Ask an Expert
        </button>

      </div>

    </section>
  );
}