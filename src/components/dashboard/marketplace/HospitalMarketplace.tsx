"use client";

import { useMemo, useState } from "react";

import { hospitals } from "@/data/hospitals";

import MarketplaceHeader from "./MarketplaceHeader";
import HospitalFilters from "./HospitalFilters";
import HospitalGrid from "./HospitalGrid";

type Tier = "All" | "Platinum" | "Gold" | "Silver";

export default function HospitalMarketplace() {
  const [search, setSearch] = useState("");

  const [selectedTier, setSelectedTier] =
    useState<Tier>("All");

  const filteredHospitals = useMemo(() => {
    return hospitals.filter((hospital) => {
      const matchesSearch =
        hospital.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        hospital.location
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesTier =
        selectedTier === "All" ||
        hospital.tier === selectedTier;

      return matchesSearch && matchesTier;
    });
  }, [search, selectedTier]);

  return (
    <div className="space-y-8">

      <MarketplaceHeader
        search={search}
        onSearchChange={setSearch}
      />

      <HospitalFilters
        selectedTier={selectedTier}
        onTierChange={setSelectedTier}
      />

      <HospitalGrid
        hospitals={filteredHospitals}
      />

    </div>
  );
}