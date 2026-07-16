// data/contributions.ts

import {
    CalendarDays,
    PiggyBank,
    Wallet,
    TrendingUp,
    CheckCircle2,
    Circle,
    Flame,
  } from "lucide-react";
  
  export const contributionSummary = {
    currency: "KES",
  
    monthlyTarget: 10000,
  
    contributedThisMonth: 6500,
  
    remaining: 3500,
  
    nextContribution: {
      amount: 2500,
      date: "20 Jul 2026",
    },
  
    contributionRate: 65,
  
    currentStreak: 7,
  };
  
  export type ContributionColor = "purple" | "pink";
  
  export interface OverviewCard {
    id: number;
    title: string;
    value: string;
    icon: any;
    color: ContributionColor;
  }
  
  export const overviewCards: OverviewCard[] = [
    {
      id: 1,
      title: "Monthly Target",
      value: "KES 10,000",
      icon: PiggyBank,
      color: "purple",
    },
    {
      id: 2,
      title: "Saved This Month",
      value: "KES 6,500",
      icon: Wallet,
      color: "pink",
    },
    {
      id: 3,
      title: "Remaining",
      value: "KES 3,500",
      icon: TrendingUp,
      color: "purple",
    },
    {
      id: 4,
      title: "Next Deposit",
      value: "20 Jul",
      icon: CalendarDays,
      color: "pink",
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
      amount: 4000,
      method: "Bank Transfer",
      status: "Completed",
    },
    {
      id: 3,
      date: "05 Jul 2026",
      amount: 1500,
      method: "Wallet",
      status: "Completed",
    },
    {
      id: 4,
      date: "28 Jun 2026",
      amount: 3000,
      method: "M-PESA",
      status: "Completed",
    },
    {
      id: 5,
      date: "15 Jun 2026",
      amount: 2500,
      method: "Bank Transfer",
      status: "Completed",
    },
  ];
  
  export const upcomingContributions = [
    {
      id: 1,
      amount: 2500,
      date: "20 Jul 2026",
      description: "Monthly Contribution",
    },
    {
      id: 2,
      amount: 1000,
      date: "30 Jul 2026",
      description: "Top-up Deposit",
    },
    {
      id: 3,
      amount: 2500,
      date: "15 Aug 2026",
      description: "Monthly Contribution",
    },
  ];
  
  export const contributionCalendar = [
    {
      day: 5,
      contributed: true,
    },
    {
      day: 10,
      contributed: true,
    },
    {
      day: 15,
      contributed: true,
    },
    {
      day: 20,
      contributed: false,
    },
    {
      day: 30,
      contributed: false,
    },
  ];
  
  export const streak = {
    months: 7,
  
    consistency: 94,
  
    longestStreak: 9,
  
    badge: "Gold Saver",
  
    icon: Flame,
  };
  
  export const milestones = [
    {
      id: 1,
      title: "First Contribution",
      completed: true,
      icon: CheckCircle2,
    },
    {
      id: 2,
      title: "3-Month Streak",
      completed: true,
      icon: CheckCircle2,
    },
    {
      id: 3,
      title: "6-Month Streak",
      completed: true,
      icon: CheckCircle2,
    },
    {
      id: 4,
      title: "12-Month Streak",
      completed: false,
      icon: Circle,
    },
  ];
  
  export const autosave = {
    enabled: false,
  
    frequency: "Monthly",
  
    nextRun: "Coming Soon",
  };

  export const contributionStreak = {
    currentStreak: 7,
    longestStreak: 12,
    consistency: 88,
    badge: "Gold Saver",
    nextMilestone: 10,
  };

  export const upcomingContribution = {
    amount: 2500,
    dueDate: "20 July 2026",
    paymentMethod: "M-PESA",
    hospital: "Aga Khan University Hospital",
    package: "Comprehensive Maternity Package",
    estimatedBalance: 51150,
  };

  export const contributionPlan = {
    totalGoal: 120000,
    monthlyContribution: 10000,
    duration: "12 Months",
    started: "January 2026",
    expectedCompletion: "December 2026",
    hospital: "Aga Khan University Hospital",
    package: "Comprehensive Maternity Package",
  };

  export const autoSave = {
    enabled: false,
    frequency: "Monthly",
    amount: 2500,
    nextDebit: "20 Jul 2026",
    paymentMethod: "M-PESA",
  };