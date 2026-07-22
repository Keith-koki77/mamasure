"use client";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import DesktopActions from "./DesktopActions";
import MobileMenuButton from "./MobileMenuButton";
import MobileDrawer from "./MobileDrawer";

import { useNavbar } from "@/hooks/useNavbar";

export default function Navbar() {
  const {
    isOpen,
    closeMenu,
    toggleMenu,
  } = useNavbar();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
          <Logo />

          <DesktopNav />

          <DesktopActions />

          <MobileMenuButton
            isOpen={isOpen}
            onClick={toggleMenu}
          />
        </div>
      </header>

      <MobileDrawer
        isOpen={isOpen}
        onClose={closeMenu}
      />
    </>
  );
}