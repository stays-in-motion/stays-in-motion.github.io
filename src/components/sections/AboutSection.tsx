import { Card, CardContent } from '@/components/ui/card';
import { Play, User, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <Card className="feature-card h-full transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center" style={{ animationDelay: delay }}>
          <div className="p-3 rounded-full bg-gradient-to-br from-accent-energy/20 to-accent-progress/20">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Mova?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The perfect blend of music and movement for your fitness journey
          </p>
        </div>

        {/* Feature grid with animations */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Play size={32} className="text-accent-energy" />}
            title="Playlist Power"
            description="Convert any Spotify playlist into timed workout intervals that match your music's energy"
            delay="0ms"
          />
          <FeatureCard
            icon={<User size={32} className="text-accent-progress" />}
            title="Personal Library"
            description="Save and organize your favorite workout conversions for quick access anytime"
            delay="100ms"
          />
          <FeatureCard
            icon={<Zap size={32} className="text-accent-intensity" />}
            title="Instant Energy"
            description="Quick setup gets you moving in seconds - no complex configuration needed"
            delay="200ms"
          />
        </div>

        {/* TODO: App screenshots placeholder */}
        {/* <div className="text-center scroll-reveal">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-gradient-to-r from-accent-energy/10 to-accent-progress/10 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">See Mova in Action</h3>
                <p className="text-muted-foreground mb-6">
                  Transform your music into the perfect workout companion
                </p>
                {/* Placeholder for phone mockups */}
        {/* <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card rounded-xl p-6 shadow-sm">
                    <div className="h-32 bg-gradient-to-br from-accent-energy/20 to-accent-progress/20 rounded-lg mb-4"></div>
                    <p className="text-sm font-medium">Convert Playlist</p>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-sm">
                    <div className="h-32 bg-gradient-to-br from-accent-progress/20 to-accent-intensity/20 rounded-lg mb-4"></div>
                    <p className="text-sm font-medium">Set Intervals</p>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-sm">
                    <div className="h-32 bg-gradient-to-br from-accent-intensity/20 to-accent-energy/20 rounded-lg mb-4"></div>
                    <p className="text-sm font-medium">Start Workout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

// Add custom styles for feature cards
const styles = `
  .feature-card:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-out;
  }

  .scroll-reveal {
    animation: fade-in-up 0.8s ease-out;
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

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}
