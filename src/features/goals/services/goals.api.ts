import { apiClient } from "@/lib/api/client";

import type {
  CreateGoalPayload,
  Goal,
} from "../types/goals.types";

export async function getMyGoals(): Promise<Goal[]> {
  return apiClient<Goal[]>("/api/v1/goals");
}

export async function createGoal(
  payload: CreateGoalPayload,
): Promise<Goal> {
  return apiClient<Goal>("/api/v1/goals", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getGoal(
  goalId: string,
): Promise<Goal> {
  return apiClient<Goal>(
    `/api/v1/goals/${goalId}`,
  );
}