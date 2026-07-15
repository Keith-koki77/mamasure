"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  Lock,
  TrendingUp,
  GraduationCap,
  Bell,
  Building2,
  Home,
  BarChart3,
  BookOpen,
  User,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Mama Sure", href: "#why-mama-sure" },
  { label: "For Partners", href: "#for-partners" },
  { label: "FAQs", href: "#faqs" },
];

const FEATURES = [
  { icon: ShieldCheck, label: "Trusted Hospitals" },
  { icon: Lock, label: "Secure Planning" },
  { icon: TrendingUp, label: "Personalized Savings" },
  { icon: GraduationCap, label: "Maternal Education" },
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      {/* Ambient background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_85%_10%,#F3E8FF_0%,rgba(243,232,255,0)_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#7C3AED]/10 blur-3xl"
      />


      {/* ---------- Hero content ---------- */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-20 pt-6 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:pt-10">
        {/* Left: copy */}
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#FCE7F3] px-4 py-1.5 text-sm font-semibold text-[#BE185D]">
            <Heart className="h-3.5 w-3.5 fill-[#DB2777] text-[#DB2777]" strokeWidth={0} />
            Kenya&apos;s Maternal Healthcare Planning Platform
          </span>

          <h1 className="text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-[#1E1B4B] sm:text-6xl">
            Plan for Motherhood{" "}
            <span className="bg-gradient-to-r from-[#DB2777] to-[#F472B6] bg-clip-text text-transparent">
              Before Pregnancy
            </span>{" "}
            Begins.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-500">
            Mama Sure helps you prepare financially for pregnancy, delivery and
            maternal care through trusted hospital partnerships and smart
            savings planning.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#7C3AED]/30 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Join the Waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#7C3AED]/30 px-7 py-3.5 text-[15px] font-semibold text-[#5B21B6] transition-colors hover:border-[#7C3AED] hover:bg-[#F5F3FF]"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6">
            {FEATURES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5F3FF]">
                  <Icon className="h-5 w-5 text-[#7C3AED]" />
                </span>
                <span className="text-sm font-semibold leading-tight text-[#1E1B4B]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo + phone mockup + floating cards */}
        <div className="relative flex items-center justify-center">
          {/* Couple photo */}
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#F5F3FF] to-[#FCE7F3] shadow-xl">
            <Image
              src="/hero-couple.png"
              alt="Expecting couple planning their maternity journey together"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>

          {/* Floating: Weekly Tip */}
          <div className="absolute left-[-1rem] top-[30%] hidden w-52 rounded-2xl bg-white p-4 shadow-2xl shadow-slate-300/40 sm:block">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FCE7F3]">
                <Heart className="h-4 w-4 fill-[#DB2777] text-[#DB2777]" strokeWidth={0} />
              </span>
              <span className="text-sm font-bold text-[#1E1B4B]">Weekly Tip</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              New tip on nutrition during early pregnancy
            </p>
            <ChevronRight className="mt-2 h-4 w-4 text-slate-300" />
          </div>

          {/* Floating: Goal Progress */}
          <div className="absolute bottom-[18%] left-[-0.5rem] hidden w-52 rounded-2xl bg-white p-4 shadow-2xl shadow-slate-300/40 sm:block">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
              </span>
              <span className="text-sm font-bold text-[#1E1B4B]">Goal Progress</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              You&apos;re doing great! Keep it up
            </p>
            <ChevronRight className="mt-2 h-4 w-4 text-slate-300" />
          </div>

          {/* Phone mockup */}
          <div className="absolute -right-2 top-1/2 hidden w-[230px] -translate-y-1/2 md:block lg:-right-8 lg:w-[260px]">
            <div className="rounded-[2rem] border-[6px] border-[#1E1B4B] bg-[#1E1B4B] shadow-2xl">
              <div className="overflow-hidden rounded-[1.6rem] bg-white">
                {/* Notch */}
                <div className="flex justify-center bg-white pb-1 pt-2">
                  <div className="h-1.5 w-16 rounded-full bg-[#1E1B4B]" />
                </div>

                <div className="space-y-4 px-4 pb-4 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-[#1E1B4B]">
                      Mama<span className="text-[#DB2777]">Sure</span>
                    </span>
                    <Bell className="h-4 w-4 text-[#DB2777]" />
                  </div>

                  <div>
                    <p className="text-[11px] text-slate-400">Good Morning,</p>
                    <p className="text-sm font-bold text-[#7C3AED]">Sarah 👋</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-medium text-slate-400">
                      Your Maternity Goal
                    </p>
                    <p className="text-lg font-extrabold text-[#1E1B4B]">
                      KES 120,000
                    </p>
                    <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                      <div className="h-2 w-[54%] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#DB2777]" />
                    </div>
                    <div className="mt-1.5 flex justify-between text-[9px] font-medium text-slate-400">
                      <span>KES 65,000 saved</span>
                      <span>KES 55,000 to go</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2.5">
                    <div>
                      <p className="text-[9px] font-medium text-slate-400">
                        Selected Hospital
                      </p>
                      <p className="text-[11px] font-bold text-[#1E1B4B]">
                        Aga Khan University Hospital
                      </p>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2.5">
                    <div>
                      <p className="text-[9px] font-medium text-slate-400">
                        Next Contribution
                      </p>
                      <p className="text-[11px] font-bold text-emerald-500">
                        KES 2,500
                      </p>
                      <p className="text-[9px] text-slate-400">Due in 12 days</p>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300" />
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="flex justify-between border-t border-slate-100 px-5 py-2.5">
                  {[
                    { icon: Home, label: "Home" },
                    { icon: BarChart3, label: "Progress" },
                    { icon: BookOpen, label: "Learn" },
                    { icon: User, label: "Profile" },
                  ].map(({ icon: Icon, label }, i) => (
                    <div
                      key={label}
                      className={`flex flex-col items-center gap-0.5 ${
                        i === 0 ? "text-[#7C3AED]" : "text-slate-300"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-[8px] font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating: Hospital Selected */}
          <div className="absolute right-0 top-[16%] hidden w-48 rounded-2xl bg-white p-4 shadow-2xl shadow-slate-300/40 lg:block">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F3FF]">
                <Building2 className="h-4 w-4 text-[#7C3AED]" />
              </span>
              <span className="text-sm font-bold text-[#1E1B4B]">
                Hospital Selected
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              You have chosen Aga Khan Hospital
            </p>
            <ChevronRight className="mt-2 h-4 w-4 text-slate-300" />
          </div>

          {/* Floating: Reminder */}
          <div className="absolute bottom-[12%] right-0 hidden w-48 rounded-2xl bg-white p-4 shadow-2xl shadow-slate-300/40 lg:block">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FCE7F3]">
                <Bell className="h-4 w-4 fill-[#DB2777] text-[#DB2777]" strokeWidth={0} />
              </span>
              <span className="text-sm font-bold text-[#1E1B4B]">Reminder</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              Your monthly contribution is due soon
            </p>
            <ChevronRight className="mt-2 h-4 w-4 text-slate-300" />
          </div>
        </div>
      </div>

      {/* ---------- Trust bar ---------- */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-14 lg:px-10">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 sm:flex-row sm:justify-between sm:gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5F3FF]">
              <ShieldCheck className="h-5 w-5 text-[#7C3AED]" />
            </span>
            <p className="text-sm font-semibold text-[#1E1B4B] sm:text-[15px]">
              Your health. Your future.{" "}
              <span className="text-[#7C3AED]">Our priority.</span>
            </p>
          </div>

          <div className="hidden h-8 w-px bg-slate-100 sm:block" />

          <p className="text-center text-sm text-slate-500 sm:text-left">
            Backed by trusted hospitals and financial partners.
          </p>

          <div className="hidden h-8 w-px bg-slate-100 sm:block" />

          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {["A", "B", "C", "D"].map((letter) => (
                <span
                  key={letter}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#7C3AED] to-[#DB2777] text-[11px] font-bold text-white"
                >
                  {letter}
                </span>
              ))}
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#1E1B4B] text-[10px] font-bold text-white">
                2K+
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Families already planning
              <br className="hidden sm:block" /> a better tomorrow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}