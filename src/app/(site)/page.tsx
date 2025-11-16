import { HeroSection } from "@/components/template";
import PopularCategorySection from "@/components/template/categorySection";
import HowToFindInternship from "@/components/template/HowToFindInternshipSection";
import PopularJobsSection from "@/components/template/recommend_internshipSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PopularJobsSection />
      <HowToFindInternship />
      <PopularCategorySection />
    </div>
  );
}
