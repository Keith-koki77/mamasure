"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Link href="/" className="flex items-center gap-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-700 text-white font-bold">
            ♥
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-purple-700">Mama</span>
              <span className="text-pink-500">Sure</span>
            </h1>

            <p className="text-xs text-gray-500">
              Prepare. Plan. Welcome Life.
            </p>
          </div>

        </Link>

        <nav className="text-purple-700 font-bold hidden gap-10 md:flex">

          <Link href="#">How it Works</Link>

          <Link href="#">Why Mama Sure</Link>

          <Link href="#">Partners</Link>

          <Link href="#">FAQs</Link>

        </nav>

        <button className="rounded-xl bg-purple-700 px-6 py-3 font-semibold text-white transition hover:bg-purple-800">
          Join Waitlist
        </button>

      </div>
    </header>
  );
}