'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Check } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useIsMobile } from '@/hooks/use-mobile';
import {
  servicesSectionInfo,
  servicesData,
} from '@/lib/data/servicesSectionData';
import React from 'react';

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const ServiceItem = ({ icon: Icon, title, description, features }: ServiceItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full border border-[hsl(var(--primary))] rounded-lg overflow-hidden"
    >
      <CollapsibleTrigger className="w-full">
        <motion.div
          className="flex items-center justify-between p-4 md:p-6 w-full bg-card hover:bg-muted transition-colors"
          whileHover={{ backgroundColor: "hsl(var(--muted))" }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="flex items-center">
            <div className="bg-[hsl(var(--primary))] w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
              <Icon className="h-4 w-4 md:h-5 md:w-5 text-black" />
            </div>
            <div className="text-left">
              <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-card-foreground`}>{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <ChevronDown className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''} ml-2 flex-shrink-0`} />
        </motion.div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <motion.div
          className="p-4 md:p-6 pt-3 md:pt-4 bg-card text-sm md:text-base"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-start text-card-foreground">
                <Check className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-[hsl(var(--primary))]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export function ServicesSection({ id }: { id?: string }) {
  const isMobile = useIsMobile();

  return (
    <section id={id} className="bg-background py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-foreground mb-4 md:mb-6`}>
            {servicesSectionInfo.heading}
          </h2>
          <p className={`${isMobile ? 'text-base' : 'text-xl'} text-muted-foreground max-w-3xl mx-auto px-4`}>
            {servicesSectionInfo.description}
          </p>
        </motion.div>

        <div className="space-y-3 md:space-y-4 max-w-4xl mx-auto px-4">
          {Object.entries(servicesData).map(([key, service], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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