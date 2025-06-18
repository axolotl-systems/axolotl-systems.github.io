# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based website for Axolotl Systems, a solo consultancy run by Anne Schuth (PhD in Search Algorithms). The site specializes in presenting search algorithms, recommender systems, and platform engineering consulting services.

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve site locally with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build
```

### Common Tasks
```bash
# Clean generated files
bundle exec jekyll clean

# Build and watch for changes
bundle exec jekyll build --watch

# Serve with drafts
bundle exec jekyll serve --drafts
```

## Architecture

### Site Structure
- **Jekyll 4.x static site generator**
- **Sass for styling** with modular approach (`_sass/` directory)
- **Dark theme only** using custom color palette
- **Mobile-first responsive design**
- **SEO optimization** with jekyll-seo-tag plugin

### Key Directories
- `_layouts/`: Page templates (default.html)
- `_includes/`: Reusable components (header.html, footer.html)
- `_sass/`: Modular Sass files (base, layout, components, utilities)
- `assets/`: Static assets (CSS, JS, images)
- `_config.yml`: Site configuration and navigation

### Design System
- **Color Palette**: Dark theme with accent blue (#3B82F6)
  - Primary background: #1F2937
  - Secondary background: #374151
  - Text: #F9FAFB / #D1D5DB
- **Typography**: Inter font family
- **Components**: Modular CSS with BEM-like naming

### Content Structure
- **Homepage**: Hero section with services overview
- **About**: Personal background emphasizing Anne's experience at Spotify, Google, DPG Media, Blendle
- **Services**: Three core areas (Search, Recommender Systems, Platform Engineering)
- **Contact**: Contact form with business positioning

## Content Guidelines

### Tone and Voice
- **Personal, not corporate**: Solo consultant, not company language
- **Opinionated but professional**: Strong technical opinions backed by experience
- **Direct and honest**: Less marketing hype, more European/Dutch directness
- **Technical expertise**: PhD-level knowledge with practical application

### Business Positioning
- Anne Schuth as individual consultant (not "we" language)
- Focus on software development, not just search/recommendations
- Emphasis on practical results over theoretical approaches
- Experience at scale (Spotify, Google) with startup agility

## Technical Notes

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

### Key Features
- Sticky navigation with mobile toggle
- Contact form with client-side validation
- Hero image integration
- Card-based service presentation
- SEO meta tags and structured data

### Performance Considerations
- Sass compilation with compression
- Optimized images in assets/images/
- Minimal JavaScript for navigation and forms
- Jekyll plugins for sitemap and SEO