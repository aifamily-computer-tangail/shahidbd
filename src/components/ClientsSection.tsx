import React from 'react';
import { SectionHeader } from './SectionHeader';
import { CLIENTS } from '../data/portfolioData';

export const ClientsSection: React.FC = () => {
  return (
    <section
      id="client"
      className="relative py-20 md:py-28 overflow-hidden bg-white dark:bg-slate-950 transition-colors"
    >
      {/* Background Image with adaptive opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15 dark:opacity-30 transition-opacity"
        style={{ backgroundImage: 'url(/legacy-assets/img/09.jpg)' }}
      />
      
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-[1px]" />

      {/* Spaceship Parallax Background from original */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20 mix-blend-screen bg-no-repeat bg-left-top"
        style={{ backgroundImage: 'url(/legacy-assets/img/spaceship.png)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Clients"
          subtitle="Trusted by businesses and enterprise founders across diverse industries"
        />

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {CLIENTS.map((client) => (
            <div
              key={client.id}
              className="group p-5 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 flex items-center justify-center min-h-[120px] shadow-sm hover:shadow-md"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 w-auto max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
