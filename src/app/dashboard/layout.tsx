import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import Sidebar from "@/components/dashboard/layout/Sidebar";
import Topbar from "@/components/dashboard/layout/Topbar";

import { createClient } from "@/lib/supabase/server";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-[#FAF8FF]">

      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">

        <Topbar user={user} />

        <main className="flex-1 overflow-y-auto">

          <div className="mx-auto max-w-[1700px] p-8">
            {children}
          </div>

        </main>

      </div>

    </div>
  );
}