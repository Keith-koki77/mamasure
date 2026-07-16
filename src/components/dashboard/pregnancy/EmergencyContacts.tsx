"use client";

import {
  Ambulance,
  Phone,
  Hospital,
  UserRound,
  Stethoscope,
  AlertTriangle,
} from "lucide-react";

const contacts = [
  {
    id: 1,
    title: "Emergency Ambulance",
    subtitle: "National Emergency",
    phone: "999 / 112",
    icon: Ambulance,
    color: "bg-red-100 text-red-600",
  },
  {
    id: 2,
    title: "Assigned Doctor",
    subtitle: "Dr. Grace Mwangi",
    phone: "+254 712 345 678",
    icon: Stethoscope,
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 3,
    title: "Preferred Hospital",
    subtitle: "Aga Khan University Hospital",
    phone: "+254 20 366 2000",
    icon: Hospital,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 4,
    title: "Emergency Contact",
    subtitle: "John Doe (Partner)",
    phone: "+254 701 123 456",
    icon: UserRound,
    color: "bg-pink-100 text-pink-600",
  },
];

export default function EmergencyContacts() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-red-100 bg-white shadow-lg">

      {/* Header */}

      <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-700 p-8 text-white">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">

            <Phone className="h-8 w-8" />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Emergency Contacts
            </h2>

            <p className="mt-2 text-red-100">
              Quick access to important contacts whenever you need help.
            </p>

          </div>

        </div>

      </div>

      {/* Contacts */}

      <div className="grid gap-6 p-8 md:grid-cols-2">

        {contacts.map((contact) => {
          const Icon = contact.icon;

          return (
            <div
              key={contact.id}
              className="group rounded-3xl border border-purple-100 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-300 hover:shadow-xl"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${contact.color}`}
              >
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {contact.title}
              </h3>

              <p className="mt-2 text-gray-500">
                {contact.subtitle}
              </p>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-gray-50 px-5 py-4">

                <span className="font-semibold text-slate-900">
                  {contact.phone}
                </span>

                <button className="rounded-xl bg-gradient-to-r from-purple-700 to-pink-500 px-4 py-2 font-semibold text-white transition hover:opacity-90">
                  Call
                </button>

              </div>

            </div>
          );
        })}

      </div>

      {/* Emergency Tips */}

      <div className="border-t border-red-100 bg-red-50 p-8">

        <div className="flex items-start gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">

            <AlertTriangle className="h-7 w-7 text-red-600" />

          </div>

          <div>

            <h3 className="text-2xl font-bold text-red-700">
              When to Seek Immediate Medical Attention
            </h3>

            <ul className="mt-5 space-y-3 text-gray-700">

              <li>• Heavy vaginal bleeding.</li>

              <li>• Severe abdominal pain.</li>

              <li>• Persistent severe headache or blurred vision.</li>

              <li>• Reduced or absent baby movements.</li>

              <li>• Sudden swelling of the face or hands.</li>

              <li>• Leaking fluid before labour.</li>

              <li>• Difficulty breathing or chest pain.</li>

            </ul>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="bg-gradient-to-r from-purple-700 to-pink-500 p-8 text-center text-white">

        <h3 className="text-2xl font-bold">
          Your Health Comes First ❤️
        </h3>

        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-purple-100">
          Never hesitate to contact your healthcare provider if something
          feels unusual. Early medical attention can make all the
          difference for both you and your baby.
        </p>

      </div>

    </section>
  );
}