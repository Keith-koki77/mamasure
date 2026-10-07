"use client";

import { useEffect, useRef } from "react";
import { createScope, createTimeline, stagger } from "animejs";
import { Heart } from "lucide-react";

import CommunityBanner from "./CommunityBanner";
import FeatureCard from "./FeatureCard";
import { features } from "./features";
import {
  REVEAL,
  qsa,
  usePrefersReducedMotion,
  useStaggerReveal,
} from "./motion";

const isElement = (el: HTMLElement | null): el is HTMLElement => el !== null;

export default function FeaturesSection() {
  const reduced = usePrefersReducedMotion();

  const introRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  /* Intro: badge -> heading lines -> paragraph cascade */
  useStaggerReveal(introRef, reduced, { threshold: 0.25, offset: 30, gap: 100 });

  /*
   * Feature list: items that scroll into view together are staggered
   * (120ms apart, in DOM order); their hairlines expand with them.
   * Reduced motion is handled by the `motion-reduce:` classes.
   */
  useEffect(() => {
    const list = listRef.current;
    if (!list || reduced) return;

    const items = qsa(list, "[data-feature]");
    const scope = createScope({ root: list });

    const io = new IntersectionObserver(
      (entries, observer) => {
        const batch = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement);
        if (batch.length === 0) return;

        batch.forEach((el) => observer.unobserve(el));
        batch.sort((a, b) => items.indexOf(a) - items.indexOf(b));

        scope.add(() => {
          const lines = batch
            .map((el) => el.querySelector<HTMLElement>("[data-line]"))
            .filter(isElement);

          const tl = createTimeline({
            defaults: { ease: "outCubic" },
            onComplete: () => {
              batch.forEach((el) => {
                el.style.willChange = "auto";
              });
            },
          });

          tl.add(
            batch,
            {
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: stagger(120),
            },
            0,
          );

          if (lines.length > 0) {
            tl.add(
              lines,
              {
                width: ["0%", "100%"],
                duration: 900,
                ease: "out(4)",
                delay: stagger(120),
              },
              0,
            );
          }
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      scope.revert();
    };
  }, [reduced]);

  return (
    <section
      id="why-mamasure"
      className="relative scroll-mt-16 overflow-hidden bg-[#F3E4F4] pb-16 pt-14 sm:scroll-mt-28 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-28"
      // Same surface as the hero
      style={{
        backgroundImage:
          "radial-gradient(900px 600px at 8% 0%, #FBF1FB 0%, transparent 60%), radial-gradient(700px 500px at 60% 100%, #EBCBEF 0%, transparent 70%)",
      }}
    >
      {/* Same subtle dotted texture as the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(169,20,199,0.16) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 55%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24">
          {/* ---------- Left: sticky intro ---------- */}
          <div ref={introRef} className="lg:sticky lg:top-28 lg:self-start">
            <div
              data-reveal
              className={`flex w-fit items-center gap-2 rounded-full border border-white bg-white/70 px-4 py-2 shadow-sm backdrop-blur ${REVEAL}`}
            >
              <Heart className="h-4 w-4 shrink-0 fill-pink-500 text-pink-500" />
              <span className="text-sm font-semibold text-pink-600">
                Why Mama Sure
              </span>
            </div>

            <h2 className="mt-6 text-[clamp(2.1rem,6vw,3.6rem)] font-extrabold leading-[1.05] tracking-[-0.035em] sm:mt-8">
              <span
                data-reveal
                className={`block text-slate-900 ${REVEAL}`}
              >
                Everything you need.
              </span>
              <span
                data-reveal
                className={`block text-[#D80A68] ${REVEAL}`}
              >
                All in one place.
              </span>
            </h2>

            <p
              data-reveal
              className={`mt-5 max-w-xl text-[16px] leading-[1.7] text-slate-700 sm:mt-7 sm:text-lg ${REVEAL}`}
            >
              Mama Sure combines smart savings, hospital comparison and expert
              guidance so you can focus on what matters most:{" "}
              <span className="font-semibold text-slate-900">
                your health and your baby.
              </span>
            </p>
          </div>

          {/* ---------- Right: open feature list ---------- */}
          <ul
            ref={listRef}
            className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:gap-y-10"
          >
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                badge={feature.badge}
                badgeIcon={feature.badgeIcon}
                tone={feature.tone}
              />
            ))}
          </ul>
        </div>
      </div>

      <CommunityBanner />
    </section>
  );
}
