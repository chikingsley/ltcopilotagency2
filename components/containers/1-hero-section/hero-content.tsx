'use client'

import { motion } from 'framer-motion';
import { actionButton as ActionButton } from '@/components/ui/action-button';
import { useIsMobile } from '@/hooks/use-mobile';

export function HeroContent() {
  const isMobile = useIsMobile();
  
  return (
    <div className="container mx-auto h-full flex items-center justify-center">
      <motion.div
        className="max-w-4xl px-4 md:px-0 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-black mb-6 text-foreground`}>
          Strategic Communications & Crisis Management for High-Stakes Situations
        </h1>
        <p className={`${isMobile ? 'text-lg' : 'text-xl'} mb-8 text-muted-foreground`}>
          When reputation matters most, global leaders trust CoPilot Agency for strategic communications and crisis management. Available 24/7 for immediate response.
        </p>
        <div className={`${isMobile ? 'flex flex-col space-y-4' : 'flex justify-center space-x-4'}`}>
          <ActionButton variant="primary" showIcon className={isMobile ? 'w-full justify-center' : ''}>
            Contact Crisis Team
          </ActionButton>
          <ActionButton variant="secondary" className={isMobile ? 'w-full justify-center' : ''}>
            Schedule Consultation
          </ActionButton>
        </div>
      </motion.div>
    </div>
  );
}
