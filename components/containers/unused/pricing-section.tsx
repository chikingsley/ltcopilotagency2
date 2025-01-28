'use client';

import { motion } from 'framer-motion';
import { Pricing } from "@/components/pricing";
import { pricingPlans } from "@/lib/pricing-data";

export function PricingSection() {
  return (
    <section className="bg-black py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6 text-zinc-100">Your Communications Copilot</h2>
          <p className="text-xl text-zinc-400">
            Strategic partnership packages designed to protect and enhance your reputation across all scenarios.
          </p>
        </div>

        <Pricing
          title=""
          description=""
          plans={pricingPlans}
        />
      </motion.div>
    </section>
  );
} 