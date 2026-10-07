import { apiClient } from "@/lib/api/client";

import type {
  CreatePlanPayload,
  Plan,
  PlanProgress,
} from "../types/plans.types";

/**
 * Get all plans belonging to the authenticated user.
 *
 * GET /api/v1/plans
 */
export async function getMyPlans(): Promise<Plan[]> {
  return apiClient<Plan[]>("/api/v1/plans");
}

/**
 * Create a new MamaSure savings plan.
 *
 * POST /api/v1/plans
 */
export async function createPlan(
  payload: CreatePlanPayload,
): Promise<Plan> {
  return apiClient<Plan>("/api/v1/plans", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/**
 * Get a specific plan.
 *
 * GET /api/v1/plans/{plan_id}
 */
export async function getPlan(
  planId: string,
): Promise<Plan> {
  return apiClient<Plan>(
    `/api/v1/plans/${planId}`,
  );
}

/**
 * Get progress for a specific plan.
 *
 * GET /api/v1/plans/{plan_id}/progress
 */
export async function getPlanProgress(
  planId: string,
): Promise<PlanProgress> {
  return apiClient<PlanProgress>(
    `/api/v1/plans/${planId}/progress`,
  );
}