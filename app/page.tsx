import HeroSection from "@/components/home/HeroSection";
import ProductQuestion from "@/components/home/ProductQuestion";
import LinearToCircular from "@/components/home/LinearToCircular";
import ProductsToPossibilities from "@/components/home/ProductsToPossibilities";
import EcosystemNetwork from "@/components/home/EcosystemNetwork";
import TechPillarsTeaser from "@/components/home/TechPillarsTeaser";
import ProductJourneyStepper from "@/components/home/ProductJourneyStepper";
import ImpactCards from "@/components/home/ImpactCards";
import RegionalToGlobalMap from "@/components/home/RegionalToGlobalMap";
import PathwaysGrid from "@/components/home/PathwaysGrid";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. The Question */}
      <ProductQuestion />

      {/* 3. Linear to Circular Transformation */}
      <LinearToCircular />

      {/* 4. Products to Possibilities */}
      <ProductsToPossibilities />

      {/* 5. Interactive Ecosystem Network */}
      <EcosystemNetwork />

      {/* 6. Technology Pillars */}
      <TechPillarsTeaser />

      {/* 7. One Product. One Journey */}
      <ProductJourneyStepper />

      {/* 8. Impact Grid */}
      <ImpactCards />

      {/* 9. Northeast -> India -> Global */}
      <RegionalToGlobalMap />

      {/* 10. Six Participation Pathways */}
      <PathwaysGrid />

      {/* 11. Final Cinematic Call-to-Action */}
      <FinalCta />
    </div>
  );
}
