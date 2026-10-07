import { apiClient } from "@/lib/api/client";
import type { DashboardSummary } from "../types/dashboard.types";

export async function getDashboard(): Promise<DashboardSummary> {
  return apiClient<DashboardSummary>("/api/v1/dashboard/me");
}