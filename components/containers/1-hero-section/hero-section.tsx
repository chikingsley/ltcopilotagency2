'use client'

import { HeroContent } from './hero-content';
import { CenteredSeparator } from "@/components/ui/centered-separator";

export function HeroSection() {
  return (
    <>
      <section className="relative flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center gap-16 py-10">
          {/* <CenteredSeparator /> */}
          <HeroContent />
          <CenteredSeparator />
        </div>
      </section>
    </>
  );
}