'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { actionButton as ActionButton } from '@/components/ui/action-button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function Header() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [altLogo, setAltLogo] = useState(false);

  const toggleLogo = () => {
    setAltLogo(!altLogo);
  };

  const getLogo = () => {
    if (theme === 'dark') {
      return altLogo ? '/copilot-alt-logo-gold.svg' : '/copilot-og-logo-gold.svg';
    }
    return altLogo ? '/copilot-alt-logo-black.svg' : '/copilot-og-logo-black.svg';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
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
        <div className="flex items-center gap-12">
          <Image 
            src={getLogo()} 
            alt="CoPilot Agency" 
            width={altLogo ? 230 : 150} 
            height={altLogo ? 100 : 56} 
            priority 
            className={`${altLogo ? 'h-[3.75rem]' : 'h-12'} w-auto cursor-pointer transition-opacity duration-200 hover:opacity-80`}
            onClick={toggleLogo}
          />
          {!isMobile && (
            <div className="flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-foreground">Our Services</button>
              <button onClick={() => scrollToSection('approach')} className="text-sm font-medium text-muted-foreground hover:text-foreground">Our Approach</button>
              <button onClick={() => scrollToSection('industries')} className="text-sm font-medium text-muted-foreground hover:text-foreground">Industries</button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          {!isMobile && (
            <ActionButton variant="primary" showIcon>
              Contact Us
            </ActionButton>
          )}
          <ModeToggle />
          {isMobile && (
            <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <PopoverTrigger asChild>
                <button
                  className="p-2 hover:bg-accent rounded-lg"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-48">
                <div className="flex flex-col gap-2 py-2">
                  <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 hover:bg-accent rounded-md text-left">Our Services</button>
                  <button onClick={() => scrollToSection('approach')} className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 hover:bg-accent rounded-md text-left">Our Approach</button>
                  <button onClick={() => scrollToSection('industries')} className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 hover:bg-accent rounded-md text-left">Industries</button>
                  <ActionButton variant="primary" showIcon className="mt-2">
                    Contact Us
                  </ActionButton>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
