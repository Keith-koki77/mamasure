export type MotherhoodStage =
  | "preparing_for_pregnancy"
  | "currently_pregnant"
  | "already_had_baby";

export type PregnancyStage =
  | "first_trimester"
  | "second_trimester"
  | "third_trimester";

export type TryingToConceiveTimeline =
  | "0_3_months"
  | "3_6_months"
  | "6_12_months"
  | "over_a_year";

export type PreparationNeed =
  | "ANTENATAL_CARE"
  | "DELIVERY"
  | "HOSPITAL_MATERNITY_CARE"
  | "POSTNATAL_CARE"
  | "ALL";

export type ContributionFrequency =
  | "daily"
  | "weekly"
  | "monthly";

export type PlanningMethod =
  | "goal_based"
  | "affordability_based";

export interface AssessmentCreate {
  motherhood_stage: MotherhoodStage;
  pregnancy_stage?: PregnancyStage | null;
  expected_delivery_date?: string | null;
  trying_to_conceive_timeline?: TryingToConceiveTimeline | null;
  insurance_coverage_status?: boolean | null;
  preparation_needs: PreparationNeed[];
}

export interface AssessmentUpdate {
  motherhood_stage?: MotherhoodStage;
  pregnancy_stage?: PregnancyStage | null;
  expected_delivery_date?: string | null;
  trying_to_conceive_timeline?: TryingToConceiveTimeline | null;
  insurance_coverage_status?: boolean | null;
  preparation_needs?: PreparationNeed[] | null;
}

export interface AssessmentResponse {
  id: string;
  user_id: string;
  motherhood_stage: MotherhoodStage;
  pregnancy_stage: PregnancyStage | null;
  expected_delivery_date: string | null;
  trying_to_conceive_timeline: TryingToConceiveTimeline | null;
  insurance_coverage_status: boolean | null;
  preparation_needs: PreparationNeed[];
  completed: boolean;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ScheduleInstallment {
  installment_number: number;
  amount: string | number;
  due_date: string;
}

export interface ProjectionRequest {
  target_amount: string | number;
  target_date: string;
  contribution_frequency: ContributionFrequency;
  planning_method: PlanningMethod;
  affordable_contribution?: string | number | null;
}

export interface ProjectionResponse {
  planning_method: PlanningMethod;
  target_amount: string | number;
  target_date: string;
  contribution_frequency: ContributionFrequency;
  calculated_installment_amount: string | number;
  estimated_timeline_months: string | number;
  total_instalments: number;
  schedule_preview: ScheduleInstallment[];
  summary_message: string;
}