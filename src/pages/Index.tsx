import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoachingAppSection from "@/components/CoachingAppSection";
import FitScoreQuiz from "@/components/FitScoreQuiz";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <CoachingAppSection />
      <FitScoreQuiz />
      <ProgramsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
