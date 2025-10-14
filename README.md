# Lyola Website - Project Overview

A luxury Nigerian Aso Ebi tailoring website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Current Status

**WORKING**: Basic homepage with hero section, about snippet, collections grid, and process section
**NEXT**: Complete remaining homepage components, build core pages

## 📁 Project Structure

```
lyola-website/
├── public/
│   ├── images/
│   │   ├── hero/                  # Hero slider images (3 slides)
│   │   ├── products/              # Collection preview images
│   │   ├── fabrics/               # [Future] Fabric swatch images
│   │   ├── patterns/              # [Future] African print SVG patterns
│   │   └── icons/                 # [Future] Custom icons
│   └── fonts/                     # [Future] Custom fonts
│
├── src/
│   ├── app/                       # Next.js 14 App Router
│   │   ├── layout.tsx             ✅ Main layout with Header/Footer
│   │   ├── page.tsx               ✅ Homepage with 4 sections
│   │   ├── globals.css            ✅ Tailwind + custom styles
│   │   ├── about/                 📋 [TODO] About page
│   │   ├── collections/           📋 [TODO] Product browsing
│   │   ├── material-selector/     📋 [TODO] Custom design wizard
│   │   ├── ai-tryon/              📋 [TODO] AI try-on feature
│   │   ├── booking/               📋 [TODO] Consultation booking
│   │   ├── culture-guide/         📋 [TODO] Style guide
│   │   ├── contact/               📋 [TODO] Contact form
│   │   └── api/                   📋 [TODO] API routes
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx         ✅ Navigation with logo, mobile menu
│   │   │   └── Footer.tsx         ✅ Links, contact info, newsletter
│   │   └── home/
│   │       ├── HeroSection.tsx    ✅ 3-slide carousel with CTAs
│   │       ├── AboutSnippet.tsx   ✅ About + 3 feature cards
│   │       ├── FeaturedCollections.tsx ✅ 3 collection cards
│   │       ├── HowItWorks.tsx     ✅ 4-step process
│   │       ├── AITryOnTeaser.tsx  📋 [TODO] AI try-on preview
│   │       ├── RecentWork.tsx     📋 [TODO] Portfolio gallery
│   │       └── Testimonials.tsx   📋 [TODO] Customer reviews
│   │
│   ├── lib/
│   │   └── utils.ts               ✅ Helper functions (cn, formatters)
│   │
│   ├── styles/
│   │   └── themes.ts              ✅ Design system colors/typography
│   │
│   ├── types/
│   │   └── index.ts               ✅ TypeScript interfaces
│   │
│   └── [hooks, data]/             📋 [TODO] Custom hooks, data files
│
├── tailwind.config.js             ✅ Custom colors, utilities
├── next.config.js                 ✅ Image domains, optimization
├── postcss.config.js              ✅ Tailwind processing
└── package.json                   ✅ Dependencies installed
```

## 🎨 Design System

### Colors
```css
Primary Pink:     #E91E63
Primary Pink Light: #FCE4EC
Primary Pink Dark:  #C2185B
Accent Gold:      #D4AF37
Accent Gold Light: #F4E5B8
Neutral Cream:    #FDFBF7
Neutral Cream Dark: #F5F1E8
Neutral Charcoal: #2C2C2C
Neutral Charcoal Light: #4A4A4A
```

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, clean)
- **Accent**: Abril Fatface (decorative, for logo)

### Layout Utilities
- `container-lyola`: Responsive container with padding
- `section-padding`: Consistent vertical spacing (py-16 lg:py-24)
- `btn-primary/secondary/outline`: Button variants
- `heading-lg/md/sm`: Typography scales
- `rounded-lyola`: 12px border radius

## 🏠 Homepage Sections (Current)

### 1. Hero Section ✅
- **File**: `src/components/home/HeroSection.tsx`
- **Features**: 3-slide carousel, navigation arrows, slide indicators
- **Content**: Hero images with overlay text and CTAs
- **Images**: Using Unsplash placeholders (needs real photos)

### 2. About Snippet ✅
- **File**: `src/components/home/AboutSnippet.tsx`
- **Features**: Brand story + 3 feature cards
- **Cards**: "Crafted with Passion", "Premium Quality", "Personal Service"

### 3. Featured Collections ✅
- **File**: `src/components/home/FeaturedCollections.tsx`
- **Features**: 3 collection cards with hover effects
- **Collections**: Men's, Women's, Couples Sets
- **Images**: Using Unsplash placeholders

### 4. How It Works ✅
- **File**: `src/components/home/HowItWorks.tsx`
- **Features**: 4-step process with gradient badges
- **Steps**: Choose Style → AI Fitting → Measurements → Delivery

## 📋 TODO: Complete Homepage

### Missing Components
1. **AITryOnTeaser**: Preview of AI try-on feature
2. **RecentWork**: Portfolio gallery of completed garments
3. **Testimonials**: Customer reviews carousel

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion (installed, not implemented)
- **Forms**: React Hook Form + Zod (installed, not used yet)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Type check
npm run type-check
```

## 📱 Responsive Design

- **Mobile First**: All components built mobile-first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation**: Hamburger menu on mobile, horizontal on desktop

## 🔄 Current State vs. Final Vision

### ✅ What Works Now
- Clean, professional layout
- Brand colors implemented
- Responsive navigation
- Hero carousel functionality
- Hover effects and animations
- TypeScript types defined

### 📋 What's Missing
- Real photography (currently using placeholders)
- Remaining homepage components (3 sections)
- All other pages (collections, booking, etc.)
- AI try-on integration
- Contact forms
- Database integration

## 🎯 Next Steps

### Priority 1: Complete Homepage
1. Build AITryOnTeaser component
2. Build RecentWork gallery
3. Build Testimonials carousel

### Priority 2: Core Pages
1. Collections page with filtering
2. Material Selector (multi-step wizard)
3. AI Try-On page
4. Booking system

### Priority 3: Content & Polish
1. Replace placeholder images
2. Add real content
3. SEO optimization
4. Performance optimization

## 📞 Contact & Links

- **Website**: [In Development]
- **Repository**: [Current Directory]
- **Framework Docs**: [Next.js 14](https://nextjs.org/docs)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/docs)