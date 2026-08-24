"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Logo({ href = "/", onClick, className = "" }: LogoProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
      aria-label="MamaSure Home"
    >
      {/* Logo Icon */}
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full lg:h-11 lg:w-11">
        <Image
          src="/logo.png"
          alt="MamaSure Logo"
          fill
          className="object-cover"
          priority
        />
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