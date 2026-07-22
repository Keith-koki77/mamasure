"use client";

import Link from "next/link";
import { X } from "lucide-react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

import { navActions } from "@/data/navigation";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({
  isOpen,
  onClose,
}: MobileDrawerProps) {
  const variantClasses = {
    primary:
      "bg-purple-700 text-white hover:bg-purple-800",
    secondary:
      "bg-pink-600 text-white hover:bg-pink-700",
    outline:
      "border-2 border-purple-700 bg-white text-purple-700 hover:bg-purple-50",
  };

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}

      <aside
        id="mobile-navigation"
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

          <Logo />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 transition hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-slate-700" />
          </button>

        </div>

        {/* Navigation */}

        <div className="flex-1 overflow-y-auto px-6 py-8">

          <NavLinks
            direction="vertical"
            onClick={onClose}
          />

          <div className="my-8 border-t border-gray-200" />

          {/* Actions */}

          <div className="space-y-4">

            {navActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={
                  action.external
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={onClose}
                className={`block w-full rounded-xl px-5 py-4 text-center font-semibold transition-all duration-300 ${variantClasses[action.variant]}`}
              >
                {action.label}
              </Link>
            ))}

          </div>

        </div>

        {/* Footer */}

        <div className="border-t border-gray-100 px-6 py-6">

          <p className="text-center text-sm text-gray-500">
            Prepare. Plan. Welcome Life.
          </p>

          <p className="mt-2 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} MamaSure
          </p>

        </div>

      </aside>
    </>
  );
}