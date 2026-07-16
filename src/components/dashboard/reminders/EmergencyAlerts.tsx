"use client";

import {
  ShieldAlert,
  Phone,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { emergencyAlerts } from "@/data/reminders";

export default function EmergencyAlerts() {
  return (
    <section className="rounded-[32px] border border-red-200 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2">

            <ShieldAlert className="h-5 w-5 text-red-600" />

            <span className="font-semibold text-red-700">
              Maternal Safety
            </span>

          </div>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Know When To Seek Medical Attention
          </h2>

          <p className="mt-3 max-w-3xl text-gray-600">
            Some pregnancy symptoms require immediate medical attention.
            If you experience any of the warning signs below, contact your
            healthcare provider or visit the nearest health facility
            immediately.
          </p>

        </div>

        <div className="rounded-2xl bg-red-50 px-6 py-4">

          <div className="flex items-center gap-3">

            <HeartPulse className="h-6 w-6 text-red-600" />

            <div>

              <p className="font-semibold text-red-700">
                Emergency Awareness
              </p>

              <p className="text-sm text-red-600">
                Stay informed. Act early.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Warning Signs */}

      <div className="mt-10 grid gap-5 md:grid-cols-2">

        {emergencyAlerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start gap-4 rounded-2xl border border-red-100 bg-red-50 p-5 transition-all duration-300 hover:border-red-200"
          >

            <CheckCircle2 className="mt-1 h-6 w-6 text-red-600" />

            <p className="text-gray-700 leading-7">
              {alert.title}
            </p>

          </div>
        ))}

      </div>

      {/* Emergency Card */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-pink-500 p-8 text-white">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h3 className="text-2xl font-bold">
              Don't Ignore Warning Signs
            </h3>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-red-100">
              If you notice any serious or unusual symptoms during your
              pregnancy, seek professional medical care immediately.
              MamaSure provides educational guidance but does not replace
              emergency medical services or advice from qualified healthcare
              professionals.
            </p>

          </div>

          <button
            disabled
            className="inline-flex cursor-not-allowed items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-red-600 opacity-90"
          >
            <Phone className="h-5 w-5" />

            Emergency Contacts

            <ArrowRight className="h-5 w-5" />

          </button>

        </div>

      </div>

      {/* Disclaimer */}

      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">

        <p className="text-sm leading-7 text-amber-900">
          <strong>Medical Disclaimer:</strong> The information provided in
          this section is intended for educational purposes only and should
          not be considered a substitute for professional medical advice,
          diagnosis or treatment. Always follow the guidance of your doctor,
          midwife or other qualified healthcare provider.
        </p>

      </div>

    </section>
  );
}