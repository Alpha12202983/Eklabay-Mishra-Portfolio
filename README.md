# Eklabay Mishra — Award-Winning Portfolio Website

An ultra-luxury, high-performance, dark-themed interactive portfolio built for **Eklabay Mishra**. Inspired by world-class digital experiences on Awwwards, Vercel, Linear, and Stripe.

---

## 🌟 Highlights & Key Features

- **Aurora & Glassmorphism Aesthetics**: Built with deep space palette (`#07080c`), aurora mesh gradients, glass cards, and glowing borders.
- **Canvas Particle Field**: HTML5 Canvas reactive particle background with spring cursor repulsion.
- **Dual-Layer Custom Cursor**: Physics-based trailing dual cursor with magnetic hover states.
- **Interactive Project Drawers**: Detailed modal case studies for all 6 projects with technical challenges, solutions, and stack breakdowns.
- **100% Resume Fidelity**: Features Eklabay's full internship experience at *NNIIT Hyderabad*, 6 major projects, 4 certifications, and 3 academic milestones.
- **Filterable Skills Matrix**: Categorized interactive grid for Languages, Frameworks, Databases, Tools, and Core Engineering.
- **Interactive Contact Form & Direct Resume Download**: Includes integrated toast feedback and downloadable resume PDF.
- **SEO & Performance Optimized**: Complete with Open Graph, Twitter Cards, Schema.org JSON-LD, `sitemap.xml`, `robots.txt`, and `manifest.json`.

---

## 📁 Directory Structure

```
eklabay_portfolio/
├── index.html                  # Main Single-Page Application
├── css/
│   ├── variables.css           # Design Tokens, Gradients, Colors
│   ├── style.css               # Core Styles & Glass Components
│   ├── animations.css          # CSS Keyframes & Aurora Movement
│   └── responsive.css          # Viewport Breakpoints (Mobile to Ultra-Wide)
├── js/
│   ├── loader.js               # Preloader Screen Controller
│   ├── cursor.js               # Dual Cursor Physics
│   ├── particles.js            # Interactive HTML5 Canvas Field
│   ├── animations.js           # Scroll Reveal, Typewriter & Counters
│   └── main.js                 # Project Drawer System & Form Logic
├── assets/
│   ├── images/
│   │   ├── profile.jpg         # Profile Photo
│   │   └── projects/           # High-Res Project Case Study Graphics
│   ├── resume/
│   │   └── Eklabay_Mishra_Resume.pdf
│   └── favicon.svg             # Vector Logo Favicon
├── robots.txt                  # Search Engine Directives
├── sitemap.xml                 # XML Sitemap
├── manifest.json               # Web App Manifest
└── README.md
```

---

## 🚀 Local Preview & Development

To preview the website locally using any standard static file server:

```bash
# Option 1: Using Python 3 HTTP Server
python3 -m http.server 8000

# Option 2: Using Node npx serve
npx serve .
```

Open `http://localhost:8000` in your web browser.

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages
1. Push this directory to a GitHub repository: `git push -u origin main`
2. Go to **Repository Settings** -> **Pages**.
3. Under **Build and deployment**, select `main` branch and `/` root directory.
4. Click **Save**.

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify-cli deploy --prod
```
