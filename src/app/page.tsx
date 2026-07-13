import Hero from "@/components/sections/Hero";
import ClientsSection from "@/components/sections/ClientsSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import GraphixSection from "@/components/sections/GraphixSection";
import ServiceShowcaseSection from "@/components/sections/ServiceShowcaseSection";
import GraphixWaySection from "@/components/sections/GraphixWaySection";
import AboutSection from "@/components/sections/AboutSection";
import WhySection from "@/components/sections/WhySection";
import ImpactSection from "@/components/sections/ImpactSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StackSection from "@/components/sections/StackSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ClientsSection />
      <WhatWeDoSection />
      <GraphixSection />
      <ServiceShowcaseSection />
      <GraphixWaySection />
      <AboutSection />
      <WhySection />
      <ImpactSection />
      <ProcessSection />
      <StackSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
