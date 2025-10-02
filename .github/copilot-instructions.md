# DaggerQuest.com - AI Coding Instructions

## Project Overview
DaggerQuest.com is a React-based website hosting an HTML5 game made with Construct 3. The game runs in a same-origin iframe on the homepage (`/public/game/`), with the React app providing the marketing site, news system, and SEO infrastructure.

## Architecture Patterns

### Build & Deploy Setup
- **Development**: `npm run dev` (Vite dev server on :5173)
- **Build**: `npm run build` outputs to `/docs` (GitHub Pages deployment)
- **Production Detection**: Code checks `window.location.hostname === "daggerquest.com"` for production features (AdSense, Analytics)

### Key File Structure
```
src/
├── components/     # Reusable components (SEO, Analytics, Header, Footer)
├── pages/         # Route components (Home has game iframe)
├── data/          # newsData.js - centralized news content
├── config/        # pageMetadata.js - SEO metadata per route
└── hooks/         # useScrollAnimation.js - intersection observer
```

### Data Management Patterns
- **News System**: All posts defined in `src/data/newsData.js` array, referenced by components and routes
- **SEO Metadata**: Centralized in `src/config/pageMetadata.js` with structured data support
- **Page Routes**: Dynamic routes like `/news/:slug` map to static data entries

### Component Conventions
- **SEO Component**: Every page uses `<SEO title="" description="" />` with schema.org structured data
- **Production Features**: AdSense/Analytics wrapped in hostname checks
- **Responsive Design**: Uses `desktop-only`/`mobile-only` CSS classes, game not available on mobile
- **Animation**: Use `useScrollAnimation` hook + CSS classes `.fade-in-element` → `.visible`

### Styling System
- **Tailwind CSS v4**: Custom color scheme (background: #111111, primary: #ffe7b0)
- **Custom Fonts**: Cinzel and Grenze for medieval/fantasy theming
- **Build Optimization**: Vite splits vendor code, removes console.logs in production

### Development Workflow
- Game files in `/public/game/` served statically
- News posts added to `newsData.js` array with corresponding route components in `/pages/`
- SEO metadata added to `pageMetadata.js` for new routes
- Production hostname detection enables ads/analytics automatically

## Critical Integration Points
- **Game Embedding**: Homepage iframe src="/game/index.html" (same-origin)
- **News System**: Central data file feeds both listing page and individual post routes
- **SEO Infrastructure**: Every page requires SEO component with proper metadata
- **Production Features**: AdSense/Analytics only active on daggerquest.com domain