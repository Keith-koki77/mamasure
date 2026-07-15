export interface Hospital {
  id: number;
  name: string;
  tier: "Platinum" | "Gold" | "Silver";
  rating: number;
  location: string;
  image: string;
  logo: string;
  normalDelivery: number;
  cSection: number;
  services: string[];
  featured: boolean;
}

export const hospitals: Hospital[] = [
  // ==========================
  // Platinum
  // ==========================

  {
    id: 1,
    name: "Aga Khan University Hospital",
    tier: "Platinum",
    rating: 4.9,
    location: "Parklands, Nairobi",
    image: "/hospitals/aga-khan.jpg",
    logo: "/logos/aga-khan.png",
    normalDelivery: 120000,
    cSection: 180000,
    services: [
      "ANC",
      "Delivery",
      "Private Ward",
      "NICU",
    ],
    featured: true,
  },

  {
    id: 2,
    name: "The Nairobi Hospital",
    tier: "Platinum",
    rating: 4.8,
    location: "Upper Hill, Nairobi",
    image: "/hospitals/nairobi-hospital.jpg",
    logo: "/logos/nairobi-hospital.png",
    normalDelivery: 115000,
    cSection: 175000,
    services: [
      "ANC",
      "Delivery",
      "Private Ward",
      "NICU",
    ],
    featured: true,
  },

  {
    id: 3,
    name: "Karen Hospital",
    tier: "Platinum",
    rating: 4.8,
    location: "Karen, Nairobi",
    image: "/hospitals/karen-hospital.jpg",
    logo: "/logos/karen-hospital.png",
    normalDelivery: 110000,
    cSection: 170000,
    services: [
      "ANC",
      "Delivery",
      "Private Ward",
      "Pediatric Care",
    ],
    featured: true,
  },

  // ==========================
  // Gold
  // ==========================

  {
    id: 4,
    name: "Mater Hospital",
    tier: "Gold",
    rating: 4.7,
    location: "South B, Nairobi",
    image: "/hospitals/mater.jpg",
    logo: "/logos/mater.png",
    normalDelivery: 85000,
    cSection: 135000,
    services: [
      "ANC",
      "Delivery",
      "NICU",
      "Ultrasound",
    ],
    featured: false,
  },

  {
    id: 5,
    name: "MP Shah Hospital",
    tier: "Gold",
    rating: 4.6,
    location: "Parklands, Nairobi",
    image: "/hospitals/mpshah.jpg",
    logo: "/logos/mpshah.png",
    normalDelivery: 90000,
    cSection: 145000,
    services: [
      "ANC",
      "Delivery",
      "Private Ward",
      "NICU",
    ],
    featured: false,
  },

  // ==========================
  // Silver
  // ==========================

  {
    id: 6,
    name: "Equity Afya",
    tier: "Silver",
    rating: 4.5,
    location: "Westlands",
    image: "/hospitals/equity-afya.jpg",
    logo: "/logos/equity-afya.png",
    normalDelivery: 45000,
    cSection: 80000,
    services: [
      "ANC",
      "Delivery",
      "Ultrasound",
    ],
    featured: false,
  },

  {
    id: 7,
    name: "Ruai Family Hospital",
    tier: "Silver",
    rating: 4.4,
    location: "Ruai",
    image: "/hospitals/ruai.jpg",
    logo: "/logos/ruai.png",
    normalDelivery: 42000,
    cSection: 75000,
    services: [
      "ANC",
      "Delivery",
      "Laboratory",
    ],
    featured: false,
  },

  {
    id: 8,
    name: "Neema Uhai Hospital",
    tier: "Silver",
    rating: 4.3,
    location: "Kayole",
    image: "/hospitals/neema-uhai.jpg",
    logo: "/logos/neema-uhai.png",
    normalDelivery: 38000,
    cSection: 70000,
    services: [
      "ANC",
      "Delivery",
      "Ultrasound",
    ],
    featured: false,
  },
];