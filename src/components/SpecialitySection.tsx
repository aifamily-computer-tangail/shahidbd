import React from 'react';
import { 
  Bot, 
  Briefcase, 
  TrendingUp, 
  Sliders, 
  Palette, 
  SearchCheck, 
  RefreshCw, 
  Headphones 
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { SPECIALITIES } from '../data/portfolioData';

export const SpecialitySection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ai-work':
        return <Bot className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'online-setup':
        return <Briefcase className="w-8 h-8 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'offline-scale':
        return <TrendingUp className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'easy-customize':
        return <Sliders className="w-8 h-8 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'fresh-design':
        return <Palette className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'google-supported':
        return <SearchCheck className="w-8 h-8 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'future-update':
        return <RefreshCw className="w-8 h-8 text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'after-sales':
        return <Headphones className="w-8 h-8 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Briefcase className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section 
      id="features" 
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      {/* Background Image with adaptive opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15 dark:opacity-30 transition-opacity"
        style={{ backgroundImage: 'url(/legacy-assets/img/06.jpg)' }}
      />
      
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-slate-50/85 dark:bg-slate-950/90 backdrop-blur-[1px]" />

      {/* Spaceship Parallax Accent from original style.css */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20 mix-blend-screen bg-no-repeat bg-left-center"
        style={{ backgroundImage: 'url(/legacy-assets/img/spaceship.png)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Speciality" 
          subtitle="Summarise what we can do for you" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SPECIALITIES.map((item, index) => (
            <div
              key={item.id}
              className="group relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-950/70 hover:bg-slate-50 dark:hover:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/60 dark:hover:border-cyan-500/60 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 flex flex-col items-center text-center backdrop-blur-md"
            >
              {/* Top Accent Icon Circle */}
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 group-hover:border-amber-400/60 flex items-center justify-center mb-5 shadow-inner transition-colors">
                {getIcon(item.id)}
              </div>

              {/* Number Badge */}
              <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400/80 uppercase tracking-widest mb-1">
                Speciality 0{index + 1}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-amber-300 group-hover:text-cyan-600 dark:group-hover:text-amber-200 transition-colors mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
