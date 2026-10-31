import React, { useState } from 'react';
import { Search, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filterCategories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'Start Work (All)' },
    { id: 'category-1', label: 'Online Business' },
    { id: 'category-2', label: 'Offline Business Scaling' },
    { id: 'category-3', label: 'Marketing and Branding' },
    { id: 'category-4', label: 'Sales Engineering' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categories.includes(selectedFilter));

  const openLightbox = (project: ProjectItem) => {
    const idx = PROJECTS.findIndex((p) => p.id === project.id);
    if (idx !== -1) setActiveLightboxIndex(idx);
  };

  const closeLightbox = () => setActiveLightboxIndex(null);

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : PROJECTS.length - 1));
    }
  };

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! < PROJECTS.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <section
      id="project"
      className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors"
    >
      {/* Background Image with adaptive opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15 dark:opacity-30 transition-opacity"
        style={{ backgroundImage: 'url(/legacy-assets/img/04.jpg)' }}
      />
      
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-[1px]" />

      {/* Spaceship Parallax background accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20 mix-blend-screen bg-no-repeat bg-right-center"
        style={{ backgroundImage: 'url(/legacy-assets/img/p2.png)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Choose Your Business"
          subtitle="Check, Find and Try Our Speciality"
        />

        {/* Filter Navigation Menu */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/80 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col backdrop-blur-sm"
            >
              {/* Project Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-cyan-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => openLightbox(project)}
                    className="p-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                    title="Zoom Lightbox"
                    aria-label={`View image for ${project.title}`}
                  >
                    <Search className="w-5 h-5" />
                  </button>

                  <a
                    href="#contact"
                    className="p-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-600 shadow-lg transition-transform hover:scale-110 active:scale-95"
                    title="Discuss This Type of Project"
                    aria-label={`Inquire about ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-700/70 text-cyan-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1.5 line-clamp-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => openLightbox(project)}
                    className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Showcase</span>
                    <Search className="w-3 h-3" />
                  </button>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300"
                  >
                    Inquire →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800">
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg">
                  {PROJECTS[activeLightboxIndex].title}
                </h3>
                <span className="text-xs text-cyan-400 font-semibold uppercase">
                  {PROJECTS[activeLightboxIndex].categoryLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Image Container */}
            <div className="relative flex-1 bg-black/60 flex items-center justify-center p-4 min-h-[300px]">
              <img
                src={PROJECTS[activeLightboxIndex].image}
                alt={PROJECTS[activeLightboxIndex].title}
                className="max-h-[60vh] max-w-full object-contain rounded-lg drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={prevLightbox}
                className="absolute left-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 shadow-xl cursor-pointer"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={nextLightbox}
                className="absolute right-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 shadow-xl cursor-pointer"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {PROJECTS[activeLightboxIndex].description}
              </p>
              <a
                href="#contact"
                onClick={closeLightbox}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                Hire for Similar Work
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
