"use client";

import Image from "next/image";
import { useState } from "react";
import { HelpCircle, Info } from "lucide-react";

import FAQItem from "./FAQItem";
import { FAQ_GROUPS, faqs } from "./faq"; 
import WaitlistForm from "./WaitlistForm";

export default function FAQSection() {
  // One answer open at a time. Start with the first question.
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null);

  return (
    <section
      id="faqs"
      className="relative scroll-mt-16 overflow-hidden bg-[#FBF4FC] py-14 sm:scroll-mt-28 sm:py-20 lg:py-28"
      // Lighter sibling of the hero surface, same lavender glows
      style={{
        backgroundImage:
          "radial-gradient(900px 600px at 0% 0%, #F3E4F4 0%, transparent 60%), radial-gradient(700px 500px at 100% 55%, #F3E4F4 0%, transparent 70%)",
      }}
    >
      {/* Dotted texture, as in the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(169,20,199,0.16) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 45%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,4.5fr)_minmax(0,7.5fr)] lg:gap-16 xl:gap-24">
          {/* ---------------- Left: sticky intro ---------------- */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex w-fit items-center gap-2 rounded-full border border-white bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
              <HelpCircle className="h-4 w-4 shrink-0 text-pink-500" />
              <span className="text-sm font-semibold text-pink-600">
                Got questions? We&apos;ve got answers.
              </span>
            </div>

            <h2 className="mt-6 text-[clamp(2.1rem,6vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em] sm:mt-8">
              <span className="block text-slate-900">
                Frequently asked questions
              </span>
              <span className="block text-[#D80A68]">
                Everything you need to know.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-slate-700 sm:mt-7 sm:text-lg">
              We&apos;re here to make your motherhood planning journey simple,
              affordable and stress-free. Find answers to the questions most
              future mothers ask before getting started.
            </p>

            {/* Illustration (desktop only, height-capped so sticky always fits) */}
           
          </div>

          {/* ---------------- Right: grouped accordion ---------------- */}
          <div className="space-y-12 sm:space-y-14">
            {FAQ_GROUPS.map((group) => {
              const items = faqs.filter((f) => f.group === group.id);

              return (
                <div key={group.id}>
                  <h3 className="mb-2 flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.14em] text-[#A914C7]">
                    <span
                      aria-hidden
                      className="h-2 w-2 rounded-full bg-[#D80A68]"
                    />
                    {group.title}
                  </h3>

                  {group.note && (
                    <p className="mb-4 mt-3 flex gap-3 border-l-2 border-[#D80A68] pl-4 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                      <Info
                        aria-hidden
                        className="mt-0.5 hidden h-4 w-4 shrink-0 text-[#D80A68] sm:block"
                      />
                      <span>{group.note}</span>
                    </p>
                  )}

                  <div className="mt-2">
                    {items.map((faq) => (
                      <FAQItem
                        key={faq.id}
                        id={faq.id}
                        icon={faq.icon}
                        question={faq.question}
                        answer={faq.answer}
                        color={faq.color}
                        status={faq.status}
                        isOpen={openId === faq.id}
                        onToggle={() =>
                          setOpenId(openId === faq.id ? null : faq.id)
                        }
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- Waitlist ---------------- */}
        <div className="mt-16 sm:mt-24 lg:mt-28">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}