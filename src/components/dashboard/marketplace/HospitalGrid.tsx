"use client";

import HospitalCard from "./HospitalCard";

interface Hospital {
  id: number;
  name: string;
  image: string;
  logo: string;
  location: string;
  tier: "Platinum" | "Gold" | "Silver";
  rating: number;
  normalDelivery: number;
  cSection: number;
  services: string[];
}

interface HospitalGridProps {
  hospitals: Hospital[];
}

export default function HospitalGrid({
  hospitals,
}: HospitalGridProps) {
  return (
    <section>
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {hospitals.map((hospital) => (
          <HospitalCard
            key={hospital.id}
            name={hospital.name}
            image={hospital.image}
            logo={hospital.logo}
            location={hospital.location}
            tier={hospital.tier}
            rating={hospital.rating}
            packagePrice={`KES ${hospital.normalDelivery.toLocaleString()}`}
            savingsTarget={`KES ${hospital.cSection.toLocaleString()}`}
            services={hospital.services}
          />
        ))}
      </div>
    </section>
  );
}