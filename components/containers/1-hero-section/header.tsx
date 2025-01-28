'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { actionButton as ActionButton } from '@/components/ui/action-button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from 'next-themes';

export function Header() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [altLogo, setAltLogo] = useState(false);

  const toggleLogo = () => {
    setAltLogo(!altLogo);
  };

  const getLogo = () => {
    if (theme === 'dark') {
      return altLogo ? '/copilot-alt-logo-gold.svg' : '/logo-3x-copilot-agency.svg';
    }
    return altLogo ? '/copilot-alt-logo-gold.svg' : '/copilot-black-logo.svg';
  };

  return (
    <motion.header 
      className="container mx-auto py-6 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Image 
            src={getLogo()} 
            alt="CoPilot Agency" 
            width={150} 
            height={56} 
            priority 
            className="h-12 w-auto cursor-pointer transition-opacity duration-200 hover:opacity-80" 
            onClick={toggleLogo}
          />
          {!isMobile && (
            <div className="flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground">Services</a>
              <a href="#approach" className="text-sm font-medium text-muted-foreground hover:text-foreground">Our Approach</a>
              <a href="#industries" className="text-sm font-medium text-muted-foreground hover:text-foreground">Industries</a>
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
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-accent rounded-lg"
            >
              <Menu className="h-6 w-6" />
            </button>
          )}
        </div>
      </nav>

      {isMobile && isMenuOpen && (
        <motion.div 
          className="mt-4 flex flex-col gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground">Services</a>
          <a href="#approach" className="text-sm font-medium text-muted-foreground hover:text-foreground">Our Approach</a>
          <a href="#industries" className="text-sm font-medium text-muted-foreground hover:text-foreground">Industries</a>
          <ActionButton variant="primary" showIcon className="w-full justify-center">
            Contact Us
          </ActionButton>
        </motion.div>
      )}
    </motion.header>
  );
}
