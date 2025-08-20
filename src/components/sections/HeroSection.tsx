import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onDownloadClick: () => void;
  onLearnMoreClick: () => void;
}

export function HeroSection({ onDownloadClick, onLearnMoreClick }: HeroSectionProps) {
  return (
    <section className="hero-background min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Static gradient overlay for visual depth */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--accent-intensity) / 0.08) 0%, transparent 40%, hsl(var(--accent-progress) / 0.06) 100%)'
        }}
      />

      {/* Subtly animated workout particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-accent-energy rounded-full opacity-40 animate-particle-float" />
        <div className="absolute top-40 right-20 w-4 h-4 bg-accent-progress rounded-full opacity-30 animate-particle-drift" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent-intensity rounded-full opacity-35 animate-particle-sway" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent-energy rounded-full opacity-50 animate-particle-pulse" />
        {/* Additional subtle elements for visual interest */}
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-accent-progress rounded-full opacity-25 animate-particle-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-accent-intensity rounded-full opacity-30 animate-particle-drift" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="scroll-reveal">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Stay in <span className="text-accent-energy">Motion</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your playlists into perfect interval workouts
          </p>

          {/* Optimized CTA buttons - Essential animations only */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onDownloadClick}
              className="btn-primary px-8 py-3 text-lg font-semibold bg-accent-energy text-black hover:bg-accent-energy/90 focus-visible:ring-2 focus-visible:ring-accent-energy/50"
            >
              Download App
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onLearnMoreClick}
              className="px-8 py-3 text-lg font-semibold border-2 border-accent-progress/30 hover:bg-accent-progress/10 hover:border-accent-progress/50 focus-visible:ring-2 focus-visible:ring-accent-progress/50 transition-all duration-200"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Custom styles for animations
const styles = `
  @keyframes pulse-energy {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.2; }
  }

  @keyframes bounce-subtle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .text-accent-energy {
    color: hsl(45 100% 60%);
  }

  .scroll-reveal {
    animation: fade-in-up 1s ease-out;
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}
