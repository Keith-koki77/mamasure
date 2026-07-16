import {
    Bell,
    Pill,
    Droplets,
    Salad,
    HeartPulse,
    Dumbbell,
    Moon,
    Baby,
    CalendarDays,
    ShieldAlert,
    CheckCircle2,
    Clock3,
    Brain,
  } from "lucide-react";
  
  import { LucideIcon } from "lucide-react";
  
  /* -------------------------------------------------------------------------- */
  /*                                   TYPES                                    */
  /* -------------------------------------------------------------------------- */
  
  export type ReminderColor =
    | "purple"
    | "pink"
    | "green"
    | "blue"
    | "orange"
    | "red";
  
  export interface ReminderOverviewCard {
    id: number;
    title: string;
    value: string;
    icon: LucideIcon;
    color: ReminderColor;
  }
  
  export interface TodayReminder {
    id: number;
    title: string;
    time: string;
    status: "Completed" | "Upcoming" | "Missed";
    priority: "High" | "Medium" | "Low";
    icon: LucideIcon;
    color: ReminderColor;
  }
  
  export interface UpcomingReminder {
    id: number;
    title: string;
    date: string;
    time: string;
    hospital?: string;
    status: string;
    icon: LucideIcon;
  }
  
  export interface ReminderCategory {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    color: ReminderColor;
  }
  
  export interface ReminderInsight {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    color: ReminderColor;
  }
  
  export interface EmergencyAlert {
    id: number;
    title: string;
  }
  
  export interface WeeklyScheduleDay {
    day: string;
    completed: boolean;
  }
  
  /* -------------------------------------------------------------------------- */
  /*                                  SUMMARY                                   */
  /* -------------------------------------------------------------------------- */
  
  export const reminderSummary = {
    pregnancyWeek: 24,
  
    upcoming: 12,
  
    completed: 38,
  
    missed: 2,
  
    activePlans: 6,
  };
  
  /* -------------------------------------------------------------------------- */
  /*                               OVERVIEW CARDS                               */
  /* -------------------------------------------------------------------------- */
  
  export const overviewCards: ReminderOverviewCard[] = [
    {
      id: 1,
      title: "Upcoming",
      value: "12",
      icon: Bell,
      color: "purple",
    },
    {
      id: 2,
      title: "Completed",
      value: "38",
      icon: CheckCircle2,
      color: "green",
    },
    {
      id: 3,
      title: "Missed",
      value: "2",
      icon: Clock3,
      color: "orange",
    },
    {
      id: 4,
      title: "Reminder Plans",
      value: "6",
      icon: CalendarDays,
      color: "pink",
    },
  ];
  
  /* -------------------------------------------------------------------------- */
  /*                             TODAY'S REMINDERS                              */
  /* -------------------------------------------------------------------------- */
  
  export const todayReminders: TodayReminder[] = [
    {
      id: 1,
      title: "Drink Water",
      time: "08:00 AM",
      status: "Completed",
      priority: "High",
      icon: Droplets,
      color: "blue",
    },
    {
      id: 2,
      title: "Take Iron Supplements",
      time: "09:30 AM",
      status: "Completed",
      priority: "High",
      icon: Pill,
      color: "purple",
    },
    {
      id: 3,
      title: "Healthy Lunch",
      time: "01:00 PM",
      status: "Upcoming",
      priority: "Medium",
      icon: Salad,
      color: "green",
    },
    {
      id: 4,
      title: "20 Minute Walk",
      time: "04:00 PM",
      status: "Upcoming",
      priority: "Medium",
      icon: Dumbbell,
      color: "orange",
    },
    {
      id: 5,
      title: "Sleep Reminder",
      time: "09:00 PM",
      status: "Upcoming",
      priority: "Low",
      icon: Moon,
      color: "pink",
    },
  ];
  
  /* -------------------------------------------------------------------------- */
  /*                           UPCOMING REMINDERS                               */
  /* -------------------------------------------------------------------------- */
  
  export const upcomingReminders: UpcomingReminder[] = [
    {
      id: 1,
      title: "Antenatal Clinic Visit",
      date: "18 Jul 2026",
      time: "09:00 AM",
      hospital: "Aga Khan University Hospital",
      status: "Upcoming",
      icon: HeartPulse,
    },
    {
      id: 2,
      title: "Ultrasound Scan",
      date: "24 Jul 2026",
      time: "11:00 AM",
      hospital: "Aga Khan University Hospital",
      status: "Scheduled",
      icon: Baby,
    },
    {
      id: 3,
      title: "Nutrition Review",
      date: "27 Jul 2026",
      time: "02:00 PM",
      hospital: "MamaSure Nutrition",
      status: "Scheduled",
      icon: Salad,
    },
  ];
  
  /* -------------------------------------------------------------------------- */
  /*                           REMINDER CATEGORIES                              */
  /* -------------------------------------------------------------------------- */
  
  export const reminderCategories: ReminderCategory[] = [
    {
      id: 1,
      title: "Medication",
      description: "Daily supplements and medication reminders.",
      icon: Pill,
      color: "purple",
    },
    {
      id: 2,
      title: "Hydration",
      description: "Stay hydrated throughout the day.",
      icon: Droplets,
      color: "blue",
    },
    {
      id: 3,
      title: "Nutrition",
      description: "Healthy meals and balanced diet reminders.",
      icon: Salad,
      color: "green",
    },
    {
      id: 4,
      title: "Clinic Visits",
      description: "Never miss an antenatal appointment.",
      icon: CalendarDays,
      color: "pink",
    },
    {
      id: 5,
      title: "Exercise",
      description: "Safe pregnancy workouts and walks.",
      icon: Dumbbell,
      color: "orange",
    },
    {
      id: 6,
      title: "Baby Milestones",
      description: "Track your baby's weekly development.",
      icon: Baby,
      color: "purple",
    },
  ];
  
  /* -------------------------------------------------------------------------- */
  /*                               AI INSIGHTS                                  */
  /* -------------------------------------------------------------------------- */
  
  export const reminderInsights: ReminderInsight[] = [
    {
      id: 1,
      title: "Excellent Consistency",
      description:
        "You've completed all medication reminders this week. Keep it up!",
      icon: Brain,
      color: "purple",
    },
    {
      id: 2,
      title: "Hydration Reminder",
      description:
        "You missed yesterday's afternoon hydration reminder.",
      icon: Droplets,
      color: "blue",
    },
    {
      id: 3,
      title: "Stay Active",
      description:
        "Completing your daily walking reminders can improve circulation and reduce swelling.",
      icon: HeartPulse,
      color: "green",
    },
  ];
  
  /* -------------------------------------------------------------------------- */
  /*                             WEEKLY CALENDAR                                */
  /* -------------------------------------------------------------------------- */
  
  export const weeklySchedule: WeeklyScheduleDay[] = [
    {
      day: "Mon",
      completed: true,
    },
    {
      day: "Tue",
      completed: true,
    },
    {
      day: "Wed",
      completed: true,
    },
    {
      day: "Thu",
      completed: false,
    },
    {
      day: "Fri",
      completed: false,
    },
    {
      day: "Sat",
      completed: false,
    },
    {
      day: "Sun",
      completed: false,
    },
  ];
  
  /* -------------------------------------------------------------------------- */
  /*                            EMERGENCY ALERTS                                */
  /* -------------------------------------------------------------------------- */
  
  export const emergencyAlerts: EmergencyAlert[] = [
    {
      id: 1,
      title: "Heavy vaginal bleeding",
    },
    {
      id: 2,
      title: "Severe or persistent headaches",
    },
    {
      id: 3,
      title: "Reduced or absent baby movements",
    },
    {
      id: 4,
      title: "High fever or chills",
    },
    {
      id: 5,
      title: "Sudden swelling of the face or hands",
    },
  ];
  
  /* -------------------------------------------------------------------------- */
  /*                           REMINDER SETTINGS                                */
  /* -------------------------------------------------------------------------- */
  
  export const reminderSettings = [
    {
      id: 1,
      title: "Push Notifications",
      description: "Receive reminders directly in the MamaSure app.",
    },
    {
      id: 2,
      title: "SMS Notifications",
      description: "Receive reminders through SMS.",
    },
    {
      id: 3,
      title: "WhatsApp Reminders",
      description: "Get reminder messages on WhatsApp.",
    },
    {
      id: 4,
      title: "Partner Notifications",
      description: "Notify your partner about important appointments.",
    },
  ];