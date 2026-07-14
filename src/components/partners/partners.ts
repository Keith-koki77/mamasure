import {
    ShieldCheck,
    PiggyBank,
    HeartHandshake,
    Building2,
    Users,
    Star,
    BadgeCheck,
    LucideIcon,
  } from "lucide-react";
  
  export interface Hospital {
    id: number;
    name: string;
    location: string;
    image: string;
    logo: string;
    rating: number;
    services: string[];
    verified: boolean;
  }
  
  export interface PartnerBenefit {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    color: "purple" | "pink";
  }
  
  export interface PartnerStat {
    id: number;
    icon: LucideIcon;
    value: string;
    label: string;
    description: string;
    color: "purple" | "pink";
  }
  
  export const hospitals: Hospital[] = [
    {
      id: 1,
      name: "Aga Khan University Hospital",
      location: "Nairobi",
      image: "/hospital-aga-khan.jpg",
      logo: "/logo-aga-khan.jpg",
      rating: 4.8,
      verified: true,
      services: [
        "Maternity",
        "Ultrasound",
        "NICU",
      ],
    },
  
    {
      id: 2,
      name: "MP Shah Hospital",
      location: "Nairobi",
      image: "/hospital-mpshah.jpg",
      logo: "/logo-mpshah.jpg",
      rating: 4.6,
      verified: true,
      services: [
        "Maternity",
        "Delivery",
        "Labs",
      ],
    },
  
    {
      id: 3,
      name: "The Nairobi Hospital",
      location: "Nairobi",
      image: "/hospital-nairobi.jpg",
      logo: "/logo-nairobi.jpg",
      rating: 4.7,
      verified: true,
      services: [
        "Maternity",
        "C-Section",
        "NICU",
      ],
    },
  
    {
      id: 4,
      name: "Mater Misericordiae Hospital",
      location: "Nairobi",
      image: "/hospital-mater.jpg",
      logo: "/logo-mater.jpg",
      rating: 4.5,
      verified: true,
      services: [
        "Maternity",
        "Pharmacy",
        "Labs",
      ],
    },
  ];
  
  export const partnerBenefits: PartnerBenefit[] = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Fully Verified",
      description:
        "Every hospital is carefully vetted to meet our standards for quality, safety and maternal care.",
      color: "purple",
    },
  
    {
      id: 2,
      icon: HeartHandshake,
      title: "Maternity Focused",
      description:
        "Partner hospitals offer maternity services designed specifically for mothers and newborns.",
      color: "pink",
    },
  
    {
      id: 3,
      icon: PiggyBank,
      title: "Transparent Pricing",
      description:
        "Know your maternity package costs upfront with no hidden surprises.",
      color: "purple",
    },
  
    {
      id: 4,
      icon: Users,
      title: "Dedicated Support",
      description:
        "Our team supports you from planning through delivery, every step of the journey.",
      color: "pink",
    },
  ];
  
  export const partnerStats: PartnerStat[] = [
    {
      id: 1,
      icon: Building2,
      value: "50+",
      label: "Partner Hospitals",
      description: "Across Kenya",
      color: "pink",
    },
  
    {
      id: 2,
      icon: Users,
      value: "100K+",
      label: "Mothers Served",
      description: "Across our partner network",
      color: "purple",
    },
  
    {
      id: 3,
      icon: Star,
      value: "4.7/5",
      label: "Average Rating",
      description: "Rated by mothers",
      color: "pink",
    },
  
    {
      id: 4,
      icon: BadgeCheck,
      value: "100%",
      label: "Verified Facilities",
      description: "Quality checked",
      color: "purple",
    },
  ];