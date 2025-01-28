'use client';

import { motion } from 'framer-motion';

export function CrisisCtaSection() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-red-600 p-12 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Facing a Crisis?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait until it&apos;s too late. Our crisis management team is available 24/7 to help you navigate through any challenge.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-red-50 transition-colors">
            Contact Crisis Team Now
          </button>
        </motion.div>
      </div>
    </section>
  );
} 