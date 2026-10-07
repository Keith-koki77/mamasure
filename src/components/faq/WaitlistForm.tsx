"use client";

import {
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  Loader2,
  Lock,
  Mail,
  Phone,
  ShieldCheck,
  User,
  type LucideIcon,
} from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";

/**
 * TODO: point this at your real waitlist route / provider.
 * Expects a JSON POST: { name, email, phone, dueDate }.
 * Until it exists, the form shows the error state, which links to the survey.
 */
const WAITLIST_ENDPOINT = "/api/waitlist";
const SURVEY_URL = "https://surveymars.com/q/NCVBi4nlK";

type Status = "idle" | "submitting" | "success" | "error";

const INPUT =
  "h-14 w-full rounded-xl border-0 bg-white pl-12 pr-4 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/40";

function Field({
  label,
  htmlFor,
  icon: Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-white"
      >
        {label}
      </label>
      <div className="relative">
        <Icon
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#A914C7]"
        />
        {children}
      </div>
    </div>
  );
}

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("submitting");
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const submitting = status === "submitting";

  return (
    <div
      className="relative overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(110,20,130,0.28)] sm:rounded-[32px] lg:rounded-[36px]"
      style={{
        background:
          "linear-gradient(135deg, #4A1466 0%, #7A1B99 55%, #A914C7 100%)",
      }}
    >
      {/* Rings, same motif as the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rotate-[28deg] rounded-[45%] border-[40px] border-[#F58DB7]/35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full border-[28px] border-white/10"
      />

      <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-14">
        {/* ---------------- Copy ---------------- */}
        <div className="flex flex-col justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white/80 bg-white/15 backdrop-blur sm:h-16 sm:w-16">
            <Mail className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </span>

          <h2 className="mt-6 text-[clamp(1.75rem,4.6vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
            Be the first to experience the future of maternity care.
          </h2>

          <p className="mt-4 max-w-md text-[16px] leading-[1.7] text-white/85 sm:mt-6 sm:text-lg">
            Join our waitlist today and receive early access, product updates,
            exclusive launch offers and maternal health insights.
          </p>
        </div>

        {/* ---------------- Form / states ---------------- */}
        <div>
          {status === "success" ? (
            <div
              role="status"
              className="flex h-full min-h-[280px] flex-col items-start justify-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#A914C7] shadow-lg">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                You&apos;re on the list!
              </h3>
              <p className="mt-2 max-w-md text-[16px] leading-[1.7] text-white/85">
                Thank you for joining. We&apos;ll be in touch with early access
                and updates as Mama Sure gets closer to launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" htmlFor="wl-name" icon={User}>
                  <input
                    id="wl-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Wanjiku"
                    className={INPUT}
                  />
                </Field>

                <Field label="Email address" htmlFor="wl-email" icon={Mail}>
                  <input
                    id="wl-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    className={INPUT}
                  />
                </Field>

                <Field label="Phone number (optional)" htmlFor="wl-phone" icon={Phone}>
                  <input
                    id="wl-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="07•• ••• •••"
                    className={INPUT}
                  />
                </Field>

                <Field
                  label="Expected due date (optional)"
                  htmlFor="wl-date"
                  icon={CalendarDays}
                >
                  <input
                    id="wl-date"
                    name="dueDate"
                    type="date"
                    className={`${INPUT} [color-scheme:light]`}
                  />
                </Field>
              </div>

              {status === "error" && (
                <p
                  role="alert"
                  className="rounded-xl bg-white/15 px-4 py-3 text-sm leading-relaxed text-white"
                >
                  We couldn&apos;t save your details just now. Please try again,
                  or{" "}
                  <a
                    href={SURVEY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-4"
                  >
                    join through our short survey
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="
                  group
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-white
                  px-8
                  text-[16px]
                  font-bold
                  text-[#8E0FA8]
                  shadow-xl
                  transition-all
                  duration-300
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                  active:scale-[0.99]
                  disabled:cursor-not-allowed
                  disabled:opacity-80
                  motion-safe:[@media(hover:hover)]:hover:-translate-y-0.5
                "
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Joining…
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Trust indicators */}
          <ul className="mt-6 flex flex-col gap-3 text-sm text-white/90 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-6">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              No commitment
            </li>
            <li className="flex items-center gap-2">
              <Lock className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              Your data is secure
            </li>
            <li className="flex items-center gap-2">
              <Bell className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              We&apos;ll never spam you
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}