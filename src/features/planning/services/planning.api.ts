import { apiClient } from "@/lib/api/client";

import type {
  AssessmentCreate,
  AssessmentResponse,
  AssessmentUpdate,
  ProjectionRequest,
  ProjectionResponse,
} from "../types/planning.types";

/**
 * Create a new planning assessment.
 *
 * POST /api/v1/assessments
 */
export async function createAssessment(
  payload: AssessmentCreate,
): Promise<AssessmentResponse> {
  return apiClient<AssessmentResponse>(
    "/api/v1/assessments",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
  );
}

/**
 * Get the currently authenticated user's planning assessment.
 *
 * GET /api/v1/assessments/me
 *
 * Expected:
 * - 200 when an assessment exists
 * - 404 when the user has not created one yet
 */
export async function getMyAssessment(): Promise<AssessmentResponse> {
  return apiClient<AssessmentResponse>(
    "/api/v1/assessments/me",
  );
}

/**
 * Update the currently authenticated user's planning assessment.
 *
 * PATCH /api/v1/assessments/me
 */
export async function updateAssessment(
  payload: AssessmentUpdate,
): Promise<AssessmentResponse> {
  return apiClient<AssessmentResponse>(
    "/api/v1/assessments/me",
    {
      method: "PATCH",
      body: JSON.stringify(payload),
    },
  );
}

/**
 * Generate a savings projection from the planning inputs.
 *
 * POST /api/v1/planning/project
 */
export async function projectPlanning(
  payload: ProjectionRequest,
): Promise<ProjectionResponse> {
  return apiClient<ProjectionResponse>(
    "/api/v1/planning/project",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
  );
}