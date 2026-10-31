import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { PRICING_PLANS } from '../data/portfolioData';

interface PricingSectionProps {
  onSelectPlan: (planName: string, tierLabel: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section
      id="prices"
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      {/* Background Image with adaptive opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15 dark:opacity-30 transition-opacity"
        style={{ backgroundImage: 'url(/legacy-assets/img/03.jpg)' }}
      />
      
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-[1px]" />

      {/* Background spaceship overlay from original style.css */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20 mix-blend-screen bg-no-repeat bg-center"
        style={{ backgroundImage: 'url(/legacy-assets/img/spaceship.png)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Investment Size"
          subtitle="Choose your need & scale with confidence"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-md ${
                  isPopular
                    ? 'bg-white dark:bg-slate-900/95 border-2 border-cyan-500 dark:border-cyan-400 shadow-2xl shadow-cyan-500/15 lg:-translate-y-4'
                    : 'bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xl'
                }`}
              >
                {/* Popular Recommendation Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Most Recommended</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-6 mb-6 text-center">
                    <h3 className={`text-2xl font-black uppercase tracking-wider mb-1 ${
                      isPopular 
                        ? 'text-cyan-600 dark:text-cyan-400' 
                        : 'text-amber-600 dark:text-amber-300'
                    }`}>
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {plan.tagline}
                    </p>

                    {/* Price Display */}
                    <div className="mt-5 flex items-baseline justify-center gap-2">
                      <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                        isPopular ? 'text-amber-500 dark:text-amber-300' : 'text-slate-900 dark:text-white'
                      }`}>
                        {plan.price}
                      </span>
                      <span className="text-sm font-semibold uppercase text-cyan-600 dark:text-cyan-400">
                        /{plan.tierLabel}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Included Capabilities:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                          <div className={`mt-0.5 rounded-full p-1 shrink-0 ${
                            isPopular 
                              ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400' 
                              : 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400'
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer & Milestone Note */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 italic mb-5">
                    {plan.note}
                  </p>

                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.name, plan.tierLabel)}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-200 flex items-center justify-center gap-2 shadow-lg active:scale-95 cursor-pointer ${
                      isPopular
                        ? 'bg-cyan-500 dark:bg-cyan-400 hover:bg-cyan-400 dark:hover:bg-cyan-300 text-slate-950 shadow-cyan-500/20'
                        : 'bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 shadow-amber-400/10'
                    }`}
                  >
                    <span>{plan.id === 'fly' ? 'Start Partnership' : 'Hire for This Package'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
