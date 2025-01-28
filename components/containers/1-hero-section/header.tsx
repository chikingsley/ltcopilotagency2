'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { actionButton as ActionButton } from '@/components/action-button';
import { ModeToggle } from '@/components/mode-toggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="container mx-auto px-4 pt-8 relative" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <nav className="flex justify-between items-center mb-24 container-fluid">
        <Image 
          src="/copilot-black-logo.svg" 
          alt="CoPilot Agency" 
          width={150} 
          height={56} 
          priority 
          className="h-12 w-auto" 
        />
        
        {isMobile ? (
          <>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-[var(--accent-yellow)] transition-colors"
            >
              <Menu size={24} />
            </button>
            
            {isMenuOpen && (
              <motion.div 
                className="absolute top-full right-4 mt-2 bg-background border border-border rounded-lg shadow-lg py-4 px-6 z-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col gap-4">
                  <a href="#services" className="text-foreground hover:text-[var(--accent-yellow)] transition-colors">Services</a>
                  <a href="#expertise" className="text-foreground hover:text-[var(--accent-yellow)] transition-colors">Expertise</a>
                  <a href="#approach" className="text-foreground hover:text-[var(--accent-yellow)] transition-colors">Our Approach</a>
                  <ActionButton variant="primary" className="whitespace-nowrap">
                    Crisis Line 24/7
                  </ActionButton>
                  <div className="flex justify-end">
                    <ModeToggle />
                  </div>
                </div>
              </motion.div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <a href="#services" className="text-foreground hover:text-[var(--accent-yellow)] transition-colors">Services</a>
            <a href="#expertise" className="text-foreground hover:text-[var(--accent-yellow)] transition-colors">Expertise</a>
            <a href="#approach" className="text-foreground hover:text-[var(--accent-yellow)] transition-colors">Our Approach</a>
            <ActionButton variant="primary">
              Crisis Line 24/7
            </ActionButton>
            <ModeToggle />
          </div>
        )}
      </nav>
    </motion.header>
  );
}
