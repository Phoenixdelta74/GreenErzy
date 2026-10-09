import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import HowItWorks from "@/components/home/HowItWorks";
import WhoItsFor from "@/components/home/WhoItsFor";
import StartingInAssam from "@/components/home/StartingInAssam";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero: what we do, in one line */}
      <HeroSection />

      {/* 2. Problem */}
      <ProblemSection />

      {/* 3. Solution: five simple stages */}
      <HowItWorks />

      {/* 4. Who it's for */}
      <WhoItsFor />

      {/* 5. Where we start, with goals labelled as goals */}
      <StartingInAssam />

      {/* 6. Call to action */}
      <FinalCta />
    </div>
  );
}
