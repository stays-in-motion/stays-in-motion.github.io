import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, User, Settings, Play, Mail, MessageSquare } from 'lucide-react';

interface HelpCategoryProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  active: boolean;
}

function HelpCategory({ icon, title, onClick, active }: HelpCategoryProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`cursor-pointer rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105 ${
        active ? 'ring-2 ring-primary ring-offset-1 ring-offset-background' : ''
      }`}
      onClick={onClick}
    >
      <div className="p-6 text-center">
        <div className="mb-3 flex justify-center">
          <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-accent-energy/10">{icon}</div>
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
    </button>
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
    window.location.href = 'mailto:support@staysinmotion.com';
  };

  return (
    <section id="support" className="py-20" aria-labelledby="support-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-reveal">
          <h2 id="support-heading" className="text-4xl md:text-5xl font-bold mb-4">
            How Can We Help?
          </h2>
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
            onClick={() => setActiveHelpCategory('Account')}
            active={activeHelpCategory === 'Account'}
          />
          <HelpCategory
            icon={<Play size={24} className="text-primary" />}
            title="Workouts"
            onClick={() => setActiveHelpCategory('Workouts')}
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
                  <h4 className="font-semibold mb-2">How do I create a class?</h4>
                  <p className="text-muted-foreground text-sm">
                    Sign in, open Create Class, choose your workout style, duration, intensity, equipment, music, and
                    class structure, then tap Generate Class. Mova Pro is required for AI class generation.
                  </p>
                </div>
                <div className="border-l-4 border-accent-progress pl-4">
                  <h4 className="font-semibold mb-2">Can I edit and save a generated class?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes. Review the generated intervals and music guidance, make any needed edits, then save the class.
                    Saved classes can be reopened from your library.
                  </p>
                </div>
                <div className="border-l-4 border-accent-intensity pl-4">
                  <h4 className="font-semibold mb-2">How do subscriptions work?</h4>
                  <p className="text-muted-foreground text-sm">
                    Mova Pro is available as a monthly or yearly auto-renewing subscription through Apple. Open Settings
                    to view plans, restore purchases, or manage an existing subscription.
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
                    <li>• A supported iPhone and current version of iOS</li>
                    <li>• Internet connection for sign-in, subscriptions, generation, and cloud-saved classes</li>
                    <li>• Verified email address for a new account</li>
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
                      • <strong>Generation fails:</strong> Confirm your internet connection and active Mova Pro status,
                      then try once more
                    </li>
                    <li>
                      • <strong>Login issues:</strong> Try logging out and back in
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-accent-intensity pl-4">
                  <h4 className="font-semibold mb-2">Performance Tips</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Keep Mova and iOS updated</li>
                    <li>• Use a stable connection while generating or uploading a document</li>
                    <li>• Avoid submitting the same generation repeatedly while a request is still processing</li>
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
                  <h4 className="font-semibold mb-2">Sign-in and email verification</h4>
                  <p className="text-muted-foreground text-sm">
                    Create an account with your email address and verify it from the confirmation message. If sign-in
                    fails, confirm you are using the same verified email and try resetting your session by signing out
                    and back in.
                  </p>
                </div>
                <div className="border-l-4 border-accent-energy pl-4">
                  <h4 className="font-semibold mb-2">Restore or manage Mova Pro</h4>
                  <p className="text-muted-foreground text-sm">
                    Open Settings and choose Restore Purchases if you already subscribed with your Apple account. Use
                    Manage Subscription to review renewal or cancellation options.
                  </p>
                </div>
                <div className="border-l-4 border-accent-intensity pl-4">
                  <h4 className="font-semibold mb-2">Archive Account</h4>
                  <p className="text-muted-foreground text-sm">
                    Archiving signs you out and prevents continued app access. It retains the account record and related
                    information for support and compliance; it is not permanent deletion. Contact support for a data
                    deletion request.
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
                  <h4 className="font-semibold mb-2">Review every generated class</h4>
                  <p className="text-muted-foreground text-sm">
                    Mova provides planning assistance, not medical advice. Check exercises, durations, transitions,
                    music, equipment, and coaching cues before teaching. Adapt the plan for participant ability and your
                    professional guidance.
                  </p>
                </div>
                <div className="border-l-4 border-accent-progress pl-4">
                  <h4 className="font-semibold mb-2">Teach the App documents</h4>
                  <p className="text-muted-foreground text-sm">
                    You can upload a supported training document to help personalize future classes. Only use material
                    you are permitted to share, avoid unnecessary personal information, and delete documents you no
                    longer want associated with your account.
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
