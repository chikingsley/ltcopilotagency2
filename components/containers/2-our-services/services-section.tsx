'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
// Import Check icon
import { ChevronDown, Check } from "lucide-react";
import { services } from '@/lib/services-data';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useIsMobile } from '@/hooks/use-mobile'; // Import useIsMobile if needed for text sizes


interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const ServiceItem = ({ icon: Icon, title, description, features }: ServiceItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile(); // Get mobile status if needed

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full border border-[hsl(var(--primary))] rounded-lg overflow-hidden"
    >
      <CollapsibleTrigger className="w-full">
        {/* Use motion for trigger hover/tap */}
        <motion.div
          className="flex items-center justify-between p-4 md:p-6 w-full bg-card hover:bg-muted transition-colors" // Added transition
          whileHover={{ backgroundColor: "hsl(var(--muted))" }} // Explicit hover state
          whileTap={{ scale: 0.99 }} // Subtle tap scale
        >
          <div className="flex items-center">
            {/* Adjusted icon container size for mobile */}
            <div className="bg-[hsl(var(--primary))] w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
              <Icon className="h-4 w-4 md:h-5 md:w-5 text-black" />
            </div>
            <div className="text-left">
               {/* Adjusted text size for mobile */}
              <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-card-foreground`}>{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <ChevronDown className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''} ml-2 flex-shrink-0`} />
        </motion.div>
      </CollapsibleTrigger>
      <CollapsibleContent>
         {/* Use motion for content animation */}
        <motion.div
          className="p-4 md:p-6 pt-3 md:pt-4 bg-card text-sm md:text-base" // Adjusted padding and text size
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Smoother animation
        >
          {/* 2-column grid for features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-start text-card-foreground">
                 {/* Checkmark icon */}
                <Check className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-[hsl(var(--primary))]" />
                <span>{feature}</span> {/* Use span for better alignment control if needed */}
              </div>
            ))}
          </div>
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export function ServicesSection() {
  const isMobile = useIsMobile(); // Get mobile status
  return (
    // Removed top padding (pt-0 implied by pb-20), kept bottom padding
    <section className="bg-background pb-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
           // Changed animate to whileInView for scroll triggering
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Trigger animation only once
          transition={{ duration: 0.6 }}
          // Reduced bottom margin on mobile
          className="text-center mb-10 md:mb-16"
        >
           {/* Adjusted heading size */}
          <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-foreground mb-4 md:mb-6`}>Our Services</h2>
           {/* Updated description and adjusted text size */}
          <p className={`${isMobile ? 'text-base' : 'text-xl'} text-muted-foreground max-w-3xl mx-auto px-4`}>
            We offer a comprehensive suite of communication services designed to protect and enhance your reputation. From proactive media strategy to rapid crisis response, our expertise ensures your message resonates effectively, navigating complexities with precision and impact.
          </p>
        </motion.div>

        {/* Adjusted max-width and spacing */}
        <div className="space-y-3 md:space-y-4 max-w-4xl mx-auto px-4">
          {Object.entries(services).map(([key, service], index) => ( // Added index
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }} // Stagger animation
            >
              <ServiceItem
                icon={service.icon}
                title={service.title}
                description={service.description}
                 // Ensure features are properly extracted if nested
                features={service.capabilities.flatMap(cap => cap.features)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}