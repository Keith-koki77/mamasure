import {
  ArrowDownLeft,
  ArrowUpRight,
  Building2,
  Wallet,
  PiggyBank,
  ArrowUp,
  ArrowDown,
  type LucideIcon,
} from "lucide-react";

/* ============================================
   Wallet Summary
============================================ */

export interface Wallet {
  balance: number;
  availableBalance: number;
  currency: string;

  savingsGoal: number;
  savedAmount: number;

  monthlyGoal: number;
  monthlySaved: number;

  nextContribution: {
    amount: number;
    date: string;
  };
}

export const wallet: Wallet = {
  balance: 48650,
  availableBalance: 48650,
  currency: "KES",

  savingsGoal: 120000,
  savedAmount: 48650,

  monthlyGoal: 10000,
  monthlySaved: 6500,

  nextContribution: {
    amount: 2500,
    date: "15 July 2026",
  },
};

/* ============================================
   Wallet Actions
============================================ */

export interface WalletAction {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: "purple" | "pink" | "green" | "blue";
}

export const walletActions: WalletAction[] = [
  {
    id: 1,
    title: "Deposit",
    description: "Add money",
    icon: Wallet,
    color: "purple",
  },
  {
    id: 2,
    title: "Withdraw",
    description: "Withdraw funds",
    icon: ArrowDown,
    color: "pink",
  },
  {
    id: 3,
    title: "Contribute",
    description: "Monthly contribution",
    icon: PiggyBank,
    color: "green",
  },
  {
    id: 4,
    title: "Transfer",
    description: "Transfer balance",
    icon: ArrowUp,
    color: "blue",
  },
];

/* ============================================
   Quick Actions
============================================ */

export interface QuickAction {
  id: number;
  title: string;
  icon: LucideIcon;
  color: "purple" | "pink";
}

export const quickActions: QuickAction[] = [
  {
    id: 1,
    title: "Add Money",
    icon: Wallet,
    color: "purple",
  },
  {
    id: 2,
    title: "Withdraw",
    icon: ArrowUpRight,
    color: "pink",
  },
  {
    id: 3,
    title: "Transfer",
    icon: ArrowDownLeft,
    color: "purple",
  },
  {
    id: 4,
    title: "Pay Hospital",
    icon: Building2,
    color: "pink",
  },
];

/* ============================================
   Transactions
============================================ */

export interface Transaction {
  id: number;
  type: string;
  amount: number;
  date: string;
  status: string;
  positive: boolean;
}

export const transactions: Transaction[] = [
  {
    id: 1,
    type: "Deposit",
    amount: 2500,
    date: "14 Jul 2026",
    status: "Completed",
    positive: true,
  },
  {
    id: 2,
    type: "Deposit",
    amount: 5000,
    date: "10 Jul 2026",
    status: "Completed",
    positive: true,
  },
  {
    id: 3,
    type: "Hospital Payment",
    amount: 12000,
    date: "05 Jul 2026",
    status: "Completed",
    positive: false,
  },
  {
    id: 4,
    type: "Deposit",
    amount: 3000,
    date: "01 Jul 2026",
    status: "Completed",
    positive: true,
  },
  {
    id: 5,
    type: "Deposit",
    amount: 1500,
    date: "28 Jun 2026",
    status: "Completed",
    positive: true,
  },
];

/* ============================================
   Goal
============================================ */

export interface Goal {
  target: number;
  current: number;
  remaining: number;
}

export const goals: Goal = {
  target: 120000,
  current: 48650,
  remaining: 71350,
};