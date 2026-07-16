"use client";

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
} from "lucide-react";

import { appointments } from "@/data/pregnancy";

const statusStyles = {
  completed: {
    badge: "bg-green-100 text-green-700",
    iconBg: "bg-green-500",
    label: "Completed",
  },
  upcoming: {
    badge: "bg-yellow-100 text-yellow-700",
    iconBg: "bg-yellow-500",
    label: "Upcoming",
  },
  scheduled: {
    badge: "bg-purple-100 text-purple-700",
    iconBg: "bg-purple-600",
    label: "Scheduled",
  },
} as const;

type Status = keyof typeof statusStyles;

export default function AppointmentTimeline() {
  return (
    <section className="rounded-[32px] border border-purple-100 bg-white p-8 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Antenatal Appointment Timeline
          </h2>

          <p className="mt-2 text-gray-500">
            Keep track of your pregnancy checkups and upcoming hospital visits.
          </p>

        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          {appointments.length} Visits
        </span>

      </div>

      {/* Timeline */}

      <div className="relative mt-10">

        <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-purple-200" />

        <div className="space-y-8">

          {appointments.map((appointment) => {
            const style =
              statusStyles[
                appointment.status as Status
              ];

            return (
              <div
                key={appointment.id}
                className="relative flex gap-6"
              >
                {/* Timeline Dot */}

                <div
                  className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${style.iconBg}`}
                >
                  {appointment.status === "completed" ? (
                    <CheckCircle2 className="h-7 w-7 text-white" />
                  ) : (
                    <Clock3 className="h-7 w-7 text-white" />
                  )}
                </div>

                {/* Card */}

                <div className="flex-1 rounded-3xl border border-purple-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg">

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                      <div
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${style.badge}`}
                      >
                        {style.label}
                      </div>

                      <h3 className="mt-4 text-2xl font-bold text-slate-900">
                        {appointment.title}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-5 text-gray-500">

                        <div className="flex items-center gap-2">

                          <CalendarDays className="h-5 w-5 text-purple-600" />

                          <span>{appointment.date}</span>

                        </div>

                        <div className="flex items-center gap-2">

                          <MapPin className="h-5 w-5 text-pink-500" />

                          <span>{appointment.hospital}</span>

                        </div>

                      </div>

                    </div>

                    <div className="rounded-2xl bg-purple-50 px-6 py-5 text-center">

                      <p className="text-sm text-gray-500">
                        Pregnancy Week
                      </p>

                      <h4 className="mt-2 text-3xl font-extrabold text-purple-700">
                        {appointment.week}
                      </h4>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Footer */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-700 to-pink-500 p-8 text-white">

        <h3 className="text-2xl font-bold">
          Never Miss an Appointment
        </h3>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-purple-100">
          Regular antenatal visits help monitor your health and your baby's
          development. Future versions of MamaSure will automatically send
          reminders and allow appointment booking directly with partner hospitals.
        </p>

      </div>

    </section>
  );
}