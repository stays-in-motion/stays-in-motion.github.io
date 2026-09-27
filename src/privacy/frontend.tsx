import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PrivacySection } from '@/components/sections/PrivacySection';
import '../index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Privacy page root element is missing.');
}

createRoot(rootElement).render(
  <StrictMode>
    <main className="min-h-screen bg-background text-foreground">
      <PrivacySection standalone />
    </main>
  </StrictMode>,
);
