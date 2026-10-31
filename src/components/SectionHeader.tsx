import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  lightSubtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white uppercase transition-colors">
        {title}
      </h2>
      
      {/* Authentic decorative divider image from original page */}
      <div className="flex items-center justify-center my-4">
        <img 
          src="/legacy-assets/img/service.png" 
          alt="divider" 
          className="h-auto max-h-5 opacity-90 transition-opacity dark:brightness-125"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>

      {subtitle && (
        <p className="text-slate-600 dark:text-cyan-200/80 text-sm md:text-base font-medium max-w-xl mx-auto tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
};
