"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef } from "react";
import {
  animate,
  createAnimatable,
  createScope,
  createTimeline,
  spring,
  stagger,
  utils,
} from "animejs";
import {
  ArrowRight,
  Baby,
  CalendarDays,
  FilePenLine,
  Heart,
  Landmark,
  Play,
  ShieldCheck,
  Sprout,
  TrendingUp,
} from "lucide-react";

const SIGNUP_URL = "/signup";
const LOGIN_URL = "/login";

const SAVED_AMOUNT = 62400;
const GOAL_PERCENT = 62;

/* =========================================================
   TYPES + SMALL HELPERS
========================================================= */

type Cleanup = () => void;
const noop: Cleanup = () => {};

type AnimParams = Parameters<typeof animate>[1];
type AnimInstance = ReturnType<typeof animate>;
type Setter = (value: number, duration?: number, ease?: string) => unknown;
type AnimatableMap = Record<string, Setter>;

const qsa = (root: ParentNode, selector: string): HTMLElement[] =>
  Array.from(root.querySelectorAll<HTMLElement>(selector));

const clamp = (n: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, n));

/** Glow used by the journey cards (rgb triplet -> box-shadow string). */
const cardShadow = (rgb: string, lit: boolean): string =>
  lit
    ? `0 24px 48px -14px rgba(${rgb},0.45), 0 0 0 1px rgba(${rgb},0.28)`
    : `0 8px 22px -12px rgba(${rgb},0.16), 0 0 0 1px rgba(${rgb},0)`;

const JOURNEY_STEPS = [
  {
    icon: CalendarDays,
    mobileIcon: CalendarDays,
    title: "Plan",
    description: "Set a clear maternity cost goal that works for you.",
    iconBg: "bg-[#B04CC4]",
    cardBg: "bg-[#DDA9E5]",
    iconColor: "text-[#8E1FA6]",
    glow: "176,76,196",
  },
  {
    icon: Sprout,
    mobileIcon: FilePenLine,
    title: "Prepare",
    description: "Start saving on your terms, weekly or monthly.",
    iconBg: "bg-[#E0307F]",
    cardBg: "bg-[#F85E9C]",
    iconColor: "text-[#C4175F]",
    glow: "224,48,127",
  },
  {
    icon: ShieldCheck,
    mobileIcon: ShieldCheck,
    title: "Protect",
    description: "Optional cover for post-birth complications.",
    iconBg: "bg-[#F06BA3]",
    cardBg: "bg-[#F797BD]",
    iconColor: "text-[#B22E73]",
    glow: "240,107,163",
  },
] as const;

/* =========================================================
   MOTION: ENTRANCE CHOREOGRAPHY
   Everything that fades/slides/pops in lives here. Every
   animated node is its own layer so entrance, ambient float
   and parallax never fight over the same `transform`.
========================================================= */

function playEntrance(container: HTMLElement): Cleanup {
  const tl = createTimeline({ defaults: { ease: "out(4)" } });

  const add = (selector: string, params: AnimParams, at: number): void => {
    const targets = qsa(container, selector);
    if (targets.length > 0) tl.add(targets, params, at);
  };

  // Background shapes ease in first
  add(
    "[data-hero-decoration]",
    {
      opacity: [0, 1],
      scale: [0.85, 1],
      duration: 1100,
      delay: stagger(90),
      ease: "out(3)",
    },
    0,
  );

  // Headline: word-by-word mask reveal
  add(
    "[data-hero-word]",
    {
      opacity: [0, 1],
      translateY: ["105%", 0],
      duration: 900,
      delay: stagger(65),
      ease: "out(5)",
    },
    150,
  );

  // Hero image slides in from the right
  add(
    "[data-hero-image]",
    {
      opacity: [0, 1],
      translateX: [60, 0],
      scale: [0.95, 1],
      duration: 1100,
      ease: "out(4)",
    },
    300,
  );

  add(
    "[data-hero-copy]",
    { opacity: [0, 1], translateY: [24, 0], duration: 750 },
    550,
  );

  add(
    "[data-hero-tagline]",
    { opacity: [0, 1], translateY: [18, 0], duration: 650 },
    650,
  );

  add(
    "[data-hero-cta]",
    {
      opacity: [0, 1],
      translateY: [22, 0],
      scale: [0.96, 1],
      duration: 650,
      delay: stagger(120),
    },
    750,
  );

  add(
    "[data-hero-step]",
    {
      opacity: [0, 1],
      translateY: [35, 0],
      scale: [0.96, 1],
      duration: 700,
      delay: stagger(120),
    },
    850,
  );

  // Floating badges / cards: springy pop-in from scale 0.5
  add(
    "[data-hero-pop]",
    {
      opacity: { from: 0, to: 1, duration: 350, ease: "out(2)" },
      scale: { from: 0.5, to: 1, ease: spring({ bounce: 0.5 }) },
      delay: stagger(140),
    },
    900,
  );

  add(
    "[data-hero-trust]",
    { opacity: [0, 1], translateY: [25, 0], scale: [0.97, 1], duration: 700 },
    1150,
  );

  add(
    "[data-hero-wave]",
    { opacity: [0, 1], translateY: [15, 0], duration: 900, ease: "out(3)" },
    900,
  );

  /* ---- Savings counter + progress bar (desktop card only) ---- */

  let restoreCount: Cleanup = noop;
  const countEl = container.querySelector<HTMLElement>("[data-count]");
  const barEl = container.querySelector<HTMLElement>("[data-progress]");

  if (countEl) {
    const target = Number(countEl.dataset.count ?? SAVED_AMOUNT);
    const fmt = new Intl.NumberFormat("en-KE");
    const state = { value: 0 };

    countEl.textContent = fmt.format(0);
    restoreCount = () => {
      countEl.textContent = fmt.format(target);
    };

    animate(state, {
      value: target,
      duration: 2200,
      delay: 1100,
      ease: "out(4)",
      onUpdate: () => {
        countEl.textContent = fmt.format(Math.round(state.value));
      },
      onComplete: () => {
        countEl.textContent = fmt.format(target);
      },
    });
  }

  if (barEl) {
    utils.set(barEl, { width: "0%" });
    animate(barEl, {
      width: `${GOAL_PERCENT}%`,
      duration: 1800,
      delay: 1250,
      ease: "outElastic(1, .5)",
    });
  }

  return restoreCount;
}

/* =========================================================
   MOTION: LAYERED AMBIENT FLOAT
   Each [data-float] gets two independent loops (vertical and
   a slower drift + rotation) with randomised timing so the
   scene never looks synchronised.
========================================================= */

function playAmbient(root: HTMLElement): void {
  qsa(root, "[data-float]").forEach((el, i) => {
    const amp = Number(el.dataset.float ?? 8);
    const dir = i % 2 === 0 ? 1 : -1;

    animate(el, {
      translateY: amp * dir,
      duration: utils.random(2600, 4200),
      delay: utils.random(0, 1400),
      ease: "inOutSine",
      alternate: true,
      loop: true,
    });

    animate(el, {
      translateX: amp * 0.6 * -dir,
      rotate: dir * utils.random(1, 4),
      duration: utils.random(4200, 6800),
      delay: utils.random(0, 1800),
      ease: "inOutSine",
      alternate: true,
      loop: true,
    });
  });
}

/* =========================================================
   MOTION: CURSOR PARALLAX + 3D TILT (desktop, fine pointer)
   createAnimatable gives us damped interpolation: every
   layer chases the cursor with its own duration/ease.
========================================================= */

function setupParallax(root: HTMLElement): Cleanup {
  const stage = root.querySelector<HTMLElement>("#hero");
  const tiltEl = root.querySelector<HTMLElement>("[data-tilt]");
  if (!stage || !tiltEl) return noop;

  const tilt = createAnimatable(tiltEl, {
    rotateX: 900,
    rotateY: 900,
    ease: "out(3)",
  }) as unknown as AnimatableMap;

  const layers = qsa(root, "[data-depth]").map((el) => {
    const depth = Number(el.dataset.depth ?? 0);
    // Closer layers react faster, farther layers lag behind.
    const duration = Math.round(1100 - depth * 300);
    return {
      depth,
      a: createAnimatable(el, {
        x: duration,
        y: duration,
        ease: "out(3)",
      }) as unknown as AnimatableMap,
    };
  });

  const onMove = (e: PointerEvent): void => {
    if (e.pointerType !== "mouse") return;
    const r = stage.getBoundingClientRect();
    const nx = clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1);
    const ny = clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1);

    // Side nearest the cursor tilts toward the viewer.
    tilt.rotateY(-nx * 5);
    tilt.rotateX(ny * 4);

    for (const { depth, a } of layers) {
      a.x(-nx * depth * 24);
      a.y(-ny * depth * 18);
    }
  };

  const onLeave = (): void => {
    tilt.rotateY(0, 1400);
    tilt.rotateX(0, 1400);
    for (const { a } of layers) {
      a.x(0, 1400);
      a.y(0, 1400);
    }
  };

  stage.addEventListener("pointermove", onMove);
  stage.addEventListener("pointerleave", onLeave);

  return () => {
    stage.removeEventListener("pointermove", onMove);
    stage.removeEventListener("pointerleave", onLeave);
  };
}

/* =========================================================
   MOTION: INTERACTIONS (cards + CTAs)
========================================================= */

function bindCard(card: HTMLElement, reduced: boolean): Cleanup {
  const icon = card.querySelector<HTMLElement>("[data-card-icon]");
  const rgb = card.dataset.glow ?? "169,20,199";

  const enter = (): void => {
    animate(card, {
      ...(reduced ? {} : { translateY: -6 }),
      boxShadow: cardShadow(rgb, true),
      duration: reduced ? 200 : 380,
      ease: "out(3)",
    });
    if (icon) {
      animate(icon, {
        ...(reduced ? {} : { scale: 1.18 }),
        filter: "brightness(1.2)",
        duration: reduced ? 200 : 520,
        ease: reduced ? "out(2)" : "outBack(3)",
      });
    }
  };

  const leave = (): void => {
    animate(card, {
      translateY: 0,
      boxShadow: cardShadow(rgb, false),
      duration: reduced ? 200 : 450,
      ease: "out(3)",
    });
    if (icon) {
      animate(icon, {
        scale: 1,
        filter: "brightness(1)",
        duration: reduced ? 200 : 380,
        ease: "out(3)",
      });
    }
  };

  // Keyboard focus mirrors hover; mouse clicks don't trigger it.
  const onFocus = (): void => {
    if (card.matches(":focus-visible")) enter();
  };

  card.addEventListener("pointerenter", enter);
  card.addEventListener("pointerleave", leave);
  card.addEventListener("focus", onFocus);
  card.addEventListener("blur", leave);

  return () => {
    card.removeEventListener("pointerenter", enter);
    card.removeEventListener("pointerleave", leave);
    card.removeEventListener("focus", onFocus);
    card.removeEventListener("blur", leave);
  };
}

function bindCta(cta: HTMLElement): Cleanup {
  const arrow = cta.querySelector<HTMLElement>("[data-cta-arrow]");
  let pulse: AnimInstance | null = null;

  const enter = (): void => {
    animate(cta, { translateY: -3, duration: 300, ease: "out(3)" });
    if (arrow) {
      pulse?.pause();
      pulse = animate(arrow, {
        translateX: [0, 5],
        scale: [1, 1.18],
        duration: 480,
        ease: "inOutSine",
        alternate: true,
        loop: true,
      });
    }
  };

  const leave = (): void => {
    animate(cta, { translateY: 0, scale: 1, duration: 300, ease: "out(3)" });
    if (arrow) {
      pulse?.pause();
      pulse = null;
      animate(arrow, { translateX: 0, scale: 1, duration: 250, ease: "out(3)" });
    }
  };

  const press = (): void => {
    animate(cta, { scale: 0.97, duration: 120, ease: "out(2)" });
  };

  const release = (): void => {
    animate(cta, { scale: 1, duration: 260, ease: "outBack(2)" });
  };

  const onFocus = (): void => {
    if (cta.matches(":focus-visible")) enter();
  };

  cta.addEventListener("pointerenter", enter);
  cta.addEventListener("pointerleave", leave);
  cta.addEventListener("focus", onFocus);
  cta.addEventListener("blur", leave);
  cta.addEventListener("pointerdown", press);
  cta.addEventListener("pointerup", release);
  cta.addEventListener("pointercancel", release);

  return () => {
    pulse?.pause();
    cta.removeEventListener("pointerenter", enter);
    cta.removeEventListener("pointerleave", leave);
    cta.removeEventListener("focus", onFocus);
    cta.removeEventListener("blur", leave);
    cta.removeEventListener("pointerdown", press);
    cta.removeEventListener("pointerup", release);
    cta.removeEventListener("pointercancel", release);
  };
}

/* =========================================================
   COMPONENT
========================================================= */

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;

    const scope = createScope({
      root,
      mediaQueries: {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        finePointer: "(hover: hover) and (pointer: fine)",
      },
    });

    scope.add((self) => {
      const matches = (self?.matches ?? {}) as Record<string, boolean>;
      const reduceMotion = Boolean(matches.reduceMotion);
      const finePointer = Boolean(matches.finePointer);

      const cleanups: Cleanup[] = [];

      /*
       * Reduced motion: reveal everything instantly, no entrance,
       * no ambient loops, no parallax, no movement on hover.
       * Only a colour/shadow change remains as hover feedback.
       */
      if (reduceMotion) {
        qsa(root, "[data-hero]").forEach((el) => {
          el.style.opacity = "1";
        });

        qsa(root, "[data-card]").forEach((card) =>
          cleanups.push(bindCard(card, true)),
        );

        return () => cleanups.forEach((fn) => fn());
      }

      // Entrance runs per hero variant so stagger indexes stay clean.
      const containers = [
        root.querySelector<HTMLElement>("#hero-mobile"),
        root.querySelector<HTMLElement>("[data-hero-desktop]"),
      ].filter((el): el is HTMLElement => el !== null);

      containers.forEach((c) => cleanups.push(playEntrance(c)));

      playAmbient(root);

      if (finePointer) cleanups.push(setupParallax(root));

      qsa(root, "[data-card]").forEach((card) =>
        cleanups.push(bindCard(card, false)),
      );
      qsa(root, "[data-cta]").forEach((cta) => cleanups.push(bindCta(cta)));

      return () => cleanups.forEach((fn) => fn());
    });

    return () => scope.revert();
  }, []);

  return (
    <div ref={heroRef}>
      <MobileHero />
      <DesktopHero />
    </div>
  );
}

/* =========================================================
   HEADLINE: masked word reveal
========================================================= */

function SplitWords({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="-mb-[0.15em] inline-block overflow-hidden px-[0.04em] pb-[0.15em] align-bottom">
            <span
              data-hero
              data-hero-word
              className="inline-block opacity-0 will-change-transform"
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}

/* =========================================================
   MOBILE HERO
========================================================= */

function MobileHero() {
  return (
    <section
      id="hero-mobile"
      className="relative mt-[68px] overflow-hidden bg-[#FBF8FC] lg:hidden"
    >
      <div className="relative mx-auto max-w-[560px]">
        {/* ---------- HERO VISUAL STAGE ---------- */}

        <div className="relative min-h-[360px] px-5 pt-8 sm:min-h-[430px]">
          {/* Pink leaf */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-4 z-0 h-[270px] w-[120px]"
          >
            <div data-float="10" className="h-full w-full">
              <div
                data-hero
                data-hero-decoration
                className="h-full w-full rounded-[100%_0_100%_0] bg-[#FFA3C8] opacity-0"
                style={{ rotate: "16deg" }}
              />
            </div>
          </div>

          {/* Lavender background shape */}
          <div
            aria-hidden
            data-hero
            data-hero-decoration
            className="pointer-events-none absolute -right-[46%] top-[8%] z-0 h-[calc(100%+64px)] w-[108%] rounded-[50%] bg-[#E0B8EA] opacity-0"
          />

          {/* Woman */}
          <div className="pointer-events-none absolute -right-[6%] bottom-0 z-10 h-[106%] w-[64%] sm:h-[110%] sm:w-[60%]">
            <div
              data-hero
              data-hero-image
              className="relative h-full w-full opacity-0"
            >
              <Image
                src="/pregnant-woman.png"
                alt="Smiling pregnant woman"
                fill
                sizes="(max-width: 560px) 64vw, 340px"
                className="object-contain object-right-bottom"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="relative z-20">
            <h1 className="text-[clamp(1.85rem,8.4vw,2.7rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-black">
              <span className="block">
                <SplitWords text="Plan for" />
              </span>

              <span className="block">
                <SplitWords text="Motherhood" />
              </span>

              <span className="block text-[#D80A68]">
                <SplitWords text="before the" />
              </span>

              <span className="block text-[#D80A68]">
                <SplitWords text="journey begins." />
              </span>
            </h1>

            <p
              data-hero
              data-hero-copy
              className="mt-5 max-w-[46%] text-[14.5px] leading-[1.4] text-[#171717] opacity-0 sm:max-w-[44%] sm:text-[16px]"
            >
              Prepare financially for the journey to motherhood before the
              expenses begin.
            </p>
          </div>
        </div>

        {/* ---------- CARDS / TRUST / CTA ---------- */}

        <div className="relative z-20 px-5 pb-24 pt-5">
          {/* Journey cards */}
          <ol className="grid grid-cols-3 gap-2.5">
            {JOURNEY_STEPS.map(
              ({ mobileIcon: Icon, title, description, cardBg, iconColor }) => (
                <li
                  key={title}
                  data-hero
                  data-hero-step
                  className={`flex min-h-[146px] flex-col rounded-xl p-3 opacity-0 shadow-sm ${cardBg}`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-white">
                    <Icon
                      className={`h-5 w-5 ${iconColor}`}
                      strokeWidth={2}
                    />
                  </span>

                  <h3 className="mt-3 text-[14px] font-semibold leading-tight text-black">
                    {title}
                  </h3>

                  <p className="mt-1 text-[12px] leading-[1.3] text-black/80">
                    {description}
                  </p>
                </li>
              ),
            )}
          </ol>

          {/* Bank trust card */}
          <div
            data-hero
            data-hero-trust
            className="mt-4 flex items-center gap-4 rounded-xl bg-[#DDA9E5] px-4 py-4 opacity-0"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-white">
              <Landmark className="h-5 w-5 text-[#A914C7]" />
            </span>

            <div>
              <p className="text-[14px] font-semibold leading-tight text-black">
                Your money is held by a licensed bank.
              </p>

              <p className="mt-0.5 text-[12px] text-black/70">
                Mamasure is not a bank.
              </p>
            </div>
          </div>

          {/* Primary CTA */}
          <a
            href={SIGNUP_URL}
            data-hero
            data-hero-cta
            data-cta
            className="mx-auto mt-8 flex h-14 w-[88%] max-w-[360px] items-center justify-center gap-3 rounded-full bg-[#A914C7] text-[17px] font-bold text-white opacity-0 shadow-lg shadow-purple-500/25 transition-[background-color,box-shadow] duration-300 hover:bg-[#9411AE] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A914C7]"
          >
            Start Planning
            <span data-cta-arrow className="inline-flex">
              <ArrowRight className="h-5 w-5" />
            </span>
          </a>

          {/* Login */}
          <p className="mt-5 flex items-center justify-center gap-3 text-[14px] text-[#171717]">
            <span aria-hidden className="h-px w-10 bg-[#A914C7]" />

            <span>
              Already have an account?{" "}
              <a
                href={LOGIN_URL}
                className="rounded-sm font-bold text-[#A914C7] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A914C7]"
              >
                Log in
              </a>
            </span>

            <span aria-hidden className="h-px w-10 bg-[#A914C7]" />
          </p>
        </div>
      </div>

      {/* Bottom waves */}
      <svg
        aria-hidden
        data-hero
        data-hero-wave
        viewBox="0 0 402 70"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-[56px] w-full opacity-0"
      >
        <path
          d="M-10 70 L-10 38 C30 18 70 28 110 48 C130 58 140 66 150 70Z"
          fill="#DDA9E5"
        />
        <path
          d="M80 70 C110 38 170 28 230 50 C260 60 280 66 300 70Z"
          fill="#FFA3C8"
        />
        <path d="M270 70 C300 36 350 28 412 42 L412 70Z" fill="#D80A68" />
      </svg>
    </section>
  );
}

/* =========================================================
   DESKTOP HERO

   Layer rules (so transforms never collide):
     outer  -> position / size + parallax  [data-depth]
     middle -> ambient float loops         [data-float]
     inner  -> entrance animation          [data-hero-*]
========================================================= */

function DesktopHero() {
  return (
    <div data-hero-desktop className="hidden lg:block">
      {/* HERO */}
      <section
        id="hero"
        className="relative mt-[68px] min-h-[calc(100svh-68px)] overflow-hidden bg-[#F3E4F4]"
        style={{
          backgroundImage:
            "radial-gradient(900px 600px at 8% 0%, #FBF1FB 0%, transparent 60%), radial-gradient(700px 500px at 60% 100%, #EBCBEF 0%, transparent 70%)",
        }}
      >
        {/* Subtle dotted texture */}
        <div
          aria-hidden
          data-hero
          data-hero-decoration
          className="pointer-events-none absolute inset-0 opacity-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(169,20,199,0.16) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 35%, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 35%, transparent 75%)",
          }}
        />

        {/* =================================================
            RIGHT VISUAL STAGE (perspective + tilt)
        ================================================= */}

        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[52%]"
          style={{ perspective: "1400px" }}
        >
          <div
            data-tilt
            className="absolute inset-0 [transform-style:preserve-3d]"
          >
            {/* Main lavender/purple shape */}
            <div
              aria-hidden
              data-depth="0.25"
              className="absolute -right-[14%] bottom-[-18%] aspect-square w-[112%]"
            >
              <div data-float="14" className="h-full w-full">
                <div
                  data-hero
                  data-hero-decoration
                  className="h-full w-full rounded-[46%_54%_50%_50%/52%_46%_54%_48%] opacity-0"
                  style={{
                    background:
                      "linear-gradient(145deg, #D58BE0 0%, #B957CB 55%, #A23DB8 100%)",
                  }}
                />
              </div>
            </div>

            {/* Pink ring */}
            <div
              aria-hidden
              data-depth="0.4"
              className="absolute -right-[90px] -top-[130px] h-[420px] w-[420px]"
            >
              <div data-float="10" className="h-full w-full">
                <div
                  data-hero
                  data-hero-decoration
                  className="h-full w-full rounded-[45%] border-[58px] border-[#F58DB7] opacity-0"
                  style={{ rotate: "28deg" }}
                />
              </div>
            </div>

            {/* Lavender ring */}
            <div
              aria-hidden
              data-depth="0.5"
              className="absolute right-[60px] top-[20px] h-[230px] w-[230px]"
            >
              <div data-float="12" className="h-full w-full">
                <div
                  data-hero
                  data-hero-decoration
                  className="h-full w-full rounded-full border-[30px] border-[#F3E4F4]/90 opacity-0"
                />
              </div>
            </div>

            {/* Woman */}
            <div data-depth="0.7" className="absolute inset-0 z-10">
              <div
                data-hero
                data-hero-image
                className="relative h-full w-full opacity-0"
              >
                <Image
                  src="/pregnant-woman.png"
                  alt="Smiling pregnant woman"
                  fill
                  sizes="52vw"
                  className="object-contain object-right-bottom drop-shadow-[0_30px_40px_rgba(110,20,130,0.28)]"
                  priority
                />
              </div>
            </div>

            {/* Heart floating card */}
            <div
              aria-hidden
              data-depth="1.1"
              className="absolute left-[8%] top-[24%] z-20"
            >
              <div data-float="9">
                <div
                  data-hero
                  data-hero-pop
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 opacity-0 shadow-xl shadow-fuchsia-900/10 backdrop-blur"
                >
                  <Heart
                    className="h-7 w-7 text-[#D80A68]"
                    strokeWidth={1.75}
                  />
                </div>
              </div>
            </div>

            {/* Baby floating icon */}
            <div
              aria-hidden
              data-depth="1.3"
              className="absolute right-[4%] top-[30%] z-20"
            >
              <div data-float="12">
                <div
                  data-hero
                  data-hero-pop
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E00073] opacity-0 shadow-lg shadow-pink-700/30"
                >
                  <Baby className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            {/* Maternity progress card */}
            <div
              aria-hidden
              data-depth="1"
              className="absolute bottom-[16%] left-[2%] z-20 w-[230px]"
            >
              <div data-float="7">
                <div
                  data-hero
                  data-hero-pop
                  className="rounded-2xl bg-white/90 p-4 opacity-0 shadow-2xl shadow-fuchsia-900/15 backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-black">
                      Your maternity plan
                    </span>

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F7E3FA]">
                      <TrendingUp className="h-3.5 w-3.5 text-[#A914C7]" />
                    </span>
                  </div>

                  <p className="mt-2 text-[22px] font-extrabold leading-none tracking-tight text-black">
                    KES{" "}
                    <span data-count={SAVED_AMOUNT} className="tabular-nums">
                      {new Intl.NumberFormat("en-KE").format(SAVED_AMOUNT)}
                    </span>
                    <span className="ml-1 text-[12px] font-medium text-black/50">
                      saved
                    </span>
                  </p>

                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#F0DDF3]">
                    <div
                      data-progress
                      className="h-full rounded-full"
                      style={{
                        width: `${GOAL_PERCENT}%`,
                        background:
                          "linear-gradient(90deg, #A914C7, #F0529A)",
                      }}
                    />
                  </div>

                  <p className="mt-2 text-[11px] text-black/55">
                    {GOAL_PERCENT}% of your goal · on track
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="relative z-30 mx-auto flex min-h-[calc(100svh-68px)] max-w-[1440px] flex-col justify-center px-12">
          <div className="w-[56%] py-14">
            {/* Main headline */}
            <h1 className="max-w-[700px] text-[clamp(2.75rem,5.4vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-black">
              <span className="block whitespace-nowrap">
                <SplitWords text="Plan for Motherhood" />
              </span>

              <span className="block text-[#D80A68]">
                <SplitWords text="before the journey begins." />
              </span>
            </h1>

            {/* Supporting copy */}
            <p
              data-hero
              data-hero-copy
              className="mt-6 max-w-[540px] text-[20px] leading-[1.5] text-[#171717] opacity-0"
            >
              Prepare financially for the journey to motherhood before the
              expenses begin.
            </p>

            {/* Tagline */}
            <p
              data-hero
              data-hero-tagline
              className="mt-3 text-[17px] font-semibold text-[#A914C7] opacity-0"
            >
              Plan. Prepare. Protect. With confidence.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <a
                href={SIGNUP_URL}
                data-hero
                data-hero-cta
                data-cta
                className="inline-flex h-[56px] items-center justify-center gap-3 rounded-full px-8 text-[15px] font-bold text-white opacity-0 shadow-xl shadow-fuchsia-600/30 transition-shadow duration-300 hover:shadow-2xl hover:shadow-fuchsia-600/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A914C7]"
                style={{
                  background: "linear-gradient(135deg, #B31BD1, #8E0FA8)",
                }}
              >
                Start Planning
                <span data-cta-arrow className="inline-flex">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#how-it-works"
                data-hero
                data-hero-cta
                data-cta
                className="group inline-flex h-[56px] items-center justify-center gap-3 rounded-full border-2 border-[#A914C7]/70 bg-white/50 px-7 text-[15px] font-bold text-[#8E0FA8] opacity-0 backdrop-blur transition-colors duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A914C7]"
              >
                <span
                  data-cta-arrow
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A914C7] text-white"
                >
                  <Play
                    className="ml-[1px] h-3 w-3 fill-current"
                    strokeWidth={0}
                  />
                </span>
                Watch how it works
              </a>
            </div>

            {/* Journey cards */}
            <ol className="mt-10 grid max-w-[760px] grid-cols-3 gap-4">
              {JOURNEY_STEPS.map(
                ({ icon: Icon, title, description, iconBg, glow }) => (
                  <li
                    key={title}
                    data-hero
                    data-hero-step
                    className="opacity-0"
                  >
                    <div
                      tabIndex={0}
                      data-card
                      data-glow={glow}
                      className="h-full cursor-default rounded-2xl border border-white/80 bg-white/70 p-4 outline-none backdrop-blur focus-visible:ring-2 focus-visible:ring-[#A914C7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3E4F4]"
                      style={{ boxShadow: cardShadow(glow, false) }}
                    >
                      <div className="flex flex-col gap-4">
                        <span
                          data-card-icon
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md ${iconBg}`}
                          style={{ filter: "brightness(1)" }}
                        >
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>

                        <div>
                          <h3 className="text-[16px] font-bold leading-tight text-black">
                            {title}
                          </h3>

                          <p className="mt-1 text-[13px] leading-[1.4] text-black/65">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ),
              )}
            </ol>
          </div>
        </div>
      </section>

      {/* =================================================
          TRUST BAR
      ================================================= */}

      <section className="relative z-40 bg-white px-6 pb-8">
        <div
          data-hero
          data-hero-trust
          className="relative mx-auto -mt-7 flex max-w-[500px] items-center justify-center gap-4 rounded-2xl border border-[#EBCBEF] bg-white px-6 py-4 opacity-0 shadow-xl shadow-fuchsia-900/10"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7E3FA]">
            <ShieldCheck className="h-6 w-6 text-[#A914C7]" />
          </span>

          <div>
            <p className="text-[14px] font-semibold text-black">
              Your money is held by a licensed bank.
            </p>

            <p className="mt-0.5 text-[12px] text-black/60">
              Mamasure is not a bank.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
