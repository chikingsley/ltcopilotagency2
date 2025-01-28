'use client'

import { Header } from './header';
import { HeroContent } from './hero-content';
import { useIsMobile } from '@/hooks/use-mobile';
import { CenteredSeparator } from "@/components/ui/centered-separator";
import { CrisisPill } from '@/components/ui/crisis-pill';

export function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="flex justify-center pt-8">
        <CrisisPill
          href="#"
          label={isMobile ? "24/7 Crisis Support" : "24/7 Crisis Management Support Available"}
          announcement="🚨 Crisis Response"
        />
      </div>
      <section className="relative min-h-[calc(100vh-120px)] flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-16">
          {/* <CenteredSeparator /> */}
          <HeroContent />
          <CenteredSeparator />
        </div>
      </section>
    </>
  );
}