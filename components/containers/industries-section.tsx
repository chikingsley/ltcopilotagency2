'use client';

import { motion } from 'framer-motion';

const industries = [
  "Political Organizations",
  "Government Agencies",
  "Think Tanks",
  "NGOs",
  "Public Institutions",
  "Trade Associations",
  "Educational Institutions",
  "Advocacy Groups",
  "International Organizations",
  "Political Campaigns",
  "Religious Organizations",
  "Policy Research Centers",
  "Diplomatic Missions"
];

export function IndustriesSection() {
  return (
    <section className="bg-zinc-900 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-zinc-100">Industries We Serve</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            We partner with organizations across various sectors, delivering strategic communication solutions that drive meaningful impact and create lasting change.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <motion.button
              key={industry}
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-yellow-400 px-6 py-4 rounded-xl text-sm transition-all border border-zinc-800 hover:border-yellow-400/50 text-left font-medium"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.2,
                delay: index * 0.1
              }}
            >
              {industry}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 