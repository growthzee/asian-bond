"use client";
import { useEffect, useState } from "react";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { CompanyStatsSection } from "@/components/sections/company-stats";
import { MaterialCatalogSection } from "@/components/sections/material-catalog";

import { ProcessSection } from "@/components/sections/process";
import { ToolsResourcesSection } from "@/components/sections/tools-resources";
import { SustainabilitySection } from "@/components/sections/sustainability";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { NewsletterSection } from "@/components/sections/newsletter";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects";

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
      <CompanyStatsSection />
      <MaterialCatalogSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <ToolsResourcesSection />
      <SustainabilitySection />
      <ServicesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <CTASection />
      <Footer />
    </div>
  );
}
