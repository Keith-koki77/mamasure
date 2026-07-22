"use client";

import Link from "next/link";
import { navLinks } from "@/data/navigation";

interface NavLinksProps {
  direction?: "horizontal" | "vertical";
  onClick?: () => void;
}

export default function NavLinks({
  direction = "horizontal",
  onClick,
}: NavLinksProps) {
  const layout =
    direction === "horizontal"
      ? "flex items-center gap-6"
      : "flex flex-col gap-6";

  const text =
    direction === "horizontal"
      ? "text-[15px] font-semibold text-purple-700"
      : "text-lg font-semibold text-slate-900";

  return (
    <nav className={layout}>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={onClick}
          className={`transition-colors duration-300 hover:text-pink-500 ${text}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}