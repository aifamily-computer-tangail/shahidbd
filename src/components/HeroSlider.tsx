import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { HERO_SLIDESHOW_IMAGES } from '../data/portfolioData';

export const HeroSlider: React.FC = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    'Sales Engineer',
    'Business Developer',
    'Website Developer',
    'AI Workflows Specialist',
  ];

  // Slideshow background cycle
  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % HERO_SLIDESHOW_IMAGES.length);
    }, 7000);
    return () => clearInterval(bgTimer);
  }, []);

  // Role rotating typewriter cycle
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(roleTimer);
  }, [roles.length]);

  return (
    <div id="home" className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Dynamic Background Slideshow with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDESHOW_IMAGES.map((imgSrc, idx) => (
          <div
            key={imgSrc}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out transform scale-105 ${
              idx === bgIndex ? 'opacity-100 z-1' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url(${imgSrc})` }}
          />
        ))}

        {/* Ambient Dark/Light Scrim Overlay */}
        <div className="absolute inset-0 z-2 bg-gradient-to-b from-slate-950/85 via-slate-950/80 to-slate-950/95 dark:from-slate-950/90 dark:via-slate-950/85 dark:to-slate-950" />
        
        {/* Ambient Cosmic Spaceship from original CSS */}
        <div 
          className="absolute inset-0 z-2 pointer-events-none opacity-20 dark:opacity-30 mix-blend-screen bg-no-repeat bg-right-top"
          style={{ backgroundImage: 'url(/legacy-assets/img/spaceship.png)' }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Slide 1: Who is M Shahid I */}
        {activeSlide === 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Intro & Headline */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>Executive Consultant & Developer</span>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-amber-400 dark:text-cyan-400 mb-2">
                  Who is M Shahid I
                </h2>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                  Professional{' '}
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-cyan-300 min-h-[1.2em]">
                    {roles[roleIndex]}
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Transforming traditional businesses into thriving, modern digital enterprises. I design scalable web platforms, automate customer acquisition with AI workflows, and optimize sales conversions on a milestone basis.
              </p>

              {/* Key Trust Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-white/5 border border-white/10 rounded-lg p-2.5 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Google Console Verified</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-white/5 border border-white/10 rounded-lg p-2.5 backdrop-blur-sm">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>100% Upwork Success</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-white/5 border border-white/10 rounded-lg p-2.5 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Milestone Payments</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-95 inline-flex items-center gap-2"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#features"
                  className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 rounded-xl backdrop-blur-sm transition-all hover:border-cyan-400/50"
                >
                  View Speciality
                </a>
              </div>
            </div>

            {/* Right Column: Original Portrait */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative flex justify-center items-center">
                {/* Glow Backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/30 to-amber-500/20 blur-3xl rounded-full" />
                
                {/* Portrait Display */}
                <div className="relative z-10 p-2 rounded-3xl bg-gradient-to-br from-cyan-400/40 via-amber-400/30 to-slate-800/80 backdrop-blur-md shadow-2xl">
                  <img
                    src="/legacy-assets/images/shahid-i.png"
                    alt="M Shahid I"
                    className="w-56 sm:w-72 h-auto rounded-2xl object-cover drop-shadow-xl"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-cyan-500/40 text-cyan-300 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    M Shahid I
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 2: Why Brainchild BD */}
        {activeSlide === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Brainchild BD Brand */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/30 shadow-2xl backdrop-blur-md max-w-xs">
                <img
                  src="/legacy-assets/images/Brainchild-BD-Logo.png"
                  alt="Brainchild BD Logo"
                  className="w-full h-auto drop-shadow-lg"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold uppercase tracking-wider text-cyan-400">
                  Why Brainchild BD
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Brainchild BD is an enterprise agency specializing in strategic digital roadmaps, customized web applications, and artificial intelligence integration for expanding companies.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#prices"
                  className="px-6 py-3 text-xs uppercase font-bold tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all"
                >
                  View Investment Tiers
                </a>
                <a
                  href="#client"
                  className="px-6 py-3 text-xs uppercase font-bold tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
                >
                  Our Clients
                </a>
              </div>
            </div>

            {/* Right Column: Pillars & Showcase Mockup */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-sm">
                  <div className="text-amber-400 font-bold text-sm uppercase mb-1">01. Strategy</div>
                  <h4 className="text-white font-semibold text-base mb-1">Business Advisor</h4>
                  <p className="text-xs text-slate-400">Guiding tech investment decisions to maximize conversion rate and return.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-sm">
                  <div className="text-cyan-400 font-bold text-sm uppercase mb-1">02. Engineering</div>
                  <h4 className="text-white font-semibold text-base mb-1">Business Development</h4>
                  <p className="text-xs text-slate-400">Automating lead captures, customer onboarding, and scalable infrastructure.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-sm">
                  <div className="text-yellow-400 font-bold text-sm uppercase mb-1">03. Innovation</div>
                  <h4 className="text-white font-semibold text-base mb-1">A I Workflows</h4>
                  <p className="text-xs text-slate-400">Deploying modern AI pipelines for rapid operations and customer responsiveness.</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900/60 p-4">
                <img
                  src="/legacy-assets/images/2.png"
                  alt="Brainchild BD Platform Solutions"
                  className="w-full h-auto rounded-lg max-h-[320px] object-contain mx-auto"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        )}

        {/* Slider Controls */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveSlide(0)}
              aria-label="Slide 1"
              className={`h-2.5 rounded-full transition-all ${
                activeSlide === 0 ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
            />
            <button
              type="button"
              onClick={() => setActiveSlide(1)}
              aria-label="Slide 2"
              className={`h-2.5 rounded-full transition-all ${
                activeSlide === 1 ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
              aria-label="Previous Slide"
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
              aria-label="Next Slide"
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
