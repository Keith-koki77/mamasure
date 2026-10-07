"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  animate,
  createScope,
  createTimeline,
  stagger,
  svg,
  utils,
} from "animejs";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Globe,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type SocialType = "linkedin" | "instagram" | "x" | "facebook" | "website";

type SocialLink = {
  type: SocialType;
  label: string;
  href: string;
};

type Founder = {
  name: string;
  role: string;
  image: string;
  /** One-line summary of what this founder brings to Mama Sure. */
  contribution: string;
  shortBio: string;
  fullBio: string;
  socials: SocialLink[];
  /** Shows "Full profile coming soon" instead of the read-more button. */
  comingSoon?: boolean;
};

type Sdg = {
  number: number;
  title: string;
  description: string;
  /** Official UN SDG colour. */
  color: string;
  href: string;
  /** Optional official UN artwork, e.g. "/sdg/E_SDG_Icons-03.png". */
  image?: string;
};

type AnimParams = Parameters<typeof animate>[1];

/* =========================================================
   MOTION HELPERS
========================================================= */

/** Hidden until revealed; `motion-reduce` keeps it visible without JS. */
const HIDDEN = "opacity-0 motion-reduce:opacity-100";

const qsa = (root: ParentNode, selector: string): HTMLElement[] =>
  Array.from(root.querySelectorAll<HTMLElement>(selector));

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReduced(onChange: () => void): () => void {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );
}

/* =========================================================
   DATA
========================================================= */

const FOUNDERS: Founder[] = [
  {
    name: "Kellen Njuguna",
    role: "Founder",
    image: "/team/kellen-njuguna.jpg",
    contribution: "The personal story behind Mama Sure",
    shortBio:
      "The experience behind Mama Sure began with a personal realization about how quickly a financial plan can change when life takes an unexpected turn.",
    fullBio:
      "My own experience is at the heart of why Mama Sure exists. I know what it feels like to believe you have prepared, only to discover that life can quickly change the plan.\n\nThat experience shaped how I think about financial preparedness, healthcare and the importance of planning ahead. For a long time, it was simply an experience I had lived through.\n\nThen, while pursuing my Master’s degree, an Entrepreneurship class gave me the space to look at that experience differently. I began asking myself: What if this wasn’t just my story? What if other women were facing the same uncertainty? What if there was an opportunity to help women prepare before they needed to?\n\nEventually, that question became the idea that would become Mama Sure.\n\nMy desire is to see more women approach motherhood feeling financially prepared, informed and confident about the journey ahead.\n\nBecause motherhood is not just about pregnancy and childbirth. It is a new chapter in a woman’s life — one that brings new experiences, new responsibilities and sometimes challenges she could never have anticipated.\n\nI want every woman who walks the motherhood journey with Mama Sure to feel that she has somewhere to start. To feel that she has thought ahead. That she has a plan. That she is better prepared for the unexpected.\n\nThat is the Mama Sure I want to build: one that helps women prepare with greater intention, greater confidence and hopefully a little more ease and peace of mind.\n\nBecause if my experience taught me anything, it is this: preparing matters. But having a plan that can withstand life matters too.",
    socials: [],
  },
  {
    name: "Joseph Mumo",
    role: "Co-Founder",
    image: "/team/joseph-mumo.jpg",
    contribution: "A fresh perspective that sharpened the idea",
    shortBio:
      "Joseph brings a different perspective to the Mama Sure journey, helping challenge and strengthen the original idea.",
    fullBio:
      "Joseph brings a different perspective to the Mama Sure journey.\n\nHis experience, expertise and personal connection to the problem helped challenge and strengthen the original idea.\n\nTogether, the founders began looking beyond the initial idea and asking how Mama Sure could become something meaningful, practical and scalable.\n\nHis contribution is grounded in the belief that women deserve a better way to prepare for maternal healthcare — one that makes financial preparedness more intentional and accessible.",
    socials: [],
  },
  {
    name: "Our Third Co-Founder",
    role: "Co-Founder",
    image: "/team/third-founder.jpg",
    contribution: "A shared conviction, a different strength",
    shortBio:
      "A shared conviction, a different perspective and a commitment to building a better way for women to prepare.",
    fullBio:
      "Mama Sure grew through conversations, questions and possibilities shared by three people who came together around a common societal problem.\n\nEach founder came with a different perspective, different experiences and different strengths.\n\nBut we were united by the same belief: women deserve a better way to prepare for maternal healthcare.",
    socials: [],
    comingSoon: true,
  },
];

const BELIEFS = [
  {
    number: "01",
    title: "Preparation should start earlier",
    description:
      "Financial preparation should be part of the motherhood conversation before pregnancy becomes an immediate reality.",
    icon: Target,
  },
  {
    number: "02",
    title: "Women deserve agency",
    description:
      "Women should have greater control, information and confidence when preparing for their maternal healthcare journey.",
    icon: Heart,
  },
  {
    number: "03",
    title: "No one should do this alone",
    description:
      "Better maternal outcomes require collaboration across families, healthcare, finance, technology and communities.",
    icon: Users,
  },
];

/**
 * Colours are the official UN SDG palette. The pictograms are inline SVG
 * approximations. To use the official UN artwork, download it from
 * https://www.un.org/sustainabledevelopment/news/communications-material/
 * put it in /public/sdg/ and set `image` on the goal.
 */
const SDGS: Sdg[] = [
  {
    number: 3,
    title: "Good Health and Well-being",
    description:
      "Supporting better preparation for maternal healthcare and healthier journeys for mothers and babies.",
    color: "#4C9F38",
    href: "https://sdgs.un.org/goals/goal3",
  },
  {
    number: 5,
    title: "Gender Equality",
    description:
      "Helping women have greater agency over their health and their financial preparedness.",
    color: "#FF3A21",
    href: "https://sdgs.un.org/goals/goal5",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    description:
      "Working across healthcare, finance, technology, government and communities to make maternal preparation better.",
    color: "#19486A",
    href: "https://sdgs.un.org/goals/goal17",
  },
];

/* =========================================================
   SOCIAL ICON
   lucide-react no longer ships brand icons (Linkedin, Facebook,
   Instagram, ...), so the brand marks are inline SVGs.
========================================================= */

function SocialIcon({ type }: { type: SocialType }) {
  switch (type) {
    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
        </svg>
      );

    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );

    case "x":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.29 19.494h2.039L6.486 3.24H4.298l13.313 17.407z" />
        </svg>
      );

    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );

    case "website":
      return <Globe className="h-4 w-4" strokeWidth={2} aria-hidden="true" />;

    default:
      return (
        <ExternalLink className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
      );
  }
}

/* =========================================================
   SDG PICTOGRAM + CARD
   Pictogram strokes are drawn in by anime.js when the card
   scrolls into view (see the `[data-sdg-icon]` block in the
   page effect).
========================================================= */

function SdgPictogram({ number }: { number: number }) {
  const common = {
    viewBox: "0 0 64 64",
    className: "h-full w-full",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    "data-sdg-icon": true,
  };

  switch (number) {
    // Good Health & Well-being: heart with a pulse line
    case 3:
      return (
        <svg {...common}>
          <path d="M32 54C16 42 8 33 8 23c0-7 5-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 7 0 12 5 12 12 0 10-8 19-24 31z" />
          <path d="M12 31h11l4-8 6 15 4-7h15" />
        </svg>
      );

    // Gender Equality: female symbol + equals bar
    case 5:
      return (
        <svg {...common}>
          <circle cx="32" cy="22" r="13" />
          <path d="M32 35v10M26 41h12" />
          <path d="M18 54h28M18 60h28" />
        </svg>
      );

    // Partnerships: interlinked rings
    case 17:
      return (
        <svg {...common}>
          <circle cx="32" cy="14" r="8" />
          <circle cx="50" cy="28" r="8" />
          <circle cx="43" cy="49" r="8" />
          <circle cx="21" cy="49" r="8" />
          <circle cx="14" cy="28" r="8" />
        </svg>
      );

    default:
      return null;
  }
}

function SdgCard({ sdg }: { sdg: Sdg }) {
  const num = String(sdg.number);

  return (
    <article
      data-reveal
      className={`group flex flex-col overflow-hidden rounded-[1.75rem] bg-white text-[#29122F] shadow-[0_25px_60px_rgba(0,0,0,0.25)] ${HIDDEN}`}
    >
      {/* Official-style tile */}
      <div
        className="relative flex aspect-[5/4] flex-col justify-between p-6 text-white"
        style={{ backgroundColor: sdg.color }}
      >
        {sdg.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={sdg.image}
            alt={`UN Sustainable Development Goal ${num}: ${sdg.title}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
            <div className="flex items-start justify-between">
              <span
                data-sdg-number
                className="text-6xl font-black leading-none tracking-[-0.06em]"
              >
                {num}
              </span>

              <div className="h-16 w-16 transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110">
                <SdgPictogram number={sdg.number} />
              </div>
            </div>

            <h3 className="max-w-[14ch] text-xl font-black uppercase leading-[1.05] tracking-tight">
              {sdg.title}
            </h3>
          </>
        )}
      </div>

      {/* Why it matters to Mama Sure */}
      <div className="flex flex-1 flex-col p-6">
        <p className="flex-1 text-[15px] leading-7 text-[#66596A]">
          {sdg.description}
        </p>

        <a
          href={sdg.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-bold text-[#8E0FA8] transition hover:text-[#D80A68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A914C7]"
        >
          About Goal {num}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}

/* =========================================================
   FOUNDER CARD (+ full profile dialog)
   Uses the native <dialog>: focus trap, Esc to close and a
   backdrop for free. anime.js animates the dialog in.
========================================================= */

function initialsOf(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

/** Photo with a graceful fallback when the image file is missing. */
function FounderPhoto({
  founder,
  sizes,
  className = "",
}: {
  founder: Founder;
  sizes: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={founder.name}
        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#F3E4F4] via-[#E9D8EC] to-[#F58DB7]/50"
      >
        <span className="text-6xl font-black tracking-[-0.05em] text-[#8E0FA8]/70">
          {initialsOf(founder.name)}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={founder.image}
      alt={founder.name}
      fill
      sizes={sizes}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

function SocialLinks({ founder }: { founder: Founder }) {
  if (founder.socials.length === 0) return null;

  return (
    <div className="flex gap-2">
      {founder.socials.map((social) => (
        <a
          key={social.type}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${founder.name} on ${social.label}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9DDEB] bg-[#FBF8FC] text-[#71117F] transition duration-300 hover:-translate-y-1 hover:border-[#A914C7] hover:bg-[#F3E4F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A914C7]"
        >
          <SocialIcon type={social.type} />
        </a>
      ))}
    </div>
  );
}

function FounderCard({ founder }: { founder: Founder }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const reduced = usePrefersReducedMotion();

  const openProfile = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    document.body.style.overflow = "hidden";
    dialog.showModal();

    if (reduced) return;

    // Panel rises in, then the content lines up one after another.
    createTimeline({ defaults: { ease: "out(4)" } })
      .add(
        dialog,
        {
          opacity: [0, 1],
          translateY: [36, 0],
          scale: [0.96, 1],
          duration: 520,
        },
        0,
      )
      .add(
        qsa(dialog, "[data-dialog-item]"),
        {
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 600,
          delay: stagger(70),
        },
        160,
      );
  };

  const closeProfile = () => dialogRef.current?.close();

  // Always release the scroll lock, however the dialog closes.
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const [lead, ...rest] = founder.fullBio.split("\n\n");

  return (
    <article
      data-reveal
      className={`group flex flex-col overflow-hidden rounded-[2rem] border border-[#E9DDEB] bg-white shadow-[0_20px_60px_rgba(74,31,86,0.07)] transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(74,31,86,0.14)] ${HIDDEN}`}
    >
      {/* Photo with the name set on it */}
      <div className="relative aspect-[4/4.4] overflow-hidden bg-[#F3E4F4]">
        <FounderPhoto
          founder={founder}
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="transition duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#32133B]/85 via-[#32133B]/10 to-transparent" />

        <div className="absolute inset-x-6 bottom-6 text-white">
          <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#71117F] backdrop-blur-md">
            {founder.role}
          </span>

          <h3 className="mt-3 text-2xl font-black tracking-[-0.035em] sm:text-[1.7rem]">
            {founder.name}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-sm font-bold text-[#A914C7]">
          {founder.contribution}
        </p>

        <p className="mt-3 flex-1 text-[15px] leading-7 text-[#66596A]">
          {founder.shortBio}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#EEE5F0] pt-5">
          {founder.comingSoon ? (
            <span className="text-sm font-semibold text-[#8B7E90]">
              Full profile coming soon
            </span>
          ) : (
            <button
              type="button"
              onClick={openProfile}
              aria-haspopup="dialog"
              className="group/btn inline-flex items-center gap-2 rounded-sm text-sm font-bold text-[#8E0FA8] transition hover:text-[#D80A68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A914C7]"
            >
              Read {founder.name.split(" ")[0]}&apos;s story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          )}

          <SocialLinks founder={founder} />
        </div>
      </div>

      {/* Full profile */}
      {!founder.comingSoon && (
        <dialog
          ref={dialogRef}
          aria-labelledby={titleId}
          onClose={() => {
            document.body.style.overflow = "";
          }}
          onClick={(event) => {
            // A click on the backdrop (the dialog element itself) closes it.
            if (event.target === event.currentTarget) closeProfile();
          }}
          className="m-auto max-h-[92vh] w-[min(58rem,calc(100%-1.5rem))] overflow-hidden rounded-[2rem] bg-white p-0 text-[#29122F] shadow-[0_40px_120px_rgba(50,19,59,0.45)] backdrop:bg-[#32133B]/70 backdrop:backdrop-blur-sm"
        >
          <div className="grid max-h-[92vh] md:grid-cols-[.75fr_1.25fr]">
            {/* Portrait */}
            <div className="relative hidden bg-[#F3E4F4] md:block">
              <FounderPhoto founder={founder} sizes="320px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#32133B]/70 via-transparent to-transparent" />

              <div className="absolute inset-x-6 bottom-6 text-white">
                <p className="text-sm font-semibold text-white/80">
                  {founder.role}
                </p>
                <p className="mt-1 text-2xl font-black tracking-[-0.03em]">
                  {founder.name}
                </p>
              </div>
            </div>

            {/* Story */}
            <div className="relative overflow-y-auto p-7 sm:p-10">
              <button
                type="button"
                onClick={closeProfile}
                aria-label="Close profile"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#E9DDEB] bg-white text-[#71117F] transition hover:bg-[#F3E4F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A914C7]"
              >
                <X className="h-4 w-4" />
              </button>

              <p
                data-dialog-item
                className="pr-12 text-sm font-bold text-[#A914C7] md:hidden"
              >
                {founder.role}
              </p>

              <h3
                id={titleId}
                data-dialog-item
                className="mt-1 pr-12 text-3xl font-black tracking-[-0.04em] text-[#32133B] sm:text-4xl md:mt-0"
              >
                {founder.name}
              </h3>

              <p
                data-dialog-item
                className="mt-2 text-sm font-semibold text-[#8E0FA8]"
              >
                {founder.contribution}
              </p>

              {/* Lead paragraph set larger, with an accent rule */}
              <p
                data-dialog-item
                className="mt-7 border-l-4 border-[#D80A68] pl-5 text-xl font-semibold leading-8 tracking-[-0.01em] text-[#32133B]"
              >
                {lead}
              </p>

              <div className="mt-6 space-y-4 text-[16px] leading-8 text-[#66596A]">
                {rest.map((paragraph, index) => (
                  <p key={`${founder.name}-${index}`} data-dialog-item>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div
                data-dialog-item
                className="mt-8 flex items-center justify-between gap-4 border-t border-[#EEE5F0] pt-6"
              >
                <SocialLinks founder={founder} />

                <button
                  type="button"
                  onClick={closeProfile}
                  className="ml-auto rounded-full bg-[#8E0FA8] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#71117F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8E0FA8]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </article>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    // Reduced motion: nothing runs. Hidden elements are already visible
    // through the `motion-reduce:opacity-100` classes.
    if (!root || reduced) return;

    const scope = createScope({ root });
    const observers: IntersectionObserver[] = [];

    scope.add(() => {
      /* ---------------------------------------------------
         HERO ENTRANCE (one timeline)
      --------------------------------------------------- */

      const hero = createTimeline({ defaults: { ease: "out(4)" } });

      const add = (selector: string, params: AnimParams, at: number): void => {
        const targets = qsa(root, selector);
        if (targets.length > 0) hero.add(targets, params, at);
      };

      add(
        "[data-hero-orb]",
        { opacity: [0, 1], scale: [0.7, 1], duration: 1200 },
        200,
      );
      add(
        "[data-hero-eyebrow]",
        { opacity: [0, 1], translateY: [20, 0], duration: 700 },
        0,
      );
      add(
        "[data-hero-title]",
        { opacity: [0, 1], translateY: [35, 0], duration: 900 },
        150,
      );
      add(
        "[data-hero-copy]",
        { opacity: [0, 1], translateY: [25, 0], duration: 750 },
        300,
      );
      add(
        "[data-hero-cta]",
        { opacity: [0, 1], translateY: [20, 0], duration: 650 },
        450,
      );
      add(
        "[data-hero-stat]",
        { opacity: [0, 1], translateY: [25, 0], duration: 700 },
        550,
      );

      /* ---------------------------------------------------
         SCROLL REVEALS
         Everything marked [data-reveal] (sections, story cards,
         founder cards, SDG cards...) fades up when it scrolls
         into view. Items that arrive together are staggered.
      --------------------------------------------------- */

      const items = qsa(root, "[data-reveal]");

      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          const batch = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target as HTMLElement);

          if (batch.length === 0) return;

          batch.forEach((el) => observer.unobserve(el));
          batch.sort((a, b) => items.indexOf(a) - items.indexOf(b));

          scope.add(() => {
            createTimeline({
              defaults: { ease: "out(4)" },
              onComplete: () => {
                batch.forEach((el) => {
                  el.style.willChange = "auto";
                });
              },
            }).add(
              batch,
              {
                opacity: [0, 1],
                translateY: [35, 0],
                duration: 800,
                delay: stagger(100),
              },
              0,
            );
          });
        },
        { threshold: 0.12 },
      );

      items.forEach((el) => revealObserver.observe(el));
      observers.push(revealObserver);

      /* ---------------------------------------------------
         SDG PICTOGRAMS
         When an icon is mostly in view its strokes are drawn in
         with anime.js, then the goal number settles in.
      --------------------------------------------------- */

      qsa(root, "svg[data-sdg-icon]").forEach((icon) => {
        const card = icon.closest("article");
        const number = card?.querySelector<HTMLElement>("[data-sdg-number]");

        const io = new IntersectionObserver(
          ([entry], observer) => {
            if (!entry?.isIntersecting) return;
            observer.disconnect();

            scope.add(() => {
              const shapes = icon.querySelectorAll("path, circle");
              const drawables = svg.createDrawable(shapes);

              animate(drawables, {
                draw: ["0 0", "0 1"],
                duration: 1400,
                delay: stagger(160, { start: 250 }),
                ease: "inOutQuad",
              });

              if (number) {
                animate(number, {
                  scale: [0.6, 1],
                  opacity: [0, 1],
                  duration: 800,
                  delay: 200,
                  ease: "outBack",
                });
              }
            });
          },
          { threshold: 0.6 },
        );

        io.observe(icon);
        observers.push(io);
      });

      /* ---------------------------------------------------
         FLOATING DECORATIONS
         Keyframes start and end at 0 so loops never jump; each
         element gets its own delay so they drift out of sync, and
         each pauses while off-screen.
      --------------------------------------------------- */

      qsa(root, "[data-float], [data-float-slow]").forEach((el) => {
        const slow = el.hasAttribute("data-float-slow");
        const amp = slow ? 7 : 10;

        const loop = animate(el, {
          translateY: [0, -amp, 0, amp, 0],
          duration: slow ? 10000 : 7000,
          delay: utils.random(0, 1500),
          ease: "inOutSine",
          loop: true,
        });

        const io = new IntersectionObserver(([entry]) => {
          if (entry?.isIntersecting) loop.resume();
          else loop.pause();
        });
        io.observe(el);
        observers.push(io);
      });
    });

    return () => {
      observers.forEach((o) => o.disconnect());
      scope.revert();
    };
  }, [reduced]);

  return (
    <main
      ref={rootRef}
      className="overflow-hidden bg-[#FBF8FC] text-[#29122F]"
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-[#F3E4F4]">
        {/* Decorative shapes */}
        <div
          data-hero-orb
          aria-hidden="true"
          className={`pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#D80A68]/10 blur-2xl ${HIDDEN}`}
        />

        <div
          data-float-slow
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full border-[45px] border-[#F58DB7]/20"
        />

        {/* `rotate` is set via the CSS `rotate` property so the float
            animation (which writes `transform`) can't wipe it out. */}
        <div
          data-float
          aria-hidden="true"
          className="pointer-events-none absolute right-[12%] top-[20%] h-24 w-24 rounded-[35%] border-[18px] border-[#A914C7]/10"
          style={{ rotate: "12deg" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            {/* Copy */}
            <div>
              <div
                data-hero-eyebrow
                className={`inline-flex items-center gap-2 rounded-full border border-[#D7B9DD] bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#71117F] backdrop-blur ${HIDDEN}`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                Our story
              </div>

              <h1
                data-hero-title
                className={`mt-7 max-w-3xl text-[3.3rem] font-black leading-[0.98] tracking-[-0.055em] text-[#32133B] sm:text-6xl lg:text-[5.6rem] ${HIDDEN}`}
              >
                Building a better way to{" "}
                <span className="text-[#D80A68]">
                  prepare for motherhood.
                </span>
              </h1>

              <p
                data-hero-copy
                className={`mt-7 max-w-2xl text-lg leading-8 text-[#66596A] sm:text-xl ${HIDDEN}`}
              >
                Mama Sure began with one woman&apos;s experience and became a
                shared conviction: women deserve a better way to prepare
                financially for maternal healthcare.
              </p>

              <div
                data-hero-cta
                className={`mt-9 flex flex-col gap-3 sm:flex-row ${HIDDEN}`}
              >
                <Link
                  href="/signup"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#8E0FA8] px-6 py-3.5 text-sm font-bold text-white shadow-[0_15px_35px_rgba(142,15,168,0.22)] transition hover:bg-[#71117F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8E0FA8]"
                >
                  Start planning
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="#our-story"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D7B9DD] bg-white/60 px-6 py-3.5 text-sm font-bold text-[#71117F] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8E0FA8]"
                >
                  Our story
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Hero visual */}
            <div
              data-hero-stat
              className={`relative mx-auto w-full max-w-[560px] ${HIDDEN}`}
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/50 p-3 shadow-[0_35px_100px_rgba(74,31,86,0.12)] backdrop-blur">
                <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-[#E9D8EC]">
                  <Image
                    src="/about-hero.png"
                    alt="Woman preparing for motherhood"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#32133B]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/40 bg-white/85 p-5 shadow-xl backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E4F4] text-[#8E0FA8]">
                        <Heart className="h-5 w-5 fill-current" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8E0FA8]">
                          Our belief
                        </p>
                        <p className="mt-1 text-sm font-semibold text-[#32133B]">
                          Preparation creates confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-float
                aria-hidden="true"
                className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white bg-white p-4 shadow-[0_20px_50px_rgba(74,31,86,0.12)] sm:block"
              >
                <ShieldCheck className="h-6 w-6 text-[#D80A68]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section id="our-story" className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div
            data-reveal
            className={`mx-auto max-w-3xl text-center ${HIDDEN}`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A914C7]">
              From one experience to a bigger mission
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#32133B] sm:text-5xl">
              The question that started everything.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#66596A]">
              Pregnancy is often a season of preparation. We prepare for the
              baby, the home, appointments, transport, feeding and everything
              in between. But one important conversation is often left until
              much later: how are we going to pay for the journey?
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "A personal experience",
                text: "One experience revealed how quickly an apparently solid financial plan can be challenged by an unexpected reality.",
              },
              {
                number: "02",
                title: "A bigger question",
                text: "Could other women be facing the same uncertainty? Could preparation begin before circumstances force the conversation?",
              },
              {
                number: "03",
                title: "A shared mission",
                text: "That question brought three people together around a belief that women deserve a better way to prepare for maternal healthcare.",
              },
            ].map((item) => (
              <div
                key={item.number}
                data-reveal
                className={`rounded-[1.75rem] border border-[#E9DDEB] bg-[#FBF8FC] p-7 ${HIDDEN}`}
              >
                <span className="text-sm font-black text-[#D80A68]">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-bold tracking-[-0.025em] text-[#32133B]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-[#66596A]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          THE QUESTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#32133B] py-24 text-white sm:py-32">
        <div
          data-float-slow
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[55px] border-white/5"
        />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div data-reveal className={HIDDEN}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F58DB7]">
              The question
            </p>

            <blockquote className="mt-7 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              “What if women had a better way to prepare financially for
              maternal healthcare?”
            </blockquote>

            <div className="mx-auto mt-8 h-px w-16 bg-[#D80A68]" />

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              That question became the seed of Mama Sure — and eventually,
              became a mission shared by three founders.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FROM STORY TO MAMA SURE
      ===================================================== */}

      <section className="bg-[#F3E4F4] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div data-reveal className={HIDDEN}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A914C7]">
                From story to solution
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#32133B] sm:text-5xl">
                From one woman&apos;s story to Mama Sure.
              </h2>
            </div>

            <div
              data-reveal
              className={`space-y-6 text-[17px] leading-8 text-[#66596A] ${HIDDEN}`}
            >
              <p>
                Maternal healthcare is both a health journey and a financial
                journey. For many families, the financial part can become
                stressful precisely when they are already navigating the
                physical and emotional demands of pregnancy.
              </p>

              <p>
                We believe there should be a better way — a way to make
                financial preparation part of maternal preparation.
              </p>

              <p>
                But preparation should go beyond money alone. Pregnancy
                touches health, finances, information, emotional wellbeing,
                family and everyday life.
              </p>

              <p>
                That is why Mama Sure takes a holistic approach to the
                pregnancy journey — bringing financial preparedness into a
                wider conversation about being informed, prepared and
                supported.
              </p>

              <div className="rounded-[1.75rem] border border-white/80 bg-white/60 p-6">
                <p className="font-bold text-[#32133B]">
                  Being prepared isn&apos;t simply about having money.
                </p>

                <p className="mt-2 text-[15px] leading-7">
                  It is about knowing what lies ahead, understanding your
                  options, planning for the unexpected and feeling more
                  confident about the journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOUNDERS
      ===================================================== */}

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div
            data-reveal
            className={`mx-auto max-w-3xl text-center ${HIDDEN}`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A914C7]">
              Three founders. One conviction.
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#32133B] sm:text-5xl">
              Different experiences. Shared purpose.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#66596A]">
              Each founder came with a different perspective, different
              experiences and different strengths. But we were united by the
              same belief — that financial preparedness can help women approach
              motherhood with greater confidence.
            </p>
          </div>

          <div className="mt-16 grid gap-7 lg:grid-cols-3">
            {FOUNDERS.map((founder) => (
              <FounderCard key={founder.name} founder={founder} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WOMAN-LED
      ===================================================== */}

      <section className="bg-[#FBF8FC] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
            <div data-reveal className={HIDDEN}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D80A68]">
                A woman-led organization
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#32133B] sm:text-5xl">
                Women are at the centre.
              </h2>

              <div className="mt-7 space-y-5 text-[17px] leading-8 text-[#66596A]">
                <p>
                  Mama Sure is proudly woman-led, with a mission shaped by
                  real experiences and a desire to put women at the centre of
                  the maternal healthcare conversation.
                </p>

                <p>
                  For us, being woman-led is more than a description of our
                  leadership. It influences how we listen, how we ask
                  questions, how we think about women&apos;s experiences and
                  how we approach the solutions we create.
                </p>

                <p>
                  Women are at the centre of Mama Sure, but the mission belongs
                  to all of us.
                </p>
              </div>
            </div>

            <div
              data-reveal
              className={`relative overflow-hidden rounded-[2.5rem] bg-[#F3E4F4] p-8 sm:p-10 ${HIDDEN}`}
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-[#F58DB7]/30"
              />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#D80A68] shadow-sm">
                  <Heart className="h-7 w-7 fill-current" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#32133B]">
                  The mission is bigger than us.
                </h3>

                <p className="mt-4 text-[16px] leading-7 text-[#66596A]">
                  Better maternal health requires families, healthcare
                  providers, insurers, financial institutions, policymakers,
                  technology partners, communities and other stakeholders to
                  play their part.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY WE DO THIS
      ===================================================== */}

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div data-reveal className={`max-w-3xl ${HIDDEN}`}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A914C7]">
              Why we chose to do this
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#32133B] sm:text-5xl">
              The problem is bigger than money.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#66596A]">
              Sometimes people don&apos;t need another product pushed at them.
              They need a better way to plan. They need information. They need
              structure. They need somewhere to start.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {BELIEFS.map((belief) => {
              const Icon = belief.icon;

              return (
                <article
                  key={belief.number}
                  data-reveal
                  className={`rounded-[1.75rem] border border-[#E9DDEB] bg-[#FBF8FC] p-7 ${HIDDEN}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-[#D80A68]">
                      {belief.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E4F4] text-[#8E0FA8]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#32133B]">
                    {belief.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[#66596A]">
                    {belief.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PLAN PREPARE PROTECT
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F3E4F4] py-24 sm:py-32">
        <div
          data-float
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full border-[30px] border-[#D80A68]/10"
        />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div data-reveal className={`text-center ${HIDDEN}`}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A914C7]">
              Our philosophy
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] text-[#32133B] sm:text-6xl">
              Plan. Prepare. Protect.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Plan",
                text: "Plan for the maternal journey ahead and understand the financial reality before it arrives.",
              },
              {
                title: "Prepare",
                text: "Prepare financially, practically and with the right information for the journey ahead.",
              },
              {
                title: "Protect",
                text: "Protect your ability to make informed decisions and access the care you need without leaving everything to chance.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                data-reveal
                className={`relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_20px_50px_rgba(74,31,86,0.06)] ${HIDDEN}`}
              >
                <span className="text-sm font-black text-[#D80A68]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-3xl font-black text-[#32133B]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#66596A]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE SERVE
      ===================================================== */}

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
            <div data-reveal className={HIDDEN}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A914C7]">
                Who we serve
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#32133B] sm:text-5xl">
                For women and families who want to think ahead.
              </h2>
            </div>

            <div
              data-reveal
              className={`space-y-6 text-[17px] leading-8 text-[#66596A] ${HIDDEN}`}
            >
              <p>
                Mama Sure is for women and families who want to take greater
                control of their financial preparedness for maternal
                healthcare.
              </p>

              <p>
                We especially care about women who may not have comprehensive
                maternity insurance or enough savings specifically set aside
                for maternity costs.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Women planning for pregnancy",
                  "Expecting mothers",
                  "Families preparing together",
                  "Women without comprehensive maternity cover",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#E9DDEB] bg-[#FBF8FC] p-4 text-sm font-semibold text-[#32133B]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F3E4F4] text-[#8E0FA8]">
                      <Check className="h-4 w-4" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPACT / SDGS
      ===================================================== */}

      <section className="bg-[#32133B] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div data-reveal className={`max-w-3xl ${HIDDEN}`}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F58DB7]">
              The bigger picture
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              Building toward a healthier ecosystem.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Our ambition is not simply to create a platform. It is to
              contribute to an ecosystem that makes maternal preparation
              better. Mama Sure is aligned with three of the United Nations
              Sustainable Development Goals.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SDGS.map((sdg) => (
              <SdgCard key={sdg.number} sdg={sdg} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST
      ===================================================== */}

      <section className="bg-[#FBF8FC] py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <div
            data-reveal
            className={`rounded-[2.5rem] border border-[#E9DDEB] bg-white p-8 shadow-[0_25px_70px_rgba(74,31,86,0.07)] sm:p-12 lg:p-16 ${HIDDEN}`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E4F4] text-[#8E0FA8]">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#A914C7]">
              Why should you trust us?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#32133B] sm:text-5xl">
              Trust is something we must earn.
            </h2>

            <div className="mt-7 max-w-3xl space-y-5 text-[16px] leading-8 text-[#66596A]">
              <p>
                We know that trust cannot be demanded — especially when it
                comes to your money, your health and where those two things
                meet.
              </p>

              <p>
                That means being transparent about what we do, being clear
                about what Mama Sure is and what it is not, protecting the
                information and interests of the people who use our platform,
                listening to our customers and surrounding ourselves with the
                right partners and expertise.
              </p>

              <p className="font-semibold text-[#32133B]">
                We started Mama Sure because one woman&apos;s experience showed
                us what can happen when a financial plan meets an unexpected
                reality. We want to help women prepare differently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MORE THAN A PLATFORM
      ===================================================== */}

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-12">
          <div data-reveal className={HIDDEN}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D80A68]">
              More than a platform
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#32133B] sm:text-5xl">
              Helping women say:
            </h2>

            <p className="mt-10 text-5xl font-black tracking-[-0.055em] text-[#8E0FA8] sm:text-7xl">
              “I am ready.”
            </p>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#66596A]">
              The goal is not simply to have money sitting somewhere. The goal
              is to help a woman reach one of the most important moments of
              her life knowing that she has prepared as best as she can.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F3E4F4] py-24 sm:py-32">
        <div
          data-float
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border-[45px] border-[#F58DB7]/20"
        />

        <div
          data-float-slow
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full border-[40px] border-[#A914C7]/10"
        />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div data-reveal className={HIDDEN}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A914C7]">
              This is Mama Sure
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.055em] text-[#32133B] sm:text-6xl">
              Plan. Prepare. Protect.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#66596A]">
              Prepare financially for the journey to motherhood before the
              expenses begin.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#8E0FA8] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(142,15,168,0.22)] transition hover:bg-[#71117F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8E0FA8]"
              >
                Start planning
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D7B9DD] bg-white/70 px-7 py-4 text-sm font-bold text-[#71117F] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8E0FA8]"
              >
                Talk to us
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}