import {
  useEffect,
  useState,
  useSyncExternalStore,
  type RefObject,
} from "react";
import { createScope, createTimeline, stagger } from "animejs";

/* ---------- shared helpers ---------- */

export const qsa = (root: ParentNode, selector: string): HTMLElement[] =>
  Array.from(root.querySelectorAll<HTMLElement>(selector));

/** Hidden until revealed; `motion-reduce` keeps it visible without JS. */
export const REVEAL = "opacity-0 will-change-transform motion-reduce:opacity-100";

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

/* ---------- staggered slide-up for every [data-reveal] in `ref` ---------- */

export function useStaggerReveal(
  ref: RefObject<HTMLElement | null>,
  reduced: boolean,
  { threshold = 0.2, offset = 30, gap = 100 } = {},
): void {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = qsa(root, "[data-reveal]");

    if (reduced) {
      items.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return () => {
        items.forEach((el) => {
          el.style.opacity = "";
          el.style.transform = "";
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
              translateY: [offset, 0],
              duration: 800,
              delay: stagger(gap),
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
  }, [ref, reduced, threshold, offset, gap]);
}
