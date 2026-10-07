import {
  Building2,
  CalendarDays,
  ClipboardList,
  Headphones,
  Landmark,
  PiggyBank,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type FAQGroupId = "basics" | "money";

export interface FAQ {
  id: number;
  group: FAQGroupId;
  icon: LucideIcon;
  question: string;
  answer: string;
  color: "purple" | "pink";
  /**
   * "answered": confirmed copy.
   * "pending":  placeholder until Mama Sure confirms the business model.
   *             Shown with an "Answer coming soon" tag.
   */
  status: "answered" | "pending";
}

export const FAQ_GROUPS: {
  id: FAQGroupId;
  title: string;
  note?: string;
}[] = [
  { id: "basics", title: "Getting started" },
 
];

/**
 * Placeholder body for questions Mama Sure hasn't confirmed yet.
 * Replace each one with the real answer, and flip status to "answered",
 * once the custody / withdrawal / interest model is confirmed.
 * Do not invent details here.
 */
export const PENDING_ANSWER =
  "We're still finalising this. The full answer will be published before customers begin making payments through the platform.";

export const faqs: FAQ[] = [
  /* ------------------------- GETTING STARTED ------------------------- */
  {
    id: 1,
    group: "basics",
    icon: ClipboardList,
    color: "pink",
    status: "answered",
    question: "How does Mama Sure work?",
    answer:
      "Mama Sure helps you prepare financially for motherhood by letting you choose a maternity package, set a personalised savings goal, and contribute gradually over time. You'll also receive reminders and trusted guidance throughout your journey.",
  },
  {
    id: 2,
    group: "basics",
    icon: CalendarDays,
    color: "purple",
    status: "answered",
    question: "Can I change my savings plan?",
    answer:
      "Yes. You can increase or reduce your contribution amount, adjust your savings target, or change your preferred maternity package whenever your circumstances change.",
  },
  {
    id: 3,
    group: "basics",
    icon: Building2,
    color: "purple",
    status: "answered",
    question: "Are the hospital packages fixed?",
    answer:
      "No. Mama Sure is designed to let you compare maternity packages from different hospitals and choose the option that best matches your healthcare needs and budget. Which hospitals and packages are available will be confirmed closer to launch.",
  },
  {
    id: 4,
    group: "basics",
    icon: Smartphone,
    color: "pink",
    status: "answered",
    question: "What payment methods are accepted?",
    answer:
      "Mama Sure is being built around M-Pesa, with card payments and other methods planned as the platform grows. The payment methods available, and any applicable terms, will be confirmed before customers begin making payments.",
  },
  {
    id: 5,
    group: "basics",
    icon: Headphones,
    color: "purple",
    status: "answered",
    question: "What happens if I need support?",
    answer:
      "Our support team is here to help with questions about your savings, hospital packages or your account.",
  },

  /* ----------------------------- YOUR MONEY ---------------------------- */
];