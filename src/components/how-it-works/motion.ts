import {
  useEffect,
  useState,
  useSyncExternalStore,
  type RefObject,
} from "react";

/* ---------- shared types / helpers ---------- */

export type Setter = (value: number, duration?: number, ease?: string) => unknown;
export type AnimatableMap = Record<string, Setter>;

export const clamp = (n: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, n));

export const qsa = (root: ParentNode, selector: string): HTMLElement[] =>
  Array.from(root.querySelectorAll<HTMLElement>(selector));

/* ---------- prefers-reduced-motion (live) ---------- */

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void): () => void {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** Live `window.matchMedia("(prefers-reduced-motion: reduce)")`. */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );
}

/* ---------- IntersectionObserver, fire-once ---------- */

/** Becomes `true` the first time `ref` is at least `threshold` visible. */
export function useInViewOnce<T extends Element>(
  ref: RefObject<T | null>,
  threshold = 0.3,
): boolean {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;

    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);

    return () => io.disconnect();
  }, [ref, seen, threshold]);

  return seen;
}
