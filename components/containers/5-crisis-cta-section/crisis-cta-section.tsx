'use client'

import { motion } from 'framer-motion'
import { Shield, Phone } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'
import { actionButton as ActionButton } from '@/components/ui/action-button';

export function CrisisCtaSection() {
  const isMobile = useIsMobile()

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className={`max-w-5xl mx-auto ${isMobile ? 'px-4' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-destructive w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Shield className="h-8 w-8 text-destructive-foreground" />
            </div>
            
            <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-foreground mb-6`}>
              Global Leaders Trust Us to Protect What Matters
            </h2>
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground max-w-2xl mb-12`}>
              When reputation is on the line, Fortune 500 companies, government agencies, and global institutions turn to us for immediate crisis response and strategic guidance.
            </p>

            <div className={`flex ${isMobile ? 'flex-col w-full space-y-4' : 'space-x-4'}`}>
              <ActionButton 
                variant="destructive" 
                className={`${isMobile ? 'w-full justify-center' : ''} group`}
                showIcon
              >
                <Phone className="mr-2 h-4 w-4 animate-pulse" />
                Contact Crisis Team
              </ActionButton>
              <ActionButton 
                variant="destructive-outline" 
                className={`${isMobile ? 'w-full justify-center' : ''}`}
              >
                Schedule Consultation
              </ActionButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}