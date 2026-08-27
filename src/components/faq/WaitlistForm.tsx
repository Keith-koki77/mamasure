"use client";

import {
  ArrowRight,
  Bell,
  CalendarDays,
  Lock,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";

export default function WaitlistForm() {
  return (
    <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 shadow-[0_30px_80px_rgba(109,40,217,0.25)]">
      {/* Decorative Dots */}
      <div className="absolute left-6 top-6 hidden sm:grid grid-cols-4 gap-3 opacity-20 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="h-2 w-2 rounded-full bg-white" />
        ))}
      </div>

      <div className="absolute bottom-6 right-6 hidden sm:grid grid-cols-4 gap-3 opacity-20 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="h-2 w-2 rounded-full bg-white" />
        ))}
      </div>

      <div className="relative grid gap-8 sm:gap-12 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
        {/* LEFT */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <div className="mx-auto lg:mx-0 flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-2xl sm:rounded-full bg-white/20 backdrop-blur-md">
            <Mail className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
          </div>

          <h2 className="mt-6 sm:mt-8 text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight">
            Be the First to Experience <br className="hidden sm:block" />
            the Future of <br className="hidden sm:block" />
            Maternity Care
          </h2>

          <p className="mt-4 sm:mt-6 mx-auto lg:mx-0 max-w-md text-sm sm:text-lg leading-relaxed text-purple-100">
            Join our waitlist today and receive early access, product updates,
            exclusive launch offers and maternal health insights.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <form className="grid gap-4 sm:gap-5" onSubmit={(e) => e.preventDefault()}>
            {/* Row 1: Inputs */}
            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative">
                <User className="absolute left-4 sm:left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-500 shrink-0" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-14 sm:h-16 w-full rounded-xl sm:rounded-2xl border-0 bg-white pl-12 sm:pl-14 pr-4 text-sm sm:text-base text-slate-900 outline-none ring-0 placeholder:text-gray-400 focus:ring-4 focus:ring-white/30"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 sm:left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-500 shrink-0" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 sm:h-16 w-full rounded-xl sm:rounded-2xl border-0 bg-white pl-12 sm:pl-14 pr-4 text-sm sm:text-base text-slate-900 outline-none placeholder:text-gray-400 focus:ring-4 focus:ring-white/30"
                />
              </div>

              <div className="relative sm:col-span-2 lg:col-span-1">
                <Phone className="absolute left-4 sm:left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-500 shrink-0" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 sm:h-16 w-full rounded-xl sm:rounded-2xl border-0 bg-white pl-12 sm:pl-14 pr-4 text-sm sm:text-base text-slate-900 outline-none placeholder:text-gray-400 focus:ring-4 focus:ring-white/30"
                />
              </div>
            </div>

            {/* Row 2: Date + CTA Button */}
            <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-[1fr_auto]">
              <div className="relative">
                <CalendarDays className="absolute left-4 sm:left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-500 shrink-0 pointer-events-none" />
                <input
                  type="date"
                  className="h-14 sm:h-16 w-full rounded-xl sm:rounded-2xl border-0 bg-white pl-12 sm:pl-14 pr-4 text-sm sm:text-base text-slate-900 outline-none focus:ring-4 focus:ring-white/30"
                />
              </div>

              <Link
                href="https://surveymars.com/q/NCVBi4nlK"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 sm:h-16 items-center justify-center gap-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-800 to-pink-600 px-6 sm:px-8 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </Link>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-white/90">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
              <span>No commitment</span>
            </div>

            <div className="hidden sm:block h-4 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
              <span>Your data is secure</span>
            </div>

            <div className="hidden sm:block h-4 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
              <span>We'll never spam you</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}