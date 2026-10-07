import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { SITE_DATA } from '../../data/site';

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = SITE_DATA.testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay with pause on user interaction
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#141414] border-y border-[#222222] relative overflow-hidden">
      {/* Decorative planet/coin ambient blur */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#B6F35A]/[0.05] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Navigation Arrows matching reference screenshot */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B6F35A] mb-1">
              What people say
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Testimonial
            </h2>
          </div>

          {/* Prev / Next controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-11 h-11 rounded-full bg-[#1A1A1A] hover:bg-[#252525] border border-[#2E2E2E] hover:border-[#B6F35A] flex items-center justify-center text-zinc-300 hover:text-white transition-all active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-11 h-11 rounded-full bg-[#B6F35A] hover:bg-[#C4F675] text-[#0B0B0B] flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] p-8 sm:p-12 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-6">
                {/* Large Lime Quote Icon */}
                <div className="text-[#B6F35A]">
                  <Quote className="w-10 h-10 stroke-[2.5]" />
                </div>

                {/* 5-Star Rating in Neon Gold/Lime */}
                <div className="flex items-center gap-1 text-[#B6F35A]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Quote Body */}
              <p className="text-lg sm:text-2xl text-zinc-200 font-medium leading-relaxed mb-8">
                {current.quote}
              </p>

              {/* Author Info & Avatar Block */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#262626]">
                <div className="w-12 h-12 rounded-full bg-[#242424] border-2 border-[#B6F35A] flex items-center justify-center text-[#B6F35A] font-bold text-sm">
                  {current.author.substring(0, 2).replace('[', 'FB')}
                </div>
                <div>
                  <div className="text-base font-bold text-white tracking-tight">
                    {current.author}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {current.role} · {current.location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === i ? 'w-6 bg-[#B6F35A]' : 'w-2 bg-[#333333]'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
