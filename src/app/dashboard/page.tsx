import { getDashboard } from "@/features/dashboard/services/dashboard.api";
import DashboardHome from "@/features/dashboard/components/DashboardHome";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .maybeSingle();

  let dashboard;

  try {
    dashboard = await getDashboard();
  } catch (error) {
    console.error("Dashboard API error:", error);

    dashboard = {};
  }

  const fullName =
    profile?.full_name ??
    user.user_metadata?.full_name ??
    user.email?.split("@")[0] ??
    "there";

  return (
    <DashboardHome
      data={dashboard}
      fullName={fullName}
    />
  );
}