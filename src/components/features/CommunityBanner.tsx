"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, createScope } from "animejs";
import { ArrowRight, ShieldCheck, Target, Users } from "lucide-react";

import CountUp from "./CountUp";
import StatCard from "./StatCard";
import { usePrefersReducedMotion } from "./motion";

type Cleanup = () => void;
type AnimInstance = ReturnType<typeof animate>;

/* ---------------------------------------------------------
   CTA: lift + arrow shift on hover / keyboard focus
--------------------------------------------------------- */

function bindCta(cta: HTMLElement): Cleanup {
  const arrow = cta.querySelector<HTMLElement>("[data-cta-arrow]");

  const enter = (): void => {
    animate(cta, { translateY: -4, duration: 300, ease: "out(3)" });
    if (arrow) {
      animate(arrow, { translateX: 6, duration: 450, ease: "outBack(3)" });
    }
  };

  const leave = (): void => {
    animate(cta, { translateY: 0, duration: 350, ease: "out(3)" });
    if (arrow) {
      animate(arrow, { translateX: 0, duration: 300, ease: "out(3)" });
    }
  };

  const onPointerEnter = (e: PointerEvent): void => {
    if (e.pointerType !== "touch") enter();
  };

  const onFocus = (): void => {
    if (cta.matches(":focus-visible")) enter();
  };

  cta.addEventListener("pointerenter", onPointerEnter);
  cta.addEventListener("pointerleave", leave);
  cta.addEventListener("focus", onFocus);
  cta.addEventListener("blur", leave);

  return () => {
    cta.removeEventListener("pointerenter", onPointerEnter);
    cta.removeEventListener("pointerleave", leave);
    cta.removeEventListener("focus", onFocus);
    cta.removeEventListener("blur", leave);
    cta.style.transform = "";
    if (arrow) arrow.style.transform = "";
  };
}

export default function CommunityBanner() {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLElement>(null);

  /* -------------------------------------------------------
     Ambient float/breathe loops + CTA micro-interaction.
     Loops pause while the section is off-screen.
  ------------------------------------------------------- */
  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    const scope = createScope({ root });
    const loops: AnimInstance[] = [];
    const cleanups: Cleanup[] = [];

    scope.add(() => {
      const glow = root.querySelector<HTMLElement>("[data-glow]");
      const badge = root.querySelector<HTMLElement>("[data-badge]");
      const cta = root.querySelector<HTMLElement>("[data-cta]");

      // Keyframes start and end at 0 so the loop never jumps.
      if (glow) {
        loops.push(
          animate(glow, {
            translateY: [0, -6, 0, 6, 0],
            duration: 7000,
            ease: "inOutSine",
            loop: true,
          }),
          animate(glow, {
            scale: [1, 1.06, 1],
            duration: 5600,
            ease: "inOutSine",
            loop: true,
          }),
        );
      }

      if (badge) {
        loops.push(
          animate(badge, {
            translateY: [0, -6, 0, 6, 0],
            duration: 4200,
            delay: 600,
            ease: "inOutSine",
            loop: true,
          }),
        );
      }

      if (cta) cleanups.push(bindCta(cta));
    });

    const io = new IntersectionObserver(([entry]) => {
      loops.forEach((a) => (entry?.isIntersecting ? a.resume() : a.pause()));
    });
    io.observe(root);

    return () => {
      io.disconnect();
      cleanups.forEach((fn) => fn());
      scope.revert();
    };
  }, [reduced]);

  return (
    <section ref={rootRef} className="pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= INTRO + ILLUSTRATION ================= */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white-600">
              Join thousands of future moms
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              A Community That
              <span className="mt-2 block bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
                Plans, Saves & Thrives
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white-600">
              Mama Sure is more than a savings platform. It&apos;s a trusted
              community helping women prepare financially and confidently for
              one of life&apos;s most important journeys.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="https://surveymars.com/q/NCVBi4nlK"
                target="_blank"
                rel="noopener noreferrer"
                data-cta
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-500 px-8 py-4 font-semibold text-white shadow-xl will-change-transform transition-shadow duration-300 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700"
              >
                Join the Waitlist
                <span data-cta-arrow className="inline-flex">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <Image
                    src="/avatar1.jpg"
                    alt="Community member"
                    width={46}
                    height={46}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/avatar2.jpg"
                    alt="Community member"
                    width={46}
                    height={46}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/avatar3.jpg"
                    alt="Community member"
                    width={46}
                    height={46}
                    className="rounded-full border-2 border-white"
                  />
                </div>

                <div>
                  <p className="font-bold text-purple-700 tabular-nums">
                    <CountUp text="2.5K+" />
                  </p>
                  <p className="text-sm text-gray-500">Already joined</p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration */}

          <div className="relative flex justify-center">
            <div
              aria-hidden
              data-glow
              className="absolute inset-0 -z-10 rounded-[50%] bg-gradient-to-br from-purple-100 via-pink-50 to-transparent blur-2xl will-change-transform"
            />

            <Image
              src="/pregnant-mother.png"
              alt="Pregnant mother"
              width={780}
              height={920}
              className="relative h-auto max-w-full"
            />

            <div
              data-badge
              className="absolute bottom-6 left-2 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl will-change-transform lg:left-0"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                <ShieldCheck className="h-5 w-5 text-pink-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Trusted & Verified
                </p>
                <p className="text-xs text-gray-500">
                  Licensed hospital partners
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <StatCard
            icon={Users}
            value="5K+"
            label="Waitlist"
            description="Growing every day"
            color="purple"
          />
          <StatCard
            icon={Target}
            value="KES 250M+"
            label="Savings Planned"
            description="Towards maternity care"
            color="pink"
          />
          <StatCard
            icon={ShieldCheck}
            value="98%"
            label="Trust Score"
            description="Families would recommend Mama Sure"
            color="purple"
          />
        </div>
      </div>
    </section>
  );
}
