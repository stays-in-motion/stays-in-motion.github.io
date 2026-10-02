import { MOVA_ACCOUNT_DELETION_COPY } from '@/constants/account-deletion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MOVA_LINKS, MOVA_SUPPORT_EMAIL } from '@/constants/links';

interface PrivacySectionProps {
  standalone?: boolean;
}

export function PrivacySection({ standalone = false }: PrivacySectionProps) {
  return (
    <section id="privacy" className="py-20 bg-secondary/30" aria-labelledby="privacy-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {standalone ? (
            <a href={MOVA_LINKS.home} className="inline-block mb-8 text-primary underline underline-offset-4">
              ← Back to Mova support
            </a>
          ) : null}

          <div className="text-center mb-12 scroll-reveal">
            <h2 id="privacy-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h2>
            <p className="text-muted-foreground">Effective September 28, 2026</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What Mova handles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Mova supports fitness-class planning and music-based intervals. Available features vary by app
                  version. To provide those features, it handles the information you submit and the records created
                  while you use the app.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Account information:</strong> your email address, authentication
                    records, and an account identifier managed with Supabase.
                  </li>
                  <li>
                    <strong className="text-foreground">Class and fitness-planning content:</strong> workout style,
                    duration, intensity, equipment, music preferences, prompts, generated class plans, saved classes,
                    templates, and related edits.
                  </li>
                  <li>
                    <strong className="text-foreground">Documents you choose to upload:</strong> the file, filename,
                    size and type, extracted text, processed summaries, tags, and processing status. Uploaded files are
                    stored in a private Supabase Storage bucket.
                  </li>
                  <li>
                    <strong className="text-foreground">Subscription information:</strong> your Mova account ID, product
                    and entitlement status, store, subscription dates, and transaction-reference hashes. Apple processes
                    payment details; Mova does not receive your full payment-card number.
                  </li>
                  <li>
                    <strong className="text-foreground">Service and diagnostic records:</strong> request and job IDs,
                    timestamps, model and route information, token and cost records, success or error state, and limited
                    request or generated-output context needed to operate, secure, and troubleshoot the service.
                  </li>
                  <li>
                    <strong className="text-foreground">Support information:</strong> the details you send by email.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How Mova uses information</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Authenticate your account and keep your content associated with you.</li>
                  <li>Generate, save, reopen, and manage fitness-class plans.</li>
                  <li>Process optional training documents you provide to personalize generated classes.</li>
                  <li>Provide purchases, restores, subscription access, and account support.</li>
                  <li>Enforce usage limits, prevent abuse, account for AI costs, diagnose errors, and secure Mova.</li>
                </ul>
                <p className="mt-4">
                  The current app does not include a third-party advertising or behavioral-analytics SDK, and Mova does
                  not use personal information for targeted advertising.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service providers and AI processing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>Mova uses service providers to perform specific parts of the app:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Supabase</strong> for authentication, databases, private file
                    storage, saved classes, account state, and server functions.
                  </li>
                  <li>
                    <strong className="text-foreground">RevenueCat and Apple</strong> for subscription offerings,
                    purchases, restores, and entitlement status. RevenueCat also provides subscription and purchase
                    reporting.
                  </li>
                  <li>
                    <strong className="text-foreground">Cloudflare AI Gateway and OpenAI</strong> to process class
                    preferences, relevant excerpts from selected documents, and generated class content. Gateway and
                    provider logs may include prompts, responses, model, token, cost, status, duration, and request
                    metadata according to their configured logging and data-control settings.
                  </li>
                  <li>
                    <strong className="text-foreground">Apple Music, MusicBrainz, and Spotify</strong> when Mova needs
                    recording metadata such as title, artist, recording identifier, duration, or explicit-content state.
                    Verified metadata may be cached without being treated as your private account content.
                  </li>
                  <li>
                    <strong className="text-foreground">Email providers</strong> for support correspondence, including
                    account-deletion status or completion notices where applicable.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Storage, control, and account deletion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Mova keeps information for as long as it is needed to provide and secure the service, meet accounting
                  or legal obligations, resolve disputes, and support users. Service providers may retain their own
                  service, security, or support records under their policies and configured controls.
                </p>
                <p>{MOVA_ACCOUNT_DELETION_COPY.initiation}</p>
                <p>{MOVA_ACCOUNT_DELETION_COPY.receipt}</p>
                <p>{MOVA_ACCOUNT_DELETION_COPY.fulfillment}</p>
                <p>
                  When completed, account deletion removes your Mova account and owned content such as saved playlists,
                  class plans, templates, and uploaded documents, where those features are available. For an accepted
                  in-app request, the contact email stays on the request while completion is pending and is cleared from
                  that record only when completion is separately confirmed.
                </p>
                <p>{MOVA_ACCOUNT_DELETION_COPY.retainedRecords}</p>
                <p>{MOVA_ACCOUNT_DELETION_COPY.billingWarning}</p>
                <p>{MOVA_ACCOUNT_DELETION_COPY.historicalArchive}</p>
                <p>Contact support for access, correction, or help with a deletion request.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security, children, and changes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Mova uses authenticated requests, row-level access controls, private document storage, and server-side
                  authorization to limit access. No online service can guarantee absolute security.
                </p>
                <p>
                  Mova is intended for fitness instructors and other adults planning fitness classes. It is not directed
                  to children under 13.
                </p>
                <p>
                  This policy may be updated as Mova changes. Material updates will be reflected by a new effective date
                  on this page.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Privacy or account-data questions can be sent to{' '}
                <a className="text-primary underline underline-offset-4" href={MOVA_LINKS.supportEmail}>
                  {MOVA_SUPPORT_EMAIL}
                </a>
                .
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
