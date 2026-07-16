import EducationHeader from "@/components/dashboard/education/EducationHeader";
import FeaturedArticle from "@/components/dashboard/education/FeaturedArticle";
import EducationCategories from "@/components/dashboard/education/EducationCategories";
import LearningProgress from "@/components/dashboard/education/LearningProgress";
import RecommendedArticles from "@/components/dashboard/education/RecommendedArticles";
import VideoLessons from "@/components/dashboard/education/VideoLessons";
import WeeklyHealthTip from "@/components/dashboard/education/WeeklyHealthTip";
import FAQSection from "@/components/dashboard/education/FAQSection";
import ExpertAdvice from "@/components/dashboard/education/ExpertAdvice";

export default function EducationPage() {
  return (
    <main className="space-y-8">

      {/* Header */}

      <EducationHeader />

      {/* Featured Hero */}

      <FeaturedArticle />

      {/* Categories */}

      <EducationCategories />

      {/* Learning Progress */}

      <LearningProgress />

      {/* Recommended Reading */}

      <RecommendedArticles />

      {/* Video Learning */}

      <VideoLessons />

      {/* Weekly Health Tip */}

      <WeeklyHealthTip />

      {/* Expert Advice */}

      <ExpertAdvice />

      {/* Frequently Asked Questions */}

      <FAQSection />

    </main>
  );
}