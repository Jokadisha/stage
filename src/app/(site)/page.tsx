import {
  HeroSection,
  FeaturedInternshipSection,
  TrustedCompaniesSection,
  TestimonialsSection,
  CallToActionSection,
} from "@/components/template";
import PopularCategorySection from "@/components/template/categorySection";
import HowToFindInternship from "@/components/template/HowToFindInternshipSection";
import PopularJobsSection from "@/components/template/recommend_internshipSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrustedCompaniesSection />
      <PopularJobsSection />
      <FeaturedInternshipSection />
      <HowToFindInternship />
      <PopularCategorySection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
}
