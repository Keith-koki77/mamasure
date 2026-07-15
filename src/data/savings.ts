import {
  PiggyBank,
  TrendingUp,
  Target,
  Wallet,
  LucideIcon,
} from "lucide-react";

export interface OverviewCard {
  id: number;
  title: string;
  value: string;
  icon: LucideIcon;
  color: "purple" | "pink";
}

export interface SavingsInsight {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: "purple" | "pink";
}
  
  export const savingsSummary = {
    currency: "KES",
  
    currentSavings: 48650,
  
    savingsGoal: 120000,
  
    remaining: 71350,
  
    progress: 40.5,
  
    monthlyTarget: 10000,
  
    monthlySaved: 6500,
  
    estimatedCompletion: "February 2027",
  };
  
  export const monthlySavings = [
    {
      month: "Jan",
      amount: 5000,
    },
    {
      month: "Feb",
      amount: 7500,
    },
    {
      month: "Mar",
      amount: 9000,
    },
    {
      month: "Apr",
      amount: 12000,
    },
    {
      month: "May",
      amount: 15500,
    },
    {
      month: "Jun",
      amount: 18000,
    },
    {
      month: "Jul",
      amount: 22000,
    },
  ];
  
  export const contributionHistory = [
    {
      id: 1,
      date: "15 Jul 2026",
      amount: 2500,
      method: "M-PESA",
      status: "Completed",
    },
    {
      id: 2,
      date: "10 Jul 2026",
      amount: 5000,
      method: "Bank Transfer",
      status: "Completed",
    },
    {
      id: 3,
      date: "05 Jul 2026",
      amount: 3000,
      method: "M-PESA",
      status: "Completed",
    },
    {
      id: 4,
      date: "28 Jun 2026",
      amount: 1500,
      method: "Wallet",
      status: "Completed",
    },
    {
      id: 5,
      date: "20 Jun 2026",
      amount: 4500,
      method: "M-PESA",
      status: "Completed",
    },
  ];
  
  export const savingsInsights: SavingsInsight[] = [
    {
      id: 1,
      title: "You're Saving Faster",
      description:
        "Your savings increased by 18% compared to last month.",
      icon: TrendingUp,
      color: "purple",
    },
    {
      id: 2,
      title: "Goal Forecast",
      description:
        "At your current pace you'll reach your goal by February 2027.",
      icon: Target,
      color: "pink",
    },
    {
      id: 3,
      title: "Monthly Target",
      description:
        "Increase monthly savings by KES 1,500 to finish one month earlier.",
      icon: PiggyBank,
      color: "purple",
    },
  ];
  
  export const milestones = [
    {
      id: 1,
      title: "Savings Journey Started",
      description: "Created your MamaSure maternity savings account.",
      completed: true,
      date: "12 Jan 2026",
    },
    {
      id: 2,
      title: "25% Goal Reached",
      description:
        "You've successfully funded the first quarter of your maternity savings target.",
      completed: true,
      date: "18 Apr 2026",
    },
    {
      id: 3,
      title: "50% Goal",
      description:
        "You're halfway towards fully funding your maternity package.",
      completed: false,
      date: "Estimated Aug 2026",
    },
    {
      id: 4,
      title: "75% Goal",
      description:
        "You're almost there. Keep making consistent monthly contributions.",
      completed: false,
      date: "Estimated Nov 2026",
    },
    {
      id: 5,
      title: "Delivery Fully Funded",
      description:
        "Congratulations! Your maternity expenses will be fully covered.",
      completed: false,
      date: "Estimated Jan 2027",
    },
  ];
  
  export const savingsGoal = {
    hospital: "Aga Khan University Hospital",
  
    packageName: "Comprehensive Maternity Package",
  
    targetAmount: 120000,
  
    savedAmount: 48650,
  
    remainingAmount: 71350,
  
    progress: 40.5,
  };
  
  export const overviewCards: OverviewCard[] = [
    {
      id: 1,
      title: "Current Savings",
      value: "KES 48,650",
      icon: Wallet,
      color: "purple",
    },
    {
      id: 2,
      title: "Savings Goal",
      value: "KES 120,000",
      icon: Target,
      color: "pink",
    },
    {
      id: 3,
      title: "Progress",
      value: "40.5%",
      icon: TrendingUp,
      color: "purple",
    },
    {
      id: 4,
      title: "Remaining",
      value: "KES 71,350",
      icon: PiggyBank,
      color: "pink",
    },
  ];

