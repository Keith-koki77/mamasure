export type PlanStatus =
  | "active"
  | "completed"
  | "cancelled"
  | "paused";

export type ContributionFrequency =
  | "daily"
  | "weekly"
  | "monthly";

export type PlanningMethod =
  | "goal_based"
  | "affordability_based";

export interface Plan {
  id: string;
  user_id: string;

  target_amount: string | number;
  contribution_frequency: ContributionFrequency;
  contribution_amount: string | number;
  target_date: string;

  status: PlanStatus;

  created_at: string;
  updated_at: string;
}

export interface CreatePlanPayload {
  target_amount: string | number;
  target_date: string;
  contribution_frequency: ContributionFrequency;
  contribution_amount: string | number;
  planning_method?: PlanningMethod;
}

export interface PlanProgress {
  plan_id: string;

  target_amount: string | number;
  current_balance: string | number;

  contribution_amount: string | number;
  contribution_frequency: ContributionFrequency;

  target_date: string;

  progress_percentage: string | number;

  remaining_amount: string | number;

  total_contributions?: number;

  status: PlanStatus;
}