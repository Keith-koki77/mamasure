export interface DashboardSummary {
    user?: {
      id?: string;
      full_name?: string;
      phone_number?: string;
    };
  
    plan?: {
      id?: string;
      target_amount?: number;
      current_balance?: number;
      contribution_amount?: number;
      contribution_frequency?: string;
      target_date?: string;
      status?: string;
    } | null;
  
    progress?: {
      current_balance?: number;
      target_amount?: number;
      remaining_amount?: number;
      progress_percentage?: number;
      status?: string;
    } | null;
  
    journey?: {
      stage?: string;
      pregnancy_stage?: string;
      week?: number;
      total_weeks?: number;
      expected_delivery_date?: string;
    } | null;
  }