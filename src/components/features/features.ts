import {
  Bell,
  BookOpen,
  Building2,
  GraduationCap,
  Lock,
  PiggyBank,
  Scale,
  ShieldCheck,
  Smartphone,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  badgeIcon: LucideIcon;
  tone: "purple" | "pink";
}

export const features: Feature[] = [
  {
    id: 1,
    icon: Building2,
    title: "Hospital Packages",
    // Deliberately no "verified" / "trusted" / "partner" wording until
    // Mama Sure confirms those relationships.
    description:
      "Compare maternity hospitals and delivery packages to find the one that matches your healthcare needs and budget.",
    badge: "Compare before you decide",
    badgeIcon: Scale,
    tone: "purple",
  },
  {
    id: 2,
    icon: PiggyBank,
    title: "Smart Savings",
    description:
      "Set your maternity savings goal, contribute consistently and watch your fund grow toward delivery.",
    badge: "Small steps. Big confidence.",
    badgeIcon: Wallet,
    tone: "pink",
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Flexible Payments",
    description:
      "Save anytime using M-Pesa, debit cards or future payment options that suit your lifestyle.",
    badge: "Secure. Fast. Convenient.",
    badgeIcon: Smartphone,
    tone: "purple",
  },
  {
    id: 4,
    icon: BookOpen,
    title: "Health Education",
    description:
      "Receive trusted maternal health articles, videos and expert guidance tailored to every stage of pregnancy.",
    badge: "Knowledge for a healthier you",
    badgeIcon: GraduationCap,
    tone: "pink",
  },
  {
    id: 5,
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Stay on track with automatic reminders for savings, appointments and important milestones.",
    badge: "Stay on track, every step",
    badgeIcon: Bell,
    tone: "purple",
  },
  {
    id: 6,
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your savings, personal information and transactions are protected with enterprise-grade security.",
    badge: "Your privacy, our priority",
    badgeIcon: ShieldCheck,
    tone: "pink",
  },
];