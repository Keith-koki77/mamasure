import type { ReactNode } from "react";

import Sidebar from "@/components/dashboard/layout/Sidebar";
import Topbar from "@/components/dashboard/layout/Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#FAF8FF]">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex min-h-screen flex-1 flex-col">

        {/* Top Navigation */}

        <Topbar />

        {/* Page Content */}

        <main className="flex-1 overflow-y-auto">

          <div className="mx-auto max-w-[1700px] p-8">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}