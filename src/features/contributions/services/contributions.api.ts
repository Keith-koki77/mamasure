import { apiClient } from "@/lib/api/client";

import type {
  Contribution,
  ContributionRequest,
} from "../types/contributions.types";


/**
 * Get all contributions belonging to the authenticated user.
 */
export async function getMyContributions(): Promise<Contribution[]> {
  return apiClient<Contribution[]>(
    "/api/v1/contributions",
  );
}


/**
 * Get a single contribution belonging to the authenticated user.
 */
export async function getContribution(
  contributionId: string,
): Promise<Contribution> {
  return apiClient<Contribution>(
    `/api/v1/contributions/${contributionId}`,
  );
}


/**
 * Initiate an M-Pesa STK Push contribution.
 */
export async function initiateContribution(
  payload: ContributionRequest,
): Promise<Contribution> {
  return apiClient<Contribution>(
    "/api/v1/contributions/stk-push",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
  );
}


/**
 * Cancel a pending contribution.
 *
 * This cancels the MamaSure contribution and stops the
 * frontend from waiting for the payment.
 *
 * If the M-Pesa prompt is already on the user's phone,
 * the user should also decline it there.
 */
export async function cancelContribution(
  contributionId: string,
): Promise<Contribution> {
  return apiClient<Contribution>(
    `/api/v1/contributions/${contributionId}/cancel`,
    {
      method: "POST",
    },
  );
}