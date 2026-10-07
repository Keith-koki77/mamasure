"use client";

import {
  type MouseEvent,
  type ReactNode,
  useEffect,
  useRef,
} from "react";
import { animate } from "animejs";

interface ProblemCardProps {
  icon: ReactNode;
  image: string;

  statistic: string;
  statisticValue: number;
  statisticPrefix?: string;
  statisticSuffix?: string;

  statisticLabel: string;
  title: string;
  description: string;

  footer: string;
  footerColor: string;

  className?: string;
}

export default function ProblemCard({
  icon,
  image,
  statistic,
  statisticValue,
  statisticPrefix = "",
  statisticSuffix = "",
  statisticLabel,
  title,
  description,
  footer,
  footerColor,
}: ProblemCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const statisticRef = useRef<HTMLSpanElement>(null);

  const hasCountedRef = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    const statisticElement = statisticRef.current;

    if (!card || !statisticElement) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /*
     * -------------------------------------------------------
     * STATISTIC COUNT
     * -------------------------------------------------------
     */

    const runCountAnimation = () => {
      if (hasCountedRef.current) return;

      hasCountedRef.current = true;

      if (reduceMotion) {
        statisticElement.textContent = `${statisticPrefix}${statisticValue}${statisticSuffix}`;
        return;
      }

      const counter = {
        value: 0,
      };

      animate(counter, {
        value: statisticValue,
        duration: 1200,
        ease: "outExpo",
        modifier: (value: number) => Math.round(value),
        onUpdate: () => {
          if (!statisticElement) return;

          statisticElement.textContent = `${statisticPrefix}${Math.round(
            counter.value,
          )}${statisticSuffix}`;
        },
        onComplete: () => {
          if (!statisticElement) return;

          statisticElement.textContent = `${statisticPrefix}${statisticValue}${statisticSuffix}`;
        },
      });
    };

    /*
     * -------------------------------------------------------
     * INTERSECTION OBSERVER
     * -------------------------------------------------------
     */

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        runCountAnimation();
        observer.disconnect();
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, [
    statisticPrefix,
    statisticSuffix,
    statisticValue,
  ]);

  /*
   * ---------------------------------------------------------
   * 3D TILT
   * ---------------------------------------------------------
   */

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>,
  ) => {
    const card = cardRef.current;
    const icon = iconRef.current;
    const scrim = scrimRef.current;

    if (!card) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const normalizedX = x / rect.width - 0.5;
    const normalizedY = y / rect.height - 0.5;

    const rotateY = normalizedX * 10;
    const rotateX = normalizedY * -10;

    animate(card, {
      rotateX,
      rotateY,
      scale: 1.02,
      duration: 350,
      ease: "outQuad",
    });

    if (icon) {
      animate(icon, {
        translateY: -6,
        scale: 1.05,
        duration: 300,
        ease: "outQuad",
      });
    }

    if (scrim) {
      const intensity = Math.min(
        0.35,
        0.12 +
          Math.sqrt(
            normalizedX * normalizedX +
              normalizedY * normalizedY,
          ) *
            0.35,
      );

      scrim.style.opacity = String(intensity);
    }
  };

  /*
   * ---------------------------------------------------------
   * RESET CARD
   * ---------------------------------------------------------
   */

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const icon = iconRef.current;
    const scrim = scrimRef.current;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    if (card) {
      animate(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 500,
        ease: "outElastic(1, .7)",
      });
    }

    if (icon) {
      animate(icon, {
        translateY: 0,
        scale: 1,
        duration: 450,
        ease: "outElastic(1, .7)",
      });
    }

    if (scrim) {
      animate(scrim, {
        opacity: 0,
        duration: 350,
        ease: "outQuad",
      });
    }
  };

  /*
   * ---------------------------------------------------------
   * KEYBOARD FOCUS
   * ---------------------------------------------------------
   */

  const handleFocus = () => {
    const card = cardRef.current;
    const icon = iconRef.current;

    if (!card) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    animate(card, {
      scale: 1.01,
      duration: 300,
      ease: "outQuad",
    });

    if (icon) {
      animate(icon, {
        translateY: -4,
        duration: 300,
        ease: "outQuad",
      });
    }
  };

  return (
    <article
      ref={cardRef}
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleMouseLeave}
      className="
        group
        relative
        min-w-[84vw]
        snap-center
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200/80
        bg-white
        shadow-[0_16px_45px_rgba(30,20,60,0.08)]
        outline-none
        transition-shadow
        duration-300
        hover:shadow-[0_24px_70px_rgba(110,20,130,0.16)]
        focus-visible:ring-2
        focus-visible:ring-[#A914C7]
        focus-visible:ring-offset-4
        sm:min-w-[390px]
        lg:min-w-0
        lg:snap-none
        will-change-transform
        [transform-style:preserve-3d]
        [perspective:1000px]
      "
      aria-label={`${title}: ${statistic} ${statisticLabel}`}
    >
      {/* ===================================================
          IMAGE
      ==================================================== */}

      <div className="relative h-[190px] overflow-hidden sm:h-[220px]">

        <img
          src={image}
          alt=""
          aria-hidden
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.06]
          "
        />

        {/* Image gradient */}
        <div
          aria-hidden
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-black/5
            to-transparent
          "
        />

        {/* Dynamic scrim */}
        <div
          ref={scrimRef}
          aria-hidden
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-purple-600/40
            via-transparent
            to-pink-500/40
            opacity-0
            mix-blend-multiply
          "
        />

        {/* Icon chip */}
        <div
          ref={iconRef}
          className="
            absolute
            left-5
            top-5
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-white/90
            shadow-lg
            backdrop-blur
            will-change-transform
          "
        >
          {icon}
        </div>

        {/* Statistic */}
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <span
            ref={statisticRef}
            className="
              block
              text-4xl
              font-extrabold
              leading-none
              tracking-[-0.04em]
              drop-shadow-md
              sm:text-5xl
            "
          >
            {statistic}
          </span>

          <span className="mt-2 block max-w-[260px] text-sm font-medium leading-[1.35] text-white/90">
            {statisticLabel}
          </span>
        </div>
      </div>

      {/* ===================================================
          CONTENT
      ==================================================== */}

      <div className="p-5 sm:p-6">

        <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-[15px] leading-[1.7] text-slate-600 sm:text-base">
          {description}
        </p>

        {/* Footer pill */}
        <div className="mt-5">
          <span
            className={`
              inline-flex
              rounded-full
              px-3.5
              py-2
              text-xs
              font-semibold
              ${footerColor}
            `}
          >
            {footer}
          </span>
        </div>
      </div>

      {/* Bottom hover accent */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-1
          w-full
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-[#A914C7]
          via-[#D80A68]
          to-[#F58DB7]
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />
    </article>
  );
}
