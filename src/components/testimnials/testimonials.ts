import {
    BadgeCheck,
    HeartHandshake,
    Lock,
    ShieldCheck,
    Users,
    LucideIcon,
  } from "lucide-react";
  
  export interface Testimonial {
    id: number;
    name: string;
    stage: string;
    location: string;
    avatar: string;
    rating: number;
    verified: boolean;
    review: string;
  }
  
  export interface SocialStat {
    id: number;
    icon: LucideIcon;
    value: string;
    label: string;
    description: string;
    color: "purple" | "pink";
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Grace Wanjiru",
      stage: "28 weeks pregnant",
      location: "Nairobi, Kenya",
      avatar: "/avatar-grace.jpg",
      rating: 5,
      verified: true,
      review:
        "Mama Sure has completely changed how I prepare for motherhood. I can now save little by little knowing I'll have everything ready when my baby arrives.",
    },
  
    {
      id: 2,
      name: "Faith Achieng'",
      stage: "First-time mom",
      location: "Kisumu, Kenya",
      avatar: "/avatar-faith.jpg",
      rating: 5,
      verified: true,
      review:
        "The hospital packages and flexible savings plan give me peace of mind. I love knowing my baby and I are in good hands.",
    },
  
    {
      id: 3,
      name: "Terry Moraa",
      stage: "32 weeks pregnant",
      location: "Mombasa, Kenya",
      avatar: "/avatar-terry.jpg",
      rating: 5,
      verified: true,
      review:
        "I appreciate the transparency and support from the Mama Sure team. They truly care about mothers and make planning for pregnancy much easier.",
    },
  ];
  
  export const socialStats: SocialStat[] = [
    {
      id: 1,
      icon: Users,
      value: "5,000+",
      label: "Moms on the Waitlist",
      description: "Growing every day",
      color: "pink",
    },
  
    {
      id: 2,
      icon: ShieldCheck,
      value: "98%",
      label: "Would Recommend",
      description: "Trusted by expectant mothers",
      color: "purple",
    },
  
    {
      id: 3,
      icon: HeartHandshake,
      value: "24/7",
      label: "Support You Can Count On",
      description: "We're with you every step",
      color: "pink",
    },
  
    {
      id: 4,
      icon: Lock,
      value: "100%",
      label: "Secure & Private",
      description: "Your information is protected",
      color: "purple",
    },
  ];