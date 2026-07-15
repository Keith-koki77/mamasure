"use client";

import WalletHeader from "@/components/dashboard/wallet/WalletHeader";
import WalletBalance from "@/components/dashboard/wallet/WalletBalance";
import WalletActions from "@/components/dashboard/wallet/WalletActions";
import SavingsProgress from "@/components/dashboard/wallet/SavingsProgress";
import MonthlyContributionCard from "@/components/dashboard/wallet/MonthlyContributionCard";
import RecentTransactions from "@/components/dashboard/wallet/RecentTransactions";
import GoalCard from "@/components/dashboard/wallet/GoalCard";

export default function WalletPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <WalletHeader />

      {/* Wallet Balance */}

      <WalletBalance />

      {/* Actions + Monthly Progress */}

      <div className="grid gap-8 xl:grid-cols-[1fr_420px]">

        <WalletActions />

        <MonthlyContributionCard />

      </div>

      {/* Savings Progress */}

      <SavingsProgress />

      {/* Recent Transactions */}

      <RecentTransactions />

      {/* Goal Card */}

      <GoalCard />

    </div>
  );
}