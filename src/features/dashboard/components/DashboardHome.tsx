import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Heart,
  Hospital,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import type { DashboardSummary } from "../types/dashboard.types";

interface DashboardHomeProps {
  data: DashboardSummary;
  fullName: string;
}

function formatKES(value = 0) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(date?: string) {
  if (!date) return "Not set";

  return new Intl.DateTimeFormat("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function getFirstName(name: string) {
  return name.trim().split(" ")[0] || "there";
}

export default function DashboardHome({
  data,
  fullName,
}: DashboardHomeProps) {
  const plan = data.plan;
  const progress = data.progress;

  const target = progress?.target_amount ?? plan?.target_amount ?? 0;
  const saved = progress?.current_balance ?? plan?.current_balance ?? 0;

  const remaining =
    progress?.remaining_amount ?? Math.max(target - saved, 0);

  const percentage = Math.min(
    Math.max(
      progress?.progress_percentage ??
        (target > 0 ? (saved / target) * 100 : 0),
      0,
    ),
    100,
  );

  const pregnancyWeek = data.journey?.week;
  const totalWeeks = data.journey?.total_weeks ?? 40;

  return (
    <div className="min-h-screen bg-[#FCFCFD] pb-24 lg:pb-8">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-5 sm:px-6 lg:px-8">

        {/* Mobile top bar */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6C4AB6] text-white">
                <Heart size={19} fill="currentColor" />
              </div>

              <span className="text-xl font-bold text-[#23263A]">
                Mama<span className="text-[#6C4AB6]">Sure</span>
              </span>
            </div>
          </div>

          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAECF0] bg-white text-[#23263A]"
          >
            <Bell size={19} />
          </button>
        </div>

        {/* Desktop header */}
        <header className="mb-7 hidden items-center justify-between lg:flex">
          <div>
            <p className="text-sm font-medium text-[#667085]">
              Your maternity plan
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-[#23263A]">
              Welcome back, {getFirstName(fullName)} 👋
            </h1>
          </div>

          <button
            type="button"
            aria-label="Notifications"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EAECF0] bg-white text-[#23263A] shadow-sm"
          >
            <Bell size={20} />
          </button>
        </header>

        {/* Mobile greeting */}
        <div className="mb-5 lg:hidden">
          <p className="text-sm font-medium text-[#667085]">
            Welcome back,
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-[#23263A]">
            {getFirstName(fullName)} 👋
          </h1>

          <p className="mt-2 max-w-md text-sm leading-6 text-[#667085]">
            You&apos;re doing amazing. Every small step today builds a
            brighter tomorrow.
          </p>
        </div>

        {/* Hero / journey */}
        <section className="relative overflow-hidden rounded-[28px] bg-[#EEE8FC] p-5 sm:p-7 lg:p-8">
          <div className="relative z-10 grid items-center gap-7 lg:grid-cols-[1fr_420px]">

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#6C4AB6]">
                <Sparkles size={14} />
                Your journey, planned
              </div>

              <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#23263A] sm:text-4xl">
                Prepare today for a more confident tomorrow.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#667085] sm:text-base">
                Your savings, maternity journey and next steps are all in
                one place.
              </p>

              <Link
                href="/dashboard/planning"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#6C4AB6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5A32A3]"
              >
                Continue your journey
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/80 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#23263A]">
                  Your Pregnancy Journey
                </h3>

                {pregnancyWeek ? (
                  <span className="text-xs font-medium text-[#667085]">
                    Week {pregnancyWeek} of {totalWeeks}
                  </span>
                ) : (
                  <span className="text-xs font-medium text-[#667085]">
                    Planning
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F6A5C0]/30 text-[#6C4AB6]">
                  <Heart size={27} fill="currentColor" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="h-2 overflow-hidden rounded-full bg-[#EAECF0]">
                    <div
                      className="h-full rounded-full bg-[#6C4AB6] transition-all"
                      style={{
                        width: `${
                          pregnancyWeek
                            ? Math.min(
                                (pregnancyWeek / totalWeeks) * 100,
                                100,
                              )
                            : 0
                        }%`,
                      }}
                    />
                  </div>

                  <p className="mt-2 text-sm font-medium text-[#23263A]">
                    {data.journey?.pregnancy_stage ??
                      "Your maternity journey"}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#E7F7F1] p-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#4CAF93]">
                  <ShieldCheck size={18} />
                </div>

                <p className="text-xs leading-5 text-[#23263A]">
                  Keep preparing one step at a time. You&apos;re making
                  progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <section className="mt-7">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#23263A]">
              Quick Actions
            </h2>

            <Link
              href="/dashboard"
              className="text-sm font-semibold text-[#6C4AB6]"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            <QuickAction
              href="/dashboard/contributions"
              icon={<PiggyBank size={22} />}
              title="Save Money"
              text="Contribute to your goal"
              tone="rose"
            />

            <QuickAction
              href="/dashboard/plans"
              icon={<Target size={22} />}
              title="View Plan"
              text="Check your progress"
              tone="purple"
            />

            <QuickAction
              href="/dashboard/hospitals"
              icon={<Hospital size={22} />}
              title="Find Hospital"
              text="Trusted facilities"
              tone="mint"
            />

            <QuickAction
              href="/dashboard/reminders"
              icon={<CalendarDays size={22} />}
              title="Reminders"
              text="Stay on track"
              tone="rose"
            />

            <QuickAction
              href="/dashboard/education"
              icon={<Heart size={22} />}
              title="Learn"
              text="Maternal health"
              tone="blue"
            />

            <QuickAction
              href="/dashboard/profile"
              icon={<ShieldCheck size={22} />}
              title="Profile"
              text="Update your details"
              tone="purple"
            />
          </div>
        </section>

        {/* Main dashboard */}
        <section className="mt-7 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Savings */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#667085]">
                  Your Savings
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#23263A]">
                  {formatKES(saved)}
                </h2>
              </div>

              <Link
                href="/dashboard/plans"
                className="text-sm font-semibold text-[#6C4AB6]"
              >
                View details →
              </Link>
            </div>

            <div className="mt-6 grid items-center gap-6 sm:grid-cols-[150px_1fr]">
              <div
                className="relative mx-auto h-36 w-36 rounded-full"
                style={{
                  background: `conic-gradient(#6C4AB6 ${percentage}%, #EAECF0 0)`,
                }}
              >
                <div className="absolute inset-[10px] flex items-center justify-center rounded-full bg-white">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#23263A]">
                      {Math.round(percentage)}%
                    </p>

                    <p className="text-xs text-[#667085]">complete</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-[#667085]">
                  of {formatKES(target)}
                </p>

                <p className="mt-1 font-semibold text-[#23263A]">
                  {remaining > 0
                    ? `${formatKES(remaining)} remaining`
                    : "Goal reached 🎉"}
                </p>

                <p className="mt-1 text-sm text-[#667085]">
                  {plan?.contribution_frequency
                    ? `${plan.contribution_frequency} contributions`
                    : "Your maternity goal"}
                </p>
              </div>
            </div>

            <Link
              href="/dashboard/contributions"
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#6C4AB6] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#5A32A3]"
            >
              Add Contribution
            </Link>

            <div className="mt-4 flex items-center gap-3 border-t border-[#EAECF0] pt-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEE8FC] text-[#6C4AB6]">
                <PiggyBank size={17} />
              </div>

              <div>
                <p className="text-xs font-semibold text-[#23263A]">
                  Next contribution
                </p>

                <p className="text-xs text-[#667085]">
                  {formatKES(plan?.contribution_amount ?? 0)}
                </p>
              </div>
            </div>
          </div>

          {/* Next step */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#667085]">
                  Your next step
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#23263A]">
                  Keep your plan moving
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E7F7F1] text-[#4CAF93]">
                <Target size={20} />
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-[#F8F5FD] p-4">
              <p className="text-sm font-semibold text-[#23263A]">
                Target date
              </p>

              <p className="mt-1 text-lg font-bold text-[#6C4AB6]">
                {formatDate(plan?.target_date)}
              </p>

              <p className="mt-2 text-sm leading-5 text-[#667085]">
                Continue making your planned contributions so you can reach
                your maternity goal with less financial pressure.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              <DashboardLink
                href="/dashboard/contributions"
                icon={<PiggyBank size={18} />}
                label="Make a contribution"
              />

              <DashboardLink
                href="/dashboard/hospitals"
                icon={<Hospital size={18} />}
                label="Explore hospitals"
              />

              <DashboardLink
                href="/dashboard/profile"
                icon={<ShieldCheck size={18} />}
                label="Review your profile"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Mobile bottom navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#EAECF0] bg-white/95 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-lg items-center justify-around">
          <BottomNavItem href="/dashboard" icon={<Heart size={20} />} label="Home" active />
          <BottomNavItem href="/dashboard/plans" icon={<PiggyBank size={20} />} label="Savings" />
          <BottomNavItem href="/dashboard/journey" icon={<Heart size={20} />} label="Journey" />
          <BottomNavItem href="/dashboard/hospitals" icon={<Hospital size={20} />} label="Discover" />
          <BottomNavItem href="/dashboard/profile" icon={<ShieldCheck size={20} />} label="Profile" />
        </div>
      </nav>
    </div>
  );
}

function QuickAction({
  href,
  icon,
  title,
  text,
  tone,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  text: string;
  tone: "rose" | "purple" | "mint" | "blue";
}) {
  const tones = {
    rose: "bg-[#FFF1F6] text-[#D94B78]",
    purple: "bg-[#F3EEFC] text-[#6C4AB6]",
    mint: "bg-[#ECF9F5] text-[#279776]",
    blue: "bg-[#EEF5FF] text-[#3282D8]",
  };

  return (
    <Link
      href={href}
      className={`rounded-2xl p-4 transition hover:-translate-y-0.5 hover:shadow-sm ${tones[tone]}`}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white">
        {icon}
      </div>

      <p className="text-sm font-bold text-[#23263A]">{title}</p>

      <p className="mt-1 text-xs leading-5 text-[#667085]">{text}</p>
    </Link>
  );
}

function DashboardLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl border border-[#EAECF0] p-3 transition hover:border-[#D7C9F2] hover:bg-[#FAF8FF]"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F3EEFC] text-[#6C4AB6]">
        {icon}
      </span>

      <span className="flex-1 text-sm font-semibold text-[#23263A]">
        {label}
      </span>

      <ArrowRight size={17} className="text-[#667085]" />
    </Link>
  );
}

function BottomNavItem({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex min-w-[58px] flex-col items-center gap-1 rounded-xl px-2 py-1.5 ${
        active ? "text-[#6C4AB6]" : "text-[#667085]"
      }`}
    >
      {icon}

      <span className="text-[10px] font-semibold">{label}</span>
    </Link>
  );
}