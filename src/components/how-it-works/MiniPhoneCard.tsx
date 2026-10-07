"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { animate, createScope, spring, stagger, utils } from "animejs";
import { Bell, Check, CheckCircle2, Sprout } from "lucide-react";

import { qsa, useInViewOnce, usePrefersReducedMotion } from "./motion";

export type PhoneType =
  | "hospital"
  | "goal"
  | "payment"
  | "progress"
  | "education"
  | "success";

export interface MiniPhoneCardProps {
  type: PhoneType;
}

const LABELS: Record<PhoneType, string> = {
  hospital:
    "Illustrative app screen: comparing delivery packages from three hospitals",
  goal: "Illustrative app screen: setting a KES 120,000 maternity savings goal",
  payment: "Illustrative app screen: contributing KES 5,000 with M-Pesa",
  progress:
    "Illustrative app screen: savings tracker showing 52 percent of KES 120,000 saved",
  education: "Illustrative app screen: trimester guide with daily tips",
  success: "Illustrative app screen: goal reached, KES 120,000 saved",
};

const GOAL = 120_000;
const PROGRESS_PERCENT = 52;
const BAR_HEIGHTS = [28, 40, 36, 54, 66, 80] as const;

const money = (n: number): string => `KES ${n.toLocaleString("en-US")}`;

/* ---------------------------------------------------------
   FRAME
   The mockup is exposed to assistive tech as a single labelled
   image (role="img" makes its children presentational). The
   controls inside are pointer-only demos (tabIndex -1).
--------------------------------------------------------- */

function Frame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="mx-auto w-full max-w-[250px] select-none overflow-hidden rounded-[28px] border-[6px] border-[#2A1038] bg-white shadow-[0_18px_40px_rgba(74,20,102,0.22)]"
    >
      {/* Notch */}
      <div className="flex justify-center bg-white pt-2">
        <span className="h-1.5 w-14 rounded-full bg-[#2A1038]/90" />
      </div>

      <div
        className="min-h-[236px] px-4 pb-4 pt-3"
        style={{
          background: "linear-gradient(180deg, #FBF4FC 0%, #FFFFFF 70%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Heading({ small, title }: { small: string; title: string }) {
  return (
    <div className="mb-3">
      <p className="text-[11px] font-medium text-slate-500">{small}</p>
      <h4 className="text-[15px] font-bold leading-tight text-slate-900">
        {title}
      </h4>
    </div>
  );
}

/* ---------------------------------------------------------
   1. HOSPITAL: selectable package rows
--------------------------------------------------------- */

const HOSPITALS = [
  { name: "Sample Hospital A", pkg: "Normal delivery", price: 85_000 },
  { name: "Sample Hospital B", pkg: "Normal delivery", price: 110_000 },
  { name: "Sample Hospital C", pkg: "Normal delivery", price: 140_000 },
] as const;

function Hospital() {
  const [active, setActive] = useState<number>(1);

  return (
    <>
      <Heading small="Delivery packages" title="Compare hospitals" />
      <div className="space-y-2">
        {HOSPITALS.map((r, i) => {
          const selected = i === active;
          return (
            <button
              key={r.name}
              type="button"
              tabIndex={-1}
              onClick={() => setActive(i)}
              className={`flex w-full items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-left transition-colors duration-200 ${
                selected
                  ? "border-purple-400 bg-purple-50"
                  : "border-purple-100 bg-white hover:border-purple-200"
              }`}
            >
              <span className="min-w-0">
                <span className="block truncate text-[12px] font-semibold text-slate-900">
                  {r.name}
                </span>
                <span className="block text-[10.5px] text-slate-500">
                  {r.pkg}
                </span>
              </span>

              <span className="flex shrink-0 items-center gap-2">
                <span className="text-[11.5px] font-bold text-purple-700">
                  {money(r.price)}
                </span>
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors duration-200 ${
                    selected
                      ? "border-purple-600 bg-purple-600 text-white"
                      : "border-purple-200"
                  }`}
                >
                  {selected && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}

/* ---------------------------------------------------------
   2. GOAL: weekly / monthly toggle
--------------------------------------------------------- */

type Period = "weekly" | "monthly";

const PLAN: Record<Period, string> = {
  monthly: `Save ${money(GOAL / 24)} a month for 24 months`,
  weekly: `Save ${money(Math.ceil(GOAL / 104))} a week for 104 weeks`,
};

function Goal() {
  const [period, setPeriod] = useState<Period>("monthly");

  const pill = (value: Period, label: string) => (
    <button
      type="button"
      tabIndex={-1}
      onClick={() => setPeriod(value)}
      className={`rounded-full py-1.5 text-center text-[11px] font-semibold transition-colors duration-200 ${
        period === value
          ? "bg-purple-600 text-white"
          : "border border-purple-100 bg-white text-slate-500 hover:border-purple-200"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      <Heading small="Your maternity goal" title="Set your savings plan" />
      <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-purple-100">
        <p className="text-[10.5px] text-slate-500">Goal amount</p>
        <p className="text-[26px] font-extrabold leading-tight tracking-tight text-slate-900">
          {money(GOAL)}
        </p>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {pill("weekly", "Weekly")}
        {pill("monthly", "Monthly")}
      </div>

      <p className="mt-3 rounded-xl bg-pink-50 px-3 py-2 text-[11.5px] font-semibold text-pink-600">
        {PLAN[period]}
      </p>
    </>
  );
}

/* ---------------------------------------------------------
   3. PAYMENT: M-Pesa CTA with a tap confirmation
--------------------------------------------------------- */

function Payment() {
  const [sent, setSent] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const pay = (): void => {
    setSent(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setSent(false), 2400);
  };

  return (
    <>
      <Heading small="Next contribution" title="Contribute easily" />
      <div className="rounded-2xl bg-white p-3 text-center shadow-sm ring-1 ring-purple-100">
        <p className="text-[10.5px] text-slate-500">Amount</p>
        <p className="text-[28px] font-extrabold leading-tight tracking-tight text-slate-900">
          KES 5,000
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl border border-purple-100 bg-white px-3 py-2">
        <span className="text-[11.5px] font-semibold text-slate-700">
          M-Pesa number
        </span>
        <span className="text-[11.5px] text-slate-500">07•• ••• •••</span>
      </div>

      <button
        type="button"
        tabIndex={-1}
        onClick={pay}
        className={`mt-3 flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-center text-[12.5px] font-bold text-white transition-colors duration-300 active:scale-[0.98] ${
          sent ? "bg-emerald-600" : "bg-[#A914C7] hover:bg-[#9411AE]"
        }`}
      >
        {sent ? (
          <>
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
            Payment sent
          </>
        ) : (
          "Pay with M-Pesa"
        )}
      </button>
    </>
  );
}

/* ---------------------------------------------------------
   4. PROGRESS: bar + chart animate when scrolled into view
--------------------------------------------------------- */

function Progress({ reduced }: { reduced: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);
  const seen = useInViewOnce(rootRef, 0.5);

  // Collapse to zero on the client so the fill can play when visible.
  useEffect(() => {
    const bar = barRef.current;
    const group = colsRef.current;
    if (!bar || !group || reduced) return;

    const cols = qsa(group, "[data-col]");
    bar.style.width = "0%";
    cols.forEach((c) => {
      c.style.height = "0%";
    });

    return () => {
      bar.style.width = `${PROGRESS_PERCENT}%`;
      cols.forEach((c) => {
        c.style.height = `${c.dataset.h ?? 0}%`;
      });
    };
  }, [reduced]);

  useEffect(() => {
    const root = rootRef.current;
    const bar = barRef.current;
    const group = colsRef.current;
    if (!seen || reduced || !root || !bar || !group) return;

    const scope = createScope({ root });
    scope.add(() => {
      animate(bar, {
        width: `${PROGRESS_PERCENT}%`,
        duration: 1600,
        delay: 400,
        ease: "outElastic(1, .6)",
      });

      qsa(group, "[data-col]").forEach((col, i) => {
        animate(col, {
          height: `${BAR_HEIGHTS[i] ?? 0}%`,
          duration: 900,
          delay: 600 + i * 90,
          ease: "outBack(2)",
        });
      });
    });

    return () => scope.revert();
  }, [seen, reduced]);

  return (
    <div ref={rootRef}>
      <Heading small="Maternity fund" title="Track your progress" />
      <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-purple-100">
        <div className="flex items-end justify-between">
          <p className="text-[22px] font-extrabold leading-none tracking-tight text-slate-900">
            KES 62,000
          </p>
          <span className="text-[11px] font-bold text-purple-700">
            {PROGRESS_PERCENT}%
          </span>
        </div>
        <p className="mt-1 text-[10.5px] text-slate-500">of {money(GOAL)}</p>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-purple-100">
          <div
            ref={barRef}
            className="h-full rounded-full"
            style={{
              width: `${PROGRESS_PERCENT}%`,
              background: "linear-gradient(90deg, #A914C7, #F0529A)",
            }}
          />
        </div>
      </div>

      <div
        ref={colsRef}
        className="mt-3 flex h-16 items-end gap-1.5 rounded-xl bg-white px-3 pb-2 pt-3 ring-1 ring-purple-100"
      >
        {BAR_HEIGHTS.map((h, i) => (
          <span
            key={i}
            data-col
            data-h={h}
            className="flex-1 rounded-t-md"
            style={{
              height: `${h}%`,
              background:
                i === BAR_HEIGHTS.length - 1
                  ? "linear-gradient(180deg,#F0529A,#A914C7)"
                  : "#E6C6EC",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   5. EDUCATION
--------------------------------------------------------- */

const TIPS = [
  { icon: Bell, text: "Antenatal visit reminder" },
  { icon: Sprout, text: "Nutrition tips for this stage" },
] as const;

function Education() {
  return (
    <>
      <Heading small="Week 12" title="Learn along the way" />
      <div
        className="rounded-2xl p-3 text-white"
        style={{ background: "linear-gradient(135deg,#7A1B99,#C22C8F)" }}
      >
        <p className="text-[10.5px] text-white/80">Today&apos;s guide</p>
        <p className="mt-0.5 text-[13px] font-bold leading-snug">
          What to expect this trimester
        </p>
      </div>

      <div className="mt-3 space-y-2">
        {TIPS.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-2.5 rounded-xl border border-purple-100 bg-white px-3 py-2"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-50">
              <Icon className="h-3.5 w-3.5 text-purple-700" />
            </span>
            <span className="text-[11.5px] font-medium text-slate-700">
              {text}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------------------------------------------------------
   6. SUCCESS: springy badge pop when scrolled into view
--------------------------------------------------------- */

function Success({ reduced }: { reduced: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const seen = useInViewOnce(rootRef, 0.5);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    const badge = root.querySelector<HTMLElement>("[data-badge]");
    const lines = qsa(root, "[data-line]");
    if (!badge) return;

    utils.set(badge, { opacity: 0, scale: 0.4 });
    utils.set(lines, { opacity: 0 });

    return () => {
      badge.style.opacity = "";
      badge.style.transform = "";
      lines.forEach((l) => {
        l.style.opacity = "";
        l.style.transform = "";
      });
    };
  }, [reduced]);

  useEffect(() => {
    const root = rootRef.current;
    if (!seen || reduced || !root) return;

    const badge = root.querySelector<HTMLElement>("[data-badge]");
    const lines = qsa(root, "[data-line]");
    if (!badge) return;

    const scope = createScope({ root });
    scope.add(() => {
      animate(badge, {
        opacity: { from: 0, to: 1, duration: 300, ease: "out(2)" },
        scale: { from: 0.4, to: 1, ease: spring({ bounce: 0.55 }) },
        delay: 450,
      });
      animate(lines, {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 600,
        delay: stagger(110, { start: 750 }),
        ease: "outCubic",
      });
    });

    return () => scope.revert();
  }, [seen, reduced]);

  return (
    <div
      ref={rootRef}
      className="flex min-h-[210px] flex-col items-center justify-center text-center"
    >
      <span
        data-badge
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 shadow-lg"
      >
        <CheckCircle2 className="h-8 w-8 text-white" />
      </span>
      <h4
        data-line
        className="mt-3 text-[17px] font-extrabold tracking-tight text-slate-900"
      >
        You&apos;re ready!
      </h4>
      <p data-line className="mt-1 text-[11.5px] text-slate-500">
        Goal reached
      </p>
      <p
        data-line
        className="mt-2 rounded-full bg-purple-50 px-3 py-1 text-[12px] font-bold text-purple-700"
      >
        {money(GOAL)} saved
      </p>
    </div>
  );
}

/* ---------------------------------------------------------
   PUBLIC COMPONENT
--------------------------------------------------------- */

export default function MiniPhoneCard({ type }: MiniPhoneCardProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <Frame label={LABELS[type]}>
      {type === "hospital" && <Hospital />}
      {type === "goal" && <Goal />}
      {type === "payment" && <Payment />}
      {type === "progress" && <Progress reduced={reduced} />}
      {type === "education" && <Education />}
      {type === "success" && <Success reduced={reduced} />}
    </Frame>
  );
}
