import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { changelogData, type ChangelogEntry } from "@/data/changelog-public";

interface TimelineEntryProps {
  release: ChangelogEntry;
  index: number;
  isLast: boolean;
}

function TimelineEntry({ release, index, isLast }: TimelineEntryProps) {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'major': return 'bg-accent-intensity text-white';
      case 'minor': return 'bg-accent-progress text-white';
      case 'patch': return 'bg-accent-energy text-black';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
      
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-10 top-10 w-0.5 h-full bg-border"></div>
      )}
      
      {/* Content */}
      <div className="ml-20 pb-12">
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
              <Badge className={`${getBadgeColor(release.type)} font-semibold`}>
                v{release.version}
              </Badge>
              <span className="text-sm text-muted-foreground">{release.date}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3">{release.title}</h3>
            
            {release.features && release.features.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-accent-energy mb-2">✨ New Features</h4>
                <ul className="space-y-1">
                  {release.features.map((feature, i) => (
                    <li key={i} className="text-sm font-medium text-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {release.improvements && release.improvements.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-accent-progress mb-2">🚀 Improvements</h4>
                <ul className="space-y-1">
                  {release.improvements.map((improvement, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {release.bugfixes && release.bugfixes.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-accent-intensity mb-2">🐛 Bug Fixes</h4>
                <ul className="space-y-1">
                  {release.bugfixes.map((bugfix, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {bugfix}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {release.breaking && release.breaking.length > 0 && (
              <div>
                <h4 className="font-semibold text-destructive mb-2">⚠️ Breaking Changes</h4>
                <ul className="space-y-1">
                  {release.breaking.map((breaking, i) => (
                    <li key={i} className="text-sm text-destructive">
                      • {breaking}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


export function ChangelogSection() {
  return (
    <section id="changelog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            App Evolution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow Mova's journey as we continuously improve your workout experience
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {changelogData.map((release, index) => (
              <TimelineEntry 
                key={release.version}
                release={release}
                index={index}
                isLast={index === changelogData.length - 1}
              />
            ))}
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="text-center mt-12 scroll-reveal">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-sm">
            <div className="w-3 h-3 bg-accent-progress rounded-full animate-pulse"></div>
            <span className="font-medium">More updates coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Badge component if not available
function BadgeComponent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}

// Use Badge component or fallback
const BadgeToUse = Badge || BadgeComponent;

// Custom styles
const styles = `
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