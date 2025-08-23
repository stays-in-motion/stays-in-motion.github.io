# Stays in Motion Site Development Guide

Marketing website for the Mova fitness platform using Bun + React + TailwindCSS.

## Quick Start

```bash
# Development
bun run dev              # Hot reload development server (port 3000)
bun run build            # Build for production
bun run preview          # Preview production build

# Quality
bun run lint             # ESLint validation
bun run type-check       # TypeScript validation
bun test                 # Run test suite
```

## Architecture

- **Runtime**: Bun (not Node.js)
- **Framework**: React 19 with Bun.serve()
- **Styling**: TailwindCSS v4 + Radix UI components
- **Build**: Bun's built-in bundler (no Vite/Webpack)
- **Testing**: Bun test with React Testing Library

## Project Structure

```
stays-in-motion-site/
├── src/
│   ├── App.tsx              # Main application component
│   ├── index.tsx            # Entry point
│   ├── components/
│   │   ├── ui/              # Radix UI components
│   │   ├── sections/        # Page sections (Hero, About, etc.)
│   │   └── Navigation.tsx   # Main navigation
│   ├── data/
│   │   └── changelog-*.ts   # Changelog data
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── build.ts                 # Bun build script
└── package.json            # Dependencies and scripts
```

## Development Patterns

### Bun Server Pattern

```typescript
// index.tsx - Entry point with Bun.serve()
import App from './App';

Bun.serve({
  routes: {
    '/': () => new Response(/* HTML with React app */),
    '/api/*': handleApi,
  },
  development: {
    hmr: true,
    console: true,
  },
});
```

### Component Structure

```typescript
// Use TailwindCSS v4 classes
export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-6">
          Transform Your Playlists Into Workouts
        </h1>
        <Button className="bg-white text-blue-600 hover:bg-gray-100">
          Download Now
        </Button>
      </div>
    </section>
  );
}
```

### Radix UI Integration

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function FeatureCard({ title, description }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
```

### Theme System

```typescript
// Theme toggle with system preference detection
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
```

## Styling Guidelines

### TailwindCSS v4 Usage

- Use utility classes for rapid prototyping
- Follow mobile-first responsive design
- Leverage Tailwind's design tokens for consistency

### Component Variants

```typescript
// Use class-variance-authority for component variants
import { cva } from 'class-variance-authority';

const buttonVariants = cva('inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
```

## Testing

### Component Testing

```typescript
import { test, expect } from "bun:test";
import { render, screen } from "@testing-library/react";
import { HeroSection } from "../components/sections/HeroSection";

test("renders hero section with title", () => {
  render(<HeroSection />);
  expect(screen.getByText(/Transform Your Playlists/)).toBeInTheDocument();
});
```

### Integration Testing

```typescript
test("navigation works correctly", async () => {
  render(<App />);

  const downloadButton = screen.getByText(/Download Now/);
  fireEvent.click(downloadButton);

  expect(screen.getByText(/Download Section/)).toBeVisible();
});
```

## Build & Deploy

### Bun Build Script

```typescript
// build.ts - Custom build configuration
import { build } from 'bun';

const result = await build({
  entrypoints: ['./src/index.tsx'],
  outdir: './dist',
  target: 'browser',
  minify: true,
  splitting: true,
});
```

### Deployment

The site is a static single-page application that can be deployed to:

- Vercel (recommended)
- Netlify
- Cloudflare Pages
- Any static hosting service

## Environment Variables

No environment variables required for basic functionality. Add to `.env.local` if needed:

```bash
# Optional analytics or API keys
VITE_ANALYTICS_ID=your-analytics-id
```

## Coordination Files

- **Working notes**: `../SCRATCHPAD.md` (temporary monorepo coordination)
- **Status tracking**: `../STATUS.md` (committed milestone tracking)
- **Strategic plan**: `../MASTER-PLAN.md` (committed roadmap)

## Common Tasks

- **Add new section**: Create component in `src/components/sections/`
- **Update content**: Edit data files in `src/data/`
- **Styling changes**: Use TailwindCSS utility classes
- **Add UI component**: Use Radix UI primitives in `src/components/ui/`
- **Performance optimization**: Leverage Bun's built-in bundling

## Performance Targets

- Lighthouse score: 95+
- First Contentful Paint: < 1.2s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Bundle size: < 500KB compressed

## SEO & Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Alt text for images
- Proper heading hierarchy
- Meta tags and Open Graph
- Mobile-responsive design
