import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { SpecialitySection } from './components/SpecialitySection';
import { ProjectsSection } from './components/ProjectsSection';
import { PricingSection } from './components/PricingSection';
import { ClientsSection } from './components/ClientsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProfilesSection } from './components/ProfilesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [selectedPlanSubject, setSelectedPlanSubject] = useState('');

  const handleSelectPlan = (planName: string, tierLabel: string) => {
    const subject = `Inquiry regarding ${planName} Package (${tierLabel} Tier)`;
    setSelectedPlanSubject(subject);
    
    // Smooth scroll to contact section
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors selection:bg-cyan-500 selection:text-white font-sans antialiased">
        {/* Navigation Top Bar */}
        <Header />

        {/* Hero Section with Ambient Slideshow & Identity */}
        <main>
          <HeroSlider />

          {/* Specialities Section */}
          <SpecialitySection />

          {/* Business & Lab Portfolio Projects */}
          <ProjectsSection />

          {/* Pricing & Investment Tiers */}
          <PricingSection onSelectPlan={handleSelectPlan} />

          {/* Client Logos */}
          <ClientsSection />

          {/* Testimonials & Upwork Feedback */}
          <TestimonialsSection />

          {/* International Marketplace Profiles */}
          <ProfilesSection />

          {/* Contact Section with Real-Time Validation */}
          <ContactSection initialSubject={selectedPlanSubject} />
        </main>

        {/* Legal & Brand Footer */}
        <Footer />

        {/* Fixed WhatsApp Button (+8801780055080) */}
        <WhatsAppButton />

        {/* Scroll Back to Top Button */}
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
