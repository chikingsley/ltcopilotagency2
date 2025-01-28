'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from "lucide-react";
import { services, type Services } from '@/lib/services-data';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const ServiceItem = ({ icon: Icon, title, description, features }: ServiceItemProps) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full border border-[hsl(var(--primary))] rounded-lg overflow-hidden"
    >
      <CollapsibleTrigger className="w-full">
        <motion.div
          className="flex items-center justify-between p-6 w-full bg-card hover:bg-muted"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center">
            <div className="bg-[hsl(var(--primary))] w-10 h-10 rounded-lg flex items-center justify-center mr-4">
              <Icon className="h-5 w-5 text-black" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <ChevronDown className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </motion.div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <motion.div
          className="p-6 pt-2 bg-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                className="flex items-center text-card-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-1 h-1 bg-[hsl(var(--primary))] rounded-full mt-2 mr-2 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export function ServicesSection() {
  const isMobile = useIsMobile();

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-foreground mb-6`}>Our Services</h2>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground max-w-2xl mx-auto px-4`}>
            Expert solutions for complex communications challenges across sectors and scenarios.
          </p>
        </motion.div>

        <div className="space-y-4 max-w-4xl mx-auto px-4">
          {Object.entries(services).map(([key, service]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ServiceItem
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.capabilities.flatMap(cap => cap.features)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}