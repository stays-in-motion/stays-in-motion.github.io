# GitHub Copilot Instructions - Stays in Motion Site

## Project Context

You are working on **Stays in Motion Site**, the marketing website for the Mova fitness platform. Built with Bun runtime, React 19, TailwindCSS v4, and Radix UI components. This serves as the marketing front-end, documentation hub, and conversion funnel for the Mova mobile app.

## Technical Stack & Framework Preferences

### Core Technologies

- **Runtime**: Bun (NOT Node.js) - use Bun.serve() and Bun-native APIs
- **Framework**: React 19 with modern patterns (NO Next.js/Vite)
- **Styling**: TailwindCSS v4 with CSS custom properties and design tokens
- **UI Components**: Radix UI primitives with custom Tailwind styling
- **Forms**: React Hook Form with Zod validation
- **Package Manager**: Bun (use `bun` commands exclusively)
- **Build System**: Custom Bun-based build process with optimization

### Import Patterns

```typescript
// React 19 with modern features
import { useState, useTransition, startTransition } from 'react';
import { createRoot } from 'react-dom/client';

// Radix UI components
import * as Select from '@radix-ui/react-select';
import * as Dialog from '@radix-ui/react-dialog';
import { Slot } from '@radix-ui/react-slot';

// Form handling
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Utilities
import { cn } from '../lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';

// Local components
import { Button } from '../components/ui/Button';
import { HeroSection } from '../components/sections/HeroSection';
```

## Code Style & Architecture Patterns

### Bun Server Structure

```typescript
// src/index.tsx - Main server entry point
import { Bun } from 'bun';
import { renderToString } from 'react-dom/server';
import App from './App';

interface ServerOptions {
  port: number;
  development: boolean;
}

function createServer({ port = 3000, development = false }: ServerOptions) {
  return Bun.serve({
    port,
    development,
    fetch: async (request: Request) => {
      const url = new URL(request.url);

      // Serve static assets
      if (url.pathname.startsWith('/assets/')) {
        const file = Bun.file(`./public${url.pathname}`);
        if (await file.exists()) {
          return new Response(file, {
            headers: {
              'Cache-Control': 'public, max-age=31536000, immutable',
              'Content-Type': getContentType(url.pathname),
            },
          });
        }
      }

      // Server-side render React app
      try {
        const html = renderToString(<App pathname={url.pathname} />);

        return new Response(createHTMLDocument(html, url.pathname), {
          headers: {
            'Content-Type': 'text/html',
            'Cache-Control': development ? 'no-cache' : 'public, max-age=3600',
          },
        });
      } catch (error) {
        console.error('SSR Error:', error);
        return new Response('Internal Server Error', { status: 500 });
      }
    },
    error(error) {
      console.error('Server error:', error);
      return new Response('Server Error', { status: 500 });
    },
  });
}

function createHTMLDocument(content: string, pathname: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${getPageTitle(pathname)} | Stays in Motion</title>
  <meta name="description" content="${getPageDescription(pathname)}">
  <link rel="stylesheet" href="/assets/styles.css">
  <link rel="icon" href="/favicon.ico">
</head>
<body>
  <div id="root">${content}</div>
  <script src="/assets/bundle.js"></script>
</body>
</html>`;
}

// Start server
const server = createServer({
  port: Number(process.env.PORT) || 3000,
  development: process.env.NODE_ENV !== 'production',
});

console.log(`🚀 Server running at http://localhost:${server.port}`);
```

### React 19 Component Patterns

```typescript
// Use modern React 19 features
import { useState, useTransition } from 'react';

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // React 19 form actions
  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) throw new Error('Failed to submit');

        // Handle success
        console.log('Form submitted successfully');
      } catch (error) {
        console.error('Submission error:', error);
      }
    });
  };

  return (
    <form action={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Your name"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

### TailwindCSS v4 Design System

```css
/* styles/globals.css - TailwindCSS v4 configuration */
@import 'tailwindcss';

@theme {
  /* Color palette */
  --color-primary: #3b82f6;
  --color-primary-foreground: #ffffff;
  --color-secondary: #64748b;
  --color-secondary-foreground: #ffffff;
  --color-destructive: #ef4444;
  --color-muted: #f1f5f9;

  /* Spacing scale */
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  /* Typography */
  --font-sans: ui-sans-serif, system-ui, sans-serif;
  --font-mono: ui-monospace, monospace;

  /* Border radius */
  --radius: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
}

/* CSS custom properties for theming */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 224.3 76.3% 94.1%;
}
```

### UI Component Patterns with Radix

```typescript
// components/ui/Button.tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// Usage in components
export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-foreground mb-6">
          Transform Your Playlists Into Perfect Workouts
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Mova converts your Spotify playlists into structured workout intervals with AI-powered class generation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3">
            Download for iOS
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3">
            Download for Android
          </Button>
        </div>
      </div>
    </section>
  );
}
```

### Form Validation with React Hook Form + Zod

```typescript
// components/forms/ContactForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine(val => val === true, 'You must agree to the privacy policy'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      // Success handling
      reset();
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          rows={5}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Tell us about your fitness business..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start space-x-2">
        <input
          {...register('consent')}
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-input bg-background text-primary focus:ring-ring"
        />
        <label className="text-sm text-muted-foreground">
          I agree to the <a href="/privacy" className="text-primary hover:underline">privacy policy</a> and terms of service.
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-destructive">{errors.consent.message}</p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
```

## SEO & Marketing Optimization

### Meta Tags and Open Graph

```typescript
// lib/seo.ts
interface SEOData {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function generateSEOTags({ title, description, image, url, type = 'website' }: SEOData) {
  const baseUrl = 'https://staysinmotion.com';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const ogImage = image || `${baseUrl}/images/og-default.jpg`;

  return {
    title: `${title} | Stays in Motion`,
    description,
    canonical: fullUrl,
    openGraph: {
      title,
      description,
      url: fullUrl,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: ogImage,
    },
  };
}

// Usage in page components
export function HomePage() {
  const seoData = generateSEOTags({
    title: 'Transform Your Playlists Into Perfect Workouts',
    description: 'Mova converts your Spotify playlists into structured workout intervals with AI-powered class generation. Download for iOS and Android.',
    url: '/',
  });

  return (
    <>
      <Head {...seoData} />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
```

### Analytics Integration

```typescript
// lib/analytics.ts
interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

export class Analytics {
  private static instance: Analytics;

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  track(event: AnalyticsEvent): void {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', event.name, {
          ...event.properties,
          timestamp: new Date().toISOString(),
        });
      }

      // Additional analytics providers
      if (window.mixpanel) {
        window.mixpanel.track(event.name, event.properties);
      }
    }
  }

  page(pathname: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pathname,
      });
    }
  }
}

// Hook for easy component usage
export function useAnalytics() {
  return Analytics.getInstance();
}

// Usage in components
export function DownloadButton({ platform }: { platform: 'ios' | 'android' }) {
  const analytics = useAnalytics();

  const handleDownload = () => {
    analytics.track({
      name: 'download_button_clicked',
      properties: {
        platform,
        location: 'hero_section',
        timestamp: new Date().toISOString(),
      },
    });

    // Open app store
    const links = {
      ios: 'https://apps.apple.com/app/mova-fitness',
      android: 'https://play.google.com/store/apps/details?id=com.mova.app',
    };

    window.open(links[platform], '_blank');
  };

  return (
    <Button onClick={handleDownload} size="lg">
      Download for {platform === 'ios' ? 'iOS' : 'Android'}
    </Button>
  );
}
```

## Performance Optimization

### Build Configuration

```typescript
// build.ts - Custom Bun build script
import { build } from 'bun';

interface BuildOptions {
  production: boolean;
  analyze: boolean;
}

export async function buildSite({ production = false, analyze = false }: BuildOptions) {
  console.log(`🏗️  Building for ${production ? 'production' : 'development'}`);

  try {
    // Build client bundle
    const clientResult = await build({
      entrypoints: ['./src/client.tsx'],
      outdir: './dist/assets',
      target: 'browser',
      minify: production,
      splitting: true,
      sourcemap: production ? 'external' : 'inline',
      define: {
        'process.env.NODE_ENV': production ? '"production"' : '"development"',
      },
      naming: production ? '[name]-[hash].[ext]' : '[name].[ext]',
    });

    // Build server bundle
    const serverResult = await build({
      entrypoints: ['./src/server.tsx'],
      outdir: './dist',
      target: 'bun',
      minify: production,
      sourcemap: production ? 'external' : 'inline',
      external: ['bun'],
    });

    // Copy static assets
    await copyStaticAssets();

    console.log('✅ Build completed successfully');

    if (analyze) {
      console.log('📊 Bundle analysis:');
      console.log(`Client bundle: ${getFileSize('./dist/assets/bundle.js')}`);
      console.log(`Server bundle: ${getFileSize('./dist/server.js')}`);
    }
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Run build if called directly
if (import.meta.main) {
  const args = process.argv.slice(2);
  const production = args.includes('--production');
  const analyze = args.includes('--analyze');

  await buildSite({ production, analyze });
}
```

### Image Optimization

```typescript
// components/ui/OptimizedImage.tsx
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  quality = 85,
  priority = false,
  className,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generate responsive srcset
  const generateSrcSet = (baseSrc: string) => {
    const sizes = [320, 640, 768, 1024, 1280, 1536];
    return sizes
      .map(size => `${baseSrc}?w=${size}&q=${quality} ${size}w`)
      .join(', ');
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      <img
        src={`${src}?w=${width}&h=${height}&q=${quality}`}
        srcSet={generateSrcSet(src)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          error && 'hidden'
        )}
      />

      {error && (
        <div className="flex items-center justify-center bg-muted text-muted-foreground p-4">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
}
```

## Content Management

### Static Content Organization

```typescript
// content/site-content.ts
export const siteContent = {
  hero: {
    title: 'Transform Your Playlists Into Perfect Workouts',
    subtitle:
      'Mova converts your Spotify playlists into structured workout intervals with AI-powered class generation.',
    cta: {
      primary: 'Download for iOS',
      secondary: 'Download for Android',
    },
  },

  features: [
    {
      id: 'playlist-conversion',
      title: 'Playlist to Workout Conversion',
      description: 'Convert any Spotify playlist into structured workout intervals with customizable timing.',
      icon: 'Music',
      benefits: ['Automatic BPM analysis', 'Customizable interval lengths', 'Smart song ordering'],
    },
    {
      id: 'ai-generation',
      title: 'AI-Powered Class Generator',
      description: 'Generate complete fitness classes with AI that understands your coaching style.',
      icon: 'Sparkles',
      benefits: ['Personalized to your style', 'Music and movement sync', 'Instant class creation'],
    },
    {
      id: 'offline-support',
      title: 'Offline Workout Support',
      description: 'Download classes and work out anywhere, even without internet connection.',
      icon: 'Download',
      benefits: ['Full offline functionality', 'Pre-cached music metadata', 'Sync when connected'],
    },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Certified Personal Trainer',
      company: 'FitLife Studio',
      content:
        'Mova has completely transformed how I create workout playlists. What used to take hours now takes minutes, and my clients love the perfectly timed intervals.',
      image: '/images/testimonials/sarah-johnson.jpg',
      rating: 5,
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'Group Fitness Instructor',
      company: 'Elite Fitness',
      content:
        'The AI class generator is incredible. It learns my teaching style and creates classes that feel like I made them myself. My participants have noticed the improvement.',
      image: '/images/testimonials/marcus-chen.jpg',
      rating: 5,
    },
  ],

  pricing: {
    free: {
      title: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Basic playlist conversion',
        'Up to 5 saved workouts',
        'Standard interval timing',
        'Community support',
      ],
      cta: 'Get Started Free',
    },
    pro: {
      title: 'Pro',
      price: '$9.99',
      period: 'month',
      features: [
        'Unlimited playlist conversions',
        'AI class generation',
        'Advanced customization',
        'Priority support',
        'Offline mode',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
  },
};

// Type-safe content access
export type SiteContent = typeof siteContent;
export type Feature = (typeof siteContent.features)[0];
export type Testimonial = (typeof siteContent.testimonials)[0];
```

## Development Commands

```bash
# Development
bun dev                        # Start development server with hot reload
bun run start                  # Production server

# Building
bun run build                  # Build for production
bun run build:analyze          # Build with bundle analysis
bun run preview                # Preview production build

# Code Quality
bun run lint                   # ESLint (if configured)
bun run format                 # Prettier formatting
bun run type-check             # TypeScript validation

# Dependencies
bun install                    # Install dependencies
bun update                     # Update dependencies
```

## Common Anti-Patterns to Avoid

❌ **Don't:**

- Use Node.js patterns (use Bun-specific APIs)
- Mix TailwindCSS versions (stick to v4)
- Skip SEO optimization for marketing pages
- Forget to track user interactions and conversions
- Use heavy JavaScript unnecessarily
- Ignore Core Web Vitals and performance metrics
- Skip accessibility considerations
- Hardcode content (use structured content management)

✅ **Do:**

- Use modern React 19 patterns and features
- Implement proper SEO meta tags and structured data
- Optimize images and assets for performance
- Use semantic HTML and proper accessibility
- Track key marketing metrics and conversions
- Implement proper error boundaries and fallbacks
- Use responsive design principles
- Test across different devices and browsers

## Integration with Mova Platform

### Deep Linking to Mobile App

```typescript
// components/sections/CTASection.tsx
export function CTASection() {
  const handleAppDownload = (platform: 'ios' | 'android') => {
    const analytics = useAnalytics();

    analytics.track({
      name: 'app_download_initiated',
      properties: { platform, location: 'cta_section' },
    });

    const links = {
      ios: 'https://apps.apple.com/app/mova-fitness',
      android: 'https://play.google.com/store/apps/details?id=com.mova.app',
    };

    // Try deep link first, fallback to store
    const deepLink = `mova://open?utm_source=website&utm_campaign=cta`;
    window.location.href = deepLink;

    // Fallback to app store after delay
    setTimeout(() => {
      window.open(links[platform], '_blank');
    }, 2000);
  };

  return (
    <section className="bg-primary/5 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to Transform Your Workouts?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of fitness professionals who use Mova to create perfect workout experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => handleAppDownload('ios')}
            className="text-lg px-8 py-3"
          >
            Download for iOS
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleAppDownload('android')}
            className="text-lg px-8 py-3"
          >
            Download for Android
          </Button>
        </div>
      </div>
    </section>
  );
}
```

Remember: You're building a marketing website that needs to convert visitors effectively while showcasing the Mova platform. Focus on performance, SEO, accessibility, and compelling user experience that drives app downloads and user engagement.
