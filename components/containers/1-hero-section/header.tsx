'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ActionButton } from '@/components/ui/action-button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

export function Header() {
  const isMobile = useIsMobile();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className="container mx-auto pt-6 pb-0 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <nav className="flex items-center justify-between">
        <Image 
          src="/copilot-og-logo-gold.svg" 
          alt="CoPilot Agency" 
          width={150} 
          height={56} 
          priority 
          className="h-12 w-auto cursor-pointer transition-opacity duration-200 hover:opacity-80"
        />

        {!isMobile && (
          <div className="flex items-center gap-4"> 
            <Button variant="ghost" onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-foreground">Our Services</Button>
            <Button variant="ghost" onClick={() => scrollToSection('approach')} className="text-sm font-medium text-muted-foreground hover:text-foreground">Our Approach</Button>
            <Button variant="ghost" onClick={() => scrollToSection('industries')} className="text-sm font-medium text-muted-foreground hover:text-foreground">Industries</Button>
            <ActionButton variant="primary" showIcon onClick={() => scrollToSection('contact')}>
              Contact Us
            </ActionButton>
          </div>
        )}

        {isMobile && (
          <Popover>
            <PopoverTrigger asChild>
              <button
                className="p-2 hover:bg-accent rounded-lg"
              >
                <Menu className="h-6 w-6" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div className="flex flex-col gap-2 py-2">
                <Button variant="ghost" onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 hover:bg-accent rounded-md text-left justify-start">Our Services</Button> 
                <Button variant="ghost" onClick={() => scrollToSection('approach')} className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 hover:bg-accent rounded-md text-left justify-start">Our Approach</Button> 
                <Button variant="ghost" onClick={() => scrollToSection('industries')} className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 hover:bg-accent rounded-md text-left justify-start">Industries</Button> 
                <ActionButton variant="primary" showIcon className="mt-2" onClick={() => scrollToSection('contact')}>
                  Contact Us
                </ActionButton>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </nav>
    </motion.header>
  );
}
