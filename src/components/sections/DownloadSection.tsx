import { INSTRUCTOR_OFFER } from '@/constants/offer';

export function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-secondary/40 border-y border-border" aria-labelledby="download-heading">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <p className="offer-energy font-semibold mb-3">{INSTRUCTOR_OFFER.status}</p>
          <h2 id="download-heading" className="text-4xl font-bold mb-5">
            Bring your next class idea.
          </h2>
          <p className="text-muted-foreground mb-6">
            Tell us what you teach and what takes the most preparation. We can walk through the planner and discuss
            whether current access fits your needs.
          </p>
          <a
            data-testid="offer-preview-cta"
            href={INSTRUCTOR_OFFER.href}
            className="inline-flex rounded-lg bg-accent-energy text-black px-6 py-4 font-semibold"
          >
            {INSTRUCTOR_OFFER.cta}
          </a>
          <p className="text-sm text-muted-foreground mt-4">{INSTRUCTOR_OFFER.availability}</p>
        </div>
        <aside className="rounded-xl border border-border bg-card p-7" aria-labelledby="iphone-heading">
          <p className="text-sm text-muted-foreground mb-3">AVAILABLE ON IPHONE</p>
          <h3 id="iphone-heading" className="text-2xl font-semibold mb-4">
            Mova for iPhone
          </h3>
          <p className="text-muted-foreground mb-5">{INSTRUCTOR_OFFER.appStoreDescription}</p>
          <a
            data-testid="iphone-app-store-link"
            href={INSTRUCTOR_OFFER.appStoreHref}
            className="underline underline-offset-4 font-semibold"
          >
            {INSTRUCTOR_OFFER.appStoreLabel} ↗
          </a>
        </aside>
      </div>
    </section>
  );
}
