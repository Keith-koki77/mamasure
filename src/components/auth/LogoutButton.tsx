"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.replace("/");

    router.refresh();
  }

  return (
    <button
      onClick={logout}
      className="rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600"
    >
      Sign Out
    </button>
  );
}