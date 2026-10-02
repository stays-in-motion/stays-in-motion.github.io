import { MOVA_ACCOUNT_DELETION_COPY } from '@/constants/account-deletion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MOVA_LINKS, MOVA_SUPPORT_EMAIL } from '@/constants/links';

export function TermsSection() {
  return (
    <section className="py-20 bg-secondary/30" aria-labelledby="terms-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <a href={MOVA_LINKS.home} className="inline-block mb-8 text-primary underline underline-offset-4">
            ← Back to Mova support
          </a>

          <div className="text-center mb-12">
            <h1 id="terms-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Mova Terms of Service
            </h1>
            <p className="text-muted-foreground">Effective October 2, 2026</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Apple license terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Mova is distributed through Apple's App Store. Your license to use the app is governed by Apple's{' '}
                  <a
                    className="text-primary underline underline-offset-4"
                    href={MOVA_LINKS.appleStandardEula}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Licensed Application End User License Agreement (Standard EULA)
                  </a>
                  . These service terms describe Mova-specific features and acceptable use without replacing Apple's
                  Standard EULA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Class-planning service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Mova helps fitness instructors create, edit, save, and reuse class plans with structured intervals,
                  music guidance, and optional training-document context. Generated material can vary and may contain
                  mistakes.
                </p>
                <p>
                  Mova provides planning assistance, not medical advice. Review each plan before teaching and adapt
                  exercises, timing, equipment, music, transitions, and coaching cues for your participants and
                  professional requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accounts, content, and acceptable use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Keep your account credentials secure and provide accurate account information. You are responsible for
                  reviewing the class content you choose to save, use, or share.
                </p>
                <p>
                  Only upload or submit material you are permitted to use. Do not use Mova to violate applicable law,
                  infringe another person's rights, interfere with the service, bypass access or usage controls, or
                  submit malicious content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mova Pro subscriptions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Mova Pro is offered through Apple as monthly and yearly auto-renewing subscriptions. The App Store
                  purchase screen displays the available product, billing period, and price before you confirm a
                  purchase.
                </p>
                <p>
                  Purchases, renewals, subscription management, and cancellation are handled through your Apple account.
                  Mova provides in-app actions to restore purchases and open Apple's subscription-management experience.
                </p>
                <p>{MOVA_ACCOUNT_DELETION_COPY.billingWarning}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy and support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Mova's{' '}
                  <a className="text-primary underline underline-offset-4" href={MOVA_LINKS.privacy}>
                    Privacy Policy
                  </a>{' '}
                  explains the service's data handling, account-deletion requests, and retained records.
                </p>
                <p>
                  Questions about these terms or the service can be sent to{' '}
                  <a className="text-primary underline underline-offset-4" href={MOVA_LINKS.supportEmail}>
                    {MOVA_SUPPORT_EMAIL}
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
