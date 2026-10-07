"use client";

import { useEffect, useMemo, useRef } from "react";
import { animate, createScope, utils } from "animejs";

import { useInViewOnce, usePrefersReducedMotion } from "./motion";

interface CountUpProps {
  /** Display string, e.g. "KES 250M+", "98%", "2.5K+". The number inside is counted. */
  text: string;
  duration?: number;
  className?: string;
}

interface ParsedStat {
  prefix: string;
  value: number;
  decimals: number;
  suffix: string;
}

function parseStat(text: string): ParsedStat | null {
  const m = /^(\D*)(\d+(?:\.(\d+))?)(.*)$/.exec(text);
  if (!m) return null;
  return {
    prefix: m[1] ?? "",
    value: Number(m[2]),
    decimals: m[3]?.length ?? 0,
    suffix: m[4] ?? "",
  };
}

/**
 * Counts the number inside `text` up from 0 when scrolled into view.
 * The animated text is aria-hidden; the real value is read once by
 * screen readers, and shown immediately under reduced motion.
 */
export default function CountUp({
  text,
  duration = 2000,
  className,
}: CountUpProps) {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLSpanElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const seen = useInViewOnce(rootRef, 0.6);
  const parsed = useMemo(() => parseStat(text), [text]);

  // Start from zero on the client so the count can play when visible.
  useEffect(() => {
    const el = valueRef.current;
    if (!el || !parsed || reduced) return;

    el.textContent = `${parsed.prefix}${(0).toFixed(parsed.decimals)}${parsed.suffix}`;
    return () => {
      el.textContent = text;
    };
  }, [parsed, reduced, text]);

  useEffect(() => {
    const root = rootRef.current;
    const el = valueRef.current;
    if (!seen || !root || !el || !parsed || reduced) return;

    const { prefix, value, decimals, suffix } = parsed;
    const state = { value: 0 };
    const scope = createScope({ root });

    scope.add(() => {
      animate(state, {
        value,
        duration,
        ease: "out(4)",
        modifier: utils.round(decimals), // v4 equivalent of `round`
        onUpdate: () => {
          el.textContent = `${prefix}${state.value.toFixed(decimals)}${suffix}`;
        },
        onComplete: () => {
          el.textContent = text;
        },
      });
    });

    return () => {
      scope.revert();
      el.textContent = text;
    };
  }, [seen, reduced, parsed, duration, text]);

  return (
    <span ref={rootRef} className={className}>
      <span ref={valueRef} aria-hidden>
        {text}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
