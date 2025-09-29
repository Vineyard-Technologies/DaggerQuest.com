![DaggerQuest Website Graphic](images/website.png)

### The official website for *DaggerQuest* - Now built with React!

## ⚔️ Play Now

**Play DaggerQuest at: [DaggerQuest.com](https://daggerquest.com/)**

## 🏗️ Structure

*DaggerQuest* is embedded directly onto the homepage and playable within the browser. You can also see the latest news posts, read the guide, download wallpapers and more.

The website has been completely refactored to use **React** with **Vite** as the build tool, providing:
- ⚡ Fast development with hot reload
- 📱 Modern React components with hooks
- 🎯 Client-side routing with React Router
- 🔍 SEO optimization with react-helmet-async
- 📦 Optimized production builds

## 🚀 Development

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/Vineyard-Technologies/DaggerQuest.com.git
cd DaggerQuest.com
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The development server will start at `http://localhost:5173` with hot reload enabled.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Project Structure

```
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Header.jsx      # Site navigation
│   │   ├── Footer.jsx      # Site footer
│   │   ├── SEO.jsx         # SEO meta tags
│   │   └── Analytics.jsx   # Google Analytics
│   ├── pages/         # Page components
│   │   ├── Home.jsx        # Homepage with game iframe
│   │   ├── News.jsx        # News listing with pagination
│   │   ├── Media.jsx       # Media gallery
│   │   ├── Guide.jsx       # Game guide with search
│   │   ├── Support.jsx     # Support form
│   │   └── ...
│   ├── App.jsx        # Main app component with routing
│   └── main.jsx       # React entry point
├── public/            # Static assets
│   ├── game/              # Game files
│   ├── images/            # Images and wallpapers
│   └── style.css          # Main stylesheet
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
└── package.json       # Dependencies and scripts
```

## 📄 Website Pages

- **Homepage** - Embedded *DaggerQuest* client with React components
- **News** - Latest updates and announcements with React pagination
- **Guide** - Gameplay instructions and tips with search functionality
- **Media** - Screenshots and promotional materials gallery
- **Support** - Help and contact information with embedded Google Form
- **Privacy Policy** & **Terms of Use** - Legal documents

## 🚀 Deployment

### Building for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files:
- Minified JavaScript and CSS
- Static assets from `public/` directory
- SEO-optimized HTML files

### Deployment Instructions

1. **Build the project**
```bash
npm run build
```

2. **Deploy the `dist/` folder** to your web server or CDN

3. **Configure routing** - Ensure your server redirects all routes to `index.html` for React Router to work:

**For GitHub Pages:**
- The build includes proper routing configuration

**For Apache (.htaccess):**
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

**For Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Environment Variables

The application automatically detects the production environment (`daggerquest.com`) for:
- Google Analytics tracking
- Google AdSense ads
- Production-specific features

## 🔧 Technical Features

### React Components
- **SEO Component** - Dynamic meta tags and structured data
- **Analytics Component** - Google Analytics integration
- **Responsive Header/Footer** - Mobile-friendly navigation
- **Page Components** - Modular page structure

### Performance Optimizations
- Font preloading for web fonts
- Image optimization
- Code splitting with Vite
- CSS minification
- JavaScript bundling and minification

### SEO Features
- Dynamic meta tags per page
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Canonical URLs
- Sitemap generation

### Backwards Compatibility
- All existing URLs work with React Router
- Game assets remain unchanged
- Static files preserved in public directory
- CSS styling maintained

## 📋 Related Repositories

- [**DaggerQuest**](https://github.com/Vineyard-Technologies/DaggerQuest) - The main repository for the *DaggerQuest* codebase.
- [**DaggerQuest Test Realm**](https://github.com/Vineyard-Technologies/DaggerQuest-Test-Realm) - The test realm for *DaggerQuest* - See a preview of updates before they go live.
- [**Overlord**](https://github.com/Vineyard-Technologies/Overlord) - An render pipeline management tool used to generated assets for *DaggerQuest*.
- [**CAFfeine**](https://github.com/Vineyard-Technologies/CAFfeine) - An automation and testing framework for *DaggerQuest* and Construct 3 in general.

## ✒️ License

This project is licensed under the [AGPL 3.0 License](https://www.gnu.org/licenses/agpl-3.0.html.en) - see the [LICENSE](LICENSE) file for details.