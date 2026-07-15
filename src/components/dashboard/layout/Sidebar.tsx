"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Wallet,
  TrendingUp,
  CalendarDays,
  Baby,
  BookOpen,
  Bell,
  LogOut,
  CircleHelp,
} from "lucide-react";

const navigation = [
  {
    id: "dashbaord",
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "marketplace",
    title: "Hospital Marketplace",
    href: "/dashboard/hospital-marketplace",
    icon: Building2,
  },
  {
    id: "wallet",
    title: "Digital Maternity Wallet",
    href: "/dashboard/wallet",
    icon: Wallet,
  },
  {
    id: "savings",
    title: "Savings Tracker",
    href: "/dashboard/savings",
    icon: TrendingUp,
  },
  {
    id: "contributions",
    title: "Monthly Contributions",
    href: "/dashboard/contributions",
    icon: CalendarDays,
  },
  {
    id: "pregnancy",
    title: "Pregnancy Journey",
    href: "/dashboard/pregnancy",
    icon: Baby,
  },
  {
    id: "education",
    title: "Maternal Education",
    href: "/dashboard/education",
    icon: BookOpen,
  },
  {
    id: "reminders",
    title: "Smart Reminders",
    href: "/dashboard/reminders",
    icon: Bell,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-[290px] flex-col border-r border-purple-100 bg-white">

      {/* Logo */}

      <div className="border-b border-purple-100 px-8 py-8">

        <Link href="/">

          <Image
            src="/logo.png"
            alt="Mama Sure"
            width={180}
            height={42}
            priority
          />

        </Link>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 px-5 py-8">

        {navigation.map((item) => {
          const Icon = item.icon;

          const isActive = (href: string) => {
            if (href === "/dashboard") {
              return pathname === "/dashboard";
            }
            return pathname.startsWith(href);
          };

          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                active
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                  : "text-slate-700 hover:bg-purple-50 hover:text-purple-700"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${
                  active
                    ? "text-white"
                    : "text-purple-600 group-hover:text-purple-700"
                }`}
              />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}

      </nav>

      {/* Encouragement Card */}

      <div className="mx-5 rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50 p-6">

        <Image
          src="/pregnant-illustration.png"
          alt="Mother"
          width={170}
          height={150}
          className="mx-auto"
        />

        <h3 className="mt-4 text-lg font-bold text-slate-900">
          You're doing amazing ❤️
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Every contribution today brings you one step closer to a
          healthier maternity journey.
        </p>

        <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-purple-700 to-pink-500 py-3 font-semibold text-white transition hover:opacity-90">
          View My Plan
        </button>

      </div>

      {/* Bottom Links */}

      <div className="space-y-2 border-t border-purple-100 px-5 py-6">

        <Link
          href="/dashboard/help"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition hover:bg-purple-50"
        >
          <CircleHelp className="h-5 w-5 text-purple-600" />

          <span>Help Center</span>
        </Link>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-red-500 transition hover:bg-red-50">

          <LogOut className="h-5 w-5" />

          <span>Logout</span>

        </button>

      </div>

    </aside>
  );
}