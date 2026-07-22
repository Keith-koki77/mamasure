"use client";

import NavLinks from "./NavLinks";

export default function DesktopNav() {
  return (
    <div className="hidden xl:flex xl:flex-1 xl:justify-center">
      <NavLinks />
    </div>
  );
}