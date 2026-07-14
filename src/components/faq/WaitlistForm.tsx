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

export default function WaitlistForm() {
  return (
    <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 shadow-[0_30px_80px_rgba(109,40,217,0.25)]">

      {/* Decorative Dots */}

      <div className="absolute left-6 top-6 grid grid-cols-4 gap-3 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="h-2 w-2 rounded-full bg-white"
          />
        ))}
      </div>

      <div className="absolute bottom-6 right-6 grid grid-cols-4 gap-3 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="h-2 w-2 rounded-full bg-white"
          />
        ))}
      </div>

      <div className="relative grid gap-12 p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">

        {/* LEFT */}

        <div className="flex flex-col justify-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">

            <Mail className="h-12 w-12 text-white" />

          </div>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white lg:text-5xl">

            Be the First to Experience
            <br />
            the Future of
            <br />
            Maternity Care

          </h2>

          <p className="mt-6 max-w-md text-lg leading-8 text-purple-100">

            Join our waitlist today and receive early access,
            product updates, exclusive launch offers and maternal
            health insights.

          </p>

        </div>

        {/* RIGHT */}

        <div>

          <form className="grid gap-5">

            {/* Row 1 */}

            <div className="grid gap-5 md:grid-cols-3">

              <div className="relative">

                <User className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-500" />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-16 w-full rounded-2xl border-0 bg-white pl-14 pr-5 text-slate-900 outline-none ring-0 placeholder:text-gray-500 focus:ring-4 focus:ring-white/30"
                />

              </div>

              <div className="relative">

                <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-500" />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-16 w-full rounded-2xl border-0 bg-white pl-14 pr-5 text-slate-900 outline-none placeholder:text-gray-500 focus:ring-4 focus:ring-white/30"
                />

              </div>

              <div className="relative">

                <Phone className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-500" />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-16 w-full rounded-2xl border-0 bg-white pl-14 pr-5 text-slate-900 outline-none placeholder:text-gray-500 focus:ring-4 focus:ring-white/30"
                />

              </div>

            </div>

            {/* Row 2 */}

            <div className="grid gap-5 md:grid-cols-[1fr_280px]">

              <div className="relative">

                <CalendarDays className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-500" />

                <input
                  type="date"
                  className="h-16 w-full rounded-2xl border-0 bg-white pl-14 pr-5 text-slate-900 outline-none focus:ring-4 focus:ring-white/30"
                />

              </div>

              <button
                type="submit"
                className="group flex h-16 items-center justify-center gap-3 rounded-2xl bg-white font-bold text-pink-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >

                Join the Waitlist

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

              </button>

            </div>

          </form>

          {/* Trust Indicators */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/90 lg:justify-start">

            <div className="flex items-center gap-2">

              <ShieldCheck className="h-5 w-5" />

              <span>No commitment</span>

            </div>

            <div className="hidden h-5 w-px bg-white/20 md:block" />

            <div className="flex items-center gap-2">

              <Lock className="h-5 w-5" />

              <span>Your data is secure</span>

            </div>

            <div className="hidden h-5 w-px bg-white/20 md:block" />

            <div className="flex items-center gap-2">

              <Bell className="h-5 w-5" />

              <span>We'll never spam you</span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}