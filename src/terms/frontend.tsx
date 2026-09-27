import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TermsSection } from '@/components/sections/TermsSection';
import '../index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Terms page root element is missing.');
}

createRoot(rootElement).render(
  <StrictMode>
    <main className="min-h-screen bg-background text-foreground">
      <TermsSection />
    </main>
  </StrictMode>,
);
