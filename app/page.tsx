'use client';  // Required for Framer Motion in Next.js 13+

import React from 'react';
import { HeroSection } from "@/components/containers/1-hero-section/hero-section";
import { ServicesSection } from "@/components/containers/2-our-services/services-section";
import { ApproachSection } from "@/components/containers/3-our-approach/approach-section";
import { IndustriesSection } from "@/components/containers/4-industries-we-serve/industries-section";
import { CrisisCtaSection } from "@/components/containers/5-crisis-cta-section/crisis-cta-section";
import { CenteredSeparator } from "@/components/ui/centered-separator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <CenteredSeparator />
      <ApproachSection />
      <CenteredSeparator />
      <IndustriesSection />
      <CenteredSeparator />
      <CrisisCtaSection />
    </div>
  );
}
//#4450F0