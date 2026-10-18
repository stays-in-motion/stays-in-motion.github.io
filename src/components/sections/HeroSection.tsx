import { INSTRUCTOR_OFFER } from '@/constants/offer';

interface HeroSectionProps {
  onLearnMoreClick: () => void;
}

export function HeroSection({ onLearnMoreClick }: HeroSectionProps) {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-4xl">
        <p className="offer-energy font-semibold mb-5 tracking-wide">
          FOR FITNESS INSTRUCTORS · {INSTRUCTOR_OFFER.status}
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Your next class.
          <br />
          <span className="offer-energy">Ready for your edits.</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
          Turn a class idea into a structured draft. Review the movements and timing, make it your own, and keep the
          plan for next time.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            data-testid="hero-preview-cta"
            href={INSTRUCTOR_OFFER.href}
            className="inline-flex rounded-lg bg-accent-energy text-black px-6 py-4 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {INSTRUCTOR_OFFER.cta}
          </a>
          <button
            aria-label="See the illustrative class plan"
            onClick={onLearnMoreClick}
            className="rounded-lg border border-border px-6 py-4 font-semibold hover:bg-secondary"
          >
            See how planning works ↓
          </button>
        </div>
        <p className="text-sm text-muted-foreground max-w-xl mt-5">{INSTRUCTOR_OFFER.availability}</p>
      </div>
    </div>
  );
}
