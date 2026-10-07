"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { createScope, createTimeline, stagger } from "animejs";
import {
  BookOpen,
  Building2,
  CheckCircle2,
  CreditCard,
  LineChart,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

import StepCard from "./StepCard";
import type { PhoneType } from "./MiniPhoneCard";
import { qsa, usePrefersReducedMotion } from "./motion";

const ICON = "h-6 w-6 sm:h-7 sm:w-7";

/* Hidden until revealed; `motion-reduce` keeps it visible without JS. */
const REVEAL = "opacity-0 will-change-transform motion-reduce:opacity-100";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  phoneType: PhoneType;
}

const STEPS: readonly Step[] = [
  {
    number: 1,
    title: "Choose your hospital",
    description:
      "Browse maternity hospitals and compare their delivery packages before making a decision.",
    icon: <Building2 className={ICON} />,
    phoneType: "hospital",
  },
  {
    number: 2,
    title: "Set your savings goal",
    description:
      "Mama Sure calculates how much you need to save based on your selected maternity package.",
    icon: <Wallet className={ICON} />,
    phoneType: "goal",
  },
  {
    number: 3,
    title: "Contribute easily",
    description:
      "Save consistently through flexible M-Pesa payments that fit your monthly budget.",
    icon: <CreditCard className={ICON} />,
    phoneType: "payment",
  },
  {
    number: 4,
    title: "Track your progress",
    description:
      "Monitor every contribution and watch your maternity fund grow with real-time updates.",
    icon: <LineChart className={ICON} />,
    phoneType: "progress",
  },
  {
    number: 5,
    title: "Learn along the journey",
    description:
      "Receive trusted maternal health education, reminders, and preparation tips personalised to your stage.",
    icon: <BookOpen className={ICON} />,
    phoneType: "education",
  },
  {
    number: 6,
    title: "Welcome your baby confidently",
    description:
      "When the time comes, you'll be financially prepared and ready to focus on what truly matters.",
    icon: <CheckCircle2 className={ICON} />,
    phoneType: "success",
  },
];

const FEATURES = [
  "Hospital Comparison",
  "Flexible Savings",
  "Secure Payments",
  "Health Education",
] as const;

/* ---------------------------------------------------------
   Staggered slide-up reveal for every [data-reveal] inside
   `ref`, fired once by an IntersectionObserver.
--------------------------------------------------------- */

function useRevealOnView(
  ref: RefObject<HTMLElement | null>,
  reduced: boolean,
  threshold = 0.2,
): void {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = qsa(root, "[data-reveal]");

    if (reduced) {
      items.forEach((el) => {
        el.style.opacity = "1";
      });
      return () => {
        items.forEach((el) => {
          el.style.opacity = "";
        });
      };
    }

    const scope = createScope({ root });
    let played = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || played) return;
        played = true;
        io.disconnect();

        scope.add(() => {
          const tl = createTimeline({
            defaults: { ease: "outCubic" },
            onComplete: () => {
              items.forEach((el) => {
                el.style.willChange = "auto";
              });
            },
          });

          tl.add(
            items,
            {
              opacity: [0, 1],
              translateY: [28, 0],
              duration: 800,
              delay: stagger(110),
            },
            0,
          );
        });
      },
      { threshold },
    );

    io.observe(root);

    return () => {
      io.disconnect();
      scope.revert();
    };
  }, [ref, reduced, threshold]);
}

export default function HowItWorks() {
  const reduced = usePrefersReducedMotion();

  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useRevealOnView(headerRef, reduced, 0.25);
  useRevealOnView(footerRef, reduced, 0.2);

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-pink-50/40 py-14 sm:scroll-mt-28 sm:py-20 lg:py-28"
    >
      {/* Background decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-52 left-0 h-[300px] w-[300px] rounded-full bg-purple-300/25 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-pink-300/25 blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div ref={headerRef}>
          {/* Badge */}
          <div
            data-reveal
            className={`mx-auto flex w-fit items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 ${REVEAL}`}
          >
            <Sparkles className="h-4 w-4 shrink-0 text-purple-700" />
            <span className="text-sm font-semibold text-purple-700">
              How Mama Sure works
            </span>
          </div>

          {/* Heading */}
          <h2 className="mx-auto mt-6 max-w-4xl text-center text-[clamp(2rem,6.4vw,3.9rem)] font-extrabold leading-[1.05] tracking-[-0.035em] sm:mt-8">
            <span data-reveal className={`block text-slate-900 ${REVEAL}`}>
              Preparing for motherhood
            </span>
            <span data-reveal className={`block text-[#D80A68] ${REVEAL}`}>
              has never been this simple.
            </span>
          </h2>

          <p
            data-reveal
            className={`mx-auto mt-5 max-w-2xl text-center text-[16px] leading-[1.7] text-gray-600 sm:mt-7 sm:text-lg ${REVEAL}`}
          >
            From choosing your preferred hospital to saving consistently and
            accessing trusted maternal guidance, Mama Sure supports you every
            step of the way.
          </p>
        </div>

        {/* =====================================================
            STEPS (each card runs its own entrance when it scrolls in)
            mobile : single column
            tablet : 2 columns
            laptop : 3 columns
        ====================================================== */}
        <ol className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {STEPS.map((step, i) => (
            <StepCard
              key={step.number}
              index={i}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              phoneType={step.phoneType}
            />
          ))}
        </ol>

        {/* =====================================================
            FOOTER
        ====================================================== */}
        <div ref={footerRef}>
          <p
            data-reveal
            className={`mt-8 text-center text-[13px] text-gray-500 ${REVEAL}`}
          >
            App screens are illustrative examples.
          </p>

          {/* Glass banner with a gradient hairline border */}
          <div
            data-reveal
            className={`relative mt-10 overflow-hidden rounded-[28px] bg-white/60 shadow-[0_25px_80px_rgba(124,58,237,0.15)] backdrop-blur-xl sm:mt-14 lg:rounded-[36px] ${REVEAL}`}
          >
            {/* Colour behind the glass */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-purple-400/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-pink-400/30 blur-3xl"
            />

            {/* Gradient border (masked so the glass stays see-through) */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-px"
              style={{
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                maskComposite: "exclude",
              }}
            />

            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-100 sm:h-20 sm:w-20 lg:mx-0 lg:h-24 lg:w-24">
                  <ShieldCheck className="h-8 w-8 text-purple-700 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Your journey. Our technology.
                  </h3>
                  <p className="mx-auto mt-3 max-w-[56ch] text-[16px] leading-[1.7] text-gray-600 sm:text-lg lg:mx-0">
                    Mama Sure helps you plan early, save consistently, receive
                    trusted health information, and prepare for one of
                    life&apos;s most important milestones with confidence.
                  </p>
                </div>

                {/* Features */}
                <ul className="grid w-full grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:flex lg:w-auto lg:flex-col">
                  {FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center justify-center gap-2 rounded-full bg-purple-50/80 px-3 py-2.5 sm:px-4 lg:justify-start lg:px-5 lg:py-3"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-purple-700 sm:h-5 sm:w-5" />
                      <span className="text-[12.5px] font-medium text-slate-700 sm:text-sm lg:whitespace-nowrap">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
