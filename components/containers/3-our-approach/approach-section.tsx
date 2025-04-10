'use client'

import { motion } from 'framer-motion';
import { ApproachCard } from './approach-card';
import { useIsMobile } from '@/hooks/use-mobile';
import { approachSectionInfo, approachData } from '@/lib/data/approachSectionData';

export function ApproachSection({ id }: { id?: string }) {
  const isMobile = useIsMobile();

  return (
    <section id={id} className="bg-background py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-foreground mb-6`}>
            {approachSectionInfo.heading}
          </h2>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground max-w-3xl mx-auto px-4`}>
            {approachSectionInfo.description}
          </p>
        </motion.div>

        <div className={`${isMobile ? 'flex flex-col space-y-4 px-4' : 'grid grid-cols-4 gap-4'} max-w-7xl mx-auto`}>
          {approachData.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={approach.isEmergency ? 'bg-destructive/5 rounded-lg p-1' : ''}
            >
              <ApproachCard {...approach} isEmergency={approach.isEmergency} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}