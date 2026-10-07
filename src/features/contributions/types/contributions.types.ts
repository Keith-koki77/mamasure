export type ContributionStatus = string;

export interface ContributionRequest {
  plan_id: string;
  amount: string | number;
  phone_number: string;
}

export interface Contribution {
  id: string;
  plan_id: string;
  user_id: string;
  payment_id: string | null;
  amount: string | number;
  status: ContributionStatus;
  contribution_date: string;
  payment_provider: string | null;
  created_at: string;
  updated_at: string;
  successful_at: string | null;
}