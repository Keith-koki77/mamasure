"use client";

import Image from "next/image";
import {
  Bell,
  ChevronDown,
  Search,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-4 z-40 border-b border-purple-100/70 bg-white/80 backdrop-blur-xl">

      <div className="flex h-24 items-center justify-between px-8">

        {/* Left */}

        <div>

          <h1 className="text-4xl font-extrabold text-slate-900">

            Good morning,
            <span className="text-purple-700">
              {" "}Mary Wanjiku
            </span>
            👋

          </h1>

          <p className="mt-2 text-lg text-gray-500">

            Stay consistent. Every contribution brings you closer to a
            stress-free maternity journey.

          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Search */}

          <div className="hidden xl:block">

            <div className="relative">

              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search hospitals, savings..."
                className="h-14 w-80 rounded-2xl border border-purple-100 bg-white pl-14 pr-5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />

            </div>

          </div>

          {/* Notification */}

          <button className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-100 bg-white transition hover:border-purple-300 hover:bg-purple-50">

            <Bell className="h-6 w-6 text-purple-700" />

            <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold text-white">

              3

            </span>

          </button>

          {/* Profile */}

          <button className="flex items-center gap-4 rounded-2xl border border-purple-100 bg-white px-4 py-2 shadow-sm transition hover:border-purple-300 hover:shadow-md">

            <Image
              src="/avatar.jpg"
              alt="Mary Wanjiku"
              width={52}
              height={52}
              className="rounded-full object-cover"
            />

            <div className="hidden text-left lg:block">

              <p className="font-semibold text-slate-900">

                Mary Wanjiku

              </p>

              <p className="text-sm text-gray-500">

                Premium Member

              </p>

            </div>

            <ChevronDown className="h-5 w-5 text-gray-500" />

          </button>

        </div>

      </div>

    </header>
  );
}