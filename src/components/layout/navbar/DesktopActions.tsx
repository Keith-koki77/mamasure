"use client";

import Link from "next/link";

import { navActions } from "@/data/navigation";

export default function DesktopActions() {
  return (
    <div className="hidden items-center gap-3 xl:flex">
      {navActions.map((action) => {
        const baseClasses =
          "rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300";

        const variantClasses = {
          primary:
            "bg-purple-700 text-white hover:bg-purple-800",
          secondary:
            "bg-pink-600 text-white hover:bg-pink-700",
          outline:
            "border-2 border-purple-700 bg-white text-purple-700 hover:bg-purple-50 hover:border-purple-800 hover:text-purple-800",
        };

        return (
          <Link
            key={action.label}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            className={`${baseClasses} ${variantClasses[action.variant]}`}
          >
            {action.label}
          </Link>
        );
      })}
    </div>
  );
}