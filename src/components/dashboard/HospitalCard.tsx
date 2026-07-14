"use client";

import {
  Building2,
  Check,
  ChevronRight,
  MapPin,
  ShieldCheck,
 Star,
} from "lucide-react";

interface HospitalCardProps {
  tier: "Platinum" | "Gold" | "Silver";
  color: "purple" | "pink" | "slate";
  hospitals: string[];
  averageCost: string;
  features: string[];
}

export default function HospitalCard({
  tier,
  color,
  hospitals,
  averageCost,
  features,
}: HospitalCardProps) {
  const styles = {
    purple: {
      badge: "bg-purple-100 text-purple-700",
      header: "from-purple-700 to-violet-600",
      icon: "bg-purple-100 text-purple-700",
      button:
        "bg-gradient-to-r from-purple-700 to-violet-600 text-white hover:shadow-purple-300/50",
      border: "hover:border-purple-300",
    },

    pink: {
      badge: "bg-pink-100 text-pink-600",
      header: "from-pink-500 to-rose-500",
      icon: "bg-pink-100 text-pink-600",
      button:
        "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-pink-300/50",
      border: "hover:border-pink-300",
    },

    slate: {
      badge: "bg-slate-100 text-slate-700",
      header: "from-slate-700 to-slate-500",
      icon: "bg-slate-100 text-slate-700",
      button:
        "bg-gradient-to-r from-slate-700 to-slate-500 text-white hover:shadow-slate-300/50",
      border: "hover:border-slate-300",
    },
  };

  const theme = styles[color];

  return (
    <div
      className={`group overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${theme.border}`}
    >
      {/* Header */}

      <div
        className={`bg-gradient-to-r ${theme.header} p-6 text-white`}
      >
        <div className="flex items-center justify-between">
          <div
            className={`rounded-full ${theme.badge} px-4 py-2 text-sm font-bold`}
          >
            {tier}
          </div>

          <Star className="h-6 w-6 fill-yellow-300 text-yellow-300" />
        </div>

        <h3 className="mt-6 text-3xl font-extrabold">
          {tier} Care
        </h3>

        <p className="mt-2 text-white/90">
          Average maternity package
        </p>

        <p className="mt-3 text-3xl font-black">
          {averageCost}
        </p>
      </div>

      {/* Body */}

      <div className="p-7">
        {/* Hospitals */}

        <div>
          <div className="mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-purple-600" />

            <h4 className="font-bold text-slate-900">
              Hospitals
            </h4>
          </div>

          <div className="space-y-3">
            {hospitals.map((hospital) => (
              <div
                key={hospital}
                className="flex items-start gap-3"
              >
                <div
                  className={`mt-1 flex h-7 w-7 items-center justify-center rounded-full ${theme.icon}`}
                >
                  <MapPin className="h-4 w-4" />
                </div>

                <span className="leading-6 text-gray-700">
                  {hospital}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}

        <div className="my-7 h-px bg-gray-100" />

        {/* Features */}

        <div>
          <div className="mb-4 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-green-600" />

            <h4 className="font-bold text-slate-900">
              Included Services
            </h4>
          </div>

          <div className="space-y-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-4 w-4 text-green-600" />
                </div>

                <span className="text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}

        <button
          className={`mt-8 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${theme.button}`}
        >
          Select Package

          <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}