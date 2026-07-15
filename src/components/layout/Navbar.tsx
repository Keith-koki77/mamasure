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


        <nav className="hidden gap-10 font-bold text-purple-700 md:flex">
          <Link
            href="/#how-it-works"
            className="transition hover:text-pink-500"
          >
            How it Works
          </Link>

          <Link
            href="/#why-mamasure"
            className="transition hover:text-pink-500"
          >
            Why Mama Sure
          </Link>

          <Link href="/#partners" className="transition hover:text-pink-500">
            Partners
          </Link>

          <Link href="/#faqs" className="transition hover:text-pink-500">
            FAQs
          </Link>
        </nav>

        <Link
          href="YOUR_GOOGLE_FORM_LINK"
          target="_blank"
          className="rounded-xl bg-purple-700 px-6 py-3 font-semibold text-white transition hover:bg-purple-800"
        >
          Join Waitlist
        </Link>

        <Link
          href="/signup"
          target=""
          className="rounded-xl bg-pink-700 px-6 py-3 font-semibold text-white transition hover:bg-pink-800"
        >
          Sign up
        </Link>

        <Link
          href="/login"
          className="rounded-xl border-4 border-purple-700 bg-white px-6 py-3 font-semibold text-purple-700 transition-all duration-300 hover:bg-purple-50 hover:border-purple-800 hover:text-purple-800"
        >
          Log In
        </Link>
      </div>
    </header>
  );
}