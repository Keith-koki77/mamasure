import {
    Building2,
    CalendarDays,
    ClipboardList,
    Headphones,
    ShieldCheck,
    Smartphone,
    LucideIcon,
  } from "lucide-react";
  
  export interface FAQ {
    id: number;
    icon: LucideIcon;
    question: string;
    answer: string;
    color: "purple" | "pink";
  }
  
  export const faqs: FAQ[] = [
    {
      id: 1,
      icon: ClipboardList,
      color: "pink",
      question: "How does Mama Sure work?",
      answer:
        "Mama Sure helps you prepare financially for motherhood by allowing you to choose a maternity package, set a personalized savings goal, and contribute gradually over time. You'll also receive reminders, trusted guidance, and access to verified healthcare providers throughout your journey.",
    },
  
    {
      id: 2,
      icon: CalendarDays,
      color: "purple",
      question: "Can I change my savings plan?",
      answer:
        "Yes. You can increase or reduce your contribution amount, adjust your savings target, or change your preferred maternity package whenever your circumstances change.",
    },
  
    {
      id: 3,
      icon: Building2,
      color: "purple",
      question: "Are the hospital packages fixed?",
      answer:
        "No. Mama Sure partners with multiple verified hospitals offering different maternity packages. You are free to choose the option that best matches your healthcare needs and budget.",
    },
  
    {
      id: 4,
      icon: Smartphone,
      color: "pink",
      question: "What payment methods are accepted?",
      answer:
        "You can conveniently save using M-Pesa, debit cards, credit cards, and additional payment methods that will be introduced as the platform grows.",
    },
  
    {
      id: 5,
      icon: ShieldCheck,
      color: "pink",
      question: "Is my money safe with Mama Sure?",
      answer:
        "Absolutely. Your savings are securely managed through trusted financial partners, and your personal information is protected using industry-standard encryption and security practices.",
    },
  
    {
      id: 6,
      icon: Headphones,
      color: "purple",
      question: "What happens if I need support?",
      answer:
        "Our customer support team is available whenever you need assistance. Whether it's questions about your savings, hospital packages, or your account, we're here to help every step of the way.",
    },
  ];