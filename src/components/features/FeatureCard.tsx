"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import type { LucideIcon } from "lucide-react";

import { REVEAL, usePrefersReducedMotion } from "./motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  badgeIcon: LucideIcon;
  tone: "purple" | "pink";
}

const TONES = {
  purple: {
    circle: "bg-[#DDA9E5]",
    icon: "text-[#7A1B99]",
    badge: "text-purple-700",
  },
  pink: {
    circle: "bg-[#F9B4D1]",
    icon: "text-[#B22E73]",
    badge: "text-pink-600",
  },
} as const;

type AnimInstance = ReturnType<typeof animate>;

/**
 * Not a card: an open list item separated by a hairline.
 * Icon circle reuses the hero's white-ringed motif.
 *
 * Entrance (fade/slide + hairline expansion) is driven by FeaturesSection
 * through the `data-feature` / `data-line` hooks so a batch of items can be
 * staggered together. Hover is handled here.
 */
export default function FeatureCard({
  icon: Icon,
  title,
  description,
  badge,
  badgeIcon: BadgeIcon,
  tone,
}: FeatureCardProps) {
  const t = TONES[tone];
  const reduced = usePrefersReducedMotion();

  const liRef = useRef<HTMLLIElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const li = liRef.current;
    const circle = iconRef.current;
    if (!li || !circle || reduced) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    let current: AnimInstance | null = null;

    const enter = (): void => {
      current?.revert();
      current = animate(circle, {
        scale: [1, 1.15],
        rotate: ["0turn", "1turn"],
        duration: 800,
        ease: "outBack(2)",
      });
    };

    const leave = (): void => {
      current?.pause();
      current = animate(circle, { scale: 1, duration: 300, ease: "out(3)" });
    };

    li.addEventListener("pointerenter", enter);
    li.addEventListener("pointerleave", leave);

    return () => {
      li.removeEventListener("pointerenter", enter);
      li.removeEventListener("pointerleave", leave);
      current?.revert();
      circle.style.transform = "";
    };
  }, [reduced]);

  return (
    <li
      ref={liRef}
      data-feature
      className={`relative pt-6 sm:pt-7 ${REVEAL}`}
    >
      {/* Hairline (was border-t): expands 0% -> 100% on entrance */}
      <span
        aria-hidden
        data-line
        className="absolute left-0 top-0 h-px w-0 bg-purple-900/15 motion-reduce:w-full"
      />

      <div className="flex items-start gap-4 sm:gap-5">
        <span
          ref={iconRef}
          className={`
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            border-[3px]
            border-white
            shadow-sm
            will-change-transform
            sm:h-14
            sm:w-14
            ${t.circle}
          `}
        >
          <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${t.icon}`} strokeWidth={2} />
        </span>

        <div className="min-w-0">
          <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-900 sm:text-[1.4rem]">
            {title}
          </h3>

          <p className="mt-2 text-[15px] leading-[1.65] text-slate-700 sm:text-base">
            {description}
          </p>

          <p
            className={`mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold ${t.badge}`}
          >
            <BadgeIcon className="h-3.5 w-3.5 shrink-0" />
            {badge}
          </p>
        </div>
      </div>
    </li>
  );
}
