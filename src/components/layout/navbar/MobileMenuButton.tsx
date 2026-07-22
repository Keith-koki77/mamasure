"use client";

import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({
  isOpen,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-100 bg-white text-purple-700 shadow-sm transition-all duration-300 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 xl:hidden"
    >
      <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden">
        <Menu
          className={`absolute h-6 w-6 transition-all duration-300 ${
            isOpen
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />

        <X
          className={`absolute h-6 w-6 transition-all duration-300 ${
            isOpen
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}