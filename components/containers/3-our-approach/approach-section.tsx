'use client'

import { motion } from 'framer-motion';
import { Shield, Megaphone, LineChart, Users } from 'lucide-react';
import { ApproachCard } from './approach-card';
import { useIsMobile } from '@/hooks/use-mobile';

const approaches = [
  {
    icon: Shield,
    title: "Proactive Protection",
    description: "We identify and mitigate potential risks before they become crises.",
    features: [
      "Social media vulnerability audits",
      "Digital footprint minimization",
      "24/7 media sentiment tracking",
      "Early warning detection systems"
    ]
  },
  {
    icon: Megaphone,
    title: "Crisis Response",
    description: "24/7 rapid response and battle-tested strategies to protect your reputation.",
    features: [
      "24/7 crisis hotline",
      "Rapid response team deployment",
      "Media relations management",
      "Stakeholder communications"
    ],
    isEmergency: true
  },
  {
    icon: LineChart,
    title: "Strategic Planning",
    description: "We develop comprehensive strategies to build and maintain your reputation.",
    features: [
      "Reputation management plans",
      "Crisis prevention strategies",
      "Brand positioning",
      "Message development"
    ]
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    description: "Building and maintaining strong relationships with key stakeholders.",
    features: [
      "Community outreach programs",
      "Media relationship building",
      "Government relations",
      "Internal communications"
    ]
  }
];

export function ApproachSection() {
  const isMobile = useIsMobile();

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-foreground mb-6`}>
            Our Approach
          </h2>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground max-w-3xl mx-auto px-4`}>
            A comprehensive strategy combining proactive protection, rapid response, and long-term reputation management.
          </p>
        </motion.div>

        <div className={`${isMobile ? 'flex flex-col space-y-4 px-4' : 'grid grid-cols-4 gap-4'} max-w-7xl mx-auto`}>
          {approaches.map((approach, index) => (
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