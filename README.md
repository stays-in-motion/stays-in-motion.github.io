# Stays in Motion - Marketing Website

A modern marketing website for the Mova fitness platform, built with Bun, React, and TailwindCSS. Features a clean design, interactive components, and fast performance using Bun's native bundling capabilities.

## 🏗️ Architecture Overview

This website uses **Bun's native web stack** for maximum performance and developer experience:

- **⚡ Runtime**: Bun (not Node.js) for fast builds and development
- **⚙️ Server**: Bun.serve() with native routing and hot reload
- **⚛️ Frontend**: React 19 with TypeScript
- **🎨 Styling**: TailwindCSS v4 with Radix UI components
- **📦 Bundling**: Bun's built-in bundler (no Webpack/Vite needed)
- **🔥 Development**: Hot module reloading with instant updates

```
src/
├── index.tsx        # Bun.serve() server with routing
├── index.html       # Main HTML template with React imports
├── frontend.tsx     # React app entry point
├── App.tsx          # Main application component
├── components/      # Reusable UI components
└── lib/            # Utility functions and configurations
```

## 🚀 Quick Start

### Prerequisites

- **Bun** (latest version) - [Install here](https://bun.sh)
- **Modern browser** for development and testing

### 1. Install Dependencies

```bash
# Fast dependency installation with Bun
bun install
```

### 2. Start Development

```bash
# Hot reload development server
bun dev

# Server runs at http://localhost:3000 with:
# - Instant hot module reloading
# - Browser console forwarding
# - TypeScript compilation
```

### 3. Build for Production

```bash
# Build optimized production bundle
bun run build

# Start production server
bun start

# Preview built site
bun run preview
```

## 🔧 Development Commands

### Main Workflow

```bash
bun dev              # Hot reload development (recommended)
bun start            # Production server
bun run build        # Production build
bun run preview      # Serve built files locally
```

### Build Options

```bash
bun run build              # Standard build
bun run build:pages        # Optimized build with minification and source maps
```

## 🛠️ Tech Stack Deep Dive

### Bun Native Features

- **Zero Config**: No webpack.config.js, vite.config.js, or complex setup
- **Built-in Bundling**: Automatic TypeScript, JSX, and CSS processing
- **Hot Reloading**: Instant updates without losing application state
- **Fast Installs**: Lightning-fast package installation and caching
- **Native APIs**: Built-in file serving, routing, and WebSocket support

### Frontend Stack

- **React 19**: Latest React with concurrent features
- **TypeScript**: Full type safety with automatic compilation
- **TailwindCSS v4**: Utility-first styling with latest features
- **Radix UI**: Accessible, unstyled component primitives
- **Lucide Icons**: Beautiful, consistent iconography

### Development Experience

- **Instant Feedback**: Sub-second hot reloads
- **Type Safety**: TypeScript checking without separate build step
- **Modern CSS**: PostCSS processing and CSS imports
- **Browser Integration**: Console logs forwarded to terminal

## 🏛️ Architecture Details

### Bun.serve() Routing

```typescript
// Native routing with HTTP methods
const server = serve({
  routes: {
    "/*": index,                    // Serve React app for all routes
    "/api/hello": {                 // API endpoints
      GET: (req) => Response.json({...}),
      PUT: (req) => Response.json({...}),
    },
    "/api/hello/:name": (req) => {  // Dynamic parameters
      return Response.json({ name: req.params.name });
    },
  },
  development: {
    hmr: true,                      // Hot module reloading
    console: true,                  // Browser console forwarding
  },
});
```

### HTML + React Integration

```html
<!-- index.html - Direct imports work! -->
<html>
  <head>
    <link rel="stylesheet" href="./styles/globals.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./frontend.tsx"></script>
  </body>
</html>
```

### Component Architecture

- **Radix UI Primitives**: Accessible components with custom styling
- **TailwindCSS**: Utility classes for rapid UI development
- **TypeScript**: Full type safety across components and props
- **React Hook Form**: Form handling with Zod validation

## 📋 Key Features

### Marketing Website Essentials

- **Landing Page**: Hero section with clear value proposition
- **Feature Showcase**: Interactive demonstrations of Mova capabilities
- **API Testing**: Built-in tools for testing backend integration
- **Responsive Design**: Mobile-first approach with tablet/desktop optimization
- **Performance**: Fast loading with optimized bundles

### Developer Experience

- **Instant Builds**: Bun's native bundler for sub-second compilation
- **Hot Reloading**: Preserve component state during development
- **Type Safety**: Comprehensive TypeScript without configuration
- **Modern CSS**: TailwindCSS v4 with latest features
- **Component Library**: Radix UI for accessible, customizable components

### Production Ready

- **Optimized Builds**: Minification, tree shaking, and source maps
- **Static Generation**: Export static files for CDN deployment
- **Browser Support**: Modern browser compatibility
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🎨 Design System

### TailwindCSS v4 Features

```css
/* Native CSS layer support */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
  }
}

/* Automatic dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
  }
}
```

### Component Library

- **Button**: Multiple variants with hover/focus states
- **Card**: Content containers with proper spacing
- **Form**: Input fields with validation styling
- **Navigation**: Responsive header and mobile menu

### Responsive Design

- **Mobile First**: Tailwind's responsive prefix system
- **Flexible Grid**: CSS Grid and Flexbox layouts
- **Touch Friendly**: Proper touch targets and gestures
- **Performance**: Optimized images and lazy loading

## 🚀 Deployment

### Static Site Generation

```bash
# Build static files for deployment
bun run build:pages

# Output directory: ./dist/
# Deploy to: Vercel, Netlify, GitHub Pages, or any static host
```

### Production Server

```bash
# Self-hosted with Bun
NODE_ENV=production bun start

# Or use process manager
pm2 start "bun start" --name stays-in-motion-site
```

### Environment Configuration

```bash
# No .env file needed - Bun loads automatically
PORT=3000                    # Server port (optional)
NODE_ENV=production          # Environment mode
```

## 🐛 Troubleshooting

### Common Issues

**Bun installation problems:**

```bash
# Reinstall Bun
curl -fsSL https://bun.sh/install | bash

# Verify installation
bun --version
```

**Hot reload not working:**

```bash
# Restart development server
bun dev

# Clear Bun cache if needed
bun pm cache rm
```

**TypeScript errors:**

```bash
# Bun handles TypeScript natively, no additional setup needed
# Check for syntax errors in .tsx files
```

**Build failures:**

```bash
# Clear node_modules and reinstall
rm -rf node_modules bun.lockb
bun install
```

### Development Tips

1. **Use Bun APIs**: Leverage `Bun.file()`, `Bun.serve()` instead of Node.js equivalents
2. **Hot Reloading**: Save changes and see instant updates without losing state
3. **Fast Installs**: Use `bun add` for lightning-fast package additions
4. **Native TypeScript**: No separate compilation step needed
5. **CSS Imports**: Import CSS files directly in components

## 📈 Performance Benefits

### Bun Advantages

- **3x faster installs** compared to npm/yarn
- **20x faster bundling** compared to Webpack/Vite
- **Instant hot reloads** with state preservation
- **Native TypeScript** compilation without separate tools
- **Smaller bundles** with automatic optimization

### Runtime Performance

- **Server-side rendering** with React 19 features
- **Optimized CSS** with TailwindCSS purging
- **Image optimization** with proper loading strategies
- **Bundle splitting** for efficient caching

## 🤝 Contributing

### Code Standards

```bash
# Bun automatically formats and type-checks
bun dev              # Development with hot reload
bun run build        # Validate production build
```

### Adding Features

1. **Components**: Create in `src/components/` with TypeScript
2. **Styles**: Use TailwindCSS utilities with Radix UI primitives
3. **API Routes**: Add to Bun.serve() routes object
4. **Pages**: Extend React Router or add static pages

### Best Practices

- **Use Bun APIs**: Prefer native Bun functions over Node.js
- **TypeScript First**: Write typed components and functions
- **Mobile First**: Design for mobile, enhance for desktop
- **Performance**: Optimize images and minimize bundle size

## 📄 License

This project is part of the Mova fitness platform monorepo.
