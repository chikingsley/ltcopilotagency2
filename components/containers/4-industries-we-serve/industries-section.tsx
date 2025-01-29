'use client'

import { motion } from 'framer-motion'
import { Building2, Landmark, Briefcase, GraduationCap, Heart, Scale, Globe, Plane } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

const industries = [
  {
    icon: Building2,
    name: 'Corporations',
    description: 'Strategic communications for Fortune 500 companies and emerging enterprises.'
  },
  {
    icon: Landmark,
    name: 'Government',
    description: 'Public affairs and crisis management for government agencies and officials.'
  },
  {
    icon: Briefcase,
    name: 'Financial Services',
    description: 'Reputation management for banks, investment firms, and fintech companies.'
  },
  {
    icon: GraduationCap,
    name: 'Political Parties',
    description: 'Media strategy, event planning and crisis management for political parties and campaigns.'
  },
  {
    icon: Heart,
    name: 'NGOs & Thinktanks',
    description: 'Media strategy and crisis management for non-governmental organizations and think tanks.'
  },
  {
    icon: Scale,
    name: 'Legal',
    description: 'Media strategy and crisis management for law firms and their clients.'
  },
  {
    icon: Globe,
    name: 'Technology',
    description: 'Communications strategy for tech companies and startups.'
  },
  {
    icon: Plane,
    name: 'Lobbyists',
    description: 'Media strategy, digital presence and crisis management for lobbyists and advocacy groups.'
  }
]

export function IndustriesSection() {
  const isMobile = useIsMobile()

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
            Industries We Serve
          </h2>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground max-w-3xl mx-auto px-4`}>
            Specialized expertise across diverse sectors, delivering tailored solutions for complex challenges.
          </p>
        </motion.div>

        <div className={`grid ${isMobile ? 'grid-cols-1 px-4 gap-4' : 'md:grid-cols-4 gap-6'} max-w-6xl mx-auto`}>
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                className="group relative bg-card hover:bg-muted p-6 rounded-lg border border-[hsl(var(--primary))] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[hsl(var(--primary))] w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">{industry.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}