'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from "lucide-react";
import { services, type Services } from '@/lib/services-data';

interface ServiceButtonProps {
  isActive: boolean;
  icon: React.ElementType;
  title: string;
  onClick: () => void;
}

const ServiceButton = ({ isActive, icon: Icon, title, onClick }: ServiceButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center px-6 py-3 rounded-lg font-semibold relative ${
        isActive 
          ? 'bg-yellow-400 text-black' 
          : 'bg-black text-white hover:bg-zinc-800'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="h-5 w-5 mr-2" />
      {title}
      {!isActive && (
        <motion.div
          className="absolute inset-0 rounded-lg border border-yellow-400/30"
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.button>
  );
};

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<keyof Services>('political');

  return (
    <section className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Expert solutions for complex communications challenges across sectors and scenarios.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(services).map(([key, service]) => (
            <ServiceButton
              key={key}
              isActive={activeTab === key}
              icon={service.icon}
              title={service.title}
              onClick={() => setActiveTab(key as keyof Services)}
            />
          ))}
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {services[activeTab].capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="bg-black rounded-xl p-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {capability.title}
              </h3>
              <p className="text-zinc-400 mb-6">
                {capability.description}
              </p>
              <ul className="space-y-4">
                {capability.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    className="flex items-center text-white"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.1) }}
                  >
                    <ChevronRight className="h-5 w-5 text-yellow-400 mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 