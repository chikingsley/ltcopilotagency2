'use client'

import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { ActionButton } from '@/components/ui/action-button';
import { heroSectionData } from '@/lib/data/heroSectionData';

export function HeroSection() {
  const isMobile = useIsMobile();

  const scrollToSection = (id: string) => { 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative flex flex-col py-16 md:py-20">
        <div className="flex-1 flex flex-col items-center justify-center gap-8 md:gap-16 p-4 sm:p-8 md:p-16 lg:p-20">
          <div className="container mx-auto h-full flex items-center justify-center">
            <motion.div
              className="max-w-4xl px-4 md:px-0 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-black mb-6 text-foreground`}>
                {heroSectionData.headingLine1}
                {' '}
                <br className="hidden md:block" />
                {heroSectionData.headingLine2}
              </h1>
              <p className={`${isMobile ? 'text-lg' : 'text-xl'} mb-8 text-muted-foreground`}>
                {heroSectionData.paragraph}
              </p>
              <div className={`${isMobile ? 'flex flex-col space-y-4' : 'flex justify-center space-x-4'}`}>
                <ActionButton 
                  variant="primary" 
                  showIcon 
                  className={isMobile ? 'w-full justify-center' : ''}
                  onClick={() => scrollToSection('contact')} 
                >
                  {heroSectionData.buttonText}
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}