import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SummaryCards from "@/components/dashboard/SummaryCards";
import SavingsChart from "@/components/dashboard/SavingsChart";
import HospitalMarketplace from "@/components/dashboard/HospitalMarketplace";
//import QuickActions from "@/components/dashboard/QuickActions";
//import RecentActivity from "@/components/dashboard/RecentActivity";
//import SmartReminders from "@/components/dashboard/SmartReminders";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* Welcome Banner */}

      <DashboardHeader />

      {/* Summary Cards */}

      <SummaryCards />

      {/* Main Content */}

      <div className="grid gap-8 xl:grid-cols-[1.8fr_1fr]">

        {/* Left Side */}

        <div className="space-y-8">

          <SavingsChart />

          <HospitalMarketplace />

        </div>

        {/* Right Side */}

        <div className="space-y-8">

          {/*<QuickActions />*/}

          {/*<SmartReminders />*/}

        </div>

      </div>

      {/* Bottom */}

      {/*<RecentActivity />*/}

    </div>
  );
}