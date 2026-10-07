export type GoalStatus =
  | "active"
  | "completed"
  | "cancelled"
  | string;

export interface Goal {
  id: string;
  user_id: string;
  title: string;
  target_amount: number | string;
  target_date: string;
  hospital_id: string | null;
  current_amount: number | string;
  status: GoalStatus;
  created_at: string;
}

export interface CreateGoalPayload {
  title: string;
  target_amount: number;
  target_date: string;
  hospital_id?: string | null;
}