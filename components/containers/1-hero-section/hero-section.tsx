'use client'

import { HeroPill } from "@/components/hero-pill";
import { Header } from './header';
import { HeroContent } from './hero-content';
import { useIsMobile } from '@/hooks/use-mobile';

export function HeroSection() {
  const isMobile = useIsMobile();
  
  return (
    <>
      {/* Hero Pill */}
      <div className="flex justify-center pt-6 px-4">
        <HeroPill
          href="#"
          label={isMobile ? "24/7 Crisis Support" : "24/7 Crisis Management Support Available"}
          announcement="🚨 Crisis Response"
          className="bg-destructive/20 ring-destructive/20 hover:bg-destructive/30"
        />
      </div>
      <section className={`relative ${isMobile ? 'h-auto min-h-[600px] pb-8' : 'h-[600px]'}`}>
        <Header />
        <HeroContent />
      </section>
    </>
  );
}