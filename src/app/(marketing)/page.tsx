import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import ProblemSection from "@/components/problem/ProblemSection";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import FeaturesSection from "@/components/features/FeaturesSection";
import PartnerSection from "@/components/partners/PartnerSection";
import TestimonialsSection from "@/components/testimnials/TestimonialsSection";
import FAQSection from "@/components/faq/FAQSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <PartnerSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </>
  );
}