"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  animate,
  createAnimatable,
  createScope,
  createTimeline,
} from "animejs";

import MiniPhoneCard, { type PhoneType } from "./MiniPhoneCard";
import {
  clamp,
  useInViewOnce,
  usePrefersReducedMotion,
  type AnimatableMap,
} from "./motion";

export interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  phoneType: PhoneType;
  /** Position in the grid; offsets the entrance so rows cascade. */
  index?: number;
}

const SHADOW_REST =
  "0 1px 2px rgba(108,74,182,0.06), 0 8px 24px rgba(108,74,182,0.06)";
const SHADOW_LIT =
  "0 2px 4px rgba(108,74,182,0.08), 0 30px 60px rgba(108,74,182,0.22)";

export default function StepCard({
  number,
  title,
  description,
  icon,
  phoneType,
  index = 0,
}: StepCardProps) {
  const reduced = usePrefersReducedMotion();

  const liRef = useRef<HTMLLIElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInViewOnce(liRef, 0.15);

  const label = String(number).padStart(2, "0");

  /* -------------------------------------------------------
     ENTRANCE: card slides up, then its phone follows.
     Reduced motion is handled by `motion-reduce:opacity-100`.
  ------------------------------------------------------- */
  useEffect(() => {
    const li = liRef.current;
    if (!li || !inView || reduced) return;

    const phone = li.querySelector<HTMLElement>("[data-phone-enter]");
    const scope = createScope({ root: li });

    scope.add(() => {
      const base = (index % 3) * 110;

      const tl = createTimeline({
        defaults: { ease: "outCubic" },
        onComplete: () => {
          li.style.willChange = "auto";
          if (phone) phone.style.willChange = "auto";
        },
      });

      tl.add(li, { opacity: [0, 1], translateY: [28, 0], duration: 800 }, base);

      if (phone) {
        tl.add(
          phone,
          {
            opacity: [0, 1],
            translateY: [28, 0],
            scale: [0.94, 1],
            duration: 800,
          },
          base + 220,
        );
      }
    });

    return () => scope.revert();
  }, [inView, reduced, index]);

  /* -------------------------------------------------------
     HOVER / FOCUS: magnetic 3D tilt, lift, phone depth
  ------------------------------------------------------- */
  useEffect(() => {
    const li = liRef.current;
    const card = cardRef.current;
    if (!li || !card) return;

    const icon = card.querySelector<HTMLElement>("[data-icon]");
    const phone = card.querySelector<HTMLElement>("[data-phone-depth]");
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    const scope = createScope({ root: li });
    let tilt: AnimatableMap | null = null;
    let depth: AnimatableMap | null = null;

    scope.add(() => {
      if (!finePointer || reduced) return;

      tilt = createAnimatable(card, {
        rotateX: 500,
        rotateY: 500,
        x: 500,
        y: 500,
        scale: 500,
        ease: "out(3)",
      }) as unknown as AnimatableMap;

      if (phone) {
        depth = createAnimatable(phone, {
          x: 650,
          y: 650,
          ease: "out(3)",
        }) as unknown as AnimatableMap;
      }
    });

    const enter = (): void => {
      if (reduced) {
        card.style.boxShadow = SHADOW_LIT;
        return;
      }

      animate(card, { boxShadow: SHADOW_LIT, duration: 500, ease: "out(3)" });

      if (icon) {
        animate(icon, { scale: [1, 1.12], duration: 450, ease: "outBack(3)" });
      }

      // Lift without waiting for a pointer move (covers keyboard focus too).
      if (tilt) {
        tilt.y(-6, 400);
      } else {
        animate(card, { translateY: -6, duration: 400, ease: "out(3)" });
      }
    };

    const leave = (): void => {
      if (reduced) {
        card.style.boxShadow = SHADOW_REST;
        return;
      }

      animate(card, { boxShadow: SHADOW_REST, duration: 600, ease: "out(3)" });

      if (icon) {
        animate(icon, { scale: 1, duration: 350, ease: "out(3)" });
      }

      if (tilt) {
        tilt.rotateX(0, 900);
        tilt.rotateY(0, 900);
        tilt.x(0, 900);
        tilt.y(0, 900);
        tilt.scale(1, 900);
      } else {
        animate(card, { translateY: 0, duration: 450, ease: "out(3)" });
      }
      if (depth) {
        depth.x(0, 900);
        depth.y(0, 900);
      }
    };

    const onMove = (e: PointerEvent): void => {
      if (!tilt || e.pointerType !== "mouse") return;

      // Measure the untransformed <li> so the tilt can't feed back into itself.
      const r = li.getBoundingClientRect();
      const nx = clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1);
      const ny = clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1);

      tilt.rotateY(-nx * 5);
      tilt.rotateX(ny * 4);
      tilt.x(nx * 4);
      tilt.y(ny * 3 - 6);
      tilt.scale(1.015);

      if (depth) {
        depth.x(nx * 7);
        depth.y(ny * 5);
      }
    };

    const onFocus = (): void => {
      if (card.matches(":focus-visible")) enter();
    };

    li.addEventListener("pointerenter", enter);
    li.addEventListener("pointerleave", leave);
    li.addEventListener("pointermove", onMove);
    card.addEventListener("focus", onFocus);
    card.addEventListener("blur", leave);

    return () => {
      li.removeEventListener("pointerenter", enter);
      li.removeEventListener("pointerleave", leave);
      li.removeEventListener("pointermove", onMove);
      card.removeEventListener("focus", onFocus);
      card.removeEventListener("blur", leave);
      scope.revert();
      card.style.transform = "";
      card.style.boxShadow = SHADOW_REST;
    };
  }, [reduced]);

  return (
    <li
      ref={liRef}
      data-step
      className="h-full opacity-0 will-change-transform motion-reduce:opacity-100"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={cardRef}
        tabIndex={0}
        role="group"
        aria-label={`Step ${number}: ${title}`}
        className="flex h-full flex-col justify-between rounded-3xl border border-purple-100/80 bg-white p-6 outline-none will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
        style={{ boxShadow: SHADOW_REST }}
      >
        <div>
          <div className="flex items-center justify-between gap-4">
            <span
              data-icon
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100/80 text-purple-700"
            >
              {icon}
            </span>

            {/* Step number badge */}
            <span className="flex h-9 min-w-[2.5rem] items-center justify-center rounded-full bg-gradient-to-br from-[#7A1B99] to-[#A914C7] px-3 text-sm font-extrabold tabular-nums tracking-wide text-white shadow-md shadow-purple-900/20">
              <span aria-hidden>{label}</span>
              <span className="sr-only">Step {number}</span>
            </span>
          </div>

          <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>

        {/* Phone preview: outer = cursor depth, inner = entrance */}
        <div data-phone-depth className="mt-6 will-change-transform">
          <div
            data-phone-enter
            className="opacity-0 will-change-transform motion-reduce:opacity-100"
          >
            <MiniPhoneCard type={phoneType} />
          </div>
        </div>
      </div>
    </li>
  );
}
