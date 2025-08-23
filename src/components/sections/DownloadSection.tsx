import qrAppStore from '@/assets/qr-app-store.png';
import { Button } from '@/components/ui/button';
import { Smartphone, Tablet, Monitor } from 'lucide-react';

interface AppStoreBadgeProps {
  platform: 'ios';
  onClick?: () => void;
}

function AppStoreBadge({ platform, onClick }: AppStoreBadgeProps) {
  const isIOS = platform === 'ios';

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={onClick}
      className="h-auto p-3 border-2 hover:scale-105 transition-all duration-200"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
          {isIOS ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-background">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-background">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4653-6.02l1.9973-3.4992a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.5418c-1.2943-.5886-2.7326-.9148-4.2577-.9148s-2.9634.3262-4.2577.9148L6.756 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4992C4.9178 10.7784 2.8535 13.0963 2.2031 15.9421h19.5937c-.6504-2.8458-2.7147-5.1637-5.8484-6.6007z" />
            </svg>
          )}
        </div>
        <div className="text-left">
          <div className="text-xs text-muted-foreground">{isIOS ? 'Download on the' : 'Get it on'}</div>
          <div className="font-semibold">{isIOS ? 'App Store' : 'Google Play'}</div>
        </div>
      </div>
    </Button>
  );
}

function QRCode({ value }: { value: string }) {
  return (
    <div className="w-32 h-32 bg-background rounded-lg flex items-center justify-center p-2 shadow-sm border">
      <img
        src={qrAppStore}
        alt="QR Code to download Mova app from App Store"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function DeviceMockupGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {/* Phone */}
      <div className="text-center scroll-reveal">
        <div className="relative mx-auto w-32 h-64 bg-foreground rounded-2xl p-2 mb-4 shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-accent-energy/30 to-accent-progress/30 rounded-xl flex flex-col items-center justify-center">
            <Smartphone size={32} className="text-foreground mb-2" />
            <div className="text-xs text-foreground font-medium">Mobile App</div>
          </div>
        </div>
        <h4 className="font-semibold mb-2">iPhone Only</h4>
        <p className="text-sm text-muted-foreground">Perfect for workouts on the go</p>
      </div>

      {/* Coming Soon - Tablet */}
      <div className="text-center scroll-reveal" style={{ animationDelay: '0.1s' }}>
        <div className="relative mx-auto w-40 h-32 bg-muted/50 rounded-xl p-2 mb-4 shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-muted-foreground/10 to-muted-foreground/20 rounded-lg flex flex-col items-center justify-center">
            <Tablet size={32} className="text-muted-foreground mb-2" />
            <div className="text-xs text-muted-foreground font-medium">Coming Soon</div>
          </div>
        </div>
        <h4 className="font-semibold mb-2 text-muted-foreground">Tablet & Android</h4>
        <p className="text-sm text-muted-foreground">In development for 2025</p>
      </div>

      {/* Coming Soon - Desktop */}
      <div className="text-center scroll-reveal" style={{ animationDelay: '0.2s' }}>
        <div className="relative mx-auto w-40 h-24 bg-muted/50 rounded-lg p-2 mb-4 shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-muted-foreground/10 to-muted-foreground/20 rounded-md flex flex-col items-center justify-center">
            <Monitor size={28} className="text-muted-foreground mb-1" />
            <div className="text-xs text-muted-foreground font-medium">Coming Soon</div>
          </div>
        </div>
        <h4 className="font-semibold mb-2 text-muted-foreground">Web Experience</h4>
        <p className="text-sm text-muted-foreground">Planned for future release</p>
      </div>
    </div>
  );
}

export function DownloadSection() {
  const handleIOSDownload = () => {
    window.open('https://apps.apple.com/us/app/mova-fitness-instruction/id6738900718', '_blank');
  };

  return (
    <section id="download" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="scroll-reveal mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Moving?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Download Mova and transform your music into motivation
          </p>
        </div>

        {/* App store badge and QR code */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 scroll-reveal">
          <div className="text-center">
            <AppStoreBadge platform="ios" onClick={handleIOSDownload} />
            <p className="text-sm text-muted-foreground mt-2">Click to download</p>
          </div>
          <div className="text-center">
            <QRCode value="https://apps.apple.com/us/app/mova-fitness-instruction/id6738900718" />
            <p className="text-sm text-muted-foreground mt-2">Scan to download</p>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-muted/30 rounded-lg p-4 max-w-md mx-auto mb-12 scroll-reveal">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Android & Web versions</strong> coming in 2025. Currently available on iOS only.
          </p>
        </div>

        {/* Device mockups */}
        <div className="scroll-reveal">
          <h3 className="text-2xl font-bold mb-8">Platform Roadmap</h3>
          <DeviceMockupGrid />
        </div>
      </div>
    </section>
  );
}

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
