import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, User, Settings, Play, Mail, MessageSquare } from 'lucide-react';

interface HelpCategoryProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  active: boolean;
}

function HelpCategory({ icon, title, onClick, active }: HelpCategoryProps) {
  const isClickable = !!onClick;

  return (
    <Card
      className={`${
        isClickable
          ? 'cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105'
          : 'transition-all duration-200'
      } ${active ? 'ring-2 ring-primary ring-offset-1 ring-offset-background' : ''}`}
      onClick={onClick}
    >
      <CardContent className="p-6 text-center">
        <div className="mb-3 flex justify-center">
          <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-accent-energy/10">{icon}</div>
        </div>
        <h4 className="font-semibold">{title}</h4>
        {!isClickable && <p className="text-xs text-muted-foreground mt-2">Coming Soon</p>}
      </CardContent>
    </Card>
  );
}

interface ContactCardProps {
  type: 'form' | 'email';
  title: string;
  description: string;
  action: string;
  onClick?: () => void;
}

function ContactCard({ type, title, description, action, onClick }: ContactCardProps) {
  const icon = type === 'form' ? <MessageSquare size={24} /> : <Mail size={24} />;

  return (
    <Card className="h-full">
      <CardContent className="p-6 text-center">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">{icon}</div>
          <div className="flex-1 text-left">
            <h4 className="font-semibold mb-2">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onClick}
          className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          {action}
        </Button>
      </CardContent>
    </Card>
  );
}

export function SupportSection() {
  const [activeHelpCategory, setActiveHelpCategory] = useState('FAQ');

  const handleSupportForm = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeOpCWZYp8dD2lPWSu5dPNjbx_TdKtl0UCe7t-ku3O9Zth12Q/viewform',
      '_blank',
    );
  };

  const handleEmailSupport = () => {
    window.location.href = 'mailto:movastaysinmotionar@gmail.com';
  };

  return (
    <section id="support" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How Can We Help?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the support you need to make the most of your Mova experience
          </p>
        </div>

        {/* Quick help categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 scroll-reveal">
          <HelpCategory
            icon={<HelpCircle size={24} className="text-accent-energy" />}
            title="FAQ"
            onClick={() => setActiveHelpCategory('FAQ')}
            active={activeHelpCategory === 'FAQ'}
          />
          <HelpCategory
            icon={<Settings size={24} className="text-accent-intensity" />}
            title="Technical"
            onClick={() => setActiveHelpCategory('Technical')}
            active={activeHelpCategory === 'Technical'}
          />
          <HelpCategory
            icon={<User size={24} className="text-accent-progress" />}
            title="Account"
            active={activeHelpCategory === 'Account'}
          />
          <HelpCategory
            icon={<Play size={24} className="text-primary" />}
            title="Workouts"
            active={activeHelpCategory === 'Workouts'}
          />
        </div>

        {/* Dynamic Help Content */}
        <div className="max-w-3xl mx-auto mb-12 scroll-reveal">
          {activeHelpCategory === 'FAQ' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-accent-energy pl-4">
                  <h4 className="font-semibold mb-2">How do I convert a Spotify playlist?</h4>
                  <p className="text-muted-foreground text-sm">
                    Simply paste your Spotify playlist URL into the converter, set your desired interval times, and Mova
                    will create a perfectly timed workout sequence.
                  </p>
                </div>
                <div className="border-l-4 border-accent-progress pl-4">
                  <h4 className="font-semibold mb-2">Can I save my workout conversions?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes! Create an account to save your workout conversions and access them from any device.
                  </p>
                </div>
                <div className="border-l-4 border-accent-intensity pl-4">
                  <h4 className="font-semibold mb-2">Is there a guest mode?</h4>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! You can use the converter without creating an account, though you won't be able to save
                    your conversions.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {activeHelpCategory === 'Technical' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Technical Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-accent-energy pl-4">
                  <h4 className="font-semibold mb-2">System Requirements</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• iOS 15.1 or later required</li>
                    <li>• Internet connection needed for playlist conversion</li>
                    <li>• Spotify account not required (just public playlist links)</li>
                    <li>• Private and featured playlists are not supported</li>
                  </ul>
                </div>
                <div className="border-l-4 border-accent-progress pl-4">
                  <h4 className="font-semibold mb-2">Common Issues & Solutions</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>
                      • <strong>App crashes:</strong> Force close and restart the app
                    </li>
                    <li>
                      • <strong>Slow loading:</strong> Check your internet connection
                    </li>
                    <li>
                      • <strong>Playlist won't convert:</strong> Ensure the URL is correct and playlist is accessible
                    </li>
                    <li>
                      • <strong>Login issues:</strong> Try logging out and back in
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-accent-intensity pl-4">
                  <h4 className="font-semibold mb-2">Performance Tips</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Close other apps before converting large playlists</li>
                    <li>• Use Wi-Fi for faster processing</li>
                    <li>• Restart the app weekly to clear cache</li>
                    <li>• Keep iOS updated for best performance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {activeHelpCategory === 'Account' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Account Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-accent-progress pl-4">
                  <h4 className="font-semibold mb-2">Coming Soon</h4>
                  <p className="text-muted-foreground text-sm">
                    Account management features are being developed. For now, contact support for account-related
                    questions.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {activeHelpCategory === 'Workouts' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Workout Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Coming Soon</h4>
                  <p className="text-muted-foreground text-sm">
                    Workout-specific help content is being developed. For now, contact support for workout-related
                    questions.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Contact section */}
        <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto scroll-reveal">
          <h3 className="text-2xl font-bold mb-6 text-center">Still Need Help?</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <ContactCard
              type="form"
              title="Send Message"
              description="Get personalized help with your question"
              action="Open Support Form"
              onClick={handleSupportForm}
            />
            <ContactCard
              type="email"
              title="Email Us"
              description="Reach out directly for support and feedback"
              action="Send Email"
              onClick={handleEmailSupport}
            />
          </div>

          <p className="text-sm text-muted-foreground mt-6 text-center">
            Please include your device model and operating system version when contacting support.
          </p>
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
