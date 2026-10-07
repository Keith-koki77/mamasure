"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Coins,
  HeartHandshake,
  Hospital,
  Lightbulb,
} from "lucide-react";
import { animate, createScope, stagger } from "animejs";

import ProblemCard from "./ProblemCard";

const SIGNUP_URL = "https://surveymars.com/q/NCVBi4nlK";

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setIsVisible(true);

      animate("[data-problem-reveal]", {
        opacity: 1,
        translateY: 0,
        duration: 0,
      });

      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setIsVisible(true);
        observer.disconnect();

        scopeRef.current = createScope({
          root: section,
        }).add(() => {
          const timeline = animate(
            "[data-problem-badge], [data-problem-heading], [data-problem-copy], [data-problem-tagline]",
            {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 700,
              delay: stagger(100),
              ease: "outCubic",
            },
          );

          return timeline;
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      scopeRef.current?.revert();
      scopeRef.current = null;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-purple-50/40
        to-pink-50/40
        py-14
        sm:py-20
        lg:py-28
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-72
          w-72
          rounded-full
          bg-purple-300/25
          blur-3xl
          sm:h-96
          sm:w-96
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-pink-300/25
          blur-3xl
          sm:h-[450px]
          sm:w-[450px]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-purple-200/10
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="text-center">

          {/* Badge */}
          <div
            data-problem-reveal
            data-problem-badge
            className="
              mx-auto
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-pink-200
              bg-pink-50
              px-4
              py-2
              opacity-0
              will-change-transform
            "
          >
            <AlertCircle
              className="h-4 w-4 shrink-0 text-pink-600"
              strokeWidth={2}
            />

            <span className="text-sm font-semibold text-pink-600">
              The problem
            </span>
          </div>

          {/* Heading */}
          <h2
            data-problem-reveal
            data-problem-heading
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-center
              text-[clamp(2rem,6.4vw,3.9rem)]
              font-extrabold
              leading-[1.05]
              tracking-[-0.035em]
              opacity-0
              will-change-transform
              sm:mt-8
            "
          >
            <span className="block text-slate-900">
              Motherhood shouldn&apos;t
            </span>

            <span className="block text-[#D80A68]">
              begin with financial stress.
            </span>
          </h2>

          {/* Copy */}
          <div
            data-problem-reveal
            data-problem-copy
            className="
              mx-auto
              mt-6
              max-w-2xl
              space-y-4
              text-center
              text-[16px]
              leading-[1.7]
              text-gray-600
              opacity-0
              will-change-transform
              sm:mt-8
              sm:text-lg
            "
          >
            <p>
              Maternity care can be expensive, unpredictable and difficult to
              plan for. Too often, families only start thinking about the cost
              when pregnancy is already underway and the need for care is
              immediate.
            </p>

            <p className="font-medium text-slate-800">
              Mama Sure helps you plan ahead, financially and practically, so
              you can approach motherhood with greater confidence and peace of
              mind.
            </p>
          </div>

          {/* Tagline */}
          <p
            data-problem-reveal
            data-problem-tagline
            className="
              mt-6
              text-center
              text-sm
              font-medium
              text-purple-700
              opacity-0
              will-change-transform
            "
          >
            Real challenge. Real data. Real families.
          </p>
        </div>

        {/* ===================================================
            PROBLEM CARDS
        ==================================================== */}

        <div
          className="
            -mx-4
            mt-10
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            px-4
            pb-6
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:-mx-6
            sm:mt-14
            sm:px-6
            lg:mx-0
            lg:grid
            lg:grid-cols-3
            lg:gap-8
            lg:overflow-visible
            lg:px-0
            lg:pb-0
          "
        >
          <ProblemCard
            icon={<Coins className="h-6 w-6 text-purple-700 sm:h-7 sm:w-7" />}
            image="/problem-cost.jpg"
            statistic="KES 100K+"
            statisticValue={100}
            statisticPrefix="KES "
            statisticSuffix="K+"
            statisticLabel="Average private maternity journey"
            title="Unexpected costs"
            description="Delivery, antenatal care, emergencies and newborn expenses often arrive without adequate financial preparation."
            footer="Costs can exceed KES 100,000"
            footerColor="bg-purple-100 text-purple-700"
          />

          <ProblemCard
            icon={<Hospital className="h-6 w-6 text-pink-600 sm:h-7 sm:w-7" />}
            image="/problem-hospital.jpg"
            statistic="26%"
            statisticValue={26}
            statisticSuffix="%"
            statisticLabel="Healthcare costs paid out-of-pocket"
            title="Difficult decisions"
            description="Many families delay treatment or settle for lower-quality healthcare simply because finances become a barrier."
            footer="Care should never be compromised"
            footerColor="bg-pink-100 text-pink-600"
          />

          <ProblemCard
            icon={
              <HeartHandshake className="h-6 w-6 text-purple-700 sm:h-7 sm:w-7" />
            }
            image="/problem-family.jpg"
            statistic="75%"
            statisticValue={75}
            statisticSuffix="%"
            statisticLabel="Families would prepare with a trusted platform"
            title="Emotional & financial strain"
            description="Loans, fundraising and financial uncertainty create unnecessary stress during one of life's most important journeys."
            footer="Stress affects both mother and baby"
            footerColor="bg-purple-100 text-purple-700"
          />
        </div>

        {/* ===================================================
            INSIGHT BANNER
        ==================================================== */}

        <InsightBanner isVisible={isVisible} />
      </div>
    </section>
  );
}

/* ===========================================================
   INSIGHT BANNER
=========================================================== */

function InsightBanner({
  isVisible,
}: {
  isVisible: boolean;
}) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  useEffect(() => {
    if (!isVisible || !bannerRef.current) return;

    const banner = bannerRef.current;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      animate("[data-insight-reveal]", {
        opacity: 1,
        translateY: 0,
        scale: 1,
        duration: 0,
      });

      return;
    }

    scopeRef.current = createScope({
      root: banner,
    }).add(() => {
      animate("[data-insight-reveal]", {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 750,
        delay: stagger(100, {
          start: 100,
        }),
        ease: "outCubic",
      });

      animate("[data-insight-ring]", {
        rotate: "1turn",
        duration: 20000,
        ease: "linear",
        loop: true,
      });

      animate("[data-insight-ring-secondary]", {
        rotate: "-1turn",
        duration: 26000,
        ease: "linear",
        loop: true,
      });

      animate("[data-insight-bulb]", {
        translateY: [-4, 4],
        duration: 3000,
        ease: "inOutSine",
        alternate: true,
        loop: true,
      });
    });

    return () => {
      scopeRef.current?.revert();
      scopeRef.current = null;
    };
  }, [isVisible]);

  const handleCtaEnter = () => {
    setCtaHovered(true);

    if (!bannerRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    animate("[data-insight-arrow]", {
      translateX: [0, 6, 0],
      duration: 650,
      ease: "outElastic(1, .6)",
    });

    animate("[data-insight-sweep]", {
      translateX: ["-120%", "120%"],
      duration: 750,
      ease: "outQuad",
    });
  };

  const handleCtaLeave = () => {
    setCtaHovered(false);
  };

  return (
    <div
      ref={bannerRef}
      className="
        relative
        mt-10
        overflow-hidden
        rounded-[28px]
        p-6
        text-white
        shadow-[0_30px_80px_rgba(110,20,130,0.28)]
        sm:mt-16
        sm:p-10
        lg:rounded-[36px]
        lg:p-12
      "
      style={{
        background:
          "linear-gradient(135deg, #4A1466 0%, #7A1B99 55%, #A914C7 100%)",
      }}
    >
      {/* Rotating decorative ring */}
      <div
        aria-hidden
        data-insight-ring
        className="
          pointer-events-none
          absolute
          -right-16
          -top-20
          h-64
          w-64
          rotate-[28deg]
          rounded-[45%]
          border-[40px]
          border-[#F58DB7]/35
          will-change-transform
        "
      />

      {/* Secondary rotating ring */}
      <div
        aria-hidden
        data-insight-ring-secondary
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-10
          h-56
          w-56
          rounded-full
          border-[28px]
          border-white/10
          will-change-transform
        "
      />

      {/* Ambient glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-pink-400/10
          blur-3xl
        "
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr_auto] lg:gap-12">

        {/* Lightbulb */}
        <div
          data-insight-reveal
          data-insight-bulb
          className="
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-white/15
            opacity-0
            ring-1
            ring-white/30
            backdrop-blur
            will-change-transform
            sm:h-20
            sm:w-20
          "
        >
          <Lightbulb className="h-8 w-8 text-white sm:h-10 sm:w-10" />
        </div>

        {/* Copy */}
        <div
          data-insight-reveal
          className="opacity-0 will-change-transform"
        >
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            The insight
          </h3>

          <p className="mt-3 max-w-[56ch] text-[16px] leading-[1.7] text-white/85 sm:text-lg">
            Families want to be ready for motherhood. What&apos;s missing
            is a simple, trusted and affordable way to start planning
            financially{" "}
            <strong className="font-semibold text-white">
              before pregnancy begins.
            </strong>
          </p>
        </div>

        {/* CTA */}
        <div
          data-insight-reveal
          className="
            border-t
            border-white/20
            pt-6
            opacity-0
            will-change-transform
            lg:border-l
            lg:border-t-0
            lg:pl-12
            lg:pt-0
          "
        >
          <p className="text-base font-semibold text-white/85 sm:text-lg">
            That&apos;s why we built
          </p>

          <p className="text-3xl font-extrabold tracking-tight text-[#FFB3D3] sm:text-4xl">
            Mama Sure.
          </p>

          <a
            href={SIGNUP_URL}
            onMouseEnter={handleCtaEnter}
            onMouseLeave={handleCtaLeave}
            onFocus={handleCtaEnter}
            onBlur={handleCtaLeave}
            className="
              group
              relative
              mt-5
              inline-flex
              h-12
              w-full
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-full
              bg-white
              px-7
              text-[15px]
              font-bold
              text-[#8E0FA8]
              shadow-lg
              transition-transform
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
              active:scale-[0.98]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              sm:w-auto
            "
            aria-label="Start planning with Mama Sure"
          >
            {/* Light sweep */}
            <span
              data-insight-sweep
              aria-hidden
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                w-1/3
                -translate-x-[120%]
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-white/80
                to-transparent
              "
            />

            <span className="relative z-10">
              Start planning
            </span>

            <ArrowRight
              data-insight-arrow
              className="
                relative
                z-10
                h-4
                w-4
                will-change-transform
              "
            />

            {ctaHovered && (
              <span
                aria-hidden
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  ring-2
                  ring-white/60
                  ring-offset-2
                  ring-offset-transparent
                "
              />
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
