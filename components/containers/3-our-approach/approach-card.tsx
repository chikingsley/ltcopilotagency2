'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface ApproachCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  isEmergency?: boolean
}

export function ApproachCard({ icon: Icon, title, description, features, isEmergency }: ApproachCardProps) {
  return (
    <motion.div 
      className={`bg-card p-6 rounded-lg border ${
        isEmergency ? 'border-destructive text-destructive' : 'border-[hsl(var(--primary))]'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${
        isEmergency ? 'bg-destructive' : 'bg-[hsl(var(--primary))]'
      } w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={`h-5 w-5 ${isEmergency ? 'text-destructive-foreground' : 'text-black'}`} />
      </div>
      <h3 className={`text-xl font-bold mb-3 ${
        isEmergency ? 'text-destructive' : 'text-card-foreground'
      }`}>{title}</h3>
      <p className="text-muted-foreground mb-4 text-sm">
        {description}
      </p>
      <ul className="space-y-2 text-muted-foreground text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className={`w-1 h-1 ${
              isEmergency ? 'bg-destructive' : 'bg-[hsl(var(--primary))]'
            } rounded-full mt-2 mr-2 flex-shrink-0`} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
