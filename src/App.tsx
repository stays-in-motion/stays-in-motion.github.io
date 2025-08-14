import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Changelog } from "@/components/Changelog";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./index.css";
import { useState, useEffect } from "react";

interface SupportPageProps {
  currentPage: 'support' | 'changelog';
  setCurrentPage: (page: 'support' | 'changelog') => void;
}

function SupportPage({ currentPage, setCurrentPage }: SupportPageProps) {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-4xl">
      {/* Header with theme toggle */}
      <div className="flex justify-between items-start mb-8">
        <div className="text-center flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Mova</h1>
          <p className="text-lg md:text-xl text-muted-foreground">Help & Support</p>
        </div>
        <div className="ml-4 mt-1">
          <ThemeToggle />
        </div>
      </div>

      <div className="space-y-6">
        {/* Navigation */}
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-8">
          <button
            onClick={() => setCurrentPage('support')}
            className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
              currentPage === 'support' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Support
          </button>
          <button
            onClick={() => setCurrentPage('changelog')}
            className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
              currentPage === 'changelog' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Changelog
          </button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Need help with something not covered here? We're here to help!
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOpCWZYp8dD2lPWSu5dPNjbx_TdKtl0UCe7t-ku3O9Zth12Q/viewform"
                className="text-primary hover:text-primary/80 underline transition-colors"
              >
                Support Form
              </a>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="font-medium mb-2">Email Support:</p>
              <a
                href="mailto:movastaysinmotionar@gmail.com"
                className="text-primary hover:text-primary/80 underline transition-colors"
              >
                movastaysinmotionar@gmail.com
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Please include your device model and operating system version when contacting support.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

interface ChangelogPageProps {
  currentPage: 'support' | 'changelog';
  setCurrentPage: (page: 'support' | 'changelog') => void;
}

function ChangelogPage({ currentPage, setCurrentPage }: ChangelogPageProps) {
  return (
    <div>
      {/* Header with theme toggle */}
      <div className="flex justify-end p-8 pb-0">
        <ThemeToggle />
      </div>
      
      {/* Navigation */}
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 pt-4">
        <button
          onClick={() => setCurrentPage('support')}
          className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
            currentPage === 'support' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          Support
        </button>
        <button
          onClick={() => setCurrentPage('changelog')}
          className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
            currentPage === 'changelog' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          Changelog
        </button>
      </div>
      <Changelog />
    </div>
  );
}

export function App() {
  const [currentPage, setCurrentPage] = useState<'support' | 'changelog'>('support');

  // Handle URL changes
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/changelog') {
        setCurrentPage('changelog');
      } else {
        setCurrentPage('support');
      }
    };

    // Check initial URL
    handlePopState();

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL when page changes
  useEffect(() => {
    const newPath = currentPage === 'changelog' ? '/changelog' : '/';
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
  }, [currentPage]);

  if (currentPage === 'changelog') {
    return <ChangelogPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
  }

  return <SupportPage currentPage={currentPage} setCurrentPage={setCurrentPage} />;
}

export default App;