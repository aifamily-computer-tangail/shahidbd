import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { PROFILES } from '../data/portfolioData';

export const ProfilesSection: React.FC = () => {
  return (
    <section id="profiles" className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="International Profiles"
          subtitle="Your Trusted Market — Work with verified profiles across international freelance marketplaces"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILES.map((profile) => (
            <div
              key={profile.platform}
              className="group relative rounded-3xl p-8 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/70 dark:hover:border-cyan-400/70 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center text-center backdrop-blur-md hover:-translate-y-1.5"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/70 border border-cyan-300 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-[11px] font-bold uppercase tracking-wider mb-6">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{profile.badge}</span>
              </div>

              {/* Platform Logo */}
              <div className="h-24 w-full flex items-center justify-center p-3 mb-6 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors shadow-inner">
                <img
                  src={profile.image}
                  alt={profile.platform}
                  className="max-h-16 max-w-[180px] object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {profile.platform}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Direct engagement & escrow contracts on {profile.platform}
              </p>

              {/* CTA Button */}
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto py-3 px-5 rounded-xl border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-500 transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <span>View Profile and Hire</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
