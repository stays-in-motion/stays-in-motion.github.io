import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SupportSection } from '@/components/sections/SupportSection';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { ChangelogSection } from '@/components/sections/ChangelogSection';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { MOVA_LINKS, MOVA_SUPPORT_EMAIL } from '@/constants/links';
import './index.css';
import './offer.css';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'download', 'support', 'privacy', 'changelog'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLearnMoreClick = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Sticky Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="hero-background">
          <HeroSection onLearnMoreClick={handleLearnMoreClick} />
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Walkthrough offer and current iPhone app listing */}
        <DownloadSection />

        {/* Support Section */}
        <SupportSection />

        {/* Privacy Section */}
        <PrivacySection />

        {/* Changelog Section */}
        <ChangelogSection />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold offer-energy">Mova</h3>
              <p className="text-muted-foreground">
                Explore a class-planning workflow built around instructor review, editing and reuse.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-accent-energy transition-colors"
                >
                  About Mova
                </button>
                <button
                  onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-accent-progress transition-colors"
                >
                  Get Support
                </button>
                <a
                  href={MOVA_LINKS.privacy}
                  className="block text-muted-foreground hover:text-accent-progress transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href={MOVA_LINKS.terms}
                  className="block text-muted-foreground hover:text-accent-progress transition-colors"
                >
                  Terms of Service
                </a>
                <button
                  onClick={() => document.getElementById('changelog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-accent-intensity transition-colors"
                >
                  What's New
                </button>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Get in Touch</h4>
              <div className="space-y-2">
                <a
                  href={MOVA_LINKS.supportEmail}
                  className="block text-muted-foreground hover:text-accent-energy transition-colors"
                >
                  {MOVA_SUPPORT_EMAIL}
                </a>
                <a
                  href={MOVA_LINKS.privacy}
                  className="block text-muted-foreground hover:text-accent-progress transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href={MOVA_LINKS.terms}
                  className="block text-muted-foreground hover:text-accent-progress transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mova. All rights reserved. Keep moving, keep growing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
