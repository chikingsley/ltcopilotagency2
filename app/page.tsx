'use client';  

import React from 'react';
import { HeroSection } from "@/components/containers/1-hero-section/hero-section";
import { ServicesSection } from "@/components/containers/2-our-services/services-section";
import { ApproachSection } from "@/components/containers/3-our-approach/approach-section";
import { IndustriesSection } from "@/components/containers/4-industries-we-serve/industries-section";
import { CenteredSeparator } from "@/components/ui/centered-separator";
import { Header } from "@/components/containers/1-hero-section/header";
import { ProfileForm } from "@/components/containers/5-form/form-section";
import { Footer } from "@/components/containers/6-footer/footer-section";
import { CrisisBanner } from '@/components/ui/crisis-banner';

export default function Home() {
  return (
    <div className="min-h-screen">
      <CrisisBanner /> 
      <Header />
      <HeroSection />
      <CenteredSeparator />
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
