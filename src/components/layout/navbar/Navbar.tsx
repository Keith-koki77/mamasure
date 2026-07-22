"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import DesktopActions from "./DesktopActions";
import MobileMenuButton from "./MobileMenuButton";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);

  const closeMenu = () => setIsOpen(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  /**
   * Prevent background scrolling
   * while the mobile drawer is open.
   */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /**
   * Close the drawer when the user
   * presses the Escape key.
   */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">

        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">

          {/* Logo */}

          <Logo />

          {/* Desktop Navigation */}

          <DesktopNav />

          {/* Desktop Buttons */}

          <DesktopActions />

          {/* Mobile Menu */}

          <MobileMenuButton
            isOpen={isOpen}
            onClick={toggleMenu}
          />

        </div>

      </header>

      {/* Mobile Drawer */}

      <MobileDrawer
        isOpen={isOpen}
        onClose={closeMenu}
      />
    </>
  );
}