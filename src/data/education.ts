import {
    Baby,
    HeartPulse,
    Apple,
    Dumbbell,
    Stethoscope,
    BookOpen,
    PlayCircle,
    Award,
    UserRound,
  } from "lucide-react";
  
  import { LucideIcon } from "lucide-react";
  
  /* -------------------------------------------------------------------------- */
  /*                                  Interfaces                                */
  /* -------------------------------------------------------------------------- */
  
  export interface EducationCategory {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    color: "purple" | "pink" | "green" | "blue";

    lessons?: number;
    level?: string;
  }
  
  export interface Article {
    id: number;
    title: string;
    description: string;
    category: string;
    readTime: string;
    image: string;
    featured?: boolean;
  }
  
  export interface VideoLesson {
    id: number;
    title: string;
    duration: string;
    thumbnail: string;
    instructor: string;
  }
  
  export interface FAQ {
    id: number;
    question: string;
    answer: string;
  }
  
  export interface ExpertAdvice {
    id: number;
    name: string;
    role: string;
    message: string;
    avatar: string;
  }
  
  export interface WeeklyTip {
    title: string;
    description: string;
  }
  
  export interface LearningProgress {
    completed: number;
    total: number;
    streak: number;
    certificates: number;
  }
  
  /* -------------------------------------------------------------------------- */
  /*                            Learning Progress                               */
  /* -------------------------------------------------------------------------- */
  
  export const learningProgress: LearningProgress = {
    completed: 12,
    total: 20,
    streak: 8,
    certificates: 2,
  };
  
  /* -------------------------------------------------------------------------- */
  /*                             Featured Article                               */
  /* -------------------------------------------------------------------------- */
  
  export const featuredArticle: Article = {
    id: 1,
    title: "Preparing for Labour and Delivery",
    description:
      "Learn the signs of labour, when to go to the hospital, and how to prepare physically and emotionally for childbirth.",
    category: "Labour",
    readTime: "10 min read",
    image: "/education/labour.jpg",
    featured: true,
  };
  
  /* -------------------------------------------------------------------------- */
  /*                              Categories                                    */
  /* -------------------------------------------------------------------------- */
  
  export const educationCategories: EducationCategory[] = [
    {
      id: 1,
      title: "Pregnancy",
      description: "Weekly pregnancy guidance.",
      icon: Baby,
      color: "purple",
      lessons: 14,
      level:"Beginner",
    },
    {
      id: 2,
      title: "Nutrition",
      description: "Healthy meals for mother and baby.",
      icon: Apple,
      color: "green",
      lessons: 10,
      level: "Beginner",
    },
    {
      id: 3,
      title: "Labour",
      description: "Prepare confidently for childbirth.",
      icon: HeartPulse,
      color: "pink",
      lessons: 12,
      level: "Beginner",
    },
    {
      id: 4,
      title: "Exercise",
      description: "Safe prenatal workouts.",
      icon: Dumbbell,
      color: "blue",
      lessons: 12,
      level: "Beginner",
    },
    {
      id: 5,
      title: "Medical Care",
      description: "Antenatal & postnatal guidance.",
      icon: Stethoscope,
      color: "purple",
      lessons: 9,
      level: "Beginner",
    },
    {
      id: 6,
      title: "Baby Care",
      description: "Caring for your newborn.",
      icon: BookOpen,
      color: "pink",
      lessons: 11,
      level: "Beginner",
    },
  ];
  
  /* -------------------------------------------------------------------------- */
  /*                              Articles                                      */
  /* -------------------------------------------------------------------------- */
  
  export const recommendedArticles: Article[] = [
    {
      id: 1,
      title: "Signs That Labour Is Starting",
      description:
        "Know the early signs that indicate labour has begun and when to visit your hospital.",
      category: "Labour",
      readTime: "7 min read",
      image: "/education/labour-signs.jpg",
    },
    {
      id: 2,
      title: "Foods to Eat During Pregnancy",
      description:
        "Discover nutrient-rich foods that support healthy fetal development.",
      category: "Nutrition",
      readTime: "6 min read",
      image: "/education/nutrition.jpg",
    },
    {
      id: 3,
      title: "Safe Pregnancy Exercises",
      description:
        "Simple exercises to stay active throughout pregnancy.",
      category: "Exercise",
      readTime: "5 min read",
      image: "/education/exercise.jpg",
    },
    {
      id: 4,
      title: "Breastfeeding Basics",
      description:
        "Everything you need to know before welcoming your baby.",
      category: "Baby Care",
      readTime: "8 min read",
      image: "/education/breastfeeding.jpg",
    },
  ];
  
  /* -------------------------------------------------------------------------- */
  /*                               Videos                                       */
  /* -------------------------------------------------------------------------- */
  
  export const videoLessons: VideoLesson[] = [
    {
      id: 1,
      title: "Preparing Your Hospital Bag",
      duration: "8 mins",
      thumbnail: "/education/video1.jpg",
      instructor: "Midwife Grace",
    },
    {
      id: 2,
      title: "How to Breastfeed Correctly",
      duration: "12 mins",
      thumbnail: "/education/video2.jpg",
      instructor: "Dr. Mercy Wanjiku",
    },
    {
      id: 3,
      title: "Baby Bathing Guide",
      duration: "9 mins",
      thumbnail: "/education/video3.jpg",
      instructor: "Nurse Faith",
    },
  ];
  
  /* -------------------------------------------------------------------------- */
  /*                              Weekly Tip                                    */
  /* -------------------------------------------------------------------------- */
  
  export const weeklyTip: WeeklyTip = {
    title: "Sleep on Your Left Side",
    description:
      "Sleeping on your left side improves blood circulation to the placenta and helps reduce swelling during pregnancy.",
  };
  
  /* -------------------------------------------------------------------------- */
  /*                                   FAQ                                      */
  /* -------------------------------------------------------------------------- */
  
  export const faqs: FAQ[] = [
    {
      id: 1,
      question: "When should I start antenatal clinics?",
      answer:
        "Ideally during the first trimester, as soon as you know you're pregnant.",
    },
    {
      id: 2,
      question: "Can I exercise while pregnant?",
      answer:
        "Yes. Moderate, doctor-approved exercise is generally safe for most pregnancies.",
    },
    {
      id: 3,
      question: "What foods should I avoid?",
      answer:
        "Avoid raw meat, unpasteurized dairy products, excessive caffeine, and alcohol.",
    },
    {
      id: 4,
      question: "When should I go to the hospital?",
      answer:
        "Go immediately if your water breaks, labour contractions become regular, or you experience heavy bleeding.",
    },
  ];
  
  /* -------------------------------------------------------------------------- */
  /*                             Expert Advice                                  */
  /* -------------------------------------------------------------------------- */
  
  export const expertAdvice = {
    name: "Dr. Grace Wanjiru",
  
    specialization: "Consultant Obstetrician & Gynaecologist",
  
    experience: 14,
  
    image: "/experts/dr-grace.jpg",
  
    title: "Preparing for Your Third Trimester",
  
    message:
      "The third trimester is an important period for both mother and baby. Focus on maintaining a nutritious diet, attending all antenatal appointments, monitoring fetal movements, staying physically active within your healthcare provider's recommendations, and preparing your birth plan well before your expected delivery date.",
  
    recommendations: [
      "Never skip your scheduled antenatal clinic appointments.",
      "Monitor your baby's movements every day and seek medical attention if they decrease.",
      "Prepare your hospital bag by week 36 of pregnancy.",
      "Stay hydrated and eat a balanced diet rich in iron, calcium and protein.",
    ],
  };
  
  /* -------------------------------------------------------------------------- */
  /*                           Education Stats                                  */
  /* -------------------------------------------------------------------------- */
  
  export const educationStats = [
    {
      id: 1,
      title: "Articles",
      value: "48+",
      icon: BookOpen,
      color: "purple",
    },
    {
      id: 2,
      title: "Video Lessons",
      value: "20+",
      icon: PlayCircle,
      color: "pink",
    },
    {
      id: 3,
      title: "Learning Streak",
      value: "8 Days",
      icon: Award,
      color: "green",
    },
    {
      id: 4,
      title: "Experts",
      value: "15+",
      icon: UserRound,
      color: "blue",
    },
  ];

  