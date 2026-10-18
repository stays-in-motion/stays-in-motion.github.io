import { MOVA_LINKS } from './links';

// Walkthrough requests remain the primary CTA until the release, activation and
// funded offer are accepted. This module never enables a purchase or AI call.
export const INSTRUCTOR_OFFER = {
  status: 'Instructor walkthrough',
  cta: 'Request an instructor walkthrough',
  navCta: 'Request a walkthrough',
  href: `${MOVA_LINKS.supportEmail}?subject=Mova%20instructor%20walkthrough`,
  availability:
    'Ask us to walk through class planning and discuss whether Mova fits your teaching. A request is not a purchase or a promise of paid access.',
  appStoreHref: 'https://apps.apple.com/us/app/mova-fitness-instruction/id6738900718',
  appStoreLabel: 'View Mova for iPhone on the App Store',
  appStoreDescription:
    'Mova 0.2.1 is listed on the US App Store with class creation, editing, saved plans and Mova Pro. Check the listing and in-app subscription terms before purchasing. Available features depend on the app version.',
} as const;
