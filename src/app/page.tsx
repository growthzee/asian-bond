"use client";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { MaterialCatalogSection } from "@/components/sections/material-catalog";
import { useEffect, useState } from "react";

import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { IndiaMapSection } from "@/components/sections/map-section";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { VideoTestimonialsSection } from "@/components/sections/video-testimonials-section";

export default function ConstructionLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      {/* <CompanyStatsSection /> */}
      <IndiaMapSection />
      <MaterialCatalogSection />
      <VideoTestimonialsSection />
      {/* <FeaturedProjectsSection /> */}
      {/* <ProcessSection /> */}
      {/* <ToolsResourcesSection /> */}
      {/* <SustainabilitySection /> */}
      {/* <ServicesSection /> */}
      <TestimonialsSection />
      {/* <NewsletterSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
}
