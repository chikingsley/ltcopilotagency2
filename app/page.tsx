'use client';  // Required for Framer Motion in Next.js 13+

import React from 'react';
import { HeroSection } from "@/components/containers/1-hero-section/hero-section";
import { ServicesSection } from "@/components/containers/2-our-services/services-section";
import { ApproachSection } from "@/components/containers/3-our-approach/approach-section";
import { IndustriesSection } from "@/components/containers/4-industries-we-serve/industries-section";
import { CenteredSeparator } from "@/components/ui/centered-separator";
import { Header } from "@/components/containers/1-hero-section/header";
// import { CrisisPill } from "@/components/ui/crisis-pill";
// import { useIsMobile } from "@/hooks/use-mobile";
import { ProfileForm } from "@/components/containers/6-form/form-section";
import { Footer } from "@/components/containers/7-footer/footer-section";

export default function Home() {
  // const isMobile = useIsMobile();
  return (
    <div className="min-h-screen">
      {/* <div className="flex justify-center pt-8">
        <CrisisPill
          href="#"
          label={isMobile ? "24/7 Crisis Support" : "24/7 Crisis Management Support Available"}
          announcement="🚨 Crisis Response"
        />
      </div> */}
      <Header />
      {/* <div className="pt-10 pb-5">
        <CenteredSeparator />
      </div> */}
      <HeroSection />
      <ServicesSection id="services" />
      <CenteredSeparator />
      <ApproachSection id="approach" />
      <CenteredSeparator />
      <IndustriesSection id="industries" />
      <CenteredSeparator />
      <ProfileForm id="contact" />
      <Footer />
    </div>
  );
}
