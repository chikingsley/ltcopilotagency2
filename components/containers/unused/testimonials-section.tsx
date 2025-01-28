'use client';

import { AnimatedTestimonials } from "@/components/containers/unused/animated-testimonials";
import { testimonials } from "@/lib/testimonials-data";

export function TestimonialsSection() {
  return (
    <section className="bg-zinc-900 py-12 border-y border-zinc-800">
      <AnimatedTestimonials 
        testimonials={testimonials}
        autoplay={true}
      />
    </section>
  );
} 