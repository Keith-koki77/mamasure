"use client";

import Link from "next/link";

interface LogoProps {
  href?: string;
}

export default function Logo({
  href = "/",
}: LogoProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
      aria-label="MamaSure Home"
    >
      {/* Logo Icon */}

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-700 text-lg font-bold text-white shadow-md lg:h-11 lg:w-11">
        ♥
      </div>

      {/* Brand */}

      <div className="leading-tight">

        <h1 className="text-xl font-bold sm:text-2xl">
          <span className="text-purple-700">Mama</span>
          <span className="text-pink-500">Sure</span>
        </h1>

        <p className="hidden text-xs text-gray-500 sm:block">
          Prepare. Plan. Welcome Life.
        </p>

      </div>
    </Link>
  );
}