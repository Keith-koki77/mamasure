import {
    Baby,
    CalendarDays,
    HeartPulse,
    Apple,
    CheckCircle2,
    Phone,
    Clock,
    Activity,
  } from "lucide-react";
  
  export const pregnancy = {
    currentWeek: 24,
  
    totalWeeks: 40,
  
    progress: 60,
  
    trimester: "Second Trimester",
  
    dueDate: "12 Nov 2026",
  
    daysRemaining: 112,
  
    babySize: "Mango 🥭",
  
    babyWeight: "600 g",
  
    babyLength: "30 cm",
  };
  
  export const overviewCards = [
    {
      id: 1,
      title: "Current Week",
      value: "Week 24",
      icon: Baby,
      color: "purple",
    },
    {
      id: 2,
      title: "Days Remaining",
      value: "112 Days",
      icon: CalendarDays,
      color: "pink",
    },
    {
      id: 3,
      title: "Due Date",
      value: "12 Nov 2026",
      icon: HeartPulse,
      color: "purple",
    },
    {
      id: 4,
      title: "Baby Size",
      value: "🥭 Mango",
      icon: Baby,
      color: "pink",
    },
  ];
  
  export const babyDevelopment = {
    title: "Your Baby This Week",
  
    description:
      "Your baby's organs are becoming more developed and their senses are improving every day.",
  
    weight: "600 g",
  
    length: "30 cm",
  
    developments: [
      "❤️ Heartbeat is stronger than ever.",
      "👂 Responds to familiar voices and sounds.",
      "👣 Tiny fingerprints are fully formed.",
      "🧠 Brain development is accelerating.",
      "👀 Eyes are beginning to open.",
    ],
  };
  
  export const motherChanges = {
    title: "Changes You May Experience",
  
    description:
      "Every pregnancy is different, but these are common experiences during Week 24.",
  
    changes: [
      "Baby kicks become stronger.",
      "Back pain may increase.",
      "Increased appetite.",
      "Shortness of breath occasionally.",
      "Sleep may become slightly uncomfortable.",
    ],
  };
  
  export const milestones = [
    {
      id: 1,
      week: 28,
      title: "Glucose Screening",
      completed: false,
    },
    {
      id: 2,
      week: 30,
      title: "Hospital Tour",
      completed: false,
    },
    {
      id: 3,
      week: 32,
      title: "Birth Plan Discussion",
      completed: false,
    },
    {
      id: 4,
      week: 36,
      title: "Pack Hospital Bag",
      completed: false,
    },
  ];
  
  export const healthChecklist = [
    {
      id: 1,
      task: "Take prenatal vitamins",
      completed: true,
    },
    {
      id: 2,
      task: "Drink at least 2 litres of water",
      completed: true,
    },
    {
      id: 3,
      task: "30-minute walk",
      completed: false,
    },
    {
      id: 4,
      task: "Iron supplements",
      completed: true,
    },
    {
      id: 5,
      task: "Sleep for at least 8 hours",
      completed: false,
    },
  ];
  
  export const appointments = [
    {
      id: 1,
      title: "First Antenatal Visit",
      hospital: "Aga Khan University Hospital",
      date: "15 Jan 2026",
      week: 12,
      status: "completed",
    },
    {
      id: 2,
      title: "Routine Antenatal Checkup",
      hospital: "Aga Khan University Hospital",
      date: "12 May 2026",
      week: 24,
      status: "completed",
    },
    {
      id: 3,
      title: "Growth Scan",
      hospital: "Aga Khan University Hospital",
      date: "28 Jul 2026",
      week: 30,
      status: "upcoming",
    },
    {
      id: 4,
      title: "Birth Plan Consultation",
      hospital: "Aga Khan University Hospital",
      date: "18 Aug 2026",
      week: 34,
      status: "scheduled",
    },
    {
      id: 5,
      title: "Final Antenatal Visit",
      hospital: "Aga Khan University Hospital",
      date: "12 Sept 2026",
      week: 38,
      status: "scheduled",
    },
  ];
  
  export const nutritionTips = [
    {
      id: 1,
      food: "Spinach",
      benefit: "Rich in Iron",
    },
    {
      id: 2,
      food: "Beans",
      benefit: "Protein & Folate",
    },
    {
      id: 3,
      food: "Eggs",
      benefit: "High-quality Protein",
    },
    {
      id: 4,
      food: "Lean Beef",
      benefit: "Iron & Vitamin B12",
    },
  ];
  
  export const weeklyQuote = {
    quote:
      "Every little kick reminds you that you're building a beautiful future.",
  
    author: "MamaSure",
  };
  
  export const emergencyContacts = [
    {
      id: 1,
      title: "Hospital",
      contact: "+254 700 123 456",
      icon: Phone,
    },
    {
      id: 2,
      title: "Doctor",
      contact: "+254 711 987 654",
      icon: HeartPulse,
    },
    {
      id: 3,
      title: "Emergency Services",
      contact: "999",
      icon: Activity,
    },
  ];
  
  export const journeyStats = [
    {
      id: 1,
      title: "Current Week",
      value: "24 / 40",
      icon: Baby,
      color: "purple",
    },
    {
      id: 2,
      title: "Pregnancy Progress",
      value: "60%",
      icon: Activity,
      color: "pink",
    },
    {
      id: 3,
      title: "Next Appointment",
      value: "28 Jul",
      icon: Clock,
      color: "purple",
    },
    {
      id: 4,
      title: "Healthy Habits",
      value: "3 / 5",
      icon: CheckCircle2,
      color: "pink",
    },
  ];
  
  export const quickTips = [
    {
      id: 1,
      icon: Apple,
      title: "Eat Iron-rich Foods",
      description:
        "Include spinach, beans and lean meat in your meals this week.",
    },
    {
      id: 2,
      icon: HeartPulse,
      title: "Stay Hydrated",
      description:
        "Aim for at least 2 litres of water every day.",
    },
    {
      id: 3,
      icon: Activity,
      title: "Keep Moving",
      description:
        "A light 30-minute walk can improve circulation and reduce fatigue.",
    },
  ];

  export const upcomingMilestones = [
    {
      id: 1,
      week: 28,
      title: "Routine Antenatal Visit",
      description:
        "Meet your healthcare provider for routine monitoring of your baby's growth, blood pressure, and overall health.",
    },
    {
      id: 2,
      week: 30,
      title: "Growth & Wellness Scan",
      description:
        "Your baby's growth, heartbeat, and positioning will be assessed to ensure healthy development.",
    },
    {
      id: 3,
      week: 32,
      title: "Create Your Birth Plan",
      description:
        "Discuss your delivery preferences, pain management options, and hospital arrangements with your healthcare provider.",
    },
    {
      id: 4,
      week: 35,
      title: "Pack Your Hospital Bag",
      description:
        "Prepare essential items for both you and your baby so you're ready whenever labour begins.",
    },
    {
      id: 5,
      week: 37,
      title: "Baby Can Arrive Anytime",
      description:
        "Your pregnancy is considered full-term. Continue monitoring your baby's movements and follow your doctor's advice.",
    },
  ];
  