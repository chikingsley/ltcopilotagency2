'use client';  // Required for Framer Motion in Next.js 13+

import React from 'react';
import { HeroSection } from "@/components/containers/1-hero-section/hero-section";
import { ServicesSection } from "@/components/containers/services-section";
import { ApproachSection } from "@/components/containers/unused/approach-section";
import { IndustriesSection } from "@/components/containers/industries-section";
import { CrisisCtaSection } from "@/components/containers/crisis-cta-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <IndustriesSection />
      <CrisisCtaSection />
    </div>
  );
}
//#4450F0