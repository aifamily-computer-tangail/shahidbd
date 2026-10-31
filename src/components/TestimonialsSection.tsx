import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      {/* Background Image with adaptive opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15 dark:opacity-30 transition-opacity"
        style={{ backgroundImage: 'url(/legacy-assets/img/08.jpg)' }}
      />
      
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Testimonials"
          subtitle="Real, unedited feedback from verified global clients & Upwork contracts"
        />

        {/* Featured Testimonial Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xl backdrop-blur-xl">
          {/* Quote Accent */}
          <div className="absolute top-6 right-6 opacity-10 dark:opacity-15">
            <Quote className="w-20 h-20 text-cyan-600 dark:text-cyan-400" />
          </div>

          <div className="space-y-6">
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold uppercase text-amber-600 dark:text-amber-300">
                5.0 Verified Rating
              </span>
            </div>

            {/* Testimonial Quote */}
            <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-100 font-medium leading-relaxed italic">
              "{current.highlight}"
            </p>

            {/* Authentic Feedback Screenshot from Original Site */}
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/70 bg-slate-100/80 dark:bg-black/40 p-3 sm:p-4">
              <p className="text-[11px] font-mono uppercase text-cyan-600 dark:text-cyan-400 tracking-wider mb-2 font-semibold">
                Verified Upwork Contract Review #{activeIndex + 1}:
              </p>
              <img
                src={current.image}
                alt={`Testimonial Review ${activeIndex + 1}`}
                className="w-full max-h-[140px] sm:max-h-[180px] object-contain rounded-lg filter drop-shadow-md mx-auto"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Controls & Selector Dots */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            {/* Tab indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? 'w-8 bg-amber-500 dark:bg-amber-400'
                      : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            {/* Next / Prev Navigation */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous Testimonial"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next Testimonial"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
